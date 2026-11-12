const PCN_EDITORIAL_PAGES = new Set(['sumario.html', 'glossario.html', 'expediente.html']);
const PCN_THEMATIC_PAGES = new Set([
    '1-territorio.html', '2-demografia.html', '3-educacao.html', '4-saude.html',
    '5-inclusao-social.html', '6-previdencia-social.html', '7-seguranca.html',
    '8-habitacao-e-saneamento.html', '9-mercado.html', '10-economia.html', '11-pib.html',
    '12-financas-publicas.html', '13-balanca-comercial.html', '14-meio-ambiente.html',
    '15-ciencia-e-tecnologia.html', '16-infraestrutura.html'
]);

function currentPcnPage() {
    return location.pathname.split('/').pop() || 'index.html';
}

function accessibilityMenuHtml() {
    return `
    <li class="nav-item position-relative">
        <button id="acess-open-btn" class="nav-link border-0 bg-transparent" type="button" title="Acessibilidade" aria-controls="acessibilidadeMenu" aria-expanded="false">
            <i class="bi bi-universal-access" aria-hidden="true"></i> <span class="d-none d-xl-inline">Acessibilidade</span>
        </button>
        <div id="acessibilidadeMenu" class="acess-dropdown" hidden>
            <div class="acess-section-title">Visão</div>
            <div class="acess-row"><button id="acess-contrast" class="acess-control" type="button">Alto contraste</button><button id="acess-night" class="acess-control" type="button">Modo noturno</button></div>
            <div class="acess-section-title">Cores</div>
            <div class="acess-row"><button id="acess-grayscale" class="acess-control" type="button">Escala em cinza</button></div>
            <div class="acess-section-title">Tamanho da fonte</div>
            <div class="acess-row"><button id="font-dec" class="acess-control" type="button">A-</button><button id="font-reset" class="acess-control" type="button">A</button><button id="font-inc" class="acess-control" type="button">A+</button></div>
            <div class="acess-section-title">Daltonismo</div>
            <div class="acess-row"><button id="dalton-prot" class="acess-control" type="button">Protanopia</button><button id="dalton-deut" class="acess-control" type="button">Deuteranopia</button><button id="dalton-trit" class="acess-control" type="button">Tritanopia</button><button id="dalton-off" class="acess-control" type="button">Normal</button></div>
            <div class="acess-section-title">Leitura e legibilidade</div>
            <div class="acess-row"><button id="acess-dislexia" class="acess-control" type="button">Modo dislexia</button><button id="acess-reading" class="acess-control" type="button">Modo leitura</button><button id="acess-links" class="acess-control" type="button">Destacar links</button></div>
            <div class="acess-section-title">Movimento</div>
            <div class="acess-row"><button id="reduce-motion" class="acess-control" type="button">Reduzir animações</button></div>
            <div class="acess-section-title">Geral</div>
            <div class="acess-row"><button id="acess-reset" class="acess-control acess-reset" type="button">Restaurar tudo</button></div>
        </div>
    </li>`;
}

function navbarHtml() {
    return `
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0" id="navbar" aria-label="Navegação principal">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5"><h1>FAPESPA</h1></a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Alternar navegação"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto p-4 p-lg-0 align-items-lg-center">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#pcn">PCN</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#principais-temas">Temas</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#sobre">Sobre</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#contato">Contato</a></li>
                ${accessibilityMenuHtml()}
            </ul>
        </div>
    </nav>`;
}

