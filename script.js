const nameItems = document.querySelectorAll('.name-item');

nameItems.forEach((item) => {
    const audio = new Audio(item.dataset.audio);
    audio.preload = 'auto';

    let isPlaying = false;
    let touchStartedOnItem = false;

    // When finger touches the item
    item.addEventListener('touchstart', (e) => {
        audio.currentTime = 0;
        audio.play().catch(() => {});
        isPlaying = true;
        touchStartedOnItem = true;
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
            if (isPlaying) {
                audio.pause();
                audio.currentTime = 0;
                isPlaying = false;
                touchStartedOnItem = false; // canceled swipe
            }
        } else {
            if (!isPlaying) {
                audio.currentTime = 0;
                audio.play().catch(() => {});
                isPlaying = true;
            }
        }
    });

    // When finger lifts → stop audio and navigate if touch started on this item
    item.addEventListener('touchend', (e) => {
        if (isPlaying) {
            audio.pause();
            audio.currentTime = 0;
            isPlaying = false;
        }

        if (touchStartedOnItem) {
            // Navigate to link inside this item
            const
