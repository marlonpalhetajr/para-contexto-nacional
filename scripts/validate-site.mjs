import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const ignoredDirectories = new Set(['.git', 'node_modules', 'drafts']);

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (/\.html?$/i.test(entry.name)) files.push(full);
  }
  return files;
}

const failures = [];
for (const file of await walk(root)) {
  const html = await fs.readFile(file, 'utf8');
  const markup = html.replace(/<!--[\s\S]*?-->/g, '');
  const refs = [...markup.matchAll(/(?:src|href)\s*=\s*["']([^"'#?]+)["']/gi)].map((match) => match[1].trim());
  for (const ref of refs) {
    if (!ref || /^(?:https?:|mailto:|tel:|javascript:|data:|\/\/|\/)/i.test(ref)) continue;
    const target = path.resolve(path.dirname(file), decodeURIComponent(ref));
    try { await fs.access(target); }
    catch { failures.push(`${path.relative(root, file)} -> ${ref}`); }
  }

  const ids = [...markup.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  for (const id of new Set(duplicates)) failures.push(`${path.relative(root, file)} -> id duplicado: ${id}`);
}

if (failures.length) {
  console.error(`Validação falhou (${failures.length} problema(s)):\n${failures.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log('Validação concluída: referências locais e IDs estão consistentes.');
}
