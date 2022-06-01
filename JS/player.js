console.log("Ciao")
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const precBtn = document.getElementById('prec');
const succBtn = document.getElementById('succ');
const audio = document.getElementById('audio');
const titolo = document.getElementById('titolo');
const cover = document.getElementById('cover');
const canzoni = ['MoneyRain', 'SigmaMale', 'SubemeLaRadio'];
let indiceCanzone = 0;

caricaCanzoni(canzoni[indiceCanzone]);

function caricaCanzoni(canzone) {
    titolo.innerText = canzone;
    audio.src = `music/${canzone}.mp3`;
    cover.src = `images/${canzone}.jpg`;
}

function playCanzone() {
    musicContainer.classList.add('play');
    audio.play();
  }
  
 
  function pausaCanzone() {
    musicContainer.classList.remove('play');
    audio.pause();
  }
  
  
  function precSong() {
    indiceCanzone--;

    if (indiceCanzone < 0) {
        indiceCanzone = canzoni.length - 1;
    }
  
    caricaCanzoni(canzoni[indiceCanzone]);
    playCanzone();
  }
  
  
  
  
  function succSong() {
    indiceCanzone++;
  
    if (indiceCanzone > canzoni.length - 1) {
        indiceCanzone = 0;
    }
  
    caricaCanzoni(canzoni[indiceCanzone]);
    playCanzone();
  }
  
  
  playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pausaCanzone();
    } else {
      playCanzone();
    }
  });
  
  
  precBtn.addEventListener('click', precSong);
  succBtn.addEventListener('click', succSong);
  
  audio.addEventListener('ended', succSong);
  