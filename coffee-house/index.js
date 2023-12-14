/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/index.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/index.scss ***!
  \************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.cdnfonts.com/css/inter);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  box-sizing: border-box;
  background-color: #e3d5c9;
}

.wrapper {
  max-width: 144rem;
  padding: 0 4rem 4rem 4rem;
  margin: 0 auto;
  background-color: #e3d5c9;
  overflow: hidden;
  position: relative;
  width: 100%;
}
@media (max-width: 768px) {
  .wrapper {
    max-width: 76.8rem;
  }
}
@media (max-width: 720px) {
  .wrapper {
    padding: 0 1.6rem 4rem;
  }
}
@media (max-width: 420px) {
  .wrapper {
    max-width: 38rem;
  }
}

a:link,
a:visited {
  text-decoration: none;
  color: inherit;
}

button {
  border: none;
  cursor: pointer;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.8rem;
  width: 20rem;
  height: 6.4rem;
  background-color: #e3d5c9;
  border-radius: 10rem;
}

.button-text {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #403f3d;
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAkEA;;;EAGE,SAAA;EACA,UAAA;EACA,mBAAA;AAhEF;;AAkEA;EACE,gBAAA;EACA,uBAAA;AA/DF;;AAiEA;EACE,gCAAA;EACA,sBAAA;EACA,yBApCc;AA1BhB;;AAiEA;EACE,iBAAA;EACA,yBAAA;EACA,cAAA;EACA,yBA3Cc;EA4Cd,gBAAA;EACA,kBAAA;EACA,WAAA;AA9DF;AAFE;EAyDF;IAUI,kBAAA;EA7DF;AACF;AADE;EAmDF;IAcI,sBAAA;EA5DF;AACF;AAAE;EA6CF;IAkBI,gBAAA;EA3DF;AACF;;AA8DA;;EAEE,qBAAA;EACA,cAAA;AA3DF;;AA8DA;EACE,YAAA;EACA,eAAA;AA3DF;;AA6DA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,yBA/Ec;EAgFd,oBAAA;AA1DF;;AA6DA;EA9HE,iBA+Hc;EA9Hd,gBA8HsB;EA7HtB,iBA6H2B;EA5H3B,cA6CgB;AAwBlB","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n@import url(\"https://fonts.cdnfonts.com/css/inter\");\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\nhtml {\r\n  font-size: 62.5%;\r\n  scroll-behavior: smooth;\r\n}\r\nbody {\r\n  font-family: \"Inter\", sans-serif;\r\n  box-sizing: border-box;\r\n  background-color: $color-primary;\r\n}\r\n\r\n.wrapper {\r\n  max-width: 144rem;\r\n  padding: 0 4rem 4rem 4rem;\r\n  margin: 0 auto;\r\n  background-color: $color-primary;\r\n  overflow: hidden;\r\n  position: relative;\r\n  width: 100%;\r\n\r\n  @include media-tablet-port {\r\n    max-width: 76.8rem;\r\n  }\r\n\r\n  @include media-mobile-large {\r\n    padding: 0 1.6rem 4rem;\r\n  }\r\n\r\n  @include media-mobile {\r\n    max-width: 38rem;\r\n  }\r\n}\r\n\r\na:link,\r\na:visited {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n.button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 0.8rem;\r\n  width: 20rem;\r\n  height: 6.4rem;\r\n  background-color: $color-primary;\r\n  border-radius: 10rem;\r\n}\r\n\r\n.button-text {\r\n  @include text(1.6rem, 600, 150%, $color-text-dark);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Content/01_hero/index.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Content/01_hero/index.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.section__hero {
  position: relative;
  min-height: 64.4rem;
}
@media (max-width: 420px) {
  .section__hero {
    min-height: 55.2rem;
  }
}

.bg-video {
  position: absolute;
  overflow: hidden;
  background-size: cover;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  border-radius: 4rem;
}
@media (max-width: 420px) {
  .bg-video {
    padding: 0;
    height: 55.2rem;
  }
}

.bg-video__content {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section__hero_content {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
  margin: 10rem;
  width: 53rem;
  gap: 4rem;
}
@media (max-width: 768px) {
  .section__hero_content {
    margin: 10rem 6rem;
  }
}
@media (max-width: 720px) {
  .section__hero_content {
    width: 34.8rem;
    margin: 6rem 2.8rem;
  }
}
@media (max-width: 420px) {
  .section__hero_content {
    width: 31.6rem;
    margin: 6rem 1.6rem;
  }
}

.heading-light {
  font-size: 7.2rem;
  font-weight: 600;
  line-height: 105%;
  color: #e1d4c9;
}
@media (max-width: 720px) {
  .heading-light {
    font-size: 5rem;
    font-weight: 600;
    line-height: 115%;
    color: #e1d4c9;
  }
}
@media (max-width: 420px) {
  .heading-light {
    font-size: 4.2rem;
    font-weight: 600;
    line-height: 115%;
    color: #e1d4c9;
  }
}
.heading-light span {
  font-style: italic;
  color: #b0907a;
}

.section__hero_text {
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;
  color: #e1d4c9;
}
@media (max-width: 720px) {
  .section__hero_text {
    padding-right: 1rem;
  }
}
@media (max-width: 420px) {
  .section__hero_text {
    padding-right: 0;
  }
}

.menu-button:hover .button-image {
  opacity: 1;
}
.menu-button:hover .button-text {
  margin-left: 0rem;
}

.button-text {
  margin-left: 2rem;
  transition: all 0.2s ease-in-out;
}
@media (max-width: 768px) {
  .button-text {
    margin-left: 0;
  }
}

.button-image {
  opacity: 0;
  padding-bottom: 0.3rem;
  transition: all 0.2s ease-in-out;
}
@media (max-width: 768px) {
  .button-image {
    opacity: 1;
  }
}`, "",{"version":3,"sources":["webpack://./src/layout/Content/01_hero/index.scss"],"names":[],"mappings":"AAgEA;EACE,kBAAA;EACA,mBAAA;AA/DF;AAmCE;EA0BF;IAMI,mBAAA;EA/DF;AACF;;AAiEA;EACE,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,mBAAA;AA9DF;AAkBE;EAmCF;IAYI,UAAA;IACA,eAAA;EA7DF;AACF;;AAgEA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AA7DF;;AAgEA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,UAAA;EACA,aAAA;EACA,YAAA;EACA,SAAA;AA7DF;AAlBE;EAsEF;IAYI,kBAAA;EA5DF;AACF;AAjBE;EAgEF;IAeI,cAAA;IACA,mBAAA;EA1DF;AACF;AAjBE;EA0DF;IAmBI,cAAA;IACA,mBAAA;EAxDF;AACF;;AA2DA;EAvHE,iBAwHc;EAvHd,gBAuHsB;EAtHtB,iBAsH2B;EArH3B,cA8CiB;AAkBnB;AApCE;EAwFF;IAvHE,eA2HgB;IA1HhB,gBA0HsB;IAzHtB,iBAyH2B;IAxH3B,cA8CiB;EAyBjB;AACF;AAtCE;EAkFF;IAvHE,iBA8HgB;IA7HhB,gBA6HwB;IA5HxB,iBA4H6B;IA3H7B,cA8CiB;EAiCjB;AACF;AA8CE;EACE,kBAAA;EACA,cAjFgB;AAqCpB;;AA+CA;EAtIE,iBAuIc;EAtId,gBAsIsB;EArItB,iBAqI2B;EApI3B,cA8CiB;AA6CnB;AA/DE;EAuGF;IAII,mBAAA;EAxCF;AACF;AA9DE;EAiGF;IAOI,gBAAA;EAtCF;AACF;;AA2CI;EACE,UAAA;AAxCN;AA2CI;EACE,iBAAA;AAzCN;;AA8CA;EACE,iBAAA;EACA,gCAAA;AA3CF;AA3FE;EAoIF;IAII,cAAA;EAzCF;AACF;;AA4CA;EAIE,UAAA;EACA,sBAAA;EACA,gCAAA;AA5CF;AAtGE;EA4IF;IAEI,UAAA;EApCF;AACF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n.section__hero {\r\n  position: relative;\r\n  min-height: 64.4rem;\r\n\r\n\r\n  @include media-mobile {\r\n    min-height: 55.2rem;\r\n  }\r\n}\r\n.bg-video {\r\n  position: absolute;\r\n  overflow: hidden;\r\n  background-size: cover;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 0;\r\n  border-radius: 4rem;\r\n\r\n  @include media-mobile {\r\n    padding: 0;\r\n    height: 55.2rem;\r\n  }\r\n}\r\n\r\n.bg-video__content {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.section__hero_content {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  z-index: 1;\r\n  margin: 10rem;\r\n  width: 53rem;\r\n  gap: 4rem;\r\n\r\n  @include media-tablet-port {\r\n    margin: 10rem 6rem;\r\n  }\r\n  @include media-mobile-large {\r\n    width: 34.8rem;\r\n    margin: 6rem 2.8rem;\r\n  }\r\n  @include media-mobile {\r\n    width: 31.6rem;\r\n    margin: 6rem 1.6rem;\r\n  }\r\n}\r\n\r\n.heading-light {\r\n  @include text(7.2rem, 600, 105%, $color-text-light);\r\n\r\n  @include media-mobile-large {\r\n    @include text(5rem, 600, 115%, $color-text-light);\r\n  }\r\n  @include media-mobile {\r\n    @include text(4.2rem, 600, 115%, $color-text-light);\r\n  }\r\n\r\n  span {\r\n    font-style: italic;\r\n    color: $color-text-accent;\r\n  }\r\n}\r\n.section__hero_text {\r\n  @include text(1.6rem, 400, 150%, $color-text-light);\r\n\r\n  @include media-mobile-large {\r\n    padding-right: 1rem;\r\n  }\r\n  @include media-mobile {\r\n    padding-right: 0;\r\n  }\r\n}\r\n\r\n.menu-button {\r\n  &:hover {\r\n    .button-image {\r\n      opacity: 1;\r\n    }\r\n\r\n    .button-text {\r\n      margin-left: 0rem;\r\n    }\r\n  }\r\n}\r\n\r\n.button-text {\r\n  margin-left: 2rem;\r\n  transition: all 0.2s ease-in-out;\r\n  @include media-tablet-port {\r\n    margin-left: 0;\r\n  }\r\n}\r\n\r\n.button-image {\r\n  @include media-tablet-port {\r\n    opacity: 1;\r\n  }\r\n  opacity: 0;\r\n  padding-bottom: 0.3rem;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Content/02_favorite/index.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Content/02_favorite/index.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/arrow-left.svg */ "./src/assets/icons/arrow-left.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/arrow-left-hover.svg */ "./src/assets/icons/arrow-left-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/arrow-right-hover.svg */ "./src/assets/icons/arrow-right-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.section__favorite {
  padding: 10rem 0;
}

.heading-dark {
  font-size: 6rem;
  font-weight: 600;
  line-height: 125%;
  color: #403f3d;
  text-align: center;
}
@media (max-width: 720px) {
  .heading-dark {
    font-size: 4.2rem;
    font-weight: 600;
    line-height: 125%;
    color: #403f3d;
  }
}
@media (max-width: 420px) {
  .heading-dark {
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 125%;
    color: #403f3d;
  }
}
.heading-dark span {
  font-style: italic;
  color: #b0907a;
}

.slider__arrow {
  background-color: #e3d5c9;
  border: 1px solid #665f55;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  transition: all 0.5s ease-in-out;
}
@media (max-width: 720px) {
  .slider__arrow {
    display: none;
  }
}
.slider__arrow span {
  display: inline-block;
  width: 2.4rem;
  height: 2.4rem;
}
.slider__arrow_left-icon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  transition: all 0.5s ease-in-out;
}
.slider__arrow_right-icon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  transition: all 0.5s ease-in-out;
}
@media (hover: hover) and (pointer: fine) {
  .slider__arrow:hover {
    background-color: #665f55;
  }
  .slider__arrow:hover .arrow_left-icon {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  }
  .slider__arrow:hover .arrow_right-icon {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  }
}

.slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4rem;
}
@media (max-width: 720px) {
  .slider {
    justify-content: center;
  }
}

.slider__container {
  overflow: hidden;
  max-width: 48rem;
}
@media (max-width: 720px) {
  .slider__container {
    max-width: 34.8rem;
  }
}

.slider__line {
  display: flex;
  transition: all 1s ease-in-out;
}
.slider__line_card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 48rem;
  gap: 1.8rem;
}
@media (max-width: 720px) {
  .slider__line_card {
    max-width: 34.8rem;
  }
}
.slider__line_card-title {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 125%;
  color: #403f3d;
}
.slider__line_card-text {
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;
  color: #403f3d;
}
.slider__line_card-price {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 125%;
  color: #403f3d;
}

.slider__progress {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  padding-top: 3.8rem;
}
.slider__progress-bar {
  position: relative;
  background-color: #c1b6ad;
  width: 4rem;
  height: 0.4rem;
  border-radius: 10rem;
}
.slider__progress-bar_line {
  position: absolute;
  background-color: #665f55;
  width: 0;
  height: 0.4rem;
  border-radius: 10rem;
}
.slider__progress-bar_line.active {
  background-color: #665f55;
  animation: progress 3s linear 0s forwards;
}
.slider__progress-bar_line.paused {
  animation-play-state: paused;
}

@keyframes progress {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/layout/Content/02_favorite/index.scss"],"names":[],"mappings":"AAgEA;EACE,gBAAA;AA/DF;;AAiEA;EAlEE,eAmEc;EAlEd,gBAkEoB;EAjEpB,iBAiEyB;EAhEzB,cA6CgB;EAoBhB,kBAAA;AA3DF;AAsBE;EAmCF;IAlEE,iBAuEgB;IAtEhB,gBAsEwB;IArExB,iBAqE6B;IApE7B,cA6CgB;EAhChB;AACF;AAoBE;EA6BF;IAlEE,iBA0EgB;IAzEhB,gBAyEwB;IAxExB,iBAwE6B;IAvE7B,cA6CgB;EAxBhB;AACF;AAoDE;EACE,kBAAA;EACA,cA7BgB;AArBpB;;AAqDA;EACE,yBAxCc;EAyCd,yBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gCAAA;AAlDF;AAPE;EAmDF;IASI,aAAA;EAjDF;AACF;AAmDE;EACE,qBAAA;EACA,aAAA;EACA,cAAA;AAjDJ;AAmDE;EACE,mDAAA;EACA,gCAAA;AAjDJ;AAmDE;EACE,mDAAA;EACA,gCAAA;AAjDJ;AAmDE;EACE;IACE,yBAjEY;EAgBhB;EAkDI;IACE,mDAAA;EAhDN;EAkDI;IACE,mDAAA;EAhDN;AACF;;AAqDA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;AAlDF;AA3CE;EAyFF;IAOI,uBAAA;EAjDF;AACF;;AAmDA;EACE,gBAAA;EACA,gBAAA;AAhDF;AArDE;EAmGF;IAKI,kBAAA;EA/CF;AACF;;AAiDA;EACE,aAAA;EACA,8BAAA;AA9CF;AAgDE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;AA9CJ;AAvEE;EA+GA;IASI,kBAAA;EA7CJ;AACF;AA+CI;EA1JF,iBA2JkB;EA1JlB,gBA0J0B;EAzJ1B,iBAyJ+B;EAxJ/B,cA6CgB;AAiElB;AA4CI;EA7JF,iBA8JkB;EA7JlB,gBA6J0B;EA5J1B,iBA4J+B;EA3J/B,cA6CgB;AAuElB;AAyCI;EAhKF,iBAiKkB;EAhKlB,gBAgK0B;EA/J1B,iBA+J+B;EA9J/B,cA6CgB;AA6ElB;;AAwCA;EACE,aAAA;EACA,uBAAA;EACA,WAAA;EACA,mBAAA;AArCF;AAuCE;EACE,kBAAA;EACA,yBAxHiB;EAyHjB,WAAA;EACA,cAAA;EACA,oBAAA;AArCJ;AAuCI;EACE,kBAAA;EACA,yBA9Hc;EA+Hd,QAAA;EACA,cAAA;EACA,oBAAA;AArCN;AAuCM;EACE,yBApIY;EAqIZ,yCAAA;AArCR;AAuCM;EACE,4BAAA;AArCR;;AA0CA;EACE;IACE,QAAA;EAvCF;EAyCA;IACE,WAAA;EAvCF;AACF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n.section__favorite {\r\n  padding: 10rem 0;\r\n}\r\n.heading-dark {\r\n  @include text(6rem, 600, 125%, $color-text-dark);\r\n  text-align: center;\r\n\r\n  @include media-mobile-large {\r\n    @include text(4.2rem, 600, 125%, $color-text-dark);\r\n  }\r\n  @include media-mobile {\r\n    @include text(3.2rem, 600, 125%, $color-text-dark);\r\n  }\r\n\r\n  span {\r\n    font-style: italic;\r\n    color: $color-text-accent;\r\n  }\r\n}\r\n.slider__arrow {\r\n  background-color: $color-primary;\r\n  border: 1px solid $color-border-dark;\r\n  border-radius: 50%;\r\n  width: 6rem;\r\n  height: 6rem;\r\n  transition: all 0.5s ease-in-out;\r\n\r\n  @include media-mobile-large {\r\n    display: none;\r\n  }\r\n\r\n  span {\r\n    display: inline-block;\r\n    width: 2.4rem;\r\n    height: 2.4rem;\r\n  }\r\n  &_left-icon {\r\n    background: url(./../../../assets/icons/arrow-left.svg);\r\n    transition: all 0.5s ease-in-out;\r\n  }\r\n  &_right-icon {\r\n    background: url(./../../../assets/icons/arrow-right.svg);\r\n    transition: all 0.5s ease-in-out;\r\n  }\r\n  @media (hover: hover) and (pointer: fine) {\r\n    &:hover {\r\n      background-color: $color-secondary;\r\n      .arrow_left-icon {\r\n        background: url(./../../../assets/icons/arrow-left-hover.svg);\r\n      }\r\n      .arrow_right-icon {\r\n        background: url(./../../../assets/icons/arrow-right-hover.svg);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.slider {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-top: 4rem;\r\n\r\n  @include media-mobile-large {\r\n    justify-content: center;\r\n  }\r\n}\r\n.slider__container {\r\n  overflow: hidden;\r\n  max-width: 48rem;\r\n\r\n  @include media-mobile-large {\r\n    max-width: 34.8rem;\r\n  }\r\n}\r\n.slider__line {\r\n  display: flex;\r\n  transition: all 1s ease-in-out;\r\n\r\n  &_card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    text-align: center;\r\n    max-width: 48rem;\r\n    gap: 1.8rem;\r\n\r\n    @include media-mobile-large {\r\n      max-width: 34.8rem;\r\n    }\r\n\r\n    &-title {\r\n      @include text(2.4rem, 600, 125%, $color-text-dark);\r\n    }\r\n    &-text {\r\n      @include text(1.6rem, 400, 150%, $color-text-dark);\r\n    }\r\n    &-price {\r\n      @include text(2.4rem, 600, 125%, $color-text-dark);\r\n    }\r\n  }\r\n}\r\n.slider__progress {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1.2rem;\r\n  padding-top: 3.8rem;\r\n\r\n  &-bar {\r\n    position: relative;\r\n    background-color: $color-border-light;\r\n    width: 4rem;\r\n    height: 0.4rem;\r\n    border-radius: 10rem;\r\n\r\n    &_line {\r\n      position: absolute;\r\n      background-color: $color-border-dark;\r\n      width: 0;\r\n      height: 0.4rem;\r\n      border-radius: 10rem;\r\n\r\n      &.active {\r\n        background-color: $color-border-dark;\r\n        animation: progress 3s linear 0s forwards;\r\n      }\r\n      &.paused {\r\n        animation-play-state: paused;\r\n      }\r\n    }\r\n  }\r\n}\r\n@keyframes progress {\r\n  from {\r\n    width: 0;\r\n  }\r\n  to {\r\n    width: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Content/03_about/index.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Content/03_about/index.scss ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.section__about {
  padding-bottom: 10rem;
}
.section__about .heading-dark {
  font-size: 59.9px;
  text-align: start;
}
@media (max-width: 720px) {
  .section__about .heading-dark {
    font-size: 4.2rem;
    font-weight: 600;
    line-height: 125%;
    color: #403f3d;
  }
}
@media (max-width: 420px) {
  .section__about .heading-dark {
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 125%;
    color: #403f3d;
  }
}

.images__wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  padding-top: 4rem;
}
@media (max-width: 1024px) {
  .images__wrapper {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 15%;
  }
}
@media (max-width: 768px) {
  .images__wrapper {
    width: 100%;
    margin: 0;
  }
}

.image__container {
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;
}
.image__container img {
  position: absolute;
  transition: all 0.5s ease-in-out;
}
@media (hover: hover) and (pointer: fine) {
  .image__container img:hover {
    transform: scale(0.92);
  }
}
@media (hover: hover) and (pointer: fine) and (max-width: 768px) {
  .image__container img:hover {
    transform: scale(0.96);
  }
}

.image-large {
  height: 59rem;
  grid-row: span 2;
}

.image-small {
  height: 43rem;
  grid-row: span 1;
}

.image-1 {
  order: 1;
}

.image-2 {
  order: 5;
}
@media (max-width: 1024px) {
  .image-2 {
    display: none;
  }
}

.image-3 {
  order: 2;
}
@media (max-width: 1024px) {
  .image-3 {
    display: none;
  }
}

.image-4 {
  order: 4;
}

.img-1 {
  top: -6.8rem;
  right: -3.4rem;
  transform: scale(1);
}
@media (max-width: 768px) {
  .img-1 {
    right: -2.2rem;
  }
}
@media (max-width: 420px) {
  .img-1 {
    right: -19rem;
  }
}

.img-2 {
  top: -14.9rem;
  right: -3.4rem;
  transform: scale(1);
}

.img-3 {
  top: -14.7rem;
  right: -32.9px;
  transform: scale(1);
}

.img-4 {
  top: -6.7rem;
  right: -3.4rem;
  transform: scale(1);
}
@media (max-width: 768px) {
  .img-4 {
    right: -2.2rem;
  }
}
@media (max-width: 420px) {
  .img-4 {
    right: -19rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/layout/Content/03_about/index.scss"],"names":[],"mappings":"AAgEA;EACE,qBAAA;AA/DF;AAgEE;EACE,iBAAA;EACA,iBAAA;AA9DJ;AA0BE;EAkCA;IAjEA,iBAqEkB;IApElB,gBAoE0B;IAnE1B,iBAmE+B;IAlE/B,cA6CgB;EApChB;AACF;AAwBE;EA4BA;IAjEA,iBAwEkB;IAvElB,gBAuE0B;IAtE1B,iBAsE+B;IArE/B,cA6CgB;EA5BhB;AACF;;AAwDA;EACE,aAAA;EACA,qCAAA;EACA,SAAA;EACA,iBAAA;AArDF;AATE;EA0DF;IAOI,aAAA;IACA,sBAAA;IACA,UAAA;IACA,aAAA;EApDF;AACF;AAXE;EAoDF;IAaI,WAAA;IACA,SAAA;EAlDF;AACF;;AAqDA;EACE,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;AAlDF;AAoDE;EACE,kBAAA;EACA,gCAAA;AAlDJ;AAmDI;EACE;IACE,sBAAA;EAjDN;AACF;AAjCE;EAgFI;IAII,sBAAA;EA/CR;AACF;;AAqDA;EACE,aAAA;EACA,gBAAA;AAlDF;;AAoDA;EACE,aAAA;EACA,gBAAA;AAjDF;;AAmDA;EACE,QAAA;AAhDF;;AAkDA;EACE,QAAA;AA/CF;AA9DE;EA4GF;IAGI,aAAA;EA7CF;AACF;;AA+CA;EACE,QAAA;AA5CF;AAvEE;EAkHF;IAGI,aAAA;EA1CF;AACF;;AA4CA;EACE,QAAA;AAzCF;;AA4CA;EACE,YAAA;EACA,cAAA;EACA,mBAAA;AAzCF;AAhFE;EAsHF;IAMI,cAAA;EAxCF;AACF;AAzEE;EA0GF;IAUI,aAAA;EAvCF;AACF;;AAyCA;EACE,aAAA;EACA,cAAA;EACA,mBAAA;AAtCF;;AAwCA;EACE,aAAA;EACA,cAAA;EACA,mBAAA;AArCF;;AAuCA;EACE,YAAA;EACA,cAAA;EACA,mBAAA;AApCF;AA5GE;EA6IF;IAMI,cAAA;EAnCF;AACF;AArGE;EAiIF;IAUI,aAAA;EAlCF;AACF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n.section__about {\r\n  padding-bottom: 10rem;\r\n  .heading-dark {\r\n    font-size: 59.9px;\r\n    text-align: start;\r\n    @include media-mobile-large {\r\n      @include text(4.2rem, 600, 125%, $color-text-dark);\r\n    }\r\n    @include media-mobile {\r\n      @include text(3.2rem, 600, 125%, $color-text-dark);\r\n    }\r\n  }\r\n}\r\n\r\n.images__wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 4rem;\r\n  padding-top: 4rem;\r\n\r\n  @include media-tablet-land {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 70%;\r\n    margin: 0 15%;\r\n  }\r\n  @include media-tablet-port {\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n.image__container {\r\n  position: relative;\r\n  border-radius: 2rem;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n\r\n  img {\r\n    position: absolute;\r\n    transition: all 0.5s ease-in-out;\r\n    @media (hover: hover) and (pointer: fine) {\r\n      &:hover {\r\n        transform: scale(0.92);\r\n\r\n        @include media-tablet-port {\r\n          transform: scale(0.96);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.image-large {\r\n  height: 59rem;\r\n  grid-row: span 2;\r\n}\r\n.image-small {\r\n  height: 43rem;\r\n  grid-row: span 1;\r\n}\r\n.image-1 {\r\n  order: 1;\r\n}\r\n.image-2 {\r\n  order: 5;\r\n  @include media-tablet-land {\r\n    display: none;\r\n  }\r\n}\r\n.image-3 {\r\n  order: 2;\r\n  @include media-tablet-land {\r\n    display: none;\r\n  }\r\n}\r\n.image-4 {\r\n  order: 4;\r\n}\r\n\r\n.img-1 {\r\n  top: -6.8rem;\r\n  right: -3.4rem;\r\n  transform: scale(1);\r\n\r\n  @include media-tablet-port {\r\n    right: -2.2rem;\r\n  }\r\n\r\n  @include media-mobile {\r\n    right: -19rem;\r\n  }\r\n}\r\n.img-2 {\r\n  top: -14.9rem;\r\n  right: -3.4rem;\r\n  transform: scale(1);\r\n}\r\n.img-3 {\r\n  top: -14.7rem;\r\n  right: -32.9px;\r\n  transform: scale(1);\r\n}\r\n.img-4 {\r\n  top: -6.7rem;\r\n  right: -3.4rem;\r\n  transform: scale(1);\r\n\r\n  @include media-tablet-port {\r\n    right: -2.2rem;\r\n  }\r\n\r\n  @include media-mobile {\r\n    right: -19rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Content/04_app/index.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Content/04_app/index.scss ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/ios-hover.svg */ "./src/assets/icons/ios-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/android-hover.svg */ "./src/assets/icons/android-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/ios.svg */ "./src/assets/icons/ios.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/android.svg */ "./src/assets/icons/android.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.section__app {
  display: flex;
  gap: 10rem;
  padding-bottom: 10rem;
}
.section__app .heading-dark {
  text-align: start;
}
@media (max-width: 1220px) {
  .section__app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 720px) {
  .section__app {
    gap: 4rem;
  }
}

.app__column-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
}
.app__column-1_text {
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;
  color: #403f3d;
}

.app__buttons {
  display: flex;
  gap: 2rem;
}
@media (max-width: 420px) {
  .app__buttons {
    flex-direction: column;
  }
}

.app__button {
  display: flex;
  background-color: #e3d5c9;
  border: 1px solid #665f55;
  gap: 0.8rem;
  width: 20rem;
  height: 6.4rem;
  border-radius: 10rem;
  padding: 1.2rem 2rem;
  transition: all 0.5s ease-in-out;
}

@media (hover: hover) and (pointer: fine) {
  .app__button:hover {
    background-color: #665f55;
    transition: all 0.5s ease-in-out;
  }
  .app__button:hover .button__icon_ios {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  }
  .app__button:hover .button__icon_android {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  }
  .app__button:hover .button__text_small {
    color: #e3d5c9;
  }
  .app__button:hover .button__text_large {
    color: #e3d5c9;
  }
}
.button__icon {
  display: inline-block;
  width: 3.6rem;
  height: 3.6rem;
  transition: all 0.5s ease-in-out;
}

.button__icon_ios {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.button__icon_android {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.button__text_small {
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%;
  color: #403f3d;
  text-align: start;
  transition: all 0.5s ease-in-out;
}

.button__text_large {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #403f3d;
  display: block;
  text-align: start;
  transition: all 0.5s ease-in-out;
}

@media (max-width: 1024px) {
  .app__column-2 {
    max-width: 63rem;
    align-self: center;
  }
}
@media (max-width: 720px) {
  .app__column-2 img {
    max-width: 40rem;
  }
}
@media (max-width: 420px) {
  .app__column-2 img {
    max-width: 34.8rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/layout/Content/04_app/index.scss"],"names":[],"mappings":"AAgEA;EACE,aAAA;EACA,UAAA;EACA,qBAAA;AA/DF;AAiEE;EACE,iBAAA;AA/DJ;AAOE;EAkDF;IAUI,aAAA;IACA,sBAAA;IACA,mBAAA;EA/DF;AACF;AAkBE;EAgCF;IAeI,SAAA;EA7DF;AACF;;AA+DA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;AA5DF;AA8DE;EAvFA,iBAwFgB;EAvFhB,gBAuFwB;EAtFxB,iBAsF6B;EArF7B,cA6CgB;AAjBlB;;AA6DA;EACE,aAAA;EACA,SAAA;AA1DF;AACE;EAuDF;IAKI,sBAAA;EAzDF;AACF;;AA2DA;EACE,aAAA;EACA,yBA3Dc;EA4Dd,yBAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,oBAAA;EACA,oBAAA;EACA,gCAAA;AAxDF;;AA2DA;EACE;IACE,yBAtEc;IAuEd,gCAAA;EAxDF;EA0DE;IACE,mDAAA;EAxDJ;EA0DE;IACE,mDAAA;EAxDJ;EA0DE;IACE,cAjFU;EAyBd;EA0DE;IACE,cApFU;EA4Bd;AACF;AA4DA;EACE,qBAAA;EACA,aAAA;EACA,cAAA;EACA,gCAAA;AA1DF;;AA4DA;EACE,mDAAA;AAzDF;;AA2DA;EACE,mDAAA;AAxDF;;AA2DA;EAjJE,eAkJc;EAjJd,gBAiJoB;EAhJpB,iBAgJyB;EA/IzB,cA6CgB;EAmGhB,iBAAA;EACA,gCAAA;AArDF;;AAwDA;EAvJE,iBAwJc;EAvJd,gBAuJsB;EAtJtB,iBAsJ2B;EArJ3B,cA6CgB;EAyGhB,cAAA;EACA,iBAAA;EACA,gCAAA;AAlDF;;AAtFE;EA2IF;IAEI,gBAAA;IACA,kBAAA;EAlDF;AACF;AAjFE;EAsIE;IACE,gBAAA;EAlDJ;AACF;AAhFE;EAqIE;IACE,kBAAA;EAlDJ;AACF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n.section__app {\r\n  display: flex;\r\n  gap: 10rem;\r\n  padding-bottom: 10rem;\r\n\r\n  .heading-dark {\r\n    text-align: start;\r\n  }\r\n\r\n  @include media-desktop {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  @include media-mobile-large {\r\n    gap: 4rem;\r\n  }\r\n}\r\n.app__column-1 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 4rem;\r\n\r\n  &_text {\r\n    @include text(1.6rem, 400, 150%, $color-text-dark);\r\n  }\r\n}\r\n\r\n.app__buttons {\r\n  display: flex;\r\n  gap: 2rem;\r\n\r\n  @include media-mobile {\r\n    flex-direction: column;\r\n  }\r\n}\r\n.app__button {\r\n  display: flex;\r\n  background-color: $color-primary;\r\n  border: 1px solid $color-secondary;\r\n  gap: 0.8rem;\r\n  width: 20rem;\r\n  height: 6.4rem;\r\n  border-radius: 10rem;\r\n  padding: 1.2rem 2rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n@media (hover: hover) and (pointer: fine) {\r\n  .app__button:hover {\r\n    background-color: $color-secondary;\r\n    transition: all 0.5s ease-in-out;\r\n\r\n    .button__icon_ios {\r\n      background: url(./../../../assets/icons/ios-hover.svg);\r\n    }\r\n    .button__icon_android {\r\n      background: url(./../../../assets/icons/android-hover.svg);\r\n    }\r\n    .button__text_small {\r\n      color: $color-primary;\r\n    }\r\n    .button__text_large {\r\n      color: $color-primary;\r\n    }\r\n  }\r\n}\r\n\r\n.button__icon {\r\n  display: inline-block;\r\n  width: 3.6rem;\r\n  height: 3.6rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.button__icon_ios {\r\n  background: url(./../../../assets/icons/ios.svg);\r\n}\r\n.button__icon_android {\r\n  background: url(./../../../assets/icons/android.svg);\r\n}\r\n\r\n.button__text_small {\r\n  @include text(1rem, 600, 140%, $color-text-dark);\r\n  text-align: start;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.button__text_large {\r\n  @include text(1.6rem, 600, 150%, $color-text-dark);\r\n  display: block;\r\n  text-align: start;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.app__column-2 {\r\n  @include media-tablet-land {\r\n    max-width: 63rem;\r\n    align-self: center;\r\n  }\r\n\r\n  @include media-mobile-large {\r\n    img {\r\n      max-width: 40rem;\r\n    }\r\n  }\r\n  @include media-mobile {\r\n    img {\r\n      max-width: 34.8rem;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Footer/index.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Footer/index.scss ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icons/twitter.svg */ "./src/assets/icons/twitter.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icons/twitter-hover.svg */ "./src/assets/icons/twitter-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icons/instagram.svg */ "./src/assets/icons/instagram.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icons/instagram-hover.svg */ "./src/assets/icons/instagram-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icons/facebook.svg */ "./src/assets/icons/facebook.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/icons/facebook-hover.svg */ "./src/assets/icons/facebook-hover.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer__container {
  background-color: #665f55;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 10rem;
  border-radius: 4rem;
  gap: 10rem;
}
@media (max-width: 1024px) {
  .footer__container {
    grid-template-columns: 1fr;
    padding: 10rem 6rem;
  }
}
@media (max-width: 720px) {
  .footer__container {
    padding: 6rem 1.6rem;
    gap: 4rem;
  }
}
.footer__container .heading-light {
  font-size: 6rem;
  font-weight: 600;
  line-height: 125%;
  color: #e1d4c9;
}
@media (max-width: 720px) {
  .footer__container .heading-light {
    font-size: 4.2rem;
    font-weight: 600;
    line-height: 125%;
    color: #e1d4c9;
  }
}
@media (max-width: 420px) {
  .footer__container .heading-light {
    font-size: 3.15rem;
    font-weight: 600;
    line-height: 125%;
    color: #e1d4c9;
  }
}

.heading-light span {
  font-style: italic;
  color: #b0907a;
}

.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
}
.footer__contacts_title {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 125%;
  color: #e1d4c9;
  padding-bottom: 2rem;
}
.footer__contacts_address {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #e1d4c9;
  position: relative;
  display: inline;
}
.footer__contacts_address img {
  padding-right: 0.8rem;
}
.footer__contacts_phone {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #e1d4c9;
  position: relative;
}
.footer__contacts_phone img {
  padding-right: 0.8rem;
}
.footer__contacts_schedule {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #e1d4c9;
}
.footer__contacts_schedule img {
  padding-right: 0.8rem;
}

.footer__contacts_address a,
.footer__contacts_phone a {
  position: relative;
}
.footer__contacts_address a:after,
.footer__contacts_phone a:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  background-color: #e1d4c9;
  left: 0;
  bottom: -2px;
  transform: scale(0);
}
@media (hover: hover) and (pointer: fine) {
  .footer__contacts_address a:hover:after,
  .footer__contacts_phone a:hover:after {
    transform: scale(1);
    transition: all 0.4s ease-in-out;
  }
}

.social-icons {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.2rem;
  padding-top: 4rem;
}

.social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #665f55;
  border: 1px solid #e3d5c9;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
}
@media (hover: hover) and (pointer: fine) {
  .social-icon:hover {
    background-color: #e3d5c9;
  }
}
.social-icon span {
  display: inline-block;
  width: 6rem;
  height: 6rem;
}
.social-icon__twitter {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center;
  transition: all 0.5s ease-in-out;
}
@media (hover: hover) and (pointer: fine) {
  .social-icon__twitter:hover {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat center;
  }
}
.social-icon__instagram {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat center;
  transition: all 0.5s ease-in-out;
}
@media (hover: hover) and (pointer: fine) {
  .social-icon__instagram:hover {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) no-repeat center;
  }
}
.social-icon__facebook {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) no-repeat center;
  transition: all 0.5s ease-in-out;
}
@media (hover: hover) and (pointer: fine) {
  .social-icon__facebook:hover {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) no-repeat center;
  }
}`, "",{"version":3,"sources":["webpack://./src/layout/Footer/index.scss"],"names":[],"mappings":"AAgEA;EACE,yBApBgB;EAqBhB,aAAA;EACA,8BAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;EACA,mBAAA;EACA,UAAA;AA/DF;AAWE;EA4CF;IAWI,0BAAA;IACA,mBAAA;EA9DF;AACF;AAiBE;EAgCF;IAeI,oBAAA;IACA,SAAA;EA5DF;AACF;AA8DE;EAlFA,eAmFgB;EAlFhB,gBAkFsB;EAjFtB,iBAiF2B;EAhF3B,cA8CiB;AAvBnB;AAKE;EAmDA;IAlFA,iBAsFkB;IArFlB,gBAqF0B;IApF1B,iBAoF+B;IAnF/B,cA8CiB;EAhBjB;AACF;AAGE;EA6CA;IAlFA,kBAyFkB;IAxFlB,gBAwF2B;IAvF3B,iBAuFgC;IAtFhC,cA8CiB;EARjB;AACF;;AAoDE;EACE,kBAAA;EACA,cA9CgB;AAHpB;;AAqDA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AAlDF;AAoDE;EAzGA,iBA0GgB;EAzGhB,gBAyGwB;EAxGxB,iBAwG6B;EAvG7B,cA8CiB;EA0Df,oBAAA;AA/CJ;AAiDE;EA7GA,iBA8GgB;EA7GhB,gBA6GwB;EA5GxB,iBA4G6B;EA3G7B,cA8CiB;EA8Df,kBAAA;EACA,eAAA;AA5CJ;AA8CI;EACE,qBAAA;AA5CN;AA+CE;EAtHA,iBAuHgB;EAtHhB,gBAsHwB;EArHxB,iBAqH6B;EApH7B,cA8CiB;EAuEf,kBAAA;AA1CJ;AA2CI;EACE,qBAAA;AAzCN;AA4CE;EA7HA,iBA8HgB;EA7HhB,gBA6HwB;EA5HxB,iBA4H6B;EA3H7B,cA8CiB;AAsCnB;AAyCI;EACE,qBAAA;AAvCN;;AA4CA;;EAEE,kBAAA;AAzCF;AA0CE;;EACE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,yBA7Fe;EA8Ff,OAAA;EACA,YAAA;EACA,mBAAA;AAvCJ;AAyCE;EACE;;IACE,mBAAA;IACA,gCAAA;EAtCJ;AACF;;AA0CA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;AAvCF;;AAyCA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBA1HgB;EA2HhB,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gCAAA;AAtCF;AAwCE;EACE;IACE,yBApIU;EA8Fd;AACF;AAyCE;EACE,qBAAA;EACA,WAAA;EACA,YAAA;AAvCJ;AA0CE;EACE,oEAAA;EACA,gCAAA;AAxCJ;AAyCI;EACE;IACE,oEAAA;EAvCN;AACF;AA2CE;EACE,oEAAA;EACA,gCAAA;AAzCJ;AA0CI;EACE;IACE,oEAAA;EAxCN;AACF;AA4CE;EACE,oEAAA;EACA,gCAAA;AA1CJ;AA2CI;EACE;IACE,oEAAA;EAzCN;AACF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n.footer__container {\r\n  background-color: $color-secondary;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10rem;\r\n  border-radius: 4rem;\r\n  gap: 10rem;\r\n\r\n  @include media-tablet-land {\r\n    grid-template-columns: 1fr;\r\n    padding: 10rem 6rem;\r\n  }\r\n  @include media-mobile-large {\r\n    padding: 6rem 1.6rem;\r\n    gap: 4rem;\r\n  }\r\n\r\n  .heading-light {\r\n    @include text(6rem, 600, 125%, $color-text-light);\r\n\r\n    @include media-mobile-large {\r\n      @include text(4.2rem, 600, 125%, $color-text-light);\r\n    }\r\n    @include media-mobile {\r\n      @include text(3.15rem, 600, 125%, $color-text-light);\r\n    }\r\n  }\r\n}\r\n.heading-light {\r\n  span {\r\n    font-style: italic;\r\n    color: $color-text-accent;\r\n  }\r\n}\r\n\r\n.footer__contacts {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.7rem;\r\n\r\n  &_title {\r\n    @include text(2.4rem, 600, 125%, $color-text-light);\r\n    padding-bottom: 2rem;\r\n  }\r\n  &_address {\r\n    @include text(1.6rem, 600, 150%, $color-text-light);\r\n    position: relative;\r\n    display: inline;\r\n\r\n    img {\r\n      padding-right: 0.8rem;\r\n    }\r\n  }\r\n  &_phone {\r\n    @include text(1.6rem, 600, 150%, $color-text-light);\r\n    position: relative;\r\n    img {\r\n      padding-right: 0.8rem;\r\n    }\r\n  }\r\n  &_schedule {\r\n    @include text(1.6rem, 600, 150%, $color-text-light);\r\n\r\n    img {\r\n      padding-right: 0.8rem;\r\n    }\r\n  }\r\n}\r\n\r\n.footer__contacts_address a,\r\n.footer__contacts_phone a {\r\n  position: relative;\r\n  &:after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 2px;\r\n    background-color: $color-text-light;\r\n    left: 0;\r\n    bottom: -2px;\r\n    transform: scale(0);\r\n  }\r\n  @media (hover: hover) and (pointer: fine) {\r\n    &:hover:after {\r\n      transform: scale(1);\r\n      transition: all 0.4s ease-in-out;\r\n    }\r\n  }\r\n}\r\n\r\n.social-icons {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  gap: 1.2rem;\r\n  padding-top: 4rem;\r\n}\r\n.social-icon {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: $color-secondary;\r\n  border: 1px solid $color-primary;\r\n  width: 6rem;\r\n  height: 6rem;\r\n  border-radius: 50%;\r\n  transition: all 0.5s ease-in-out;\r\n\r\n  @media (hover: hover) and (pointer: fine) {\r\n    &:hover {\r\n      background-color: $color-primary;\r\n    }\r\n  }\r\n\r\n  span {\r\n    display: inline-block;\r\n    width: 6rem;\r\n    height: 6rem;\r\n  }\r\n\r\n  &__twitter {\r\n    background: url(../../assets/icons/twitter.svg) no-repeat center;\r\n    transition: all 0.5s ease-in-out;\r\n    @media (hover: hover) and (pointer: fine) {\r\n      &:hover {\r\n        background: url(../../assets/icons/twitter-hover.svg) no-repeat center;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__instagram {\r\n    background: url(../../assets/icons/instagram.svg) no-repeat center;\r\n    transition: all 0.5s ease-in-out;\r\n    @media (hover: hover) and (pointer: fine) {\r\n      &:hover {\r\n        background: url(../../assets/icons/instagram-hover.svg) no-repeat center;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__facebook {\r\n    background: url(../../assets/icons/facebook.svg) no-repeat center;\r\n    transition: all 0.5s ease-in-out;\r\n    @media (hover: hover) and (pointer: fine) {\r\n      &:hover {\r\n        background: url(../../assets/icons/facebook-hover.svg) no-repeat center;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Header/index.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Header/index.scss ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  padding: 2rem 0;
}
@media (max-width: 1024px) {
  .header__container {
    gap: 3rem;
  }
}

.no-scroll {
  overflow: hidden;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.navigation__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 65.6%;
}
.navigation__wrapper.open {
  visibility: visible;
  transform: translateX(-100%);
}
@media (max-width: 1024px) {
  .navigation__wrapper {
    gap: 3rem;
    min-width: 78%;
  }
}
@media (max-width: 768px) {
  .navigation__wrapper {
    position: absolute;
    visibility: hidden;
    flex-direction: column;
    justify-content: start;
    background-color: #e3d5c9;
    gap: 10rem;
    padding: 6rem 4rem;
    top: 9.9rem;
    z-index: 2;
    height: 100vh;
    width: 100%;
    right: -100%;
    transition: all 0.3s ease-in-out;
  }
}

.navigation__list {
  display: flex;
  justify-content: space-between;
  gap: 4rem;
}
@media (max-width: 1024px) {
  .navigation__list {
    gap: 3rem;
  }
}
@media (max-width: 768px) {
  .navigation__list {
    flex-direction: column;
    gap: 6rem;
    text-align: center;
  }
}
.navigation__list_link {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #403f3d;
  list-style: none;
}
.navigation__list_link a {
  position: relative;
}
.navigation__list_link a:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #403f3d;
  left: 0;
  bottom: -2px;
  transform: scale(0);
}
@media (hover: hover) and (pointer: fine) {
  .navigation__list_link a:hover:after {
    transform: scale(1);
    transition: all 0.4s ease-in-out;
  }
}
@media (max-width: 768px) {
  .navigation__list_link {
    font-size: 3.2rem;
    line-height: 125%;
  }
}

.header__menu {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #403f3d;
  padding-bottom: 0.4rem;
}
.header__menu span {
  display: none;
}
.header__menu a {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
}
.header__menu a:after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: #403f3d;
  position: absolute;
  left: 0;
  bottom: -2px;
  transform: scale(0);
}
@media (hover: hover) and (pointer: fine) {
  .header__menu a:hover:after {
    transform: scale(1);
    transition: all 0.4s ease-in-out;
  }
}
@media (max-width: 768px) {
  .header__menu {
    font-size: 3.2rem;
    line-height: 125%;
  }
  .header__menu .icon-cup {
    min-height: 4rem;
    min-width: 4rem;
  }
}

