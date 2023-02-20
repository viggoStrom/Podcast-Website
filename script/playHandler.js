// lists of iteractable elements so you can iterate through
// pause other podcast when you start another one
// having every button call the same function and check class (className) for what to do
// .oninput for slider

const listOfEpisodes = document.querySelectorAll("#episodes ul li")
const backButtons = document.querySelectorAll("#customPlayer p:nth-child(1)")
const playButtons = document.querySelectorAll("#customPlayer p:nth-child(2)")
const forwardButtons = document.querySelectorAll("#customPlayer p:nth-child(3)")
const timesRemaining = document.querySelectorAll("#customPlayer p:last-of-type")
const audios = document.querySelectorAll("#episodes #textWrapper audio")
const inputs = document.querySelectorAll("#customPlayer div input")


listOfEpisodes.forEach(element => {
    const indexOfEpisode = Array.from(listOfEpisodes).indexOf(element);
    const timeRemaining = timesRemaining[indexOfEpisode]
    const audio = audios[indexOfEpisode]
    const input = inputs[indexOfEpisode]
    const playButton = playButtons[indexOfEpisode]

    audio.onloadeddata = () => {
        const storedTime = localStorage.getItem(indexOfEpisode.toString())
        audio.currentTime = storedTime
        const date = new Date((audio.duration - storedTime) * 1000)
        timeRemaining.innerHTML = "-" + date.toISOString().slice(14, 19)
    }

    audio.addEventListener("timeupdate", () => {
        const date = new Date((audio.duration - audio.currentTime) * 1000)
        timeRemaining.innerHTML = "-" + date.toISOString().slice(14, 19)
        localStorage.setItem(indexOfEpisode.toString(), audio.currentTime)

        input.value = (audio.currentTime / audio.duration) * 100

        if (audio.currentTime >= audio.duration - .01) {
            audio.pause()
            playButton.classList = ""
            playButton.innerHTML = "▶"
        }
    })
});

function setTime(element) {
    const audio = element.parentNode.parentNode.parentNode.querySelector("audio")
    audio.currentTime = element.value / 100 * audio.duration
}

function play(element) {
    const indexOfEpisode = Array.from(listOfEpisodes).indexOf(element.parentNode.parentNode.parentNode);
    const audio = audios[indexOfEpisode]
    const playButton = playButtons[indexOfEpisode]

    if (audio.paused) {
        audio.play()
        playButton.classList = "paused"
        playButton.innerHTML = "="
    } else {
        audio.pause()
        playButton.classList = ""
        playButton.innerHTML = "▶"
    }
}

function forward(element) {
    const indexOfEpisode = Array.from(listOfEpisodes).indexOf(element.parentNode.parentNode.parentNode);
    const audio = audios[indexOfEpisode]
    const timeJump = 15

    if (audio.duration - audio.currentTime > timeJump + 1) {
        audio.currentTime += timeJump
    } else {
        audio.currentTime = audio.duration
    }
}

function back(element) {
    const indexOfEpisode = Array.from(listOfEpisodes).indexOf(element.parentNode.parentNode.parentNode);
    const audio = audios[indexOfEpisode]
    const timeJump = 15

    if (audio.duration - audio.currentTime > timeJump + 1) {
        audio.currentTime -= timeJump
    } else {
        audio.currentTime = 0
    }
}