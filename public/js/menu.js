const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');

menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');

    menuToggle.classList.toggle('is-active', isOpen);

    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
});

const portfolioToggle = document.querySelector('.portfolio-toggle');
const portfolioSubmenu = document.querySelector('.portfolio-submenu');

portfolioToggle.addEventListener('click', () => {
    const isOpen = portfolioSubmenu.classList.toggle('is-open');

    portfolioToggle.classList.toggle('is-active', isOpen);
    portfolioToggle.setAttribute('aria-expanded', isOpen);
});