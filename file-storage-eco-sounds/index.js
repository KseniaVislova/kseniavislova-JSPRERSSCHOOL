const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);