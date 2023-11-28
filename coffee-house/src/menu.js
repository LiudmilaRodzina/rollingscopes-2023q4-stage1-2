import "./menu.scss";
import Header from "./layout/Header";
import Menu from "./layout/Menu";
// import hero from "./layout/Content/01_hero";
// import favorite from "./layout/Content/02_favorite";
// import about from "./layout/Content/03_about";
// import app from "./layout/Content/04_app";
import Footer from "./layout/Footer";

const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

header.append(Header);
main.append(Menu);
// main.append(hero);
// main.append(favorite);
// main.append(about);
// main.append(app);
footer.append(Footer);

console.log(`MENU PAGE`);
