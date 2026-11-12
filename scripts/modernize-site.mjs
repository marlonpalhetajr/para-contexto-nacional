import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const thematicPages = [
  '1-territorio.html', '2-demografia.html', '3-educacao.html', '4-saude.html',
  '5-inclusao-social.html', '6-previdencia-social.html', '7-seguranca.html',
  '8-habitacao-e-saneamento.html', '9-mercado.html', '10-economia.html', '11-pib.html',
  '12-financas-publicas.html', '13-balanca-comercial.html', '14-meio-ambiente.html',
  '15-ciencia-e-tecnologia.html', '16-infraestrutura.html'
];
const contentPages = [...thematicPages, 'sumario.html', 'glossario.html', 'expediente.html', 'project.html'];

function normalizeDependencies(html) {
  html = html.replace(/<link[^>]+href=["']img\/favicon\.ico["'][^>]*>/gi,
    '<link href="img/logo-para1.png" rel="icon" type="image/png">');
  html = html.replace(/<link[^>]+href=["']https:\/\/cdn\.jsdelivr\.net\/npm\/bootstrap-icons[^"']+["'][^>]*>\s*/gi,
    '<link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">\n');
  html = html.replace(/<link[^>]+href=["']css\/bootstrap\.min\.css["'][^>]*>/gi,
    '<link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">');
  html = html.replace(/<script[^>]+src=["']https:\/\/cdn\.jsdelivr\.net\/npm\/bootstrap[^"']+["'][^>]*><\/script>/gi,
    '<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>');
  return html;
}

function removeLegacyLibraries(html) {
  const legacyCss = [
    /\s*<link[^>]+href=["']lib\/animate\/[^"']+["'][^>]*>/gi,
    /\s*<link[^>]+href=["']lib\/owlcarousel\/[^"']+["'][^>]*>/gi,
    /\s*<link[^>]+href=["']lib\/lightbox\/[^"']+["'][^>]*>/gi
  ];
  const legacyScripts = [
    /\s*<script[^>]+src=["']https:\/\/code\.jquery\.com\/[^"']+["'][^>]*><\/script>/gi,
    /\s*<script[^>]+src=["']lib\/(?:wow|easing|waypoints|owlcarousel|counterup|parallax|isotope|lightbox)\/[^"']+["'][^>]*><\/script>/gi
  ];
  for (const pattern of [...legacyCss, ...legacyScripts]) html = html.replace(pattern, '');
  return html;
}

for (const page of contentPages) {
  const file = path.join(root, page);
  let html = await fs.readFile(file, 'utf8');
  html = normalizeDependencies(html);
  html = removeLegacyLibraries(html);

  if (thematicPages.includes(page)) {
    html = html.replace(/<link[^>]+href=["']https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome[^"']+["'][^>]*>\s*/gi, '');
  }

  if (page === 'project.html') {
    html = html
      .replace(/<link[^>]+href=["']https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome[^"']+["'][^>]*>\s*/gi, '')
      .replace(/class=["']fa fa-eye["']/gi, 'class="bi bi-eye"')
      .replace(/class=["']fa fa-download["']/gi, 'class="bi bi-download"')
      .replace(/class=["']fa fa-link["']/gi, 'class="bi bi-box-arrow-up-right"');
  }

  html = html.replace(/<script src="assets\/vendor\/bootstrap\/js\/bootstrap\.bundle\.min\.js"><\/script>\s*(?:<!-- Template Javascript -->\s*)?<script src="js\/main\.js"><\/script>/gi,
    '<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>\n    <script src="js/main.js"></script>');
  await fs.writeFile(file, html, 'utf8');
}

// The maps catalog no longer needs a placeholder image that only occurred in commented markup.
{
  const file = path.join(root, 'project.html');
  let html = await fs.readFile(file, 'utf8');
  html = html.replace(/<!-- <div class="col-lg-4 col-md-6 portfolio-item inclusaosocial ">[\s\S]*?service-6\.jpg[\s\S]*?<\/div> -->/g, '');
  await fs.writeFile(file, html, 'utf8');
}

const tableRoot = path.join(root, 'tabelas');
async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (/\.html?$/i.test(entry.name)) files.push(full);
  }
  return files;
}

for (const file of await walk(tableRoot)) {
  let html = await fs.readFile(file, 'utf8');
  const relativeRoot = path.relative(path.dirname(file), root).replaceAll(path.sep, '/') || '.';
  if (html.includes('assets/js/tabelas.js')) {
    html = html
      .replace(/(?:\.\.\/)+assets\/css\/tabelas\.css/g, `${relativeRoot}/assets/css/tabelas.css`)
      .replace(/(?:\.\.\/)+assets\/js\/tabelas\.js/g, `${relativeRoot}/assets/js/tabelas.js`);
    await fs.writeFile(file, html, 'utf8');
    continue;
  }
  const title = (html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || 'Tabela PCN 2024').replace(/<[^>]+>/g, '').trim();
  const headEnd = html.indexOf('</head>');
  const styleEnd = html.lastIndexOf('</style>', headEnd);
  let header = '';
  if (styleEnd >= 0 && headEnd > styleEnd) {
    header = html.slice(styleEnd + 8, headEnd)
      .replace(/<script[^>]*assets\/js\/js\.js[^>]*><\/script>/i, '')
      .replace(/<link[^>]*assets\/css\/tabelas\.css[^>]*\/?>/i, '')
      .trim();
    html = html.slice(0, styleEnd + 8) + '\n</head>' + html.slice(headEnd + 7);
  }

  html = html
    .replace(/\s+xmlns(?::\w+)?="[^"]*"/g, '')
    .replace(/\s*<meta\s+name=(?:ProgId|Generator)[^>]*>/gi, '')
    .replace(/\s*<link\s+rel=File-List[^>]*>/gi, '')
    .replace(/\s*x:publishsource="[^"]*"/gi, '')
    .replace(/<head>/i, `<head>\n\t<meta charset="utf-8">\n\t<meta name="viewport" content="width=device-width, initial-scale=1">`)
    .replace(/<\/head>/i, `\t<link href="${relativeRoot}/assets/css/tabelas.css" rel="stylesheet">\n</head>`)
    .replace(/<body[^>]*>/i, `<body>\n${header}\n<main class="table-page" aria-label="${title.replace(/"/g, '&quot;')}">`)
    .replace(/<\/body>/i, `\n</main>\n<script src="${relativeRoot}/assets/js/tabelas.js"></script>\n</body>`);
  await fs.writeFile(file, html, 'utf8');
}

console.log(`Modernizadas ${contentPages.length} páginas e ${(await walk(tableRoot)).length} tabelas.`);