function footerHtml() {
    return `
    <footer id="contato" class="footer-main">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h2 class="h5 footer-title mb-4">Sobre FAPESPA</h2>
                    <p class="small text-light">Fundação Amazônia de Amparo a Estudos e Pesquisas, promovendo ciência, tecnologia e inovação para o desenvolvimento do estado.</p>
                    <div class="social-icons mt-4">
                        <a href="https://www.instagram.com/fapespa/" target="_blank" rel="noopener noreferrer" class="social-link" title="Instagram" aria-label="Instagram"><i class="bi bi-instagram" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/FapespaPA" target="_blank" rel="noopener noreferrer" class="social-link" title="Facebook" aria-label="Facebook"><i class="bi bi-facebook" aria-hidden="true"></i></a>
                        <a href="https://x.com/fapespa" target="_blank" rel="noopener noreferrer" class="social-link" title="X" aria-label="X"><i class="bi bi-twitter" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h2 class="h5 footer-title mb-4">Contato</h2>
                    <ul class="list-unstyled small text-light">
                        <li class="mb-3"><i class="bi bi-geo-alt me-2" aria-hidden="true"></i><span>Av. Presidente Vargas, 670</span></li>
                        <li class="mb-3"><i class="bi bi-telephone me-2" aria-hidden="true"></i><span>+55 (91) 3323-2550</span></li>
                        <li class="mb-3"><i class="bi bi-clock me-2" aria-hidden="true"></i><span>Seg–Sex: 8h às 14h</span></li>
                        <li><i class="bi bi-envelope me-2" aria-hidden="true"></i><a href="mailto:contato@fapespa.pa.gov.br">contato@fapespa.pa.gov.br</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h2 class="h5 footer-title mb-4">Produtos</h2>
                    <ul class="list-unstyled small">
                        <li class="mb-2"><a href="https://www.fapespa.pa.gov.br/anuario-estatistico-do-para-2/" target="_blank" rel="noopener noreferrer">Anuário Estatístico</a></li>
                        <li class="mb-2"><a href="https://www.fapespa.pa.gov.br/radar-de-indicadores-das-ri/" target="_blank" rel="noopener noreferrer">Radar de Indicadores</a></li>
                        <li class="mb-2"><a href="https://www.fapespa.pa.gov.br/para-no-contexto-nacional-2/" target="_blank" rel="noopener noreferrer">Pará no Contexto Nacional</a></li>
                        <li class="mb-2"><a href="https://www.fapespa.pa.gov.br/estatistica-municipal/" target="_blank" rel="noopener noreferrer">Estatística Municipal</a></li>
                        <li><a href="https://www.fapespa.pa.gov.br/para-em-numeros/" target="_blank" rel="noopener noreferrer">Pará em Números</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h2 class="h5 footer-title mb-4">Localização</h2>
                    <div class="map-embed rounded"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.61483842183!2d-48.4907923!3d-1.4589201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a488a1b633b497%3A0xf63d2e2601a4e1e8!2sFunda%C3%A7%C3%A3o%20Amaz%C3%B4nia%20de%20Amparo%20a%20Estudos%20e%20Pesquisas%20-%20FAPESPA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localização da FAPESPA"></iframe></div>
                </div>
            </div>
        </div>
    </footer>
    <div class="footer-copyright text-center"><div class="container"><small>© Pará no Contexto Nacional 2024. Todos os direitos reservados. <a href="https://www.fapespa.pa.gov.br/">FAPESPA</a></small></div></div>
    <button type="button" id="btnTop" aria-label="Voltar ao topo" title="Voltar ao topo"><i class="bi bi-arrow-up" aria-hidden="true"></i></button>`;
}

function injectPcnSharedLayout() {
    const existingNavbar = document.querySelector('.navbar');
    if (existingNavbar) existingNavbar.outerHTML = navbarHtml();
    else document.body.insertAdjacentHTML('afterbegin', navbarHtml());

    const existingFooter = document.querySelector('#footer, #footer1, #contato.footer-main, .footer-main');
    const oldCopyright = [...document.querySelectorAll('.footer-copyright, .copyright')];
    const oldTopButtons = [...document.querySelectorAll('.back-to-top, #btnTop')];
    if (existingFooter) existingFooter.outerHTML = footerHtml();
    else document.body.insertAdjacentHTML('beforeend', footerHtml());
    oldCopyright.forEach((element) => element.isConnected && element.remove());
    oldTopButtons.forEach((element) => element.isConnected && element.remove());
}

