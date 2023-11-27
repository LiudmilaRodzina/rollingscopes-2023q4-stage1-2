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
  background-color: #e1d4c9;
}

.wrapper {
  width: 144rem;
  padding: 0 4rem 4rem 4rem;
  margin: 0 auto;
  background-color: #e1d4c9;
}

a {
  transition: all 0.5s ease-in-out;
}

a:hover,
a:active {
  transition: all 0.5s ease-in-out;
}

a:link,
a:visited {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
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
  background-color: #e1d4c9;
  border-radius: 10rem;
}

.button-text {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #403f3d;
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AA2BA;;;EAGE,SAAA;EACA,UAAA;EACA,mBAAA;AAzBF;;AA2BA;EACE,gBAAA;EACA,uBAAA;AAxBF;;AA0BA;EACE,gCAAA;EACA,sBAAA;EACA,yBA7Bc;AAMhB;;AA0BA;EACE,aAAA;EACA,yBAAA;EACA,cAAA;EACA,yBApCc;AAahB;;AA0BA;EACE,gCAAA;AAvBF;;AAyBA;;EAEE,gCAAA;AAtBF;;AAyBA;;EAEE,qBAAA;EACA,cAAA;EACA,eAAA;EACA,gCAAA;AAtBF;;AAyBA;EACE,YAAA;EACA,eAAA;AAtBF;;AAwBA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,yBAnEc;EAoEd,oBAAA;AArBF;;AAwBA;EAlFE,iBAmFc;EAlFd,gBAkFsB;EAjFtB,iBAiF2B;EAhF3B,cAagB;AAiDlB","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\n// Background Color\r\n$color-primary: #e1d4c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #b0907a;\r\n$color-border-dark: #665f55;\r\n\n@import url(\"https://fonts.cdnfonts.com/css/inter\");\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\nhtml {\r\n  font-size: 62.5%;\r\n  scroll-behavior: smooth;\r\n}\r\nbody {\r\n  font-family: \"Inter\", sans-serif;\r\n  box-sizing: border-box;\r\n  background-color: $color-primary;\r\n}\r\n\r\n.wrapper {\r\n  width: 144rem;\r\n  padding: 0 4rem 4rem 4rem;\r\n  margin: 0 auto;\r\n  background-color: $color-primary;\r\n}\r\n\r\na {\r\n  transition: all 0.5s ease-in-out;\r\n}\r\na:hover,\r\na:active {\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\na:link,\r\na:visited {\r\n  text-decoration: none;\r\n  color: inherit;\r\n  cursor: pointer;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n.button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 0.8rem;\r\n  width: 20rem;\r\n  height: 6.4rem;\r\n  background-color: $color-primary;\r\n  border-radius: 10rem;\r\n}\r\n\r\n.button-text {\r\n  @include text(1.6rem, 600, 150%, $color-text-dark);\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/img-hero.jpg */ "./src/assets/images/img-hero.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.section__hero_image {
  position: relative;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 64.4rem;
  padding: 10rem;
  border-radius: 4rem;
}

.section__hero_content {
  position: absolute;
  display: flex;
  max-width: 53rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
}

.heading-light {
  font-size: 7.2rem;
  font-weight: 600;
  line-height: 105%;
  color: #e1d4c9;
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

.menu-button:hover .button-image {
  opacity: 1;
}
.menu-button:hover .button-text {
  margin-left: 0rem;
}

.button-text {
  margin-left: 2rem;
  transition: all 0.4s ease-in-out;
}

.button-image {
  opacity: 0;
  padding-bottom: 0.3rem;
  transition: all 0.4s ease-in-out;
}`, "",{"version":3,"sources":["webpack://./src/layout/Content/01_hero/index.scss"],"names":[],"mappings":"AAyBA;EACE,kBAAA;EACA,mDAAA;EACA,sBAAA;EACA,4BAAA;EACA,kCAAA;EACA,mBAAA;EACA,cAAA;EACA,mBAAA;AAxBF;;AA2BA;EACE,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,SAAA;AAxBF;;AA2BA;EA7CE,iBA8Cc;EA7Cd,gBA6CsB;EA5CtB,iBA4C2B;EA3C3B,cAciB;AAQnB;AAuBE;EACE,kBAAA;EACA,cAhCgB;AAWpB;;AAwBA;EArDE,iBAsDc;EArDd,gBAqDsB;EApDtB,iBAoD2B;EAnD3B,cAciB;AAmBnB;;AAuBI;EACE,UAAA;AApBN;AAsBI;EACE,iBAAA;AApBN;;AAwBA;EACE,iBAAA;EACA,gCAAA;AArBF;;AAuBA;EACE,UAAA;EACA,sBAAA;EACA,gCAAA;AApBF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\n// Background Color\r\n$color-primary: #e1d4c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #b0907a;\r\n$color-border-dark: #665f55;\r\n\n.section__hero_image {\r\n  position: relative;\r\n  background: url(\"./../../../assets/images/img-hero.jpg\");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  min-height: 64.4rem;\r\n  padding: 10rem;\r\n  border-radius: 4rem;\r\n}\r\n\r\n.section__hero_content {\r\n  position: absolute;\r\n  display: flex;\r\n  max-width: 53rem;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  gap: 4rem;\r\n}\r\n\r\n.heading-light {\r\n  @include text(7.2rem, 600, 105%, $color-text-light);\r\n\r\n  span {\r\n    font-style: italic;\r\n    color: $color-text-accent;\r\n  }\r\n}\r\n.section__hero_text {\r\n  @include text(1.6rem, 400, 150%, $color-text-light);\r\n}\r\n\r\n.menu-button {\r\n  &:hover {\r\n    .button-image {\r\n      opacity: 1;\r\n    }\r\n    .button-text {\r\n      margin-left: 0rem;\r\n    }\r\n  }\r\n}\r\n.button-text {\r\n  margin-left: 2rem;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n.button-image {\r\n  opacity: 0;\r\n  padding-bottom: 0.3rem;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n"],"sourceRoot":""}]);
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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
.heading-dark span {
  font-style: italic;
  color: #b0907a;
}

.arrow-left,
.arrow-right {
  background-color: #e1d4c9;
  border: 1px solid #665f55;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  margin: 0 0.4rem 4.4rem;
  transition: all 0.5s ease-in-out;
}
.arrow-left img,
.arrow-right img {
  width: 2.4rem;
  height: 2.4rem;
}
.arrow-left:hover,
.arrow-right:hover {
  background-color: #665f55;
}

.slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4rem;
}

.slider__container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.slider__card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 48rem;
  gap: 1.8rem;
}
.slider__card_title {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 125%;
  color: #403f3d;
}
.slider__card_text {
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;
  color: #403f3d;
}
.slider__card_price {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 125%;
  color: #403f3d;
}

.slider__controls {
  display: flex;
  gap: 1.2rem;
  padding-top: 3.8rem;
}`, "",{"version":3,"sources":["webpack://./src/layout/Content/02_favorite/index.scss"],"names":[],"mappings":"AAyBA;EACE,gBAAA;AAxBF;;AA0BA;EA3BE,eA4Bc;EA3Bd,gBA2BoB;EA1BpB,iBA0ByB;EAzBzB,cAagB;EAahB,kBAAA;AApBF;AAsBE;EACE,kBAAA;EACA,cAfgB;AALpB;;AAuBA;;EAEE,yBA3Bc;EA4Bd,yBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,gCAAA;AApBF;AAsBE;;EACE,aAAA;EACA,cAAA;AAnBJ;AAsBE;;EACE,yBAxCc;AAqBlB;;AAuBA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBAAA;AApBF;;AAsBA;EACE,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;AAnBF;;AAqBA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;AAlBF;AAoBE;EA5EA,iBA6EgB;EA5EhB,gBA4EwB;EA3ExB,iBA2E6B;EA1E7B,cAagB;AA8ClB;AAiBE;EA/EA,iBAgFgB;EA/EhB,gBA+EwB;EA9ExB,iBA8E6B;EA7E7B,cAagB;AAoDlB;AAcE;EAlFA,iBAmFgB;EAlFhB,gBAkFwB;EAjFxB,iBAiF6B;EAhF7B,cAagB;AA0DlB;;AAYA;EACE,aAAA;EACA,WAAA;EACA,mBAAA;AATF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\n// Background Color\r\n$color-primary: #e1d4c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #b0907a;\r\n$color-border-dark: #665f55;\r\n\n.section__favorite {\r\n  padding: 10rem 0;\r\n}\r\n.heading-dark {\r\n  @include text(6rem, 600, 125%, $color-text-dark);\r\n  text-align: center;\r\n\r\n  span {\r\n    font-style: italic;\r\n    color: $color-text-accent;\r\n  }\r\n}\r\n.arrow-left,\r\n.arrow-right {\r\n  background-color: $color-primary;\r\n  border: 1px solid $color-border-dark;\r\n  border-radius: 50%;\r\n  width: 6rem;\r\n  height: 6rem;\r\n  margin: 0 0.4rem 4.4rem;\r\n  transition: all 0.5s ease-in-out;\r\n\r\n  img {\r\n    width: 2.4rem;\r\n    height: 2.4rem;\r\n  }\r\n\r\n  &:hover {\r\n    background-color: $color-secondary;\r\n  }\r\n}\r\n\r\n.slider {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-top: 4rem;\r\n}\r\n.slider__container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n.slider__card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: center;\r\n  max-width: 48rem;\r\n  gap: 1.8rem;\r\n\r\n  &_title {\r\n    @include text(2.4rem, 600, 125%, $color-text-dark);\r\n  }\r\n  &_text {\r\n    @include text(1.6rem, 400, 150%, $color-text-dark);\r\n  }\r\n  &_price {\r\n    @include text(2.4rem, 600, 125%, $color-text-dark);\r\n  }\r\n}\r\n.slider__controls {\r\n  display: flex;\r\n  gap: 1.2rem;\r\n  padding-top: 3.8rem;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/about-1.png */ "./src/assets/images/about-1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/about-4.png */ "./src/assets/images/about-4.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/about-2.png */ "./src/assets/images/about-2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/about-3.png */ "./src/assets/images/about-3.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.section__about {
  padding-bottom: 10rem;
}
.section__about .heading-dark {
  width: 137rem;
  text-align: start;
}

.images__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  padding-top: 4rem;
}
.images__container img {
  border-radius: 2rem;
  object-fit: cover;
  width: 66rem;
}
.images__container .image-1 {
  height: 59rem;
  background-size: cover;
  background-position: center center;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center;
  border-radius: 2rem;
}
.images__container .image-2 {
  height: 59rem;
  background-size: cover;
  background-position: center center;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-position: center;
  border-radius: 2rem;
}
.images__container .image-small-1 {
  height: 43rem;
  background-size: cover;
  background-position: center center;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-position: center;
  border-radius: 2rem;
}
.images__container .image-small-2 {
  height: 43rem;
  background-size: cover;
  background-position: center center;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-position: center;
  border-radius: 2rem;
}

