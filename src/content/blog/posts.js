import groupProject from "./group-project-retrospective.md?raw";
import erpProject from "./building-college-erp.md?raw";
import vpsDeployment from "./deploying-fullstack-on-vps.md?raw";
import interviewPrep from "./interview-prep-journey.md?raw";
import buildingProjects from "./things-i-learned-building-projects.md?raw";

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, content: raw };

  const frontmatter = {};
  match[1].split("\n").forEach((line) => {
    const sep = line.indexOf(": ");
    if (sep > 0) {
      const key = line.slice(0, sep).trim();
      let value = line.slice(sep + 2).trim();
      if (value.startsWith("[") && value.endsWith("]")) {
        value = JSON.parse(value.replace(/'/g, '"'));
      }
      frontmatter[key] = value;
    }
  });

  return { frontmatter, content: match[2].trim() };
}

const rawPosts = [
  { slug: "building-college-erp", raw: erpProject },
  { slug: "deploying-fullstack-on-vps", raw: vpsDeployment },
  { slug: "interview-prep-journey", raw: interviewPrep },
  { slug: "things-i-learned-building-projects", raw: buildingProjects },
  { slug: "group-project-retrospective", raw: groupProject },
];

export const blogPosts = rawPosts.map(({ slug, raw }) => {
  const { frontmatter, content } = parseFrontmatter(raw);
  return {
    slug,
    title: frontmatter.title || slug,
    date: frontmatter.date || "",
    excerpt: frontmatter.excerpt || "",
    readTime: frontmatter.readTime || "",
    tags: frontmatter.tags || [],
    content,
  };
});
