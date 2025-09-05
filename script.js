const nameItems = document.querySelectorAll('.name-item');

nameItems.forEach((item) => {
    const audio = new Audio(item.dataset.audio);
    audio.preload = 'auto';

    const link = item.querySelector('a');

    // Touch start: play audio + apply hover style
    item.addEventListener('touchstart', (e) => {
        audio.currentTime = 0;
        audio.play().catch(() => {});

        // Add hover effect
        link.style.fontStyle = 'italic';
    });

    // Touch end: stop audio + remove hover + navigate
    item.addEventListener('touchend', (e) => {
        audio.pause();
        audio.currentTime = 0;

        // Remove hover effect
        link.style.fontStyle = '';

        // Navigate to link
        if (link && link.href) {
            window.location = link.href;
        }
    });
});
