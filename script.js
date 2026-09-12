const songs = [
    {
        title: "Nattuvazhiyile",
        file: "Nattuvazhiyile_(KuttyWeb.com).mp3"
    },

    {
        title: "Oruvattam Koodiyen",
        file: "oruvattam_koodiyen.mpeg"
    },

    {
        title: "Kilipenne",
        file: "Kilippenne.mp3"
    },

    {
        title: "Koovaram kili paithale",
        file: "Koovaram_kili_paithale.mp3"
    }
];

let currentSong = 0;

const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const songTitle = document.getElementById("songTitle");
const playlist = document.getElementById("playlist");


/* Load a song */

function loadSong(index) {

    currentSong = index;

    audio.src = songs[currentSong].file;

    songTitle.textContent = songs[currentSong].title;

    updatePlaylist();
}


/* Play / Pause */

function playSong() {

    audio.play();

    playBtn.textContent = "❚❚";
}


function pauseSong() {

    audio.pause();

    playBtn.textContent = "▶";
}


playBtn.addEventListener("click", () => {

    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }

});


/* Next song */

nextBtn.addEventListener("click", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);

    playSong();
});


/* Previous song */

prevBtn.addEventListener("click", () => {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);

    playSong();
});


/* Automatically play next song */

audio.addEventListener("ended", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);

    playSong();
});


/* Create playlist */

function createPlaylist() {

    playlist.innerHTML = "";

    songs.forEach((song, index) => {

        const item = document.createElement("div");

        item.className = "playlist-song";

        item.textContent = "♫  " + song.title;

        item.addEventListener("click", () => {

            loadSong(index);

            playSong();

        });

        playlist.appendChild(item);

    });

}


/* Highlight current song */

function updatePlaylist() {

    const items = document.querySelectorAll(".playlist-song");

    items.forEach((item, index) => {

        if (index === currentSong) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }

    });

}


/* Start */

createPlaylist();

loadSong(0);