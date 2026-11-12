import { promises as fs } from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const thematic = {
  '1-territorio.html': 'Território', '2-demografia.html': 'Demografia', '3-educacao.html': 'Educação',
  '4-saude.html': 'Saúde', '5-inclusao-social.html': 'Inclusão Social', '6-previdencia-social.html': 'Previdência Social',
  '7-seguranca.html': 'Segurança', '8-habitacao-e-saneamento.html': 'Habitação e Saneamento',
  '9-mercado.html': 'Mercado de Trabalho', '10-economia.html': 'Economia', '11-pib.html': 'Produto Interno Bruto',
  '12-financas-publicas.html': 'Finanças Públicas', '13-balanca-comercial.html': 'Balança Comercial',
  '14-meio-ambiente.html': 'Meio Ambiente', '15-ciencia-e-tecnologia.html': 'Ciência e Tecnologia',
  '16-infraestrutura.html': 'Infraestrutura'
};
const editorial = ['glossario.html', 'sumario.html', 'expediente.html', 'project.html'];

const accessMenu = `<li class="nav-item position-relative"><button id="acess-open-btn" class="nav-link border-0 bg-transparent" type="button" title="Acessibilidade" aria-controls="acessibilidadeMenu" aria-expanded="false"><i class="bi bi-universal-access" aria-hidden="true"></i> <span class="d-none d-lg-inline">Acessibilidade</span></button><div id="acessibilidadeMenu" class="acess-dropdown" hidden><div class="acess-section-title">Visão</div><div class="acess-row"><button id="acess-contrast" class="acess-control" type="button">Alto contraste</button><button id="acess-night" class="acess-control" type="button">Modo noturno</button></div><div class="acess-section-title">Cores</div><div class="acess-row"><button id="acess-grayscale" class="acess-control" type="button">Escala em cinza</button></div><div class="acess-section-title">Tamanho da fonte</div><div class="acess-row"><button id="font-dec" class="acess-control" type="button">A-</button><button id="font-reset" class="acess-control" type="button">A</button><button id="font-inc" class="acess-control" type="button">A+</button></div><div class="acess-section-title">Daltonismo</div><div class="acess-row"><button id="dalton-prot" class="acess-control" type="button">Protanopia</button><button id="dalton-deut" class="acess-control" type="button">Deuteranopia</button><button id="dalton-trit" class="acess-control" type="button">Tritanopia</button><button id="dalton-off" class="acess-control" type="button">Normal</button></div><div class="acess-section-title">Leitura e legibilidade</div><div class="acess-row"><button id="acess-dislexia" class="acess-control" type="button">Modo dislexia</button><button id="acess-reading" class="acess-control" type="button">Modo leitura</button><button id="acess-links" class="acess-control" type="button">Destacar links</button></div><div class="acess-section-title">Movimento</div><div class="acess-row"><button id="reduce-motion" class="acess-control" type="button">Reduzir animações</button></div><div class="acess-section-title">Geral</div><div class="acess-row"><button id="acess-reset" class="acess-control acess-reset" type="button">Restaurar tudo</button></div></div></li>`;

const nav = `<!-- PCN NAV START --><nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0" id="navbar" aria-label="Navegação principal"><a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5"><h1 class="m-3">FAPESPA</h1></a><button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Alternar navegação"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarCollapse"><ul class="navbar-nav ms-auto p-4 p-lg-0"><li class="nav-item"><a class="nav-link" href="index.html">Home</a></li><li class="nav-item"><a class="nav-link" href="index.html#pcn">PCN</a></li><li class="nav-item"><a class="nav-link" href="index.html#sobre">Sobre</a></li><li class="nav-item"><a class="nav-link" href="index.html#contato">Contato</a></li>${accessMenu}</ul></div></nav><!-- PCN NAV END -->`;

