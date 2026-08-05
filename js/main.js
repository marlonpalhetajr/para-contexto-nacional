
function injectPcnSharedLayout() {
    if (document.querySelector('.navbar')) {
        return;
    }

    const navbarHtml = `
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0" id="navbar">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h1 class="m-3">PCN 2024</h1>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-label="Alternar navegação">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto p-4 p-lg-0">
                <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="sumario.html">Sumário</a></li>
                <li class="nav-item"><a class="nav-link" href="glossario.html">Glossário</a></li>
                <li class="nav-item"><a class="nav-link" href="expediente.html">Expediente</a></li>
                <li class="nav-item"><a class="nav-link" href="#footer">Contato</a></li>
            </ul>
        </div>
    </nav>`;

    const headerHtml = `
    <div class="container-fluid page-header mb-2 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center py-3"></div>
    </div>`;

    const footerHtml = `
    <div id="footer" class="container-fluid footer-main mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="footer-title mb-4">Endereço</h4>
                    <p class="mb-2">Avenida Presidente Vargas, nº 670. Belém - PA</p>
                    <p class="mb-2">Fone: (91) 3323-2550</p>
                    <p class="mb-2">Horário: 8h às 14h</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="footer-title mb-4">Produtos</h4>
                    <a class="btn btn-link" href="https://www.fapespa.pa.gov.br/anuario-estatistico-do-para-2/" target="_blank" rel="noopener noreferrer">Anuário Estatístico</a>
                    <a class="btn btn-link" href="https://www.fapespa.pa.gov.br/para-no-contexto-nacional-2/" target="_blank" rel="noopener noreferrer">Pará no Contexto Nacional</a>
                    <a class="btn btn-link" href="https://www.fapespa.pa.gov.br/estatistica-municipal/" target="_blank" rel="noopener noreferrer">Estatística Municipal</a>
                    <a class="btn btn-link" href="https://www.fapespa.pa.gov.br/para-em-numeros/" target="_blank" rel="noopener noreferrer">Pará em Números</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="footer-title mb-4">Links Úteis</h4>
                    <a class="btn btn-link" href="https://www.pa.gov.br/" target="_blank" rel="noopener noreferrer">Governo do Estado do Pará</a>
                    <a class="btn btn-link" href="https://www.fapespa.pa.gov.br/" target="_blank" rel="noopener noreferrer">FAPESPA</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="footer-title mb-4">FAPESPA</h4>
                    <p>Fundação Amazônia de Amparo a Estudos e Pesquisas.</p>
                    <div class="map-embed">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5362681158094!2d-48.498285788249284!3d-1.4525314985276918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48f110f9ae615%3A0xcf262f614c25afcd!2sFAPESPA%20-%20Funda%C3%A7%C3%A3o%20Amaz%C3%B4nia%20de%20Amparo%20a%20Estudos%20e%20Pesquisas!5e0!3m2!1spt-BR!2sbr!4v1698156248379!5m2!1spt-BR!2sbr" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa da FAPESPA"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid footer-copyright py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a href="#">PCN 2024</a>, Todos os direitos reservados.
                </div>
                <div class="col-md-6 text-center text-md-end">
                    Designed By <a href="https://www.fapespa.pa.gov.br/">Fapespa</a>
                </div>
            </div>
        </div>
    </div>
    <button type="button" id="btnTop" aria-label="Voltar ao topo"><i class="bi bi-arrow-up"></i></button>`;

    const spinner = document.getElementById('spinner');
    if (spinner) {
        spinner.insertAdjacentHTML('afterend', navbarHtml + headerHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', navbarHtml + headerHtml);
    }

    document.body.insertAdjacentHTML('beforeend', footerHtml);
}

document.addEventListener('DOMContentLoaded', injectPcnSharedLayout);

$(document).ready(function() {
    $("li[data-filter='.demografia']").click();
});



(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top, #btnTop').fadeIn('slow');
        } else {
            $('.back-to-top, #btnTop').fadeOut('slow');
        }
    });
    $('.back-to-top, #btnTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

