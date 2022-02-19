const volumeS = document.getElementById('volumeRange')
const speedS = document.getElementById('speedRange')
const durationS = document.getElementById('durationRange')
const image = document.getElementById('image')
const nameS = document.getElementById('name')


const play = document.getElementById('play')
const loopPath = document.getElementById('loopPath')
const likePath = document.getElementById('likePath')


nameS.innerHTML = 'Alone by Alan Walker'
image.src = 'image/alone.jpg'
var music = new Audio('audio/alone.mp3');

const song = () => {
    if (music.paused === false){
        music.pause();
        play.src = 'icons/play.png'
    } else {
        music.play();
        play.src = 'icons/pause.png'
    }
    music.onended = () => {
        next()
    }
    repeat()
    // slider = createSlider(0, 1, 0.2, 0.2);
    // music.volume = 0.8
}

const repeat = () => {
    durationS.max = music.duration
    durationS.value = music.currentTime
    setInterval(repeat, 1000);
}

const loop = () => {
    console.log('in')
    if (music.loop === true) {
        music.loop = false;
        console.log('false')
        loopPath.classList.toggle('color')
    } else {
        music.loop = true
        console.log('true')
        loopPath.classList.toggle('color')
        // loopPath.fill = 'red'
    }
}

const like = () => {
    likePath.classList.toggle('color')
}


const speed = () => {
    music.playbackRate = speedS.value/100;
}
const volume = () => {
    music.volume = volumeS.value/100
}

var i = 0;

const next = () => {
    i+=1;
    if (i > 4) {
        i = 0
    }
    // console.log(i)
    console.log(data[i].audio)
    music.pause()
    music = new Audio(data[i].audio);
    image.src = data[i].img
    nameS.innerHTML = data[i].song
    speed()
    volume()
    repeat()
    song()
}

const prev = () => {
    i-=1;
    if (i < 0) {
        i = 4
    }
    // console.log(i)
    console.log(data[i].audio)
    music.pause()
    music = new Audio(data[i].audio);
    image.src = data[i].img
    nameS.innerHTML = data[i].song
    speed()
    volume()
    repeat()
    song()
}
