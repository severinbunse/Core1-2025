const nameItems = document.querySelectorAll('.name-item');

nameItems.forEach((item) => {
    const audio = new Audio(item.dataset.audio);
    audio.preload = 'auto';

    const link = item.querySelector('a');

    item.addEventListener('touchstart', (e) => {
        // Prevent the default link behavior so we can control when navigation happens
        e.preventDefault();

        // Play audio
        audio.currentTime = 0;
        audio.play().catch(() => {});

        // Apply hover effect
        link.classList.add('hover-touch');
    });

    item.addEventListener('touchend', (e) => {
        // Stop audio
        audio.pause();
        audio.currentTime = 0;

        // Remove hover effect
        link.classList.remove('hover-touch');

        // Navigate to link manually
        if (link && link.href) {
            window.location = link.href;
        }
    });
});