const footer = `<!-- PCN FOOTER START --><footer class="footer-main" id="contato"><div class="container py-5"><div class="row g-5"><div class="col-lg-3 col-md-6"><h5 class="footer-title mb-4">Sobre FAPESPA</h5><p class="small text-light">Fundação Amazônia de Amparo a Estudos e Pesquisas, promovendo ciência, tecnologia e inovação para o desenvolvimento do estado.</p><div class="social-icons mt-4"><a href="https://www.instagram.com/fapespa/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="https://www.facebook.com/FapespaPA" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="https://x.com/fapespa" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Twitter"><i class="bi bi-twitter"></i></a></div></div><div class="col-lg-3 col-md-6"><h5 class="footer-title mb-4">Contato</h5><ul class="list-unstyled small text-light"><li class="mb-3"><i class="bi bi-geo-alt me-2"></i>Av. Presidente Vargas, 670</li><li class="mb-3"><i class="bi bi-telephone me-2"></i>+55 (91) 3323-2550</li><li class="mb-3"><i class="bi bi-clock me-2"></i>Seg–Sex: 8h às 14h</li><li><i class="bi bi-envelope me-2"></i><a href="mailto:contato@fapespa.pa.gov.br">contato@fapespa.pa.gov.br</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-title mb-4">Produtos</h5><ul class="list-unstyled small"><li class="mb-2"><a href="https://www.fapespa.pa.gov.br/anuario-estatistico-do-para-2/" target="_blank" rel="noopener noreferrer">Anuário Estatístico</a></li><li class="mb-2"><a href="https://www.fapespa.pa.gov.br/radar-de-indicadores-das-ri/" target="_blank" rel="noopener noreferrer">Radar de Indicadores</a></li><li class="mb-2"><a href="https://www.fapespa.pa.gov.br/para-no-contexto-nacional-2/" target="_blank" rel="noopener noreferrer">Pará no Contexto Nacional</a></li><li class="mb-2"><a href="https://www.fapespa.pa.gov.br/estatistica-municipal/" target="_blank" rel="noopener noreferrer">Estatística Municipal</a></li><li><a href="https://www.fapespa.pa.gov.br/para-em-numeros/" target="_blank" rel="noopener noreferrer">Pará em Números</a></li></ul></div><div class="col-lg-3 col-md-6"><h5 class="footer-title mb-4">Localização</h5><div class="map-embed rounded"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.61483842183!2d-48.4907923!3d-1.4589201" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localização FAPESPA"></iframe></div></div></div></div></footer><div class="footer-copyright text-center py-4"><div class="container"><small class="text-muted">© Pará no Contexto Nacional 2024. Todos os direitos reservados. <a href="https://www.fapespa.pa.gov.br/" class="text-muted text-decoration-none">FAPESPA</a></small></div></div><button id="btnTop" type="button" title="Voltar ao topo" aria-label="Voltar ao topo"><i class="bi bi-arrow-up"></i></button><!-- PCN FOOTER END -->`;

