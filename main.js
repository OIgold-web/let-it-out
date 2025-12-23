let playBtn = document.getElementById('playBtn');
let progressBar = document.getElementById('progressBar');
let song = document.getElementById('song');

song.onloadedmetadata = function(){
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
}
function playPause(){
  if(playBtn.classList.contains('pause')){
    song.pause();
    playBtn.classList.remove('pause');
    playBtn.classList.add('play');
    playBtn.src = 'play-button_icon-icons.com_53922.png';
  }else {
    song.play();
    playBtn.classList.add('pause');
    playBtn.classList.remove('play');
    playBtn.src = 'pause_icon-icons.com_69612.png';
  }
}
if(song.play()){
  setInterval(()=>{
    progressBar.value = song.currentTime;
  },500)
}
progressBar.onchange = function(){
  song.currentTime = progressBar.value;
}


