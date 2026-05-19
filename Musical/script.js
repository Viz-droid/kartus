gsap.registerPlugin(ScrollTrigger);

const miniDisc = document.getElementById("miniDisc");
const playPauseBtn = document.getElementById("play-pause-btn");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const spaceBtn = document.getElementById("space-btn");

const playlist = [
  {
    title: "Mania",
    file: new Audio(
      "database/audio/aaryan shah - mania (slowed + reverb) [1SuCG5XsS-A].opus",
    ),
  },
  {
    title: "Amaarae",
    file: new Audio(
      "database/audio/Amaarae - Angel's in Tibet [SLOWED] [P4CcZhZnCdA].opus",
    ),
  },
  {
    title: "Chase Atlantic",
    file: new Audio(
      "database/audio/Chase Atlantic - Swim (tiktok remix⧸speed up) Lyrics ｜ luckily luckily luckily chase atlantic [ztC_hIVraYk].opus",
    ),
  },
  {
    title: "Cleared",
    file: new Audio(
      "database/audio/CLEARED (remix) — Edit Audio [h1RBjJrAxOg].opus",
    ),
  },
  {
    title: "Esctasy",
    file: new Audio(
      "database/audio/Ecstasy - Slowed & Reverb [4X0sJMqmc-s].opus",
    ),
  },
  {
    title: "Frozy",
    file: new Audio("database/audio/frozy - kompa [L1gfUsW6FwU].opus"),
  },
  {
    title: "Help Urself",
    file: new Audio("database/audio/help urself (Slowed) [4AknKtXzRi4].opus"),
  },
];

const scratch = new Audio("database/audio/DJ -sound-effect.mp3");
scratch.loop = true;

let currentTrack = 0;
let audio = playlist[currentTrack].file;
let isPlaying = false;
let isScratching = false;

const normalSpin = gsap.to(miniDisc, {
  rotate: "+=360",
  duration: 10,
  ease: "none",
  repeat: -1,
  paused: true,
});

const scratchSpin = gsap.to(miniDisc, {
  rotate: "-=360",
  duration: 0.3,
  ease: "none",
  repeat: -1,
  paused: true,
});

function updatePlayPauseBtn(playing) {
  playIcon.classList.toggle("hidden", playing);
  pauseIcon.classList.toggle("hidden", !playing);
}

function playCurrentTrack() {
  audio.play();
  scratchSpin.pause();
  normalSpin.resume();

  isPlaying = true;
  updatePlayPauseBtn(true);
}

function pauseCurrentTrack() {
  audio.pause();
  normalSpin.pause();
  scratchSpin.pause();

  isPlaying = false;
  updatePlayPauseBtn(false);
}

function nextTrack() {
  audio.pause();
  audio.currentTime = 0;

  currentTrack = (currentTrack + 1) % playlist.length;
  audio = playlist[currentTrack].file;

  playCurrentTrack();
}

function startScratch() {
  if (!isPlaying || isScratching) return;

  isScratching = true;

  audio.pause();

  normalSpin.pause();
  scratchSpin.restart();

  scratch.currentTime = 0;
  scratch.play();
}

function stopScratch() {
  if (!isScratching) return;

  scratch.pause();
  scratch.currentTime = 0;

  scratchSpin.pause();

  nextTrack();

  isScratching = false;
}

playPauseBtn.addEventListener("click", () => {
  if (isScratching) return;

  if (isPlaying) {
    pauseCurrentTrack();
  } else {
    playCurrentTrack();
  }
});

// Keyboard spacebar
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !e.repeat) {
    e.preventDefault();
    startScratch();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    stopScratch();
  }
});

// Mobile / touch space button
spaceBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  startScratch();
});

spaceBtn.addEventListener("touchend", () => {
  stopScratch();
});

// Desktop mouse support for on-screen button
spaceBtn.addEventListener("mousedown", startScratch);
spaceBtn.addEventListener("mouseup", stopScratch);
spaceBtn.addEventListener("mouseleave", stopScratch);
