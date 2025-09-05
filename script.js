const nameItems = document.querySelectorAll('.name-item');

nameItems.forEach((item) => {
    const audio = new Audio(item.dataset.audio);
    audio.preload = 'auto';

    const link = item.querySelector('a');

    item.addEventListener('touchstart', (e) => {
        // Only prevent default for the link to stop immediate navigation
        if (e.target === link) e.preventDefault();

        audio.currentTime = 0;
        audio.play().catch(() => {});

        link.classList.add('hover-touch');
    });

    item.addEventListener('touchend', (e) => {
        audio.pause();
        audio.currentTime = 0;

        link.classList.remove('hover-touch');

        // Navigate only if the touch ended on the link
        if (e.target === link && link.href) {
            window.location = link.href;
        }
    });
});
