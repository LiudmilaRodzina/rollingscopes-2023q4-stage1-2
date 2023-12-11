import "./menu.scss";
import Header from "./layout/Header";
import Menu from "./layout/Menu";
import Footer from "./layout/Footer";

const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

header.append(Header);
main.append(Menu);
footer.append(Footer);
