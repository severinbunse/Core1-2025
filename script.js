// Select all name items
const nameItems = document.querySelectorAll('.name-item');

nameItems.forEach((item) => {
    const audio = new Audio(item.dataset.audio);
    audio.preload = 'auto';

    // Start audio when swipe (touch) begins
    item.addEventListener('touchstart', (e) => {
        audio.currentTime = 0;
        audio.play().catch(() => {});
    });

    // Stop audio when swipe (touch) ends
    item.addEventListener('touchend', (e) => {
        audio.pause();
        audio.currentTime = 0;
    });
});
