//import sound from "./sound.js"*/
import Sound from "./sound.js"
/*import Sound from "./sound.js"*/


const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrase = document.querySelector('.decrase')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes
let timerTimeOut
const buttonforest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffe')
const buttonFire = document.querySelector('.fire')
const sound = Sound()

function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
  }


function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = "00"

    if (minutes <= 0) {
      resetControls()
        return

    }

    if (seconds <= 0) {
      seconds = 59
      resetControls()

      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

    countdown()
  }, 1000)
}

 

buttonPlay.addEventListener('click', function () {

  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')
  sound.pressButton()
  countdown()

})

buttonStop.addEventListener('click', function () {
  clearTimeout(timerTimeOut)
  sound.pressButton()
  resetControls()
  buttonStop.classList.remove('hide')

})
buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
})



/*  function toggleAudioPlay(myAudio) {
  // aqui ele verifica se o audio está pausado e retorna um boolean
  let isPaused = myAudio.paused
  if (isPaused) {
    // se for true ele inicia o audio
    myAudio.play();
  } else {
    // se for false ele para o audio
    myAudio.pause();
  }
}
*/

function turnIOff(button) {
  if (button.classList.contains('active')) {
    button.classList.remove('active')
  }
}




function music() {
  if (buttonforest.classList.contains('active')) {
    sound.forestAudio.play()


  } else {
    sound.forestAudio.pause()


  }
  if (buttonRain.classList.contains("active")) {
    sound.rainAudio.play()
  } else {
    sound.rainAudio.pause()


    if (buttonCoffe.classList.contains('active')) {
      sound.coffeeAudio.play()

    } else {
      sound.coffeeAudio.pause()

    }
    if (buttonFire.classList.contains('active')) {
      sound.fireplaceAudio.play()

    } else {
      sound.fireplaceAudio.pause()

    }
  }
}

buttonforest.addEventListener('click', function () {
  buttonforest.classList.toggle('active')
  /*toggleAudioPlay(sound.forestAudio)*/
  music()
})


buttonRain.addEventListener('click', function () {
  buttonRain.classList.toggle('active')

  music()

})


buttonCoffe.addEventListener('click', function () {
  buttonCoffe.classList.toggle('active')
  music()
})

buttonFire.addEventListener('click', function () {
  buttonFire.classList.toggle('active')
  music()

})

buttonIncrease.addEventListener("click", function () {

  minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
})

buttonDecrase.addEventListener("click", function () {
  minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
})




