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

console.log(
  `Привет! Извини, не успела выполнить многие требования. Если есть возможность подождать с проверкой, буду очень благодарна. Спасибо!`
);
console.log(`1. Burger: +22;
2. Carousel: +14 (
  + Carousel elements automatically scroll to the left with a specified time interval by default: +4
  + The switch slides is accompanied by like the carousel animation (the method of animation execution is not verified): +4
  + Manual switching in the corresponding direction is implemented by pressing left arrow button or right arrow button: +2
  + For mobile devices, manual switching in the corresponding direction is additionally implemented by swiping left or right: +2
  + When switching to the right after the third element, it returns to the first. When switching to the left after the first element, it returns to the third: +2
);
3. Categories of products: +2 (
  When switching categories, the products of the selected category are displayed: +2
)
4. Modal: 10;
  + The Modal with the description of a specific product opens when clicking on any part of a card of product: +2
  + The part of the page outside the Modal is darkened: +2
  + When the Modal is open, the vertical scroll of the page becomes inactive; when closed, it becomes active again: +2
  + Clicking on the area around the Modal and Close button closes it: +2
  + The Modal is centered on both axes, sizes of modal elements and their layout match the design: +1 (only on large screens)
  + After the Modal is opened, the 'Size' option 'S' is selected, and no option in the 'Additives' section is selected. The product's final price is the same as in the card: +2
5. Video: +8;

Total: 57`);
