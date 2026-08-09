import { fileURLToPath } from 'node:url';
import { dirname, join, basename, extname } from 'node:path';
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  copyFileSync,
  statSync,
} from 'node:fs';
import matter from 'gray-matter';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const notesDir = join(root, 'Notes');
const assetsDir = join(notesDir, 'assets');
const attachmentsDir = join(notesDir, 'attachments');
const imageOutDir = join(root, 'public', 'notes-assets');
const outFile = join(root, 'src', 'content', 'notes', 'notes.js');

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (
      entry.name === '.obsidian' ||
      entry.name === '.git' ||
      entry.name === '.opencode'
    )
      continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.isFile() && extname(entry.name) === '.md') files.push(full);
  }
  return files;
}

function titleCase(slug) {
  return slug
    .split('-')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ');
}

function fmtDate(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    const y = value.getUTCFullYear();
    const m = String(value.getUTCMonth() + 1).padStart(2, '0');
    const d = String(value.getUTCDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
  return String(value);
}

function toTags(value) {
  if (Array.isArray(value)) return value.map((tag) => String(tag));
  if (typeof value === 'string' && value.trim()) {
    return value
      .split(/[,;\s]+/)
      .map((tag) => tag.trim())
      .filter(Boolean);
  }
  return null;
}

function stripMarkdown(md) {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^\s*>\s?/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/^-{3,}$/gm, '')
    .replace(/[*_~`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const notes = [];
const warnings = [];
const linkIndex = new Map();

for (const file of walk(notesDir)) {
  const { data, content } = matter(readFileSync(file, 'utf8'));
  if (data.publish !== true) continue;

  const slug = basename(file, '.md');
  const note = {
    slug,
    title: data.title || titleCase(slug),
    content,
    dir: dirname(file),
  };
  if (data.date) note.date = fmtDate(data.date);
  const tags = toTags(data.tags);
  if (tags) note.tags = tags;
  notes.push(note);

  for (const key of [
    note.title.toLowerCase(),
    slug.toLowerCase(),
    slug.toLowerCase().replace(/-/g, ' '),
  ]) {
    if (!linkIndex.has(key)) linkIndex.set(key, note);
  }
}

function resolveImage(noteDir, ref) {
  const found = [
    join(noteDir, ref),
    join(assetsDir, ref),
    join(attachmentsDir, ref),
  ].find((p) => existsSync(p) && statSync(p).isFile());
  if (!found) {
    warnings.push(`embed not found: ${ref}`);
    return null;
  }
  mkdirSync(imageOutDir, { recursive: true });
  const fileName = basename(ref);
  const out = join(imageOutDir, fileName);
  if (existsSync(out) && !readFileSync(out).equals(readFileSync(found))) {
    warnings.push(
      `embed name collision in notes-assets: ${fileName} already exists with different content`
    );
  }
  copyFileSync(found, out);
  return fileName;
}

for (const note of notes) {
  let content = note.content.replace(
    /!\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g,
    (match, target, alt) => {
      const fileName = resolveImage(note.dir, target.trim());
      if (!fileName) return '';
      const label = alt && !/^\d+$/.test(alt.trim()) ? alt.trim() : fileName;
      return `![${label}](/notes-assets/${encodeURIComponent(fileName)})`;
    }
  );

  content = content.replace(
    /\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g,
    (match, target, display) => {
      const text = (display || target).trim();
      const linked = linkIndex.get(target.trim().toLowerCase());
      return linked ? `[${text}](/notes/${linked.slug})` : text;
    }
  );

  note.content = content;
  note.excerpt = stripMarkdown(content).slice(0, 160);
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  note.readTime = `${Math.max(1, Math.round(words / 200))} min read`;
}

notes.sort((a, b) => {
  if (a.date && b.date) return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  if (a.date) return -1;
  if (b.date) return 1;
  return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
});

function jsLiteral(value) {
  const json = JSON.stringify(value);
  return `'${json.slice(1, -1).replace(/\\"/g, '"').replace(/'/g, "\\'")}'`;
}

function jsList(values) {
  return `[${values.map((v) => jsLiteral(v)).join(', ')}]`;
}

const rows = notes
  .map(
    (note) =>
      `  {\n` +
      `    slug: ${jsLiteral(note.slug)},\n` +
      `    title: ${jsLiteral(note.title)},\n` +
      (note.date ? `    date: ${jsLiteral(note.date)},\n` : '') +
      `    readTime: ${jsLiteral(note.readTime)},\n` +
      (note.tags ? `    tags: ${jsList(note.tags)},\n` : '') +
      `    excerpt: ${jsLiteral(note.excerpt)},\n` +
      `    content: ${jsLiteral(note.content)},\n` +
      `  },`
  )
  .join('\n');

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(
  outFile,
  `// Auto-generated by scripts/generate-notes.js — do not edit.\nexport const notes = [\n${rows}\n];\n`
);

console.log(`[notes] generated ${notes.length} published note(s)`);
for (const message of warnings) console.log(`[notes] ${message}`);