function pageHeaderHtml() {
    return '<div class="container-fluid page-header mb-5" aria-hidden="true"><div class="container text-center py-5"></div></div>';
}

function introHtml(title, description, stats) {
    return `
    <section class="container pcn-page-intro">
        <div class="pcn-page-intro-card">
            <span class="pcn-kicker">PCN 2024</span>
            <h1 class="pcn-page-title">${title}</h1>
            <p class="pcn-page-subtitle">${description}</p>
            ${stats ? `<div class="pcn-stats-grid">${stats.map(([value, label]) => `<div class="pcn-stat"><strong>${value}</strong><span>${label}</span></div>`).join('')}</div>` : ''}
        </div>
    </section>`;
}

function enhancePageStructure(page) {
    if (page === 'project.html') document.body.classList.add('pcn-maps-page');
    if (PCN_THEMATIC_PAGES.has(page)) document.body.classList.add('pcn-thematic-page');
    if (PCN_EDITORIAL_PAGES.has(page)) document.body.classList.add('pcn-editorial-page');

    if ((PCN_THEMATIC_PAGES.has(page) || page === 'project.html') && !document.querySelector('.page-header')) {
        document.querySelector('.navbar').insertAdjacentHTML('afterend', pageHeaderHtml());
    }

    if (PCN_THEMATIC_PAGES.has(page) && !document.querySelector('.pcn-page-intro')) {
        const title = document.title.split('|')[0].trim();
        const content = document.querySelector('body > .container-xxl, main > .container-xxl, .container-xxl');
        if (content) {
            content.insertAdjacentHTML('beforebegin', introHtml(title, `Consulte as tabelas e indicadores de ${title.toLocaleLowerCase('pt-BR')} do Pará no Contexto Nacional 2024.`));
        }
    }

    if (page === 'project.html' && !document.querySelector('.pcn-page-intro')) {
        const content = document.querySelector('body > .container-xxl, .container-xxl');
        if (content) content.insertAdjacentHTML('beforebegin', introHtml('Mapas', 'Explore e baixe os mapas temáticos do Pará no Contexto Nacional 2024.', [['16', 'Temas'], ['84', 'Mapas'], ['PNG', 'Formato']]));
    }
}