function styles(html) {
  html = html.replace(/\s*<link[^>]+href=["']css\/(?:style|styleModal|pcn-layout)\.css["'][^>]*>/gi, '');
  if (!html.includes('css/anuario-template.css')) html = html.replace('</head>', '  <link href="css/anuario-template.css" rel="stylesheet">\n  <link href="css/pcn-content.css" rel="stylesheet">\n</head>');
  return html;
}

function replaceNav(html) {
  if (html.includes('<!-- PCN NAV START -->')) return html.replace(/<!-- PCN NAV START -->[\s\S]*?<!-- PCN NAV END -->/, nav);
  return html.replace(/<nav class="navbar[\s\S]*?<\/nav>/i, nav);
}

function thematicContent(body) {
  const mains = [...body.matchAll(/<main\b[^>]*>/gi)];
  if (mains.length) { const last = mains[mains.length - 1]; const start = last.index + last[0].length; const end = body.indexOf("</main>", start); if (end >= 0) return body.slice(start, end).trim(); }
  return body.replace(/(?:<div class="container-fluid pcn-page-header[\s\S]*?<\/section>\s*)+/gi, "").replace(/<main\b[^>]*>|<\/main>/gi, "").trim();
}

function addFooter(html) {
  html = html.replace(/<!-- PCN FOOTER START -->[\s\S]*?<!-- PCN FOOTER END -->/g, '');
  html = html.replace(/\s*<div class="container-fluid footer-copyright[\s\S]*?<\/div>\s*(?=<footer|<!-- PCN FOOTER START -->)/gi, '');
  return html.replace(/\s*<script src="assets\/vendor\/bootstrap\/js\/bootstrap\.bundle\.min\.js"><\/script>/i, `\n${footer}\n<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>`);
}

for (const [file, title] of Object.entries(thematic)) {
  let html = await fs.readFile(path.join(root, file), 'utf8');
  html = styles(html);
  const body = html.match(/<body[^>]*>([\s\S]*?)<script src="assets\/vendor\/bootstrap\/js\/bootstrap\.bundle\.min\.js"><\/script>/i)?.[1];
  if (!body) throw new Error(`Conteúdo não localizado em ${file}`);
  const clean = body.replace(/<!-- PCN NAV START -->[\s\S]*?<!-- PCN NAV END -->/g, '').replace(/<!-- PCN FOOTER START -->[\s\S]*?<!-- PCN FOOTER END -->/g, '').replace(/<div id="acess-announcer"[^>]*><\/div>/g, '').trim();
  const shell = thematicContent(clean).replace(/class="container-xxl ([^"]*)"/, 'class="container-xxl $1 pcn-shell"').replace(/pcn-shell\s+pcn-shell/g, 'pcn-shell');
  const page = `${nav}<div class="container-fluid pcn-page-header mb-5" aria-hidden="true"></div><section class="container pcn-page-intro"><div class="pcn-page-intro-card"><span class="pcn-kicker">PCN 2024</span><h1 class="pcn-page-title">${title}</h1><p class="pcn-page-subtitle">Consulte as tabelas e indicadores de ${title.toLocaleLowerCase('pt-BR')} do Pará no Contexto Nacional 2024.</p></div></section><main>${shell}</main>${footer}`;
  html = html.replace(/<body[^>]*>[\s\S]*?<script src="assets\/vendor\/bootstrap\/js\/bootstrap\.bundle\.min\.js"><\/script>/i, `<body class="pcn-thematic-page"><div id="acess-announcer" class="sr-only" aria-live="polite"></div>${page}<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>`);
  await fs.writeFile(path.join(root, file), html, 'utf8');
}

for (const file of editorial) {
  let html = styles(await fs.readFile(path.join(root, file), 'utf8'));
  html = replaceNav(html);
  html = addFooter(html);
  const bodyClass = file === 'project.html' ? 'pcn-maps-page' : 'pcn-editorial-page';
  html = html.replace(/<body(?:\s+class="[^"]*")?>/i, `<body class="${bodyClass}">`);
  await fs.writeFile(path.join(root, file), html, 'utf8');
}

// A home é reconstruída sempre a partir da versão íntegra armazenada no Git.
// Isso evita carregar o antigo CSS inline e mantém o conteúdo original do PCN.
let home = execFileSync('git', ['show', 'HEAD:index.html'], { cwd: root, encoding: 'utf8', maxBuffer: 2 * 1024 * 1024 });
home = home.replace(/\s*<style>[\s\S]*?<\/style>/i, '');
home = home.replace(/\s*<link[^>]+href=["']css\/(?:style|pcn-layout)\.css["'][^>]*>/gi, '');
home = home.replace(/(<link[^>]+href=["']css\/styleModal\.css["'][^>]*>)/i, '  <link href="css/anuario-template.css" rel="stylesheet">\n$1\n  <link href="css/pcn-content.css" rel="stylesheet">');
home = home.replace(/col-md-6 col-xl-3/g, 'col-md-6');
home = home.replace('href="sumario1.html"', 'href="sumario.html"');
home = home.replace('Veja o sumário do Anuário Estatístico do Pará.', 'Veja o sumário do Pará no Contexto Nacional 2024.');
home = home.replace('Informações sobre a equipe e produção do anuário.', 'Informações sobre a equipe e produção do PCN 2024.');
home = home.replace('href="mapas/mapasPCN2024.rar"', 'href="project.html"');
home = home.replace(/<section class="hero-section-modern[\s\S]*?<\/section>/i, `<section class="hero-section-modern js-reveal is-visible" id="pcn"><div class="hero-background"><img src="img/pcn2024.png" alt="Capa do Pará no Contexto Nacional 2024" class="hero-image" width="1100" height="700" decoding="async" fetchpriority="high"><div class="hero-overlay"></div></div><div class="hero-content"><div class="hero-text-wrapper"><h1 class="hero-title animate-fade-in">Pará no Contexto Nacional</h1><div class="hero-cta-group hero-cta-single animate-fade-in-delay-2"><a href="#" data-content-url="apresentacao.html" data-modal-title="Apresentação" class="btn-hero btn-hero-primary" aria-label="Abrir apresentação em modal" onclick="openCustomModal(event);"><i class="bi bi-play-circle me-2"></i>Apresentação</a></div></div></div></section>`);
home = home.replace(/<script src="https:\/\/code\.jquery\.com\/jquery-[^"]+"><\/script>\s*/i, '');
home = home.replace(/\$\(function \(\) \{[\s\S]*?\n    \}\);/, `document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('spinner')?.classList.remove('show');
      const topButton = document.getElementById('btnTop');
      const updateTopButton = () => { topButton.style.display = window.scrollY > 300 ? 'block' : 'none'; };
      topButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      window.addEventListener('scroll', updateTopButton, { passive: true });
      updateTopButton();
    });`);
await fs.writeFile(path.join(root, 'index.html'), home, 'utf8');

console.log('Template do Anuário aplicado estaticamente a 21 páginas do PCN.');
