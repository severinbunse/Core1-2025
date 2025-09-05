// Select all list items
const nameItems = document.querySelectorAll('.name-item');

nameItems.forEach((item) => {
    // Create audio object for each item and preload
    const audio = new Audio(item.dataset.audio);
    audio.preload = 'auto';

    // Desktop hover events
    item.addEventListener('mouseenter', () => {
        audio.play();
    });

    item.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0; // Reset audio to the beginning
    });

    // Mobile / touch events
    item.addEventListener('touchstart', () => {
        audio.play();
    });

    item.addEventListener('touchend', () => {
        audio.pause();
        audio.currentTime = 0;
    });
});
