const kissBtn = document.getElementById('kissBtn');
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');

kissBtn.addEventListener('click', () => {
  const kiss = document.createElement('div');
  kiss.className = 'kiss';
  kiss.textContent = '💋';
  kiss.style.left = Math.random() * window.innerWidth + 'px';
  kiss.style.top = Math.random() * window.innerHeight + 'px';
  document.body.appendChild(kiss);

  setTimeout(() => {
    kiss.remove();
  }, 2000);

  // Show the music button if it's hidden
  if (musicBtn.style.display === 'none') {
    musicBtn.style.display = 'inline-block';
  }

  // Auto-play music on first kiss
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = '⏸️ Pause Music';
  }
});

musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = '⏸️ Pause Music';
  } else {
    bgMusic.pause();
    musicBtn.textContent = '🎵 Play Music';
  }
});
