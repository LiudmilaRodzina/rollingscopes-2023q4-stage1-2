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
  `Привет! Извини, ещё осталось доработать функционал load more и цен в модалках. Если есть возможность подождать с проверкой, буду очень благодарна. Спасибо!`
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
    slide.addEventListener("mouseenter", () => {
      toggleAnimation();
    });
  });
  slides.forEach((slide) => {
    slide.addEventListener("mouseleave", () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDak5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDckJBOzs7OztBRUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDFfaGVyby9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wMl9mYXZvcml0ZS9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wM19hYm91dC9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wNF9hcHAvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0Zvb3Rlci9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvSGVhZGVyL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wMV9oZXJvL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAyX2Zhdm9yaXRlL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAzX2Fib3V0L2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzA0X2FwcC9pbmRleC5odG1sIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9IZWFkZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvaW5kZXguc2Nzcz85NTczIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wMV9oZXJvL2luZGV4LnNjc3M/NmFmZSIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDJfZmF2b3JpdGUvaW5kZXguc2Nzcz84YzQ1Iiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wM19hYm91dC9pbmRleC5zY3NzPzM1MWUiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzA0X2FwcC9pbmRleC5zY3NzPzNmYzQiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Gb290ZXIvaW5kZXguc2Nzcz9iYTdiIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvSGVhZGVyL2luZGV4LnNjc3M/MjlmNiIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDFfaGVyby9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDJfZmF2b3JpdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAzX2Fib3V0L2luZGV4LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wNF9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL3V0aWxzL2h0bWxUb0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL2ludGVyKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG59XG5cbi53cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxNDRyZW07XG4gIHBhZGRpbmc6IDAgNHJlbSA0cmVtIDRyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDc2LjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAud3JhcHBlciB7XG4gICAgcGFkZGluZzogMCAxLjZyZW0gNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDM4cmVtO1xuICB9XG59XG5cbmE6bGluayxcbmE6dmlzaXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ2FwOiAwLjhyZW07XG4gIHdpZHRoOiAyMHJlbTtcbiAgaGVpZ2h0OiA2LjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xufVxuXG4uYnV0dG9uLXRleHQge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa0VBOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBaEVGOztBQWtFQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUEvREY7O0FBaUVBO0VBQ0UsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQXBDYztBQTFCaEI7O0FBaUVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkEzQ2M7RUE0Q2QsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUE5REY7QUFGRTtFQXlERjtJQVVJLGtCQUFBO0VBN0RGO0FBQ0Y7QUFERTtFQW1ERjtJQWNJLHNCQUFBO0VBNURGO0FBQ0Y7QUFBRTtFQTZDRjtJQWtCSSxnQkFBQTtFQTNERjtBQUNGOztBQThEQTs7RUFFRSxxQkFBQTtFQUNBLGNBQUE7QUEzREY7O0FBOERBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUEzREY7O0FBNkRBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQS9FYztFQWdGZCxvQkFBQTtBQTFERjs7QUE2REE7RUE5SEUsaUJBK0hjO0VBOUhkLGdCQThIc0I7RUE3SHRCLGlCQTZIMkI7RUE1SDNCLGNBNkNnQjtBQXdCbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG5AbWl4aW4gbWVkaWEtZGVza3RvcCB7XFxyXFxuICAvLyAxMjIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gIC8vIDEwMjRweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtbGFuZC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gIC8vIDc2OHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1wb3J0LXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gIC8vIDcyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1sYXJnZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAvLyA0MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UzZDVjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2MxYjZhZDtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG4kZGVza3RvcC13aWR0aDogMTIyMHB4O1xcclxcbiR0YWJsZXQtbGFuZC13aWR0aDogMTAyNHB4O1xcclxcbiR0YWJsZXQtcG9ydC13aWR0aDogNzY4cHg7XFxyXFxuJG1vYmlsZS1sYXJnZS13aWR0aDogNzIwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNDIwcHg7XFxyXFxuXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9pbnRlclxcXCIpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNDRyZW07XFxyXFxuICBwYWRkaW5nOiAwIDRyZW0gNHJlbSA0cmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3Ni44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgcGFkZGluZzogMCAxLjZyZW0gNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIG1heC13aWR0aDogMzhyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmE6bGluayxcXHJcXG5hOnZpc2l0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5idXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdhcDogMC44cmVtO1xcclxcbiAgd2lkdGg6IDIwcmVtO1xcclxcbiAgaGVpZ2h0OiA2LjRyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLXRleHQge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlY3Rpb25fX2hlcm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDY0LjRyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnNlY3Rpb25fX2hlcm8ge1xuICAgIG1pbi1oZWlnaHQ6IDU1LjJyZW07XG4gIH1cbn1cblxuLmJnLXZpZGVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmJnLXZpZGVvIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogNTUuMnJlbTtcbiAgfVxufVxuXG4uYmctdmlkZW9fX2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLnNlY3Rpb25fX2hlcm9fY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDEwcmVtO1xuICB3aWR0aDogNTNyZW07XG4gIGdhcDogNHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2VjdGlvbl9faGVyb19jb250ZW50IHtcbiAgICBtYXJnaW46IDEwcmVtIDZyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuc2VjdGlvbl9faGVyb19jb250ZW50IHtcbiAgICB3aWR0aDogMzQuOHJlbTtcbiAgICBtYXJnaW46IDZyZW0gMi44cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnNlY3Rpb25fX2hlcm9fY29udGVudCB7XG4gICAgd2lkdGg6IDMxLjZyZW07XG4gICAgbWFyZ2luOiA2cmVtIDEuNnJlbTtcbiAgfVxufVxuXG4uaGVhZGluZy1saWdodCB7XG4gIGZvbnQtc2l6ZTogNy4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTA1JTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmhlYWRpbmctbGlnaHQge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMTUlO1xuICAgIGNvbG9yOiAjZTFkNGM5O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmhlYWRpbmctbGlnaHQge1xuICAgIGZvbnQtc2l6ZTogNC4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDExNSU7XG4gICAgY29sb3I6ICNlMWQ0Yzk7XG4gIH1cbn1cbi5oZWFkaW5nLWxpZ2h0IHNwYW4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjYjA5MDdhO1xufVxuXG4uc2VjdGlvbl9faGVyb190ZXh0IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogI2UxZDRjOTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuc2VjdGlvbl9faGVyb190ZXh0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnNlY3Rpb25fX2hlcm9fdGV4dCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuXG4ubWVudS1idXR0b246aG92ZXIgLmJ1dHRvbi1pbWFnZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4ubWVudS1idXR0b246aG92ZXIgLmJ1dHRvbi10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDByZW07XG59XG5cbi5idXR0b24tdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnV0dG9uLXRleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbi5idXR0b24taW1hZ2Uge1xuICBvcGFjaXR5OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnV0dG9uLWltYWdlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDFfaGVyby9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUEvREY7QUFtQ0U7RUEwQkY7SUFNSSxtQkFBQTtFQS9ERjtBQUNGOztBQWlFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUE5REY7QUFrQkU7RUFtQ0Y7SUFZSSxVQUFBO0lBQ0EsZUFBQTtFQTdERjtBQUNGOztBQWdFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUE3REY7O0FBZ0VBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQTdERjtBQWxCRTtFQXNFRjtJQVlJLGtCQUFBO0VBNURGO0FBQ0Y7QUFqQkU7RUFnRUY7SUFlSSxjQUFBO0lBQ0EsbUJBQUE7RUExREY7QUFDRjtBQWpCRTtFQTBERjtJQW1CSSxjQUFBO0lBQ0EsbUJBQUE7RUF4REY7QUFDRjs7QUEyREE7RUF2SEUsaUJBd0hjO0VBdkhkLGdCQXVIc0I7RUF0SHRCLGlCQXNIMkI7RUFySDNCLGNBOENpQjtBQWtCbkI7QUFwQ0U7RUF3RkY7SUF2SEUsZUEySGdCO0lBMUhoQixnQkEwSHNCO0lBekh0QixpQkF5SDJCO0lBeEgzQixjQThDaUI7RUF5QmpCO0FBQ0Y7QUF0Q0U7RUFrRkY7SUF2SEUsaUJBOEhnQjtJQTdIaEIsZ0JBNkh3QjtJQTVIeEIsaUJBNEg2QjtJQTNIN0IsY0E4Q2lCO0VBaUNqQjtBQUNGO0FBOENFO0VBQ0Usa0JBQUE7RUFDQSxjQWpGZ0I7QUFxQ3BCOztBQStDQTtFQXRJRSxpQkF1SWM7RUF0SWQsZ0JBc0lzQjtFQXJJdEIsaUJBcUkyQjtFQXBJM0IsY0E4Q2lCO0FBNkNuQjtBQS9ERTtFQXVHRjtJQUlJLG1CQUFBO0VBeENGO0FBQ0Y7QUE5REU7RUFpR0Y7SUFPSSxnQkFBQTtFQXRDRjtBQUNGOztBQTJDSTtFQUNFLFVBQUE7QUF4Q047QUEyQ0k7RUFDRSxpQkFBQTtBQXpDTjs7QUE4Q0E7RUFDRSxpQkFBQTtFQUNBLGdDQUFBO0FBM0NGO0FBM0ZFO0VBb0lGO0lBSUksY0FBQTtFQXpDRjtBQUNGOztBQTRDQTtFQUlFLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBNUNGO0FBdEdFO0VBNElGO0lBRUksVUFBQTtFQXBDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkY29sb3IpIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJXRyYW5zaXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuQG1peGluIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgLy8gMTIyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJGRlc2t0b3Atd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAvLyAxMDI0cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LWxhbmQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAvLyA3NjhweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtcG9ydC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAvLyA3MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtbGFyZ2Utd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUge1xcclxcbiAgLy8gNDIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXG4vLyBCYWNrZ3JvdW5kIENvbG9yXFxyXFxuJGNvbG9yLXByaW1hcnk6ICNlM2Q1Yzk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeTogIzY2NWY1NTtcXHJcXG4kY29sb3ItYmFja2Ryb3A6ICM0MDNmM2RjYztcXHJcXG5cXHJcXG4vLyBUZXh0IENvbG9yXFxyXFxuJGNvbG9yLXRleHQtZGFyazogIzQwM2YzZDtcXHJcXG4kY29sb3ItdGV4dC1saWdodDogI2UxZDRjOTtcXHJcXG4kY29sb3ItdGV4dC1hY2NlbnQ6ICNiMDkwN2E7XFxyXFxuXFxyXFxuLy8gQm9yZGVyIENvbG9yOlxcclxcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNjMWI2YWQ7XFxyXFxuJGNvbG9yLWJvcmRlci1kYXJrOiAjNjY1ZjU1O1xcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuJGRlc2t0b3Atd2lkdGg6IDEyMjBweDtcXHJcXG4kdGFibGV0LWxhbmQtd2lkdGg6IDEwMjRweDtcXHJcXG4kdGFibGV0LXBvcnQtd2lkdGg6IDc2OHB4O1xcclxcbiRtb2JpbGUtbGFyZ2Utd2lkdGg6IDcyMHB4O1xcclxcbiRtb2JpbGUtd2lkdGg6IDQyMHB4O1xcclxcblxcbi5zZWN0aW9uX19oZXJvIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDY0LjRyZW07XFxyXFxuXFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICBtaW4taGVpZ2h0OiA1NS4ycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uYmctdmlkZW8ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGhlaWdodDogNTUuMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJnLXZpZGVvX19jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uX19oZXJvX2NvbnRlbnQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIG1hcmdpbjogMTByZW07XFxyXFxuICB3aWR0aDogNTNyZW07XFxyXFxuICBnYXA6IDRyZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIG1hcmdpbjogMTByZW0gNnJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgIHdpZHRoOiAzNC44cmVtO1xcclxcbiAgICBtYXJnaW46IDZyZW0gMi44cmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgd2lkdGg6IDMxLjZyZW07XFxyXFxuICAgIG1hcmdpbjogNnJlbSAxLjZyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nLWxpZ2h0IHtcXHJcXG4gIEBpbmNsdWRlIHRleHQoNy4ycmVtLCA2MDAsIDEwNSUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoNXJlbSwgNjAwLCAxMTUlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDQuMnJlbSwgNjAwLCAxMTUlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzcGFuIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLXRleHQtYWNjZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG4uc2VjdGlvbl9faGVyb190ZXh0IHtcXHJcXG4gIEBpbmNsdWRlIHRleHQoMS42cmVtLCA0MDAsIDE1MCUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b24ge1xcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIC5idXR0b24taW1hZ2Uge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1dHRvbi10ZXh0IHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLXRleHQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5idXR0b24taW1hZ2Uge1xcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcnJvdy1sZWZ0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Fycm93LXJpZ2h0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Fycm93LWxlZnQtaG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3ctcmlnaHQtaG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2VjdGlvbl9fZmF2b3JpdGUge1xuICBwYWRkaW5nOiAxMHJlbSAwO1xufVxuXG4uaGVhZGluZy1kYXJrIHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuaGVhZGluZy1kYXJrIHtcbiAgICBmb250LXNpemU6IDQuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICAgIGNvbG9yOiAjNDAzZjNkO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmhlYWRpbmctZGFyayB7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTI1JTtcbiAgICBjb2xvcjogIzQwM2YzZDtcbiAgfVxufVxuLmhlYWRpbmctZGFyayBzcGFuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogI2IwOTA3YTtcbn1cblxuLnNsaWRlcl9fYXJyb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY1ZjU1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA2cmVtO1xuICBoZWlnaHQ6IDZyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5zbGlkZXJfX2Fycm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uc2xpZGVyX19hcnJvdyBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMi40cmVtO1xuICBoZWlnaHQ6IDIuNHJlbTtcbn1cbi5zbGlkZXJfX2Fycm93X2xlZnQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4uc2xpZGVyX19hcnJvd19yaWdodC1pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnNsaWRlcl9fYXJyb3c6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjVmNTU7XG4gIH1cbiAgLnNsaWRlcl9fYXJyb3c6aG92ZXIgLmFycm93X2xlZnQtaWNvbiB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICB9XG4gIC5zbGlkZXJfX2Fycm93OmhvdmVyIC5hcnJvd19yaWdodC1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gIH1cbn1cblxuLnNsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDRyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLnNsaWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuLnNsaWRlcl9fY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiA0OHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuc2xpZGVyX19jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMzQuOHJlbTtcbiAgfVxufVxuXG4uc2xpZGVyX19saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xufVxuLnNsaWRlcl9fbGluZV9jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA0OHJlbTtcbiAgZ2FwOiAxLjhyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLnNsaWRlcl9fbGluZV9jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDM0LjhyZW07XG4gIH1cbn1cbi5zbGlkZXJfX2xpbmVfY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59XG4uc2xpZGVyX19saW5lX2NhcmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59XG4uc2xpZGVyX19saW5lX2NhcmQtcHJpY2Uge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIGNvbG9yOiAjNDAzZjNkO1xufVxuXG4uc2xpZGVyX19wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEuMnJlbTtcbiAgcGFkZGluZy10b3A6IDMuOHJlbTtcbn1cbi5zbGlkZXJfX3Byb2dyZXNzLWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYjZhZDtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogMC40cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbn1cbi5zbGlkZXJfX3Byb2dyZXNzLWJhcl9saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xufVxuLnNsaWRlcl9fcHJvZ3Jlc3MtYmFyX2xpbmUuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NWY1NTtcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcyAzcyBsaW5lYXIgMHMgZm9yd2FyZHM7XG59XG4uc2xpZGVyX19wcm9ncmVzcy1iYXJfbGluZS5wYXVzZWQge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzIHtcbiAgZnJvbSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDJfZmF2b3JpdGUvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFnRUE7RUFDRSxnQkFBQTtBQS9ERjs7QUFpRUE7RUFsRUUsZUFtRWM7RUFsRWQsZ0JBa0VvQjtFQWpFcEIsaUJBaUV5QjtFQWhFekIsY0E2Q2dCO0VBb0JoQixrQkFBQTtBQTNERjtBQXNCRTtFQW1DRjtJQWxFRSxpQkF1RWdCO0lBdEVoQixnQkFzRXdCO0lBckV4QixpQkFxRTZCO0lBcEU3QixjQTZDZ0I7RUFoQ2hCO0FBQ0Y7QUFvQkU7RUE2QkY7SUFsRUUsaUJBMEVnQjtJQXpFaEIsZ0JBeUV3QjtJQXhFeEIsaUJBd0U2QjtJQXZFN0IsY0E2Q2dCO0VBeEJoQjtBQUNGO0FBb0RFO0VBQ0Usa0JBQUE7RUFDQSxjQTdCZ0I7QUFyQnBCOztBQXFEQTtFQUNFLHlCQXhDYztFQXlDZCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQWxERjtBQVBFO0VBbURGO0lBU0ksYUFBQTtFQWpERjtBQUNGO0FBbURFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQWpESjtBQW1ERTtFQUNFLG1EQUFBO0VBQ0EsZ0NBQUE7QUFqREo7QUFtREU7RUFDRSxtREFBQTtFQUNBLGdDQUFBO0FBakRKO0FBbURFO0VBQ0U7SUFDRSx5QkFqRVk7RUFnQmhCO0VBa0RJO0lBQ0UsbURBQUE7RUFoRE47RUFrREk7SUFDRSxtREFBQTtFQWhETjtBQUNGOztBQXFEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFsREY7QUEzQ0U7RUF5RkY7SUFPSSx1QkFBQTtFQWpERjtBQUNGOztBQW1EQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFoREY7QUFyREU7RUFtR0Y7SUFLSSxrQkFBQTtFQS9DRjtBQUNGOztBQWlEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQTlDRjtBQWdERTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUE5Q0o7QUF2RUU7RUErR0E7SUFTSSxrQkFBQTtFQTdDSjtBQUNGO0FBK0NJO0VBMUpGLGlCQTJKa0I7RUExSmxCLGdCQTBKMEI7RUF6SjFCLGlCQXlKK0I7RUF4Si9CLGNBNkNnQjtBQWlFbEI7QUE0Q0k7RUE3SkYsaUJBOEprQjtFQTdKbEIsZ0JBNkowQjtFQTVKMUIsaUJBNEorQjtFQTNKL0IsY0E2Q2dCO0FBdUVsQjtBQXlDSTtFQWhLRixpQkFpS2tCO0VBaEtsQixnQkFnSzBCO0VBL0oxQixpQkErSitCO0VBOUovQixjQTZDZ0I7QUE2RWxCOztBQXdDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQXJDRjtBQXVDRTtFQUNFLGtCQUFBO0VBQ0EseUJBeEhpQjtFQXlIakIsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQXJDSjtBQXVDSTtFQUNFLGtCQUFBO0VBQ0EseUJBOUhjO0VBK0hkLFFBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFyQ047QUF1Q007RUFDRSx5QkFwSVk7RUFxSVoseUNBQUE7QUFyQ1I7QUF1Q007RUFDRSw0QkFBQTtBQXJDUjs7QUEwQ0E7RUFDRTtJQUNFLFFBQUE7RUF2Q0Y7RUF5Q0E7SUFDRSxXQUFBO0VBdkNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG5AbWl4aW4gbWVkaWEtZGVza3RvcCB7XFxyXFxuICAvLyAxMjIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gIC8vIDEwMjRweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtbGFuZC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gIC8vIDc2OHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1wb3J0LXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gIC8vIDcyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1sYXJnZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAvLyA0MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UzZDVjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2MxYjZhZDtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG4kZGVza3RvcC13aWR0aDogMTIyMHB4O1xcclxcbiR0YWJsZXQtbGFuZC13aWR0aDogMTAyNHB4O1xcclxcbiR0YWJsZXQtcG9ydC13aWR0aDogNzY4cHg7XFxyXFxuJG1vYmlsZS1sYXJnZS13aWR0aDogNzIwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNDIwcHg7XFxyXFxuXFxuLnNlY3Rpb25fX2Zhdm9yaXRlIHtcXHJcXG4gIHBhZGRpbmc6IDEwcmVtIDA7XFxyXFxufVxcclxcbi5oZWFkaW5nLWRhcmsge1xcclxcbiAgQGluY2x1ZGUgdGV4dCg2cmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCg0LjJyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDMuMnJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNwYW4ge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1hY2NlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi5zbGlkZXJfX2Fycm93IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvcmRlci1kYXJrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDZyZW07XFxyXFxuICBoZWlnaHQ6IDZyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzcGFuIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogMi40cmVtO1xcclxcbiAgICBoZWlnaHQ6IDIuNHJlbTtcXHJcXG4gIH1cXHJcXG4gICZfbGVmdC1pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Fycm93LWxlZnQuc3ZnKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB9XFxyXFxuICAmX3JpZ2h0LWljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XFxyXFxuICAgICAgLmFycm93X2xlZnQtaWNvbiB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3ctbGVmdC1ob3Zlci5zdmcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAuYXJyb3dfcmlnaHQtaWNvbiB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3ctcmlnaHQtaG92ZXIuc3ZnKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcbi5zbGlkZXJfX2NvbnRhaW5lciB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgbWF4LXdpZHRoOiA0OHJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgIG1heC13aWR0aDogMzQuOHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLnNsaWRlcl9fbGluZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgJl9jYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA0OHJlbTtcXHJcXG4gICAgZ2FwOiAxLjhyZW07XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAzNC44cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtdGl0bGUge1xcclxcbiAgICAgIEBpbmNsdWRlIHRleHQoMi40cmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgICB9XFxyXFxuICAgICYtdGV4dCB7XFxyXFxuICAgICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDQwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgIH1cXHJcXG4gICAgJi1wcmljZSB7XFxyXFxuICAgICAgQGluY2x1ZGUgdGV4dCgyLjRyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLnNsaWRlcl9fcHJvZ3Jlc3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogMy44cmVtO1xcclxcblxcclxcbiAgJi1iYXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3JkZXItbGlnaHQ7XFxyXFxuICAgIHdpZHRoOiA0cmVtO1xcclxcbiAgICBoZWlnaHQ6IDAuNHJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XFxyXFxuXFxyXFxuICAgICZfbGluZSB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3JkZXItZGFyaztcXHJcXG4gICAgICB3aWR0aDogMDtcXHJcXG4gICAgICBoZWlnaHQ6IDAuNHJlbTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG5cXHJcXG4gICAgICAmLmFjdGl2ZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm9yZGVyLWRhcms7XFxyXFxuICAgICAgICBhbmltYXRpb246IHByb2dyZXNzIDNzIGxpbmVhciAwcyBmb3J3YXJkcztcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJi5wYXVzZWQge1xcclxcbiAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZWN0aW9uX19hYm91dCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcbn1cbi5zZWN0aW9uX19hYm91dCAuaGVhZGluZy1kYXJrIHtcbiAgZm9udC1zaXplOiA1OS45cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5zZWN0aW9uX19hYm91dCAuaGVhZGluZy1kYXJrIHtcbiAgICBmb250LXNpemU6IDQuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICAgIGNvbG9yOiAjNDAzZjNkO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnNlY3Rpb25fX2Fib3V0IC5oZWFkaW5nLWRhcmsge1xuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gICAgY29sb3I6ICM0MDNmM2Q7XG4gIH1cbn1cblxuLmltYWdlc19fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogNHJlbTtcbiAgcGFkZGluZy10b3A6IDRyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5pbWFnZXNfX3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMCAxNSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW1hZ2VzX193cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmltYWdlX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbWFnZV9fY29udGFpbmVyIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5pbWFnZV9fY29udGFpbmVyIGltZzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkyKTtcbiAgfVxufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pbWFnZV9fY29udGFpbmVyIGltZzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcbiAgfVxufVxuXG4uaW1hZ2UtbGFyZ2Uge1xuICBoZWlnaHQ6IDU5cmVtO1xuICBncmlkLXJvdzogc3BhbiAyO1xufVxuXG4uaW1hZ2Utc21hbGwge1xuICBoZWlnaHQ6IDQzcmVtO1xuICBncmlkLXJvdzogc3BhbiAxO1xufVxuXG4uaW1hZ2UtMSB7XG4gIG9yZGVyOiAxO1xufVxuXG4uaW1hZ2UtMiB7XG4gIG9yZGVyOiA1O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaW1hZ2UtMiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uaW1hZ2UtMyB7XG4gIG9yZGVyOiAyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaW1hZ2UtMyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uaW1hZ2UtNCB7XG4gIG9yZGVyOiA0O1xufVxuXG4uaW1nLTEge1xuICB0b3A6IC02LjhyZW07XG4gIHJpZ2h0OiAtMy40cmVtO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pbWctMSB7XG4gICAgcmlnaHQ6IC0yLjJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuaW1nLTEge1xuICAgIHJpZ2h0OiAtMTlyZW07XG4gIH1cbn1cblxuLmltZy0yIHtcbiAgdG9wOiAtMTQuOXJlbTtcbiAgcmlnaHQ6IC0zLjRyZW07XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5pbWctMyB7XG4gIHRvcDogLTE0LjdyZW07XG4gIHJpZ2h0OiAtMzIuOXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uaW1nLTQge1xuICB0b3A6IC02LjdyZW07XG4gIHJpZ2h0OiAtMy40cmVtO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pbWctNCB7XG4gICAgcmlnaHQ6IC0yLjJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuaW1nLTQge1xuICAgIHJpZ2h0OiAtMTlyZW07XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQvQ29udGVudC8wM19hYm91dC9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdFQTtFQUNFLHFCQUFBO0FBL0RGO0FBZ0VFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQTlESjtBQTBCRTtFQWtDQTtJQWpFQSxpQkFxRWtCO0lBcEVsQixnQkFvRTBCO0lBbkUxQixpQkFtRStCO0lBbEUvQixjQTZDZ0I7RUFwQ2hCO0FBQ0Y7QUF3QkU7RUE0QkE7SUFqRUEsaUJBd0VrQjtJQXZFbEIsZ0JBdUUwQjtJQXRFMUIsaUJBc0UrQjtJQXJFL0IsY0E2Q2dCO0VBNUJoQjtBQUNGOztBQXdEQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQXJERjtBQVRFO0VBMERGO0lBT0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7RUFwREY7QUFDRjtBQVhFO0VBb0RGO0lBYUksV0FBQTtJQUNBLFNBQUE7RUFsREY7QUFDRjs7QUFxREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBbERGO0FBb0RFO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtBQWxESjtBQW1ESTtFQUNFO0lBQ0Usc0JBQUE7RUFqRE47QUFDRjtBQWpDRTtFQWdGSTtJQUlJLHNCQUFBO0VBL0NSO0FBQ0Y7O0FBcURBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBbERGOztBQW9EQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQWpERjs7QUFtREE7RUFDRSxRQUFBO0FBaERGOztBQWtEQTtFQUNFLFFBQUE7QUEvQ0Y7QUE5REU7RUE0R0Y7SUFHSSxhQUFBO0VBN0NGO0FBQ0Y7O0FBK0NBO0VBQ0UsUUFBQTtBQTVDRjtBQXZFRTtFQWtIRjtJQUdJLGFBQUE7RUExQ0Y7QUFDRjs7QUE0Q0E7RUFDRSxRQUFBO0FBekNGOztBQTRDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUF6Q0Y7QUFoRkU7RUFzSEY7SUFNSSxjQUFBO0VBeENGO0FBQ0Y7QUF6RUU7RUEwR0Y7SUFVSSxhQUFBO0VBdkNGO0FBQ0Y7O0FBeUNBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQXRDRjs7QUF3Q0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBckNGOztBQXVDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFwQ0Y7QUE1R0U7RUE2SUY7SUFNSSxjQUFBO0VBbkNGO0FBQ0Y7QUFyR0U7RUFpSUY7SUFVSSxhQUFBO0VBbENGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG5AbWl4aW4gbWVkaWEtZGVza3RvcCB7XFxyXFxuICAvLyAxMjIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gIC8vIDEwMjRweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtbGFuZC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gIC8vIDc2OHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1wb3J0LXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gIC8vIDcyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1sYXJnZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAvLyA0MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UzZDVjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2MxYjZhZDtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG4kZGVza3RvcC13aWR0aDogMTIyMHB4O1xcclxcbiR0YWJsZXQtbGFuZC13aWR0aDogMTAyNHB4O1xcclxcbiR0YWJsZXQtcG9ydC13aWR0aDogNzY4cHg7XFxyXFxuJG1vYmlsZS1sYXJnZS13aWR0aDogNzIwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNDIwcHg7XFxyXFxuXFxuLnNlY3Rpb25fX2Fib3V0IHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcXHJcXG4gIC5oZWFkaW5nLWRhcmsge1xcclxcbiAgICBmb250LXNpemU6IDU5LjlweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgICAgQGluY2x1ZGUgdGV4dCg0LjJyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgICBAaW5jbHVkZSB0ZXh0KDMuMnJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2VzX193cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ2FwOiA0cmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDRyZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIG1hcmdpbjogMCAxNSU7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5pbWFnZV9fY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgaW1nIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkyKTtcXHJcXG5cXHJcXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlLWxhcmdlIHtcXHJcXG4gIGhlaWdodDogNTlyZW07XFxyXFxuICBncmlkLXJvdzogc3BhbiAyO1xcclxcbn1cXHJcXG4uaW1hZ2Utc21hbGwge1xcclxcbiAgaGVpZ2h0OiA0M3JlbTtcXHJcXG4gIGdyaWQtcm93OiBzcGFuIDE7XFxyXFxufVxcclxcbi5pbWFnZS0xIHtcXHJcXG4gIG9yZGVyOiAxO1xcclxcbn1cXHJcXG4uaW1hZ2UtMiB7XFxyXFxuICBvcmRlcjogNTtcXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmltYWdlLTMge1xcclxcbiAgb3JkZXI6IDI7XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcbi5pbWFnZS00IHtcXHJcXG4gIG9yZGVyOiA0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLTEge1xcclxcbiAgdG9wOiAtNi44cmVtO1xcclxcbiAgcmlnaHQ6IC0zLjRyZW07XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICByaWdodDogLTIuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIHJpZ2h0OiAtMTlyZW07XFxyXFxuICB9XFxyXFxufVxcclxcbi5pbWctMiB7XFxyXFxuICB0b3A6IC0xNC45cmVtO1xcclxcbiAgcmlnaHQ6IC0zLjRyZW07XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG4uaW1nLTMge1xcclxcbiAgdG9wOiAtMTQuN3JlbTtcXHJcXG4gIHJpZ2h0OiAtMzIuOXB4O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuLmltZy00IHtcXHJcXG4gIHRvcDogLTYuN3JlbTtcXHJcXG4gIHJpZ2h0OiAtMy40cmVtO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgcmlnaHQ6IC0yLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICByaWdodDogLTE5cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2lvcy1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hbmRyb2lkLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2lvcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hbmRyb2lkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlY3Rpb25fX2FwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTByZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcbn1cbi5zZWN0aW9uX19hcHAgLmhlYWRpbmctZGFyayB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAuc2VjdGlvbl9fYXBwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5zZWN0aW9uX19hcHAge1xuICAgIGdhcDogNHJlbTtcbiAgfVxufVxuXG4uYXBwX19jb2x1bW4tMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDRyZW07XG59XG4uYXBwX19jb2x1bW4tMV90ZXh0IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogIzQwM2YzZDtcbn1cblxuLmFwcF9fYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuYXBwX19idXR0b25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi5hcHBfX2J1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjVmNTU7XG4gIGdhcDogMC44cmVtO1xuICB3aWR0aDogMjByZW07XG4gIGhlaWdodDogNi40cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgcGFkZGluZzogMS4ycmVtIDJyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5hcHBfX2J1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NWY1NTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgfVxuICAuYXBwX19idXR0b246aG92ZXIgLmJ1dHRvbl9faWNvbl9pb3Mge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgfVxuICAuYXBwX19idXR0b246aG92ZXIgLmJ1dHRvbl9faWNvbl9hbmRyb2lkIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIH1cbiAgLmFwcF9fYnV0dG9uOmhvdmVyIC5idXR0b25fX3RleHRfc21hbGwge1xuICAgIGNvbG9yOiAjZTNkNWM5O1xuICB9XG4gIC5hcHBfX2J1dHRvbjpob3ZlciAuYnV0dG9uX190ZXh0X2xhcmdlIHtcbiAgICBjb2xvcjogI2UzZDVjOTtcbiAgfVxufVxuLmJ1dHRvbl9faWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMuNnJlbTtcbiAgaGVpZ2h0OiAzLjZyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnV0dG9uX19pY29uX2lvcyB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuLmJ1dHRvbl9faWNvbl9hbmRyb2lkIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4uYnV0dG9uX190ZXh0X3NtYWxsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTQwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmJ1dHRvbl9fdGV4dF9sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFwcF9fY29sdW1uLTIge1xuICAgIG1heC13aWR0aDogNjNyZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmFwcF9fY29sdW1uLTIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmFwcF9fY29sdW1uLTIgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDM0LjhyZW07XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQvQ29udGVudC8wNF9hcHAvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFnRUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBL0RGO0FBaUVFO0VBQ0UsaUJBQUE7QUEvREo7QUFPRTtFQWtERjtJQVVJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VBL0RGO0FBQ0Y7QUFrQkU7RUFnQ0Y7SUFlSSxTQUFBO0VBN0RGO0FBQ0Y7O0FBK0RBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBNURGO0FBOERFO0VBdkZBLGlCQXdGZ0I7RUF2RmhCLGdCQXVGd0I7RUF0RnhCLGlCQXNGNkI7RUFyRjdCLGNBNkNnQjtBQWpCbEI7O0FBNkRBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUExREY7QUFDRTtFQXVERjtJQUtJLHNCQUFBO0VBekRGO0FBQ0Y7O0FBMkRBO0VBQ0UsYUFBQTtFQUNBLHlCQTNEYztFQTREZCx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQXhERjs7QUEyREE7RUFDRTtJQUNFLHlCQXRFYztJQXVFZCxnQ0FBQTtFQXhERjtFQTBERTtJQUNFLG1EQUFBO0VBeERKO0VBMERFO0lBQ0UsbURBQUE7RUF4REo7RUEwREU7SUFDRSxjQWpGVTtFQXlCZDtFQTBERTtJQUNFLGNBcEZVO0VBNEJkO0FBQ0Y7QUE0REE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUExREY7O0FBNERBO0VBQ0UsbURBQUE7QUF6REY7O0FBMkRBO0VBQ0UsbURBQUE7QUF4REY7O0FBMkRBO0VBakpFLGVBa0pjO0VBakpkLGdCQWlKb0I7RUFoSnBCLGlCQWdKeUI7RUEvSXpCLGNBNkNnQjtFQW1HaEIsaUJBQUE7RUFDQSxnQ0FBQTtBQXJERjs7QUF3REE7RUF2SkUsaUJBd0pjO0VBdkpkLGdCQXVKc0I7RUF0SnRCLGlCQXNKMkI7RUFySjNCLGNBNkNnQjtFQXlHaEIsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFsREY7O0FBdEZFO0VBMklGO0lBRUksZ0JBQUE7SUFDQSxrQkFBQTtFQWxERjtBQUNGO0FBakZFO0VBc0lFO0lBQ0UsZ0JBQUE7RUFsREo7QUFDRjtBQWhGRTtFQXFJRTtJQUNFLGtCQUFBO0VBbERKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG5AbWl4aW4gbWVkaWEtZGVza3RvcCB7XFxyXFxuICAvLyAxMjIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gIC8vIDEwMjRweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtbGFuZC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gIC8vIDc2OHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1wb3J0LXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gIC8vIDcyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1sYXJnZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAvLyA0MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UzZDVjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2MxYjZhZDtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG4kZGVza3RvcC13aWR0aDogMTIyMHB4O1xcclxcbiR0YWJsZXQtbGFuZC13aWR0aDogMTAyNHB4O1xcclxcbiR0YWJsZXQtcG9ydC13aWR0aDogNzY4cHg7XFxyXFxuJG1vYmlsZS1sYXJnZS13aWR0aDogNzIwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNDIwcHg7XFxyXFxuXFxuLnNlY3Rpb25fX2FwcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcXHJcXG5cXHJcXG4gIC5oZWFkaW5nLWRhcmsge1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgZ2FwOiA0cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uYXBwX19jb2x1bW4tMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiA0cmVtO1xcclxcblxcclxcbiAgJl90ZXh0IHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDQwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hcHBfX2J1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxufVxcclxcbi5hcHBfX2J1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgZ2FwOiAwLjhyZW07XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxuICBoZWlnaHQ6IDYuNHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcclxcbiAgcGFkZGluZzogMS4ycmVtIDJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgLmFwcF9fYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgIC5idXR0b25fX2ljb25faW9zIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvaW9zLWhvdmVyLnN2Zyk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJ1dHRvbl9faWNvbl9hbmRyb2lkIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvYW5kcm9pZC1ob3Zlci5zdmcpO1xcclxcbiAgICB9XFxyXFxuICAgIC5idXR0b25fX3RleHRfc21hbGwge1xcclxcbiAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gICAgfVxcclxcbiAgICAuYnV0dG9uX190ZXh0X2xhcmdlIHtcXHJcXG4gICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbl9faWNvbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogMy42cmVtO1xcclxcbiAgaGVpZ2h0OiAzLjZyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmJ1dHRvbl9faWNvbl9pb3Mge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2lvcy5zdmcpO1xcclxcbn1cXHJcXG4uYnV0dG9uX19pY29uX2FuZHJvaWQge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2FuZHJvaWQuc3ZnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbl9fdGV4dF9zbWFsbCB7XFxyXFxuICBAaW5jbHVkZSB0ZXh0KDFyZW0sIDYwMCwgMTQwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uX190ZXh0X2xhcmdlIHtcXHJcXG4gIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwX19jb2x1bW4tMiB7XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIG1heC13aWR0aDogNjNyZW07XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiA0MHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDM0LjhyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaWNvbnMvdHdpdHRlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaWNvbnMvdHdpdHRlci1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pY29ucy9pbnN0YWdyYW0taG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ljb25zL2ZhY2Vib29rLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pY29ucy9mYWNlYm9vay1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3Rlcl9fY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NWY1NTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICBnYXA6IDEwcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZm9vdGVyX19jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIHBhZGRpbmc6IDEwcmVtIDZyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuZm9vdGVyX19jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDZyZW0gMS42cmVtO1xuICAgIGdhcDogNHJlbTtcbiAgfVxufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5oZWFkaW5nLWxpZ2h0IHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyIC5oZWFkaW5nLWxpZ2h0IHtcbiAgICBmb250LXNpemU6IDQuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICAgIGNvbG9yOiAjZTFkNGM5O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyIC5oZWFkaW5nLWxpZ2h0IHtcbiAgICBmb250LXNpemU6IDMuMTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTI1JTtcbiAgICBjb2xvcjogI2UxZDRjOTtcbiAgfVxufVxuXG4uaGVhZGluZy1saWdodCBzcGFuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogI2IwOTA3YTtcbn1cblxuLmZvb3Rlcl9fY29udGFjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuN3JlbTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3RpdGxlIHtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBjb2xvcjogI2UxZDRjOTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG4uZm9vdGVyX19jb250YWN0c19hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogI2UxZDRjOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uZm9vdGVyX19jb250YWN0c19hZGRyZXNzIGltZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3Bob25lIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogI2UxZDRjOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfcGhvbmUgaW1nIHtcbiAgcGFkZGluZy1yaWdodDogMC44cmVtO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfc2NoZWR1bGUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjZTFkNGM5O1xufVxuLmZvb3Rlcl9fY29udGFjdHNfc2NoZWR1bGUgaW1nIHtcbiAgcGFkZGluZy1yaWdodDogMC44cmVtO1xufVxuXG4uZm9vdGVyX19jb250YWN0c19hZGRyZXNzIGEsXG4uZm9vdGVyX19jb250YWN0c19waG9uZSBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyBhOmFmdGVyLFxuLmZvb3Rlcl9fY29udGFjdHNfcGhvbmUgYTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkNGM5O1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0ycHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5mb290ZXJfX2NvbnRhY3RzX2FkZHJlc3MgYTpob3ZlcjphZnRlcixcbiAgLmZvb3Rlcl9fY29udGFjdHNfcGhvbmUgYTpob3ZlcjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG4uc29jaWFsLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjJyZW07XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xufVxuXG4uc29jaWFsLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NWY1NTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZDVjOTtcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnNvY2lhbC1pY29uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICB9XG59XG4uc29jaWFsLWljb24gc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcbn1cbi5zb2NpYWwtaWNvbl9fdHdpdHRlciB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnNvY2lhbC1pY29uX190d2l0dGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgfVxufVxuLnNvY2lhbC1pY29uX19pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5zb2NpYWwtaWNvbl9faW5zdGFncmFtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgfVxufVxuLnNvY2lhbC1pY29uX19mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnNvY2lhbC1pY29uX19mYWNlYm9vazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0VBO0VBQ0UseUJBcEJnQjtFQXFCaEIsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUEvREY7QUFXRTtFQTRDRjtJQVdJLDBCQUFBO0lBQ0EsbUJBQUE7RUE5REY7QUFDRjtBQWlCRTtFQWdDRjtJQWVJLG9CQUFBO0lBQ0EsU0FBQTtFQTVERjtBQUNGO0FBOERFO0VBbEZBLGVBbUZnQjtFQWxGaEIsZ0JBa0ZzQjtFQWpGdEIsaUJBaUYyQjtFQWhGM0IsY0E4Q2lCO0FBdkJuQjtBQUtFO0VBbURBO0lBbEZBLGlCQXNGa0I7SUFyRmxCLGdCQXFGMEI7SUFwRjFCLGlCQW9GK0I7SUFuRi9CLGNBOENpQjtFQWhCakI7QUFDRjtBQUdFO0VBNkNBO0lBbEZBLGtCQXlGa0I7SUF4RmxCLGdCQXdGMkI7SUF2RjNCLGlCQXVGZ0M7SUF0RmhDLGNBOENpQjtFQVJqQjtBQUNGOztBQW9ERTtFQUNFLGtCQUFBO0VBQ0EsY0E5Q2dCO0FBSHBCOztBQXFEQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFsREY7QUFvREU7RUF6R0EsaUJBMEdnQjtFQXpHaEIsZ0JBeUd3QjtFQXhHeEIsaUJBd0c2QjtFQXZHN0IsY0E4Q2lCO0VBMERmLG9CQUFBO0FBL0NKO0FBaURFO0VBN0dBLGlCQThHZ0I7RUE3R2hCLGdCQTZHd0I7RUE1R3hCLGlCQTRHNkI7RUEzRzdCLGNBOENpQjtFQThEZixrQkFBQTtFQUNBLGVBQUE7QUE1Q0o7QUE4Q0k7RUFDRSxxQkFBQTtBQTVDTjtBQStDRTtFQXRIQSxpQkF1SGdCO0VBdEhoQixnQkFzSHdCO0VBckh4QixpQkFxSDZCO0VBcEg3QixjQThDaUI7RUF1RWYsa0JBQUE7QUExQ0o7QUEyQ0k7RUFDRSxxQkFBQTtBQXpDTjtBQTRDRTtFQTdIQSxpQkE4SGdCO0VBN0hoQixnQkE2SHdCO0VBNUh4QixpQkE0SDZCO0VBM0g3QixjQThDaUI7QUFzQ25CO0FBeUNJO0VBQ0UscUJBQUE7QUF2Q047O0FBNENBOztFQUVFLGtCQUFBO0FBekNGO0FBMENFOztFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBN0ZlO0VBOEZmLE9BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUF2Q0o7QUF5Q0U7RUFDRTs7SUFDRSxtQkFBQTtJQUNBLGdDQUFBO0VBdENKO0FBQ0Y7O0FBMENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF2Q0Y7O0FBeUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkExSGdCO0VBMkhoQix5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQXRDRjtBQXdDRTtFQUNFO0lBQ0UseUJBcElVO0VBOEZkO0FBQ0Y7QUF5Q0U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBdkNKO0FBMENFO0VBQ0Usb0VBQUE7RUFDQSxnQ0FBQTtBQXhDSjtBQXlDSTtFQUNFO0lBQ0Usb0VBQUE7RUF2Q047QUFDRjtBQTJDRTtFQUNFLG9FQUFBO0VBQ0EsZ0NBQUE7QUF6Q0o7QUEwQ0k7RUFDRTtJQUNFLG9FQUFBO0VBeENOO0FBQ0Y7QUE0Q0U7RUFDRSxvRUFBQTtFQUNBLGdDQUFBO0FBMUNKO0FBMkNJO0VBQ0U7SUFDRSxvRUFBQTtFQXpDTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkY29sb3IpIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJXRyYW5zaXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuQG1peGluIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgLy8gMTIyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJGRlc2t0b3Atd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAvLyAxMDI0cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LWxhbmQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAvLyA3NjhweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtcG9ydC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAvLyA3MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtbGFyZ2Utd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUge1xcclxcbiAgLy8gNDIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXG4vLyBCYWNrZ3JvdW5kIENvbG9yXFxyXFxuJGNvbG9yLXByaW1hcnk6ICNlM2Q1Yzk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeTogIzY2NWY1NTtcXHJcXG4kY29sb3ItYmFja2Ryb3A6ICM0MDNmM2RjYztcXHJcXG5cXHJcXG4vLyBUZXh0IENvbG9yXFxyXFxuJGNvbG9yLXRleHQtZGFyazogIzQwM2YzZDtcXHJcXG4kY29sb3ItdGV4dC1saWdodDogI2UxZDRjOTtcXHJcXG4kY29sb3ItdGV4dC1hY2NlbnQ6ICNiMDkwN2E7XFxyXFxuXFxyXFxuLy8gQm9yZGVyIENvbG9yOlxcclxcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNjMWI2YWQ7XFxyXFxuJGNvbG9yLWJvcmRlci1kYXJrOiAjNjY1ZjU1O1xcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuJGRlc2t0b3Atd2lkdGg6IDEyMjBweDtcXHJcXG4kdGFibGV0LWxhbmQtd2lkdGg6IDEwMjRweDtcXHJcXG4kdGFibGV0LXBvcnQtd2lkdGg6IDc2OHB4O1xcclxcbiRtb2JpbGUtbGFyZ2Utd2lkdGg6IDcyMHB4O1xcclxcbiRtb2JpbGUtd2lkdGg6IDQyMHB4O1xcclxcblxcbi5mb290ZXJfX2NvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxyXFxuICBnYXA6IDEwcmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgcGFkZGluZzogMTByZW0gNnJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgIHBhZGRpbmc6IDZyZW0gMS42cmVtO1xcclxcbiAgICBnYXA6IDRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGluZy1saWdodCB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoNnJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgICAgQGluY2x1ZGUgdGV4dCg0LjJyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgICAgQGluY2x1ZGUgdGV4dCgzLjE1cmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4uaGVhZGluZy1saWdodCB7XFxyXFxuICBzcGFuIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLXRleHQtYWNjZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19jb250YWN0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMS43cmVtO1xcclxcblxcclxcbiAgJl90aXRsZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMi40cmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICB9XFxyXFxuICAmX2FkZHJlc3Mge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9waG9uZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9zY2hlZHVsZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyBhLFxcclxcbi5mb290ZXJfX2NvbnRhY3RzX3Bob25lIGEge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgJjphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRleHQtbGlnaHQ7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogLTJweDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgJjpob3ZlcjphZnRlciB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWljb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMS4ycmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDRyZW07XFxyXFxufVxcclxcbi5zb2NpYWwtaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xcclxcbiAgd2lkdGg6IDZyZW07XFxyXFxuICBoZWlnaHQ6IDZyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA2cmVtO1xcclxcbiAgICBoZWlnaHQ6IDZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX190d2l0dGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy90d2l0dGVyLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvdHdpdHRlci1ob3Zlci5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbnN0YWdyYW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2luc3RhZ3JhbS5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2luc3RhZ3JhbS1ob3Zlci5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19mYWNlYm9vayB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvZmFjZWJvb2suc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9mYWNlYm9vay1ob3Zlci5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwcmVtO1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgZ2FwOiAzcmVtO1xuICB9XG59XG5cbi5uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmlzdWFsbHktaGlkZGVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNsaXAtcGF0aDogaW5zZXQoMTAwJSk7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uYXZpZ2F0aW9uX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDY1LjYlO1xufVxuLm5hdmlnYXRpb25fX3dyYXBwZXIub3BlbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5uYXZpZ2F0aW9uX193cmFwcGVyIHtcbiAgICBnYXA6IDNyZW07XG4gICAgbWluLXdpZHRoOiA3OCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2aWdhdGlvbl9fd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDVjOTtcbiAgICBnYXA6IDEwcmVtO1xuICAgIHBhZGRpbmc6IDZyZW0gNHJlbTtcbiAgICB0b3A6IDkuOXJlbTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmlnaHQ6IC0xMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbi5uYXZpZ2F0aW9uX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDRyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5uYXZpZ2F0aW9uX19saXN0IHtcbiAgICBnYXA6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2aWdhdGlvbl9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDZyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4ubmF2aWdhdGlvbl9fbGlzdF9saW5rIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsgYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzZjNkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0ycHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5uYXZpZ2F0aW9uX19saXN0X2xpbmsgYTpob3ZlcjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZpZ2F0aW9uX19saXN0X2xpbmsge1xuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICB9XG59XG5cbi5oZWFkZXJfX21lbnUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xufVxuLmhlYWRlcl9fbWVudSBzcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXJfX21lbnUgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMS42cmVtO1xufVxuLmhlYWRlcl9fbWVudSBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzZjNkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmhlYWRlcl9fbWVudSBhOmhvdmVyOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlcl9fbWVudSB7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIH1cbiAgLmhlYWRlcl9fbWVudSAuaWNvbi1jdXAge1xuICAgIG1pbi1oZWlnaHQ6IDRyZW07XG4gICAgbWluLXdpZHRoOiA0cmVtO1xuICB9XG59XG5cbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsubWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idXJnZXJfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJ1cmdlcl9fY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDQuNnJlbTtcbiAgfVxufVxuLmJ1cmdlcl9fY29udGFpbmVyLm9wZW4gLmJ1cmdlcl9fbGluZTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDQ1ZGVnKTtcbn1cbi5idXJnZXJfX2NvbnRhaW5lci5vcGVuIC5idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNDVkZWcpO1xufVxuLmJ1cmdlcl9fY29udGFpbmVyIC5idXJnZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNC40cmVtO1xuICBoZWlnaHQ6IDQuNHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NWY1NTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmJ1cmdlcl9fY29udGFpbmVyIC5idXJnZXJfX2xpbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMS42cmVtO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzZjNkO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cbi5idXJnZXJfX2NvbnRhaW5lciAuYnVyZ2VyX19saW5lOm50aC1jaGlsZCgxKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC40cmVtKTtcbn1cbi5idXJnZXJfX2NvbnRhaW5lciAuYnVyZ2VyX19saW5lOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjRyZW0pO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dC9IZWFkZXIvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFnRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBL0RGO0FBY0U7RUE0Q0Y7SUFPSSxTQUFBO0VBN0RGO0FBQ0Y7O0FBK0RBO0VBQ0UsZ0JBQUE7QUE1REY7O0FBOERBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBM0RGOztBQThEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUEzREY7QUE0REU7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0FBMURKO0FBbkJFO0VBc0VGO0lBVUksU0FBQTtJQUNBLGNBQUE7RUF6REY7QUFDRjtBQW5CRTtFQWdFRjtJQWNJLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBaEVZO0lBaUVaLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0NBQUE7RUF2REY7QUFDRjs7QUF5REE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBdERGO0FBaERFO0VBbUdGO0lBTUksU0FBQTtFQXJERjtBQUNGO0FBL0NFO0VBNkZGO0lBU0ksc0JBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7RUFuREY7QUFDRjtBQXFERTtFQXBJQSxpQkFxSWdCO0VBcEloQixnQkFvSXdCO0VBbkl4QixpQkFtSTZCO0VBbEk3QixjQTZDZ0I7RUFzRmQsZ0JBQUE7QUFoREo7QUFpREk7RUFDRSxrQkFBQTtBQS9DTjtBQWdETTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBOUZVO0VBK0ZWLE9BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUE5Q1I7QUFnRE07RUFDRTtJQUNFLG1CQUFBO0lBQ0EsZ0NBQUE7RUE5Q1I7QUFDRjtBQWhGRTtFQTJHQTtJQXVCSSxpQkFBQTtJQUNBLGlCQUFBO0VBOUNKO0FBQ0Y7O0FBa0RBO0VBaktFLGlCQWtLYztFQWpLZCxnQkFpS3NCO0VBaEt0QixpQkFnSzJCO0VBL0ozQixjQTZDZ0I7RUFtSGhCLHNCQUFBO0FBNUNGO0FBOENFO0VBQ0UsYUFBQTtBQTVDSjtBQThDRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBNUNKO0FBOENJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBbklZO0VBb0laLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTVDTjtBQThDSTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxnQ0FBQTtFQTVDTjtBQUNGO0FBeEhFO0VBd0lGO0lBaUNJLGlCQUFBO0lBQ0EsaUJBQUE7RUE3Q0Y7RUErQ0U7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RUE3Q0o7QUFDRjs7QUFpREE7RUFDRSxhQUFBO0FBOUNGOztBQWlEQTtFQUNFLGFBQUE7QUE5Q0Y7QUExSUU7RUF1TEY7SUFHSSxjQUFBO0lBQ0EsY0FBQTtFQTVDRjtBQUNGO0FBNkNFO0VBQ0Usc0NBQUE7QUEzQ0o7QUE2Q0U7RUFDRSx1Q0FBQTtBQTNDSjtBQTZDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUEzQ0o7QUE2Q0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBNUxZO0VBNkxaLHNDQUFBO0VBQ0Esc0JBQUE7QUEzQ047QUE2Q007RUFDRSw4QkFBQTtBQTNDUjtBQTZDTTtFQUNFLDZCQUFBO0FBM0NSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkY29sb3IpIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJXRyYW5zaXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuQG1peGluIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgLy8gMTIyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJGRlc2t0b3Atd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAvLyAxMDI0cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LWxhbmQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAvLyA3NjhweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtcG9ydC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAvLyA3MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtbGFyZ2Utd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUge1xcclxcbiAgLy8gNDIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXG4vLyBCYWNrZ3JvdW5kIENvbG9yXFxyXFxuJGNvbG9yLXByaW1hcnk6ICNlM2Q1Yzk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeTogIzY2NWY1NTtcXHJcXG4kY29sb3ItYmFja2Ryb3A6ICM0MDNmM2RjYztcXHJcXG5cXHJcXG4vLyBUZXh0IENvbG9yXFxyXFxuJGNvbG9yLXRleHQtZGFyazogIzQwM2YzZDtcXHJcXG4kY29sb3ItdGV4dC1saWdodDogI2UxZDRjOTtcXHJcXG4kY29sb3ItdGV4dC1hY2NlbnQ6ICNiMDkwN2E7XFxyXFxuXFxyXFxuLy8gQm9yZGVyIENvbG9yOlxcclxcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNjMWI2YWQ7XFxyXFxuJGNvbG9yLWJvcmRlci1kYXJrOiAjNjY1ZjU1O1xcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuJGRlc2t0b3Atd2lkdGg6IDEyMjBweDtcXHJcXG4kdGFibGV0LWxhbmQtd2lkdGg6IDEwMjRweDtcXHJcXG4kdGFibGV0LXBvcnQtd2lkdGg6IDc2OHB4O1xcclxcbiRtb2JpbGUtbGFyZ2Utd2lkdGg6IDcyMHB4O1xcclxcbiRtb2JpbGUtd2lkdGg6IDQyMHB4O1xcclxcblxcbi5oZWFkZXJfX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTByZW07XFxyXFxuICBwYWRkaW5nOiAycmVtIDA7XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm5vLXNjcm9sbCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4udmlzdWFsbHktaGlkZGVuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxcHg7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIG1hcmdpbjogLTFweDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgY2xpcC1wYXRoOiBpbnNldCgxMDAlKTtcXHJcXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9fd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1pbi13aWR0aDogNjUuNiU7XFxyXFxuICAmLm9wZW4ge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIG1pbi13aWR0aDogNzglO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICAgIGdhcDogMTByZW07XFxyXFxuICAgIHBhZGRpbmc6IDZyZW0gNHJlbTtcXHJcXG4gICAgdG9wOiA5LjlyZW07XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICByaWdodDogLTEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubmF2aWdhdGlvbl9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiA0cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9saW5rIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGEge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10ZXh0LWRhcms7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAtMnB4O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAgICAgJjpob3ZlcjphZnRlciB7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgICAgZm9udC1zaXplOiAzLjJyZW07XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEyNSU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fbWVudSB7XFxyXFxuICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxyXFxuXFxyXFxuICBzcGFuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIGEge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEuNnJlbTtcXHJcXG5cXHJcXG4gICAgJjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRleHQtZGFyaztcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICBib3R0b206IC0ycHg7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICAgJjpob3ZlcjphZnRlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTI1JTtcXHJcXG5cXHJcXG4gICAgLmljb24tY3VwIHtcXHJcXG4gICAgICBtaW4taGVpZ2h0OiA0cmVtO1xcclxcbiAgICAgIG1pbi13aWR0aDogNHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9fbGlzdF9saW5rLm1lbnUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlcl9fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDQuNnJlbTtcXHJcXG4gIH1cXHJcXG4gICYub3BlbiAuYnVyZ2VyX19saW5lOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoNDVkZWcpO1xcclxcbiAgfVxcclxcbiAgJi5vcGVuIC5idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgfVxcclxcbiAgLmJ1cmdlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA0LjRyZW07XFxyXFxuICAgIGhlaWdodDogNC40cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWRhcms7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHJcXG4gICAgJl9fbGluZSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHdpZHRoOiAxLjZyZW07XFxyXFxuICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10ZXh0LWRhcms7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXHJcXG5cXHJcXG4gICAgICAmOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNHJlbSk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjRyZW0pO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy92aWRlby92aWRlby1fMjE2MHBfLndlYm1cIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9jb2ZmZWUtY3VwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBjb2RlID0gXCI8c2VjdGlvbiBjbGFzcz1cXFwic2VjdGlvblxcXCI+IDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX2hlcm9cXFwiPiA8ZGl2IGNsYXNzPVxcXCJiZy12aWRlb1xcXCI+IDx2aWRlbyBjbGFzcz1cXFwiYmctdmlkZW9fX2NvbnRlbnRcXFwiIGF1dG9wbGF5IG11dGVkIGxvb3A+IDxzb3VyY2Ugc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIvPiBZb3VyIGJyb3dzZXIgaXMgbm90IHN1cHBvcnRlZCEgPC92aWRlbz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX2hlcm9fY29udGVudFxcXCI+IDxoMiBjbGFzcz1cXFwiaGVhZGluZy1saWdodFxcXCI+IDxzcGFuPkVuam95PC9zcGFuPiBwcmVtaXVtIGNvZmZlZSBhdCBvdXIgY2hhcm1pbmcgY2FmZSA8L2gyPiA8cCBjbGFzcz1cXFwic2VjdGlvbl9faGVyb190ZXh0XFxcIj4gV2l0aCBpdHMgaW52aXRpbmcgYXRtb3NwaGVyZSBhbmQgZGVsaWNpb3VzIGNvZmZlZSBvcHRpb25zLCB0aGUgQ29mZmVlIEhvdXNlIFJlc291cmNlIGlzIGEgcG9wdWxhciBkZXN0aW5hdGlvbiBmb3IgY29mZmVlIGxvdmVycyBhbmQgdGhvc2Ugc2Vla2luZyBhIHdhcm0gYW5kIGludml0aW5nIHNwYWNlIHRvIGVuam95IHRoZWlyIGZhdm9yaXRlIGJldmVyYWdlLiA8L3A+IDxhIGNsYXNzPVxcXCJidXR0b24gbWVudS1idXR0b25cXFwiIGhyZWY9XFxcIi4vbWVudS5odG1sXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJ1dHRvbi10ZXh0XFxcIj5NZW51PC9zcGFuPiA8aW1nIGNsYXNzPVxcXCJidXR0b24taW1hZ2VcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwiY29mZmVlIGN1cCBpY29uXFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIi8+IDwvYT4gPC9kaXY+IDwvZGl2PiA8L3NlY3Rpb24+IFwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29mZmVlLXNsaWRlci0xLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb2ZmZWUtc2xpZGVyLTIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvZmZlZS1zbGlkZXItMy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIGNvZGUgPSBcIjxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uXFxcIiBpZD1cXFwiZmF2b3JpdGVcXFwiPiA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX19mYXZvcml0ZVxcXCI+IDxoMyBjbGFzcz1cXFwiaGVhZGluZy1kYXJrXFxcIj5DaG9vc2UgeW91ciA8c3Bhbj5mYXZvcml0ZTwvc3Bhbj4gY29mZmVlPC9oMz4gPGRpdiBjbGFzcz1cXFwic2xpZGVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwic2xpZGVyX19hcnJvdyBzbGlkZXJfX2Fycm93X2xlZnRcXFwiPiA8c3BhbiBjbGFzcz1cXFwic2xpZGVyX19hcnJvd19sZWZ0LWljb25cXFwiPjwvc3Bhbj4gPC9idXR0b24+IDxkaXYgY2xhc3M9XFxcInNsaWRlcl9fY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwic2xpZGVyX19saW5lXFxcIj4gPGRpdiBjbGFzcz1cXFwic2xpZGVyX19saW5lX2NhcmRcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwicGhvdG8gb2YgYSBnbGFzcyB3aXRoIGljZWQgY29mZmVlXFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIi8+IDxoNCBjbGFzcz1cXFwic2xpZGVyX19saW5lX2NhcmQtdGl0bGVcXFwiPlPigJltb3JlcyBGcmFwcHVjY2lubzwvaDQ+IDxwIGNsYXNzPVxcXCJzbGlkZXJfX2xpbmVfY2FyZC10ZXh0XFxcIj4gVGhpcyBuZXcgZHJpbmsgdGFrZXMgYW4gZXNwcmVzc28gYW5kIG1peGVzIGl0IHdpdGggYnJvd24gc3VnYXIgYW5kIGNpbm5hbW9uIGJlZm9yZSBiZWluZyB0b3BwZWQgd2l0aCBvYXQgbWlsay4gPC9wPiA8cCBjbGFzcz1cXFwic2xpZGVyX19saW5lX2NhcmQtcHJpY2VcXFwiPiQ1LjUwPC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwic2xpZGVyX19saW5lX2NhcmRcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwicGhvdG8gb2YgYSBnbGFzcyB3aXRoIGljZWQgY29mZmVlXFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIi8+IDxoNCBjbGFzcz1cXFwic2xpZGVyX19saW5lX2NhcmQtdGl0bGVcXFwiPkNhcmFtZWwgTWFjY2hpYXRvPC9oND4gPHAgY2xhc3M9XFxcInNsaWRlcl9fbGluZV9jYXJkLXRleHRcXFwiPiBGcmFncmFudCBhbmQgdW5pcXVlIGNsYXNzaWMgZXNwcmVzc28gd2l0aCByaWNoIGNhcmFtZWwtcGVhbnV0IHN5cnVwLCB3aXRoIGNyZWFtIHVuZGVyIHdoaXBwZWQgdGhpY2sgZm9hbS4gPC9wPiA8cCBjbGFzcz1cXFwic2xpZGVyX19saW5lX2NhcmQtcHJpY2VcXFwiPiQ1LjAwPC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwic2xpZGVyX19saW5lX2NhcmRcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwicGhvdG8gb2YgYSBnbGFzcyB3aXRoIGljZWQgY29mZmVlXFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIi8+IDxoNCBjbGFzcz1cXFwic2xpZGVyX19saW5lX2NhcmQtdGl0bGVcXFwiPkljZSBjb2ZmZWU8L2g0PiA8cCBjbGFzcz1cXFwic2xpZGVyX19saW5lX2NhcmQtdGV4dFxcXCI+IEEgcG9wdWxhciBzdW1tZXIgZHJpbmsgdGhhdCB0b25lcyBhbmQgaW52aWdvcmF0ZXMuIFByZXBhcmVkIGZyb20gY29mZmVlLCBtaWxrIGFuZCBpY2UuIDwvcD4gPHAgY2xhc3M9XFxcInNsaWRlcl9fbGluZV9jYXJkLXByaWNlXFxcIj4kNC41MDwvcD4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPGJ1dHRvbiBjbGFzcz1cXFwic2xpZGVyX19hcnJvdyBzbGlkZXJfX2Fycm93X3JpZ2h0XFxcIj4gPHNwYW4gY2xhc3M9XFxcInNsaWRlcl9fYXJyb3dfcmlnaHQtaWNvblxcXCI+PC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInNsaWRlcl9fcHJvZ3Jlc3NcXFwiPiA8ZGl2IGNsYXNzPVxcXCJzbGlkZXJfX3Byb2dyZXNzLWJhclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJzbGlkZXJfX3Byb2dyZXNzLWJhcl9saW5lXFxcIj48L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJzbGlkZXJfX3Byb2dyZXNzLWJhclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJzbGlkZXJfX3Byb2dyZXNzLWJhcl9saW5lXFxcIj48L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJzbGlkZXJfX3Byb2dyZXNzLWJhclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJzbGlkZXJfX3Byb2dyZXNzLWJhcl9saW5lXFxcIj48L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvc2VjdGlvbj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC0xLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC0yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC0zLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC00LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18pO1xudmFyIGNvZGUgPSBcIjxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uXFxcIiBpZD1cXFwiYWJvdXRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX19hYm91dFxcXCI+IDxoMyBjbGFzcz1cXFwiaGVhZGluZy1kYXJrXFxcIj4gUmVzb3VyY2UgaXMgPHNwYW4+dGhlIHBlcmZlY3QgYW5kIGNvenkgcGxhY2U8L3NwYW4+IHdoZXJlIHlvdSBjYW4gZW5qb3kgYSB2YXJpZXR5IG9mIGhvdCBiZXZlcmFnZXMsIHJlbGF4LCBjYXRjaCB1cCB3aXRoIGZyaWVuZHMsIG9yIGdldCBzb21lIHdvcmsgZG9uZS4gPC9oMz4gPGRpdiBjbGFzcz1cXFwiaW1hZ2VzX193cmFwcGVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiaW1hZ2VfX2NvbnRhaW5lciBpbWFnZS1sYXJnZSBpbWFnZS0xXFxcIj4gPGltZyBjbGFzcz1cXFwiaW1nLTFcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwiYSBzbWlsaW5nIHlvdW5nIHdvbWFuIGlzIHNpdHRpbmcgYXQgYSB0YWJsZSB3aXRoIGEgY3VwIG9mIGNvZmZlZVxcXCIgZHJhZ2dhYmxlPVxcXCJmYWxzZVxcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiaW1hZ2VfX2NvbnRhaW5lciBpbWFnZS1zbWFsbCBpbWFnZS0yXFxcIj4gPGltZyBjbGFzcz1cXFwiaW1nLTJcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwiYSBjdXAgb2YgY29mZmVlIG9uIGEgdGFibGUgd2l0aCBjaHJpc3RtYXMgbGlnaHRzIG9uIHRoZSBiYWNrZ3JvdW5kXFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJpbWFnZV9fY29udGFpbmVyIGltYWdlLXNtYWxsIGltYWdlLTNcXFwiPiA8aW1nIGNsYXNzPVxcXCJpbWctM1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJhIHlvdW5nIG1hbiB3aXRoIGEgY3VwIG9mIGNvZmZlZSBpbiBhIGNhZmUgbG9va2luZyBhdCB0aGUgc2NyZWVuIG9mIGhpcyBsYXB0b3BcXFwiIGRyYWdnYWJsZT1cXFwiZmFsc2VcXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImltYWdlX19jb250YWluZXIgaW1hZ2UtbGFyZ2UgaW1hZ2UtNFxcXCI+IDxpbWcgY2xhc3M9XFxcImltZy00XFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIiBhbHQ9XFxcImEgeW91bmcgY291cGxlIHdpdGggY29mZmVlcyBpbiB0aGVpciBoYW5kcyBzaXR0aW5nIGF0IGEgdGFibGUgYW5kIHNtaWxpbmcgZHJlYW1pbHlcXFwiIGRyYWdnYWJsZT1cXFwiZmFsc2VcXFwiLz4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9zZWN0aW9uPiBcIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL21vYmlsZS1zY3JlZW5zLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uXFxcIiBpZD1cXFwiYXBwXFxcIj4gPGRpdiBjbGFzcz1cXFwic2VjdGlvbl9fYXBwXFxcIj4gPGRpdiBjbGFzcz1cXFwiYXBwX19jb2x1bW4tMVxcXCI+IDxoMyBjbGFzcz1cXFwiaGVhZGluZy1kYXJrXFxcIj4gPHNwYW4+RG93bmxvYWQ8L3NwYW4+IG91ciBhcHBzIHRvIHN0YXJ0IG9yZGVyaW5nIDwvaDM+IDxwIGNsYXNzPVxcXCJhcHBfX2NvbHVtbi0xX3RleHRcXFwiPiBEb3dubG9hZCB0aGUgUmVzb3VyY2UgYXBwIHRvZGF5IGFuZCBleHBlcmllbmNlIHRoZSBjb21mb3J0IG9mIG9yZGVyaW5nIHlvdXIgZmF2b3JpdGUgY29mZmVlIGZyb20gd2hlcmV2ZXIgeW91IGFyZSA8L3A+IDxkaXYgY2xhc3M9XFxcImFwcF9fYnV0dG9uc1xcXCI+IDxidXR0b24gY2xhc3M9XFxcImFwcF9fYnV0dG9uXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJ1dHRvbl9faWNvbiBidXR0b25fX2ljb25faW9zXFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImJ1dHRvbl9fdGV4dF9zbWFsbFxcXCI+QXZhaWxhYmxlIG9uIHRoZTxzcGFuIGNsYXNzPVxcXCJidXR0b25fX3RleHRfbGFyZ2VcXFwiPkFwcCBTdG9yZTwvc3Bhbj48L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJhcHBfX2J1dHRvblxcXCI+IDxzcGFuIGNsYXNzPVxcXCJidXR0b25fX2ljb24gYnV0dG9uX19pY29uX2FuZHJvaWRcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiYnV0dG9uX190ZXh0X3NtYWxsXFxcIj5BdmFpbGFibGUgb248c3BhbiBjbGFzcz1cXFwiYnV0dG9uX190ZXh0X2xhcmdlXFxcIj5Hb29nbGUgUGxheTwvc3Bhbj48L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFwcF9fY29sdW1uLTJcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwicGhvdG8gb2YgdHdvIG1vYmlsZSBwaG9uZXMgd2l0aCBjb2ZmZWUgc2hvcCBhcHAgb24gdGhlIHNjcmVlbnNcXFwiIGRyYWdnYWJsZT1cXFwiZmFsc2VcXFwiLz4gPC9kaXY+IDwvZGl2PiA8L3NlY3Rpb24+IFwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9waW4tYWx0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL3Bob25lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL2Nsb2NrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19jb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbHVtblxcXCI+IDxoMyBjbGFzcz1cXFwiaGVhZGluZy1saWdodFxcXCI+IFNpcCwgU2F2b3IsIFNtaWxlLiA8c3Bhbj5JdCdzIGNvZmZlZSB0aW1lITwvc3Bhbj4gPC9oMz4gPGRpdiBjbGFzcz1cXFwic29jaWFsLWljb25zXFxcIj4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcInNvY2lhbC1pY29uXFxcIj48c3BhbiBjbGFzcz1cXFwic29jaWFsLWljb25fX3R3aXR0ZXJcXFwiPjwvc3Bhbj48L2E+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJzb2NpYWwtaWNvblxcXCI+PHNwYW4gY2xhc3M9XFxcInNvY2lhbC1pY29uX19pbnN0YWdyYW1cXFwiPjwvc3Bhbj48L2E+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJzb2NpYWwtaWNvblxcXCI+PHNwYW4gY2xhc3M9XFxcInNvY2lhbC1pY29uX19mYWNlYm9va1xcXCI+PC9zcGFuPjwvYT4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbHVtblxcXCI+IDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNcXFwiIGlkPVxcXCJjb250YWN0c1xcXCI+IDxwIGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhY3RzX3RpdGxlXFxcIj5Db250YWN0IHVzPC9wPiA8cCBjbGFzcz1cXFwiZm9vdGVyX19jb250YWN0c19hZGRyZXNzXFxcIj4gPGEgaHJlZj1cXFwiaHR0cHM6Ly9tYXBzLmFwcC5nb28uZ2wvUkphcFkyUVY5WjFBWmppbThcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj4gPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcInBpbiBpY29uXFxcIi8+ODU1OCBHcmVlbiBSZC4sIExBPC9hPiA8L3A+IDxwIGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhY3RzX3Bob25lXFxcIj4gPGEgaHJlZj1cXFwidGVsOisxKDYwMyk1NTUtMDEyM1xcXCI+PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcInBob25lIGljb25cXFwiLz4rMSAoNjAzKSA1NTUtMDEyMzwvYT4gPC9wPiA8cCBjbGFzcz1cXFwiZm9vdGVyX19jb250YWN0c19zY2hlZHVsZVxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJjbG9jayBpY29uXFxcIi8+TW9uLVNhdDogOTowMCBBTSDigJMgMjM6MDAgUE0gPC9wPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvY29mZmVlLWN1cC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiaGVhZGVyX19jb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJsb2dvXFxcIj4gPGEgaHJlZj1cXFwiLi9pbmRleC5odG1sXFxcIj4gPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcImxvZ29cXFwiIGRyYWdnYWJsZT1cXFwiZmFsc2VcXFwiLz4gPGgxIGNsYXNzPVxcXCJ2aXN1YWxseS1oaWRkZW5cXFwiPiBSZXNvdXJzZSAtIHRoZSBiZXN0IGNvZmZlZSBob3VzZSBpbiB5b3VyIGFyZWEgPC9oMT48L2E+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJuYXZpZ2F0aW9uX193cmFwcGVyXFxcIj4gPG5hdiBjbGFzcz1cXFwiaGVhZGVyX19uYXZpZ2F0aW9uXFxcIj4gPHVsIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0XFxcIj4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmsgaG9tZVxcXCI+IDxhIGhyZWY9XFxcIiNmYXZvcml0ZVxcXCI+RmF2b3JpdGUgY29mZmVlPC9hPiA8L2xpPiA8bGkgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2xpc3RfbGluayBtZW51XFxcIj4gPGEgaHJlZj1cXFwiLi8jZmF2b3JpdGVcXFwiPkZhdm9yaXRlIGNvZmZlZTwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmsgaG9tZVxcXCI+IDxhIGhyZWY9XFxcIiNhYm91dFxcXCI+QWJvdXQ8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rIG1lbnVcXFwiPiA8YSBocmVmPVxcXCIuLyNhYm91dFxcXCI+QWJvdXQ8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rIGhvbWVcXFwiPiA8YSBocmVmPVxcXCIjYXBwXFxcIj5Nb2JpbGUgYXBwPC9hPiA8L2xpPiA8bGkgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2xpc3RfbGluayBtZW51XFxcIj4gPGEgaHJlZj1cXFwiLi8jYXBwXFxcIj5Nb2JpbGUgYXBwPC9hPiA8L2xpPiA8bGkgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2xpc3RfbGlua1xcXCI+IDxhIGhyZWY9XFxcIiNjb250YWN0c1xcXCI+Q29udGFjdCB1czwvYT4gPC9saT4gPC91bD4gPC9uYXY+IDxkaXYgY2xhc3M9XFxcImhlYWRlcl9fbWVudVxcXCI+IDxzcGFuPk1lbnUgPGltZyBjbGFzcz1cXFwiaWNvbi1jdXBcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwiY29mZmVlIGN1cCBpY29uXFxcIi8+PC9zcGFuPiA8YSBocmVmPVxcXCIuL21lbnUuaHRtbFxcXCI+PHA+TWVudTwvcD4gPGltZyBjbGFzcz1cXFwiaWNvbi1jdXBcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwiY29mZmVlIGN1cCBpY29uXFxcIi8+IDwvYT4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJidXJnZXJfX2NvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcImJ1cmdlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJidXJnZXJfX2xpbmVcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImJ1cmdlcl9fbGluZVxcXCI+PC9zcGFuPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2xheW91dC9IZWFkZXJcIjtcclxuaW1wb3J0IGhlcm8gZnJvbSBcIi4vbGF5b3V0L0NvbnRlbnQvMDFfaGVyb1wiO1xyXG5pbXBvcnQgZmF2b3JpdGUgZnJvbSBcIi4vbGF5b3V0L0NvbnRlbnQvMDJfZmF2b3JpdGVcIjtcclxuaW1wb3J0IGFib3V0IGZyb20gXCIuL2xheW91dC9Db250ZW50LzAzX2Fib3V0XCI7XHJcbmltcG9ydCBhcHAgZnJvbSBcIi4vbGF5b3V0L0NvbnRlbnQvMDRfYXBwXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vbGF5b3V0L0Zvb3RlclwiO1xyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xyXG5cclxuaGVhZGVyLmFwcGVuZChIZWFkZXIpO1xyXG5tYWluLmFwcGVuZChoZXJvKTtcclxubWFpbi5hcHBlbmQoZmF2b3JpdGUpO1xyXG5tYWluLmFwcGVuZChhYm91dCk7XHJcbm1haW4uYXBwZW5kKGFwcCk7XHJcbmZvb3Rlci5hcHBlbmQoRm9vdGVyKTtcclxuXHJcbmNvbnNvbGUubG9nKFxyXG4gIGDQn9GA0LjQstC10YIhINCY0LfQstC40L3QuCwg0LXRidGRINC+0YHRgtCw0LvQvtGB0Ywg0LTQvtGA0LDQsdC+0YLQsNGC0Ywg0YTRg9C90LrRhtC40L7QvdCw0LsgbG9hZCBtb3JlINC4INGG0LXQvSDQsiDQvNC+0LTQsNC70LrQsNGFLiDQldGB0LvQuCDQtdGB0YLRjCDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINC/0L7QtNC+0LbQtNCw0YLRjCDRgSDQv9GA0L7QstC10YDQutC+0LksINCx0YPQtNGDINC+0YfQtdC90Ywg0LHQu9Cw0LPQvtC00LDRgNC90LAuINCh0L/QsNGB0LjQsdC+IWBcclxuKTtcclxuY29uc29sZS5sb2coYDEuIEJ1cmdlcjogKzIyO1xyXG4yLiBDYXJvdXNlbDogKzI0O1xyXG4zLiBDYXRlZ29yaWVzIG9mIHByb2R1Y3RzOiArNjtcclxuICArIFdoZW4gc3dpdGNoaW5nIGNhdGVnb3JpZXMsIHRoZSBwcm9kdWN0cyBvZiB0aGUgc2VsZWN0ZWQgY2F0ZWdvcnkgYXJlIGRpc3BsYXllZDogKzI7XHJcbiAgKyBGb3Igc2NyZWVucyB3aXRoIGEgd2lkdGggb2YgNzY4cHggb3IgbGVzcywgd2hlbiBvcGVuaW5nL3JlbG9hZGluZyB0aGUgcGFnZSBvciBzd2l0Y2hpbmcgY2F0ZWdvcmllcywgb25seSA0IHByb2R1Y3RzIGFyZSBkaXNwbGF5ZWQuIElmIHRoZXJlIGFyZSBtb3JlIHRoYW4gNCBwcm9kdWN0cyBpbiB0aGUgZGlzcGxheWVkIGNhdGVnb3J5LCBhIExvYWQgTW9yZSBidXR0b24gaXMgZGlzcGxheWVkIGJlbG93OiArNDtcclxuNC4gTW9kYWw6ICsxMjtcclxuICArIFRoZSBNb2RhbCB3aXRoIHRoZSBkZXNjcmlwdGlvbiBvZiBhIHNwZWNpZmljIHByb2R1Y3Qgb3BlbnMgd2hlbiBjbGlja2luZyBvbiBhbnkgcGFydCBvZiBhIGNhcmQgb2YgcHJvZHVjdDogKzJcclxuICArIFRoZSBwYXJ0IG9mIHRoZSBwYWdlIG91dHNpZGUgdGhlIE1vZGFsIGlzIGRhcmtlbmVkOiArMlxyXG4gICsgV2hlbiB0aGUgTW9kYWwgaXMgb3BlbiwgdGhlIHZlcnRpY2FsIHNjcm9sbCBvZiB0aGUgcGFnZSBiZWNvbWVzIGluYWN0aXZlOyB3aGVuIGNsb3NlZCwgaXQgYmVjb21lcyBhY3RpdmUgYWdhaW46ICsyXHJcbiAgKyBDbGlja2luZyBvbiB0aGUgYXJlYSBhcm91bmQgdGhlIE1vZGFsIGFuZCBDbG9zZSBidXR0b24gY2xvc2VzIGl0OiArMlxyXG4gICsgVGhlIE1vZGFsIGlzIGNlbnRlcmVkIG9uIGJvdGggYXhlcywgc2l6ZXMgb2YgbW9kYWwgZWxlbWVudHMgYW5kIHRoZWlyIGxheW91dCBtYXRjaCB0aGUgZGVzaWduOiArMlxyXG4gICsgQWZ0ZXIgdGhlIE1vZGFsIGlzIG9wZW5lZCwgdGhlICdTaXplJyBvcHRpb24gJ1MnIGlzIHNlbGVjdGVkLCBhbmQgbm8gb3B0aW9uIGluIHRoZSAnQWRkaXRpdmVzJyBzZWN0aW9uIGlzIHNlbGVjdGVkLiBUaGUgcHJvZHVjdCdzIGZpbmFsIHByaWNlIGlzIHRoZSBzYW1lIGFzIGluIHRoZSBjYXJkOiArMlxyXG41LiBWaWRlbzogKzg7XHJcblxyXG5Ub3RhbDogNzJgKTtcclxuIiwiaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2h0bWxUb0VsZW1lbnRcIjtcclxuaW1wb3J0IGhlcm8gZnJvbSBcIi4vaW5kZXguaHRtbFwiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5jb25zdCBjb250ZW50ID0gaHRtbFRvRWxlbWVudChoZXJvKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQ7XHJcbiIsImltcG9ydCBodG1sVG9FbGVtZW50IGZyb20gXCIuLi8uLi8uLi91dGlscy9odG1sVG9FbGVtZW50XCI7XHJcbmltcG9ydCBmYXZvcml0ZSBmcm9tIFwiLi9pbmRleC5odG1sXCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBodG1sVG9FbGVtZW50KGZhdm9yaXRlKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCBzbGlkZXJMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX2xpbmVcIik7XHJcbiAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXJfX2xpbmVfY2FyZFwiKTtcclxuICBjb25zdCBhcnJvd0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fYXJyb3dfbGVmdFwiKTtcclxuICBjb25zdCBhcnJvd1JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX2Fycm93X3JpZ2h0XCIpO1xyXG4gIGNvbnN0IHByb2dyZXNzQmFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyX19wcm9ncmVzcy1iYXJfbGluZVwiKTtcclxuXHJcbiAgbGV0IHNsaWRlSW5kZXggPSAwO1xyXG4gIGxldCB3aWR0aDtcclxuICBsZXQgcHJvZ3Jlc3NCYXJJbmRleCA9IDA7XHJcbiAgbGV0IHgxID0gbnVsbDtcclxuXHJcbiAgcHJvZ3Jlc3NCYXJzW3NsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICB3aWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX19jb250YWluZXJcIikub2Zmc2V0V2lkdGg7XHJcbiAgICBzbGlkZXJMaW5lLnN0eWxlLndpZHRoID0gd2lkdGggKiBzbGlkZXMubGVuZ3RoICsgXCJweFwiO1xyXG4gICAgc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XHJcbiAgICAgIHNsaWRlLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcbiAgICAgIHNsaWRlLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgfSk7XHJcbiAgICByb2xsU2xpZGVyKCk7XHJcbiAgfVxyXG4gIGluaXQoKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBpbml0KTtcclxuXHJcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgc2xpZGVJbmRleCsrO1xyXG4gICAgcHJvZ3Jlc3NCYXJJbmRleCsrO1xyXG4gICAgaWYgKHNsaWRlSW5kZXggPj0gc2xpZGVzLmxlbmd0aCkge1xyXG4gICAgICBzbGlkZUluZGV4ID0gMDtcclxuICAgICAgcHJvZ3Jlc3NCYXJJbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgICByb2xsU2xpZGVyKCk7XHJcbiAgICB0aGlzU2xpZGUocHJvZ3Jlc3NCYXJJbmRleCk7XHJcbiAgfTtcclxuICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBzbGlkZUluZGV4LS07XHJcbiAgICBwcm9ncmVzc0JhckluZGV4LS07XHJcbiAgICBpZiAoc2xpZGVJbmRleCA8IDApIHtcclxuICAgICAgc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGggLSAxO1xyXG4gICAgICBwcm9ncmVzc0JhckluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbiAgICByb2xsU2xpZGVyKCk7XHJcbiAgICB0aGlzU2xpZGUocHJvZ3Jlc3NCYXJJbmRleCk7XHJcbiAgfTtcclxuICBhcnJvd1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXh0U2xpZGUpO1xyXG4gIGFycm93TGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJldlNsaWRlKTtcclxuICBmdW5jdGlvbiByb2xsU2xpZGVyKCkge1xyXG4gICAgc2xpZGVyTGluZS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtXCIgKyBzbGlkZUluZGV4ICogd2lkdGggKyBcInB4KVwiO1xyXG4gIH1cclxuICBwcm9ncmVzc0JhcnMuZm9yRWFjaCgocHJvZ3Jlc3NCYXIsIGluZGV4KSA9PiB7XHJcbiAgICBwcm9ncmVzc0Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBzbGlkZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHNsaWRlckxpbmUuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLVwiICsgc2xpZGVJbmRleCAqIHdpZHRoICsgXCJweClcIjtcclxuICAgICAgcHJvZ3Jlc3NCYXJJbmRleCA9IGluZGV4O1xyXG4gICAgICB0aGlzU2xpZGUocHJvZ3Jlc3NCYXJJbmRleCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBjb25zdCB0aGlzU2xpZGUgPSAoaW5kZXgpID0+IHtcclxuICAgIGZvciAobGV0IHByb2dyZXNzQmFyIG9mIHByb2dyZXNzQmFycykge1xyXG4gICAgICBwcm9ncmVzc0Jhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJvZ3Jlc3NCYXJzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH07XHJcblxyXG4gIHByb2dyZXNzQmFycy5mb3JFYWNoKChwcm9ncmVzc0JhcikgPT4ge1xyXG4gICAgcHJvZ3Jlc3NCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgIG5leHRTbGlkZSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgc2xpZGVyTGluZS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJjb250ZXh0bWVudVwiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlQW5pbWF0aW9uKCkge1xyXG4gICAgbGV0IHByb2dyZXNzQmFyID0gcHJvZ3Jlc3NCYXJzW3NsaWRlSW5kZXhdO1xyXG4gICAgcHJvZ3Jlc3NCYXIuY2xhc3NMaXN0LnRvZ2dsZShcInBhdXNlZFwiKTtcclxuICB9XHJcblxyXG4gIHNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xyXG4gICAgc2xpZGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICB0b2dnbGVBbmltYXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xyXG4gICAgc2xpZGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICB0b2dnbGVBbmltYXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xyXG4gICAgc2xpZGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKCkgPT4ge1xyXG4gICAgICB0b2dnbGVBbmltYXRpb24oKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xyXG4gICAgc2xpZGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsICgpID0+IHtcclxuICAgICAgdG9nZ2xlQW5pbWF0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgc2xpZGVyTGluZS5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIG5leHRTbGlkZSk7XHJcblxyXG4gIC8vIFRvdWNoIGV2ZW50c1xyXG4gIHNsaWRlckxpbmUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaGFuZGxlVG91Y2hTdGFydCwgZmFsc2UpO1xyXG4gIHNsaWRlckxpbmUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVUb3VjaE1vdmUsIGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldmVudCkge1xyXG4gICAgeDEgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZXZlbnQpIHtcclxuICAgIGlmICgheDEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IHgyID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgaWYgKHgyIC0geDEgPiAwKSB7XHJcbiAgICAgIHByZXZTbGlkZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV4dFNsaWRlKCk7XHJcbiAgICB9XHJcbiAgICB4MSA9IG51bGw7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQ7XHJcbiIsImltcG9ydCBodG1sVG9FbGVtZW50IGZyb20gXCIuLi8uLi8uLi91dGlscy9odG1sVG9FbGVtZW50XCI7XHJcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9pbmRleC5odG1sXCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBodG1sVG9FbGVtZW50KGFib3V0KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQ7XHJcbiIsImltcG9ydCBodG1sVG9FbGVtZW50IGZyb20gXCIuLi8uLi8uLi91dGlscy9odG1sVG9FbGVtZW50XCI7XHJcbmltcG9ydCBhcHAgZnJvbSBcIi4vaW5kZXguaHRtbFwiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5jb25zdCBjb250ZW50ID0gaHRtbFRvRWxlbWVudChhcHApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGVudDtcclxuIiwiaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSBcIi4uLy4uL3V0aWxzL2h0bWxUb0VsZW1lbnRcIjtcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vaW5kZXguaHRtbFwiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5jb25zdCBmb290ZXIgPSBodG1sVG9FbGVtZW50KEZvb3Rlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XHJcbiIsImltcG9ydCBodG1sVG9FbGVtZW50IGZyb20gXCIuLi8uLi91dGlscy9odG1sVG9FbGVtZW50XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaW5kZXguaHRtbFwiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBodG1sVG9FbGVtZW50KEhlYWRlcik7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgLy8gQnVyZ2VyXHJcbiAgY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJfX2NvbnRhaW5lclwiKTtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX193cmFwcGVyXCIpO1xyXG4gIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19saXN0X2xpbmtcIik7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuICBidXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJuby1zY3JvbGxcIik7XHJcbiAgfSk7XHJcblxyXG4gIG5hdkxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG5cclxuICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tc2Nyb2xsXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaHRtbFN0cmluZykge1xyXG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xyXG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XHJcbiAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5zY3NzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9