.column-1,
.column-2 {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}`, "",{"version":3,"sources":["webpack://./src/layout/Content/03_about/index.scss"],"names":[],"mappings":"AAyBA;EACE,qBAAA;AAxBF;AAyBE;EACE,aAAA;EACA,iBAAA;AAvBJ;;AA2BA;EACE,aAAA;EACA,qCAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;EACA,iBAAA;AAxBF;AA0BE;EACE,mBAAA;EACA,iBAAA;EACA,YAAA;AAxBJ;AA2BE;EACE,aAAA;EACA,sBAAA;EACA,kCAAA;EACA,mDAAA;EACA,2BAAA;EACA,mBAAA;AAzBJ;AA4BE;EACE,aAAA;EACA,sBAAA;EACA,kCAAA;EACA,mDAAA;EACA,2BAAA;EACA,mBAAA;AA1BJ;AA6BE;EACE,aAAA;EACA,sBAAA;EACA,kCAAA;EACA,mDAAA;EACA,2BAAA;EACA,mBAAA;AA3BJ;AA6BE;EACE,aAAA;EACA,sBAAA;EACA,kCAAA;EACA,mDAAA;EACA,2BAAA;EACA,mBAAA;AA3BJ;;AA8BA;;EAEE,aAAA;EACA,sBAAA;EACA,SAAA;AA3BF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\n// Background Color\r\n$color-primary: #e1d4c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #b0907a;\r\n$color-border-dark: #665f55;\r\n\n.section__about {\r\n  padding-bottom: 10rem;\r\n  .heading-dark {\r\n    width: 137rem;\r\n    text-align: start;\r\n  }\r\n}\r\n\r\n.images__container {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 4rem;\r\n  padding-top: 4rem;\r\n\r\n  img {\r\n    border-radius: 2rem;\r\n    object-fit: cover;\r\n    width: 66rem;\r\n  }\r\n\r\n  .image-1 {\r\n    height: 59rem;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background: url(\"./../../../assets/images/about-1.png\");\r\n    background-position: center;\r\n    border-radius: 2rem;\r\n  }\r\n\r\n  .image-2 {\r\n    height: 59rem;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background: url(\"./../../../assets/images/about-4.png\");\r\n    background-position: center;\r\n    border-radius: 2rem;\r\n  }\r\n\r\n  .image-small-1 {\r\n    height: 43rem;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background: url(\"./../../../assets/images/about-2.png\");\r\n    background-position: center;\r\n    border-radius: 2rem;\r\n  }\r\n  .image-small-2 {\r\n    height: 43rem;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background: url(\"./../../../assets/images/about-3.png\");\r\n    background-position: center;\r\n    border-radius: 2rem;\r\n  }\r\n}\r\n.column-1,\r\n.column-2 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4rem;\r\n}\r\n"],"sourceRoot":""}]);
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.section__app {
  display: flex;
  gap: 10rem;
  padding-bottom: 10rem;
}
.section__app .heading-dark {
  text-align: start;
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
.app__buttons .button-app {
  display: flex;
  justify-content: space-evenly;
  border: 1px solid #665f55;
  padding: 1.2rem 2rem;
  transition: all 0.5s ease-in-out;
}
.app__buttons .button-app:hover {
  background-color: #665f55;
}
.app__buttons .button-app_text {
  text-align: start;
  width: 20rem;
}
.app__buttons .button-app_text span {
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%;
  color: #403f3d;
}
.app__buttons .button-app_text p {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #403f3d;
}`, "",{"version":3,"sources":["webpack://./src/layout/Content/04_app/index.scss"],"names":[],"mappings":"AAyBA;EACE,aAAA;EACA,UAAA;EACA,qBAAA;AAxBF;AA0BE;EACE,iBAAA;AAxBJ;;AA2BA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;AAxBF;AA0BE;EAvCA,iBAwCgB;EAvChB,gBAuCwB;EAtCxB,iBAsC6B;EArC7B,cAagB;AAGlB;;AAyBA;EACE,aAAA;EACA,SAAA;AAtBF;AAwBE;EACE,aAAA;EACA,6BAAA;EACA,yBAAA;EACA,oBAAA;EACA,gCAAA;AAtBJ;AAuBI;EACE,yBA3CY;AAsBlB;AAuBI;EACE,iBAAA;EACA,YAAA;AArBN;AAsBM;EA5DJ,eA6DoB;EA5DpB,gBA4D0B;EA3D1B,iBA2D+B;EA1D/B,cAagB;AA4BlB;AAmBM;EA/DJ,iBAgEoB;EA/DpB,gBA+D4B;EA9D5B,iBA8DiC;EA7DjC,cAagB;AAkClB","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\n// Background Color\r\n$color-primary: #e1d4c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #b0907a;\r\n$color-border-dark: #665f55;\r\n\n.section__app {\r\n  display: flex;\r\n  gap: 10rem;\r\n  padding-bottom: 10rem;\r\n\r\n  .heading-dark {\r\n    text-align: start;\r\n  }\r\n}\r\n.app__column-1 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 4rem;\r\n\r\n  &_text {\r\n    @include text(1.6rem, 400, 150%, $color-text-dark);\r\n  }\r\n}\r\n\r\n.app__buttons {\r\n  display: flex;\r\n  gap: 2rem;\r\n\r\n  .button-app {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    border: 1px solid $color-secondary;\r\n    padding: 1.2rem 2rem;\r\n    transition: all 0.5s ease-in-out;\r\n    &:hover {\r\n      background-color: $color-secondary;\r\n    }\r\n    &_text {\r\n      text-align: start;\r\n      width: 20rem;\r\n      span {\r\n        @include text(1rem, 600, 140%, $color-text-dark);\r\n      }\r\n      p {\r\n        @include text(1.6rem, 600, 150%, $color-text-dark);\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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
.footer__container .heading-light {
  font-size: 6rem;
  font-weight: 600;
  line-height: 125%;
  color: #e1d4c9;
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
}
.footer__contacts_address img {
  padding-right: 0.8rem;
}
.footer__contacts_address a:hover::after {
  content: "";
  border-bottom: 2px solid #e1d4c9;
  width: 18.2rem;
  height: 2px;
  position: absolute;
  bottom: -0.1rem;
  left: 9rem;
  transform: translateX(-50%);
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
.footer__contacts_phone a:hover::after {
  content: "";
  border-bottom: 2px solid #e1d4c9;
  width: 18.2rem;
  height: 2px;
  position: absolute;
  bottom: -0.1rem;
  left: 9rem;
  transform: translateX(-50%);
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

.social-icon {
  background-color: #665f55;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 1px solid #e1d4c9;
  margin-right: 1rem;
  margin-top: 4rem;
}
.social-icon:hover {
  background-color: #e1d4c9;
}

.icon {
  width: 2.4rem;
  height: 2.4rem;
}`, "",{"version":3,"sources":["webpack://./src/layout/Footer/index.scss"],"names":[],"mappings":"AAyBA;EACE,yBAbgB;EAchB,aAAA;EACA,8BAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;EACA,mBAAA;EACA,UAAA;AAxBF;AA0BE;EAlCA,eAmCgB;EAlChB,gBAkCsB;EAjCtB,iBAiC2B;EAhC3B,cAciB;AAHnB;;AAwBA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AArBF;AAuBE;EA3CA,iBA4CgB;EA3ChB,gBA2CwB;EA1CxB,iBA0C6B;EAzC7B,cAciB;EA4Bf,oBAAA;AAlBJ;AAoBE;EA/CA,iBAgDgB;EA/ChB,gBA+CwB;EA9CxB,iBA8C6B;EA7C7B,cAciB;EAgCf,kBAAA;AAfJ;AAiBI;EACE,qBAAA;AAfN;AAkBI;EACE,WAAA;EACA,gCAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;EACA,2BAAA;AAhBN;AAmBE;EAlEA,iBAmEgB;EAlEhB,gBAkEwB;EAjExB,iBAiE6B;EAhE7B,cAciB;EAmDf,kBAAA;AAdJ;AAeI;EACE,qBAAA;AAbN;AAeI;EACE,WAAA;EACA,gCAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;EACA,2BAAA;AAbN;AAgBE;EAnFA,iBAoFgB;EAnFhB,gBAmFwB;EAlFxB,iBAkF6B;EAjF7B,cAciB;AAwDnB;AAaI;EACE,qBAAA;AAXN;;AAgBA;EACE,yBAjFgB;EAkFhB,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,gBAAA;AAbF;AAeE;EACE,yBA3FY;AA8EhB;;AAgBA;EACE,aAAA;EACA,cAAA;AAbF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\n// Background Color\r\n$color-primary: #e1d4c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #b0907a;\r\n$color-border-dark: #665f55;\r\n\n.footer__container {\r\n  background-color: $color-secondary;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10rem;\r\n  border-radius: 4rem;\r\n  gap: 10rem;\r\n\r\n  .heading-light {\r\n    @include text(6rem, 600, 125%, $color-text-light);\r\n  }\r\n}\r\n.footer__contacts {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.7rem;\r\n\r\n  &_title {\r\n    @include text(2.4rem, 600, 125%, $color-text-light);\r\n    padding-bottom: 2rem;\r\n  }\r\n  &_address {\r\n    @include text(1.6rem, 600, 150%, $color-text-light);\r\n    position: relative;\r\n\r\n    img {\r\n      padding-right: 0.8rem;\r\n    }\r\n\r\n    a:hover::after {\r\n      content: \"\";\r\n      border-bottom: 2px solid $color-text-light;\r\n      width: 18.2rem;\r\n      height: 2px;\r\n      position: absolute;\r\n      bottom: -0.1rem;\r\n      left: 9rem;\r\n      transform: translateX(-50%);\r\n    }\r\n  }\r\n  &_phone {\r\n    @include text(1.6rem, 600, 150%, $color-text-light);\r\n    position: relative;\r\n    img {\r\n      padding-right: 0.8rem;\r\n    }\r\n    a:hover::after {\r\n      content: \"\";\r\n      border-bottom: 2px solid $color-text-light;\r\n      width: 18.2rem;\r\n      height: 2px;\r\n      position: absolute;\r\n      bottom: -0.1rem;\r\n      left: 9rem;\r\n      transform: translateX(-50%);\r\n    }\r\n  }\r\n  &_schedule {\r\n    @include text(1.6rem, 600, 150%, $color-text-light);\r\n\r\n    img {\r\n      padding-right: 0.8rem;\r\n    }\r\n  }\r\n}\r\n\r\n.social-icon {\r\n  background-color: $color-secondary;\r\n  width: 6rem;\r\n  height: 6rem;\r\n  border-radius: 50%;\r\n  border: 1px solid $color-primary;\r\n  margin-right: 1rem;\r\n  margin-top: 4rem;\r\n\r\n  &:hover {\r\n    background-color: $color-primary;\r\n  }\r\n}\r\n.icon {\r\n  width: 2.4rem;\r\n  height: 2.4rem;\r\n}\r\n"],"sourceRoot":""}]);
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

.navigation__list {
  display: flex;
  justify-content: space-between;
  gap: 4rem;
}
.navigation__list_link {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #403f3d;
  list-style: none;
}

.header__menu {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #403f3d;
  position: relative;
}
.header__menu a:hover::after {
  content: "";
  border-bottom: 2px solid #403f3d;
  width: 6rem;
  height: 2px;
  position: absolute;
  bottom: -0.1rem;
  left: 2.9rem;
  transform: translateX(-50%);
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
}`, "",{"version":3,"sources":["webpack://./src/layout/Header/index.scss"],"names":[],"mappings":"AAyBA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;AAxBF;;AA2BA;EACE,aAAA;EACA,8BAAA;EACA,SAAA;AAxBF;AA0BE;EArCA,iBAsCgB;EArChB,gBAqCwB;EApCxB,iBAoC6B;EAnC7B,cAagB;EAuBd,gBAAA;AArBJ;;AAyBA;EA3CE,iBA4Cc;EA3Cd,gBA2CsB;EA1CtB,iBA0C2B;EAzC3B,cAagB;EA6BhB,kBAAA;AAnBF;AAqBE;EACE,WAAA;EACA,gCAAA;EACA,WAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,2BAAA;AAnBJ;;AAuBA;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AApBF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\n// Background Color\r\n$color-primary: #e1d4c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #b0907a;\r\n$color-border-dark: #665f55;\r\n\n.header__container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 10rem;\r\n  padding: 2rem 0;\r\n}\r\n\r\n.navigation__list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 4rem;\r\n\r\n  &_link {\r\n    @include text(1.6rem, 600, 150%, $color-text-dark);\r\n    list-style: none;\r\n  }\r\n}\r\n\r\n.header__menu {\r\n  @include text(1.6rem, 600, 150%, $color-text-dark);\r\n  position: relative;\r\n\r\n  a:hover::after {\r\n    content: \"\";\r\n    border-bottom: 2px solid $color-text-dark;\r\n    width: 6rem;\r\n    height: 2px;\r\n    position: absolute;\r\n    bottom: -0.1rem;\r\n    left: 2.9rem;\r\n    transform: translateX(-50%);\r\n  }\r\n}\r\n\r\n.visually-hidden {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n  border: 0;\r\n  padding: 0;\r\n  white-space: nowrap;\r\n  clip-path: inset(100%);\r\n  clip: rect(0 0 0 0);\r\n  overflow: hidden;\r\n}\r\n"],"sourceRoot":""}]);
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

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/coffee-cup.svg */ "./src/assets/icons/coffee-cup.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<section class=\"section\"> <div class=\"section__hero\"> <div class=\"section__hero_image\"> <div class=\"section__hero_content\"> <h2 class=\"heading-light\"> <span>Enjoy</span> premium coffee at our charming cafe </h2> <p class=\"section__hero_text\"> With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage. </p> <a class=\"button menu-button\" href=\"./menu.html\"> <span class=\"button-text\">Menu</span> <img class=\"button-image\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"coffee cup icon\" draggable=\"false\"/> </a> </div> </div> </div> </section> ";
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

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/arrow-left.svg */ "./src/assets/icons/arrow-left.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/coffee-slider-1.svg */ "./src/assets/images/coffee-slider-1.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/control.png */ "./src/assets/icons/control.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/control-1.png */ "./src/assets/icons/control-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/arrow-right.svg */ "./src/assets/icons/arrow-right.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var code = "<section class=\"section\" id=\"favorite\"> <div class=\"section__favorite\"> <h3 class=\"heading-dark\">Choose your <span>favorite</span> coffee</h3> <div class=\"slider\"> <button class=\"arrow-left\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"left arrow icon\" draggable=\"false\"/> </button> <div class=\"slider__container\"> <div class=\"slider__card\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"photo of a glass with iced coffee\" draggable=\"false\"/> <h4 class=\"slider__card_title\">S’mores Frappuccino</h4> <p class=\"slider__card_text\"> This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk. </p> <p class=\"slider__card_price\">$5.50</p> </div> <div class=\"slider__controls\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"control line\" draggable=\"false\"/> <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"control line\" draggable=\"false\"/> <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"control line\" draggable=\"false\"/> </div> </div> <button class=\"arrow-right\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"right arrow icon\" draggable=\"false\"/> </button> </div> </div> </section> ";
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
// Module
var code = "<section class=\"section\" id=\"about\"> <div class=\"section__about\"> <h3 class=\"heading-dark\"> Resource is <span>the perfect and cozy place </span>where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done. </h3> <div class=\"images__container\"> <div class=\"column-1\"> <div class=\"image-1\"></div> <div class=\"image-small-1\"></div> </div> <div class=\"column-2\"> <div class=\"image-small-2\"></div> <div class=\"image-2\"></div> </div> </div> </div> </section> ";
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

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/apple.svg */ "./src/assets/icons/apple.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/icons/android.svg */ "./src/assets/icons/android.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../../../assets/images/mobile-screens.svg */ "./src/assets/images/mobile-screens.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<section class=\"section\" id=\"app\"> <div class=\"section__app\"> <div class=\"app__column-1\"> <h3 class=\"heading-dark\"> <span>Download</span> our apps to start ordering </h3> <p class=\"app__column-1_text\"> Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are </p> <div class=\"app__buttons\"> <button class=\"button button-app\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"app store icon\"/> <div class=\"button-app_text\"> <span>Available on the</span> <p>App Store</p> </div> </button> <button class=\"button button-app\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"google play icon\"/> <div class=\"button-app_text\"> <span>Available on</span> <p>Google Play</p> </div> </button> </div> </div> <div class=\"app__column\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"photo of two mobile phones with coffee shop app on the screens\" draggable=\"false\"/> </div> </div> </section> ";
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

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/twitter.svg */ "./src/assets/icons/twitter.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/instagram.svg */ "./src/assets/icons/instagram.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/facebook.svg */ "./src/assets/icons/facebook.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/pin-alt.svg */ "./src/assets/icons/pin-alt.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/phone.svg */ "./src/assets/icons/phone.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/clock.svg */ "./src/assets/icons/clock.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var code = "<div class=\"footer__container\"> <div class=\"footer__column\"> <h4 class=\"heading-light\"> Sip, Savor, Smile. <span>It's coffee time!</span> </h4> <button class=\"social-icon\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"twitter icon\" class=\"icon\"/> </button> <button class=\"social-icon\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"instagram icon\" class=\"icon\"/> </button> <button class=\"social-icon\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"facebook icon\" class=\"icon\"/> </button> </div> <div class=\"footer__column\"> <div class=\"footer__contacts\" id=\"contacts\"> <p class=\"footer__contacts_title\">Contact us</p> <p class=\"footer__contacts_address\"> <a href=\"https://maps.app.goo.gl/RJapY2QV9Z1AZjim8\" target=\"_blank\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"pin icon\"/>8558 Green Rd., LA</a> </p> <p class=\"footer__contacts_phone\"> <a href=\"tel:+1(603)555-0123\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"phone icon\"/>+1 (603) 555-0123</a> </p> <p class=\"footer__contacts_schedule\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"clock icon\"/>Mon-Sat: 9:00 AM – 23:00 PM </p> </div> </div> </div> ";
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
var code = "<div class=\"header__container\"> <div class=\"logo\"> <a href=\"./index.html\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\" draggable=\"false\"/> <h1 class=\"visually-hidden\"> Resourse - the best coffee house in your area </h1></a> </div> <nav class=\"header__navigation\"> <ul class=\"navigation__list\"> <li class=\"navigation__list_link\"> <a href=\"#favorite\">Favorite coffee</a> </li> <li class=\"navigation__list_link\"><a href=\"#about\">About</a></li> <li class=\"navigation__list_link\"><a href=\"#app\">Mobile app</a></li> <li class=\"navigation__list_link\"><a href=\"#contacts\">Contact us</a></li> </ul> </nav> <div class=\"header__menu\"> <a href=\"./menu.html\">Menu <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"coffee cup icon\"/> </a> </div> </div> ";
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


