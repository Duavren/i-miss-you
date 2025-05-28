document.getElementById('kissBtn').addEventListener('click', () => {
  const kiss = document.createElement('div');
  kiss.className = 'kiss';
  kiss.textContent = '💋';
  kiss.style.left = Math.random() * window.innerWidth + 'px';
  kiss.style.top = Math.random() * window.innerHeight + 'px';
  document.body.appendChild(kiss);

  setTimeout(() => {
    kiss.remove();
  }, 2000);

  const bgMusic = document.getElementById('bgMusic');
  if (bgMusic.paused) {
    bgMusic.play();
  }
});
