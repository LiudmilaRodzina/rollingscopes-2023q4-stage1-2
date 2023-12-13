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
  `Привет! Что-то я очень застопорилась на первом пункте Modal:'( Так пока и не удалось решить проблему. За оставшиеся задачи ещё даже не бралась. Планирую по максимуму до конца кросс-чека из себя выжать. Но, если нет возможности дальше ждать, пока я соображу, проверяй, как есть. Спасибо большое за терпение!`
);
console.log(`1. Burger: +22;
2. Carousel: +24;
3. Categories of products: +6;
  + When switching categories, the products of the selected category are displayed: +2;
  + For screens with a width of 768px or less, when opening/reloading the page or switching categories, only 4 products are displayed. If there are more than 4 products in the displayed category, a Load More button is displayed below: +4;
4. Modal: +12;
  + The Modal with the description of a specific product opens when clicking on any part of a card of product: +2
  + The part of the page outside the Modal is darkened: +2
  + When the Modal is open, the vertical scroll of the page becomes inactive; when closed, it becomes active again: +2
  + Clicking on the area around the Modal and Close button closes it: +2
  + The Modal is centered on both axes, sizes of modal elements and their layout match the design: +2
  + After the Modal is opened, the 'Size' option 'S' is selected, and no option in the 'Additives' section is selected. The product's final price is the same as in the card: +2
5. Video: +8;

Total: 72`);