// import Button from "./../../../components/Buttons";



const content = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"]);

// const customButton = Button({
//   onClick: () => console.log("click from HERO"),
//   title: "Menu",
//   className: "button",
// });
// content.appendChild(customButton);

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

/***/ "./src/assets/icons/android.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/android.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "443ce7d58b4b84f86474.svg";

/***/ }),

/***/ "./src/assets/icons/apple.svg":
/*!************************************!*\
  !*** ./src/assets/icons/apple.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "751c7d901b17bc1370c6.svg";

/***/ }),

/***/ "./src/assets/icons/arrow-left.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/arrow-left.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e3082a343b3a1232cf5.svg";

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

module.exports = __webpack_require__.p + "fd3bfdf2461505e88c97.svg";

/***/ }),

/***/ "./src/assets/icons/coffee-cup.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/coffee-cup.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a18d1a426d619ca61f4.svg";

/***/ }),

/***/ "./src/assets/icons/control-1.png":
/*!****************************************!*\
  !*** ./src/assets/icons/control-1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3500a58016bc38dc465b.png";

/***/ }),

/***/ "./src/assets/icons/control.png":
/*!**************************************!*\
  !*** ./src/assets/icons/control.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9b65bdc9bbe2148da80.png";

/***/ }),

/***/ "./src/assets/icons/facebook.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/facebook.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c7eee4b2849d2393a27.svg";

