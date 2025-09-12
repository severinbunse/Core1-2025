// ---------- Hover Audio for List Items ----------
const nameItems = document.querySelectorAll('.name-item');

nameItems.forEach((item) => {
    const audioSrc = item.dataset.audio;
    if (!audioSrc) return; // Skip if no audio file
    const audio = new Audio(audioSrc);

    item.addEventListener('mouseenter', () => {
        audio.play();
    });

    item.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0; // Reset audio
    });
});

// ---------- Overlay Click to Enter ----------
const overlay = document.getElementById('overlay');
const enterLink = document.getElementById('enter-site');

enterLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent link navigation
    overlay.style.display = 'none'; // Hide overlay immediately
});


// this is for touch devices only

if (isTouch) {
  document.querySelectorAll('.name-item a').forEach(link => {
    const li = link.parentElement;
    const audioSrc = li.dataset.audio;

    if (!audioSrc) return; // Skip if no audio file

    const sound = new Audio(audioSrc);

    link.addEventListener('click', e => {
      e.preventDefault(); // Stop immediate navigation
      sound.currentTime = 0;
      sound.play();

      // Navigate to the link after the audio ends
      sound.onended = () => {
        window.location.href = link.href;
      };
    });
  });
}