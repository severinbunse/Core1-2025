// Select all list items
const nameItems = document.querySelectorAll('.name-item');

// Add hover event listeners to each name item
nameItems.forEach((item) => {
    const audio = new Audio(item.dataset.audio); // Get audio file from data attribute

    item.addEventListener('mouseenter', () => {
        audio.play();
    });

    item.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0; // Reset audio to the beginning
    });
});
