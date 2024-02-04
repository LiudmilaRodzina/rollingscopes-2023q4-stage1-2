export const setThemeColor = (property, darkModeValue, lightModeValue) => {
  const darkMode = localStorage.getItem("darkmode") === "true";
  const modeValue = darkMode ? darkModeValue : lightModeValue;
  document.documentElement.style.setProperty(property, modeValue);
};

export const getThemeColors = () => {
  setThemeColor("--color-black", "#eee", "#222");
  setThemeColor("--color-dark-grey", "#ddd", "#555");
  setThemeColor("--color-light-grey", "#555", "#ddd");
  setThemeColor("--color-white", "#222", "#eee");
};

export const implementDarkMode = () => {
  const darkMode = localStorage.getItem("darkmode") === "true";
  localStorage.setItem("darkmode", !darkMode);
  const body = document.querySelector("body");
  body.classList.toggle("dark", !darkMode);
  getThemeColors();
};

export const onload = () => {
  const darkMode = localStorage.getItem("darkmode") === "true";
  document.body.classList.toggle("dark", darkMode);
  const buttonText = darkMode ? "Light Mode" : "Dark Mode";
  getThemeColors();

  const buttonTheme = document.querySelector(".theme");
  if (buttonTheme) {
    buttonTheme.innerText = buttonText;
    buttonTheme.addEventListener("click", () => {
      implementDarkMode();
      const darkMode = localStorage.getItem("darkmode") === "true";
      buttonTheme.innerText = darkMode ? "Light Mode" : "Dark Mode";
    });
  }
};

document.addEventListener("DOMContentLoaded", onload);
