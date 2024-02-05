let isSoundOn = true;
const sound = new Audio();

const updateSoundButtonText = () => {
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
  
  updateSoundButtonText();
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
  updateSoundButtonText();
  localStorage.setItem("isSoundOn", isSoundOn);
};

const loadSoundState = () => {
  const savedSoundState = localStorage.getItem("isSoundOn");

  if (savedSoundState !== null) {
    isSoundOn = JSON.parse(savedSoundState);
  } else {
    isSoundOn = false;
  }
  updateSoundButtonText();

  return isSoundOn;
};

export { playSound, toggleSound, loadSoundState };
