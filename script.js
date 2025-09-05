// Select all list items
const nameItems = document.querySelectorAll('.name-item');

nameItems.forEach((item) => {
    const audio = new Audio(item.dataset.audio);
    audio.preload = 'auto';

    // ------------------------
    // Desktop: hover or click
    // ------------------------
    item.addEventListener('mouseenter', () => {
        audio.play().catch(() => {}); // play on hover
    });

    item.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0;
    });

    item.addEventListener('click', () => {
        audio.play().catch(() => {}); // play on click
    });

    // ------------------------
    // Mobile: right swipe
    // ------------------------
    let startX = 0;
    let startY = 0;

    item.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    item.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;

        const dx = endX - startX;
        const dy = endY - startY;

        // Detect mostly horizontal swipe and to the right
        if (Math.abs(dx) > Math.abs(dy) && dx > 50) { // adjust threshold as needed
            audio.play().catch(() => {});
        }
    });
});
