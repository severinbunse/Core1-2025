// Select all list items
const nameItems = document.querySelectorAll('.name-item');

nameItems.forEach((item) => {
    // Get audio file from data attribute
    const audio = new Audio(item.dataset.audio);
    audio.preload = 'auto'; // preload for smoother playback

    // ------------------------
    // Desktop hover
    // ------------------------
    item.addEventListener('mouseenter', () => {
        audio.play().catch(() => {}); // play on hover
    });

    item.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0; // reset audio
    });

    // ------------------------
    // Click / tap (desktop + mobile)
    // ------------------------
    item.addEventListener('click', (e) => {
        audio.play().catch(() => {}); // play audio
        // Link navigation happens automatically after this
    });
});

// ------------------------
// Optional: unlock audio on first user interaction (mobile Safari fix)
// ------------------------
let audioUnlocked = false;

function unlockAudio() {
    if (!audioUnlocked) {
        const testAudio = new Audio();
        testAudio.play().catch(() => {});
        testAudio.pause();
        testAudio.currentTime = 0;
        audioUnlocked = true;

        // Remove listeners after first interaction
        document.body.removeEventListener('click', unlockAudio);
        document.body.removeEventListener('touchstart', unlockAudio);
    }
}

// Listen for first interaction to allow audio to play on mobile
document.body.addEventListener('click', unlockAudio);
document.body.addEventListener('touchstart', unlockAudio);
