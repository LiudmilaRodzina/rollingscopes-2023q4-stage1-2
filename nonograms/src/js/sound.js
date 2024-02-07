let isSoundOn = true;
const sound = new Audio();

const updateButtonSoundText = () => {
  const buttonSound = document.querySelector(".sound");
  buttonSound.innerText = isSoundOn ? "🔊" : "🔇";
};

const playSound = (soundName) => {
  const soundEffects = {
    "left-click": "audio/left-click.mp3",
    "right-click": "audio/right-click.mp3",
    win: "audio/win.mp3",
    reset: "audio/reset.mp3",
    switch: "audio/switch.mp3",
  };
  sound.src = soundEffects[soundName];
  let isSoundOn = localStorage.getItem("isSoundOn");
  if (isSoundOn === "true") {
    sound.play();
  } else {
    sound.pause();
  }
  updateButtonSoundText();
};

const toggleSound = () => {
  isSoundOn = !isSoundOn;
  if (isSoundOn) {
    sound.currentTime = 0;
    sound.play();
  } else {
    sound.pause();
    sound.currentTime = 0;
  }
  updateButtonSoundText();
  localStorage.setItem("isSoundOn", isSoundOn);
};

const loadSoundState = () => {
  const savedSoundState = localStorage.getItem("isSoundOn");
  if (savedSoundState !== null) {
    isSoundOn = JSON.parse(savedSoundState);
  } else {
    isSoundOn = false;
  }
  updateButtonSoundText();
  return isSoundOn;
};

export { playSound, toggleSound, loadSoundState };
