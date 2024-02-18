let songIndex = 0;
let audio = new Audio('./song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName("playlist"));
let songs = [
    { songName: "Tum Hi Ho", filePath: "./song/1.mp3", coverPath: "./CoverImage/1.jpg" },
    { songName: "8 Parche", filePath: "./song/2.mp3", coverPath: "./CoverImage/2.jpg" },
    { songName: "Labon Ko", filePath: "./song/3.mp3", coverPath: "./CoverImage/3.jpg" },
    { songName: "Mann Mera", filePath: "./song/4.mp3", coverPath: "./CoverImage/4.jpg" },
    { songName: "Saaiyaan Re", filePath: "./song/5.mp3", coverPath: "./CoverImage/5.jpg" },
    { songName: "Saiyyan Kailash Kher", filePath: "./song/6.mp3", coverPath: "./CoverImage/6.jpg" },
    { songName: "Teri Deewani", filePath: "./song/7.mp3", coverPath: "./CoverImage/7.jpg" },
    { songName: "Ro Ro Ke Arzoo", filePath: "./song/8.mp3", coverPath: "./CoverImage/8.jpg" },
]


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})
masterPlay.addEventListener('click', function () {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audio.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
audio.addEventListener('timeupdate', function () {
    console.log('timeupdate');
    //update progress bar
    progress = parseInt((audio.currentTime / audio.duration) * 100); // parseInt for integer (multiply by 100 for percentage)
    console.log(progress);
    progressBar.value = progress;
})

progressBar.addEventListener('change', function () {
    audio.currentTime = (progressBar.value * audio.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("songPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audio.src = `./song/${songIndex + 1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName ;
        gif.style.opacity = 1;
        audio.currentTime = 0;
        audio.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audio.src = `./song/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName ;
    gif.style.opacity = 1;
    audio.currentTime = 0;
    audio.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audio.src = `./song/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName ;
    gif.style.opacity = 1;
    audio.currentTime = 0;
    audio.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})