.navigation__list_link.menu {
  display: none;
}

.burger__container {
  display: none;
}
@media (max-width: 768px) {
  .burger__container {
    display: block;
    height: 4.6rem;
  }
}
.burger__container.open .burger__line:nth-child(1) {
  transform: translateY(0) rotate(45deg);
}
.burger__container.open .burger__line:nth-child(2) {
  transform: translateY(0) rotate(-45deg);
}
.burger__container .burger {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 4.4rem;
  height: 4.4rem;
  border: 1px solid #665f55;
  border-radius: 50%;
}
.burger__container .burger__line {
  display: block;
  position: absolute;
  width: 1.6rem;
  height: 1px;
  border-radius: 0.2rem;
  background-color: #403f3d;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
}
.burger__container .burger__line:nth-child(1) {
  transform: translateY(-0.4rem);
}
.burger__container .burger__line:nth-child(2) {
  transform: translateY(0.4rem);
}`, "",{"version":3,"sources":["webpack://./src/layout/Header/index.scss"],"names":[],"mappings":"AAgEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;AA/DF;AAcE;EA4CF;IAOI,SAAA;EA7DF;AACF;;AA+DA;EACE,gBAAA;AA5DF;;AA8DA;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AA3DF;;AA8DA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAAA;AA3DF;AA4DE;EACE,mBAAA;EACA,4BAAA;AA1DJ;AAnBE;EAsEF;IAUI,SAAA;IACA,cAAA;EAzDF;AACF;AAnBE;EAgEF;IAcI,kBAAA;IACA,kBAAA;IACA,sBAAA;IACA,sBAAA;IACA,yBAhEY;IAiEZ,UAAA;IACA,kBAAA;IACA,WAAA;IACA,UAAA;IACA,aAAA;IACA,WAAA;IACA,YAAA;IACA,gCAAA;EAvDF;AACF;;AAyDA;EACE,aAAA;EACA,8BAAA;EACA,SAAA;AAtDF;AAhDE;EAmGF;IAMI,SAAA;EArDF;AACF;AA/CE;EA6FF;IASI,sBAAA;IACA,SAAA;IACA,kBAAA;EAnDF;AACF;AAqDE;EApIA,iBAqIgB;EApIhB,gBAoIwB;EAnIxB,iBAmI6B;EAlI7B,cA6CgB;EAsFd,gBAAA;AAhDJ;AAiDI;EACE,kBAAA;AA/CN;AAgDM;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,yBA9FU;EA+FV,OAAA;EACA,YAAA;EACA,mBAAA;AA9CR;AAgDM;EACE;IACE,mBAAA;IACA,gCAAA;EA9CR;AACF;AAhFE;EA2GA;IAuBI,iBAAA;IACA,iBAAA;EA9CJ;AACF;;AAkDA;EAjKE,iBAkKc;EAjKd,gBAiKsB;EAhKtB,iBAgK2B;EA/J3B,cA6CgB;EAmHhB,sBAAA;AA5CF;AA8CE;EACE,aAAA;AA5CJ;AA8CE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;AA5CJ;AA8CI;EACE,WAAA;EACA,WAAA;EACA,WAAA;EACA,yBAnIY;EAoIZ,kBAAA;EACA,OAAA;EACA,YAAA;EACA,mBAAA;AA5CN;AA8CI;EACE;IACE,mBAAA;IACA,gCAAA;EA5CN;AACF;AAxHE;EAwIF;IAiCI,iBAAA;IACA,iBAAA;EA7CF;EA+CE;IACE,gBAAA;IACA,eAAA;EA7CJ;AACF;;AAiDA;EACE,aAAA;AA9CF;;AAiDA;EACE,aAAA;AA9CF;AA1IE;EAuLF;IAGI,cAAA;IACA,cAAA;EA5CF;AACF;AA6CE;EACE,sCAAA;AA3CJ;AA6CE;EACE,uCAAA;AA3CJ;AA6CE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;AA3CJ;AA6CI;EACE,cAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;EACA,qBAAA;EACA,yBA5LY;EA6LZ,sCAAA;EACA,sBAAA;AA3CN;AA6CM;EACE,8BAAA;AA3CR;AA6CM;EACE,6BAAA;AA3CR","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n.header__container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 10rem;\r\n  padding: 2rem 0;\r\n  @include media-tablet-land {\r\n    gap: 3rem;\r\n  }\r\n}\r\n.no-scroll {\r\n  overflow: hidden;\r\n}\r\n.visually-hidden {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n  border: 0;\r\n  padding: 0;\r\n  white-space: nowrap;\r\n  clip-path: inset(100%);\r\n  clip: rect(0 0 0 0);\r\n  overflow: hidden;\r\n}\r\n\r\n.navigation__wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  min-width: 65.6%;\r\n  &.open {\r\n    visibility: visible;\r\n    transform: translateX(-100%);\r\n  }\r\n  @include media-tablet-land {\r\n    gap: 3rem;\r\n    min-width: 78%;\r\n  }\r\n  @include media-tablet-port {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    flex-direction: column;\r\n    justify-content: start;\r\n    background-color: $color-primary;\r\n    gap: 10rem;\r\n    padding: 6rem 4rem;\r\n    top: 9.9rem;\r\n    z-index: 2;\r\n    height: 100vh;\r\n    width: 100%;\r\n    right: -100%;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n}\r\n.navigation__list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 4rem;\r\n\r\n  @include media-tablet-land {\r\n    gap: 3rem;\r\n  }\r\n  @include media-tablet-port {\r\n    flex-direction: column;\r\n    gap: 6rem;\r\n    text-align: center;\r\n  }\r\n\r\n  &_link {\r\n    @include text(1.6rem, 600, 150%, $color-text-dark);\r\n    list-style: none;\r\n    a {\r\n      position: relative;\r\n      &:after {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 2px;\r\n        background-color: $color-text-dark;\r\n        left: 0;\r\n        bottom: -2px;\r\n        transform: scale(0);\r\n      }\r\n      @media (hover: hover) and (pointer: fine) {\r\n        &:hover:after {\r\n          transform: scale(1);\r\n          transition: all 0.4s ease-in-out;\r\n        }\r\n      }\r\n    }\r\n    @include media-tablet-port {\r\n      font-size: 3.2rem;\r\n      line-height: 125%;\r\n    }\r\n  }\r\n}\r\n\r\n.header__menu {\r\n  @include text(1.6rem, 600, 150%, $color-text-dark);\r\n  padding-bottom: 0.4rem;\r\n\r\n  span {\r\n    display: none;\r\n  }\r\n  a {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1.6rem;\r\n\r\n    &:after {\r\n      content: \"\";\r\n      width: 100%;\r\n      height: 2px;\r\n      background-color: $color-text-dark;\r\n      position: absolute;\r\n      left: 0;\r\n      bottom: -2px;\r\n      transform: scale(0);\r\n    }\r\n    @media (hover: hover) and (pointer: fine) {\r\n      &:hover:after {\r\n        transform: scale(1);\r\n        transition: all 0.4s ease-in-out;\r\n      }\r\n    }\r\n  }\r\n\r\n  @include media-tablet-port {\r\n    font-size: 3.2rem;\r\n    line-height: 125%;\r\n\r\n    .icon-cup {\r\n      min-height: 4rem;\r\n      min-width: 4rem;\r\n    }\r\n  }\r\n}\r\n\r\n.navigation__list_link.menu {\r\n  display: none;\r\n}\r\n\r\n.burger__container {\r\n  display: none;\r\n  @include media-tablet-port {\r\n    display: block;\r\n    height: 4.6rem;\r\n  }\r\n  &.open .burger__line:nth-child(1) {\r\n    transform: translateY(0) rotate(45deg);\r\n  }\r\n  &.open .burger__line:nth-child(2) {\r\n    transform: translateY(0) rotate(-45deg);\r\n  }\r\n  .burger {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    width: 4.4rem;\r\n    height: 4.4rem;\r\n    border: 1px solid $color-border-dark;\r\n    border-radius: 50%;\r\n\r\n    &__line {\r\n      display: block;\r\n      position: absolute;\r\n      width: 1.6rem;\r\n      height: 1px;\r\n      border-radius: 0.2rem;\r\n      background-color: $color-text-dark;\r\n      transition: transform 0.3s ease-in-out;\r\n      will-change: transform;\r\n\r\n      &:nth-child(1) {\r\n        transform: translateY(-0.4rem);\r\n      }\r\n      &:nth-child(2) {\r\n        transform: translateY(0.4rem);\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/layout/Content/01_hero/index.html":
/*!***********************************************!*\
  !*** ./src/layout/Content/01_hero/index.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/video/video-_2160p_.webm */ "./src/assets/video/video-_2160p_.webm"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/coffee-cup.svg */ "./src/assets/icons/coffee-cup.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<section class=\"section\"> <div class=\"section__hero\"> <div class=\"bg-video\"> <video class=\"bg-video__content\" autoplay muted loop> <source src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"/> Your browser is not supported! </video> </div> <div class=\"section__hero_content\"> <h2 class=\"heading-light\"> <span>Enjoy</span> premium coffee at our charming cafe </h2> <p class=\"section__hero_text\"> With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage. </p> <a class=\"button menu-button\" href=\"./menu.html\"> <span class=\"button-text\">Menu</span> <img class=\"button-image\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"coffee cup icon\" draggable=\"false\"/> </a> </div> </div> </section> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/layout/Content/02_favorite/index.html":
/*!***************************************************!*\
  !*** ./src/layout/Content/02_favorite/index.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/coffee-slider-1.svg */ "./src/assets/images/coffee-slider-1.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/coffee-slider-2.svg */ "./src/assets/images/coffee-slider-2.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/coffee-slider-3.svg */ "./src/assets/images/coffee-slider-3.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<section class=\"section\" id=\"favorite\"> <div class=\"section__favorite\"> <h3 class=\"heading-dark\">Choose your <span>favorite</span> coffee</h3> <div class=\"slider\"> <button class=\"slider__arrow slider__arrow_left\"> <span class=\"slider__arrow_left-icon\"></span> </button> <div class=\"slider__container\"> <div class=\"slider__line\"> <div class=\"slider__line_card\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"photo of a glass with iced coffee\" draggable=\"false\"/> <h4 class=\"slider__line_card-title\">S’mores Frappuccino</h4> <p class=\"slider__line_card-text\"> This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk. </p> <p class=\"slider__line_card-price\">$5.50</p> </div> <div class=\"slider__line_card\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"photo of a glass with iced coffee\" draggable=\"false\"/> <h4 class=\"slider__line_card-title\">Caramel Macchiato</h4> <p class=\"slider__line_card-text\"> Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam. </p> <p class=\"slider__line_card-price\">$5.00</p> </div> <div class=\"slider__line_card\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"photo of a glass with iced coffee\" draggable=\"false\"/> <h4 class=\"slider__line_card-title\">Ice coffee</h4> <p class=\"slider__line_card-text\"> A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice. </p> <p class=\"slider__line_card-price\">$4.50</p> </div> </div> </div> <button class=\"slider__arrow slider__arrow_right\"> <span class=\"slider__arrow_right-icon\"></span> </button> </div> <div class=\"slider__progress\"> <div class=\"slider__progress-bar\"> <span class=\"slider__progress-bar_line\"></span> </div> <div class=\"slider__progress-bar\"> <span class=\"slider__progress-bar_line\"></span> </div> <div class=\"slider__progress-bar\"> <span class=\"slider__progress-bar_line\"></span> </div> </div> </div> </section> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/layout/Content/03_about/index.html":
/*!************************************************!*\
  !*** ./src/layout/Content/03_about/index.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/about-1.png */ "./src/assets/images/about-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/about-2.png */ "./src/assets/images/about-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/about-3.png */ "./src/assets/images/about-3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/about-4.png */ "./src/assets/images/about-4.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var code = "<section class=\"section\" id=\"about\"> <div class=\"section__about\"> <h3 class=\"heading-dark\"> Resource is <span>the perfect and cozy place</span> where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done. </h3> <div class=\"images__wrapper\"> <div class=\"image__container image-large image-1\"> <img class=\"img-1\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"a smiling young woman is sitting at a table with a cup of coffee\" draggable=\"false\"/> </div> <div class=\"image__container image-small image-2\"> <img class=\"img-2\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"a cup of coffee on a table with christmas lights on the background\" draggable=\"false\"/> </div> <div class=\"image__container image-small image-3\"> <img class=\"img-3\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"a young man with a cup of coffee in a cafe looking at the screen of his laptop\" draggable=\"false\"/> </div> <div class=\"image__container image-large image-4\"> <img class=\"img-4\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"a young couple with coffees in their hands sitting at a table and smiling dreamily\" draggable=\"false\"/> </div> </div> </div> </section> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/layout/Content/04_app/index.html":
/*!**********************************************!*\
  !*** ./src/layout/Content/04_app/index.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/mobile-screens.svg */ "./src/assets/images/mobile-screens.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<section class=\"section\" id=\"app\"> <div class=\"section__app\"> <div class=\"app__column-1\"> <h3 class=\"heading-dark\"> <span>Download</span> our apps to start ordering </h3> <p class=\"app__column-1_text\"> Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are </p> <div class=\"app__buttons\"> <button class=\"app__button\"> <span class=\"button__icon button__icon_ios\"></span><span class=\"button__text_small\">Available on the<span class=\"button__text_large\">App Store</span></span> </button> <button class=\"app__button\"> <span class=\"button__icon button__icon_android\"></span><span class=\"button__text_small\">Available on<span class=\"button__text_large\">Google Play</span></span> </button> </div> </div> <div class=\"app__column-2\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"photo of two mobile phones with coffee shop app on the screens\" draggable=\"false\"/> </div> </div> </section> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/layout/Footer/index.html":
/*!**************************************!*\
  !*** ./src/layout/Footer/index.html ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/pin-alt.svg */ "./src/assets/icons/pin-alt.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/phone.svg */ "./src/assets/icons/phone.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/clock.svg */ "./src/assets/icons/clock.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<div class=\"footer__container\"> <div class=\"footer__column\"> <h3 class=\"heading-light\"> Sip, Savor, Smile. <span>It's coffee time!</span> </h3> <div class=\"social-icons\"> <a href=\"#\" class=\"social-icon\"><span class=\"social-icon__twitter\"></span></a> <a href=\"#\" class=\"social-icon\"><span class=\"social-icon__instagram\"></span></a> <a href=\"#\" class=\"social-icon\"><span class=\"social-icon__facebook\"></span></a> </div> </div> <div class=\"footer__column\"> <div class=\"footer__contacts\" id=\"contacts\"> <p class=\"footer__contacts_title\">Contact us</p> <p class=\"footer__contacts_address\"> <a href=\"https://maps.app.goo.gl/RJapY2QV9Z1AZjim8\" target=\"_blank\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"pin icon\"/>8558 Green Rd., LA</a> </p> <p class=\"footer__contacts_phone\"> <a href=\"tel:+1(603)555-0123\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"phone icon\"/>+1 (603) 555-0123</a> </p> <p class=\"footer__contacts_schedule\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"clock icon\"/>Mon-Sat: 9:00 AM – 23:00 PM </p> </div> </div> </div> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/layout/Header/index.html":
/*!**************************************!*\
  !*** ./src/layout/Header/index.html ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/images/logo.svg */ "./src/assets/images/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/coffee-cup.svg */ "./src/assets/icons/coffee-cup.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<div class=\"header__container\"> <div class=\"logo\"> <a href=\"./index.html\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\" draggable=\"false\"/> <h1 class=\"visually-hidden\"> Resourse - the best coffee house in your area </h1></a> </div> <div class=\"navigation__wrapper\"> <nav class=\"header__navigation\"> <ul class=\"navigation__list\"> <li class=\"navigation__list_link home\"> <a href=\"#favorite\">Favorite coffee</a> </li> <li class=\"navigation__list_link menu\"> <a href=\"./#favorite\">Favorite coffee</a> </li> <li class=\"navigation__list_link home\"> <a href=\"#about\">About</a> </li> <li class=\"navigation__list_link menu\"> <a href=\"./#about\">About</a> </li> <li class=\"navigation__list_link home\"> <a href=\"#app\">Mobile app</a> </li> <li class=\"navigation__list_link menu\"> <a href=\"./#app\">Mobile app</a> </li> <li class=\"navigation__list_link\"> <a href=\"#contacts\">Contact us</a> </li> </ul> </nav> <div class=\"header__menu\"> <span>Menu <img class=\"icon-cup\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"coffee cup icon\"/></span> <a href=\"./menu.html\"><p>Menu</p> <img class=\"icon-cup\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"coffee cup icon\"/> </a> </div> </div> <div class=\"burger__container\"> <div class=\"burger\"> <span class=\"burger__line\"></span> <span class=\"burger__line\"></span> </div> </div> </div> ";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layout/Content/01_hero/index.scss":
/*!***********************************************!*\
  !*** ./src/layout/Content/01_hero/index.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Content/01_hero/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layout/Content/02_favorite/index.scss":
/*!***************************************************!*\
  !*** ./src/layout/Content/02_favorite/index.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Content/02_favorite/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layout/Content/03_about/index.scss":
/*!************************************************!*\
  !*** ./src/layout/Content/03_about/index.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Content/03_about/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layout/Content/04_app/index.scss":
/*!**********************************************!*\
  !*** ./src/layout/Content/04_app/index.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Content/04_app/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layout/Footer/index.scss":
/*!**************************************!*\
  !*** ./src/layout/Footer/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Footer/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layout/Header/index.scss":
/*!**************************************!*\
  !*** ./src/layout/Header/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Header/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/Header */ "./src/layout/Header/index.js");
/* harmony import */ var _layout_Content_01_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/Content/01_hero */ "./src/layout/Content/01_hero/index.js");
/* harmony import */ var _layout_Content_02_favorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/Content/02_favorite */ "./src/layout/Content/02_favorite/index.js");
/* harmony import */ var _layout_Content_03_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/Content/03_about */ "./src/layout/Content/03_about/index.js");
/* harmony import */ var _layout_Content_04_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/Content/04_app */ "./src/layout/Content/04_app/index.js");
/* harmony import */ var _layout_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/Footer */ "./src/layout/Footer/index.js");








const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

header.append(_layout_Header__WEBPACK_IMPORTED_MODULE_1__["default"]);
main.append(_layout_Content_01_hero__WEBPACK_IMPORTED_MODULE_2__["default"]);
main.append(_layout_Content_02_favorite__WEBPACK_IMPORTED_MODULE_3__["default"]);
main.append(_layout_Content_03_about__WEBPACK_IMPORTED_MODULE_4__["default"]);
main.append(_layout_Content_04_app__WEBPACK_IMPORTED_MODULE_5__["default"]);
footer.append(_layout_Footer__WEBPACK_IMPORTED_MODULE_6__["default"]);

console.log(
  `Привет! Ещё работаю над кнопкой load more. Интерактивность кнопок в модалках точно не успею сделать. Можешь уже проверять, если ждать больше нет возможности! Спасибо большое за терпение!`
);
console.log(`1. Burger: +22;
2. Carousel: +24;
3. Categories of products: +12;
  + The Coffee category is active and the corresponding products are displayed when opening or reloading the menu page: +2
  + When switching categories, the products of the selected category are displayed: +2;
  + For screens with a width of 768px or less, when opening/reloading the page or switching categories, only 4 products are displayed. If there are more than 4 products in the displayed category, a Load More button is displayed below: +4;
  + When changing the screen width, the product display mode (8 products per page or 4 products with a Load More button) changes without page reloading: +4
