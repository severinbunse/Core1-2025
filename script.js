const nameItems = document.querySelectorAll('.name-item');

nameItems.forEach((item) => {
    const audio = new Audio(item.dataset.audio);
    audio.preload = 'auto';

    // Flag to track whether audio is playing
    let isPlaying = false;

    // When finger touches the item
    item.addEventListener('touchstart', (e) => {
        if (!isPlaying) {
            audio.currentTime = 0;
            audio.play().catch(() => {});
            isPlaying = true;
        }
    });

    // When finger moves, check if still on this item
    item.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const rect = item.getBoundingClientRect();

        if (
            touch.clientX < rect.left ||
            touch.clientX > rect.right ||
            touch.clientY < rect.top ||
            touch.clientY > rect.bottom
        ) {
            // Finger moved outside this item → stop audio
            if (isPlaying) {
                audio.pause();
                audio.currentTime = 0;
                isPlaying = false;
            }
        } else {
            // Finger is over the item → ensure audio is playing
            if (!isPlaying) {
                audio.currentTime = 0;
                audio.play().catch(() => {});
                isPlaying = true;
            }
        }
    });

    // When finger lifts → stop audio
    item.addEventListener('touchend', () => {
        if (isPlaying) {
            audio.pause();
            audio.currentTime = 0;
            isPlaying = false;
        }
    });
});
