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

  // Show the music control button
  if (musicBtn.style.display === 'none') {
    musicBtn.style.display = 'inline-block';
  }

  // Attempt to play music (browser will allow since this is after a user interaction)
  bgMusic.play().then(() => {
    musicBtn.textContent = '⏸️ Pause Music';
  }).catch((error) => {
    console.log("Autoplay blocked:", error);
  });
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
