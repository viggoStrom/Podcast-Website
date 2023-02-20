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
const inputs = document.querySelectorAll("#customPlayer div")


listOfEpisodes.forEach(element => {
    const indexOfEpisode = Array.from(listOfEpisodes).indexOf(element);
    const timeRemaining = timesRemaining[indexOfEpisode]
    const audio = audios[indexOfEpisode]

    function updateTimeRemaining() {
        const date = new Date((audio.duration - audio.currentTime) * 1000)
        timeRemaining.innerHTML = "-" + date.toISOString().slice(14, 19)
    }

    audio.onloadeddata = () => {
        updateTimeRemaining()
    }

    audio.addEventListener("timeupdate", () => {
        updateTimeRemaining()
        localStorage.setItem(indexOfEpisode.toString(), audio.currentTime)
    })
});

function back(element) {
    const indexOfEpisode = Array.from(listOfEpisodes).indexOf(element.parentNode.parentNode.parentNode);
}
function play(element) {
    const indexOfEpisode = Array.from(listOfEpisodes).indexOf(element.parentNode.parentNode.parentNode);
    const audio = audios[indexOfEpisode]

    function swithIcon() {
        ▶
        "II"
    }

    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
}
function forward(element) {
    const indexOfEpisode = Array.from(listOfEpisodes).indexOf(element.parentNode.parentNode.parentNode);
}