function initializeAccessibility() {
    const root = document.documentElement;
    const menu = document.getElementById('acessibilidadeMenu');
    const opener = document.getElementById('acess-open-btn');
    if (!menu || !opener) return;

    let announcer = document.getElementById('acess-announcer');
    if (!announcer) {
        announcer = document.createElement('div');
        announcer.id = 'acess-announcer';
        announcer.className = 'sr-only';
        announcer.setAttribute('aria-live', 'polite');
        document.body.prepend(announcer);
    }

    const modes = ['a11y-contrast', 'a11y-night', 'a11y-grayscale', 'a11y-dyslexia', 'a11y-reading', 'a11y-links', 'a11y-reduce-motion', 'a11y-protanopia', 'a11y-deuteranopia', 'a11y-tritanopia'];
    const colorModes = ['a11y-protanopia', 'a11y-deuteranopia', 'a11y-tritanopia'];
    let fontSize = Number(localStorage.getItem('pcn-font-size')) || 100;
    const announce = (message) => { announcer.textContent = message; };
    const persist = () => {
        localStorage.setItem('pcn-a11y', JSON.stringify(modes.filter((mode) => root.classList.contains(mode))));
        localStorage.setItem('pcn-font-size', String(fontSize));
    };
    const toggle = (mode, label) => { root.classList.toggle(mode); announce(`${label} ${root.classList.contains(mode) ? 'ativado' : 'desativado'}`); persist(); };
    const setColor = (mode, label) => { colorModes.forEach((item) => root.classList.remove(item)); if (mode) root.classList.add(mode); announce(label); persist(); };
    const on = (id, handler) => document.getElementById(id)?.addEventListener('click', handler);

    try { (JSON.parse(localStorage.getItem('pcn-a11y')) || []).forEach((mode) => modes.includes(mode) && root.classList.add(mode)); }
    catch (_) { localStorage.removeItem('pcn-a11y'); }
    root.style.fontSize = `${fontSize}%`;

    opener.addEventListener('click', () => {
        const opening = menu.hidden;
        menu.hidden = !opening;
        opener.setAttribute('aria-expanded', String(opening));
        if (opening) menu.querySelector('button')?.focus();
    });
    on('acess-contrast', () => toggle('a11y-contrast', 'Alto contraste'));
    on('acess-night', () => toggle('a11y-night', 'Modo noturno'));
    on('acess-grayscale', () => toggle('a11y-grayscale', 'Escala em cinza'));
    on('acess-dislexia', () => toggle('a11y-dyslexia', 'Modo dislexia'));
    on('acess-reading', () => toggle('a11y-reading', 'Modo leitura'));
    on('acess-links', () => toggle('a11y-links', 'Destaque de links'));
    on('reduce-motion', () => toggle('a11y-reduce-motion', 'Redução de animações'));
    on('dalton-prot', () => setColor('a11y-protanopia', 'Filtro para protanopia ativado'));
    on('dalton-deut', () => setColor('a11y-deuteranopia', 'Filtro para deuteranopia ativado'));
    on('dalton-trit', () => setColor('a11y-tritanopia', 'Filtro para tritanopia ativado'));
    on('dalton-off', () => setColor('', 'Filtro de cores desativado'));
    on('font-dec', () => { fontSize = Math.max(80, fontSize - 10); root.style.fontSize = `${fontSize}%`; announce('Fonte reduzida'); persist(); });
    on('font-reset', () => { fontSize = 100; root.style.fontSize = '100%'; announce('Tamanho da fonte restaurado'); persist(); });
    on('font-inc', () => { fontSize = Math.min(150, fontSize + 10); root.style.fontSize = `${fontSize}%`; announce('Fonte aumentada'); persist(); });
    on('acess-reset', () => { modes.forEach((mode) => root.classList.remove(mode)); fontSize = 100; root.style.fontSize = '100%'; localStorage.removeItem('pcn-a11y'); localStorage.removeItem('pcn-font-size'); announce('Preferências restauradas'); });

    document.addEventListener('click', (event) => {
        if (!menu.hidden && !menu.contains(event.target) && !opener.contains(event.target)) {
            menu.hidden = true;
            opener.setAttribute('aria-expanded', 'false');
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !menu.hidden) {
            menu.hidden = true;
            opener.setAttribute('aria-expanded', 'false');
            opener.focus();
        }
    });
}

function initializePortfolio() {
    const filters = [...document.querySelectorAll('#portfolio-flters [data-filter]')];
    const items = [...document.querySelectorAll('.portfolio-container .portfolio-item')];
    if (!filters.length || !items.length) return;

    const applyFilter = (filter) => {
        filters.forEach((button) => {
            const active = button.dataset.filter === filter;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
        items.forEach((item) => { item.hidden = filter !== '*' && !item.matches(filter); });
    };
    filters.forEach((button) => {
        button.setAttribute('role', 'button');
        button.setAttribute('tabindex', '0');
        button.setAttribute('aria-pressed', 'false');
        const activate = () => applyFilter(button.dataset.filter || '*');
        button.addEventListener('click', activate);
        button.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); } });
    });
    applyFilter(filters[0].dataset.filter || '*');
}

function initializePcnPage() {
    initializeAccessibility();
    initializePortfolio();

    document.getElementById('spinner')?.classList.remove('show');
    document.querySelectorAll('a[target="_blank"]').forEach((link) => link.setAttribute('rel', 'noopener noreferrer'));

    const topButton = document.getElementById('btnTop');
    if (topButton) {
        const update = () => { topButton.hidden = window.scrollY <= 300; };
        topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        window.addEventListener('scroll', update, { passive: true });
        update();
    }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializePcnPage);
else initializePcnPage();
