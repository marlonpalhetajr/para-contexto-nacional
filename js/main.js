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
            <div class="acess-section-title">VisÃ£o</div>
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
            <div class="acess-row"><button id="reduce-motion" class="acess-control" type="button">Reduzir animaÃ§Ãµes</button></div>
            <div class="acess-section-title">Geral</div>
            <div class="acess-row"><button id="acess-reset" class="acess-control acess-reset" type="button">Restaurar tudo</button></div>
        </div>
    </li>`;
}

function navbarHtml() {
    return `
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0" id="navbar" aria-label="NavegaÃ§Ã£o principal">
        <a href="https://www.fapespa.pa.gov.br/" target="_blank" rel="noopener noreferrer" class="navbar-brand d-flex align-items-center px-4 px-lg-5"><h1 class="m-3">FAPESPA</h1></a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Alternar navegaÃ§Ã£o"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto p-4 p-lg-0 align-items-lg-center">
                <li class="nav-item"><a class="nav-link" href="index.html#inicio">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#pcn">Pará no Contexto Nacional</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#contato">Contato</a></li>
                ${accessibilityMenuHtml()}
            </ul>
        </div>
    </nav>`;
}

function footerHtml() {
    return `
    <footer id="contato" class="footer-main js-reveal section-break">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h5 class="footer-title mb-4">Sobre FAPESPA</h5>
                    <p class="small text-light">Fundação Amazônia de Amparo a Estudos e Pesquisas, promovendo ciência, tecnologia e inovação para o desenvolvimento do estado.</p>
                    <div class="social-icons mt-4">
                        <a href="https://www.instagram.com/fapespa/" target="_blank" rel="noopener noreferrer" class="social-link" title="Instagram" aria-label="Instagram"><i class="bi bi-instagram" aria-hidden="true"></i></a>
                        <a href="https://www.facebook.com/FapespaPA" target="_blank" rel="noopener noreferrer" class="social-link" title="Facebook" aria-label="Facebook"><i class="bi bi-facebook" aria-hidden="true"></i></a>
                        <a href="https://x.com/fapespa" target="_blank" rel="noopener noreferrer" class="social-link" title="X" aria-label="X"><i class="bi bi-twitter" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="footer-title mb-4">Contato</h5>
                    <ul class="list-unstyled small text-light">
                        <li class="mb-3"><i class="bi bi-geo-alt me-2 text-primary" aria-hidden="true"></i><span>Av. Brg. Protásio, 621 - Marco, Belém - PA</span></li>
                        <li class="mb-3"><i class="bi bi-telephone me-2 text-primary" aria-hidden="true"></i><span>+55 (91) 3323-2550</span></li>
                        <li class="mb-3"><i class="bi bi-clock me-2 text-primary" aria-hidden="true"></i><span>Seg-Sex: 8h às 14h</span></li>
                        <li><i class="bi bi-envelope me-2 text-primary" aria-hidden="true"></i><a href="mailto:contato@fapespa.pa.gov.br" class="text-light text-decoration-none">contato@fapespa.pa.gov.br</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="footer-title mb-4">Produtos</h5>
                    <ul class="list-unstyled small">
                        <li class="mb-2"><a href="https://www.fapespa.pa.gov.br/anuario-estatistico-do-para-2/" target="_blank" rel="noopener noreferrer" class="text-light text-decoration-none">Anuário Estatístico</a></li>
                        <li class="mb-2"><a href="https://www.fapespa.pa.gov.br/radar-de-indicadores-das-ri/" target="_blank" rel="noopener noreferrer" class="text-light text-decoration-none">Radar de Indicadores</a></li>
                        <li class="mb-2"><a href="https://www.fapespa.pa.gov.br/para-no-contexto-nacional-2/" target="_blank" rel="noopener noreferrer" class="text-light text-decoration-none">Pará no Contexto Nacional</a></li>
                        <li class="mb-2"><a href="https://www.fapespa.pa.gov.br/estatistica-municipal/" target="_blank" rel="noopener noreferrer" class="text-light text-decoration-none">Estatística Municipal</a></li>
                        <li><a href="https://www.fapespa.pa.gov.br/para-em-numeros/" target="_blank" rel="noopener noreferrer" class="text-light text-decoration-none">Pará em Números</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="footer-title mb-4">Localização</h5>
                    <div class="map-embed rounded"><iframe src="https://www.google.com/maps?q=Av.%20Brg.%20Prot%C3%A1sio%2C%20621%20-%20Marco%2C%20Bel%C3%A9m%20-%20PA&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localização FAPESPA"></iframe></div>
                </div>
            </div>
        </div>
    </footer>
    <div class="footer-copyright text-center py-4 section-break"><div class="container"><small class="text-muted">© Pará no Contexto Nacional, Todos os direitos reservados. <a href="https://www.fapespa.pa.gov.br/" class="text-muted text-decoration-none">FAPESPA</a></small></div></div>
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
            <span class="pcn-kicker">PCN</span>
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
            content.insertAdjacentHTML('beforebegin', introHtml(title, `Consulte as tabelas e indicadores de ${title.toLocaleLowerCase('pt-BR')} do ParÃ¡ no Contexto Nacional.`));
        }
    }

    if (page === 'project.html' && !document.querySelector('.pcn-page-intro')) {
        const content = document.querySelector('body > .container-xxl, .container-xxl');
        if (content) content.insertAdjacentHTML('beforebegin', introHtml('Mapas', 'Explore e baixe os mapas temÃ¡ticos do ParÃ¡ no Contexto Nacional.', [['16', 'Temas'], ['84', 'Mapas'], ['PNG', 'Formato']]));
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
    on('reduce-motion', () => toggle('a11y-reduce-motion', 'ReduÃ§Ã£o de animaÃ§Ãµes'));
    on('dalton-prot', () => setColor('a11y-protanopia', 'Filtro para protanopia ativado'));
    on('dalton-deut', () => setColor('a11y-deuteranopia', 'Filtro para deuteranopia ativado'));
    on('dalton-trit', () => setColor('a11y-tritanopia', 'Filtro para tritanopia ativado'));
    on('dalton-off', () => setColor('', 'Filtro de cores desativado'));
    on('font-dec', () => { fontSize = Math.max(80, fontSize - 10); root.style.fontSize = `${fontSize}%`; announce('Fonte reduzida'); persist(); });
    on('font-reset', () => { fontSize = 100; root.style.fontSize = '100%'; announce('Tamanho da fonte restaurado'); persist(); });
    on('font-inc', () => { fontSize = Math.min(150, fontSize + 10); root.style.fontSize = `${fontSize}%`; announce('Fonte aumentada'); persist(); });
    on('acess-reset', () => { modes.forEach((mode) => root.classList.remove(mode)); fontSize = 100; root.style.fontSize = '100%'; localStorage.removeItem('pcn-a11y'); localStorage.removeItem('pcn-font-size'); announce('PreferÃªncias restauradas'); });

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

function initializePowerBiEmbeds() {
    document.querySelectorAll('[data-powerbi-url]').forEach((container) => {
        const url = container.dataset.powerbiUrl;
        if (!url || container.querySelector('iframe')) return;

        const title = container.dataset.powerbiTitle || 'Dashboard Power BI';
        const frame = document.createElement('iframe');
        frame.src = url;
        frame.title = title;
        frame.loading = 'lazy';
        frame.allowFullscreen = true;
        frame.referrerPolicy = 'no-referrer-when-downgrade';
        container.classList.add('powerbi-container');
        container.replaceChildren(frame);

        const actions = document.createElement('div');
        actions.className = 'powerbi-actions';
        actions.innerHTML = `<a class="btn btn-outline-primary btn-sm" href="${encodeURI(url)}" target="_blank" rel="noopener noreferrer">Abrir dashboard em nova aba</a>`;
        container.insertAdjacentElement('afterend', actions);
    });
}

function initializeEconomySubthemes() {
    const toggle = document.querySelector('[data-economia-toggle]');
    const panel = document.getElementById('economia-subtemas');
    if (!toggle || !panel) return;

    toggle.addEventListener('click', () => {
        const isHidden = panel.hidden;
        panel.hidden = !isHidden;
        toggle.setAttribute('aria-expanded', String(isHidden));
        toggle.firstChild.nodeValue = isHidden ? 'Ocultar subtemas ' : 'Ver subtemas ';
        if (isHidden) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

function initializeGenericDashboard() {
    const embed = document.getElementById('dashboard-embed');
    if (!embed) return;

    const dashboards = {
        educacao: ['Educação', 'https://app.powerbi.com/view?r=eyJrIjoiZjNmYTBiMTYtMmYxOS00OTg4LTg5YjYtYjVmZTU4ZjQxNzI5IiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        saude: ['Saúde', 'https://app.powerbi.com/view?r=eyJrIjoiYzBlNTAxOGEtNjRmMy00OTUwLWI5MjAtZmJlOGQ2MjhhZDdmIiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        inclusao: ['Inclusão Social', 'https://app.powerbi.com/view?r=eyJrIjoiYjE3M2M5YWEtYzIwMy00MTdiLWJiY2MtZDkwMjdhMTc1OWI3IiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        previdencia: ['Previdência Social', 'https://app.powerbi.com/view?r=eyJrIjoiMGJiNzMxMjUtM2M4ZS00YjY5LWI5YjYtZjU2MjExMzQxNGI1IiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        seguranca: ['Segurança', 'https://app.powerbi.com/view?r=eyJrIjoiYmZjNTZhNmUtZmQyYy00ZjNkLTg3NWItMDAyNDMwZTI3Yjc5IiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        financas: ['Finanças Públicas', 'https://app.powerbi.com/view?r=eyJrIjoiYjY3MzRhNTktZWY0NC00ZWNhLTk5YWEtZTdmODUzZTNjZDk4IiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        balanca: ['Balança Comercial', 'https://app.powerbi.com/view?r=eyJrIjoiNDM5NDNmZjktMDIzNy00MjFiLTkyNWEtOGEyNjIzYTE4MTEyIiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        infraestrutura: ['Infraestrutura', 'https://app.powerbi.com/view?r=eyJrIjoiZDVkOTZkYzgtZDhkYi00ODJlLWEwMmEtN2YxYWZlMGFmMTNiIiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        habitacao: ['Habitação e Saneamento', 'https://app.powerbi.com/view?r=eyJrIjoiNWQ3NzNiOTAtZDY5ZS00M2U0LTlhOWUtMjI0MjliZmY4MGJkIiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        agricultura: ['Agricultura', 'https://app.powerbi.com/view?r=eyJrIjoiMjA2NzZmNDctODViMy00MTZhLTg4ZWYtNjA0MTBjNWIyZjkwIiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        comercio: ['Comércio', 'https://app.powerbi.com/view?r=eyJrIjoiYzY0YWU1MjItZDA0Ny00YTY2LWI4NzgtODEyMzdhMjc1NjQ5IiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        construcao: ['Construção Civil', 'https://app.powerbi.com/view?r=eyJrIjoiZjg5M2YwY2UtMzUwMi00ZGMxLTg3YmUtYWQ4YjVhNTg0ZDkzIiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        extrativa: ['Extrativa e Silvicultura', 'https://app.powerbi.com/view?r=eyJrIjoiNjViZWQ5MTMtOTA0ZS00Njk1LTg4NjgtNTE5YzYwZmJlODNmIiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        industria: ['Indústria', 'https://app.powerbi.com/view?r=eyJrIjoiOTlkYTc3NDAtZjk5My00ZmExLTllNTUtZmIxMDJmNzljMDAzIiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        pecuaria: ['Pecuária', 'https://app.powerbi.com/view?r=eyJrIjoiMzZhNDU5YTItNGE1Yi00N2M4LWIzZjEtYWY1ZmU1ZDE1Yjg3IiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9'],
        servicos: ['Serviços', 'https://app.powerbi.com/view?r=eyJrIjoiZTQxMWNjNjYtMzFiYS00Mzg1LWFmNmMtYzBkYzgxNzg5OTljIiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9']
    };
    const key = new URLSearchParams(location.search).get('tema');
    const [title, url] = dashboards[key] || ['Dashboard', ''];
    document.title = `${title} | Pará no Contexto Nacional`;
    document.getElementById('dashboard-title').textContent = title;
    document.getElementById('dashboard-fallback-title').textContent = `Dashboard de ${title}`;
    document.getElementById('dashboard-description').textContent = `Explore os indicadores de ${title.toLocaleLowerCase('pt-BR')} do Pará em um painel interativo.`;
    embed.dataset.powerbiUrl = url;
    embed.dataset.powerbiTitle = `Dashboard de ${title} do Pará`;
    if (url) initializePowerBiEmbeds();
}

function initializePcnPage() {
    injectPcnSharedLayout();
    initializeAccessibility();
    initializePortfolio();
    initializePowerBiEmbeds();
    initializeEconomySubthemes();
    initializeGenericDashboard();

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
