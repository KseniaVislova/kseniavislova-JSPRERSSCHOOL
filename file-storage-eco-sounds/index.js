const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
let isPlay = false;

function playAudio() {
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
  playBtn.classList.add('pause-btn')
}

function pauseAudio() {
  audio.pause();
  isPlay = false;
  playBtn.classList.remove('pause-btn')
}

playBtn.addEventListener('click', () => {
  if (isPlay) {
    pauseAudio();
  } else {
    playAudio();
  }
});
