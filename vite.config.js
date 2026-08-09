import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { spawn } from 'node:child_process';

function walkNotes(dir, snapshot) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (
      entry.name === '.obsidian' ||
      entry.name === '.git' ||
      entry.name === '.opencode'
    )
      continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walkNotes(full, snapshot);
    else if (entry.isFile()) {
      try {
        snapshot[full] = statSync(full).mtimeMs;
      } catch {
        delete snapshot[full];
      }
    }
  }
  return snapshot;
}

function snapshotsEqual(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if (a[key] !== b[key]) return false;
  }
  return true;
}

function notesWatchPlugin() {
  return {
    name: 'notes-watch',
    apply: 'serve',
    configureServer(server) {
      let snapshot = walkNotes('Notes', {});
      let generating = false;
      const regenerate = () => {
        if (generating) return;
        generating = true;
        const child = spawn(process.execPath, ['scripts/generate-notes.js'], {
          stdio: 'inherit',
        });
        child.once('exit', () => {
          generating = false;
          server.ws.send({ type: 'full-reload' });
        });
      };
      const timer = setInterval(() => {
        const current = walkNotes('Notes', {});
        if (snapshotsEqual(snapshot, current)) return;
        snapshot = current;
        regenerate();
      }, 1500);
      server.httpServer?.once('close', () => clearInterval(timer));
    },
  };
}

export default defineConfig({
  plugins: [react(), notesWatchPlugin()],
});
