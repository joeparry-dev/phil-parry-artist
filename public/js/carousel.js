const carouselWrappers = document.querySelectorAll('.carousel-wrapper');

carouselWrappers.forEach((wrapper) => {
    const carousel = wrapper.querySelector('.carousel');
    const nextButton = wrapper.querySelector('.carousel-arrow--next');
    const prevButton = wrapper.querySelector('.carousel-arrow--prev');

    nextButton.addEventListener('click', () => {
        const artwork = carousel.querySelector('.carousel-artwork');

        const artworkWidth = artwork.getBoundingClientRect().width;
        const gap = 5;

        carousel.scrollBy({
            left: artworkWidth + gap,
            behavior: 'smooth'
        });
    });

    prevButton.addEventListener('click', () => {
        const artwork = carousel.querySelector('.carousel-artwork');

        const artworkWidth = artwork.getBoundingClientRect().width;
        const gap = 5;

        carousel.scrollBy({
            left: -(artworkWidth + gap),
            behavior: 'smooth'
        });
    });

    function updateArrows() {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;

        prevButton.disabled = carousel.scrollLeft <= 1;
        nextButton.disabled = carousel.scrollLeft >= maxScroll - 1;
    }

    carousel.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);

    updateArrows();

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let hasDragged = false;

    carousel.addEventListener('pointerdown', (event) => {
        if (event.pointerType !== 'mouse' || event.button !== 0) return;

        isDragging = true;
        hasDragged = false;
        carousel.classList.add('is-dragging');
        startX = event.clientX;
        startScrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('pointermove', (event) => {
        if (!isDragging) return;

        const distance = event.clientX - startX;

        if (Math.abs(distance) > 5) {
            hasDragged = true;
        }

        if (hasDragged) {
            carousel.scrollLeft = startScrollLeft - distance;
        }
    });

    function stopDragging() {
        if (!isDragging) return;

        isDragging = false;

        const artwork = carousel.querySelector('.carousel-artwork');
        const artworkWidth = artwork.getBoundingClientRect().width;
        const gap = 5;
        const step = artworkWidth + gap;

        const nearestPosition = Math.round(carousel.scrollLeft / step) * step;

        carousel.classList.remove('is-dragging');

        carousel.scrollTo({
            left: nearestPosition,
            behavior: 'smooth'
        });
    }

    window.addEventListener('pointerup', stopDragging);
    window.addEventListener('pointercancel', stopDragging);
    window.addEventListener('blur', stopDragging);

    carousel.addEventListener('dragstart', (event) => {
        event.preventDefault();
    });

    carousel.addEventListener('click', (event) => {
        if (hasDragged) {
            event.preventDefault();
            hasDragged = false;
        }
    });
});

