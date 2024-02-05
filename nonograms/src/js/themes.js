const setThemeColor = (property, darkModeValue, lightModeValue) => {
  const darkMode = localStorage.getItem("darkmode") === "true";
  const modeValue = darkMode ? darkModeValue : lightModeValue;
  document.documentElement.style.setProperty(property, modeValue);
};

const getThemeColors = () => {
  setThemeColor("--color-black", "#eee", "#222");
  setThemeColor("--color-dark-grey", "#ddd", "#555");
  setThemeColor("--color-light-grey", "#555", "#ddd");
  setThemeColor("--color-white", "#222", "#eee");
};

const implementDarkMode = () => {
  const darkMode = localStorage.getItem("darkmode") === "true";
  localStorage.setItem("darkmode", !darkMode);
  const body = document.querySelector("body");
  body.classList.toggle("dark", !darkMode);
  getThemeColors();
};

const onload = () => {
  const darkMode = localStorage.getItem("darkmode") === "true";
  document.body.classList.toggle("dark", darkMode);
  getThemeColors();

  const darkImage = "⚫";
  const lightImage = "⚪";

  const buttonTheme = document.querySelector(".theme");
  buttonTheme.innerText = darkMode ? lightImage : darkImage;

  buttonTheme.addEventListener("click", () => {
    implementDarkMode();
    const darkMode = localStorage.getItem("darkmode") === "true";
    buttonTheme.innerText = darkMode ? lightImage : darkImage;
    const sound = new Audio();
    sound.src = "audio/switch.mp3";
    let isSoundOn = localStorage.getItem("isSoundOn");

    if (isSoundOn === "true") {
      sound.play();
    } else {
      sound.pause();
    }
  });
};

document.addEventListener("DOMContentLoaded", onload);

export { onload };
