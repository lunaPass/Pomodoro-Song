export default function() {
    const forestAudio = new Audio ('https://github.com/Paru369/focus-timer/blob/main/sounds/Floresta.wav?raw=true')
    const rainAudio = new Audio('https://github.com/Paru369/focus-timer/blob/main/sounds/Chuva.wav?raw=true')
    const coffeeAudio = new Audio('https://github.com/Paru369/focus-timer/blob/main/sounds/Cafeteria.wav?raw=true')
    const fireplaceAudio = new Audio('https://github.com/Paru369/focus-timer/blob/main/sounds/Lareira.wav?raw=true')
    const buttonPressAudio = new Audio(
        'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
    )
    const kitchenTimer = new Audio(
        'https://github.com/maykbrit o/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
    )


    function pressButton(){
        buttonPressAudio.play()
    }
    function timerEnd() {
        kitchenTimer.play()

    }
    
    return {
        forestAudio,
        rainAudio,
        coffeeAudio,
        fireplaceAudio,
        buttonPressAudio,
        kitchenTimer,
        pressButton,
        timerEnd
    }


}
