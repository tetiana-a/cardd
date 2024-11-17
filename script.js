// script.js
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('backgroundMusic');
  const playPauseBtn = document.getElementById('playPauseBtn');

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = 'Pause Music';
    } else {
      audio.pause();
      playPauseBtn.textContent = 'Play Music';
    }
  });
});
