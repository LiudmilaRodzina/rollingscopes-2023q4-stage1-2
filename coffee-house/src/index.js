import "./index.scss";
import Header from "./layout/Header";
import hero from "./layout/Content/01_hero";
import favorite from "./layout/Content/02_favorite";
import about from "./layout/Content/03_about";
import app from "./layout/Content/04_app";
import Footer from "./layout/Footer";

const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

header.append(Header);
main.append(hero);
main.append(favorite);
main.append(about);
main.append(app);
footer.append(Footer);

console.log(`1. Burger: +22;
2. Carousel: +14 (not implemented: progress bar effects);
3. Categories of products: +2 (products of the selected category are displayed, the rest is not done)
4. Modal: 0;
5. Video: +8;
Total: 46`);

alert(
  `Привет! Извини, не успела выполнить требования для страницы меню. Если есть возможность подождать с проверкой, буду очень благодарна. Спасибо!`
);