4. Modal: +12;
  + The Modal with the description of a specific product opens when clicking on any part of a card of product: +2
  + The part of the page outside the Modal is darkened: +2
  + When the Modal is open, the vertical scroll of the page becomes inactive; when closed, it becomes active again: +2
  + Clicking on the area around the Modal and Close button closes it: +2
  + The Modal is centered on both axes, sizes of modal elements and their layout match the design: +2
  + After the Modal is opened, the 'Size' option 'S' is selected, and no option in the 'Additives' section is selected. The product's final price is the same as in the card: +2
5. Video: +8;

Total: 78`);


/***/ }),

/***/ "./src/layout/Content/01_hero/index.js":
/*!*********************************************!*\
  !*** ./src/layout/Content/01_hero/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/htmlToElement */ "./src/utils/htmlToElement.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/layout/Content/01_hero/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/layout/Content/01_hero/index.scss");





const content = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);


/***/ }),

/***/ "./src/layout/Content/02_favorite/index.js":
/*!*************************************************!*\
  !*** ./src/layout/Content/02_favorite/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/htmlToElement */ "./src/utils/htmlToElement.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/layout/Content/02_favorite/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/layout/Content/02_favorite/index.scss");





const content = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"]);

document.addEventListener("DOMContentLoaded", () => {
  const sliderLine = document.querySelector(".slider__line");
  const slides = document.querySelectorAll(".slider__line_card");
  const arrowLeft = document.querySelector(".slider__arrow_left");
  const arrowRight = document.querySelector(".slider__arrow_right");
  const progressBars = document.querySelectorAll(".slider__progress-bar_line");

  let slideIndex = 0;
  let width;
  let progressBarIndex = 0;
  let x1 = null;

  progressBars[slideIndex].classList.add("active");

  function init() {
    width = document.querySelector(".slider__container").offsetWidth;
    sliderLine.style.width = width * slides.length + "px";
    slides.forEach((slide) => {
      slide.style.width = width + "px";
      slide.style.height = "auto";
    });
    rollSlider();
  }
  init();
  window.addEventListener("resize", init);

  const nextSlide = () => {
    slideIndex++;
    progressBarIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
      progressBarIndex = 0;
    }
    rollSlider();
    thisSlide(progressBarIndex);
  };
  const prevSlide = () => {
    slideIndex--;
    progressBarIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
      progressBarIndex = slides.length - 1;
    }
    rollSlider();
    thisSlide(progressBarIndex);
  };
  arrowRight.addEventListener("click", nextSlide);
  arrowLeft.addEventListener("click", prevSlide);
  function rollSlider() {
    sliderLine.style.transform = "translate(-" + slideIndex * width + "px)";
  }
  progressBars.forEach((progressBar, index) => {
    progressBar.addEventListener("click", () => {
      slideIndex = index;
      sliderLine.style.transform = "translate(-" + slideIndex * width + "px)";
      progressBarIndex = index;
      thisSlide(progressBarIndex);
    });
  });
  const thisSlide = (index) => {
    for (let progressBar of progressBars) {
      progressBar.classList.remove("active");
    }
    progressBars[index].classList.add("active");
  };

  progressBars.forEach((progressBar) => {
    progressBar.addEventListener("animationend", () => {
      nextSlide();
    });
  });
  sliderLine.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );

  function toggleAnimation() {
    let progressBar = progressBars[slideIndex];
    progressBar.classList.toggle("paused");
  }

  slides.forEach((slide) => {
    slide.addEventListener("pointerenter", (e) => {
      if (e.pointerType === "touch") return;
      toggleAnimation();
    });
  });
  slides.forEach((slide) => {
    slide.addEventListener("pointerleave", (e) => {
      if (e.pointerType === "touch") return;
      toggleAnimation();
    });
  });
  slides.forEach((slide) => {
    slide.addEventListener("touchstart", () => {
      toggleAnimation();
    });
  });
  slides.forEach((slide) => {
    slide.addEventListener("touchend", () => {
      toggleAnimation();
    });
  });

  sliderLine.addEventListener("animationend", nextSlide);

  // Touch events
  sliderLine.addEventListener("touchstart", handleTouchStart, false);
  sliderLine.addEventListener("touchmove", handleTouchMove, false);

  function handleTouchStart(event) {
    x1 = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    if (!x1) {
      return false;
    }
    let x2 = event.touches[0].clientX;
    if (x2 - x1 > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
    x1 = null;
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);


/***/ }),

/***/ "./src/layout/Content/03_about/index.js":
/*!**********************************************!*\
  !*** ./src/layout/Content/03_about/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/htmlToElement */ "./src/utils/htmlToElement.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/layout/Content/03_about/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/layout/Content/03_about/index.scss");





const content = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);


/***/ }),

/***/ "./src/layout/Content/04_app/index.js":
/*!********************************************!*\
  !*** ./src/layout/Content/04_app/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/htmlToElement */ "./src/utils/htmlToElement.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/layout/Content/04_app/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/layout/Content/04_app/index.scss");





const content = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);


/***/ }),

/***/ "./src/layout/Footer/index.js":
/*!************************************!*\
  !*** ./src/layout/Footer/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/htmlToElement */ "./src/utils/htmlToElement.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/layout/Footer/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/layout/Footer/index.scss");






const footer = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);


/***/ }),

/***/ "./src/layout/Header/index.js":
/*!************************************!*\
  !*** ./src/layout/Header/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/htmlToElement */ "./src/utils/htmlToElement.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/layout/Header/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/layout/Header/index.scss");





const header = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"]);

document.addEventListener("DOMContentLoaded", () => {
  // Burger
  const burgerBtn = document.querySelector(".burger__container");
  const menu = document.querySelector(".navigation__wrapper");
  const navLinks = document.querySelectorAll(".navigation__list_link");
  const body = document.querySelector("body");

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open");
    menu.classList.toggle("open");
    body.classList.toggle("no-scroll");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burgerBtn.classList.remove("open");
      menu.classList.remove("open");

      body.classList.remove("no-scroll");
    });
  });
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/utils/htmlToElement.js":
/*!************************************!*\
  !*** ./src/utils/htmlToElement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(htmlString) {
  const template = document.createElement("template");
  template.innerHTML = htmlString;
  return template.content.firstChild;
}


/***/ }),

/***/ "./src/assets/icons/android-hover.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/android-hover.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "096d24fce35e3952b642.svg";

/***/ }),

/***/ "./src/assets/icons/android.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/android.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5e34d29a3c4ef2e5cf1.svg";

/***/ }),

/***/ "./src/assets/icons/arrow-left-hover.svg":
/*!***********************************************!*\
  !*** ./src/assets/icons/arrow-left-hover.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0194405d4179d056a447.svg";

/***/ }),

/***/ "./src/assets/icons/arrow-left.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/arrow-left.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e3082a343b3a1232cf5.svg";

/***/ }),

/***/ "./src/assets/icons/arrow-right-hover.svg":
/*!************************************************!*\
  !*** ./src/assets/icons/arrow-right-hover.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf924f41506bbabf26b.svg";

/***/ }),

/***/ "./src/assets/icons/arrow-right.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/arrow-right.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c59dad16c604600e2a2.svg";

/***/ }),

/***/ "./src/assets/icons/clock.svg":
/*!************************************!*\
  !*** ./src/assets/icons/clock.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "951eae2c7d8f65f65487.svg";

/***/ }),

/***/ "./src/assets/icons/coffee-cup.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/coffee-cup.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a18d1a426d619ca61f4.svg";

/***/ }),

/***/ "./src/assets/icons/facebook-hover.svg":
/*!*********************************************!*\
  !*** ./src/assets/icons/facebook-hover.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e93450a82f4a5cda280a.svg";

/***/ }),

/***/ "./src/assets/icons/facebook.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/facebook.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c7eee4b2849d2393a27.svg";

/***/ }),

/***/ "./src/assets/icons/instagram-hover.svg":
/*!**********************************************!*\
  !*** ./src/assets/icons/instagram-hover.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed7241475529d0d79cd7.svg";

/***/ }),

/***/ "./src/assets/icons/instagram.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/instagram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "310b880c9247c18aa2b6.svg";

/***/ }),

/***/ "./src/assets/icons/ios-hover.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/ios-hover.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92f3bfa6e7ef5890e145.svg";

/***/ }),

/***/ "./src/assets/icons/ios.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/ios.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1917f87fe2e063e2ccad.svg";

/***/ }),

/***/ "./src/assets/icons/phone.svg":
/*!************************************!*\
  !*** ./src/assets/icons/phone.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40ba4d2062cb584f8af4.svg";

/***/ }),

/***/ "./src/assets/icons/pin-alt.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/pin-alt.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93e898bd9f3015ed017b.svg";

/***/ }),

/***/ "./src/assets/icons/twitter-hover.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/twitter-hover.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f34b23382dce73d6487.svg";

/***/ }),

/***/ "./src/assets/icons/twitter.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/twitter.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55bd030ecd99e21296d1.svg";

/***/ }),

/***/ "./src/assets/images/about-1.png":
/*!***************************************!*\
  !*** ./src/assets/images/about-1.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89009fe876a580603123.png";

/***/ }),

/***/ "./src/assets/images/about-2.png":
/*!***************************************!*\
  !*** ./src/assets/images/about-2.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8437378d13ae38306505.png";

/***/ }),

/***/ "./src/assets/images/about-3.png":
/*!***************************************!*\
  !*** ./src/assets/images/about-3.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "450b26549f3eb0ea1842.png";

/***/ }),

/***/ "./src/assets/images/about-4.png":
/*!***************************************!*\
  !*** ./src/assets/images/about-4.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9687c308615334c2c751.png";

/***/ }),

/***/ "./src/assets/images/coffee-slider-1.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/coffee-slider-1.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f23cb1fd364f5bf5ef3.svg";

/***/ }),

/***/ "./src/assets/images/coffee-slider-2.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/coffee-slider-2.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98374f43f173e6836ec0.svg";

/***/ }),

/***/ "./src/assets/images/coffee-slider-3.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/coffee-slider-3.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "181927cff0a0ec8c3a5a.svg";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38aa319db1d0695ead58.svg";

/***/ }),

/***/ "./src/assets/images/mobile-screens.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/mobile-screens.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c5c17c1afcccd24252d.svg";

/***/ }),

/***/ "./src/assets/video/video-_2160p_.webm":
/*!*********************************************!*\
  !*** ./src/assets/video/video-_2160p_.webm ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23f75e53e1aa56c09c55.webm";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDak5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNyQkE7Ozs7O0FFQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wMV9oZXJvL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAyX2Zhdm9yaXRlL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAzX2Fib3V0L2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzA0X2FwcC9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9IZWFkZXIvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAxX2hlcm8vaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDJfZmF2b3JpdGUvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDNfYWJvdXQvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDRfYXBwL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Gb290ZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5odG1sIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9pbmRleC5zY3NzPzk1NzMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAxX2hlcm8vaW5kZXguc2Nzcz82YWZlIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wMl9mYXZvcml0ZS9pbmRleC5zY3NzPzhjNDUiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAzX2Fib3V0L2luZGV4LnNjc3M/MzUxZSIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDRfYXBwL2luZGV4LnNjc3M/M2ZjNCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0Zvb3Rlci9pbmRleC5zY3NzP2JhN2IiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9IZWFkZXIvaW5kZXguc2Nzcz8yOWY2Iiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wMV9oZXJvL2luZGV4LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wMl9mYXZvcml0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDNfYWJvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzA0X2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvdXRpbHMvaHRtbFRvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvaW50ZXIpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDVjOTtcbn1cblxuLndyYXBwZXIge1xuICBtYXgtd2lkdGg6IDE0NHJlbTtcbiAgcGFkZGluZzogMCA0cmVtIDRyZW0gNHJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIG1heC13aWR0aDogNzYuOHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwIDEuNnJlbSA0cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIG1heC13aWR0aDogMzhyZW07XG4gIH1cbn1cblxuYTpsaW5rLFxuYTp2aXNpdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDAuOHJlbTtcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IDYuNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDVjOTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG59XG5cbi5idXR0b24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFrRUE7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFoRUY7O0FBa0VBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBQS9ERjs7QUFpRUE7RUFDRSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBcENjO0FBMUJoQjs7QUFpRUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQTNDYztFQTRDZCxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQTlERjtBQUZFO0VBeURGO0lBVUksa0JBQUE7RUE3REY7QUFDRjtBQURFO0VBbURGO0lBY0ksc0JBQUE7RUE1REY7QUFDRjtBQUFFO0VBNkNGO0lBa0JJLGdCQUFBO0VBM0RGO0FBQ0Y7O0FBOERBOztFQUVFLHFCQUFBO0VBQ0EsY0FBQTtBQTNERjs7QUE4REE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQTNERjs7QUE2REE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBL0VjO0VBZ0ZkLG9CQUFBO0FBMURGOztBQTZEQTtFQTlIRSxpQkErSGM7RUE5SGQsZ0JBOEhzQjtFQTdIdEIsaUJBNkgyQjtFQTVIM0IsY0E2Q2dCO0FBd0JsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGhlaWdodCwgJGNvbG9yKSB7XFxyXFxuICBmb250LXNpemU6ICRzaXplO1xcclxcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XFxyXFxuICBsaW5lLWhlaWdodDogJGhlaWdodDtcXHJcXG4gIGNvbG9yOiAkY29sb3I7XFxyXFxufVxcclxcblxcclxcbiV0cmFuc2l0aW9uIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbkBtaXhpbiBtZWRpYS1kZXNrdG9wIHtcXHJcXG4gIC8vIDEyMjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRkZXNrdG9wLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgLy8gMTAyNHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1sYW5kLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgLy8gNzY4cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LXBvcnQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgLy8gNzIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLWxhcmdlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlIHtcXHJcXG4gIC8vIDQyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxuLy8gQmFja2dyb3VuZCBDb2xvclxcclxcbiRjb2xvci1wcmltYXJ5OiAjZTNkNWM5O1xcclxcbiRjb2xvci1zZWNvbmRhcnk6ICM2NjVmNTU7XFxyXFxuJGNvbG9yLWJhY2tkcm9wOiAjNDAzZjNkY2M7XFxyXFxuXFxyXFxuLy8gVGV4dCBDb2xvclxcclxcbiRjb2xvci10ZXh0LWRhcms6ICM0MDNmM2Q7XFxyXFxuJGNvbG9yLXRleHQtbGlnaHQ6ICNlMWQ0Yzk7XFxyXFxuJGNvbG9yLXRleHQtYWNjZW50OiAjYjA5MDdhO1xcclxcblxcclxcbi8vIEJvcmRlciBDb2xvcjpcXHJcXG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjYzFiNmFkO1xcclxcbiRjb2xvci1ib3JkZXItZGFyazogIzY2NWY1NTtcXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbiRkZXNrdG9wLXdpZHRoOiAxMjIwcHg7XFxyXFxuJHRhYmxldC1sYW5kLXdpZHRoOiAxMDI0cHg7XFxyXFxuJHRhYmxldC1wb3J0LXdpZHRoOiA3NjhweDtcXHJcXG4kbW9iaWxlLWxhcmdlLXdpZHRoOiA3MjBweDtcXHJcXG4kbW9iaWxlLXdpZHRoOiA0MjBweDtcXHJcXG5cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL2ludGVyXFxcIik7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBtYXgtd2lkdGg6IDE0NHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgNHJlbSA0cmVtIDRyZW07XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICBtYXgtd2lkdGg6IDc2LjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgICBwYWRkaW5nOiAwIDEuNnJlbSA0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAzOHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuYTpsaW5rLFxcclxcbmE6dmlzaXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjhyZW07XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxuICBoZWlnaHQ6IDYuNHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tdGV4dCB7XFxyXFxuICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2VjdGlvbl9faGVybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNjQuNHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuc2VjdGlvbl9faGVybyB7XG4gICAgbWluLWhlaWdodDogNTUuMnJlbTtcbiAgfVxufVxuXG4uYmctdmlkZW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMDtcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuYmctdmlkZW8ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiA1NS4ycmVtO1xuICB9XG59XG5cbi5iZy12aWRlb19fY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc2VjdGlvbl9faGVyb19jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogMTByZW07XG4gIHdpZHRoOiA1M3JlbTtcbiAgZ2FwOiA0cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zZWN0aW9uX19oZXJvX2NvbnRlbnQge1xuICAgIG1hcmdpbjogMTByZW0gNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5zZWN0aW9uX19oZXJvX2NvbnRlbnQge1xuICAgIHdpZHRoOiAzNC44cmVtO1xuICAgIG1hcmdpbjogNnJlbSAyLjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuc2VjdGlvbl9faGVyb19jb250ZW50IHtcbiAgICB3aWR0aDogMzEuNnJlbTtcbiAgICBtYXJnaW46IDZyZW0gMS42cmVtO1xuICB9XG59XG5cbi5oZWFkaW5nLWxpZ2h0IHtcbiAgZm9udC1zaXplOiA3LjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMDUlO1xuICBjb2xvcjogI2UxZDRjOTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuaGVhZGluZy1saWdodCB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDExNSU7XG4gICAgY29sb3I6ICNlMWQ0Yzk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuaGVhZGluZy1saWdodCB7XG4gICAgZm9udC1zaXplOiA0LjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTE1JTtcbiAgICBjb2xvcjogI2UxZDRjOTtcbiAgfVxufVxuLmhlYWRpbmctbGlnaHQgc3BhbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICNiMDkwN2E7XG59XG5cbi5zZWN0aW9uX19oZXJvX3RleHQge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjZTFkNGM5O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5zZWN0aW9uX19oZXJvX3RleHQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuc2VjdGlvbl9faGVyb190ZXh0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5cbi5tZW51LWJ1dHRvbjpob3ZlciAuYnV0dG9uLWltYWdlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5tZW51LWJ1dHRvbjpob3ZlciAuYnV0dG9uLXRleHQge1xuICBtYXJnaW4tbGVmdDogMHJlbTtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idXR0b24tdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cblxuLmJ1dHRvbi1pbWFnZSB7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idXR0b24taW1hZ2Uge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQvQ29udGVudC8wMV9oZXJvL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0VBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQS9ERjtBQW1DRTtFQTBCRjtJQU1JLG1CQUFBO0VBL0RGO0FBQ0Y7O0FBaUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQTlERjtBQWtCRTtFQW1DRjtJQVlJLFVBQUE7SUFDQSxlQUFBO0VBN0RGO0FBQ0Y7O0FBZ0VBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQTdERjs7QUFnRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBN0RGO0FBbEJFO0VBc0VGO0lBWUksa0JBQUE7RUE1REY7QUFDRjtBQWpCRTtFQWdFRjtJQWVJLGNBQUE7SUFDQSxtQkFBQTtFQTFERjtBQUNGO0FBakJFO0VBMERGO0lBbUJJLGNBQUE7SUFDQSxtQkFBQTtFQXhERjtBQUNGOztBQTJEQTtFQXZIRSxpQkF3SGM7RUF2SGQsZ0JBdUhzQjtFQXRIdEIsaUJBc0gyQjtFQXJIM0IsY0E4Q2lCO0FBa0JuQjtBQXBDRTtFQXdGRjtJQXZIRSxlQTJIZ0I7SUExSGhCLGdCQTBIc0I7SUF6SHRCLGlCQXlIMkI7SUF4SDNCLGNBOENpQjtFQXlCakI7QUFDRjtBQXRDRTtFQWtGRjtJQXZIRSxpQkE4SGdCO0lBN0hoQixnQkE2SHdCO0lBNUh4QixpQkE0SDZCO0lBM0g3QixjQThDaUI7RUFpQ2pCO0FBQ0Y7QUE4Q0U7RUFDRSxrQkFBQTtFQUNBLGNBakZnQjtBQXFDcEI7O0FBK0NBO0VBdElFLGlCQXVJYztFQXRJZCxnQkFzSXNCO0VBckl0QixpQkFxSTJCO0VBcEkzQixjQThDaUI7QUE2Q25CO0FBL0RFO0VBdUdGO0lBSUksbUJBQUE7RUF4Q0Y7QUFDRjtBQTlERTtFQWlHRjtJQU9JLGdCQUFBO0VBdENGO0FBQ0Y7O0FBMkNJO0VBQ0UsVUFBQTtBQXhDTjtBQTJDSTtFQUNFLGlCQUFBO0FBekNOOztBQThDQTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7QUEzQ0Y7QUEzRkU7RUFvSUY7SUFJSSxjQUFBO0VBekNGO0FBQ0Y7O0FBNENBO0VBSUUsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUE1Q0Y7QUF0R0U7RUE0SUY7SUFFSSxVQUFBO0VBcENGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG5AbWl4aW4gbWVkaWEtZGVza3RvcCB7XFxyXFxuICAvLyAxMjIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gIC8vIDEwMjRweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtbGFuZC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gIC8vIDc2OHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1wb3J0LXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gIC8vIDcyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1sYXJnZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAvLyA0MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UzZDVjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2MxYjZhZDtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG4kZGVza3RvcC13aWR0aDogMTIyMHB4O1xcclxcbiR0YWJsZXQtbGFuZC13aWR0aDogMTAyNHB4O1xcclxcbiR0YWJsZXQtcG9ydC13aWR0aDogNzY4cHg7XFxyXFxuJG1vYmlsZS1sYXJnZS13aWR0aDogNzIwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNDIwcHg7XFxyXFxuXFxuLnNlY3Rpb25fX2hlcm8ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWluLWhlaWdodDogNjQuNHJlbTtcXHJcXG5cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDU1LjJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcbi5iZy12aWRlbyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgaGVpZ2h0OiA1NS4ycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYmctdmlkZW9fX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25fX2hlcm9fY29udGVudCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgbWFyZ2luOiAxMHJlbTtcXHJcXG4gIHdpZHRoOiA1M3JlbTtcXHJcXG4gIGdhcDogNHJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgbWFyZ2luOiAxMHJlbSA2cmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgd2lkdGg6IDM0LjhyZW07XFxyXFxuICAgIG1hcmdpbjogNnJlbSAyLjhyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICB3aWR0aDogMzEuNnJlbTtcXHJcXG4gICAgbWFyZ2luOiA2cmVtIDEuNnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmctbGlnaHQge1xcclxcbiAgQGluY2x1ZGUgdGV4dCg3LjJyZW0sIDYwMCwgMTA1JSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCg1cmVtLCA2MDAsIDExNSUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoNC4ycmVtLCA2MDAsIDExNSUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNwYW4ge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1hY2NlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi5zZWN0aW9uX19oZXJvX3RleHQge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDQwMCwgMTUwJSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tZW51LWJ1dHRvbiB7XFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgLmJ1dHRvbi1pbWFnZSB7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnV0dG9uLXRleHQge1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tdGV4dCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1pbWFnZSB7XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Fycm93LWxlZnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3ctbGVmdC1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcnJvdy1yaWdodC1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZWN0aW9uX19mYXZvcml0ZSB7XG4gIHBhZGRpbmc6IDEwcmVtIDA7XG59XG5cbi5oZWFkaW5nLWRhcmsge1xuICBmb250LXNpemU6IDZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5oZWFkaW5nLWRhcmsge1xuICAgIGZvbnQtc2l6ZTogNC4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gICAgY29sb3I6ICM0MDNmM2Q7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuaGVhZGluZy1kYXJrIHtcbiAgICBmb250LXNpemU6IDMuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICAgIGNvbG9yOiAjNDAzZjNkO1xuICB9XG59XG4uaGVhZGluZy1kYXJrIHNwYW4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjYjA5MDdhO1xufVxuXG4uc2xpZGVyX19hcnJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjVmNTU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLnNsaWRlcl9fYXJyb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5zbGlkZXJfX2Fycm93IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyLjRyZW07XG4gIGhlaWdodDogMi40cmVtO1xufVxuLnNsaWRlcl9fYXJyb3dfbGVmdC1pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5zbGlkZXJfX2Fycm93X3JpZ2h0LWljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuc2xpZGVyX19hcnJvdzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NWY1NTtcbiAgfVxuICAuc2xpZGVyX19hcnJvdzpob3ZlciAuYXJyb3dfbGVmdC1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIH1cbiAgLnNsaWRlcl9fYXJyb3c6aG92ZXIgLmFycm93X3JpZ2h0LWljb24ge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgfVxufVxuXG4uc2xpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuc2xpZGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4uc2xpZGVyX19jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDQ4cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5zbGlkZXJfX2NvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAzNC44cmVtO1xuICB9XG59XG5cbi5zbGlkZXJfX2xpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG59XG4uc2xpZGVyX19saW5lX2NhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQ4cmVtO1xuICBnYXA6IDEuOHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuc2xpZGVyX19saW5lX2NhcmQge1xuICAgIG1heC13aWR0aDogMzQuOHJlbTtcbiAgfVxufVxuLnNsaWRlcl9fbGluZV9jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBjb2xvcjogIzQwM2YzZDtcbn1cbi5zbGlkZXJfX2xpbmVfY2FyZC10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogIzQwM2YzZDtcbn1cbi5zbGlkZXJfX2xpbmVfY2FyZC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59XG5cbi5zbGlkZXJfX3Byb2dyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMS4ycmVtO1xuICBwYWRkaW5nLXRvcDogMy44cmVtO1xufVxuLnNsaWRlcl9fcHJvZ3Jlc3MtYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFiNmFkO1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiAwLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xufVxuLnNsaWRlcl9fcHJvZ3Jlc3MtYmFyX2xpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjVmNTU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDAuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG59XG4uc2xpZGVyX19wcm9ncmVzcy1iYXJfbGluZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xuICBhbmltYXRpb246IHByb2dyZXNzIDNzIGxpbmVhciAwcyBmb3J3YXJkcztcbn1cbi5zbGlkZXJfX3Byb2dyZXNzLWJhcl9saW5lLnBhdXNlZCB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xuICBmcm9tIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQvQ29udGVudC8wMl9mYXZvcml0ZS9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdFQTtFQUNFLGdCQUFBO0FBL0RGOztBQWlFQTtFQWxFRSxlQW1FYztFQWxFZCxnQkFrRW9CO0VBakVwQixpQkFpRXlCO0VBaEV6QixjQTZDZ0I7RUFvQmhCLGtCQUFBO0FBM0RGO0FBc0JFO0VBbUNGO0lBbEVFLGlCQXVFZ0I7SUF0RWhCLGdCQXNFd0I7SUFyRXhCLGlCQXFFNkI7SUFwRTdCLGNBNkNnQjtFQWhDaEI7QUFDRjtBQW9CRTtFQTZCRjtJQWxFRSxpQkEwRWdCO0lBekVoQixnQkF5RXdCO0lBeEV4QixpQkF3RTZCO0lBdkU3QixjQTZDZ0I7RUF4QmhCO0FBQ0Y7QUFvREU7RUFDRSxrQkFBQTtFQUNBLGNBN0JnQjtBQXJCcEI7O0FBcURBO0VBQ0UseUJBeENjO0VBeUNkLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBbERGO0FBUEU7RUFtREY7SUFTSSxhQUFBO0VBakRGO0FBQ0Y7QUFtREU7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBakRKO0FBbURFO0VBQ0UsbURBQUE7RUFDQSxnQ0FBQTtBQWpESjtBQW1ERTtFQUNFLG1EQUFBO0VBQ0EsZ0NBQUE7QUFqREo7QUFtREU7RUFDRTtJQUNFLHlCQWpFWTtFQWdCaEI7RUFrREk7SUFDRSxtREFBQTtFQWhETjtFQWtESTtJQUNFLG1EQUFBO0VBaEROO0FBQ0Y7O0FBcURBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWxERjtBQTNDRTtFQXlGRjtJQU9JLHVCQUFBO0VBakRGO0FBQ0Y7O0FBbURBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQWhERjtBQXJERTtFQW1HRjtJQUtJLGtCQUFBO0VBL0NGO0FBQ0Y7O0FBaURBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBOUNGO0FBZ0RFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQTlDSjtBQXZFRTtFQStHQTtJQVNJLGtCQUFBO0VBN0NKO0FBQ0Y7QUErQ0k7RUExSkYsaUJBMkprQjtFQTFKbEIsZ0JBMEowQjtFQXpKMUIsaUJBeUorQjtFQXhKL0IsY0E2Q2dCO0FBaUVsQjtBQTRDSTtFQTdKRixpQkE4SmtCO0VBN0psQixnQkE2SjBCO0VBNUoxQixpQkE0SitCO0VBM0ovQixjQTZDZ0I7QUF1RWxCO0FBeUNJO0VBaEtGLGlCQWlLa0I7RUFoS2xCLGdCQWdLMEI7RUEvSjFCLGlCQStKK0I7RUE5Si9CLGNBNkNnQjtBQTZFbEI7O0FBd0NBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBckNGO0FBdUNFO0VBQ0Usa0JBQUE7RUFDQSx5QkF4SGlCO0VBeUhqQixXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBckNKO0FBdUNJO0VBQ0Usa0JBQUE7RUFDQSx5QkE5SGM7RUErSGQsUUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQXJDTjtBQXVDTTtFQUNFLHlCQXBJWTtFQXFJWix5Q0FBQTtBQXJDUjtBQXVDTTtFQUNFLDRCQUFBO0FBckNSOztBQTBDQTtFQUNFO0lBQ0UsUUFBQTtFQXZDRjtFQXlDQTtJQUNFLFdBQUE7RUF2Q0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGhlaWdodCwgJGNvbG9yKSB7XFxyXFxuICBmb250LXNpemU6ICRzaXplO1xcclxcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XFxyXFxuICBsaW5lLWhlaWdodDogJGhlaWdodDtcXHJcXG4gIGNvbG9yOiAkY29sb3I7XFxyXFxufVxcclxcblxcclxcbiV0cmFuc2l0aW9uIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbkBtaXhpbiBtZWRpYS1kZXNrdG9wIHtcXHJcXG4gIC8vIDEyMjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRkZXNrdG9wLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgLy8gMTAyNHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1sYW5kLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgLy8gNzY4cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LXBvcnQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgLy8gNzIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLWxhcmdlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlIHtcXHJcXG4gIC8vIDQyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxuLy8gQmFja2dyb3VuZCBDb2xvclxcclxcbiRjb2xvci1wcmltYXJ5OiAjZTNkNWM5O1xcclxcbiRjb2xvci1zZWNvbmRhcnk6ICM2NjVmNTU7XFxyXFxuJGNvbG9yLWJhY2tkcm9wOiAjNDAzZjNkY2M7XFxyXFxuXFxyXFxuLy8gVGV4dCBDb2xvclxcclxcbiRjb2xvci10ZXh0LWRhcms6ICM0MDNmM2Q7XFxyXFxuJGNvbG9yLXRleHQtbGlnaHQ6ICNlMWQ0Yzk7XFxyXFxuJGNvbG9yLXRleHQtYWNjZW50OiAjYjA5MDdhO1xcclxcblxcclxcbi8vIEJvcmRlciBDb2xvcjpcXHJcXG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjYzFiNmFkO1xcclxcbiRjb2xvci1ib3JkZXItZGFyazogIzY2NWY1NTtcXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbiRkZXNrdG9wLXdpZHRoOiAxMjIwcHg7XFxyXFxuJHRhYmxldC1sYW5kLXdpZHRoOiAxMDI0cHg7XFxyXFxuJHRhYmxldC1wb3J0LXdpZHRoOiA3NjhweDtcXHJcXG4kbW9iaWxlLWxhcmdlLXdpZHRoOiA3MjBweDtcXHJcXG4kbW9iaWxlLXdpZHRoOiA0MjBweDtcXHJcXG5cXG4uc2VjdGlvbl9fZmF2b3JpdGUge1xcclxcbiAgcGFkZGluZzogMTByZW0gMDtcXHJcXG59XFxyXFxuLmhlYWRpbmctZGFyayB7XFxyXFxuICBAaW5jbHVkZSB0ZXh0KDZyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDQuMnJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMy4ycmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgfVxcclxcblxcclxcbiAgc3BhbiB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6ICRjb2xvci10ZXh0LWFjY2VudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLnNsaWRlcl9fYXJyb3cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWRhcms7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB3aWR0aDogNnJlbTtcXHJcXG4gIGhlaWdodDogNnJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAyLjRyZW07XFxyXFxuICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgfVxcclxcbiAgJl9sZWZ0LWljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3ctbGVmdC5zdmcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gICZfcmlnaHQtaWNvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcnJvdy1yaWdodC5zdmcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcXHJcXG4gICAgICAuYXJyb3dfbGVmdC1pY29uIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcnJvdy1sZWZ0LWhvdmVyLnN2Zyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIC5hcnJvd19yaWdodC1pY29uIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcnJvdy1yaWdodC1ob3Zlci5zdmcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDRyZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLnNsaWRlcl9fY29udGFpbmVyIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBtYXgtd2lkdGg6IDQ4cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNC44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uc2xpZGVyX19saW5lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAmX2NhcmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDQ4cmVtO1xcclxcbiAgICBnYXA6IDEuOHJlbTtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDM0LjhyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi10aXRsZSB7XFxyXFxuICAgICAgQGluY2x1ZGUgdGV4dCgyLjRyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgIH1cXHJcXG4gICAgJi10ZXh0IHtcXHJcXG4gICAgICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNDAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gICAgfVxcclxcbiAgICAmLXByaWNlIHtcXHJcXG4gICAgICBAaW5jbHVkZSB0ZXh0KDIuNHJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4uc2xpZGVyX19wcm9ncmVzcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEuMnJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAzLjhyZW07XFxyXFxuXFxyXFxuICAmLWJhciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvcmRlci1saWdodDtcXHJcXG4gICAgd2lkdGg6IDRyZW07XFxyXFxuICAgIGhlaWdodDogMC40cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG5cXHJcXG4gICAgJl9saW5lIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJvcmRlci1kYXJrO1xcclxcbiAgICAgIHdpZHRoOiAwO1xcclxcbiAgICAgIGhlaWdodDogMC40cmVtO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcclxcblxcclxcbiAgICAgICYuYWN0aXZlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3JkZXItZGFyaztcXHJcXG4gICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgM3MgbGluZWFyIDBzIGZvcndhcmRzO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmLnBhdXNlZCB7XFxyXFxuICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHByb2dyZXNzIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlY3Rpb25fX2Fib3V0IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xufVxuLnNlY3Rpb25fX2Fib3V0IC5oZWFkaW5nLWRhcmsge1xuICBmb250LXNpemU6IDU5LjlweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLnNlY3Rpb25fX2Fib3V0IC5oZWFkaW5nLWRhcmsge1xuICAgIGZvbnQtc2l6ZTogNC4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gICAgY29sb3I6ICM0MDNmM2Q7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuc2VjdGlvbl9fYWJvdXQgLmhlYWRpbmctZGFyayB7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTI1JTtcbiAgICBjb2xvcjogIzQwM2YzZDtcbiAgfVxufVxuXG4uaW1hZ2VzX193cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiA0cmVtO1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmltYWdlc19fd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAwIDE1JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pbWFnZXNfX3dyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4uaW1hZ2VfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmltYWdlX19jb250YWluZXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmltYWdlX19jb250YWluZXIgaW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTIpO1xuICB9XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmltYWdlX19jb250YWluZXIgaW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTYpO1xuICB9XG59XG5cbi5pbWFnZS1sYXJnZSB7XG4gIGhlaWdodDogNTlyZW07XG4gIGdyaWQtcm93OiBzcGFuIDI7XG59XG5cbi5pbWFnZS1zbWFsbCB7XG4gIGhlaWdodDogNDNyZW07XG4gIGdyaWQtcm93OiBzcGFuIDE7XG59XG5cbi5pbWFnZS0xIHtcbiAgb3JkZXI6IDE7XG59XG5cbi5pbWFnZS0yIHtcbiAgb3JkZXI6IDU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5pbWFnZS0yIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5pbWFnZS0zIHtcbiAgb3JkZXI6IDI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5pbWFnZS0zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5pbWFnZS00IHtcbiAgb3JkZXI6IDQ7XG59XG5cbi5pbWctMSB7XG4gIHRvcDogLTYuOHJlbTtcbiAgcmlnaHQ6IC0zLjRyZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmltZy0xIHtcbiAgICByaWdodDogLTIuMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5pbWctMSB7XG4gICAgcmlnaHQ6IC0xOXJlbTtcbiAgfVxufVxuXG4uaW1nLTIge1xuICB0b3A6IC0xNC45cmVtO1xuICByaWdodDogLTMuNHJlbTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLmltZy0zIHtcbiAgdG9wOiAtMTQuN3JlbTtcbiAgcmlnaHQ6IC0zMi45cHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5pbWctNCB7XG4gIHRvcDogLTYuN3JlbTtcbiAgcmlnaHQ6IC0zLjRyZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmltZy00IHtcbiAgICByaWdodDogLTIuMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5pbWctNCB7XG4gICAgcmlnaHQ6IC0xOXJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dC9Db250ZW50LzAzX2Fib3V0L2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0VBO0VBQ0UscUJBQUE7QUEvREY7QUFnRUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBOURKO0FBMEJFO0VBa0NBO0lBakVBLGlCQXFFa0I7SUFwRWxCLGdCQW9FMEI7SUFuRTFCLGlCQW1FK0I7SUFsRS9CLGNBNkNnQjtFQXBDaEI7QUFDRjtBQXdCRTtFQTRCQTtJQWpFQSxpQkF3RWtCO0lBdkVsQixnQkF1RTBCO0lBdEUxQixpQkFzRStCO0lBckUvQixjQTZDZ0I7RUE1QmhCO0FBQ0Y7O0FBd0RBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBckRGO0FBVEU7RUEwREY7SUFPSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtFQXBERjtBQUNGO0FBWEU7RUFvREY7SUFhSSxXQUFBO0lBQ0EsU0FBQTtFQWxERjtBQUNGOztBQXFEQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFsREY7QUFvREU7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0FBbERKO0FBbURJO0VBQ0U7SUFDRSxzQkFBQTtFQWpETjtBQUNGO0FBakNFO0VBZ0ZJO0lBSUksc0JBQUE7RUEvQ1I7QUFDRjs7QUFxREE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFsREY7O0FBb0RBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBakRGOztBQW1EQTtFQUNFLFFBQUE7QUFoREY7O0FBa0RBO0VBQ0UsUUFBQTtBQS9DRjtBQTlERTtFQTRHRjtJQUdJLGFBQUE7RUE3Q0Y7QUFDRjs7QUErQ0E7RUFDRSxRQUFBO0FBNUNGO0FBdkVFO0VBa0hGO0lBR0ksYUFBQTtFQTFDRjtBQUNGOztBQTRDQTtFQUNFLFFBQUE7QUF6Q0Y7O0FBNENBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQXpDRjtBQWhGRTtFQXNIRjtJQU1JLGNBQUE7RUF4Q0Y7QUFDRjtBQXpFRTtFQTBHRjtJQVVJLGFBQUE7RUF2Q0Y7QUFDRjs7QUF5Q0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBdENGOztBQXdDQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFyQ0Y7O0FBdUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQXBDRjtBQTVHRTtFQTZJRjtJQU1JLGNBQUE7RUFuQ0Y7QUFDRjtBQXJHRTtFQWlJRjtJQVVJLGFBQUE7RUFsQ0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGhlaWdodCwgJGNvbG9yKSB7XFxyXFxuICBmb250LXNpemU6ICRzaXplO1xcclxcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XFxyXFxuICBsaW5lLWhlaWdodDogJGhlaWdodDtcXHJcXG4gIGNvbG9yOiAkY29sb3I7XFxyXFxufVxcclxcblxcclxcbiV0cmFuc2l0aW9uIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbkBtaXhpbiBtZWRpYS1kZXNrdG9wIHtcXHJcXG4gIC8vIDEyMjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRkZXNrdG9wLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgLy8gMTAyNHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1sYW5kLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgLy8gNzY4cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LXBvcnQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgLy8gNzIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLWxhcmdlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlIHtcXHJcXG4gIC8vIDQyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxuLy8gQmFja2dyb3VuZCBDb2xvclxcclxcbiRjb2xvci1wcmltYXJ5OiAjZTNkNWM5O1xcclxcbiRjb2xvci1zZWNvbmRhcnk6ICM2NjVmNTU7XFxyXFxuJGNvbG9yLWJhY2tkcm9wOiAjNDAzZjNkY2M7XFxyXFxuXFxyXFxuLy8gVGV4dCBDb2xvclxcclxcbiRjb2xvci10ZXh0LWRhcms6ICM0MDNmM2Q7XFxyXFxuJGNvbG9yLXRleHQtbGlnaHQ6ICNlMWQ0Yzk7XFxyXFxuJGNvbG9yLXRleHQtYWNjZW50OiAjYjA5MDdhO1xcclxcblxcclxcbi8vIEJvcmRlciBDb2xvcjpcXHJcXG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjYzFiNmFkO1xcclxcbiRjb2xvci1ib3JkZXItZGFyazogIzY2NWY1NTtcXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbiRkZXNrdG9wLXdpZHRoOiAxMjIwcHg7XFxyXFxuJHRhYmxldC1sYW5kLXdpZHRoOiAxMDI0cHg7XFxyXFxuJHRhYmxldC1wb3J0LXdpZHRoOiA3NjhweDtcXHJcXG4kbW9iaWxlLWxhcmdlLXdpZHRoOiA3MjBweDtcXHJcXG4kbW9iaWxlLXdpZHRoOiA0MjBweDtcXHJcXG5cXG4uc2VjdGlvbl9fYWJvdXQge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xcclxcbiAgLmhlYWRpbmctZGFyayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTkuOXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgICBAaW5jbHVkZSB0ZXh0KDQuMnJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICAgIEBpbmNsdWRlIHRleHQoMy4ycmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5pbWFnZXNfX3dyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBnYXA6IDRyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgbWFyZ2luOiAwIDE1JTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlX19jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICBpbWcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTIpO1xcclxcblxcclxcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTYpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtbGFyZ2Uge1xcclxcbiAgaGVpZ2h0OiA1OXJlbTtcXHJcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxyXFxufVxcclxcbi5pbWFnZS1zbWFsbCB7XFxyXFxuICBoZWlnaHQ6IDQzcmVtO1xcclxcbiAgZ3JpZC1yb3c6IHNwYW4gMTtcXHJcXG59XFxyXFxuLmltYWdlLTEge1xcclxcbiAgb3JkZXI6IDE7XFxyXFxufVxcclxcbi5pbWFnZS0yIHtcXHJcXG4gIG9yZGVyOiA1O1xcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uaW1hZ2UtMyB7XFxyXFxuICBvcmRlcjogMjtcXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmltYWdlLTQge1xcclxcbiAgb3JkZXI6IDQ7XFxyXFxufVxcclxcblxcclxcbi5pbWctMSB7XFxyXFxuICB0b3A6IC02LjhyZW07XFxyXFxuICByaWdodDogLTMuNHJlbTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIHJpZ2h0OiAtMi4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgcmlnaHQ6IC0xOXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmltZy0yIHtcXHJcXG4gIHRvcDogLTE0LjlyZW07XFxyXFxuICByaWdodDogLTMuNHJlbTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcbi5pbWctMyB7XFxyXFxuICB0b3A6IC0xNC43cmVtO1xcclxcbiAgcmlnaHQ6IC0zMi45cHg7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG4uaW1nLTQge1xcclxcbiAgdG9wOiAtNi43cmVtO1xcclxcbiAgcmlnaHQ6IC0zLjRyZW07XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICByaWdodDogLTIuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIHJpZ2h0OiAtMTlyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvaW9zLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2FuZHJvaWQtaG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvaW9zLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2FuZHJvaWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2VjdGlvbl9fYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xufVxuLnNlY3Rpb25fX2FwcCAuaGVhZGluZy1kYXJrIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gIC5zZWN0aW9uX19hcHAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLnNlY3Rpb25fX2FwcCB7XG4gICAgZ2FwOiA0cmVtO1xuICB9XG59XG5cbi5hcHBfX2NvbHVtbi0xIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNHJlbTtcbn1cbi5hcHBfX2NvbHVtbi0xX3RleHQge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xufVxuXG4uYXBwX19idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5hcHBfX2J1dHRvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLmFwcF9fYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDVjOTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NWY1NTtcbiAgZ2FwOiAwLjhyZW07XG4gIHdpZHRoOiAyMHJlbTtcbiAgaGVpZ2h0OiA2LjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICBwYWRkaW5nOiAxLjJyZW0gMnJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmFwcF9fYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5hcHBfX2J1dHRvbjpob3ZlciAuYnV0dG9uX19pY29uX2lvcyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICB9XG4gIC5hcHBfX2J1dHRvbjpob3ZlciAuYnV0dG9uX19pY29uX2FuZHJvaWQge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgfVxuICAuYXBwX19idXR0b246aG92ZXIgLmJ1dHRvbl9fdGV4dF9zbWFsbCB7XG4gICAgY29sb3I6ICNlM2Q1Yzk7XG4gIH1cbiAgLmFwcF9fYnV0dG9uOmhvdmVyIC5idXR0b25fX3RleHRfbGFyZ2Uge1xuICAgIGNvbG9yOiAjZTNkNWM5O1xuICB9XG59XG4uYnV0dG9uX19pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMy42cmVtO1xuICBoZWlnaHQ6IDMuNnJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idXR0b25fX2ljb25faW9zIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG4uYnV0dG9uX19pY29uX2FuZHJvaWQge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5cbi5idXR0b25fX3RleHRfc21hbGwge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnV0dG9uX190ZXh0X2xhcmdlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYXBwX19jb2x1bW4tMiB7XG4gICAgbWF4LXdpZHRoOiA2M3JlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuYXBwX19jb2x1bW4tMiBpbWcge1xuICAgIG1heC13aWR0aDogNDByZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuYXBwX19jb2x1bW4tMiBpbWcge1xuICAgIG1heC13aWR0aDogMzQuOHJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dC9Db250ZW50LzA0X2FwcC9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdFQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUEvREY7QUFpRUU7RUFDRSxpQkFBQTtBQS9ESjtBQU9FO0VBa0RGO0lBVUksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUEvREY7QUFDRjtBQWtCRTtFQWdDRjtJQWVJLFNBQUE7RUE3REY7QUFDRjs7QUErREE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUE1REY7QUE4REU7RUF2RkEsaUJBd0ZnQjtFQXZGaEIsZ0JBdUZ3QjtFQXRGeEIsaUJBc0Y2QjtFQXJGN0IsY0E2Q2dCO0FBakJsQjs7QUE2REE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQTFERjtBQUNFO0VBdURGO0lBS0ksc0JBQUE7RUF6REY7QUFDRjs7QUEyREE7RUFDRSxhQUFBO0VBQ0EseUJBM0RjO0VBNERkLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBeERGOztBQTJEQTtFQUNFO0lBQ0UseUJBdEVjO0lBdUVkLGdDQUFBO0VBeERGO0VBMERFO0lBQ0UsbURBQUE7RUF4REo7RUEwREU7SUFDRSxtREFBQTtFQXhESjtFQTBERTtJQUNFLGNBakZVO0VBeUJkO0VBMERFO0lBQ0UsY0FwRlU7RUE0QmQ7QUFDRjtBQTREQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQTFERjs7QUE0REE7RUFDRSxtREFBQTtBQXpERjs7QUEyREE7RUFDRSxtREFBQTtBQXhERjs7QUEyREE7RUFqSkUsZUFrSmM7RUFqSmQsZ0JBaUpvQjtFQWhKcEIsaUJBZ0p5QjtFQS9JekIsY0E2Q2dCO0VBbUdoQixpQkFBQTtFQUNBLGdDQUFBO0FBckRGOztBQXdEQTtFQXZKRSxpQkF3SmM7RUF2SmQsZ0JBdUpzQjtFQXRKdEIsaUJBc0oyQjtFQXJKM0IsY0E2Q2dCO0VBeUdoQixjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQWxERjs7QUF0RkU7RUEySUY7SUFFSSxnQkFBQTtJQUNBLGtCQUFBO0VBbERGO0FBQ0Y7QUFqRkU7RUFzSUU7SUFDRSxnQkFBQTtFQWxESjtBQUNGO0FBaEZFO0VBcUlFO0lBQ0Usa0JBQUE7RUFsREo7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGhlaWdodCwgJGNvbG9yKSB7XFxyXFxuICBmb250LXNpemU6ICRzaXplO1xcclxcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XFxyXFxuICBsaW5lLWhlaWdodDogJGhlaWdodDtcXHJcXG4gIGNvbG9yOiAkY29sb3I7XFxyXFxufVxcclxcblxcclxcbiV0cmFuc2l0aW9uIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbkBtaXhpbiBtZWRpYS1kZXNrdG9wIHtcXHJcXG4gIC8vIDEyMjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRkZXNrdG9wLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgLy8gMTAyNHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1sYW5kLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgLy8gNzY4cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LXBvcnQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgLy8gNzIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLWxhcmdlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlIHtcXHJcXG4gIC8vIDQyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxuLy8gQmFja2dyb3VuZCBDb2xvclxcclxcbiRjb2xvci1wcmltYXJ5OiAjZTNkNWM5O1xcclxcbiRjb2xvci1zZWNvbmRhcnk6ICM2NjVmNTU7XFxyXFxuJGNvbG9yLWJhY2tkcm9wOiAjNDAzZjNkY2M7XFxyXFxuXFxyXFxuLy8gVGV4dCBDb2xvclxcclxcbiRjb2xvci10ZXh0LWRhcms6ICM0MDNmM2Q7XFxyXFxuJGNvbG9yLXRleHQtbGlnaHQ6ICNlMWQ0Yzk7XFxyXFxuJGNvbG9yLXRleHQtYWNjZW50OiAjYjA5MDdhO1xcclxcblxcclxcbi8vIEJvcmRlciBDb2xvcjpcXHJcXG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjYzFiNmFkO1xcclxcbiRjb2xvci1ib3JkZXItZGFyazogIzY2NWY1NTtcXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbiRkZXNrdG9wLXdpZHRoOiAxMjIwcHg7XFxyXFxuJHRhYmxldC1sYW5kLXdpZHRoOiAxMDI0cHg7XFxyXFxuJHRhYmxldC1wb3J0LXdpZHRoOiA3NjhweDtcXHJcXG4kbW9iaWxlLWxhcmdlLXdpZHRoOiA3MjBweDtcXHJcXG4kbW9iaWxlLXdpZHRoOiA0MjBweDtcXHJcXG5cXG4uc2VjdGlvbl9fYXBwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xcclxcblxcclxcbiAgLmhlYWRpbmctZGFyayB7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtZGVza3RvcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgICBnYXA6IDRyZW07XFxyXFxuICB9XFxyXFxufVxcclxcbi5hcHBfX2NvbHVtbi0xIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDRyZW07XFxyXFxuXFxyXFxuICAmX3RleHQge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNDAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFwcF9fYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmFwcF9fYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1zZWNvbmRhcnk7XFxyXFxuICBnYXA6IDAuOHJlbTtcXHJcXG4gIHdpZHRoOiAyMHJlbTtcXHJcXG4gIGhlaWdodDogNi40cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxyXFxuICBwYWRkaW5nOiAxLjJyZW0gMnJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAuYXBwX19idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gICAgLmJ1dHRvbl9faWNvbl9pb3Mge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9pb3MtaG92ZXIuc3ZnKTtcXHJcXG4gICAgfVxcclxcbiAgICAuYnV0dG9uX19pY29uX2FuZHJvaWQge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hbmRyb2lkLWhvdmVyLnN2Zyk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJ1dHRvbl9fdGV4dF9zbWFsbCB7XFxyXFxuICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgICB9XFxyXFxuICAgIC5idXR0b25fX3RleHRfbGFyZ2Uge1xcclxcbiAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uX19pY29uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAzLjZyZW07XFxyXFxuICBoZWlnaHQ6IDMuNnJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4uYnV0dG9uX19pY29uX2lvcyB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvaW9zLnN2Zyk7XFxyXFxufVxcclxcbi5idXR0b25fX2ljb25fYW5kcm9pZCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvYW5kcm9pZC5zdmcpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uX190ZXh0X3NtYWxsIHtcXHJcXG4gIEBpbmNsdWRlIHRleHQoMXJlbSwgNjAwLCAxNDAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25fX3RleHRfbGFyZ2Uge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5hcHBfX2NvbHVtbi0yIHtcXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA2M3JlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDQwcmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICBpbWcge1xcclxcbiAgICAgIG1heC13aWR0aDogMzQuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pY29ucy90d2l0dGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pY29ucy90d2l0dGVyLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pY29ucy9pbnN0YWdyYW0uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ljb25zL2luc3RhZ3JhbS1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaWNvbnMvZmFjZWJvb2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ljb25zL2ZhY2Vib29rLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZm9vdGVyX19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTByZW07XG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gIGdhcDogMTByZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgcGFkZGluZzogMTByZW0gNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNnJlbSAxLjZyZW07XG4gICAgZ2FwOiA0cmVtO1xuICB9XG59XG4uZm9vdGVyX19jb250YWluZXIgLmhlYWRpbmctbGlnaHQge1xuICBmb250LXNpemU6IDZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBjb2xvcjogI2UxZDRjOTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuZm9vdGVyX19jb250YWluZXIgLmhlYWRpbmctbGlnaHQge1xuICAgIGZvbnQtc2l6ZTogNC4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gICAgY29sb3I6ICNlMWQ0Yzk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuZm9vdGVyX19jb250YWluZXIgLmhlYWRpbmctbGlnaHQge1xuICAgIGZvbnQtc2l6ZTogMy4xNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICAgIGNvbG9yOiAjZTFkNGM5O1xuICB9XG59XG5cbi5oZWFkaW5nLWxpZ2h0IHNwYW4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjYjA5MDdhO1xufVxuXG4uZm9vdGVyX19jb250YWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS43cmVtO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfdGl0bGUge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIGNvbG9yOiAjZTFkNGM5O1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX2FkZHJlc3Mge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjZTFkNGM5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX2FkZHJlc3MgaW1nIHtcbiAgcGFkZGluZy1yaWdodDogMC44cmVtO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfcGhvbmUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjZTFkNGM5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9vdGVyX19jb250YWN0c19waG9uZSBpbWcge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XG59XG4uZm9vdGVyX19jb250YWN0c19zY2hlZHVsZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG59XG4uZm9vdGVyX19jb250YWN0c19zY2hlZHVsZSBpbWcge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XG59XG5cbi5mb290ZXJfX2NvbnRhY3RzX2FkZHJlc3MgYSxcbi5mb290ZXJfX2NvbnRhY3RzX3Bob25lIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9vdGVyX19jb250YWN0c19hZGRyZXNzIGE6YWZ0ZXIsXG4uZm9vdGVyX19jb250YWN0c19waG9uZSBhOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWQ0Yzk7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyBhOmhvdmVyOmFmdGVyLFxuICAuZm9vdGVyX19jb250YWN0c19waG9uZSBhOmhvdmVyOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbi5zb2NpYWwtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuMnJlbTtcbiAgcGFkZGluZy10b3A6IDRyZW07XG59XG5cbi5zb2NpYWwtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTNkNWM5O1xuICB3aWR0aDogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuc29jaWFsLWljb246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG4gIH1cbn1cbi5zb2NpYWwtaWNvbiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xufVxuLnNvY2lhbC1pY29uX190d2l0dGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuc29jaWFsLWljb25fX3R3aXR0ZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICB9XG59XG4uc29jaWFsLWljb25fX2luc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnNvY2lhbC1pY29uX19pbnN0YWdyYW06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICB9XG59XG4uc29jaWFsLWljb25fX2ZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuc29jaWFsLWljb25fX2ZhY2Vib29rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dC9Gb290ZXIvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFnRUE7RUFDRSx5QkFwQmdCO0VBcUJoQixhQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQS9ERjtBQVdFO0VBNENGO0lBV0ksMEJBQUE7SUFDQSxtQkFBQTtFQTlERjtBQUNGO0FBaUJFO0VBZ0NGO0lBZUksb0JBQUE7SUFDQSxTQUFBO0VBNURGO0FBQ0Y7QUE4REU7RUFsRkEsZUFtRmdCO0VBbEZoQixnQkFrRnNCO0VBakZ0QixpQkFpRjJCO0VBaEYzQixjQThDaUI7QUF2Qm5CO0FBS0U7RUFtREE7SUFsRkEsaUJBc0ZrQjtJQXJGbEIsZ0JBcUYwQjtJQXBGMUIsaUJBb0YrQjtJQW5GL0IsY0E4Q2lCO0VBaEJqQjtBQUNGO0FBR0U7RUE2Q0E7SUFsRkEsa0JBeUZrQjtJQXhGbEIsZ0JBd0YyQjtJQXZGM0IsaUJBdUZnQztJQXRGaEMsY0E4Q2lCO0VBUmpCO0FBQ0Y7O0FBb0RFO0VBQ0Usa0JBQUE7RUFDQSxjQTlDZ0I7QUFIcEI7O0FBcURBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQWxERjtBQW9ERTtFQXpHQSxpQkEwR2dCO0VBekdoQixnQkF5R3dCO0VBeEd4QixpQkF3RzZCO0VBdkc3QixjQThDaUI7RUEwRGYsb0JBQUE7QUEvQ0o7QUFpREU7RUE3R0EsaUJBOEdnQjtFQTdHaEIsZ0JBNkd3QjtFQTVHeEIsaUJBNEc2QjtFQTNHN0IsY0E4Q2lCO0VBOERmLGtCQUFBO0VBQ0EsZUFBQTtBQTVDSjtBQThDSTtFQUNFLHFCQUFBO0FBNUNOO0FBK0NFO0VBdEhBLGlCQXVIZ0I7RUF0SGhCLGdCQXNId0I7RUFySHhCLGlCQXFINkI7RUFwSDdCLGNBOENpQjtFQXVFZixrQkFBQTtBQTFDSjtBQTJDSTtFQUNFLHFCQUFBO0FBekNOO0FBNENFO0VBN0hBLGlCQThIZ0I7RUE3SGhCLGdCQTZId0I7RUE1SHhCLGlCQTRINkI7RUEzSDdCLGNBOENpQjtBQXNDbkI7QUF5Q0k7RUFDRSxxQkFBQTtBQXZDTjs7QUE0Q0E7O0VBRUUsa0JBQUE7QUF6Q0Y7QUEwQ0U7O0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkE3RmU7RUE4RmYsT0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXZDSjtBQXlDRTtFQUNFOztJQUNFLG1CQUFBO0lBQ0EsZ0NBQUE7RUF0Q0o7QUFDRjs7QUEwQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXZDRjs7QUF5Q0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQTFIZ0I7RUEySGhCLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBdENGO0FBd0NFO0VBQ0U7SUFDRSx5QkFwSVU7RUE4RmQ7QUFDRjtBQXlDRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF2Q0o7QUEwQ0U7RUFDRSxvRUFBQTtFQUNBLGdDQUFBO0FBeENKO0FBeUNJO0VBQ0U7SUFDRSxvRUFBQTtFQXZDTjtBQUNGO0FBMkNFO0VBQ0Usb0VBQUE7RUFDQSxnQ0FBQTtBQXpDSjtBQTBDSTtFQUNFO0lBQ0Usb0VBQUE7RUF4Q047QUFDRjtBQTRDRTtFQUNFLG9FQUFBO0VBQ0EsZ0NBQUE7QUExQ0o7QUEyQ0k7RUFDRTtJQUNFLG9FQUFBO0VBekNOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG5AbWl4aW4gbWVkaWEtZGVza3RvcCB7XFxyXFxuICAvLyAxMjIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gIC8vIDEwMjRweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtbGFuZC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gIC8vIDc2OHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1wb3J0LXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gIC8vIDcyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1sYXJnZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAvLyA0MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UzZDVjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2MxYjZhZDtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG4kZGVza3RvcC13aWR0aDogMTIyMHB4O1xcclxcbiR0YWJsZXQtbGFuZC13aWR0aDogMTAyNHB4O1xcclxcbiR0YWJsZXQtcG9ydC13aWR0aDogNzY4cHg7XFxyXFxuJG1vYmlsZS1sYXJnZS13aWR0aDogNzIwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNDIwcHg7XFxyXFxuXFxuLmZvb3Rlcl9fY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXHJcXG4gIGdhcDogMTByZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBwYWRkaW5nOiAxMHJlbSA2cmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgcGFkZGluZzogNnJlbSAxLjZyZW07XFxyXFxuICAgIGdhcDogNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkaW5nLWxpZ2h0IHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCg2cmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgICBAaW5jbHVkZSB0ZXh0KDQuMnJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgICBAaW5jbHVkZSB0ZXh0KDMuMTVyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5oZWFkaW5nLWxpZ2h0IHtcXHJcXG4gIHNwYW4ge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1hY2NlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX2NvbnRhY3RzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxLjdyZW07XFxyXFxuXFxyXFxuICAmX3RpdGxlIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgyLjRyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gICZfYWRkcmVzcyB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX3Bob25lIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX3NjaGVkdWxlIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19jb250YWN0c19hZGRyZXNzIGEsXFxyXFxuLmZvb3Rlcl9fY29udGFjdHNfcGhvbmUgYSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAmOmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGV4dC1saWdodDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAtMnB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAmOmhvdmVyOmFmdGVyIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaWNvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXHJcXG59XFxyXFxuLnNvY2lhbC1pY29uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XFxyXFxuICB3aWR0aDogNnJlbTtcXHJcXG4gIGhlaWdodDogNnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDZyZW07XFxyXFxuICAgIGhlaWdodDogNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3R3aXR0ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3R3aXR0ZXIuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy90d2l0dGVyLWhvdmVyLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2luc3RhZ3JhbSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLWhvdmVyLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ZhY2Vib29rIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9mYWNlYm9vay5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2ZhY2Vib29rLWhvdmVyLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTByZW07XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICBnYXA6IDNyZW07XG4gIH1cbn1cblxuLm5vLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi52aXN1YWxseS1oaWRkZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY2xpcC1wYXRoOiBpbnNldCgxMDAlKTtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5hdmlnYXRpb25fX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogNjUuNiU7XG59XG4ubmF2aWdhdGlvbl9fd3JhcHBlci5vcGVuIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm5hdmlnYXRpb25fX3dyYXBwZXIge1xuICAgIGdhcDogM3JlbTtcbiAgICBtaW4td2lkdGg6IDc4JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZpZ2F0aW9uX193cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICAgIGdhcDogMTByZW07XG4gICAgcGFkZGluZzogNnJlbSA0cmVtO1xuICAgIHRvcDogOS45cmVtO1xuICAgIHotaW5kZXg6IDI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICByaWdodDogLTEwMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cblxuLm5hdmlnYXRpb25fX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogNHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm5hdmlnYXRpb25fX2xpc3Qge1xuICAgIGdhcDogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZpZ2F0aW9uX19saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLm5hdmlnYXRpb25fX2xpc3RfbGluayBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5hdmlnYXRpb25fX2xpc3RfbGluayBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDNmM2Q7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLm5hdmlnYXRpb25fX2xpc3RfbGluayBhOmhvdmVyOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmlnYXRpb25fX2xpc3RfbGluayB7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIH1cbn1cblxuLmhlYWRlcl9fbWVudSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG59XG4uaGVhZGVyX19tZW51IHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbWVudSBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxLjZyZW07XG59XG4uaGVhZGVyX19tZW51IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDNmM2Q7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMnB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuaGVhZGVyX19tZW51IGE6aG92ZXI6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyX19tZW51IHtcbiAgICBmb250LXNpemU6IDMuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTI1JTtcbiAgfVxuICAuaGVhZGVyX19tZW51IC5pY29uLWN1cCB7XG4gICAgbWluLWhlaWdodDogNHJlbTtcbiAgICBtaW4td2lkdGg6IDRyZW07XG4gIH1cbn1cblxuLm5hdmlnYXRpb25fX2xpc3RfbGluay5tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJ1cmdlcl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnVyZ2VyX19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNC42cmVtO1xuICB9XG59XG4uYnVyZ2VyX19jb250YWluZXIub3BlbiAuYnVyZ2VyX19saW5lOm50aC1jaGlsZCgxKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoNDVkZWcpO1xufVxuLmJ1cmdlcl9fY29udGFpbmVyLm9wZW4gLmJ1cmdlcl9fbGluZTpudGgtY2hpbGQoMikge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC00NWRlZyk7XG59XG4uYnVyZ2VyX19jb250YWluZXIgLmJ1cmdlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0LjRyZW07XG4gIGhlaWdodDogNC40cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY1ZjU1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYnVyZ2VyX19jb250YWluZXIgLmJ1cmdlcl9fbGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxLjZyZW07XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDNmM2Q7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuLmJ1cmdlcl9fY29udGFpbmVyIC5idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjRyZW0pO1xufVxuLmJ1cmdlcl9fY29udGFpbmVyIC5idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNHJlbSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUEvREY7QUFjRTtFQTRDRjtJQU9JLFNBQUE7RUE3REY7QUFDRjs7QUErREE7RUFDRSxnQkFBQTtBQTVERjs7QUE4REE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUEzREY7O0FBOERBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQTNERjtBQTRERTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7QUExREo7QUFuQkU7RUFzRUY7SUFVSSxTQUFBO0lBQ0EsY0FBQTtFQXpERjtBQUNGO0FBbkJFO0VBZ0VGO0lBY0ksa0JBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSx5QkFoRVk7SUFpRVosVUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxnQ0FBQTtFQXZERjtBQUNGOztBQXlEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUF0REY7QUFoREU7RUFtR0Y7SUFNSSxTQUFBO0VBckRGO0FBQ0Y7QUEvQ0U7RUE2RkY7SUFTSSxzQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFQW5ERjtBQUNGO0FBcURFO0VBcElBLGlCQXFJZ0I7RUFwSWhCLGdCQW9Jd0I7RUFuSXhCLGlCQW1JNkI7RUFsSTdCLGNBNkNnQjtFQXNGZCxnQkFBQTtBQWhESjtBQWlESTtFQUNFLGtCQUFBO0FBL0NOO0FBZ0RNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkE5RlU7RUErRlYsT0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTlDUjtBQWdETTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxnQ0FBQTtFQTlDUjtBQUNGO0FBaEZFO0VBMkdBO0lBdUJJLGlCQUFBO0lBQ0EsaUJBQUE7RUE5Q0o7QUFDRjs7QUFrREE7RUFqS0UsaUJBa0tjO0VBaktkLGdCQWlLc0I7RUFoS3RCLGlCQWdLMkI7RUEvSjNCLGNBNkNnQjtFQW1IaEIsc0JBQUE7QUE1Q0Y7QUE4Q0U7RUFDRSxhQUFBO0FBNUNKO0FBOENFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUE1Q0o7QUE4Q0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFuSVk7RUFvSVosa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBNUNOO0FBOENJO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGdDQUFBO0VBNUNOO0FBQ0Y7QUF4SEU7RUF3SUY7SUFpQ0ksaUJBQUE7SUFDQSxpQkFBQTtFQTdDRjtFQStDRTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtFQTdDSjtBQUNGOztBQWlEQTtFQUNFLGFBQUE7QUE5Q0Y7O0FBaURBO0VBQ0UsYUFBQTtBQTlDRjtBQTFJRTtFQXVMRjtJQUdJLGNBQUE7SUFDQSxjQUFBO0VBNUNGO0FBQ0Y7QUE2Q0U7RUFDRSxzQ0FBQTtBQTNDSjtBQTZDRTtFQUNFLHVDQUFBO0FBM0NKO0FBNkNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQTNDSjtBQTZDSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkE1TFk7RUE2TFosc0NBQUE7RUFDQSxzQkFBQTtBQTNDTjtBQTZDTTtFQUNFLDhCQUFBO0FBM0NSO0FBNkNNO0VBQ0UsNkJBQUE7QUEzQ1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG5AbWl4aW4gbWVkaWEtZGVza3RvcCB7XFxyXFxuICAvLyAxMjIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gIC8vIDEwMjRweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtbGFuZC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gIC8vIDc2OHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1wb3J0LXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gIC8vIDcyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1sYXJnZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAvLyA0MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UzZDVjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2MxYjZhZDtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG4kZGVza3RvcC13aWR0aDogMTIyMHB4O1xcclxcbiR0YWJsZXQtbGFuZC13aWR0aDogMTAyNHB4O1xcclxcbiR0YWJsZXQtcG9ydC13aWR0aDogNzY4cHg7XFxyXFxuJG1vYmlsZS1sYXJnZS13aWR0aDogNzIwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNDIwcHg7XFxyXFxuXFxuLmhlYWRlcl9fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubm8tc2Nyb2xsIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi52aXN1YWxseS1oaWRkZW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDFweDtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgbWFyZ2luOiAtMXB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBjbGlwLXBhdGg6IGluc2V0KDEwMCUpO1xcclxcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uX193cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWluLXdpZHRoOiA2NS42JTtcXHJcXG4gICYub3BlbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgbWluLXdpZHRoOiA3OCU7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gICAgZ2FwOiAxMHJlbTtcXHJcXG4gICAgcGFkZGluZzogNnJlbSA0cmVtO1xcclxcbiAgICB0b3A6IDkuOXJlbTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHJpZ2h0OiAtMTAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi5uYXZpZ2F0aW9uX19saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDRyZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA2cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX2xpbmsge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgYSB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRleHQtZGFyaztcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBib3R0b206IC0ycHg7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICAgICAmOmhvdmVyOmFmdGVyIHtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMTI1JTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19tZW51IHtcXHJcXG4gIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXHJcXG5cXHJcXG4gIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgYSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMS42cmVtO1xcclxcblxcclxcbiAgICAmOmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGV4dC1kYXJrO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIGJvdHRvbTogLTJweDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgICAmOmhvdmVyOmFmdGVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgZm9udC1zaXplOiAzLjJyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xcclxcblxcclxcbiAgICAuaWNvbi1jdXAge1xcclxcbiAgICAgIG1pbi1oZWlnaHQ6IDRyZW07XFxyXFxuICAgICAgbWluLXdpZHRoOiA0cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsubWVudSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogNC42cmVtO1xcclxcbiAgfVxcclxcbiAgJi5vcGVuIC5idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB9XFxyXFxuICAmLm9wZW4gLmJ1cmdlcl9fbGluZTpudGgtY2hpbGQoMikge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC00NWRlZyk7XFxyXFxuICB9XFxyXFxuICAuYnVyZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDQuNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA0LjRyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXItZGFyaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcclxcbiAgICAmX19saW5lIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgd2lkdGg6IDEuNnJlbTtcXHJcXG4gICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRleHQtZGFyaztcXHJcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcclxcblxcclxcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC40cmVtKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNHJlbSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL3ZpZGVvL3ZpZGVvLV8yMTYwcF8ud2VibVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2NvZmZlZS1jdXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIGNvZGUgPSBcIjxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uXFxcIj4gPGRpdiBjbGFzcz1cXFwic2VjdGlvbl9faGVyb1xcXCI+IDxkaXYgY2xhc3M9XFxcImJnLXZpZGVvXFxcIj4gPHZpZGVvIGNsYXNzPVxcXCJiZy12aWRlb19fY29udGVudFxcXCIgYXV0b3BsYXkgbXV0ZWQgbG9vcD4gPHNvdXJjZSBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIi8+IFlvdXIgYnJvd3NlciBpcyBub3Qgc3VwcG9ydGVkISA8L3ZpZGVvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwic2VjdGlvbl9faGVyb19jb250ZW50XFxcIj4gPGgyIGNsYXNzPVxcXCJoZWFkaW5nLWxpZ2h0XFxcIj4gPHNwYW4+RW5qb3k8L3NwYW4+IHByZW1pdW0gY29mZmVlIGF0IG91ciBjaGFybWluZyBjYWZlIDwvaDI+IDxwIGNsYXNzPVxcXCJzZWN0aW9uX19oZXJvX3RleHRcXFwiPiBXaXRoIGl0cyBpbnZpdGluZyBhdG1vc3BoZXJlIGFuZCBkZWxpY2lvdXMgY29mZmVlIG9wdGlvbnMsIHRoZSBDb2ZmZWUgSG91c2UgUmVzb3VyY2UgaXMgYSBwb3B1bGFyIGRlc3RpbmF0aW9uIGZvciBjb2ZmZWUgbG92ZXJzIGFuZCB0aG9zZSBzZWVraW5nIGEgd2FybSBhbmQgaW52aXRpbmcgc3BhY2UgdG8gZW5qb3kgdGhlaXIgZmF2b3JpdGUgYmV2ZXJhZ2UuIDwvcD4gPGEgY2xhc3M9XFxcImJ1dHRvbiBtZW51LWJ1dHRvblxcXCIgaHJlZj1cXFwiLi9tZW51Lmh0bWxcXFwiPiA8c3BhbiBjbGFzcz1cXFwiYnV0dG9uLXRleHRcXFwiPk1lbnU8L3NwYW4+IDxpbWcgY2xhc3M9XFxcImJ1dHRvbi1pbWFnZVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJjb2ZmZWUgY3VwIGljb25cXFwiIGRyYWdnYWJsZT1cXFwiZmFsc2VcXFwiLz4gPC9hPiA8L2Rpdj4gPC9kaXY+IDwvc2VjdGlvbj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb2ZmZWUtc2xpZGVyLTEuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvZmZlZS1zbGlkZXItMi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29mZmVlLXNsaWRlci0zLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgY29kZSA9IFwiPHNlY3Rpb24gY2xhc3M9XFxcInNlY3Rpb25cXFwiIGlkPVxcXCJmYXZvcml0ZVxcXCI+IDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX2Zhdm9yaXRlXFxcIj4gPGgzIGNsYXNzPVxcXCJoZWFkaW5nLWRhcmtcXFwiPkNob29zZSB5b3VyIDxzcGFuPmZhdm9yaXRlPC9zcGFuPiBjb2ZmZWU8L2gzPiA8ZGl2IGNsYXNzPVxcXCJzbGlkZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJzbGlkZXJfX2Fycm93IHNsaWRlcl9fYXJyb3dfbGVmdFxcXCI+IDxzcGFuIGNsYXNzPVxcXCJzbGlkZXJfX2Fycm93X2xlZnQtaWNvblxcXCI+PC9zcGFuPiA8L2J1dHRvbj4gPGRpdiBjbGFzcz1cXFwic2xpZGVyX19jb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2xpbmVcXFwiPiA8ZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2xpbmVfY2FyZFxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJwaG90byBvZiBhIGdsYXNzIHdpdGggaWNlZCBjb2ZmZWVcXFwiIGRyYWdnYWJsZT1cXFwiZmFsc2VcXFwiLz4gPGg0IGNsYXNzPVxcXCJzbGlkZXJfX2xpbmVfY2FyZC10aXRsZVxcXCI+U+KAmW1vcmVzIEZyYXBwdWNjaW5vPC9oND4gPHAgY2xhc3M9XFxcInNsaWRlcl9fbGluZV9jYXJkLXRleHRcXFwiPiBUaGlzIG5ldyBkcmluayB0YWtlcyBhbiBlc3ByZXNzbyBhbmQgbWl4ZXMgaXQgd2l0aCBicm93biBzdWdhciBhbmQgY2lubmFtb24gYmVmb3JlIGJlaW5nIHRvcHBlZCB3aXRoIG9hdCBtaWxrLiA8L3A+IDxwIGNsYXNzPVxcXCJzbGlkZXJfX2xpbmVfY2FyZC1wcmljZVxcXCI+JDUuNTA8L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2xpbmVfY2FyZFxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJwaG90byBvZiBhIGdsYXNzIHdpdGggaWNlZCBjb2ZmZWVcXFwiIGRyYWdnYWJsZT1cXFwiZmFsc2VcXFwiLz4gPGg0IGNsYXNzPVxcXCJzbGlkZXJfX2xpbmVfY2FyZC10aXRsZVxcXCI+Q2FyYW1lbCBNYWNjaGlhdG88L2g0PiA8cCBjbGFzcz1cXFwic2xpZGVyX19saW5lX2NhcmQtdGV4dFxcXCI+IEZyYWdyYW50IGFuZCB1bmlxdWUgY2xhc3NpYyBlc3ByZXNzbyB3aXRoIHJpY2ggY2FyYW1lbC1wZWFudXQgc3lydXAsIHdpdGggY3JlYW0gdW5kZXIgd2hpcHBlZCB0aGljayBmb2FtLiA8L3A+IDxwIGNsYXNzPVxcXCJzbGlkZXJfX2xpbmVfY2FyZC1wcmljZVxcXCI+JDUuMDA8L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2xpbmVfY2FyZFxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJwaG90byBvZiBhIGdsYXNzIHdpdGggaWNlZCBjb2ZmZWVcXFwiIGRyYWdnYWJsZT1cXFwiZmFsc2VcXFwiLz4gPGg0IGNsYXNzPVxcXCJzbGlkZXJfX2xpbmVfY2FyZC10aXRsZVxcXCI+SWNlIGNvZmZlZTwvaDQ+IDxwIGNsYXNzPVxcXCJzbGlkZXJfX2xpbmVfY2FyZC10ZXh0XFxcIj4gQSBwb3B1bGFyIHN1bW1lciBkcmluayB0aGF0IHRvbmVzIGFuZCBpbnZpZ29yYXRlcy4gUHJlcGFyZWQgZnJvbSBjb2ZmZWUsIG1pbGsgYW5kIGljZS4gPC9wPiA8cCBjbGFzcz1cXFwic2xpZGVyX19saW5lX2NhcmQtcHJpY2VcXFwiPiQ0LjUwPC9wPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8YnV0dG9uIGNsYXNzPVxcXCJzbGlkZXJfX2Fycm93IHNsaWRlcl9fYXJyb3dfcmlnaHRcXFwiPiA8c3BhbiBjbGFzcz1cXFwic2xpZGVyX19hcnJvd19yaWdodC1pY29uXFxcIj48L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwic2xpZGVyX19wcm9ncmVzc1xcXCI+IDxkaXYgY2xhc3M9XFxcInNsaWRlcl9fcHJvZ3Jlc3MtYmFyXFxcIj4gPHNwYW4gY2xhc3M9XFxcInNsaWRlcl9fcHJvZ3Jlc3MtYmFyX2xpbmVcXFwiPjwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInNsaWRlcl9fcHJvZ3Jlc3MtYmFyXFxcIj4gPHNwYW4gY2xhc3M9XFxcInNsaWRlcl9fcHJvZ3Jlc3MtYmFyX2xpbmVcXFwiPjwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInNsaWRlcl9fcHJvZ3Jlc3MtYmFyXFxcIj4gPHNwYW4gY2xhc3M9XFxcInNsaWRlcl9fcHJvZ3Jlc3MtYmFyX2xpbmVcXFwiPjwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9zZWN0aW9uPiBcIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LTEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LTIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LTMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LTQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyk7XG52YXIgY29kZSA9IFwiPHNlY3Rpb24gY2xhc3M9XFxcInNlY3Rpb25cXFwiIGlkPVxcXCJhYm91dFxcXCI+IDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX2Fib3V0XFxcIj4gPGgzIGNsYXNzPVxcXCJoZWFkaW5nLWRhcmtcXFwiPiBSZXNvdXJjZSBpcyA8c3Bhbj50aGUgcGVyZmVjdCBhbmQgY296eSBwbGFjZTwvc3Bhbj4gd2hlcmUgeW91IGNhbiBlbmpveSBhIHZhcmlldHkgb2YgaG90IGJldmVyYWdlcywgcmVsYXgsIGNhdGNoIHVwIHdpdGggZnJpZW5kcywgb3IgZ2V0IHNvbWUgd29yayBkb25lLiA8L2gzPiA8ZGl2IGNsYXNzPVxcXCJpbWFnZXNfX3dyYXBwZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJpbWFnZV9fY29udGFpbmVyIGltYWdlLWxhcmdlIGltYWdlLTFcXFwiPiA8aW1nIGNsYXNzPVxcXCJpbWctMVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJhIHNtaWxpbmcgeW91bmcgd29tYW4gaXMgc2l0dGluZyBhdCBhIHRhYmxlIHdpdGggYSBjdXAgb2YgY29mZmVlXFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJpbWFnZV9fY29udGFpbmVyIGltYWdlLXNtYWxsIGltYWdlLTJcXFwiPiA8aW1nIGNsYXNzPVxcXCJpbWctMlxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJhIGN1cCBvZiBjb2ZmZWUgb24gYSB0YWJsZSB3aXRoIGNocmlzdG1hcyBsaWdodHMgb24gdGhlIGJhY2tncm91bmRcXFwiIGRyYWdnYWJsZT1cXFwiZmFsc2VcXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImltYWdlX19jb250YWluZXIgaW1hZ2Utc21hbGwgaW1hZ2UtM1xcXCI+IDxpbWcgY2xhc3M9XFxcImltZy0zXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcImEgeW91bmcgbWFuIHdpdGggYSBjdXAgb2YgY29mZmVlIGluIGEgY2FmZSBsb29raW5nIGF0IHRoZSBzY3JlZW4gb2YgaGlzIGxhcHRvcFxcXCIgZHJhZ2dhYmxlPVxcXCJmYWxzZVxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiaW1hZ2VfX2NvbnRhaW5lciBpbWFnZS1sYXJnZSBpbWFnZS00XFxcIj4gPGltZyBjbGFzcz1cXFwiaW1nLTRcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiIGFsdD1cXFwiYSB5b3VuZyBjb3VwbGUgd2l0aCBjb2ZmZWVzIGluIHRoZWlyIGhhbmRzIHNpdHRpbmcgYXQgYSB0YWJsZSBhbmQgc21pbGluZyBkcmVhbWlseVxcXCIgZHJhZ2dhYmxlPVxcXCJmYWxzZVxcXCIvPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L3NlY3Rpb24+IFwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbW9iaWxlLXNjcmVlbnMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPHNlY3Rpb24gY2xhc3M9XFxcInNlY3Rpb25cXFwiIGlkPVxcXCJhcHBcXFwiPiA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX19hcHBcXFwiPiA8ZGl2IGNsYXNzPVxcXCJhcHBfX2NvbHVtbi0xXFxcIj4gPGgzIGNsYXNzPVxcXCJoZWFkaW5nLWRhcmtcXFwiPiA8c3Bhbj5Eb3dubG9hZDwvc3Bhbj4gb3VyIGFwcHMgdG8gc3RhcnQgb3JkZXJpbmcgPC9oMz4gPHAgY2xhc3M9XFxcImFwcF9fY29sdW1uLTFfdGV4dFxcXCI+IERvd25sb2FkIHRoZSBSZXNvdXJjZSBhcHAgdG9kYXkgYW5kIGV4cGVyaWVuY2UgdGhlIGNvbWZvcnQgb2Ygb3JkZXJpbmcgeW91ciBmYXZvcml0ZSBjb2ZmZWUgZnJvbSB3aGVyZXZlciB5b3UgYXJlIDwvcD4gPGRpdiBjbGFzcz1cXFwiYXBwX19idXR0b25zXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwiYXBwX19idXR0b25cXFwiPiA8c3BhbiBjbGFzcz1cXFwiYnV0dG9uX19pY29uIGJ1dHRvbl9faWNvbl9pb3NcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiYnV0dG9uX190ZXh0X3NtYWxsXFxcIj5BdmFpbGFibGUgb24gdGhlPHNwYW4gY2xhc3M9XFxcImJ1dHRvbl9fdGV4dF9sYXJnZVxcXCI+QXBwIFN0b3JlPC9zcGFuPjwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcImFwcF9fYnV0dG9uXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJ1dHRvbl9faWNvbiBidXR0b25fX2ljb25fYW5kcm9pZFxcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJidXR0b25fX3RleHRfc21hbGxcXFwiPkF2YWlsYWJsZSBvbjxzcGFuIGNsYXNzPVxcXCJidXR0b25fX3RleHRfbGFyZ2VcXFwiPkdvb2dsZSBQbGF5PC9zcGFuPjwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYXBwX19jb2x1bW4tMlxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJwaG90byBvZiB0d28gbW9iaWxlIHBob25lcyB3aXRoIGNvZmZlZSBzaG9wIGFwcCBvbiB0aGUgc2NyZWVuc1xcXCIgZHJhZ2dhYmxlPVxcXCJmYWxzZVxcXCIvPiA8L2Rpdj4gPC9kaXY+IDwvc2VjdGlvbj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL3Bpbi1hbHQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvcGhvbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvY2xvY2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fKTtcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29sdW1uXFxcIj4gPGgzIGNsYXNzPVxcXCJoZWFkaW5nLWxpZ2h0XFxcIj4gU2lwLCBTYXZvciwgU21pbGUuIDxzcGFuPkl0J3MgY29mZmVlIHRpbWUhPC9zcGFuPiA8L2gzPiA8ZGl2IGNsYXNzPVxcXCJzb2NpYWwtaWNvbnNcXFwiPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwic29jaWFsLWljb25cXFwiPjxzcGFuIGNsYXNzPVxcXCJzb2NpYWwtaWNvbl9fdHdpdHRlclxcXCI+PC9zcGFuPjwvYT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcInNvY2lhbC1pY29uXFxcIj48c3BhbiBjbGFzcz1cXFwic29jaWFsLWljb25fX2luc3RhZ3JhbVxcXCI+PC9zcGFuPjwvYT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcInNvY2lhbC1pY29uXFxcIj48c3BhbiBjbGFzcz1cXFwic29jaWFsLWljb25fX2ZhY2Vib29rXFxcIj48L3NwYW4+PC9hPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29sdW1uXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19jb250YWN0c1xcXCIgaWQ9XFxcImNvbnRhY3RzXFxcIj4gPHAgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNfdGl0bGVcXFwiPkNvbnRhY3QgdXM8L3A+IDxwIGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhY3RzX2FkZHJlc3NcXFwiPiA8YSBocmVmPVxcXCJodHRwczovL21hcHMuYXBwLmdvby5nbC9SSmFwWTJRVjlaMUFaamltOFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwicGluIGljb25cXFwiLz44NTU4IEdyZWVuIFJkLiwgTEE8L2E+IDwvcD4gPHAgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNfcGhvbmVcXFwiPiA8YSBocmVmPVxcXCJ0ZWw6KzEoNjAzKTU1NS0wMTIzXFxcIj48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwicGhvbmUgaWNvblxcXCIvPisxICg2MDMpIDU1NS0wMTIzPC9hPiA8L3A+IDxwIGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhY3RzX3NjaGVkdWxlXFxcIj4gPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcImNsb2NrIGljb25cXFwiLz5Nb24tU2F0OiA5OjAwIEFNIOKAkyAyMzowMCBQTSA8L3A+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9jb2ZmZWUtY3VwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcImxvZ29cXFwiPiA8YSBocmVmPVxcXCIuL2luZGV4Lmh0bWxcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwibG9nb1xcXCIgZHJhZ2dhYmxlPVxcXCJmYWxzZVxcXCIvPiA8aDEgY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+IFJlc291cnNlIC0gdGhlIGJlc3QgY29mZmVlIGhvdXNlIGluIHlvdXIgYXJlYSA8L2gxPjwvYT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm5hdmlnYXRpb25fX3dyYXBwZXJcXFwiPiA8bmF2IGNsYXNzPVxcXCJoZWFkZXJfX25hdmlnYXRpb25cXFwiPiA8dWwgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2xpc3RcXFwiPiA8bGkgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2xpc3RfbGluayBob21lXFxcIj4gPGEgaHJlZj1cXFwiI2Zhdm9yaXRlXFxcIj5GYXZvcml0ZSBjb2ZmZWU8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rIG1lbnVcXFwiPiA8YSBocmVmPVxcXCIuLyNmYXZvcml0ZVxcXCI+RmF2b3JpdGUgY29mZmVlPC9hPiA8L2xpPiA8bGkgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2xpc3RfbGluayBob21lXFxcIj4gPGEgaHJlZj1cXFwiI2Fib3V0XFxcIj5BYm91dDwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmsgbWVudVxcXCI+IDxhIGhyZWY9XFxcIi4vI2Fib3V0XFxcIj5BYm91dDwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmsgaG9tZVxcXCI+IDxhIGhyZWY9XFxcIiNhcHBcXFwiPk1vYmlsZSBhcHA8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rIG1lbnVcXFwiPiA8YSBocmVmPVxcXCIuLyNhcHBcXFwiPk1vYmlsZSBhcHA8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rXFxcIj4gPGEgaHJlZj1cXFwiI2NvbnRhY3RzXFxcIj5Db250YWN0IHVzPC9hPiA8L2xpPiA8L3VsPiA8L25hdj4gPGRpdiBjbGFzcz1cXFwiaGVhZGVyX19tZW51XFxcIj4gPHNwYW4+TWVudSA8aW1nIGNsYXNzPVxcXCJpY29uLWN1cFxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJjb2ZmZWUgY3VwIGljb25cXFwiLz48L3NwYW4+IDxhIGhyZWY9XFxcIi4vbWVudS5odG1sXFxcIj48cD5NZW51PC9wPiA8aW1nIGNsYXNzPVxcXCJpY29uLWN1cFxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJjb2ZmZWUgY3VwIGljb25cXFwiLz4gPC9hPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImJ1cmdlcl9fY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiYnVyZ2VyXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJ1cmdlcl9fbGluZVxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiYnVyZ2VyX19saW5lXFxcIj48L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vbGF5b3V0L0hlYWRlclwiO1xyXG5pbXBvcnQgaGVybyBmcm9tIFwiLi9sYXlvdXQvQ29udGVudC8wMV9oZXJvXCI7XHJcbmltcG9ydCBmYXZvcml0ZSBmcm9tIFwiLi9sYXlvdXQvQ29udGVudC8wMl9mYXZvcml0ZVwiO1xyXG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vbGF5b3V0L0NvbnRlbnQvMDNfYWJvdXRcIjtcclxuaW1wb3J0IGFwcCBmcm9tIFwiLi9sYXlvdXQvQ29udGVudC8wNF9hcHBcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9sYXlvdXQvRm9vdGVyXCI7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXJcIik7XHJcblxyXG5oZWFkZXIuYXBwZW5kKEhlYWRlcik7XHJcbm1haW4uYXBwZW5kKGhlcm8pO1xyXG5tYWluLmFwcGVuZChmYXZvcml0ZSk7XHJcbm1haW4uYXBwZW5kKGFib3V0KTtcclxubWFpbi5hcHBlbmQoYXBwKTtcclxuZm9vdGVyLmFwcGVuZChGb290ZXIpO1xyXG5cclxuY29uc29sZS5sb2coXHJcbiAgYNCf0YDQuNCy0LXRgiEg0JXRidGRINGA0LDQsdC+0YLQsNGOINC90LDQtCDQutC90L7Qv9C60L7QuSBsb2FkIG1vcmUuINCY0L3RgtC10YDQsNC60YLQuNCy0L3QvtGB0YLRjCDQutC90L7Qv9C+0Log0LIg0LzQvtC00LDQu9C60LDRhSDRgtC+0YfQvdC+INC90LUg0YPRgdC/0LXRjiDRgdC00LXQu9Cw0YLRjC4g0JzQvtC20LXRiNGMINGD0LbQtSDQv9GA0L7QstC10YDRj9GC0YwsINC10YHQu9C4INC20LTQsNGC0Ywg0LHQvtC70YzRiNC1INC90LXRgiDQstC+0LfQvNC+0LbQvdC+0YHRgtC4ISDQodC/0LDRgdC40LHQviDQsdC+0LvRjNGI0L7QtSDQt9CwINGC0LXRgNC/0LXQvdC40LUhYFxyXG4pO1xyXG5jb25zb2xlLmxvZyhgMS4gQnVyZ2VyOiArMjI7XHJcbjIuIENhcm91c2VsOiArMjQ7XHJcbjMuIENhdGVnb3JpZXMgb2YgcHJvZHVjdHM6ICsxMjtcclxuICArIFRoZSBDb2ZmZWUgY2F0ZWdvcnkgaXMgYWN0aXZlIGFuZCB0aGUgY29ycmVzcG9uZGluZyBwcm9kdWN0cyBhcmUgZGlzcGxheWVkIHdoZW4gb3BlbmluZyBvciByZWxvYWRpbmcgdGhlIG1lbnUgcGFnZTogKzJcclxuICArIFdoZW4gc3dpdGNoaW5nIGNhdGVnb3JpZXMsIHRoZSBwcm9kdWN0cyBvZiB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkgYXJlIGRpc3BsYXllZDogKzI7XHJcbiAgKyBGb3Igc2NyZWVucyB3aXRoIGEgd2lkdGggb2YgNzY4cHggb3IgbGVzcywgd2hlbiBvcGVuaW5nL3JlbG9hZGluZyB0aGUgcGFnZSBvciBzd2l0Y2hpbmcgY2F0ZWdvcmllcywgb25seSA0IHByb2R1Y3RzIGFyZSBkaXNwbGF5ZWQuIElmIHRoZXJlIGFyZSBtb3JlIHRoYW4gNCBwcm9kdWN0cyBpbiB0aGUgZGlzcGxheWVkIGNhdGVnb3J5LCBhIExvYWQgTW9yZSBidXR0b24gaXMgZGlzcGxheWVkIGJlbG93OiArNDtcclxuICArIFdoZW4gY2hhbmdpbmcgdGhlIHNjcmVlbiB3aWR0aCwgdGhlIHByb2R1Y3QgZGlzcGxheSBtb2RlICg4IHByb2R1Y3RzIHBlciBwYWdlIG9yIDQgcHJvZHVjdHMgd2l0aCBhIExvYWQgTW9yZSBidXR0b24pIGNoYW5nZXMgd2l0aG91dCBwYWdlIHJlbG9hZGluZzogKzRcclxuNC4gTW9kYWw6ICsxMjtcclxuICArIFRoZSBNb2RhbCB3aXRoIHRoZSBkZXNjcmlwdGlvbiBvZiBhIHNwZWNpZmljIHByb2R1Y3Qgb3BlbnMgd2hlbiBjbGlja2luZyBvbiBhbnkgcGFydCBvZiBhIGNhcmQgb2YgcHJvZHVjdDogKzJcclxuICArIFRoZSBwYXJ0IG9mIHRoZSBwYWdlIG91dHNpZGUgdGhlIE1vZGFsIGlzIGRhcmtlbmVkOiArMlxyXG4gICsgV2hlbiB0aGUgTW9kYWwgaXMgb3BlbiwgdGhlIHZlcnRpY2FsIHNjcm9sbCBvZiB0aGUgcGFnZSBiZWNvbWVzIGluYWN0aXZlOyB3aGVuIGNsb3NlZCwgaXQgYmVjb21lcyBhY3RpdmUgYWdhaW46ICsyXHJcbiAgKyBDbGlja2luZyBvbiB0aGUgYXJlYSBhcm91bmQgdGhlIE1vZGFsIGFuZCBDbG9zZSBidXR0b24gY2xvc2VzIGl0OiArMlxyXG4gICsgVGhlIE1vZGFsIGlzIGNlbnRlcmVkIG9uIGJvdGggYXhlcywgc2l6ZXMgb2YgbW9kYWwgZWxlbWVudHMgYW5kIHRoZWlyIGxheW91dCBtYXRjaCB0aGUgZGVzaWduOiArMlxyXG4gICsgQWZ0ZXIgdGhlIE1vZGFsIGlzIG9wZW5lZCwgdGhlICdTaXplJyBvcHRpb24gJ1MnIGlzIHNlbGVjdGVkLCBhbmQgbm8gb3B0aW9uIGluIHRoZSAnQWRkaXRpdmVzJyBzZWN0aW9uIGlzIHNlbGVjdGVkLiBUaGUgcHJvZHVjdCdzIGZpbmFsIHByaWNlIGlzIHRoZSBzYW1lIGFzIGluIHRoZSBjYXJkOiArMlxyXG41LiBWaWRlbzogKzg7XHJcblxyXG5Ub3RhbDogNzhgKTtcclxuIiwiaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2h0bWxUb0VsZW1lbnRcIjtcclxuaW1wb3J0IGhlcm8gZnJvbSBcIi4vaW5kZXguaHRtbFwiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5jb25zdCBjb250ZW50ID0gaHRtbFRvRWxlbWVudChoZXJvKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQ7XHJcbiIsImltcG9ydCBodG1sVG9FbGVtZW50IGZyb20gXCIuLi8uLi8uLi91dGlscy9odG1sVG9FbGVtZW50XCI7XHJcbmltcG9ydCBmYXZvcml0ZSBmcm9tIFwiLi9pbmRleC5odG1sXCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBodG1sVG9FbGVtZW50KGZhdm9yaXRlKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBzbGlkZXJMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX2xpbmVcIik7XHJcbiAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXJfX2xpbmVfY2FyZFwiKTtcclxuICBjb25zdCBhcnJvd0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fYXJyb3dfbGVmdFwiKTtcclxuICBjb25zdCBhcnJvd1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX2Fycm93X3JpZ2h0XCIpO1xyXG4gIGNvbnN0IHByb2dyZXNzQmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyX19wcm9ncmVzcy1iYXJfbGluZVwiKTtcclxuXHJcbiAgbGV0IHNsaWRlSW5kZXggPSAwO1xyXG4gIGxldCB3aWR0aDtcclxuICBsZXQgcHJvZ3Jlc3NCYXJJbmRleCA9IDA7XHJcbiAgbGV0IHgxID0gbnVsbDtcclxuXHJcbiAgcHJvZ3Jlc3NCYXJzW3NsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICB3aWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX19jb250YWluZXJcIikub2Zmc2V0V2lkdGg7XHJcbiAgICBzbGlkZXJMaW5lLnN0eWxlLndpZHRoID0gd2lkdGggKiBzbGlkZXMubGVuZ3RoICsgXCJweFwiO1xyXG4gICAgc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XHJcbiAgICAgIHNsaWRlLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcbiAgICAgIHNsaWRlLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgfSk7XHJcbiAgICByb2xsU2xpZGVyKCk7XHJcbiAgfVxyXG4gIGluaXQoKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBpbml0KTtcclxuXHJcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgc2xpZGVJbmRleCsrO1xyXG4gICAgcHJvZ3Jlc3NCYXJJbmRleCsrO1xyXG4gICAgaWYgKHNsaWRlSW5kZXggPj0gc2xpZGVzLmxlbmd0aCkge1xyXG4gICAgICBzbGlkZUluZGV4ID0gMDtcclxuICAgICAgcHJvZ3Jlc3NCYXJJbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgICByb2xsU2xpZGVyKCk7XHJcbiAgICB0aGlzU2xpZGUocHJvZ3Jlc3NCYXJJbmRleCk7XHJcbiAgfTtcclxuICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBzbGlkZUluZGV4LS07XHJcbiAgICBwcm9ncmVzc0JhckluZGV4LS07XHJcbiAgICBpZiAoc2xpZGVJbmRleCA8IDApIHtcclxuICAgICAgc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGggLSAxO1xyXG4gICAgICBwcm9ncmVzc0JhckluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbiAgICByb2xsU2xpZGVyKCk7XHJcbiAgICB0aGlzU2xpZGUocHJvZ3Jlc3NCYXJJbmRleCk7XHJcbiAgfTtcclxuICBhcnJvd1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXh0U2xpZGUpO1xyXG4gIGFycm93TGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJldlNsaWRlKTtcclxuICBmdW5jdGlvbiByb2xsU2xpZGVyKCkge1xyXG4gICAgc2xpZGVyTGluZS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtXCIgKyBzbGlkZUluZGV4ICogd2lkdGggKyBcInB4KVwiO1xyXG4gIH1cclxuICBwcm9ncmVzc0JhcnMuZm9yRWFjaCgocHJvZ3Jlc3NCYXIsIGluZGV4KSA9PiB7XHJcbiAgICBwcm9ncmVzc0Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBzbGlkZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHNsaWRlckxpbmUuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLVwiICsgc2xpZGVJbmRleCAqIHdpZHRoICsgXCJweClcIjtcclxuICAgICAgcHJvZ3Jlc3NCYXJJbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzU2xpZGUocHJvZ3Jlc3NCYXJJbmRleCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBjb25zdCB0aGlzU2xpZGUgPSAoaW5kZXgpID0+IHtcclxuICAgIGZvciAobGV0IHByb2dyZXNzQmFyIG9mIHByb2dyZXNzQmFycykge1xyXG4gICAgICBwcm9ncmVzc0Jhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJvZ3Jlc3NCYXJzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH07XHJcblxyXG4gIHByb2dyZXNzQmFycy5mb3JFYWNoKChwcm9ncmVzc0JhcikgPT4ge1xyXG4gICAgcHJvZ3Jlc3NCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgIG5leHRTbGlkZSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgc2xpZGVyTGluZS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJjb250ZXh0bWVudVwiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlQW5pbWF0aW9uKCkge1xyXG4gICAgbGV0IHByb2dyZXNzQmFyID0gcHJvZ3Jlc3NCYXJzW3NsaWRlSW5kZXhdO1xyXG4gICAgcHJvZ3Jlc3NCYXIuY2xhc3NMaXN0LnRvZ2dsZShcInBhdXNlZFwiKTtcclxuICB9XHJcblxyXG4gIHNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xyXG4gICAgc2xpZGUuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJlbnRlclwiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5wb2ludGVyVHlwZSA9PT0gXCJ0b3VjaFwiKSByZXR1cm47XHJcbiAgICAgIHRvZ2dsZUFuaW1hdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XHJcbiAgICBzbGlkZS5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmxlYXZlXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIpIHJldHVybjtcclxuICAgICAgdG9nZ2xlQW5pbWF0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcclxuICAgIHNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsICgpID0+IHtcclxuICAgICAgdG9nZ2xlQW5pbWF0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcclxuICAgIHNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoKSA9PiB7XHJcbiAgICAgIHRvZ2dsZUFuaW1hdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHNsaWRlckxpbmUuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBuZXh0U2xpZGUpO1xyXG5cclxuICAvLyBUb3VjaCBldmVudHNcclxuICBzbGlkZXJMaW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVRvdWNoU3RhcnQsIGZhbHNlKTtcclxuICBzbGlkZXJMaW5lLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaGFuZGxlVG91Y2hNb3ZlLCBmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoZXZlbnQpIHtcclxuICAgIHgxID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGV2ZW50KSB7XHJcbiAgICBpZiAoIXgxKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGxldCB4MiA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgIGlmICh4MiAtIHgxID4gMCkge1xyXG4gICAgICBwcmV2U2xpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5leHRTbGlkZSgpO1xyXG4gICAgfVxyXG4gICAgeDEgPSBudWxsO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250ZW50O1xyXG4iLCJpbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvaHRtbFRvRWxlbWVudFwiO1xyXG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vaW5kZXguaHRtbFwiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5jb25zdCBjb250ZW50ID0gaHRtbFRvRWxlbWVudChhYm91dCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250ZW50O1xyXG4iLCJpbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvaHRtbFRvRWxlbWVudFwiO1xyXG5pbXBvcnQgYXBwIGZyb20gXCIuL2luZGV4Lmh0bWxcIjtcclxuXHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5cclxuY29uc3QgY29udGVudCA9IGh0bWxUb0VsZW1lbnQoYXBwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQ7XHJcbiIsImltcG9ydCBodG1sVG9FbGVtZW50IGZyb20gXCIuLi8uLi91dGlscy9odG1sVG9FbGVtZW50XCI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2luZGV4Lmh0bWxcIjtcclxuXHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5cclxuY29uc3QgZm9vdGVyID0gaHRtbFRvRWxlbWVudChGb290ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyO1xyXG4iLCJpbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvaHRtbFRvRWxlbWVudFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2luZGV4Lmh0bWxcIjtcclxuXHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5cclxuY29uc3QgaGVhZGVyID0gaHRtbFRvRWxlbWVudChIZWFkZXIpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIC8vIEJ1cmdlclxyXG4gIGNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyX19jb250YWluZXJcIik7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fd3JhcHBlclwiKTtcclxuICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbl9fbGlzdF9saW5rXCIpO1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbiAgYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibm8tc2Nyb2xsXCIpO1xyXG4gIH0pO1xyXG5cclxuICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuXHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbFwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGh0bWxTdHJpbmcpIHtcclxuICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xyXG4gIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguc2Nzc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==