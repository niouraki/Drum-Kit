let sounds = document.querySelectorAll('.sounds .sound');
// go inside the sounds div and grab any sound elements

// in case the user clicks the squares
for (let i=0; i < sounds.length; i++) {
  sounds[i].addEventListener('click', function() {
    sounds[i].classList.add('activated');
    setTimeout(function() {
      sounds[i].classList.remove('activated');
    }, 100)
  })
}

// use attribute selector to get the key pressed each time
window.addEventListener('keydown', function(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  if(!audio) return; //so it doesn't give an error if another key is pressed
  audio.currentTime = 0; // this way I can press the key multiple times and it doesn't have to complete so it can play again, it rewinds
  audio.play();

  const sound = document.querySelector(`.sound[data-key="${event.keyCode}"]`)
  sound.classList.add('activated');
  setTimeout(function() {
    sound.classList.remove('activated');
  }, 100);
});


/*
document.addEventListener('keydown', function(event) {
  if(event.keyCode == 65) {
    document.getElementById('clap').play();
    clap.classList.add('activated');
    setTimeout(function() {
      clap.classList.remove('activated');
    }, 100)
  }else if(event.keyCode == 83) {
    document.getElementById('hihat').play();
    hihat.classList.add('activated');
    setTimeout(function() {
      hihat.classList.remove('activated');
    }, 100)
  }else if(event.keyCode == 68) {
    document.getElementById('kick').play();
    kick.classList.add('activated');
    setTimeout(function() {
      kick.classList.remove('activated');
    }, 100)
  }else if(event.keyCode == 70) {
    document.getElementById('openhat').play();
    openhat.classList.add('activated');
    setTimeout(function() {
      openhat.classList.remove('activated');
    }, 100)
  }else if(event.keyCode == 71) {
    document.getElementById('boom').play();
    boom.classList.add('activated');
    setTimeout(function() {
      boom.classList.remove('activated');
    }, 100)
  }else if(event.keyCode == 72) {
    document.getElementById('ride').play();
    ride.classList.add('activated');
    setTimeout(function() {
      ride.classList.remove('activated');
    }, 100)
  }else if(event.keyCode == 74) {
    document.getElementById('snare').play();
    snare.classList.add('activated');
    setTimeout(function() {
      snare.classList.remove('activated');
    }, 100)
  }else if(event.keyCode == 75) {
    document.getElementById('tom').play();
    tom.classList.add('activated');
    setTimeout(function() {
      tom.classList.remove('activated');
    }, 100)
  }else if(event.keyCode == 76) {
    document.getElementById('tink').play();
    tink.classList.add('activated');
    setTimeout(function() {
      tink.classList.remove('activated');
    }, 100)
  }
})*/
