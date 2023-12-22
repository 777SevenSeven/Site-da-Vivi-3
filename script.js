let menu = document.querySelector('#menu-icon');
let barradenavegação = document.querySelector('.barradenavegação');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    barradenavegação.classList.toggle('aberto');
}

const scroll = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

scroll.reveal('.logo',{delay: 200, origin: 'left'});
scroll.reveal('.barra-de-navegação',{delay: 400, origin: 'top'});
scroll.reveal('.botão-principal',{delay: 520, origin: 'right'});

scroll.reveal('.home-texto span',{delay: 600, origin: 'top'});
scroll.reveal('.home-texto h1',{delay: 680, origin: 'left'});
scroll.reveal('.home-texto p',{delay: 750, origin: 'right'});
scroll.reveal('.botão-principal',{delay: 860, origin: 'left'});

scroll.reveal('.compartilhar',{delay: 950, origin: 'bottom'});
scroll.reveal('.home-imagem',{delay: 1000, origin: 'right'});
