const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
let isPlay = false;

function playAudio() {
  audio.currentTime = 0;
  audio.play();
  playBtn.classList.add('pause-btn')
}

function pauseAudio() {
  audio.pause();
  playBtn.classList.remove('pause-btn')
}

playBtn.addEventListener('click', () => {
  if (playBtn.classList.contains('pause-btn')) {
    pauseAudio();
  } else {
    playAudio();
  }
});