/***/ }),

/***/ "./src/assets/icons/instagram.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/instagram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "310b880c9247c18aa2b6.svg";

/***/ }),

/***/ "./src/assets/icons/phone.svg":
/*!************************************!*\
  !*** ./src/assets/icons/phone.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe2a73fbe1db74b0179f.svg";

/***/ }),

/***/ "./src/assets/icons/pin-alt.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/pin-alt.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4576c6be48dd1d6ddb6.svg";

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

/***/ "./src/assets/images/img-hero.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/img-hero.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b57cf717fb05c40946c8.jpg";

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
/******/ 			"main": 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

// import { calc } from "./test";
// console.log(calc(200, 733));

console.log("Add styles to Home page (except for some interactivity)");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wMV9oZXJvL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAyX2Zhdm9yaXRlL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAzX2Fib3V0L2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzA0X2FwcC9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9IZWFkZXIvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAxX2hlcm8vaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDJfZmF2b3JpdGUvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDNfYWJvdXQvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDRfYXBwL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Gb290ZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5odG1sIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9pbmRleC5zY3NzPzk1NzMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAxX2hlcm8vaW5kZXguc2Nzcz82YWZlIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wMl9mYXZvcml0ZS9pbmRleC5zY3NzPzhjNDUiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAzX2Fib3V0L2luZGV4LnNjc3M/MzUxZSIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDRfYXBwL2luZGV4LnNjc3M/M2ZjNCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0Zvb3Rlci9pbmRleC5zY3NzP2JhN2IiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9IZWFkZXIvaW5kZXguc2Nzcz8yOWY2Iiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAxX2hlcm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Db250ZW50LzAyX2Zhdm9yaXRlL2luZGV4LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvQ29udGVudC8wM19hYm91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDRfYXBwL2luZGV4LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy91dGlscy9odG1sVG9FbGVtZW50LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9pbnRlcik7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkNGM5O1xufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxNDRyZW07XG4gIHBhZGRpbmc6IDAgNHJlbSA0cmVtIDRyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkNGM5O1xufVxuXG5hIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbmE6aG92ZXIsXG5hOmFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG5hOmxpbmssXG5hOnZpc2l0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogMC44cmVtO1xuICB3aWR0aDogMjByZW07XG4gIGhlaWdodDogNi40cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkNGM5O1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogIzQwM2YzZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTJCQTs7O0VBR0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQXpCRjs7QUEyQkE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FBeEJGOztBQTBCQTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkE3QmM7QUFNaEI7O0FBMEJBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQXBDYztBQWFoQjs7QUEwQkE7RUFDRSxnQ0FBQTtBQXZCRjs7QUF5QkE7O0VBRUUsZ0NBQUE7QUF0QkY7O0FBeUJBOztFQUVFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQXRCRjs7QUF5QkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQXRCRjs7QUF3QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBbkVjO0VBb0VkLG9CQUFBO0FBckJGOztBQXdCQTtFQWxGRSxpQkFtRmM7RUFsRmQsZ0JBa0ZzQjtFQWpGdEIsaUJBaUYyQjtFQWhGM0IsY0FhZ0I7QUFpRGxCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkY29sb3IpIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJXRyYW5zaXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UxZDRjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2IwOTA3YTtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9pbnRlclxcXCIpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgd2lkdGg6IDE0NHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgNHJlbSA0cmVtIDRyZW07XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5hOmhvdmVyLFxcclxcbmE6YWN0aXZlIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5hOmxpbmssXFxyXFxuYTp2aXNpdGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5idXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdhcDogMC44cmVtO1xcclxcbiAgd2lkdGg6IDIwcmVtO1xcclxcbiAgaGVpZ2h0OiA2LjRyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLXRleHQge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ltZy1oZXJvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlY3Rpb25fX2hlcm9faW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgbWluLWhlaWdodDogNjQuNHJlbTtcbiAgcGFkZGluZzogMTByZW07XG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XG59XG5cbi5zZWN0aW9uX19oZXJvX2NvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogNTNyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiA0cmVtO1xufVxuXG4uaGVhZGluZy1saWdodCB7XG4gIGZvbnQtc2l6ZTogNy4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTA1JTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG59XG4uaGVhZGluZy1saWdodCBzcGFuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogI2IwOTA3YTtcbn1cblxuLnNlY3Rpb25fX2hlcm9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG59XG5cbi5tZW51LWJ1dHRvbjpob3ZlciAuYnV0dG9uLWltYWdlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5tZW51LWJ1dHRvbjpob3ZlciAuYnV0dG9uLXRleHQge1xuICBtYXJnaW4tbGVmdDogMHJlbTtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnV0dG9uLWltYWdlIHtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDFfaGVyby9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXlCQTtFQUNFLGtCQUFBO0VBQ0EsbURBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQXhCRjs7QUEyQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUF4QkY7O0FBMkJBO0VBN0NFLGlCQThDYztFQTdDZCxnQkE2Q3NCO0VBNUN0QixpQkE0QzJCO0VBM0MzQixjQWNpQjtBQVFuQjtBQXVCRTtFQUNFLGtCQUFBO0VBQ0EsY0FoQ2dCO0FBV3BCOztBQXdCQTtFQXJERSxpQkFzRGM7RUFyRGQsZ0JBcURzQjtFQXBEdEIsaUJBb0QyQjtFQW5EM0IsY0FjaUI7QUFtQm5COztBQXVCSTtFQUNFLFVBQUE7QUFwQk47QUFzQkk7RUFDRSxpQkFBQTtBQXBCTjs7QUF3QkE7RUFDRSxpQkFBQTtFQUNBLGdDQUFBO0FBckJGOztBQXVCQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBcEJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkY29sb3IpIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJXRyYW5zaXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UxZDRjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2IwOTA3YTtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxuLnNlY3Rpb25fX2hlcm9faW1hZ2Uge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaW1nLWhlcm8uanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiA2NC40cmVtO1xcclxcbiAgcGFkZGluZzogMTByZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbl9faGVyb19jb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtd2lkdGg6IDUzcmVtO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nLWxpZ2h0IHtcXHJcXG4gIEBpbmNsdWRlIHRleHQoNy4ycmVtLCA2MDAsIDEwNSUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG5cXHJcXG4gIHNwYW4ge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1hY2NlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi5zZWN0aW9uX19oZXJvX3RleHQge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDQwMCwgMTUwJSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b24ge1xcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIC5idXR0b24taW1hZ2Uge1xcclxcbiAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJ1dHRvbi10ZXh0IHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4uYnV0dG9uLXRleHQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmJ1dHRvbi1pbWFnZSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZWN0aW9uX19mYXZvcml0ZSB7XG4gIHBhZGRpbmc6IDEwcmVtIDA7XG59XG5cbi5oZWFkaW5nLWRhcmsge1xuICBmb250LXNpemU6IDZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWRpbmctZGFyayBzcGFuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogI2IwOTA3YTtcbn1cblxuLmFycm93LWxlZnQsXG4uYXJyb3ctcmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkNGM5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY1ZjU1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA2cmVtO1xuICBoZWlnaHQ6IDZyZW07XG4gIG1hcmdpbjogMCAwLjRyZW0gNC40cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5hcnJvdy1sZWZ0IGltZyxcbi5hcnJvdy1yaWdodCBpbWcge1xuICB3aWR0aDogMi40cmVtO1xuICBoZWlnaHQ6IDIuNHJlbTtcbn1cbi5hcnJvdy1sZWZ0OmhvdmVyLFxuLmFycm93LXJpZ2h0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NWY1NTtcbn1cblxuLnNsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDRyZW07XG59XG5cbi5zbGlkZXJfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2xpZGVyX19jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA0OHJlbTtcbiAgZ2FwOiAxLjhyZW07XG59XG4uc2xpZGVyX19jYXJkX3RpdGxlIHtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBjb2xvcjogIzQwM2YzZDtcbn1cbi5zbGlkZXJfX2NhcmRfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59XG4uc2xpZGVyX19jYXJkX3ByaWNlIHtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBjb2xvcjogIzQwM2YzZDtcbn1cblxuLnNsaWRlcl9fY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuMnJlbTtcbiAgcGFkZGluZy10b3A6IDMuOHJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQvQ29udGVudC8wMl9mYXZvcml0ZS9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXlCQTtFQUNFLGdCQUFBO0FBeEJGOztBQTBCQTtFQTNCRSxlQTRCYztFQTNCZCxnQkEyQm9CO0VBMUJwQixpQkEwQnlCO0VBekJ6QixjQWFnQjtFQWFoQixrQkFBQTtBQXBCRjtBQXNCRTtFQUNFLGtCQUFBO0VBQ0EsY0FmZ0I7QUFMcEI7O0FBdUJBOztFQUVFLHlCQTNCYztFQTRCZCx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBcEJGO0FBc0JFOztFQUNFLGFBQUE7RUFDQSxjQUFBO0FBbkJKO0FBc0JFOztFQUNFLHlCQXhDYztBQXFCbEI7O0FBdUJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQXBCRjs7QUFzQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBbkJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFsQkY7QUFvQkU7RUE1RUEsaUJBNkVnQjtFQTVFaEIsZ0JBNEV3QjtFQTNFeEIsaUJBMkU2QjtFQTFFN0IsY0FhZ0I7QUE4Q2xCO0FBaUJFO0VBL0VBLGlCQWdGZ0I7RUEvRWhCLGdCQStFd0I7RUE5RXhCLGlCQThFNkI7RUE3RTdCLGNBYWdCO0FBb0RsQjtBQWNFO0VBbEZBLGlCQW1GZ0I7RUFsRmhCLGdCQWtGd0I7RUFqRnhCLGlCQWlGNkI7RUFoRjdCLGNBYWdCO0FBMERsQjs7QUFZQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFURlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGhlaWdodCwgJGNvbG9yKSB7XFxyXFxuICBmb250LXNpemU6ICRzaXplO1xcclxcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XFxyXFxuICBsaW5lLWhlaWdodDogJGhlaWdodDtcXHJcXG4gIGNvbG9yOiAkY29sb3I7XFxyXFxufVxcclxcblxcclxcbiV0cmFuc2l0aW9uIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXG4vLyBCYWNrZ3JvdW5kIENvbG9yXFxyXFxuJGNvbG9yLXByaW1hcnk6ICNlMWQ0Yzk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeTogIzY2NWY1NTtcXHJcXG4kY29sb3ItYmFja2Ryb3A6ICM0MDNmM2RjYztcXHJcXG5cXHJcXG4vLyBUZXh0IENvbG9yXFxyXFxuJGNvbG9yLXRleHQtZGFyazogIzQwM2YzZDtcXHJcXG4kY29sb3ItdGV4dC1saWdodDogI2UxZDRjOTtcXHJcXG4kY29sb3ItdGV4dC1hY2NlbnQ6ICNiMDkwN2E7XFxyXFxuXFxyXFxuLy8gQm9yZGVyIENvbG9yOlxcclxcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNiMDkwN2E7XFxyXFxuJGNvbG9yLWJvcmRlci1kYXJrOiAjNjY1ZjU1O1xcclxcblxcbi5zZWN0aW9uX19mYXZvcml0ZSB7XFxyXFxuICBwYWRkaW5nOiAxMHJlbSAwO1xcclxcbn1cXHJcXG4uaGVhZGluZy1kYXJrIHtcXHJcXG4gIEBpbmNsdWRlIHRleHQoNnJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHNwYW4ge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1hY2NlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi5hcnJvdy1sZWZ0LFxcclxcbi5hcnJvdy1yaWdodCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXItZGFyaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiA2cmVtO1xcclxcbiAgaGVpZ2h0OiA2cmVtO1xcclxcbiAgbWFyZ2luOiAwIDAuNHJlbSA0LjRyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gIGltZyB7XFxyXFxuICAgIHdpZHRoOiAyLjRyZW07XFxyXFxuICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXHJcXG59XFxyXFxuLnNsaWRlcl9fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc2xpZGVyX19jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDQ4cmVtO1xcclxcbiAgZ2FwOiAxLjhyZW07XFxyXFxuXFxyXFxuICAmX3RpdGxlIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgyLjRyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICB9XFxyXFxuICAmX3RleHQge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNDAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIH1cXHJcXG4gICZfcHJpY2Uge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDIuNHJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLnNsaWRlcl9fY29udHJvbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMS4ycmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDMuOHJlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtMS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtNC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtMy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZWN0aW9uX19hYm91dCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcbn1cbi5zZWN0aW9uX19hYm91dCAuaGVhZGluZy1kYXJrIHtcbiAgd2lkdGg6IDEzN3JlbTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5cbi5pbWFnZXNfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cmVtO1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cbi5pbWFnZXNfX2NvbnRhaW5lciBpbWcge1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDY2cmVtO1xufVxuLmltYWdlc19fY29udGFpbmVyIC5pbWFnZS0xIHtcbiAgaGVpZ2h0OiA1OXJlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG4uaW1hZ2VzX19jb250YWluZXIgLmltYWdlLTIge1xuICBoZWlnaHQ6IDU5cmVtO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbn1cbi5pbWFnZXNfX2NvbnRhaW5lciAuaW1hZ2Utc21hbGwtMSB7XG4gIGhlaWdodDogNDNyZW07XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuLmltYWdlc19fY29udGFpbmVyIC5pbWFnZS1zbWFsbC0yIHtcbiAgaGVpZ2h0OiA0M3JlbTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG59XG5cbi5jb2x1bW4tMSxcbi5jb2x1bW4tMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQvQ29udGVudC8wM19hYm91dC9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXlCQTtFQUNFLHFCQUFBO0FBeEJGO0FBeUJFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBdkJKOztBQTJCQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUF4QkY7QUEwQkU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXhCSjtBQTJCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbURBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBekJKO0FBNEJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtREFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUExQko7QUE2QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQTNCSjtBQTZCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbURBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBM0JKOztBQThCQTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBM0JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkY29sb3IpIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJXRyYW5zaXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UxZDRjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2IwOTA3YTtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxuLnNlY3Rpb25fX2Fib3V0IHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcXHJcXG4gIC5oZWFkaW5nLWRhcmsge1xcclxcbiAgICB3aWR0aDogMTM3cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlc19fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNHJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcclxcblxcclxcbiAgaW1nIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOiA2NnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pbWFnZS0xIHtcXHJcXG4gICAgaGVpZ2h0OiA1OXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtMS5wbmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmltYWdlLTIge1xcclxcbiAgICBoZWlnaHQ6IDU5cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9hYm91dC00LnBuZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaW1hZ2Utc21hbGwtMSB7XFxyXFxuICAgIGhlaWdodDogNDNyZW07XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Fib3V0LTIucG5nXFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIH1cXHJcXG4gIC5pbWFnZS1zbWFsbC0yIHtcXHJcXG4gICAgaGVpZ2h0OiA0M3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQtMy5wbmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uY29sdW1uLTEsXFxyXFxuLmNvbHVtbi0yIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA0cmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZWN0aW9uX19hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTByZW07XG59XG4uc2VjdGlvbl9fYXBwIC5oZWFkaW5nLWRhcmsge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLmFwcF9fY29sdW1uLTEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0cmVtO1xufVxuLmFwcF9fY29sdW1uLTFfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59XG5cbi5hcHBfX2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG59XG4uYXBwX19idXR0b25zIC5idXR0b24tYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjVmNTU7XG4gIHBhZGRpbmc6IDEuMnJlbSAycmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5hcHBfX2J1dHRvbnMgLmJ1dHRvbi1hcHA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xufVxuLmFwcF9fYnV0dG9ucyAuYnV0dG9uLWFwcF90ZXh0IHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHdpZHRoOiAyMHJlbTtcbn1cbi5hcHBfX2J1dHRvbnMgLmJ1dHRvbi1hcHBfdGV4dCBzcGFuIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTQwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59XG4uYXBwX19idXR0b25zIC5idXR0b24tYXBwX3RleHQgcCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0L0NvbnRlbnQvMDRfYXBwL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBeUJBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQXhCRjtBQTBCRTtFQUNFLGlCQUFBO0FBeEJKOztBQTJCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQXhCRjtBQTBCRTtFQXZDQSxpQkF3Q2dCO0VBdkNoQixnQkF1Q3dCO0VBdEN4QixpQkFzQzZCO0VBckM3QixjQWFnQjtBQUdsQjs7QUF5QkE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQXRCRjtBQXdCRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQXRCSjtBQXVCSTtFQUNFLHlCQTNDWTtBQXNCbEI7QUF1Qkk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFyQk47QUFzQk07RUE1REosZUE2RG9CO0VBNURwQixnQkE0RDBCO0VBM0QxQixpQkEyRCtCO0VBMUQvQixjQWFnQjtBQTRCbEI7QUFtQk07RUEvREosaUJBZ0VvQjtFQS9EcEIsZ0JBK0Q0QjtFQTlENUIsaUJBOERpQztFQTdEakMsY0FhZ0I7QUFrQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkY29sb3IpIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJXRyYW5zaXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UxZDRjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2IwOTA3YTtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxuLnNlY3Rpb25fX2FwcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcXHJcXG5cXHJcXG4gIC5oZWFkaW5nLWRhcmsge1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmFwcF9fY29sdW1uLTEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNHJlbTtcXHJcXG5cXHJcXG4gICZfdGV4dCB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMS42cmVtLCA0MDAsIDE1MCUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYXBwX19idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuXFxyXFxuICAuYnV0dG9uLWFwcCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgICBwYWRkaW5nOiAxLjJyZW0gMnJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XFxyXFxuICAgIH1cXHJcXG4gICAgJl90ZXh0IHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgICB3aWR0aDogMjByZW07XFxyXFxuICAgICAgc3BhbiB7XFxyXFxuICAgICAgICBAaW5jbHVkZSB0ZXh0KDFyZW0sIDYwMCwgMTQwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIHAge1xcclxcbiAgICAgICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3Rlcl9fY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NWY1NTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICBnYXA6IDEwcmVtO1xufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5oZWFkaW5nLWxpZ2h0IHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG59XG5cbi5mb290ZXJfX2NvbnRhY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjdyZW07XG59XG4uZm9vdGVyX19jb250YWN0c190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX2FkZHJlc3MgaW1nIHtcbiAgcGFkZGluZy1yaWdodDogMC44cmVtO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyBhOmhvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTFkNGM5O1xuICB3aWR0aDogMTguMnJlbTtcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMC4xcmVtO1xuICBsZWZ0OiA5cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4uZm9vdGVyX19jb250YWN0c19waG9uZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3Bob25lIGltZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3Bob25lIGE6aG92ZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMWQ0Yzk7XG4gIHdpZHRoOiAxOC4ycmVtO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0wLjFyZW07XG4gIGxlZnQ6IDlyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3NjaGVkdWxlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogI2UxZDRjOTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3NjaGVkdWxlIGltZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcbn1cblxuLnNvY2lhbC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NWY1NTtcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTFkNGM5O1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIG1hcmdpbi10b3A6IDRyZW07XG59XG4uc29jaWFsLWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkNGM5O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyLjRyZW07XG4gIGhlaWdodDogMi40cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dC9Gb290ZXIvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUF5QkE7RUFDRSx5QkFiZ0I7RUFjaEIsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUF4QkY7QUEwQkU7RUFsQ0EsZUFtQ2dCO0VBbENoQixnQkFrQ3NCO0VBakN0QixpQkFpQzJCO0VBaEMzQixjQWNpQjtBQUhuQjs7QUF3QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBckJGO0FBdUJFO0VBM0NBLGlCQTRDZ0I7RUEzQ2hCLGdCQTJDd0I7RUExQ3hCLGlCQTBDNkI7RUF6QzdCLGNBY2lCO0VBNEJmLG9CQUFBO0FBbEJKO0FBb0JFO0VBL0NBLGlCQWdEZ0I7RUEvQ2hCLGdCQStDd0I7RUE5Q3hCLGlCQThDNkI7RUE3QzdCLGNBY2lCO0VBZ0NmLGtCQUFBO0FBZko7QUFpQkk7RUFDRSxxQkFBQTtBQWZOO0FBa0JJO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFoQk47QUFtQkU7RUFsRUEsaUJBbUVnQjtFQWxFaEIsZ0JBa0V3QjtFQWpFeEIsaUJBaUU2QjtFQWhFN0IsY0FjaUI7RUFtRGYsa0JBQUE7QUFkSjtBQWVJO0VBQ0UscUJBQUE7QUFiTjtBQWVJO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFiTjtBQWdCRTtFQW5GQSxpQkFvRmdCO0VBbkZoQixnQkFtRndCO0VBbEZ4QixpQkFrRjZCO0VBakY3QixjQWNpQjtBQXdEbkI7QUFhSTtFQUNFLHFCQUFBO0FBWE47O0FBZ0JBO0VBQ0UseUJBakZnQjtFQWtGaEIsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWJGO0FBZUU7RUFDRSx5QkEzRlk7QUE4RWhCOztBQWdCQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBYkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxuLy8gQmFja2dyb3VuZCBDb2xvclxcclxcbiRjb2xvci1wcmltYXJ5OiAjZTFkNGM5O1xcclxcbiRjb2xvci1zZWNvbmRhcnk6ICM2NjVmNTU7XFxyXFxuJGNvbG9yLWJhY2tkcm9wOiAjNDAzZjNkY2M7XFxyXFxuXFxyXFxuLy8gVGV4dCBDb2xvclxcclxcbiRjb2xvci10ZXh0LWRhcms6ICM0MDNmM2Q7XFxyXFxuJGNvbG9yLXRleHQtbGlnaHQ6ICNlMWQ0Yzk7XFxyXFxuJGNvbG9yLXRleHQtYWNjZW50OiAjYjA5MDdhO1xcclxcblxcclxcbi8vIEJvcmRlciBDb2xvcjpcXHJcXG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjYjA5MDdhO1xcclxcbiRjb2xvci1ib3JkZXItZGFyazogIzY2NWY1NTtcXHJcXG5cXG4uZm9vdGVyX19jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTByZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcclxcbiAgZ2FwOiAxMHJlbTtcXHJcXG5cXHJcXG4gIC5oZWFkaW5nLWxpZ2h0IHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCg2cmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmZvb3Rlcl9fY29udGFjdHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEuN3JlbTtcXHJcXG5cXHJcXG4gICZfdGl0bGUge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDIuNHJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgfVxcclxcbiAgJl9hZGRyZXNzIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGE6aG92ZXI6OmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGNvbG9yLXRleHQtbGlnaHQ7XFxyXFxuICAgICAgd2lkdGg6IDE4LjJyZW07XFxyXFxuICAgICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIGJvdHRvbTogLTAuMXJlbTtcXHJcXG4gICAgICBsZWZ0OiA5cmVtO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9waG9uZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBhOmhvdmVyOjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvci10ZXh0LWxpZ2h0O1xcclxcbiAgICAgIHdpZHRoOiAxOC4ycmVtO1xcclxcbiAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBib3R0b206IC0wLjFyZW07XFxyXFxuICAgICAgbGVmdDogOXJlbTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfc2NoZWR1bGUge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaWNvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgd2lkdGg6IDZyZW07XFxyXFxuICBoZWlnaHQ6IDZyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICB9XFxyXFxufVxcclxcbi5pY29uIHtcXHJcXG4gIHdpZHRoOiAyLjRyZW07XFxyXFxuICBoZWlnaHQ6IDIuNHJlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTByZW07XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cblxuLm5hdmlnYXRpb25fX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogNHJlbTtcbn1cbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uaGVhZGVyX19tZW51IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlcl9fbWVudSBhOmhvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDAzZjNkO1xuICB3aWR0aDogNnJlbTtcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMC4xcmVtO1xuICBsZWZ0OiAyLjlyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnZpc3VhbGx5LWhpZGRlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjbGlwLXBhdGg6IGluc2V0KDEwMCUpO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dC9IZWFkZXIvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUF5QkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBeEJGOztBQTJCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUF4QkY7QUEwQkU7RUFyQ0EsaUJBc0NnQjtFQXJDaEIsZ0JBcUN3QjtFQXBDeEIsaUJBb0M2QjtFQW5DN0IsY0FhZ0I7RUF1QmQsZ0JBQUE7QUFyQko7O0FBeUJBO0VBM0NFLGlCQTRDYztFQTNDZCxnQkEyQ3NCO0VBMUN0QixpQkEwQzJCO0VBekMzQixjQWFnQjtFQTZCaEIsa0JBQUE7QUFuQkY7QUFxQkU7RUFDRSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQW5CSjs7QUF1QkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFwQkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxuLy8gQmFja2dyb3VuZCBDb2xvclxcclxcbiRjb2xvci1wcmltYXJ5OiAjZTFkNGM5O1xcclxcbiRjb2xvci1zZWNvbmRhcnk6ICM2NjVmNTU7XFxyXFxuJGNvbG9yLWJhY2tkcm9wOiAjNDAzZjNkY2M7XFxyXFxuXFxyXFxuLy8gVGV4dCBDb2xvclxcclxcbiRjb2xvci10ZXh0LWRhcms6ICM0MDNmM2Q7XFxyXFxuJGNvbG9yLXRleHQtbGlnaHQ6ICNlMWQ0Yzk7XFxyXFxuJGNvbG9yLXRleHQtYWNjZW50OiAjYjA5MDdhO1xcclxcblxcclxcbi8vIEJvcmRlciBDb2xvcjpcXHJcXG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjYjA5MDdhO1xcclxcbiRjb2xvci1ib3JkZXItZGFyazogIzY2NWY1NTtcXHJcXG5cXG4uaGVhZGVyX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgcGFkZGluZzogMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiA0cmVtO1xcclxcblxcclxcbiAgJl9saW5rIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX21lbnUge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICBhOmhvdmVyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGNvbG9yLXRleHQtZGFyaztcXHJcXG4gICAgd2lkdGg6IDZyZW07XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogLTAuMXJlbTtcXHJcXG4gICAgbGVmdDogMi45cmVtO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi52aXN1YWxseS1oaWRkZW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDFweDtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgbWFyZ2luOiAtMXB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBjbGlwLXBhdGg6IGluc2V0KDEwMCUpO1xcclxcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2NvZmZlZS1jdXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPHNlY3Rpb24gY2xhc3M9XFxcInNlY3Rpb25cXFwiPiA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX19oZXJvXFxcIj4gPGRpdiBjbGFzcz1cXFwic2VjdGlvbl9faGVyb19pbWFnZVxcXCI+IDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX2hlcm9fY29udGVudFxcXCI+IDxoMiBjbGFzcz1cXFwiaGVhZGluZy1saWdodFxcXCI+IDxzcGFuPkVuam95PC9zcGFuPiBwcmVtaXVtIGNvZmZlZSBhdCBvdXIgY2hhcm1pbmcgY2FmZSA8L2gyPiA8cCBjbGFzcz1cXFwic2VjdGlvbl9faGVyb190ZXh0XFxcIj4gV2l0aCBpdHMgaW52aXRpbmcgYXRtb3NwaGVyZSBhbmQgZGVsaWNpb3VzIGNvZmZlZSBvcHRpb25zLCB0aGUgQ29mZmVlIEhvdXNlIFJlc291cmNlIGlzIGEgcG9wdWxhciBkZXN0aW5hdGlvbiBmb3IgY29mZmVlIGxvdmVycyBhbmQgdGhvc2Ugc2Vla2luZyBhIHdhcm0gYW5kIGludml0aW5nIHNwYWNlIHRvIGVuam95IHRoZWlyIGZhdm9yaXRlIGJldmVyYWdlLiA8L3A+IDxhIGNsYXNzPVxcXCJidXR0b24gbWVudS1idXR0b25cXFwiIGhyZWY9XFxcIi4vbWVudS5odG1sXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJ1dHRvbi10ZXh0XFxcIj5NZW51PC9zcGFuPiA8aW1nIGNsYXNzPVxcXCJidXR0b24taW1hZ2VcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwiY29mZmVlIGN1cCBpY29uXFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIi8+IDwvYT4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9zZWN0aW9uPiBcIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3ctbGVmdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29mZmVlLXNsaWRlci0xLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2NvbnRyb2wucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvY29udHJvbC0xLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Fycm93LXJpZ2h0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fKTtcbnZhciBjb2RlID0gXCI8c2VjdGlvbiBjbGFzcz1cXFwic2VjdGlvblxcXCIgaWQ9XFxcImZhdm9yaXRlXFxcIj4gPGRpdiBjbGFzcz1cXFwic2VjdGlvbl9fZmF2b3JpdGVcXFwiPiA8aDMgY2xhc3M9XFxcImhlYWRpbmctZGFya1xcXCI+Q2hvb3NlIHlvdXIgPHNwYW4+ZmF2b3JpdGU8L3NwYW4+IGNvZmZlZTwvaDM+IDxkaXYgY2xhc3M9XFxcInNsaWRlclxcXCI+IDxidXR0b24gY2xhc3M9XFxcImFycm93LWxlZnRcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwibGVmdCBhcnJvdyBpY29uXFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIi8+IDwvYnV0dG9uPiA8ZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2NvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcInNsaWRlcl9fY2FyZFxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJwaG90byBvZiBhIGdsYXNzIHdpdGggaWNlZCBjb2ZmZWVcXFwiIGRyYWdnYWJsZT1cXFwiZmFsc2VcXFwiLz4gPGg0IGNsYXNzPVxcXCJzbGlkZXJfX2NhcmRfdGl0bGVcXFwiPlPigJltb3JlcyBGcmFwcHVjY2lubzwvaDQ+IDxwIGNsYXNzPVxcXCJzbGlkZXJfX2NhcmRfdGV4dFxcXCI+IFRoaXMgbmV3IGRyaW5rIHRha2VzIGFuIGVzcHJlc3NvIGFuZCBtaXhlcyBpdCB3aXRoIGJyb3duIHN1Z2FyIGFuZCBjaW5uYW1vbiBiZWZvcmUgYmVpbmcgdG9wcGVkIHdpdGggb2F0IG1pbGsuIDwvcD4gPHAgY2xhc3M9XFxcInNsaWRlcl9fY2FyZF9wcmljZVxcXCI+JDUuNTA8L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2NvbnRyb2xzXFxcIj4gPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcImNvbnRyb2wgbGluZVxcXCIgZHJhZ2dhYmxlPVxcXCJmYWxzZVxcXCIvPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiIGFsdD1cXFwiY29udHJvbCBsaW5lXFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIi8+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gKyBcIlxcXCIgYWx0PVxcXCJjb250cm9sIGxpbmVcXFwiIGRyYWdnYWJsZT1cXFwiZmFsc2VcXFwiLz4gPC9kaXY+IDwvZGl2PiA8YnV0dG9uIGNsYXNzPVxcXCJhcnJvdy1yaWdodFxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCIgYWx0PVxcXCJyaWdodCBhcnJvdyBpY29uXFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIi8+IDwvYnV0dG9uPiA8L2Rpdj4gPC9kaXY+IDwvc2VjdGlvbj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uXFxcIiBpZD1cXFwiYWJvdXRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX19hYm91dFxcXCI+IDxoMyBjbGFzcz1cXFwiaGVhZGluZy1kYXJrXFxcIj4gUmVzb3VyY2UgaXMgPHNwYW4+dGhlIHBlcmZlY3QgYW5kIGNvenkgcGxhY2UgPC9zcGFuPndoZXJlIHlvdSBjYW4gZW5qb3kgYSB2YXJpZXR5IG9mIGhvdCBiZXZlcmFnZXMsIHJlbGF4LCBjYXRjaCB1cCB3aXRoIGZyaWVuZHMsIG9yIGdldCBzb21lIHdvcmsgZG9uZS4gPC9oMz4gPGRpdiBjbGFzcz1cXFwiaW1hZ2VzX19jb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2x1bW4tMVxcXCI+IDxkaXYgY2xhc3M9XFxcImltYWdlLTFcXFwiPjwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJpbWFnZS1zbWFsbC0xXFxcIj48L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbHVtbi0yXFxcIj4gPGRpdiBjbGFzcz1cXFwiaW1hZ2Utc21hbGwtMlxcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcImltYWdlLTJcXFwiPjwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L3NlY3Rpb24+IFwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcHBsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hbmRyb2lkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tb2JpbGUtc2NyZWVucy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIGNvZGUgPSBcIjxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uXFxcIiBpZD1cXFwiYXBwXFxcIj4gPGRpdiBjbGFzcz1cXFwic2VjdGlvbl9fYXBwXFxcIj4gPGRpdiBjbGFzcz1cXFwiYXBwX19jb2x1bW4tMVxcXCI+IDxoMyBjbGFzcz1cXFwiaGVhZGluZy1kYXJrXFxcIj4gPHNwYW4+RG93bmxvYWQ8L3NwYW4+IG91ciBhcHBzIHRvIHN0YXJ0IG9yZGVyaW5nIDwvaDM+IDxwIGNsYXNzPVxcXCJhcHBfX2NvbHVtbi0xX3RleHRcXFwiPiBEb3dubG9hZCB0aGUgUmVzb3VyY2UgYXBwIHRvZGF5IGFuZCBleHBlcmllbmNlIHRoZSBjb21mb3J0IG9mIG9yZGVyaW5nIHlvdXIgZmF2b3JpdGUgY29mZmVlIGZyb20gd2hlcmV2ZXIgeW91IGFyZSA8L3A+IDxkaXYgY2xhc3M9XFxcImFwcF9fYnV0dG9uc1xcXCI+IDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBidXR0b24tYXBwXFxcIj4gPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcImFwcCBzdG9yZSBpY29uXFxcIi8+IDxkaXYgY2xhc3M9XFxcImJ1dHRvbi1hcHBfdGV4dFxcXCI+IDxzcGFuPkF2YWlsYWJsZSBvbiB0aGU8L3NwYW4+IDxwPkFwcCBTdG9yZTwvcD4gPC9kaXY+IDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gYnV0dG9uLWFwcFxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJnb29nbGUgcGxheSBpY29uXFxcIi8+IDxkaXYgY2xhc3M9XFxcImJ1dHRvbi1hcHBfdGV4dFxcXCI+IDxzcGFuPkF2YWlsYWJsZSBvbjwvc3Bhbj4gPHA+R29vZ2xlIFBsYXk8L3A+IDwvZGl2PiA8L2J1dHRvbj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhcHBfX2NvbHVtblxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJwaG90byBvZiB0d28gbW9iaWxlIHBob25lcyB3aXRoIGNvZmZlZSBzaG9wIGFwcCBvbiB0aGUgc2NyZWVuc1xcXCIgZHJhZ2dhYmxlPVxcXCJmYWxzZVxcXCIvPiA8L2Rpdj4gPC9kaXY+IDwvc2VjdGlvbj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL3R3aXR0ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL2ZhY2Vib29rLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL3Bpbi1hbHQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvcGhvbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvY2xvY2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF81X19fKTtcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29sdW1uXFxcIj4gPGg0IGNsYXNzPVxcXCJoZWFkaW5nLWxpZ2h0XFxcIj4gU2lwLCBTYXZvciwgU21pbGUuIDxzcGFuPkl0J3MgY29mZmVlIHRpbWUhPC9zcGFuPiA8L2g0PiA8YnV0dG9uIGNsYXNzPVxcXCJzb2NpYWwtaWNvblxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJ0d2l0dGVyIGljb25cXFwiIGNsYXNzPVxcXCJpY29uXFxcIi8+IDwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJzb2NpYWwtaWNvblxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJpbnN0YWdyYW0gaWNvblxcXCIgY2xhc3M9XFxcImljb25cXFwiLz4gPC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcInNvY2lhbC1pY29uXFxcIj4gPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcImZhY2Vib29rIGljb25cXFwiIGNsYXNzPVxcXCJpY29uXFxcIi8+IDwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19jb2x1bW5cXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhY3RzXFxcIiBpZD1cXFwiY29udGFjdHNcXFwiPiA8cCBjbGFzcz1cXFwiZm9vdGVyX19jb250YWN0c190aXRsZVxcXCI+Q29udGFjdCB1czwvcD4gPHAgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNfYWRkcmVzc1xcXCI+IDxhIGhyZWY9XFxcImh0dHBzOi8vbWFwcy5hcHAuZ29vLmdsL1JKYXBZMlFWOVoxQVpqaW04XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gKyBcIlxcXCIgYWx0PVxcXCJwaW4gaWNvblxcXCIvPjg1NTggR3JlZW4gUmQuLCBMQTwvYT4gPC9wPiA8cCBjbGFzcz1cXFwiZm9vdGVyX19jb250YWN0c19waG9uZVxcXCI+IDxhIGhyZWY9XFxcInRlbDorMSg2MDMpNTU1LTAxMjNcXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCIgYWx0PVxcXCJwaG9uZSBpY29uXFxcIi8+KzEgKDYwMykgNTU1LTAxMjM8L2E+IDwvcD4gPHAgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNfc2NoZWR1bGVcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fICsgXCJcXFwiIGFsdD1cXFwiY2xvY2sgaWNvblxcXCIvPk1vbi1TYXQ6IDk6MDAgQU0g4oCTIDIzOjAwIFBNIDwvcD4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL2NvZmZlZS1jdXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImhlYWRlcl9fY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwibG9nb1xcXCI+IDxhIGhyZWY9XFxcIi4vaW5kZXguaHRtbFxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJsb2dvXFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIi8+IDxoMSBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj4gUmVzb3Vyc2UgLSB0aGUgYmVzdCBjb2ZmZWUgaG91c2UgaW4geW91ciBhcmVhIDwvaDE+PC9hPiA8L2Rpdj4gPG5hdiBjbGFzcz1cXFwiaGVhZGVyX19uYXZpZ2F0aW9uXFxcIj4gPHVsIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0XFxcIj4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmtcXFwiPiA8YSBocmVmPVxcXCIjZmF2b3JpdGVcXFwiPkZhdm9yaXRlIGNvZmZlZTwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmtcXFwiPjxhIGhyZWY9XFxcIiNhYm91dFxcXCI+QWJvdXQ8L2E+PC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmtcXFwiPjxhIGhyZWY9XFxcIiNhcHBcXFwiPk1vYmlsZSBhcHA8L2E+PC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmtcXFwiPjxhIGhyZWY9XFxcIiNjb250YWN0c1xcXCI+Q29udGFjdCB1czwvYT48L2xpPiA8L3VsPiA8L25hdj4gPGRpdiBjbGFzcz1cXFwiaGVhZGVyX19tZW51XFxcIj4gPGEgaHJlZj1cXFwiLi9tZW51Lmh0bWxcXFwiPk1lbnUgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcImNvZmZlZSBjdXAgaWNvblxcXCIvPiA8L2E+IDwvZGl2PiA8L2Rpdj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvaHRtbFRvRWxlbWVudFwiO1xyXG5pbXBvcnQgaGVybyBmcm9tIFwiLi9pbmRleC5odG1sXCI7XHJcbi8vIGltcG9ydCBCdXR0b24gZnJvbSBcIi4vLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b25zXCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBodG1sVG9FbGVtZW50KGhlcm8pO1xyXG5cclxuLy8gY29uc3QgY3VzdG9tQnV0dG9uID0gQnV0dG9uKHtcclxuLy8gICBvbkNsaWNrOiAoKSA9PiBjb25zb2xlLmxvZyhcImNsaWNrIGZyb20gSEVST1wiKSxcclxuLy8gICB0aXRsZTogXCJNZW51XCIsXHJcbi8vICAgY2xhc3NOYW1lOiBcImJ1dHRvblwiLFxyXG4vLyB9KTtcclxuLy8gY29udGVudC5hcHBlbmRDaGlsZChjdXN0b21CdXR0b24pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGVudDtcclxuIiwiaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2h0bWxUb0VsZW1lbnRcIjtcclxuaW1wb3J0IGZhdm9yaXRlIGZyb20gXCIuL2luZGV4Lmh0bWxcIjtcclxuXHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5cclxuY29uc3QgY29udGVudCA9IGh0bWxUb0VsZW1lbnQoZmF2b3JpdGUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGVudDtcclxuIiwiaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2h0bWxUb0VsZW1lbnRcIjtcclxuaW1wb3J0IGFib3V0IGZyb20gXCIuL2luZGV4Lmh0bWxcIjtcclxuXHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5cclxuY29uc3QgY29udGVudCA9IGh0bWxUb0VsZW1lbnQoYWJvdXQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGVudDtcclxuIiwiaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2h0bWxUb0VsZW1lbnRcIjtcclxuaW1wb3J0IGFwcCBmcm9tIFwiLi9pbmRleC5odG1sXCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBodG1sVG9FbGVtZW50KGFwcCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250ZW50O1xyXG4iLCJpbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvaHRtbFRvRWxlbWVudFwiO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9pbmRleC5odG1sXCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmNvbnN0IGZvb3RlciA9IGh0bWxUb0VsZW1lbnQoRm9vdGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjtcclxuIiwiaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSBcIi4uLy4uL3V0aWxzL2h0bWxUb0VsZW1lbnRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9pbmRleC5odG1sXCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmNvbnN0IGhlYWRlciA9IGh0bWxUb0VsZW1lbnQoSGVhZGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGh0bWxTdHJpbmcpIHtcclxuICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcclxuICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sU3RyaW5nO1xyXG4gIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQ7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9sYXlvdXQvSGVhZGVyXCI7XHJcbmltcG9ydCBoZXJvIGZyb20gXCIuL2xheW91dC9Db250ZW50LzAxX2hlcm9cIjtcclxuaW1wb3J0IGZhdm9yaXRlIGZyb20gXCIuL2xheW91dC9Db250ZW50LzAyX2Zhdm9yaXRlXCI7XHJcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9sYXlvdXQvQ29udGVudC8wM19hYm91dFwiO1xyXG5pbXBvcnQgYXBwIGZyb20gXCIuL2xheW91dC9Db250ZW50LzA0X2FwcFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2xheW91dC9Gb290ZXJcIjtcclxuXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3RlclwiKTtcclxuXHJcbmhlYWRlci5hcHBlbmQoSGVhZGVyKTtcclxubWFpbi5hcHBlbmQoaGVybyk7XHJcbm1haW4uYXBwZW5kKGZhdm9yaXRlKTtcclxubWFpbi5hcHBlbmQoYWJvdXQpO1xyXG5tYWluLmFwcGVuZChhcHApO1xyXG5mb290ZXIuYXBwZW5kKEZvb3Rlcik7XHJcblxyXG4vLyBpbXBvcnQgeyBjYWxjIH0gZnJvbSBcIi4vdGVzdFwiO1xyXG4vLyBjb25zb2xlLmxvZyhjYWxjKDIwMCwgNzMzKSk7XHJcblxyXG5jb25zb2xlLmxvZyhcIkFkZCBzdHlsZXMgdG8gSG9tZSBwYWdlIChleGNlcHQgZm9yIHNvbWUgaW50ZXJhY3Rpdml0eSlcIik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==