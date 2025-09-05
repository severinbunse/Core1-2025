const nameItems = document.querySelectorAll('.name-item');

nameItems.forEach((item) => {
    const audio = new Audio(item.dataset.audio);
    audio.preload = 'auto';

    // When finger touches the name
    item.addEventListener('touchstart', (e) => {
        audio.currentTime = 0;
        audio.play().catch(() => {});
    });

    // When finger is lifted
    item.addEventListener('touchend', (e) => {
        audio.pause();
        audio.currentTime = 0;

        // Navigate to the link inside this item
        const link = item.querySelector('a');
        if (link && link.href) {
            window.location = link.href;
        }
    });
});
