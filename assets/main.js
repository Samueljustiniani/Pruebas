// Animación de entrada para los botones
const buttons = document.querySelectorAll('.contact-btn');
buttons.forEach((btn, i) => {
    btn.style.opacity = '0';
    setTimeout(() => {
        btn.style.transition = 'opacity 0.7s';
        btn.style.opacity = '1';
    }, 400 + i * 200);
});

// Animación de logo al hacer clic
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', () => {
        logo.style.transition = 'transform 0.4s';
        logo.style.transform = 'scale(1.15) rotate(-2deg)';
        setTimeout(() => {
            logo.style.transform = 'scale(1)';
        }, 400);
    });
}

// Animación de cards al pasar el mouse
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 12px 40px 0 rgba(0,198,255,0.25)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
});
