import htmlToElement from "../../../utils/htmlToElement";
import hero from "./index.html";
// import Button from "./../../../components/Buttons";

import "./index.scss";

const content = htmlToElement(hero);

// const customButton = Button({
//   onClick: () => console.log("click from HERO"),
//   title: "Menu",
//   className: "button",
// });
// content.appendChild(customButton);

export default content;
