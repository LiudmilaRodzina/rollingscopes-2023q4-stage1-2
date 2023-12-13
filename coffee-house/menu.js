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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Menu/index.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Menu/index.scss ***!
  \************************************************************************************************************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/refresh.svg */ "./src/assets/icons/refresh.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/info-empty.svg */ "./src/assets/icons/info-empty.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.section__menu-coffee {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}

.header__menu span {
  display: block;
}
.header__menu a {
  display: none;
  cursor: default;
}
.header__menu:after {
  transform: scale(1);
}
@media (max-width: 768px) {
  .header__menu span {
    display: none;
  }
  .header__menu a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    cursor: pointer;
  }
}

.navigation__list_link.menu {
  display: block;
}

.navigation__list_link.home {
  display: none;
}

.heading-dark {
  font-size: 6rem;
  font-weight: 600;
  line-height: 125%;
  color: #403f3d;
  text-align: center;
  max-width: 80rem;
}
@media (max-width: 720px) {
  .heading-dark {
    font-size: 5rem;
    font-weight: 600;
    line-height: 115%;
    color: #403f3d;
  }
}
@media (max-width: 420px) {
  .heading-dark {
    font-size: 4.2rem;
    font-weight: 600;
    line-height: 115%;
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

.tabs__container {
  display: flex;
  justify-content: center;
  gap: 1.7rem;
}
@media (max-width: 420px) {
  .tabs__container {
    gap: 0.8rem;
  }
}

.tab {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #403f3d;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  background-color: #e3d5c9;
  border: 1px solid #c1b6ad;
  border-radius: 10rem;
  gap: 0.8rem;
  padding: 0.8rem 1.6rem 0.8rem 0.8rem;
  transition: all 0.5s ease-in-out;
}

.tab_icon {
  display: block;
  background-color: #c1b6ad;
  width: 3rem;
  height: 3rem;
  border-radius: 10rem;
  padding: 0 0.7rem;
  transition: all 0.5s ease-in-out;
}
.tab_icon img {
  max-width: 100%;
  width: 1.6rem;
  height: 2.8rem;
}

.tab--active {
  background-color: #665f55;
  color: #e1d4c9;
}

.tab--active .tab_icon {
  background-color: #e3d5c9;
}

@media (hover: hover) and (pointer: fine) {
  .tab:hover,
  .tab:active {
    cursor: pointer;
    background-color: #665f55;
    color: #e1d4c9;
  }
  .tab:hover .tab_icon {
    background-color: #e3d5c9;
  }
}
.articles__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 3.9rem;
  column-gap: 4rem;
  margin-top: -2px;
  padding-bottom: 6rem;
}
@media (max-width: 1220px) {
  .articles__container {
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 0rem;
  }
}
@media (max-width: 720px) {
  .articles__container {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 420px) {
  .articles__container {
    row-gap: 3.8rem;
  }
}

.article {
  display: flex;
  flex-direction: column;
  border: 1px solid #c1b6ad;
  border-radius: 4rem;
  max-width: 31rem;
  transition: all 0.4s ease-in-out;
}
.article_hidden {
  display: none;
}
@media (max-width: 1024px) {
  .article:nth-child(n+5):nth-child(-n+8) {
    display: none;
  }
  .article:nth-child(n+17):nth-child(-n+20) {
    display: none;
  }
}

@media (hover: hover) and (pointer: fine) {
  .article:hover {
    cursor: pointer;
  }
  .article:hover .image {
    transform: scale(0.9);
  }
}
.image__container {
  position: relative;
  overflow: hidden;
  height: 31rem;
  border-radius: 4rem;
}

.image {
  position: absolute;
  top: -1.5rem;
  right: -1.6rem;
  transition: all 0.5s ease-in-out;
}

.info__container {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 125%;
  color: #403f3d;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.2rem;
  padding: 1.9rem;
  min-height: 19.6rem;
}

.info__title {
  font-size: 2.4rem;
}

.info__description {
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;
  color: #403f3d;
}

.info__price {
  margin: auto 0 0 0;
}

.info__container .tab {
  display: none;
}

@media (max-width: 1220px) {
  .refresh-btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border: 1px solid #665f55;
    border-radius: 50%;
    grid-column: 1/-1;
    justify-self: center;
    margin-bottom: 10rem;
  }
  .refresh-btn span {
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
  }
  .refresh-btn__icon {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  }
}
.overlay {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(64, 63, 61, 0.8);
  transition: opacity 0.3s ease-out, visibility 0.3s ease-out, transform 0.3s ease-out;
}

.modal {
  position: relative;
  background-color: #e3d5c9;
  overflow: auto;
  max-width: 80rem;
  min-height: 50.4rem;
  border-radius: 4rem;
  padding: 1.6rem;
  color: #403f3d;
}
@media (max-width: 1024px) {
  .modal {
    max-width: 68.8rem;
    height: 62.6rem;
    margin-bottom: 2rem;
  }
}
@media (max-width: 720px) {
  .modal {
    max-width: 34.2rem;
  }
}
.modal__wrapper {
  display: flex;
  gap: 2rem;
}
.modal__image {
  border-radius: 4rem;
  max-width: 31rem;
}
.modal__image_container {
  max-width: 34rem;
  height: 34rem;
}
@media (max-width: 720px) {
  .modal__image_container {
    display: none;
  }
}
.modal__info {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.modal__info_container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
@media (max-width: 720px) {
  .modal__info_container {
    width: 31rem;
  }
}
.modal__title {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 125%;
  color: #403f3d;
}
.modal__title_size, .modal__title_add {
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;
  color: #403f3d;
  margin-bottom: -1.2rem;
}
.modal__price_total {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 125%;
  color: #403f3d;
  padding-bottom: 1.8rem;
}
.modal__description {
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;
  color: #403f3d;
}
.modal__price {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c1b6ad;
}
.modal__legend {
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  margin-top: -0.8rem;
  width: 43.8rem;
}
.modal__legend_text {
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%;
  color: #403f3d;
  width: 41.4rem;
}
@media (max-width: 1024px) {
  .modal__legend {
    width: 32.6rem;
  }
  .modal__legend_text {
    width: 30.2rem;
  }
}
@media (max-width: 720px) {
  .modal__legend {
    width: 31rem;
  }
}
.modal__close {
  display: block;
  width: 100%;
  border: 1px solid #665f55;
  background-color: #e3d5c9;
  border-radius: 10rem;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 1.5rem;
}
.modal__size input, .modal__add input {
  display: none;
}
.modal__size, .modal__add {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  align-self: stretch;
}
.modal__size_option, .modal__add_option {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 0.7rem 1.5rem 0.7rem 0.7rem;
  gap: 0.8rem;
  border-radius: 10rem;
  border: 1px solid #c1b6ad;
  cursor: pointer;
}
.modal__size_option > .icon, .modal__add_option > .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.6rem;
  border-radius: 50%;
  background-color: #c1b6ad;
  text-transform: uppercase;
  color: #403f3d;
}
.modal__size_option > .size_title, .modal__add_option > .size_title {
  font-size: 1.6rem;
}

.checked {
  color: #e1d4c9;
  background-color: #665f55;
  border: 1px solid #665f55;
  cursor: default;
}

.icon-info {
  width: 16px;
  height: 16px;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) center no-repeat;
}`, "",{"version":3,"sources":["webpack://./src/layout/Menu/index.scss"],"names":[],"mappings":"AAgEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AA/DF;;AAkEE;EACE,cAAA;AA/DJ;AAiEE;EACE,aAAA;EACA,eAAA;AA/DJ;AAiEE;EACE,mBAAA;AA/DJ;AAUE;EAyDE;IACE,aAAA;EAhEJ;EAkEE;IACE,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,WAAA;IACA,eAAA;EAhEJ;AACF;;AAmEA;EACE,cAAA;AAhEF;;AAkEA;EACE,aAAA;AA/DF;;AAiEA;EApGE,eAqGc;EApGd,gBAoGoB;EAnGpB,iBAmGyB;EAlGzB,cA6CgB;EAsDhB,kBAAA;EACA,gBAAA;AA3DF;AAbE;EAqEF;IApGE,eA0GgB;IAzGhB,gBAyGsB;IAxGtB,iBAwG2B;IAvG3B,cA6CgB;EAGhB;AACF;AAfE;EA+DF;IApGE,iBA6GgB;IA5GhB,gBA4GwB;IA3GxB,iBA2G6B;IA1G7B,cA6CgB;EAWhB;AACF;AAvBE;EA+DF;IApGE,iBAgHgB;IA/GhB,gBA+GwB;IA9GxB,iBA8G6B;IA7G7B,cA6CgB;EAmBhB;AACF;AA+CE;EACE,kBAAA;EACA,cAnEgB;AAsBpB;;AAgDA;EACE,aAAA;EACA,uBAAA;EACA,WAAA;AA7CF;AAzCE;EAmFF;IAMI,WAAA;EA5CF;AACF;;AA8CA;EAjIE,iBAkIc;EAjId,gBAiIsB;EAhItB,iBAgI2B;EA/H3B,cA6CgB;EAmFhB,0BAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,yBA9Fc;EA+Fd,yBAAA;EACA,oBAAA;EACA,WAAA;EACA,oCAAA;EACA,gCAAA;AAxCF;;AA0CA;EACE,cAAA;EACA,yBA7FmB;EA8FnB,WAAA;EACA,YAAA;EACA,oBAAA;EACA,iBAAA;EACA,gCAAA;AAvCF;AAwCE;EACE,eAAA;EACA,aAAA;EACA,cAAA;AAtCJ;;AA0CA;EACE,yBApHgB;EAqHhB,cAhHiB;AAyEnB;;AAyCA;EACE,yBAzHc;AAmFhB;;AAyCA;EACE;;IAEE,eAAA;IACA,yBA/Hc;IAgId,cA3He;EAqFjB;EAwCA;IACE,yBApIY;EA8Fd;AACF;AA0CA;EACE,aAAA;EACA,qCAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,oBAAA;AAxCF;AArIE;EAuKF;IASI,qCAAA;IACA,oBAAA;EAvCF;AACF;AAzHE;EAqJF;IAaI,0BAAA;EArCF;AACF;AAxHE;EA+IF;IAgBI,eAAA;EAnCF;AACF;;AAqCA;EACE,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gCAAA;AAlCF;AAoCE;EACE,aAAA;AAlCJ;AA3JE;EAiME;IACE,aAAA;EAnCJ;EAqCE;IACE,aAAA;EAnCJ;AACF;;AAsCA;EACE;IACE,eAAA;EAnCF;EAqCA;IACE,qBAAA;EAnCF;AACF;AAqCA;EACE,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;AAnCF;;AAqCA;EACE,kBAAA;EACA,YAAA;EACA,cAAA;EACA,gCAAA;AAlCF;;AAoCA;EAhPE,iBAiPc;EAhPd,gBAgPsB;EA/OtB,iBA+O2B;EA9O3B,cA6CgB;EAkMhB,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;AA9BF;;AAgCA;EACE,iBAAA;AA7BF;;AA+BA;EA5PE,iBA6Pc;EA5Pd,gBA4PsB;EA3PtB,iBA2P2B;EA1P3B,cA6CgB;AAoLlB;;AA2BA;EACE,kBAAA;AAxBF;;AA0BA;EACE,aAAA;AAvBF;;AA/NE;EAyPA;IACE,aAAA;IACA,6BAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;IACA,yBAAA;IACA,kBAAA;IACA,iBAAA;IACA,oBAAA;IACA,oBAAA;EAtBF;EAwBE;IACE,qBAAA;IACA,aAAA;IACA,cAAA;EAtBJ;EAwBE;IACE,mDAAA;EAtBJ;AACF;AA2BA;EACE,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,uCA1Pe;EA2Pf,oFAAA;AAzBF;;AA4BA;EACE,kBAAA;EACA,yBAlQc;EAmQd,cAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,cAnQgB;AA0OlB;AAvQE;EAwRF;IAWI,kBAAA;IACA,eAAA;IACA,mBAAA;EAxBF;AACF;AAlQE;EA4QF;IAgBI,kBAAA;EAtBF;AACF;AAwBE;EACE,aAAA;EACA,SAAA;AAtBJ;AAwBE;EACE,mBAAA;EACA,gBAAA;AAtBJ;AAwBI;EACE,gBAAA;EACA,aAAA;AAtBN;AAnRE;EAuSE;IAII,aAAA;EApBN;AACF;AAuBE;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AArBJ;AAuBE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AArBJ;AAlSE;EAoTA;IAMI,YAAA;EApBJ;AACF;AAsBE;EA5VA,iBA6VgB;EA5VhB,gBA4VwB;EA3VxB,iBA2V6B;EA1V7B,cA6CgB;AA4RlB;AAmBI;EA/VF,iBAiWkB;EAhWlB,gBAgW0B;EA/V1B,iBA+V+B;EA9V/B,cA6CgB;EAkTZ,sBAAA;AAfN;AAkBE;EArWA,iBAsWgB;EArWhB,gBAqWwB;EApWxB,iBAoW6B;EAnW7B,cA6CgB;EAuTd,sBAAA;AAbJ;AAeE;EAzWA,iBA0WgB;EAzWhB,gBAyWwB;EAxWxB,iBAwW6B;EAvW7B,cA6CgB;AAgTlB;AAaE;EACE,aAAA;EACA,8BAAA;EACA,gCAAA;AAXJ;AAcE;EACE,aAAA;EACA,8BAAA;EACA,WAAA;EACA,mBAAA;EACA,cAAA;AAZJ;AAcI;EA1XF,eA2XkB;EA1XlB,gBA0XwB;EAzXxB,iBAyX6B;EAxX7B,cA6CgB;EA4UZ,cAAA;AATN;AAhWE;EAgWA;IAaI,cAAA;EATJ;EAWI;IACE,cAAA;EATN;AACF;AA5VE;EAoVA;IAoBI,YAAA;EARJ;AACF;AAWE;EACE,cAAA;EACA,WAAA;EACA,yBAAA;EACA,yBApWY;EAqWZ,oBAAA;EACA,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AATJ;AAeE;EAEE,aAAA;AAdJ;AAiBE;EAEE,aAAA;EACA,eAAA;EACA,WAAA;EACA,mBAAA;AAhBJ;AAkBI;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,oCAAA;EACA,WAAA;EACA,oBAAA;EACA,yBAAA;EACA,eAAA;AAhBN;AAkBM;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBApYa;EAqYb,yBAAA;EACA,cA3YU;AA2XlB;AAkBM;EACE,iBAAA;AAhBR;;AAqBA;EACE,cAnZiB;EAoZjB,yBAzZgB;EA0ZhB,yBAAA;EACA,eAAA;AAlBF;;AAoBA;EACE,WAAA;EACA,YAAA;EACA,oEAAA;AAjBF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n.section__menu-coffee {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 4rem;\r\n}\r\n.header__menu {\r\n  span {\r\n    display: block;\r\n  }\r\n  a {\r\n    display: none;\r\n    cursor: default;\r\n  }\r\n  &:after {\r\n    transform: scale(1);\r\n  }\r\n\r\n  @include media-tablet-port {\r\n    span {\r\n      display: none;\r\n    }\r\n    a {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      gap: 1.6rem;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n}\r\n.navigation__list_link.menu {\r\n  display: block;\r\n}\r\n.navigation__list_link.home {\r\n  display: none;\r\n}\r\n.heading-dark {\r\n  @include text(6rem, 600, 125%, $color-text-dark);\r\n  text-align: center;\r\n  max-width: 80rem;\r\n\r\n  @include media-mobile-large {\r\n    @include text(5rem, 600, 115%, $color-text-dark);\r\n  }\r\n  @include media-mobile {\r\n    @include text(4.2rem, 600, 115%, $color-text-dark);\r\n  }\r\n  @include media-mobile {\r\n    @include text(3.2rem, 600, 125%, $color-text-dark);\r\n  }\r\n\r\n  span {\r\n    font-style: italic;\r\n    color: $color-text-accent;\r\n  }\r\n}\r\n.tabs__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1.7rem;\r\n\r\n  @include media-mobile {\r\n    gap: 0.8rem;\r\n  }\r\n}\r\n.tab {\r\n  @include text(1.6rem, 600, 150%, $color-text-dark);\r\n  text-transform: capitalize;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: auto;\r\n  height: auto;\r\n  background-color: $color-primary;\r\n  border: 1px solid $color-border-light;\r\n  border-radius: 10rem;\r\n  gap: 0.8rem;\r\n  padding: 0.8rem 1.6rem 0.8rem 0.8rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.tab_icon {\r\n  display: block;\r\n  background-color: $color-border-light;\r\n  width: 3rem;\r\n  height: 3rem;\r\n  border-radius: 10rem;\r\n  padding: 0 0.7rem;\r\n  transition: all 0.5s ease-in-out;\r\n  img {\r\n    max-width: 100%;\r\n    width: 1.6rem;\r\n    height: 2.8rem;\r\n  }\r\n}\r\n\r\n.tab--active {\r\n  background-color: $color-secondary;\r\n  color: $color-text-light;\r\n}\r\n.tab--active .tab_icon {\r\n  background-color: $color-primary;\r\n}\r\n\r\n@media (hover: hover) and (pointer: fine) {\r\n  .tab:hover,\r\n  .tab:active {\r\n    cursor: pointer;\r\n    background-color: $color-secondary;\r\n    color: $color-text-light;\r\n  }\r\n  .tab:hover .tab_icon {\r\n    background-color: $color-primary;\r\n  }\r\n}\r\n\r\n// Articles\r\n.articles__container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  row-gap: 3.9rem;\r\n  column-gap: 4rem;\r\n  margin-top: -2px;\r\n  padding-bottom: 6rem;\r\n\r\n  @include media-desktop {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding-bottom: 0rem;\r\n  }\r\n  @include media-mobile-large {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  @include media-mobile {\r\n    row-gap: 3.8rem;\r\n  }\r\n}\r\n.article {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid $color-border-light;\r\n  border-radius: 4rem;\r\n  max-width: 31rem;\r\n  transition: all 0.4s ease-in-out;\r\n\r\n  &_hidden {\r\n    display: none;\r\n  }\r\n\r\n  @include media-tablet-land {\r\n    &:nth-child(n + 5):nth-child(-n + 8) {\r\n      display: none;\r\n    }\r\n    &:nth-child(n + 17):nth-child(-n + 20) {\r\n      display: none;\r\n    }\r\n  }\r\n}\r\n@media (hover: hover) and (pointer: fine) {\r\n  .article:hover {\r\n    cursor: pointer;\r\n  }\r\n  .article:hover .image {\r\n    transform: scale(0.9);\r\n  }\r\n}\r\n.image__container {\r\n  position: relative;\r\n  overflow: hidden;\r\n  height: 31rem;\r\n  border-radius: 4rem;\r\n}\r\n.image {\r\n  position: absolute;\r\n  top: -1.5rem;\r\n  right: -1.6rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.info__container {\r\n  @include text(2.4rem, 600, 125%, $color-text-dark);\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  gap: 1.2rem;\r\n  padding: 1.9rem;\r\n  min-height: 19.6rem;\r\n}\r\n.info__title {\r\n  font-size: 2.4rem;\r\n}\r\n.info__description {\r\n  @include text(1.6rem, 400, 150%, $color-text-dark);\r\n}\r\n.info__price {\r\n  margin: auto 0 0 0;\r\n}\r\n.info__container .tab {\r\n  display: none;\r\n}\r\n@include media-desktop {\r\n  .refresh-btn {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    width: 6rem;\r\n    height: 6rem;\r\n    border: 1px solid $color-border-dark;\r\n    border-radius: 50%;\r\n    grid-column: 1/-1;\r\n    justify-self: center;\r\n    margin-bottom: 10rem;\r\n\r\n    span {\r\n      display: inline-block;\r\n      width: 2.4rem;\r\n      height: 2.4rem;\r\n    }\r\n    &__icon {\r\n      background: url(./../../assets/icons/refresh.svg);\r\n    }\r\n  }\r\n}\r\n\r\n// Modal\r\n.overlay {\r\n  position: fixed;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: $color-backdrop;\r\n  transition: opacity 0.3s ease-out, visibility 0.3s ease-out,\r\n    transform 0.3s ease-out;\r\n}\r\n.modal {\r\n  position: relative;\r\n  background-color: $color-primary;\r\n  overflow: auto;\r\n  max-width: 80rem;\r\n  min-height: 50.4rem;\r\n  border-radius: 4rem;\r\n  padding: 1.6rem;\r\n  color: $color-text-dark;\r\n\r\n  @include media-tablet-land {\r\n    max-width: 68.8rem;\r\n    height: 62.6rem;\r\n    margin-bottom: 2rem;\r\n  }\r\n  @include media-mobile-large {\r\n    max-width: 34.2rem;\r\n  }\r\n\r\n  &__wrapper {\r\n    display: flex;\r\n    gap: 2rem;\r\n  }\r\n  &__image {\r\n    border-radius: 4rem;\r\n    max-width: 31rem;\r\n\r\n    &_container {\r\n      max-width: 34rem;\r\n      height: 34rem;\r\n      @include media-mobile-large {\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n  &__info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.2rem;\r\n  }\r\n  &__info_container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n\r\n    @include media-mobile-large {\r\n      width: 31rem;\r\n    }\r\n  }\r\n  &__title {\r\n    @include text(2.4rem, 600, 125%, $color-text-dark);\r\n\r\n    &_size,\r\n    &_add {\r\n      @include text(1.6rem, 400, 150%, $color-text-dark);\r\n      margin-bottom: -1.2rem;\r\n    }\r\n  }\r\n  &__price_total {\r\n    @include text(2.4rem, 600, 125%, $color-text-dark);\r\n    padding-bottom: 1.8rem;\r\n  }\r\n  &__description {\r\n    @include text(1.6rem, 400, 150%, $color-text-dark);\r\n  }\r\n\r\n  &__price {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid $color-border-light;\r\n  }\r\n\r\n  &__legend {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 0.8rem;\r\n    margin-top: -0.8rem;\r\n    width: 43.8rem;\r\n\r\n    &_text {\r\n      @include text(1rem, 600, 140%, $color-text-dark);\r\n      width: 41.4rem;\r\n    }\r\n\r\n    @include media-tablet-land {\r\n      width: 32.6rem;\r\n\r\n      &_text {\r\n        width: 30.2rem;\r\n      }\r\n    }\r\n    @include media-mobile-large {\r\n      width: 31rem;\r\n    }\r\n  }\r\n\r\n  &__close {\r\n    display: block;\r\n    width: 100%;\r\n    border: 1px solid $color-border-dark;\r\n    background-color: $color-primary;\r\n    border-radius: 10rem;\r\n    padding: 1rem;\r\n    font-size: 1.6rem;\r\n    font-weight: 600;\r\n    margin-top: 1.5rem;\r\n\r\n    @include media-mobile-large {\r\n    }\r\n  }\r\n\r\n  &__size input,\r\n  &__add input {\r\n    display: none;\r\n  }\r\n\r\n  &__size,\r\n  &__add {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 0.9rem;\r\n    align-self: stretch;\r\n\r\n    &_option {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      font-weight: 600;\r\n      padding: 0.7rem 1.5rem 0.7rem 0.7rem;\r\n      gap: 0.8rem;\r\n      border-radius: 10rem;\r\n      border: 1px solid $color-border-light;\r\n      cursor: pointer;\r\n\r\n      & > .icon {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        width: 3rem;\r\n        height: 3rem;\r\n        font-size: 1.6rem;\r\n        border-radius: 50%;\r\n        background-color: $color-border-light;\r\n        text-transform: uppercase;\r\n        color: $color-text-dark;\r\n      }\r\n      & > .size_title {\r\n        font-size: 1.6rem;\r\n      }\r\n    }\r\n  }\r\n}\r\n.checked {\r\n  color: $color-text-light;\r\n  background-color: $color-secondary;\r\n  border: 1px solid $color-secondary;\r\n  cursor: default;\r\n}\r\n.icon-info {\r\n  width: 16px;\r\n  height: 16px;\r\n  background: url(./../../assets/icons/info-empty.svg) center no-repeat;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/menu.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/menu.scss ***!
  \***********************************************************************************************************************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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

/***/ "./src/layout/Menu/index.html":
/*!************************************!*\
  !*** ./src/layout/Menu/index.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/icon-coffee.svg */ "./src/assets/icons/icon-coffee.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/icon-tea.svg */ "./src/assets/icons/icon-tea.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/icon-dessert.svg */ "./src/assets/icons/icon-dessert.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<section class=\"section\"> <div class=\"section__menu-coffee\"> <h3 class=\"heading-dark\"> Behind each of our cups hides an <span>amazing surprise</span> </h3> <div class=\"tabs__container\"> <button class=\"tab tab--active\"> <span class=\"tab_icon coffee-icon\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\"/> </span> Coffee </button> <button class=\"tab\"> <span class=\"tab_icon tea-icon\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"/> </span>Tea </button> <button class=\"tab\"> <span class=\"tab_icon dessert-icon\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"/> </span>Dessert </button> </div> <div class=\"articles__container\"></div> <div class=\"refresh-btn\"> <span class=\"refresh-btn__icon\"></span> </div> </div> </section> ";
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

/***/ "./src/layout/Menu/index.scss":
/*!************************************!*\
  !*** ./src/layout/Menu/index.scss ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/layout/Menu/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/menu.scss":
/*!***********************!*\
  !*** ./src/menu.scss ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/images/menu-images.js":
/*!******************************************!*\
  !*** ./src/assets/images/menu-images.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imgCoffee1: () => (/* reexport default export from named module */ _coffee_1_png__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   imgCoffee2: () => (/* reexport default export from named module */ _coffee_2_png__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   imgCoffee3: () => (/* reexport default export from named module */ _coffee_3_png__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   imgCoffee4: () => (/* reexport default export from named module */ _coffee_4_png__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   imgCoffee5: () => (/* reexport default export from named module */ _coffee_5_png__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   imgCoffee6: () => (/* reexport default export from named module */ _coffee_6_png__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   imgCoffee7: () => (/* reexport default export from named module */ _coffee_7_png__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   imgCoffee8: () => (/* reexport default export from named module */ _coffee_8_png__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   imgDessert1: () => (/* reexport default export from named module */ _dessert_1_png__WEBPACK_IMPORTED_MODULE_12__),
/* harmony export */   imgDessert2: () => (/* reexport default export from named module */ _dessert_2_png__WEBPACK_IMPORTED_MODULE_13__),
/* harmony export */   imgDessert3: () => (/* reexport default export from named module */ _dessert_3_png__WEBPACK_IMPORTED_MODULE_14__),
/* harmony export */   imgDessert4: () => (/* reexport default export from named module */ _dessert_4_png__WEBPACK_IMPORTED_MODULE_15__),
/* harmony export */   imgDessert5: () => (/* reexport default export from named module */ _dessert_5_png__WEBPACK_IMPORTED_MODULE_16__),
/* harmony export */   imgDessert6: () => (/* reexport default export from named module */ _dessert_6_png__WEBPACK_IMPORTED_MODULE_17__),
/* harmony export */   imgDessert7: () => (/* reexport default export from named module */ _dessert_7_png__WEBPACK_IMPORTED_MODULE_18__),
/* harmony export */   imgDessert8: () => (/* reexport default export from named module */ _dessert_8_png__WEBPACK_IMPORTED_MODULE_19__),
/* harmony export */   imgTea1: () => (/* reexport default export from named module */ _tea_1_png__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   imgTea2: () => (/* reexport default export from named module */ _tea_2_png__WEBPACK_IMPORTED_MODULE_9__),
/* harmony export */   imgTea3: () => (/* reexport default export from named module */ _tea_3_png__WEBPACK_IMPORTED_MODULE_10__),
/* harmony export */   imgTea4: () => (/* reexport default export from named module */ _tea_4_png__WEBPACK_IMPORTED_MODULE_11__)
/* harmony export */ });
/* harmony import */ var _coffee_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coffee-1.png */ "./src/assets/images/coffee-1.png");
/* harmony import */ var _coffee_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coffee-2.png */ "./src/assets/images/coffee-2.png");
/* harmony import */ var _coffee_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coffee-3.png */ "./src/assets/images/coffee-3.png");
/* harmony import */ var _coffee_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coffee-4.png */ "./src/assets/images/coffee-4.png");
/* harmony import */ var _coffee_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coffee-5.png */ "./src/assets/images/coffee-5.png");
/* harmony import */ var _coffee_6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coffee-6.png */ "./src/assets/images/coffee-6.png");
/* harmony import */ var _coffee_7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coffee-7.png */ "./src/assets/images/coffee-7.png");
/* harmony import */ var _coffee_8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coffee-8.png */ "./src/assets/images/coffee-8.png");
/* harmony import */ var _tea_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tea-1.png */ "./src/assets/images/tea-1.png");
/* harmony import */ var _tea_2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tea-2.png */ "./src/assets/images/tea-2.png");
/* harmony import */ var _tea_3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tea-3.png */ "./src/assets/images/tea-3.png");
/* harmony import */ var _tea_4_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tea-4.png */ "./src/assets/images/tea-4.png");
/* harmony import */ var _dessert_1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dessert-1.png */ "./src/assets/images/dessert-1.png");
/* harmony import */ var _dessert_2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dessert-2.png */ "./src/assets/images/dessert-2.png");
/* harmony import */ var _dessert_3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dessert-3.png */ "./src/assets/images/dessert-3.png");
/* harmony import */ var _dessert_4_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dessert-4.png */ "./src/assets/images/dessert-4.png");
/* harmony import */ var _dessert_5_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dessert-5.png */ "./src/assets/images/dessert-5.png");
/* harmony import */ var _dessert_6_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dessert-6.png */ "./src/assets/images/dessert-6.png");
/* harmony import */ var _dessert_7_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dessert-7.png */ "./src/assets/images/dessert-7.png");
/* harmony import */ var _dessert_8_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dessert-8.png */ "./src/assets/images/dessert-8.png");
























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

/***/ "./src/layout/Menu/Article.js":
/*!************************************!*\
  !*** ./src/layout/Menu/Article.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Article: () => (/* binding */ Article)
/* harmony export */ });
class Article {
  constructor({ id, name, urlToImage, description, price, category }) {
    this.id = id;
    this.name = name;
    this.urlToImage = urlToImage;
    this.description = description;
    this.price = price;
    this.category = category;
  }

  generateArticle() {
    let template = "";
    let article = document.createElement("article");
    article.className = "article";
    article.setAttribute("data-id", this.id);
    template += `<div class="image__container">`;
    template += `<img src=${this.urlToImage} class="image" alt="Photo of ${this.name}" />`;
    template += `</div>`;
    template += `<div class="info__container">`;
    template += `<h3 class="info__title">${this.name}</h3>`;
    template += `<p class="info__description">${this.description}</p>`;
    this.price && (template += `<p class="info__price">$${this.price}</p>`);
    this.category && (template += `<p class="tab">${this.category}</p>`);
    template += `</div>`;
    article.innerHTML = template;
    return article;
  }
}


/***/ }),

/***/ "./src/layout/Menu/Modal.js":
/*!**********************************!*\
  !*** ./src/layout/Menu/Modal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
class Modal {
  constructor(
    classes,
    { id, name, urlToImage, description, price, category, sizes, additives }
  ) {
    this.classes = classes;
    this.id = id;
    this.name = name;
    this.urlToImage = urlToImage;
    this.description = description;
    this.price = price;
    this.category = category;
    this.sizes = sizes;
    this.additives = additives;
    this.overlay = "";
    this.modal = "";
  }

  init(content) {
    this.overlay = this.createDomNode(this.overlay, "div", "overlay");
    this.modal = this.createDomNode(this.modal, "div", "modal", this.classes);
    document.body.append(this.overlay);
    this.overlay.append(this.modal);
    this.setContent(content);
    this.overlay.addEventListener("click", this.closeModal);

    this.openModal();
  }
  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }
  setContent(content) {
    if (typeof content === "string") {
      this.modal.innerHTML = content;
    } else {
      this.modal.innerHTML = "";
      this.modal.append(content);
    }
  }
  generateContent() {
    let template = "";
    let article = document.createElement("div");
    article.className = "modal__wrapper";

    template += `
    <div class="modal__image_container">
    <img
      src=${this.urlToImage}
      alt="Photo of ${this.name}"
      class="modal__image"
    />
  </div>
  <div class="modal__info_container">
    <div class="modal__info">
      <h3 class="modal__title">${this.name}</h3>
      <p class="modal__description">
      ${this.description}
      </p>
    </div>
    <p class="modal__title_size">Size</p>

    <form class="modal__size">
      <input type="radio" name="size" value="0.00" id="size-s" checked />
      <label for="size-s" class="modal__size_option checked">
        <span class="icon">${Object.keys(this.sizes)[0]}</span>
        <span class="size_title">${Object.values(this.sizes)[0].size}</span>
      </label>

      <input type="radio" name="size" value="0.50" id="size-m" />
      <label for="size-m" class="modal__size_option">
        <span class="icon">${Object.keys(this.sizes)[1]}</span>
        <span class="size_title">${Object.values(this.sizes)[1].size}</span>
      </label>

      <input type="radio" name="size" value="1.00" id="size-l" />
      <label for="size-l" class="modal__size_option">
        <span class="icon">${Object.keys(this.sizes)[2]}</span>
        <span class="size_title">${Object.values(this.sizes)[2].size}</span>
      </label>
    </form>

    <p class="modal__title_add">Additives</p>
    
    <form class="modal__add">
      <input type="radio" name="add" value="0.50" id="add-1" />
      <label for="add-1" class="modal__add_option">
        <span class="icon">1</span>
        <span class="size_title">${this.additives[0].name}</span>
      </label>
      <input type="radio" name="add" value="0.50" id="add-2" />
      <label for="add-2" class="modal__add_option">
        <span class="icon">2</span>
        <span class="size_title">${this.additives[1].name}</span>
      </label>
      <input type="radio" name="add" value="0.50" id="add-2" />
      <label for="add-2" class="modal__add_option">
        <span class="icon">3</span>
        <span class="size_title">${this.additives[2].name}</span>
      </label>
    </form>
    <div class="modal__price">
      <h3 class="modal__title">Total:</h3>
      <div class="modal__price_total">$${this.price}</div>
    </div>
    <div class="modal__legend">
      <span class="icon-info"></span>
      <p class="modal__legend_text">
        The cost is not final. Download our mobile app to see the final
        price and place your order. Earn loyalty points and enjoy
        your favorite coffee with up to 20% discount.
      </p>
    </div>
    <button class="modal__close">Close</button>
  </div>
  `;
    article.innerHTML = template;
    return article;
  }
  renderModal() {
    let content = this.generateContent();
    this.init(content);
  }
  openModal() {
    document.body.append(this.overlay);
    this.overlay.append(this.modal);
    document.querySelector("body").classList.add("no-scroll");
  }
  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains("overlay") || classes.contains("modal__close")) {
      document.querySelector(".overlay").remove();
      document.querySelector("body").classList.remove("no-scroll");
    }
  }
}


/***/ }),

/***/ "./src/layout/Menu/index.js":
/*!**********************************!*\
  !*** ./src/layout/Menu/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/htmlToElement */ "./src/utils/htmlToElement.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/layout/Menu/index.html");
/* harmony import */ var _productsData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productsData.js */ "./src/layout/Menu/productsData.js");
/* harmony import */ var _Article_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article.js */ "./src/layout/Menu/Article.js");
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal.js */ "./src/layout/Menu/Modal.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/layout/Menu/index.scss");








const menu = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"]);

document.addEventListener("DOMContentLoaded", () => {
  const renderArticlesToDom = () => {
    let articlesWrapper = getArticlesWrapper();
    generateArticles(_productsData_js__WEBPACK_IMPORTED_MODULE_2__["default"]).forEach((article) => {
      articlesWrapper.append(article.generateArticle());
    });
  };

  function getArticlesWrapper() {
    const articlesContainer = document.querySelector(".articles__container");
    articlesContainer.innerHTML = "";
    return articlesContainer;
  }

  function generateArticles(data) {
    let articles = [];
    data.forEach((article) => {
      articles.push(new _Article_js__WEBPACK_IMPORTED_MODULE_3__.Article(article));
    });
    return articles;
  }

  if (_productsData_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    renderArticlesToDom();
  }

  const addTabsClickHandler = () => {
    document
      .querySelector(".tabs__container")
      .addEventListener("click", (e) => {
        if (e.target.classList.contains("tab")) {
          let clickedTab = e.target.closest(".tab");
          console.log(clickedTab);
          removeTabSelection();
          addTabSelection(clickedTab);
          filterMenuBySelectedTab(clickedTab.innerText.toLowerCase());
        }
      });
  };
  addTabsClickHandler();

  const removeTabSelection = () => {
    let tabs = document.querySelectorAll(".tabs__container .tab");
    tabs.forEach((tab) => {
      tab.classList.remove("tab--active");
    });
  };

  const addTabSelection = (clickedTab) => {
    clickedTab.classList.add("tab--active");
  };

  function filterMenuBySelectedTab(clickedTab) {
    let articles = document.querySelectorAll(".article");
    articles.forEach((article) => {
      article.classList.add("article_hidden");

      article.querySelectorAll(".tab").forEach((tab) => {
        if (tab.innerHTML === clickedTab) {
          article.classList.remove("article_hidden");
        }
      });
    });
  }

  // modal handlers
  const addArticleClickHandler = () => {
    document
      .querySelector(".articles__container")
      .addEventListener("click", (e) => {
        if (e.target.closest(".article")) {
          let clickedArticleId = e.target
            .closest(".article")
            .getAttribute("data-id");
          let clickedArticleData = getClickedData(clickedArticleId);

          renderArticleModalWindow(clickedArticleData);
        }
      });
  };
  addArticleClickHandler();

  const getClickedData = (id) => {
    return _productsData_js__WEBPACK_IMPORTED_MODULE_2__["default"].find((article) => article.id == id);
  };

  const renderArticleModalWindow = (content) => {
    let modal = new _Modal_js__WEBPACK_IMPORTED_MODULE_4__.Modal("modal__wrapper", content);
    modal.renderModal();
  };
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/layout/Menu/productsData.js":
/*!*****************************************!*\
  !*** ./src/layout/Menu/productsData.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/menu-images.js */ "./src/assets/images/menu-images.js");


const data = [
  {
    id: 1,
    name: "Irish coffee",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgCoffee1,
    description:
      "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    price: "7.00",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 2,
    name: "Kahlua coffee",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgCoffee2,
    description:
      "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    price: "7.00",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 3,
    name: "Honey raf",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgCoffee3,
    description: "Espresso with frothed milk, cream and aromatic honey",
    price: "5.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 4,
    name: "Ice cappuccino",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgCoffee4,
    description: "Cappuccino with soft thick foam in summer version with ice",
    price: "5.00",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 5,
    name: "Espresso",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgCoffee5,
    description: "Classic black coffee",
    price: "4.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 6,
    name: "Latte",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgCoffee6,
    description:
      "Espresso coffee with the addition of steamed milk and dense milk foam",
    price: "5.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 7,
    name: "Latte macchiato",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgCoffee7,
    description: "Espresso with frothed milk and chocolate",
    price: "5.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 8,
    name: "Coffee with cognac",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgCoffee8,
    description: "Fragrant black coffee with cognac and whipped cream",
    price: "6.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 9,
    name: "Moroccan",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgTea1,
    description:
      "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    price: "4.50",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 10,
    name: "Ginger",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgTea2,
    description: "Original black tea with fresh ginger, lemon and honey",
    price: "5.00",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 11,
    name: "Cranberry",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgTea3,
    description: "Invigorating black tea with cranberry and honey",
    price: "5.00",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 12,
    name: "Sea buckthorn",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgTea4,
    description:
      "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    price: "5.50",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 13,
    name: "Marble cheesecake",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgDessert1,
    description:
      "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    price: "3.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 14,
    name: "Red velvet",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgDessert2,
    description: "Layer cake with cream cheese frosting",
    price: "4.00",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 15,
    name: "Cheesecakes",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgDessert3,
    description:
      "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    price: "4.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 16,
    name: "Creme brulee",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgDessert4,
    description:
      "Delicate creamy dessert in a caramel basket with wild berries",
    price: "4.00",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 17,
    name: "Pancakes",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgDessert5,
    description: "Tender pancakes with strawberry jam and fresh strawberries",
    price: "4.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 18,
    name: "Honey cake",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgDessert6,
    description: "Classic honey cake with delicate custard",
    price: "4.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 19,
    name: "Chocolate cake",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgDessert7,
    description: "Cake with hot chocolate filling and nuts with dried apricots",
    price: "5.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    id: 20,
    name: "Black forest",
    urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_0__.imgDessert8,
    description:
      "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    price: "6.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.scss */ "./src/menu.scss");
/* harmony import */ var _layout_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/Header */ "./src/layout/Header/index.js");
/* harmony import */ var _layout_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/Menu */ "./src/layout/Menu/index.js");
/* harmony import */ var _layout_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/Footer */ "./src/layout/Footer/index.js");





const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

header.append(_layout_Header__WEBPACK_IMPORTED_MODULE_1__["default"]);
main.append(_layout_Menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
footer.append(_layout_Footer__WEBPACK_IMPORTED_MODULE_3__["default"]);


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

/***/ "./src/assets/icons/icon-coffee.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/icon-coffee.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06c47ee09d9c19f9f66a.svg";

/***/ }),

/***/ "./src/assets/icons/icon-dessert.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/icon-dessert.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ccac280bc1bfd7d105f.svg";

/***/ }),

/***/ "./src/assets/icons/icon-tea.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/icon-tea.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26255e7e054965689f8a.svg";

/***/ }),

/***/ "./src/assets/icons/info-empty.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/info-empty.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d472b31d7bdb21909cc9.svg";

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

/***/ "./src/assets/icons/refresh.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/refresh.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e931b442902c00e17f61.svg";

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

/***/ "./src/assets/images/coffee-1.png":
/*!****************************************!*\
  !*** ./src/assets/images/coffee-1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7f1fae7108398a398d2.png";

/***/ }),

/***/ "./src/assets/images/coffee-2.png":
/*!****************************************!*\
  !*** ./src/assets/images/coffee-2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2079f0f644fe20beb0c.png";

/***/ }),

/***/ "./src/assets/images/coffee-3.png":
/*!****************************************!*\
  !*** ./src/assets/images/coffee-3.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b30dabd7c8fbec1e2aa.png";

/***/ }),

/***/ "./src/assets/images/coffee-4.png":
/*!****************************************!*\
  !*** ./src/assets/images/coffee-4.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ab2d041ebdd4d442052.png";

/***/ }),

/***/ "./src/assets/images/coffee-5.png":
/*!****************************************!*\
  !*** ./src/assets/images/coffee-5.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff13fe3e41f6faba22e0.png";

/***/ }),

/***/ "./src/assets/images/coffee-6.png":
/*!****************************************!*\
  !*** ./src/assets/images/coffee-6.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa5948f6f2a7bb4a36a8.png";

/***/ }),

/***/ "./src/assets/images/coffee-7.png":
/*!****************************************!*\
  !*** ./src/assets/images/coffee-7.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "506e0ef48eaa23070078.png";

/***/ }),

/***/ "./src/assets/images/coffee-8.png":
/*!****************************************!*\
  !*** ./src/assets/images/coffee-8.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a04a069f57c43b85c2fe.png";

/***/ }),

/***/ "./src/assets/images/dessert-1.png":
/*!*****************************************!*\
  !*** ./src/assets/images/dessert-1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e28173f0661d791c09f1.png";

/***/ }),

/***/ "./src/assets/images/dessert-2.png":
/*!*****************************************!*\
  !*** ./src/assets/images/dessert-2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37cb4fe3ee93ae65d2b1.png";

/***/ }),

/***/ "./src/assets/images/dessert-3.png":
/*!*****************************************!*\
  !*** ./src/assets/images/dessert-3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "332093e97e3809eca8a0.png";

/***/ }),

/***/ "./src/assets/images/dessert-4.png":
/*!*****************************************!*\
  !*** ./src/assets/images/dessert-4.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d44b0cd8a9da991a5a1.png";

/***/ }),

/***/ "./src/assets/images/dessert-5.png":
/*!*****************************************!*\
  !*** ./src/assets/images/dessert-5.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27c68d864626920fecb7.png";

/***/ }),

/***/ "./src/assets/images/dessert-6.png":
/*!*****************************************!*\
  !*** ./src/assets/images/dessert-6.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca191af649d002a0edaf.png";

/***/ }),

/***/ "./src/assets/images/dessert-7.png":
/*!*****************************************!*\
  !*** ./src/assets/images/dessert-7.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfbcfa36c3591865d20b.png";

/***/ }),

/***/ "./src/assets/images/dessert-8.png":
/*!*****************************************!*\
  !*** ./src/assets/images/dessert-8.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b471eca4888e1a082d9e.png";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38aa319db1d0695ead58.svg";

/***/ }),

/***/ "./src/assets/images/tea-1.png":
/*!*************************************!*\
  !*** ./src/assets/images/tea-1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a118c5a5b00783f924a.png";

/***/ }),

/***/ "./src/assets/images/tea-2.png":
/*!*************************************!*\
  !*** ./src/assets/images/tea-2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fc2061ada105032bbe5.png";

/***/ }),

/***/ "./src/assets/images/tea-3.png":
/*!*************************************!*\
  !*** ./src/assets/images/tea-3.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5c36c0fb46ed3542a27.png";

/***/ }),

/***/ "./src/assets/images/tea-4.png":
/*!*************************************!*\
  !*** ./src/assets/images/tea-4.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acc73f1f37b907791447.png";

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
/******/ 			"menu": 0
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
/******/ 	__webpack_require__("./src/menu.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/menu.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2p2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNyQkE7Ozs7O0FFQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Gb290ZXIvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvTWVudS9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9tZW51LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9IZWFkZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L01lbnUvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvaW5kZXguc2Nzcz85NTczIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4LnNjc3M/YmE3YiIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5zY3NzPzI5ZjYiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9NZW51L2luZGV4LnNjc3M/MmI0MiIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbWVudS5zY3NzPzYwYmYiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L01lbnUvQXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L01lbnUvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9NZW51L2luZGV4LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvTWVudS9wcm9kdWN0c0RhdGEuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL3V0aWxzL2h0bWxUb0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL2ludGVyKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG59XG5cbi53cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxNDRyZW07XG4gIHBhZGRpbmc6IDAgNHJlbSA0cmVtIDRyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDc2LjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAud3JhcHBlciB7XG4gICAgcGFkZGluZzogMCAxLjZyZW0gNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDM4cmVtO1xuICB9XG59XG5cbmE6bGluayxcbmE6dmlzaXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ2FwOiAwLjhyZW07XG4gIHdpZHRoOiAyMHJlbTtcbiAgaGVpZ2h0OiA2LjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xufVxuXG4uYnV0dG9uLXRleHQge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa0VBOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBaEVGOztBQWtFQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUEvREY7O0FBaUVBO0VBQ0UsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQXBDYztBQTFCaEI7O0FBaUVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkEzQ2M7RUE0Q2QsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUE5REY7QUFGRTtFQXlERjtJQVVJLGtCQUFBO0VBN0RGO0FBQ0Y7QUFERTtFQW1ERjtJQWNJLHNCQUFBO0VBNURGO0FBQ0Y7QUFBRTtFQTZDRjtJQWtCSSxnQkFBQTtFQTNERjtBQUNGOztBQThEQTs7RUFFRSxxQkFBQTtFQUNBLGNBQUE7QUEzREY7O0FBOERBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUEzREY7O0FBNkRBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQS9FYztFQWdGZCxvQkFBQTtBQTFERjs7QUE2REE7RUE5SEUsaUJBK0hjO0VBOUhkLGdCQThIc0I7RUE3SHRCLGlCQTZIMkI7RUE1SDNCLGNBNkNnQjtBQXdCbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG5AbWl4aW4gbWVkaWEtZGVza3RvcCB7XFxyXFxuICAvLyAxMjIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gIC8vIDEwMjRweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtbGFuZC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gIC8vIDc2OHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1wb3J0LXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gIC8vIDcyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1sYXJnZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAvLyA0MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UzZDVjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2MxYjZhZDtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG4kZGVza3RvcC13aWR0aDogMTIyMHB4O1xcclxcbiR0YWJsZXQtbGFuZC13aWR0aDogMTAyNHB4O1xcclxcbiR0YWJsZXQtcG9ydC13aWR0aDogNzY4cHg7XFxyXFxuJG1vYmlsZS1sYXJnZS13aWR0aDogNzIwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNDIwcHg7XFxyXFxuXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9pbnRlclxcXCIpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNDRyZW07XFxyXFxuICBwYWRkaW5nOiAwIDRyZW0gNHJlbSA0cmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3Ni44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgcGFkZGluZzogMCAxLjZyZW0gNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIG1heC13aWR0aDogMzhyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmE6bGluayxcXHJcXG5hOnZpc2l0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5idXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdhcDogMC44cmVtO1xcclxcbiAgd2lkdGg6IDIwcmVtO1xcclxcbiAgaGVpZ2h0OiA2LjRyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLXRleHQge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ljb25zL3R3aXR0ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ljb25zL3R3aXR0ZXItaG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ljb25zL2luc3RhZ3JhbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pY29ucy9mYWNlYm9vay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaWNvbnMvZmFjZWJvb2staG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5mb290ZXJfX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjVmNTU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgZ2FwOiAxMHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBwYWRkaW5nOiAxMHJlbSA2cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA2cmVtIDEuNnJlbTtcbiAgICBnYXA6IDRyZW07XG4gIH1cbn1cbi5mb290ZXJfX2NvbnRhaW5lciAuaGVhZGluZy1saWdodCB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIGNvbG9yOiAjZTFkNGM5O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lciAuaGVhZGluZy1saWdodCB7XG4gICAgZm9udC1zaXplOiA0LjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTI1JTtcbiAgICBjb2xvcjogI2UxZDRjOTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lciAuaGVhZGluZy1saWdodCB7XG4gICAgZm9udC1zaXplOiAzLjE1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gICAgY29sb3I6ICNlMWQ0Yzk7XG4gIH1cbn1cblxuLmhlYWRpbmctbGlnaHQgc3BhbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICNiMDkwN2E7XG59XG5cbi5mb290ZXJfX2NvbnRhY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjdyZW07XG59XG4uZm9vdGVyX19jb250YWN0c190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyBpbWcge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XG59XG4uZm9vdGVyX19jb250YWN0c19waG9uZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3Bob25lIGltZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3NjaGVkdWxlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogI2UxZDRjOTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3NjaGVkdWxlIGltZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcbn1cblxuLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyBhLFxuLmZvb3Rlcl9fY29udGFjdHNfcGhvbmUgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX2FkZHJlc3MgYTphZnRlcixcbi5mb290ZXJfX2NvbnRhY3RzX3Bob25lIGE6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZDRjOTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMnB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuZm9vdGVyX19jb250YWN0c19hZGRyZXNzIGE6aG92ZXI6YWZ0ZXIsXG4gIC5mb290ZXJfX2NvbnRhY3RzX3Bob25lIGE6aG92ZXI6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cblxuLnNvY2lhbC1pY29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS4ycmVtO1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbn1cblxuLnNvY2lhbC1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjVmNTU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlM2Q1Yzk7XG4gIHdpZHRoOiA2cmVtO1xuICBoZWlnaHQ6IDZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5zb2NpYWwtaWNvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDVjOTtcbiAgfVxufVxuLnNvY2lhbC1pY29uIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2cmVtO1xuICBoZWlnaHQ6IDZyZW07XG59XG4uc29jaWFsLWljb25fX3R3aXR0ZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5zb2NpYWwtaWNvbl9fdHdpdHRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIH1cbn1cbi5zb2NpYWwtaWNvbl9faW5zdGFncmFtIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuc29jaWFsLWljb25fX2luc3RhZ3JhbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIH1cbn1cbi5zb2NpYWwtaWNvbl9fZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5zb2NpYWwtaWNvbl9fZmFjZWJvb2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0L0Zvb3Rlci9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdFQTtFQUNFLHlCQXBCZ0I7RUFxQmhCLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBL0RGO0FBV0U7RUE0Q0Y7SUFXSSwwQkFBQTtJQUNBLG1CQUFBO0VBOURGO0FBQ0Y7QUFpQkU7RUFnQ0Y7SUFlSSxvQkFBQTtJQUNBLFNBQUE7RUE1REY7QUFDRjtBQThERTtFQWxGQSxlQW1GZ0I7RUFsRmhCLGdCQWtGc0I7RUFqRnRCLGlCQWlGMkI7RUFoRjNCLGNBOENpQjtBQXZCbkI7QUFLRTtFQW1EQTtJQWxGQSxpQkFzRmtCO0lBckZsQixnQkFxRjBCO0lBcEYxQixpQkFvRitCO0lBbkYvQixjQThDaUI7RUFoQmpCO0FBQ0Y7QUFHRTtFQTZDQTtJQWxGQSxrQkF5RmtCO0lBeEZsQixnQkF3RjJCO0lBdkYzQixpQkF1RmdDO0lBdEZoQyxjQThDaUI7RUFSakI7QUFDRjs7QUFvREU7RUFDRSxrQkFBQTtFQUNBLGNBOUNnQjtBQUhwQjs7QUFxREE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBbERGO0FBb0RFO0VBekdBLGlCQTBHZ0I7RUF6R2hCLGdCQXlHd0I7RUF4R3hCLGlCQXdHNkI7RUF2RzdCLGNBOENpQjtFQTBEZixvQkFBQTtBQS9DSjtBQWlERTtFQTdHQSxpQkE4R2dCO0VBN0doQixnQkE2R3dCO0VBNUd4QixpQkE0RzZCO0VBM0c3QixjQThDaUI7RUE4RGYsa0JBQUE7RUFDQSxlQUFBO0FBNUNKO0FBOENJO0VBQ0UscUJBQUE7QUE1Q047QUErQ0U7RUF0SEEsaUJBdUhnQjtFQXRIaEIsZ0JBc0h3QjtFQXJIeEIsaUJBcUg2QjtFQXBIN0IsY0E4Q2lCO0VBdUVmLGtCQUFBO0FBMUNKO0FBMkNJO0VBQ0UscUJBQUE7QUF6Q047QUE0Q0U7RUE3SEEsaUJBOEhnQjtFQTdIaEIsZ0JBNkh3QjtFQTVIeEIsaUJBNEg2QjtFQTNIN0IsY0E4Q2lCO0FBc0NuQjtBQXlDSTtFQUNFLHFCQUFBO0FBdkNOOztBQTRDQTs7RUFFRSxrQkFBQTtBQXpDRjtBQTBDRTs7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQTdGZTtFQThGZixPQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdkNKO0FBeUNFO0VBQ0U7O0lBQ0UsbUJBQUE7SUFDQSxnQ0FBQTtFQXRDSjtBQUNGOztBQTBDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBdkNGOztBQXlDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBMUhnQjtFQTJIaEIseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUF0Q0Y7QUF3Q0U7RUFDRTtJQUNFLHlCQXBJVTtFQThGZDtBQUNGO0FBeUNFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXZDSjtBQTBDRTtFQUNFLG9FQUFBO0VBQ0EsZ0NBQUE7QUF4Q0o7QUF5Q0k7RUFDRTtJQUNFLG9FQUFBO0VBdkNOO0FBQ0Y7QUEyQ0U7RUFDRSxvRUFBQTtFQUNBLGdDQUFBO0FBekNKO0FBMENJO0VBQ0U7SUFDRSxvRUFBQTtFQXhDTjtBQUNGO0FBNENFO0VBQ0Usb0VBQUE7RUFDQSxnQ0FBQTtBQTFDSjtBQTJDSTtFQUNFO0lBQ0Usb0VBQUE7RUF6Q047QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGhlaWdodCwgJGNvbG9yKSB7XFxyXFxuICBmb250LXNpemU6ICRzaXplO1xcclxcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XFxyXFxuICBsaW5lLWhlaWdodDogJGhlaWdodDtcXHJcXG4gIGNvbG9yOiAkY29sb3I7XFxyXFxufVxcclxcblxcclxcbiV0cmFuc2l0aW9uIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbkBtaXhpbiBtZWRpYS1kZXNrdG9wIHtcXHJcXG4gIC8vIDEyMjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRkZXNrdG9wLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgLy8gMTAyNHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1sYW5kLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgLy8gNzY4cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LXBvcnQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgLy8gNzIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLWxhcmdlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlIHtcXHJcXG4gIC8vIDQyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxuLy8gQmFja2dyb3VuZCBDb2xvclxcclxcbiRjb2xvci1wcmltYXJ5OiAjZTNkNWM5O1xcclxcbiRjb2xvci1zZWNvbmRhcnk6ICM2NjVmNTU7XFxyXFxuJGNvbG9yLWJhY2tkcm9wOiAjNDAzZjNkY2M7XFxyXFxuXFxyXFxuLy8gVGV4dCBDb2xvclxcclxcbiRjb2xvci10ZXh0LWRhcms6ICM0MDNmM2Q7XFxyXFxuJGNvbG9yLXRleHQtbGlnaHQ6ICNlMWQ0Yzk7XFxyXFxuJGNvbG9yLXRleHQtYWNjZW50OiAjYjA5MDdhO1xcclxcblxcclxcbi8vIEJvcmRlciBDb2xvcjpcXHJcXG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjYzFiNmFkO1xcclxcbiRjb2xvci1ib3JkZXItZGFyazogIzY2NWY1NTtcXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbiRkZXNrdG9wLXdpZHRoOiAxMjIwcHg7XFxyXFxuJHRhYmxldC1sYW5kLXdpZHRoOiAxMDI0cHg7XFxyXFxuJHRhYmxldC1wb3J0LXdpZHRoOiA3NjhweDtcXHJcXG4kbW9iaWxlLWxhcmdlLXdpZHRoOiA3MjBweDtcXHJcXG4kbW9iaWxlLXdpZHRoOiA0MjBweDtcXHJcXG5cXG4uZm9vdGVyX19jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTByZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcclxcbiAgZ2FwOiAxMHJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcmVtIDZyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgICBwYWRkaW5nOiA2cmVtIDEuNnJlbTtcXHJcXG4gICAgZ2FwOiA0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRpbmctbGlnaHQge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDZyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcblxcclxcbiAgICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgICAgIEBpbmNsdWRlIHRleHQoNC4ycmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICAgIEBpbmNsdWRlIHRleHQoMy4xNXJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLmhlYWRpbmctbGlnaHQge1xcclxcbiAgc3BhbiB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6ICRjb2xvci10ZXh0LWFjY2VudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9fY29udGFjdHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEuN3JlbTtcXHJcXG5cXHJcXG4gICZfdGl0bGUge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDIuNHJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcclxcbiAgfVxcclxcbiAgJl9hZGRyZXNzIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfcGhvbmUge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfc2NoZWR1bGUge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX2NvbnRhY3RzX2FkZHJlc3MgYSxcXHJcXG4uZm9vdGVyX19jb250YWN0c19waG9uZSBhIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICY6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10ZXh0LWxpZ2h0O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3R0b206IC0ycHg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICY6aG92ZXI6YWZ0ZXIge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1pY29ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEuMnJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcclxcbn1cXHJcXG4uc29jaWFsLWljb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIHdpZHRoOiA2cmVtO1xcclxcbiAgaGVpZ2h0OiA2cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzcGFuIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogNnJlbTtcXHJcXG4gICAgaGVpZ2h0OiA2cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fdHdpdHRlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvdHdpdHRlci5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3R3aXR0ZXItaG92ZXIuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW5zdGFncmFtIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9pbnN0YWdyYW0uc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9pbnN0YWdyYW0taG92ZXIuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZmFjZWJvb2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2ZhY2Vib29rLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvZmFjZWJvb2staG92ZXIuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuaGVhZGVyX19jb250YWluZXIge1xuICAgIGdhcDogM3JlbTtcbiAgfVxufVxuXG4ubm8tc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZpc3VhbGx5LWhpZGRlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjbGlwLXBhdGg6IGluc2V0KDEwMCUpO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubmF2aWdhdGlvbl9fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiA2NS42JTtcbn1cbi5uYXZpZ2F0aW9uX193cmFwcGVyLm9wZW4ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubmF2aWdhdGlvbl9fd3JhcHBlciB7XG4gICAgZ2FwOiAzcmVtO1xuICAgIG1pbi13aWR0aDogNzglO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmlnYXRpb25fX3dyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG4gICAgZ2FwOiAxMHJlbTtcbiAgICBwYWRkaW5nOiA2cmVtIDRyZW07XG4gICAgdG9wOiA5LjlyZW07XG4gICAgei1pbmRleDogMjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHJpZ2h0OiAtMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG4ubmF2aWdhdGlvbl9fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiA0cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubmF2aWdhdGlvbl9fbGlzdCB7XG4gICAgZ2FwOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmlnYXRpb25fX2xpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA2cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLm5hdmlnYXRpb25fX2xpc3RfbGluayB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubmF2aWdhdGlvbl9fbGlzdF9saW5rIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubmF2aWdhdGlvbl9fbGlzdF9saW5rIGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwM2YzZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMnB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAubmF2aWdhdGlvbl9fbGlzdF9saW5rIGE6aG92ZXI6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2aWdhdGlvbl9fbGlzdF9saW5rIHtcbiAgICBmb250LXNpemU6IDMuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTI1JTtcbiAgfVxufVxuXG4uaGVhZGVyX19tZW51IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcbn1cbi5oZWFkZXJfX21lbnUgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyX19tZW51IGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEuNnJlbTtcbn1cbi5oZWFkZXJfX21lbnUgYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwM2YzZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0ycHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5oZWFkZXJfX21lbnUgYTpob3ZlcjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXJfX21lbnUge1xuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICB9XG4gIC5oZWFkZXJfX21lbnUgLmljb24tY3VwIHtcbiAgICBtaW4taGVpZ2h0OiA0cmVtO1xuICAgIG1pbi13aWR0aDogNHJlbTtcbiAgfVxufVxuXG4ubmF2aWdhdGlvbl9fbGlzdF9saW5rLm1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnVyZ2VyX19jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idXJnZXJfX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA0LjZyZW07XG4gIH1cbn1cbi5idXJnZXJfX2NvbnRhaW5lci5vcGVuIC5idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg0NWRlZyk7XG59XG4uYnVyZ2VyX19jb250YWluZXIub3BlbiAuYnVyZ2VyX19saW5lOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5idXJnZXJfX2NvbnRhaW5lciAuYnVyZ2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQuNHJlbTtcbiAgaGVpZ2h0OiA0LjRyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjVmNTU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5idXJnZXJfX2NvbnRhaW5lciAuYnVyZ2VyX19saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEuNnJlbTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwM2YzZDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG59XG4uYnVyZ2VyX19jb250YWluZXIgLmJ1cmdlcl9fbGluZTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNHJlbSk7XG59XG4uYnVyZ2VyX19jb250YWluZXIgLmJ1cmdlcl9fbGluZTpudGgtY2hpbGQoMikge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC40cmVtKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQvSGVhZGVyL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0VBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQS9ERjtBQWNFO0VBNENGO0lBT0ksU0FBQTtFQTdERjtBQUNGOztBQStEQTtFQUNFLGdCQUFBO0FBNURGOztBQThEQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQTNERjs7QUE4REE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBM0RGO0FBNERFO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtBQTFESjtBQW5CRTtFQXNFRjtJQVVJLFNBQUE7SUFDQSxjQUFBO0VBekRGO0FBQ0Y7QUFuQkU7RUFnRUY7SUFjSSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxzQkFBQTtJQUNBLHlCQWhFWTtJQWlFWixVQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdDQUFBO0VBdkRGO0FBQ0Y7O0FBeURBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQXRERjtBQWhERTtFQW1HRjtJQU1JLFNBQUE7RUFyREY7QUFDRjtBQS9DRTtFQTZGRjtJQVNJLHNCQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0VBbkRGO0FBQ0Y7QUFxREU7RUFwSUEsaUJBcUlnQjtFQXBJaEIsZ0JBb0l3QjtFQW5JeEIsaUJBbUk2QjtFQWxJN0IsY0E2Q2dCO0VBc0ZkLGdCQUFBO0FBaERKO0FBaURJO0VBQ0Usa0JBQUE7QUEvQ047QUFnRE07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQTlGVTtFQStGVixPQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBOUNSO0FBZ0RNO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGdDQUFBO0VBOUNSO0FBQ0Y7QUFoRkU7RUEyR0E7SUF1QkksaUJBQUE7SUFDQSxpQkFBQTtFQTlDSjtBQUNGOztBQWtEQTtFQWpLRSxpQkFrS2M7RUFqS2QsZ0JBaUtzQjtFQWhLdEIsaUJBZ0syQjtFQS9KM0IsY0E2Q2dCO0VBbUhoQixzQkFBQTtBQTVDRjtBQThDRTtFQUNFLGFBQUE7QUE1Q0o7QUE4Q0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQTVDSjtBQThDSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQW5JWTtFQW9JWixrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUE1Q047QUE4Q0k7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsZ0NBQUE7RUE1Q047QUFDRjtBQXhIRTtFQXdJRjtJQWlDSSxpQkFBQTtJQUNBLGlCQUFBO0VBN0NGO0VBK0NFO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBN0NKO0FBQ0Y7O0FBaURBO0VBQ0UsYUFBQTtBQTlDRjs7QUFpREE7RUFDRSxhQUFBO0FBOUNGO0FBMUlFO0VBdUxGO0lBR0ksY0FBQTtJQUNBLGNBQUE7RUE1Q0Y7QUFDRjtBQTZDRTtFQUNFLHNDQUFBO0FBM0NKO0FBNkNFO0VBQ0UsdUNBQUE7QUEzQ0o7QUE2Q0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBM0NKO0FBNkNJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQTVMWTtFQTZMWixzQ0FBQTtFQUNBLHNCQUFBO0FBM0NOO0FBNkNNO0VBQ0UsOEJBQUE7QUEzQ1I7QUE2Q007RUFDRSw2QkFBQTtBQTNDUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGhlaWdodCwgJGNvbG9yKSB7XFxyXFxuICBmb250LXNpemU6ICRzaXplO1xcclxcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XFxyXFxuICBsaW5lLWhlaWdodDogJGhlaWdodDtcXHJcXG4gIGNvbG9yOiAkY29sb3I7XFxyXFxufVxcclxcblxcclxcbiV0cmFuc2l0aW9uIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbkBtaXhpbiBtZWRpYS1kZXNrdG9wIHtcXHJcXG4gIC8vIDEyMjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRkZXNrdG9wLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgLy8gMTAyNHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1sYW5kLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgLy8gNzY4cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LXBvcnQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgLy8gNzIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLWxhcmdlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlIHtcXHJcXG4gIC8vIDQyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxuLy8gQmFja2dyb3VuZCBDb2xvclxcclxcbiRjb2xvci1wcmltYXJ5OiAjZTNkNWM5O1xcclxcbiRjb2xvci1zZWNvbmRhcnk6ICM2NjVmNTU7XFxyXFxuJGNvbG9yLWJhY2tkcm9wOiAjNDAzZjNkY2M7XFxyXFxuXFxyXFxuLy8gVGV4dCBDb2xvclxcclxcbiRjb2xvci10ZXh0LWRhcms6ICM0MDNmM2Q7XFxyXFxuJGNvbG9yLXRleHQtbGlnaHQ6ICNlMWQ0Yzk7XFxyXFxuJGNvbG9yLXRleHQtYWNjZW50OiAjYjA5MDdhO1xcclxcblxcclxcbi8vIEJvcmRlciBDb2xvcjpcXHJcXG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjYzFiNmFkO1xcclxcbiRjb2xvci1ib3JkZXItZGFyazogIzY2NWY1NTtcXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbiRkZXNrdG9wLXdpZHRoOiAxMjIwcHg7XFxyXFxuJHRhYmxldC1sYW5kLXdpZHRoOiAxMDI0cHg7XFxyXFxuJHRhYmxldC1wb3J0LXdpZHRoOiA3NjhweDtcXHJcXG4kbW9iaWxlLWxhcmdlLXdpZHRoOiA3MjBweDtcXHJcXG4kbW9iaWxlLXdpZHRoOiA0MjBweDtcXHJcXG5cXG4uaGVhZGVyX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgcGFkZGluZzogMnJlbSAwO1xcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICB9XFxyXFxufVxcclxcbi5uby1zY3JvbGwge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuLnZpc3VhbGx5LWhpZGRlbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMXB4O1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICBtYXJnaW46IC0xcHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIGNsaXAtcGF0aDogaW5zZXQoMTAwJSk7XFxyXFxuICBjbGlwOiByZWN0KDAgMCAwIDApO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb25fX3dyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtaW4td2lkdGg6IDY1LjYlO1xcclxcbiAgJi5vcGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBtaW4td2lkdGg6IDc4JTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgICBnYXA6IDEwcmVtO1xcclxcbiAgICBwYWRkaW5nOiA2cmVtIDRyZW07XFxyXFxuICAgIHRvcDogOS45cmVtO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcmlnaHQ6IC0xMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm5hdmlnYXRpb25fX2xpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogNHJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDZyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfbGluayB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBhIHtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgJjphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGV4dC1kYXJrO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogLTJweDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgICAgICY6aG92ZXI6YWZ0ZXIge1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX21lbnUge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xcclxcblxcclxcbiAgc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBhIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxLjZyZW07XFxyXFxuXFxyXFxuICAgICY6YWZ0ZXIge1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10ZXh0LWRhcms7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgYm90dG9tOiAtMnB4O1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAgICY6aG92ZXI6YWZ0ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XFxyXFxuXFxyXFxuICAgIC5pY29uLWN1cCB7XFxyXFxuICAgICAgbWluLWhlaWdodDogNHJlbTtcXHJcXG4gICAgICBtaW4td2lkdGg6IDRyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb25fX2xpc3RfbGluay5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5idXJnZXJfX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgaGVpZ2h0OiA0LjZyZW07XFxyXFxuICB9XFxyXFxuICAmLm9wZW4gLmJ1cmdlcl9fbGluZTpudGgtY2hpbGQoMSkge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG4gIH1cXHJcXG4gICYub3BlbiAuYnVyZ2VyX19saW5lOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIH1cXHJcXG4gIC5idXJnZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogNC40cmVtO1xcclxcbiAgICBoZWlnaHQ6IDQuNHJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvcmRlci1kYXJrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFxyXFxuICAgICZfX2xpbmUge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB3aWR0aDogMS42cmVtO1xcclxcbiAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGV4dC1kYXJrO1xcclxcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxyXFxuXFxyXFxuICAgICAgJjpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjRyZW0pO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC40cmVtKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9yZWZyZXNoLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL2luZm8tZW1wdHkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlY3Rpb25fX21lbnUtY29mZmVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cmVtO1xufVxuXG4uaGVhZGVyX19tZW51IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oZWFkZXJfX21lbnUgYSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5oZWFkZXJfX21lbnU6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXJfX21lbnUgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVhZGVyX19tZW51IGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEuNnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLm5hdmlnYXRpb25fX2xpc3RfbGluay5tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsuaG9tZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWFkaW5nLWRhcmsge1xuICBmb250LXNpemU6IDZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDgwcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5oZWFkaW5nLWRhcmsge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMTUlO1xuICAgIGNvbG9yOiAjNDAzZjNkO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmhlYWRpbmctZGFyayB7XG4gICAgZm9udC1zaXplOiA0LjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTE1JTtcbiAgICBjb2xvcjogIzQwM2YzZDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5oZWFkaW5nLWRhcmsge1xuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gICAgY29sb3I6ICM0MDNmM2Q7XG4gIH1cbn1cbi5oZWFkaW5nLWRhcmsgc3BhbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICNiMDkwN2E7XG59XG5cbi50YWJzX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxLjdyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnRhYnNfX2NvbnRhaW5lciB7XG4gICAgZ2FwOiAwLjhyZW07XG4gIH1cbn1cblxuLnRhYiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDVjOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYjZhZDtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIGdhcDogMC44cmVtO1xuICBwYWRkaW5nOiAwLjhyZW0gMS42cmVtIDAuOHJlbSAwLjhyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4udGFiX2ljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYjZhZDtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIHBhZGRpbmc6IDAgMC43cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi50YWJfaWNvbiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxLjZyZW07XG4gIGhlaWdodDogMi44cmVtO1xufVxuXG4udGFiLS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xuICBjb2xvcjogI2UxZDRjOTtcbn1cblxuLnRhYi0tYWN0aXZlIC50YWJfaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG59XG5cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnRhYjpob3ZlcixcbiAgLnRhYjphY3RpdmUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xuICAgIGNvbG9yOiAjZTFkNGM5O1xuICB9XG4gIC50YWI6aG92ZXIgLnRhYl9pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICB9XG59XG4uYXJ0aWNsZXNfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIHJvdy1nYXA6IDMuOXJlbTtcbiAgY29sdW1uLWdhcDogNHJlbTtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gIC5hcnRpY2xlc19fY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmFydGljbGVzX19jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmFydGljbGVzX19jb250YWluZXIge1xuICAgIHJvdy1nYXA6IDMuOHJlbTtcbiAgfVxufVxuXG4uYXJ0aWNsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWI2YWQ7XG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gIG1heC13aWR0aDogMzFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuLmFydGljbGVfaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFydGljbGU6bnRoLWNoaWxkKG4rNSk6bnRoLWNoaWxkKC1uKzgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hcnRpY2xlOm50aC1jaGlsZChuKzE3KTpudGgtY2hpbGQoLW4rMjApIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmFydGljbGU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYXJ0aWNsZTpob3ZlciAuaW1hZ2Uge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxufVxuLmltYWdlX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMzFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XG59XG5cbi5pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMS41cmVtO1xuICByaWdodDogLTEuNnJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbmZvX19jb250YWluZXIge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIGdhcDogMS4ycmVtO1xuICBwYWRkaW5nOiAxLjlyZW07XG4gIG1pbi1oZWlnaHQ6IDE5LjZyZW07XG59XG5cbi5pbmZvX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uaW5mb19fZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xufVxuXG4uaW5mb19fcHJpY2Uge1xuICBtYXJnaW46IGF1dG8gMCAwIDA7XG59XG5cbi5pbmZvX19jb250YWluZXIgLnRhYiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgLnJlZnJlc2gtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDZyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjVmNTU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xuICB9XG4gIC5yZWZyZXNoLWJ0biBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDIuNHJlbTtcbiAgICBoZWlnaHQ6IDIuNHJlbTtcbiAgfVxuICAucmVmcmVzaC1idG5fX2ljb24ge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgfVxufVxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDYzLCA2MSwgMC44KTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0LCB2aXNpYmlsaXR5IDAuM3MgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xufVxuXG4ubW9kYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtd2lkdGg6IDgwcmVtO1xuICBtaW4taGVpZ2h0OiA1MC40cmVtO1xuICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICBwYWRkaW5nOiAxLjZyZW07XG4gIGNvbG9yOiAjNDAzZjNkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubW9kYWwge1xuICAgIG1heC13aWR0aDogNjguOHJlbTtcbiAgICBoZWlnaHQ6IDYyLjZyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5tb2RhbCB7XG4gICAgbWF4LXdpZHRoOiAzNC4ycmVtO1xuICB9XG59XG4ubW9kYWxfX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG59XG4ubW9kYWxfX2ltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgbWF4LXdpZHRoOiAzMXJlbTtcbn1cbi5tb2RhbF9faW1hZ2VfY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAzNHJlbTtcbiAgaGVpZ2h0OiAzNHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAubW9kYWxfX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLm1vZGFsX19pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjJyZW07XG59XG4ubW9kYWxfX2luZm9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5tb2RhbF9faW5mb19jb250YWluZXIge1xuICAgIHdpZHRoOiAzMXJlbTtcbiAgfVxufVxuLm1vZGFsX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59XG4ubW9kYWxfX3RpdGxlX3NpemUsIC5tb2RhbF9fdGl0bGVfYWRkIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgbWFyZ2luLWJvdHRvbTogLTEuMnJlbTtcbn1cbi5tb2RhbF9fcHJpY2VfdG90YWwge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICBwYWRkaW5nLWJvdHRvbTogMS44cmVtO1xufVxuLm1vZGFsX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59XG4ubW9kYWxfX3ByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxYjZhZDtcbn1cbi5tb2RhbF9fbGVnZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuOHJlbTtcbiAgbWFyZ2luLXRvcDogLTAuOHJlbTtcbiAgd2lkdGg6IDQzLjhyZW07XG59XG4ubW9kYWxfX2xlZ2VuZF90ZXh0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTQwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIHdpZHRoOiA0MS40cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubW9kYWxfX2xlZ2VuZCB7XG4gICAgd2lkdGg6IDMyLjZyZW07XG4gIH1cbiAgLm1vZGFsX19sZWdlbmRfdGV4dCB7XG4gICAgd2lkdGg6IDMwLjJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAubW9kYWxfX2xlZ2VuZCB7XG4gICAgd2lkdGg6IDMxcmVtO1xuICB9XG59XG4ubW9kYWxfX2Nsb3NlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY1ZjU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbi5tb2RhbF9fc2l6ZSBpbnB1dCwgLm1vZGFsX19hZGQgaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1vZGFsX19zaXplLCAubW9kYWxfX2FkZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjlyZW07XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG4ubW9kYWxfX3NpemVfb3B0aW9uLCAubW9kYWxfX2FkZF9vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMC43cmVtIDEuNXJlbSAwLjdyZW0gMC43cmVtO1xuICBnYXA6IDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWI2YWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tb2RhbF9fc2l6ZV9vcHRpb24gPiAuaWNvbiwgLm1vZGFsX19hZGRfb3B0aW9uID4gLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYjZhZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59XG4ubW9kYWxfX3NpemVfb3B0aW9uID4gLnNpemVfdGl0bGUsIC5tb2RhbF9fYWRkX29wdGlvbiA+IC5zaXplX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbi5jaGVja2VkIHtcbiAgY29sb3I6ICNlMWQ0Yzk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjVmNTU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NjVmNTU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmljb24taW5mbyB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBjZW50ZXIgbm8tcmVwZWF0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dC9NZW51L2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0VBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBL0RGOztBQWtFRTtFQUNFLGNBQUE7QUEvREo7QUFpRUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQS9ESjtBQWlFRTtFQUNFLG1CQUFBO0FBL0RKO0FBVUU7RUF5REU7SUFDRSxhQUFBO0VBaEVKO0VBa0VFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQWhFSjtBQUNGOztBQW1FQTtFQUNFLGNBQUE7QUFoRUY7O0FBa0VBO0VBQ0UsYUFBQTtBQS9ERjs7QUFpRUE7RUFwR0UsZUFxR2M7RUFwR2QsZ0JBb0dvQjtFQW5HcEIsaUJBbUd5QjtFQWxHekIsY0E2Q2dCO0VBc0RoQixrQkFBQTtFQUNBLGdCQUFBO0FBM0RGO0FBYkU7RUFxRUY7SUFwR0UsZUEwR2dCO0lBekdoQixnQkF5R3NCO0lBeEd0QixpQkF3RzJCO0lBdkczQixjQTZDZ0I7RUFHaEI7QUFDRjtBQWZFO0VBK0RGO0lBcEdFLGlCQTZHZ0I7SUE1R2hCLGdCQTRHd0I7SUEzR3hCLGlCQTJHNkI7SUExRzdCLGNBNkNnQjtFQVdoQjtBQUNGO0FBdkJFO0VBK0RGO0lBcEdFLGlCQWdIZ0I7SUEvR2hCLGdCQStHd0I7SUE5R3hCLGlCQThHNkI7SUE3RzdCLGNBNkNnQjtFQW1CaEI7QUFDRjtBQStDRTtFQUNFLGtCQUFBO0VBQ0EsY0FuRWdCO0FBc0JwQjs7QUFnREE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBN0NGO0FBekNFO0VBbUZGO0lBTUksV0FBQTtFQTVDRjtBQUNGOztBQThDQTtFQWpJRSxpQkFrSWM7RUFqSWQsZ0JBaUlzQjtFQWhJdEIsaUJBZ0kyQjtFQS9IM0IsY0E2Q2dCO0VBbUZoQiwwQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkE5RmM7RUErRmQseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FBeENGOztBQTBDQTtFQUNFLGNBQUE7RUFDQSx5QkE3Rm1CO0VBOEZuQixXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQXZDRjtBQXdDRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQXRDSjs7QUEwQ0E7RUFDRSx5QkFwSGdCO0VBcUhoQixjQWhIaUI7QUF5RW5COztBQXlDQTtFQUNFLHlCQXpIYztBQW1GaEI7O0FBeUNBO0VBQ0U7O0lBRUUsZUFBQTtJQUNBLHlCQS9IYztJQWdJZCxjQTNIZTtFQXFGakI7RUF3Q0E7SUFDRSx5QkFwSVk7RUE4RmQ7QUFDRjtBQTBDQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUF4Q0Y7QUFySUU7RUF1S0Y7SUFTSSxxQ0FBQTtJQUNBLG9CQUFBO0VBdkNGO0FBQ0Y7QUF6SEU7RUFxSkY7SUFhSSwwQkFBQTtFQXJDRjtBQUNGO0FBeEhFO0VBK0lGO0lBZ0JJLGVBQUE7RUFuQ0Y7QUFDRjs7QUFxQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQWxDRjtBQW9DRTtFQUNFLGFBQUE7QUFsQ0o7QUEzSkU7RUFpTUU7SUFDRSxhQUFBO0VBbkNKO0VBcUNFO0lBQ0UsYUFBQTtFQW5DSjtBQUNGOztBQXNDQTtFQUNFO0lBQ0UsZUFBQTtFQW5DRjtFQXFDQTtJQUNFLHFCQUFBO0VBbkNGO0FBQ0Y7QUFxQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBbkNGOztBQXFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQWxDRjs7QUFvQ0E7RUFoUEUsaUJBaVBjO0VBaFBkLGdCQWdQc0I7RUEvT3RCLGlCQStPMkI7RUE5TzNCLGNBNkNnQjtFQWtNaEIsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUE5QkY7O0FBZ0NBO0VBQ0UsaUJBQUE7QUE3QkY7O0FBK0JBO0VBNVBFLGlCQTZQYztFQTVQZCxnQkE0UHNCO0VBM1B0QixpQkEyUDJCO0VBMVAzQixjQTZDZ0I7QUFvTGxCOztBQTJCQTtFQUNFLGtCQUFBO0FBeEJGOztBQTBCQTtFQUNFLGFBQUE7QUF2QkY7O0FBL05FO0VBeVBBO0lBQ0UsYUFBQTtJQUNBLDZCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0Esb0JBQUE7RUF0QkY7RUF3QkU7SUFDRSxxQkFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0VBdEJKO0VBd0JFO0lBQ0UsbURBQUE7RUF0Qko7QUFDRjtBQTJCQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0ExUGU7RUEyUGYsb0ZBQUE7QUF6QkY7O0FBNEJBO0VBQ0Usa0JBQUE7RUFDQSx5QkFsUWM7RUFtUWQsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQW5RZ0I7QUEwT2xCO0FBdlFFO0VBd1JGO0lBV0ksa0JBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUF4QkY7QUFDRjtBQWxRRTtFQTRRRjtJQWdCSSxrQkFBQTtFQXRCRjtBQUNGO0FBd0JFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUF0Qko7QUF3QkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBdEJKO0FBd0JJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBdEJOO0FBblJFO0VBdVNFO0lBSUksYUFBQTtFQXBCTjtBQUNGO0FBdUJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQXJCSjtBQXVCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFyQko7QUFsU0U7RUFvVEE7SUFNSSxZQUFBO0VBcEJKO0FBQ0Y7QUFzQkU7RUE1VkEsaUJBNlZnQjtFQTVWaEIsZ0JBNFZ3QjtFQTNWeEIsaUJBMlY2QjtFQTFWN0IsY0E2Q2dCO0FBNFJsQjtBQW1CSTtFQS9WRixpQkFpV2tCO0VBaFdsQixnQkFnVzBCO0VBL1YxQixpQkErVitCO0VBOVYvQixjQTZDZ0I7RUFrVFosc0JBQUE7QUFmTjtBQWtCRTtFQXJXQSxpQkFzV2dCO0VBcldoQixnQkFxV3dCO0VBcFd4QixpQkFvVzZCO0VBblc3QixjQTZDZ0I7RUF1VGQsc0JBQUE7QUFiSjtBQWVFO0VBeldBLGlCQTBXZ0I7RUF6V2hCLGdCQXlXd0I7RUF4V3hCLGlCQXdXNkI7RUF2VzdCLGNBNkNnQjtBQWdUbEI7QUFhRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FBWEo7QUFjRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFaSjtBQWNJO0VBMVhGLGVBMlhrQjtFQTFYbEIsZ0JBMFh3QjtFQXpYeEIsaUJBeVg2QjtFQXhYN0IsY0E2Q2dCO0VBNFVaLGNBQUE7QUFUTjtBQWhXRTtFQWdXQTtJQWFJLGNBQUE7RUFUSjtFQVdJO0lBQ0UsY0FBQTtFQVROO0FBQ0Y7QUE1VkU7RUFvVkE7SUFvQkksWUFBQTtFQVJKO0FBQ0Y7QUFXRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFwV1k7RUFxV1osb0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVEo7QUFlRTtFQUVFLGFBQUE7QUFkSjtBQWlCRTtFQUVFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBaEJKO0FBa0JJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBaEJOO0FBa0JNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFwWWE7RUFxWWIseUJBQUE7RUFDQSxjQTNZVTtBQTJYbEI7QUFrQk07RUFDRSxpQkFBQTtBQWhCUjs7QUFxQkE7RUFDRSxjQW5aaUI7RUFvWmpCLHlCQXpaZ0I7RUEwWmhCLHlCQUFBO0VBQ0EsZUFBQTtBQWxCRjs7QUFvQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9FQUFBO0FBakJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkY29sb3IpIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJXRyYW5zaXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuQG1peGluIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgLy8gMTIyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJGRlc2t0b3Atd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAvLyAxMDI0cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LWxhbmQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAvLyA3NjhweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtcG9ydC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAvLyA3MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtbGFyZ2Utd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUge1xcclxcbiAgLy8gNDIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXG4vLyBCYWNrZ3JvdW5kIENvbG9yXFxyXFxuJGNvbG9yLXByaW1hcnk6ICNlM2Q1Yzk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeTogIzY2NWY1NTtcXHJcXG4kY29sb3ItYmFja2Ryb3A6ICM0MDNmM2RjYztcXHJcXG5cXHJcXG4vLyBUZXh0IENvbG9yXFxyXFxuJGNvbG9yLXRleHQtZGFyazogIzQwM2YzZDtcXHJcXG4kY29sb3ItdGV4dC1saWdodDogI2UxZDRjOTtcXHJcXG4kY29sb3ItdGV4dC1hY2NlbnQ6ICNiMDkwN2E7XFxyXFxuXFxyXFxuLy8gQm9yZGVyIENvbG9yOlxcclxcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNjMWI2YWQ7XFxyXFxuJGNvbG9yLWJvcmRlci1kYXJrOiAjNjY1ZjU1O1xcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuJGRlc2t0b3Atd2lkdGg6IDEyMjBweDtcXHJcXG4kdGFibGV0LWxhbmQtd2lkdGg6IDEwMjRweDtcXHJcXG4kdGFibGV0LXBvcnQtd2lkdGg6IDc2OHB4O1xcclxcbiRtb2JpbGUtbGFyZ2Utd2lkdGg6IDcyMHB4O1xcclxcbiRtb2JpbGUtd2lkdGg6IDQyMHB4O1xcclxcblxcbi5zZWN0aW9uX19tZW51LWNvZmZlZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDRyZW07XFxyXFxufVxcclxcbi5oZWFkZXJfX21lbnUge1xcclxcbiAgc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbiAgYSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIH1cXHJcXG4gICY6YWZ0ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIGEge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBnYXA6IDEuNnJlbTtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLm5hdmlnYXRpb25fX2xpc3RfbGluay5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4ubmF2aWdhdGlvbl9fbGlzdF9saW5rLmhvbWUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmhlYWRpbmctZGFyayB7XFxyXFxuICBAaW5jbHVkZSB0ZXh0KDZyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDgwcmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCg1cmVtLCA2MDAsIDExNSUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCg0LjJyZW0sIDYwMCwgMTE1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDMuMnJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNwYW4ge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1hY2NlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi50YWJzX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxLjdyZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICBnYXA6IDAuOHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLnRhYiB7XFxyXFxuICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWxpZ2h0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxyXFxuICBnYXA6IDAuOHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbSAxLjZyZW0gMC44cmVtIDAuOHJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4udGFiX2ljb24ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0O1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMC43cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBpbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxLjZyZW07XFxyXFxuICAgIGhlaWdodDogMi44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGFiLS1hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcXHJcXG4gIGNvbG9yOiAkY29sb3ItdGV4dC1saWdodDtcXHJcXG59XFxyXFxuLnRhYi0tYWN0aXZlIC50YWJfaWNvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgLnRhYjpob3ZlcixcXHJcXG4gIC50YWI6YWN0aXZlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgICBjb2xvcjogJGNvbG9yLXRleHQtbGlnaHQ7XFxyXFxuICB9XFxyXFxuICAudGFiOmhvdmVyIC50YWJfaWNvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBBcnRpY2xlc1xcclxcbi5hcnRpY2xlc19fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgcm93LWdhcDogMy45cmVtO1xcclxcbiAgY29sdW1uLWdhcDogNHJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgcm93LWdhcDogMy44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uYXJ0aWNsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXItbGlnaHQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcclxcbiAgbWF4LXdpZHRoOiAzMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgJl9oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgICAmOm50aC1jaGlsZChuICsgNSk6bnRoLWNoaWxkKC1uICsgOCkge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpudGgtY2hpbGQobiArIDE3KTpudGgtY2hpbGQoLW4gKyAyMCkge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgLmFydGljbGU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICAuYXJ0aWNsZTpob3ZlciAuaW1hZ2Uge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxuICB9XFxyXFxufVxcclxcbi5pbWFnZV9fY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBoZWlnaHQ6IDMxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXHJcXG59XFxyXFxuLmltYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTEuNXJlbTtcXHJcXG4gIHJpZ2h0OiAtMS42cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5pbmZvX19jb250YWluZXIge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgyLjRyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGdhcDogMS4ycmVtO1xcclxcbiAgcGFkZGluZzogMS45cmVtO1xcclxcbiAgbWluLWhlaWdodDogMTkuNnJlbTtcXHJcXG59XFxyXFxuLmluZm9fX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbn1cXHJcXG4uaW5mb19fZGVzY3JpcHRpb24ge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDQwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxufVxcclxcbi5pbmZvX19wcmljZSB7XFxyXFxuICBtYXJnaW46IGF1dG8gMCAwIDA7XFxyXFxufVxcclxcbi5pbmZvX19jb250YWluZXIgLnRhYiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5AaW5jbHVkZSBtZWRpYS1kZXNrdG9wIHtcXHJcXG4gIC5yZWZyZXNoLWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNnJlbTtcXHJcXG4gICAgaGVpZ2h0OiA2cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWRhcms7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXHJcXG5cXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIHdpZHRoOiAyLjRyZW07XFxyXFxuICAgICAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgJl9faWNvbiB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vYXNzZXRzL2ljb25zL3JlZnJlc2guc3ZnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBNb2RhbFxcclxcbi5vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmFja2Ryb3A7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1vdXQsIHZpc2liaWxpdHkgMC4zcyBlYXNlLW91dCxcXHJcXG4gICAgdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XFxyXFxufVxcclxcbi5tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiA4MHJlbTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwLjRyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcclxcbiAgcGFkZGluZzogMS42cmVtO1xcclxcbiAgY29sb3I6ICRjb2xvci10ZXh0LWRhcms7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIG1heC13aWR0aDogNjguOHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA2Mi42cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNC4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2ltYWdlIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMXJlbTtcXHJcXG5cXHJcXG4gICAgJl9jb250YWluZXIge1xcclxcbiAgICAgIG1heC13aWR0aDogMzRyZW07XFxyXFxuICAgICAgaGVpZ2h0OiAzNHJlbTtcXHJcXG4gICAgICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2luZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2luZm9fY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcblxcclxcbiAgICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgICAgIHdpZHRoOiAzMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDIuNHJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG5cXHJcXG4gICAgJl9zaXplLFxcclxcbiAgICAmX2FkZCB7XFxyXFxuICAgICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDQwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogLTEuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fcHJpY2VfdG90YWwge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDIuNHJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEuOHJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDQwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19wcmljZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1ib3JkZXItbGlnaHQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19sZWdlbmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMC44cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMC44cmVtO1xcclxcbiAgICB3aWR0aDogNDMuOHJlbTtcXHJcXG5cXHJcXG4gICAgJl90ZXh0IHtcXHJcXG4gICAgICBAaW5jbHVkZSB0ZXh0KDFyZW0sIDYwMCwgMTQwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgICAgd2lkdGg6IDQxLjRyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgICAgIHdpZHRoOiAzMi42cmVtO1xcclxcblxcclxcbiAgICAgICZfdGV4dCB7XFxyXFxuICAgICAgICB3aWR0aDogMzAuMnJlbTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgICB3aWR0aDogMzFyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2Nsb3NlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWRhcms7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fc2l6ZSBpbnB1dCxcXHJcXG4gICZfX2FkZCBpbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19zaXplLFxcclxcbiAgJl9fYWRkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDAuOXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG5cXHJcXG4gICAgJl9vcHRpb24ge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW0gMC43cmVtIDAuN3JlbTtcXHJcXG4gICAgICBnYXA6IDAuOHJlbTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWxpZ2h0O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgICAmID4gLmljb24ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0O1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29sb3ItdGV4dC1kYXJrO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmID4gLnNpemVfdGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5jaGVja2VkIHtcXHJcXG4gIGNvbG9yOiAkY29sb3ItdGV4dC1saWdodDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4uaWNvbi1pbmZvIHtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vYXNzZXRzL2ljb25zL2luZm8tZW1wdHkuc3ZnKSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvcGluLWFsdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9waG9uZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9jbG9jay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19jb2x1bW5cXFwiPiA8aDMgY2xhc3M9XFxcImhlYWRpbmctbGlnaHRcXFwiPiBTaXAsIFNhdm9yLCBTbWlsZS4gPHNwYW4+SXQncyBjb2ZmZWUgdGltZSE8L3NwYW4+IDwvaDM+IDxkaXYgY2xhc3M9XFxcInNvY2lhbC1pY29uc1xcXCI+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJzb2NpYWwtaWNvblxcXCI+PHNwYW4gY2xhc3M9XFxcInNvY2lhbC1pY29uX190d2l0dGVyXFxcIj48L3NwYW4+PC9hPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwic29jaWFsLWljb25cXFwiPjxzcGFuIGNsYXNzPVxcXCJzb2NpYWwtaWNvbl9faW5zdGFncmFtXFxcIj48L3NwYW4+PC9hPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwic29jaWFsLWljb25cXFwiPjxzcGFuIGNsYXNzPVxcXCJzb2NpYWwtaWNvbl9fZmFjZWJvb2tcXFwiPjwvc3Bhbj48L2E+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19jb2x1bW5cXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhY3RzXFxcIiBpZD1cXFwiY29udGFjdHNcXFwiPiA8cCBjbGFzcz1cXFwiZm9vdGVyX19jb250YWN0c190aXRsZVxcXCI+Q29udGFjdCB1czwvcD4gPHAgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNfYWRkcmVzc1xcXCI+IDxhIGhyZWY9XFxcImh0dHBzOi8vbWFwcy5hcHAuZ29vLmdsL1JKYXBZMlFWOVoxQVpqaW04XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJwaW4gaWNvblxcXCIvPjg1NTggR3JlZW4gUmQuLCBMQTwvYT4gPC9wPiA8cCBjbGFzcz1cXFwiZm9vdGVyX19jb250YWN0c19waG9uZVxcXCI+IDxhIGhyZWY9XFxcInRlbDorMSg2MDMpNTU1LTAxMjNcXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJwaG9uZSBpY29uXFxcIi8+KzEgKDYwMykgNTU1LTAxMjM8L2E+IDwvcD4gPHAgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNfc2NoZWR1bGVcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwiY2xvY2sgaWNvblxcXCIvPk1vbi1TYXQ6IDk6MDAgQU0g4oCTIDIzOjAwIFBNIDwvcD4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL2NvZmZlZS1jdXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImhlYWRlcl9fY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwibG9nb1xcXCI+IDxhIGhyZWY9XFxcIi4vaW5kZXguaHRtbFxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJsb2dvXFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIi8+IDxoMSBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj4gUmVzb3Vyc2UgLSB0aGUgYmVzdCBjb2ZmZWUgaG91c2UgaW4geW91ciBhcmVhIDwvaDE+PC9hPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibmF2aWdhdGlvbl9fd3JhcHBlclxcXCI+IDxuYXYgY2xhc3M9XFxcImhlYWRlcl9fbmF2aWdhdGlvblxcXCI+IDx1bCBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdFxcXCI+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rIGhvbWVcXFwiPiA8YSBocmVmPVxcXCIjZmF2b3JpdGVcXFwiPkZhdm9yaXRlIGNvZmZlZTwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmsgbWVudVxcXCI+IDxhIGhyZWY9XFxcIi4vI2Zhdm9yaXRlXFxcIj5GYXZvcml0ZSBjb2ZmZWU8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rIGhvbWVcXFwiPiA8YSBocmVmPVxcXCIjYWJvdXRcXFwiPkFib3V0PC9hPiA8L2xpPiA8bGkgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2xpc3RfbGluayBtZW51XFxcIj4gPGEgaHJlZj1cXFwiLi8jYWJvdXRcXFwiPkFib3V0PC9hPiA8L2xpPiA8bGkgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2xpc3RfbGluayBob21lXFxcIj4gPGEgaHJlZj1cXFwiI2FwcFxcXCI+TW9iaWxlIGFwcDwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmsgbWVudVxcXCI+IDxhIGhyZWY9XFxcIi4vI2FwcFxcXCI+TW9iaWxlIGFwcDwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmtcXFwiPiA8YSBocmVmPVxcXCIjY29udGFjdHNcXFwiPkNvbnRhY3QgdXM8L2E+IDwvbGk+IDwvdWw+IDwvbmF2PiA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX21lbnVcXFwiPiA8c3Bhbj5NZW51IDxpbWcgY2xhc3M9XFxcImljb24tY3VwXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcImNvZmZlZSBjdXAgaWNvblxcXCIvPjwvc3Bhbj4gPGEgaHJlZj1cXFwiLi9tZW51Lmh0bWxcXFwiPjxwPk1lbnU8L3A+IDxpbWcgY2xhc3M9XFxcImljb24tY3VwXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcImNvZmZlZSBjdXAgaWNvblxcXCIvPiA8L2E+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYnVyZ2VyX19jb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJidXJnZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiYnVyZ2VyX19saW5lXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJidXJnZXJfX2xpbmVcXFwiPjwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb24tY29mZmVlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb24tdGVhLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb24tZGVzc2VydC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIGNvZGUgPSBcIjxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uXFxcIj4gPGRpdiBjbGFzcz1cXFwic2VjdGlvbl9fbWVudS1jb2ZmZWVcXFwiPiA8aDMgY2xhc3M9XFxcImhlYWRpbmctZGFya1xcXCI+IEJlaGluZCBlYWNoIG9mIG91ciBjdXBzIGhpZGVzIGFuIDxzcGFuPmFtYXppbmcgc3VycHJpc2U8L3NwYW4+IDwvaDM+IDxkaXYgY2xhc3M9XFxcInRhYnNfX2NvbnRhaW5lclxcXCI+IDxidXR0b24gY2xhc3M9XFxcInRhYiB0YWItLWFjdGl2ZVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJ0YWJfaWNvbiBjb2ZmZWUtaWNvblxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJcXFwiLz4gPC9zcGFuPiBDb2ZmZWUgPC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcInRhYlxcXCI+IDxzcGFuIGNsYXNzPVxcXCJ0YWJfaWNvbiB0ZWEtaWNvblxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJcXFwiLz4gPC9zcGFuPlRlYSA8L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cXFwidGFiXFxcIj4gPHNwYW4gY2xhc3M9XFxcInRhYl9pY29uIGRlc3NlcnQtaWNvblxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJcXFwiLz4gPC9zcGFuPkRlc3NlcnQgPC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlc19fY29udGFpbmVyXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwicmVmcmVzaC1idG5cXFwiPiA8c3BhbiBjbGFzcz1cXFwicmVmcmVzaC1idG5fX2ljb25cXFwiPjwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8L3NlY3Rpb24+IFwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9tZW51LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL21lbnUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGltZ0NvZmZlZTEgZnJvbSBcIi4vY29mZmVlLTEucG5nXCI7XHJcbmltcG9ydCBpbWdDb2ZmZWUyIGZyb20gXCIuL2NvZmZlZS0yLnBuZ1wiO1xyXG5pbXBvcnQgaW1nQ29mZmVlMyBmcm9tIFwiLi9jb2ZmZWUtMy5wbmdcIjtcclxuaW1wb3J0IGltZ0NvZmZlZTQgZnJvbSBcIi4vY29mZmVlLTQucG5nXCI7XHJcbmltcG9ydCBpbWdDb2ZmZWU1IGZyb20gXCIuL2NvZmZlZS01LnBuZ1wiO1xyXG5pbXBvcnQgaW1nQ29mZmVlNiBmcm9tIFwiLi9jb2ZmZWUtNi5wbmdcIjtcclxuaW1wb3J0IGltZ0NvZmZlZTcgZnJvbSBcIi4vY29mZmVlLTcucG5nXCI7XHJcbmltcG9ydCBpbWdDb2ZmZWU4IGZyb20gXCIuL2NvZmZlZS04LnBuZ1wiO1xyXG5pbXBvcnQgaW1nVGVhMSBmcm9tIFwiLi90ZWEtMS5wbmdcIjtcclxuaW1wb3J0IGltZ1RlYTIgZnJvbSBcIi4vdGVhLTIucG5nXCI7XHJcbmltcG9ydCBpbWdUZWEzIGZyb20gXCIuL3RlYS0zLnBuZ1wiO1xyXG5pbXBvcnQgaW1nVGVhNCBmcm9tIFwiLi90ZWEtNC5wbmdcIjtcclxuaW1wb3J0IGltZ0Rlc3NlcnQxIGZyb20gXCIuL2Rlc3NlcnQtMS5wbmdcIjtcclxuaW1wb3J0IGltZ0Rlc3NlcnQyIGZyb20gXCIuL2Rlc3NlcnQtMi5wbmdcIjtcclxuaW1wb3J0IGltZ0Rlc3NlcnQzIGZyb20gXCIuL2Rlc3NlcnQtMy5wbmdcIjtcclxuaW1wb3J0IGltZ0Rlc3NlcnQ0IGZyb20gXCIuL2Rlc3NlcnQtNC5wbmdcIjtcclxuaW1wb3J0IGltZ0Rlc3NlcnQ1IGZyb20gXCIuL2Rlc3NlcnQtNS5wbmdcIjtcclxuaW1wb3J0IGltZ0Rlc3NlcnQ2IGZyb20gXCIuL2Rlc3NlcnQtNi5wbmdcIjtcclxuaW1wb3J0IGltZ0Rlc3NlcnQ3IGZyb20gXCIuL2Rlc3NlcnQtNy5wbmdcIjtcclxuaW1wb3J0IGltZ0Rlc3NlcnQ4IGZyb20gXCIuL2Rlc3NlcnQtOC5wbmdcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgaW1nQ29mZmVlMSxcclxuICBpbWdDb2ZmZWUyLFxyXG4gIGltZ0NvZmZlZTMsXHJcbiAgaW1nQ29mZmVlNCxcclxuICBpbWdDb2ZmZWU1LFxyXG4gIGltZ0NvZmZlZTYsXHJcbiAgaW1nQ29mZmVlNyxcclxuICBpbWdDb2ZmZWU4LFxyXG4gIGltZ1RlYTEsXHJcbiAgaW1nVGVhMixcclxuICBpbWdUZWEzLFxyXG4gIGltZ1RlYTQsXHJcbiAgaW1nRGVzc2VydDEsXHJcbiAgaW1nRGVzc2VydDIsXHJcbiAgaW1nRGVzc2VydDMsXHJcbiAgaW1nRGVzc2VydDQsXHJcbiAgaW1nRGVzc2VydDUsXHJcbiAgaW1nRGVzc2VydDYsXHJcbiAgaW1nRGVzc2VydDcsXHJcbiAgaW1nRGVzc2VydDgsXHJcbn07XHJcbiIsImltcG9ydCBodG1sVG9FbGVtZW50IGZyb20gXCIuLi8uLi91dGlscy9odG1sVG9FbGVtZW50XCI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2luZGV4Lmh0bWxcIjtcclxuXHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5cclxuY29uc3QgZm9vdGVyID0gaHRtbFRvRWxlbWVudChGb290ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyO1xyXG4iLCJpbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvaHRtbFRvRWxlbWVudFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2luZGV4Lmh0bWxcIjtcclxuXHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5cclxuY29uc3QgaGVhZGVyID0gaHRtbFRvRWxlbWVudChIZWFkZXIpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIC8vIEJ1cmdlclxyXG4gIGNvbnN0IGJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyX19jb250YWluZXJcIik7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2aWdhdGlvbl9fd3JhcHBlclwiKTtcclxuICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbl9fbGlzdF9saW5rXCIpO1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbiAgYnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibm8tc2Nyb2xsXCIpO1xyXG4gIH0pO1xyXG5cclxuICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuXHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbFwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcclxuIiwiZXhwb3J0IGNsYXNzIEFydGljbGUge1xyXG4gIGNvbnN0cnVjdG9yKHsgaWQsIG5hbWUsIHVybFRvSW1hZ2UsIGRlc2NyaXB0aW9uLCBwcmljZSwgY2F0ZWdvcnkgfSkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudXJsVG9JbWFnZSA9IHVybFRvSW1hZ2U7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUFydGljbGUoKSB7XHJcbiAgICBsZXQgdGVtcGxhdGUgPSBcIlwiO1xyXG4gICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuICAgIGFydGljbGUuY2xhc3NOYW1lID0gXCJhcnRpY2xlXCI7XHJcbiAgICBhcnRpY2xlLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdGhpcy5pZCk7XHJcbiAgICB0ZW1wbGF0ZSArPSBgPGRpdiBjbGFzcz1cImltYWdlX19jb250YWluZXJcIj5gO1xyXG4gICAgdGVtcGxhdGUgKz0gYDxpbWcgc3JjPSR7dGhpcy51cmxUb0ltYWdlfSBjbGFzcz1cImltYWdlXCIgYWx0PVwiUGhvdG8gb2YgJHt0aGlzLm5hbWV9XCIgLz5gO1xyXG4gICAgdGVtcGxhdGUgKz0gYDwvZGl2PmA7XHJcbiAgICB0ZW1wbGF0ZSArPSBgPGRpdiBjbGFzcz1cImluZm9fX2NvbnRhaW5lclwiPmA7XHJcbiAgICB0ZW1wbGF0ZSArPSBgPGgzIGNsYXNzPVwiaW5mb19fdGl0bGVcIj4ke3RoaXMubmFtZX08L2gzPmA7XHJcbiAgICB0ZW1wbGF0ZSArPSBgPHAgY2xhc3M9XCJpbmZvX19kZXNjcmlwdGlvblwiPiR7dGhpcy5kZXNjcmlwdGlvbn08L3A+YDtcclxuICAgIHRoaXMucHJpY2UgJiYgKHRlbXBsYXRlICs9IGA8cCBjbGFzcz1cImluZm9fX3ByaWNlXCI+JCR7dGhpcy5wcmljZX08L3A+YCk7XHJcbiAgICB0aGlzLmNhdGVnb3J5ICYmICh0ZW1wbGF0ZSArPSBgPHAgY2xhc3M9XCJ0YWJcIj4ke3RoaXMuY2F0ZWdvcnl9PC9wPmApO1xyXG4gICAgdGVtcGxhdGUgKz0gYDwvZGl2PmA7XHJcbiAgICBhcnRpY2xlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xyXG4gICAgcmV0dXJuIGFydGljbGU7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBNb2RhbCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjbGFzc2VzLFxyXG4gICAgeyBpZCwgbmFtZSwgdXJsVG9JbWFnZSwgZGVzY3JpcHRpb24sIHByaWNlLCBjYXRlZ29yeSwgc2l6ZXMsIGFkZGl0aXZlcyB9XHJcbiAgKSB7XHJcbiAgICB0aGlzLmNsYXNzZXMgPSBjbGFzc2VzO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudXJsVG9JbWFnZSA9IHVybFRvSW1hZ2U7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XHJcbiAgICB0aGlzLmFkZGl0aXZlcyA9IGFkZGl0aXZlcztcclxuICAgIHRoaXMub3ZlcmxheSA9IFwiXCI7XHJcbiAgICB0aGlzLm1vZGFsID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGluaXQoY29udGVudCkge1xyXG4gICAgdGhpcy5vdmVybGF5ID0gdGhpcy5jcmVhdGVEb21Ob2RlKHRoaXMub3ZlcmxheSwgXCJkaXZcIiwgXCJvdmVybGF5XCIpO1xyXG4gICAgdGhpcy5tb2RhbCA9IHRoaXMuY3JlYXRlRG9tTm9kZSh0aGlzLm1vZGFsLCBcImRpdlwiLCBcIm1vZGFsXCIsIHRoaXMuY2xhc3Nlcyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLm92ZXJsYXkpO1xyXG4gICAgdGhpcy5vdmVybGF5LmFwcGVuZCh0aGlzLm1vZGFsKTtcclxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcclxuICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZU1vZGFsKTtcclxuXHJcbiAgICB0aGlzLm9wZW5Nb2RhbCgpO1xyXG4gIH1cclxuICBjcmVhdGVEb21Ob2RlKG5vZGUsIGVsZW1lbnQsIC4uLmNsYXNzZXMpIHtcclxuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG4gIHNldENvbnRlbnQoY29udGVudCkge1xyXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgdGhpcy5tb2RhbC5hcHBlbmQoY29udGVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdlbmVyYXRlQ29udGVudCgpIHtcclxuICAgIGxldCB0ZW1wbGF0ZSA9IFwiXCI7XHJcbiAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhcnRpY2xlLmNsYXNzTmFtZSA9IFwibW9kYWxfX3dyYXBwZXJcIjtcclxuXHJcbiAgICB0ZW1wbGF0ZSArPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ltYWdlX2NvbnRhaW5lclwiPlxyXG4gICAgPGltZ1xyXG4gICAgICBzcmM9JHt0aGlzLnVybFRvSW1hZ2V9XHJcbiAgICAgIGFsdD1cIlBob3RvIG9mICR7dGhpcy5uYW1lfVwiXHJcbiAgICAgIGNsYXNzPVwibW9kYWxfX2ltYWdlXCJcclxuICAgIC8+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1vZGFsX19pbmZvX2NvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsX19pbmZvXCI+XHJcbiAgICAgIDxoMyBjbGFzcz1cIm1vZGFsX190aXRsZVwiPiR7dGhpcy5uYW1lfTwvaDM+XHJcbiAgICAgIDxwIGNsYXNzPVwibW9kYWxfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICR7dGhpcy5kZXNjcmlwdGlvbn1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cCBjbGFzcz1cIm1vZGFsX190aXRsZV9zaXplXCI+U2l6ZTwvcD5cclxuXHJcbiAgICA8Zm9ybSBjbGFzcz1cIm1vZGFsX19zaXplXCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2l6ZVwiIHZhbHVlPVwiMC4wMFwiIGlkPVwic2l6ZS1zXCIgY2hlY2tlZCAvPlxyXG4gICAgICA8bGFiZWwgZm9yPVwic2l6ZS1zXCIgY2xhc3M9XCJtb2RhbF9fc2l6ZV9vcHRpb24gY2hlY2tlZFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPiR7T2JqZWN0LmtleXModGhpcy5zaXplcylbMF19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2l6ZV90aXRsZVwiPiR7T2JqZWN0LnZhbHVlcyh0aGlzLnNpemVzKVswXS5zaXplfTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2l6ZVwiIHZhbHVlPVwiMC41MFwiIGlkPVwic2l6ZS1tXCIgLz5cclxuICAgICAgPGxhYmVsIGZvcj1cInNpemUtbVwiIGNsYXNzPVwibW9kYWxfX3NpemVfb3B0aW9uXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+JHtPYmplY3Qua2V5cyh0aGlzLnNpemVzKVsxXX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXplX3RpdGxlXCI+JHtPYmplY3QudmFsdWVzKHRoaXMuc2l6ZXMpWzFdLnNpemV9PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzaXplXCIgdmFsdWU9XCIxLjAwXCIgaWQ9XCJzaXplLWxcIiAvPlxyXG4gICAgICA8bGFiZWwgZm9yPVwic2l6ZS1sXCIgY2xhc3M9XCJtb2RhbF9fc2l6ZV9vcHRpb25cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke09iamVjdC5rZXlzKHRoaXMuc2l6ZXMpWzJdfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInNpemVfdGl0bGVcIj4ke09iamVjdC52YWx1ZXModGhpcy5zaXplcylbMl0uc2l6ZX08L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG4gICAgPHAgY2xhc3M9XCJtb2RhbF9fdGl0bGVfYWRkXCI+QWRkaXRpdmVzPC9wPlxyXG4gICAgXHJcbiAgICA8Zm9ybSBjbGFzcz1cIm1vZGFsX19hZGRcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhZGRcIiB2YWx1ZT1cIjAuNTBcIiBpZD1cImFkZC0xXCIgLz5cclxuICAgICAgPGxhYmVsIGZvcj1cImFkZC0xXCIgY2xhc3M9XCJtb2RhbF9fYWRkX29wdGlvblwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPjE8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXplX3RpdGxlXCI+JHt0aGlzLmFkZGl0aXZlc1swXS5uYW1lfTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhZGRcIiB2YWx1ZT1cIjAuNTBcIiBpZD1cImFkZC0yXCIgLz5cclxuICAgICAgPGxhYmVsIGZvcj1cImFkZC0yXCIgY2xhc3M9XCJtb2RhbF9fYWRkX29wdGlvblwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPjI8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXplX3RpdGxlXCI+JHt0aGlzLmFkZGl0aXZlc1sxXS5uYW1lfTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhZGRcIiB2YWx1ZT1cIjAuNTBcIiBpZD1cImFkZC0yXCIgLz5cclxuICAgICAgPGxhYmVsIGZvcj1cImFkZC0yXCIgY2xhc3M9XCJtb2RhbF9fYWRkX29wdGlvblwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPjM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXplX3RpdGxlXCI+JHt0aGlzLmFkZGl0aXZlc1syXS5uYW1lfTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvZm9ybT5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fcHJpY2VcIj5cclxuICAgICAgPGgzIGNsYXNzPVwibW9kYWxfX3RpdGxlXCI+VG90YWw6PC9oMz5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsX19wcmljZV90b3RhbFwiPiQke3RoaXMucHJpY2V9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fbGVnZW5kXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1pbmZvXCI+PC9zcGFuPlxyXG4gICAgICA8cCBjbGFzcz1cIm1vZGFsX19sZWdlbmRfdGV4dFwiPlxyXG4gICAgICAgIFRoZSBjb3N0IGlzIG5vdCBmaW5hbC4gRG93bmxvYWQgb3VyIG1vYmlsZSBhcHAgdG8gc2VlIHRoZSBmaW5hbFxyXG4gICAgICAgIHByaWNlIGFuZCBwbGFjZSB5b3VyIG9yZGVyLiBFYXJuIGxveWFsdHkgcG9pbnRzIGFuZCBlbmpveVxyXG4gICAgICAgIHlvdXIgZmF2b3JpdGUgY29mZmVlIHdpdGggdXAgdG8gMjAlIGRpc2NvdW50LlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbF9fY2xvc2VcIj5DbG9zZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIGA7XHJcbiAgICBhcnRpY2xlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xyXG4gICAgcmV0dXJuIGFydGljbGU7XHJcbiAgfVxyXG4gIHJlbmRlck1vZGFsKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmdlbmVyYXRlQ29udGVudCgpO1xyXG4gICAgdGhpcy5pbml0KGNvbnRlbnQpO1xyXG4gIH1cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLm92ZXJsYXkpO1xyXG4gICAgdGhpcy5vdmVybGF5LmFwcGVuZCh0aGlzLm1vZGFsKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJuby1zY3JvbGxcIik7XHJcbiAgfVxyXG4gIGNsb3NlTW9kYWwoZSkge1xyXG4gICAgbGV0IGNsYXNzZXMgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XHJcbiAgICBpZiAoY2xhc3Nlcy5jb250YWlucyhcIm92ZXJsYXlcIikgfHwgY2xhc3Nlcy5jb250YWlucyhcIm1vZGFsX19jbG9zZVwiKSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIikucmVtb3ZlKCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBodG1sVG9FbGVtZW50IGZyb20gXCIuLi8uLi91dGlscy9odG1sVG9FbGVtZW50XCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL2luZGV4Lmh0bWxcIjtcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4vcHJvZHVjdHNEYXRhLmpzXCI7XHJcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi9BcnRpY2xlLmpzXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4vTW9kYWwuanNcIjtcclxuXHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5cclxuY29uc3QgbWVudSA9IGh0bWxUb0VsZW1lbnQoTWVudSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgcmVuZGVyQXJ0aWNsZXNUb0RvbSA9ICgpID0+IHtcclxuICAgIGxldCBhcnRpY2xlc1dyYXBwZXIgPSBnZXRBcnRpY2xlc1dyYXBwZXIoKTtcclxuICAgIGdlbmVyYXRlQXJ0aWNsZXMoZGF0YSkuZm9yRWFjaCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICBhcnRpY2xlc1dyYXBwZXIuYXBwZW5kKGFydGljbGUuZ2VuZXJhdGVBcnRpY2xlKCkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0QXJ0aWNsZXNXcmFwcGVyKCkge1xyXG4gICAgY29uc3QgYXJ0aWNsZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGVzX19jb250YWluZXJcIik7XHJcbiAgICBhcnRpY2xlc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgcmV0dXJuIGFydGljbGVzQ29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2VuZXJhdGVBcnRpY2xlcyhkYXRhKSB7XHJcbiAgICBsZXQgYXJ0aWNsZXMgPSBbXTtcclxuICAgIGRhdGEuZm9yRWFjaCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICBhcnRpY2xlcy5wdXNoKG5ldyBBcnRpY2xlKGFydGljbGUpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFydGljbGVzO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRhdGEpIHtcclxuICAgIHJlbmRlckFydGljbGVzVG9Eb20oKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZFRhYnNDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi50YWJzX19jb250YWluZXJcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJcIikpIHtcclxuICAgICAgICAgIGxldCBjbGlja2VkVGFiID0gZS50YXJnZXQuY2xvc2VzdChcIi50YWJcIik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjbGlja2VkVGFiKTtcclxuICAgICAgICAgIHJlbW92ZVRhYlNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgYWRkVGFiU2VsZWN0aW9uKGNsaWNrZWRUYWIpO1xyXG4gICAgICAgICAgZmlsdGVyTWVudUJ5U2VsZWN0ZWRUYWIoY2xpY2tlZFRhYi5pbm5lclRleHQudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGFkZFRhYnNDbGlja0hhbmRsZXIoKTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlVGFiU2VsZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNfX2NvbnRhaW5lciAudGFiXCIpO1xyXG4gICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcclxuICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWItLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRhYlNlbGVjdGlvbiA9IChjbGlja2VkVGFiKSA9PiB7XHJcbiAgICBjbGlja2VkVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWItLWFjdGl2ZVwiKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJNZW51QnlTZWxlY3RlZFRhYihjbGlja2VkVGFiKSB7XHJcbiAgICBsZXQgYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFydGljbGVcIik7XHJcbiAgICBhcnRpY2xlcy5mb3JFYWNoKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZChcImFydGljbGVfaGlkZGVuXCIpO1xyXG5cclxuICAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYlwiKS5mb3JFYWNoKCh0YWIpID0+IHtcclxuICAgICAgICBpZiAodGFiLmlubmVySFRNTCA9PT0gY2xpY2tlZFRhYikge1xyXG4gICAgICAgICAgYXJ0aWNsZS5jbGFzc0xpc3QucmVtb3ZlKFwiYXJ0aWNsZV9oaWRkZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gbW9kYWwgaGFuZGxlcnNcclxuICBjb25zdCBhZGRBcnRpY2xlQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZXNfX2NvbnRhaW5lclwiKVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCIuYXJ0aWNsZVwiKSkge1xyXG4gICAgICAgICAgbGV0IGNsaWNrZWRBcnRpY2xlSWQgPSBlLnRhcmdldFxyXG4gICAgICAgICAgICAuY2xvc2VzdChcIi5hcnRpY2xlXCIpXHJcbiAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xyXG4gICAgICAgICAgbGV0IGNsaWNrZWRBcnRpY2xlRGF0YSA9IGdldENsaWNrZWREYXRhKGNsaWNrZWRBcnRpY2xlSWQpO1xyXG5cclxuICAgICAgICAgIHJlbmRlckFydGljbGVNb2RhbFdpbmRvdyhjbGlja2VkQXJ0aWNsZURhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfTtcclxuICBhZGRBcnRpY2xlQ2xpY2tIYW5kbGVyKCk7XHJcblxyXG4gIGNvbnN0IGdldENsaWNrZWREYXRhID0gKGlkKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YS5maW5kKChhcnRpY2xlKSA9PiBhcnRpY2xlLmlkID09IGlkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJBcnRpY2xlTW9kYWxXaW5kb3cgPSAoY29udGVudCkgPT4ge1xyXG4gICAgbGV0IG1vZGFsID0gbmV3IE1vZGFsKFwibW9kYWxfX3dyYXBwZXJcIiwgY29udGVudCk7XHJcbiAgICBtb2RhbC5yZW5kZXJNb2RhbCgpO1xyXG4gIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudTtcclxuIiwiaW1wb3J0ICogYXMgaW1hZ2VzIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzLmpzXCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogXCJJcmlzaCBjb2ZmZWVcIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdDb2ZmZWUxLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiRnJhZ3JhbnQgYmxhY2sgY29mZmVlIHdpdGggSmFtZXNvbiBJcmlzaCB3aGlza2V5IGFuZCB3aGlwcGVkIG1pbGtcIixcclxuICAgIHByaWNlOiBcIjcuMDBcIixcclxuICAgIGNhdGVnb3J5OiBcImNvZmZlZVwiLFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBsOiB7XHJcbiAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ2lubmFtb25cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiBcIkthaGx1YSBjb2ZmZWVcIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdDb2ZmZWUyLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQ2xhc3NpYyBjb2ZmZWUgd2l0aCBtaWxrIGFuZCBLYWhsdWEgbGlxdWV1ciB1bmRlciBhIGNhcCBvZiBmcm90aGVkIG1pbGtcIixcclxuICAgIHByaWNlOiBcIjcuMDBcIixcclxuICAgIGNhdGVnb3J5OiBcImNvZmZlZVwiLFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBsOiB7XHJcbiAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ2lubmFtb25cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiBcIkhvbmV5IHJhZlwiLFxyXG4gICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0NvZmZlZTMsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJFc3ByZXNzbyB3aXRoIGZyb3RoZWQgbWlsaywgY3JlYW0gYW5kIGFyb21hdGljIGhvbmV5XCIsXHJcbiAgICBwcmljZTogXCI1LjUwXCIsXHJcbiAgICBjYXRlZ29yeTogXCJjb2ZmZWVcIixcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBzaXplOiBcIjIwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBtOiB7XHJcbiAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAgbDoge1xyXG4gICAgICAgIHNpemU6IFwiNDAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN1Z2FyXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNpbm5hbW9uXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgbmFtZTogXCJJY2UgY2FwcHVjY2lub1wiLFxyXG4gICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0NvZmZlZTQsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDYXBwdWNjaW5vIHdpdGggc29mdCB0aGljayBmb2FtIGluIHN1bW1lciB2ZXJzaW9uIHdpdGggaWNlXCIsXHJcbiAgICBwcmljZTogXCI1LjAwXCIsXHJcbiAgICBjYXRlZ29yeTogXCJjb2ZmZWVcIixcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBzaXplOiBcIjIwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBtOiB7XHJcbiAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAgbDoge1xyXG4gICAgICAgIHNpemU6IFwiNDAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN1Z2FyXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNpbm5hbW9uXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogXCJFc3ByZXNzb1wiLFxyXG4gICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0NvZmZlZTUsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDbGFzc2ljIGJsYWNrIGNvZmZlZVwiLFxyXG4gICAgcHJpY2U6IFwiNC41MFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiY29mZmVlXCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFkZGl0aXZlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDaW5uYW1vblwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIG5hbWU6IFwiTGF0dGVcIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdDb2ZmZWU2LFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiRXNwcmVzc28gY29mZmVlIHdpdGggdGhlIGFkZGl0aW9uIG9mIHN0ZWFtZWQgbWlsayBhbmQgZGVuc2UgbWlsayBmb2FtXCIsXHJcbiAgICBwcmljZTogXCI1LjUwXCIsXHJcbiAgICBjYXRlZ29yeTogXCJjb2ZmZWVcIixcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBzaXplOiBcIjIwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBtOiB7XHJcbiAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAgbDoge1xyXG4gICAgICAgIHNpemU6IFwiNDAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN1Z2FyXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNpbm5hbW9uXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGlkOiA3LFxyXG4gICAgbmFtZTogXCJMYXR0ZSBtYWNjaGlhdG9cIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdDb2ZmZWU3LFxyXG4gICAgZGVzY3JpcHRpb246IFwiRXNwcmVzc28gd2l0aCBmcm90aGVkIG1pbGsgYW5kIGNob2NvbGF0ZVwiLFxyXG4gICAgcHJpY2U6IFwiNS41MFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiY29mZmVlXCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFkZGl0aXZlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDaW5uYW1vblwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogOCxcclxuICAgIG5hbWU6IFwiQ29mZmVlIHdpdGggY29nbmFjXCIsXHJcbiAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nQ29mZmVlOCxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkZyYWdyYW50IGJsYWNrIGNvZmZlZSB3aXRoIGNvZ25hYyBhbmQgd2hpcHBlZCBjcmVhbVwiLFxyXG4gICAgcHJpY2U6IFwiNi41MFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiY29mZmVlXCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFkZGl0aXZlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDaW5uYW1vblwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogOSxcclxuICAgIG5hbWU6IFwiTW9yb2NjYW5cIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdUZWExLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiRnJhZ3JhbnQgYmxhY2sgdGVhIHdpdGggdGhlIGFkZGl0aW9uIG9mIHRhbmdlcmluZSwgY2lubmFtb24sIGhvbmV5LCBsZW1vbiBhbmQgbWludFwiLFxyXG4gICAgcHJpY2U6IFwiNC41MFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwidGVhXCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFkZGl0aXZlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJMZW1vblwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogMTAsXHJcbiAgICBuYW1lOiBcIkdpbmdlclwiLFxyXG4gICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ1RlYTIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJPcmlnaW5hbCBibGFjayB0ZWEgd2l0aCBmcmVzaCBnaW5nZXIsIGxlbW9uIGFuZCBob25leVwiLFxyXG4gICAgcHJpY2U6IFwiNS4wMFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwidGVhXCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFkZGl0aXZlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJMZW1vblwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogMTEsXHJcbiAgICBuYW1lOiBcIkNyYW5iZXJyeVwiLFxyXG4gICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ1RlYTMsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJJbnZpZ29yYXRpbmcgYmxhY2sgdGVhIHdpdGggY3JhbmJlcnJ5IGFuZCBob25leVwiLFxyXG4gICAgcHJpY2U6IFwiNS4wMFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwidGVhXCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFkZGl0aXZlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJMZW1vblwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogMTIsXHJcbiAgICBuYW1lOiBcIlNlYSBidWNrdGhvcm5cIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdUZWE0LFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVG9uaW5nIHN3ZWV0IGJsYWNrIHRlYSB3aXRoIHNlYSBidWNrdGhvcm4sIGZyZXNoIHRoeW1lIGFuZCBjaW5uYW1vblwiLFxyXG4gICAgcHJpY2U6IFwiNS41MFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwidGVhXCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFkZGl0aXZlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJMZW1vblwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogMTMsXHJcbiAgICBuYW1lOiBcIk1hcmJsZSBjaGVlc2VjYWtlXCIsXHJcbiAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nRGVzc2VydDEsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJQaGlsYWRlbHBoaWEgY2hlZXNlIHdpdGggbGVtb24gemVzdCBvbiBhIGxpZ2h0IHNwb25nZSBjYWtlIGFuZCByZWQgY3VycmFudCBqYW1cIixcclxuICAgIHByaWNlOiBcIjMuNTBcIixcclxuICAgIGNhdGVnb3J5OiBcImRlc3NlcnRcIixcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBzaXplOiBcIjUwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAgbDoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQmVycmllc1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJOdXRzXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogMTQsXHJcbiAgICBuYW1lOiBcIlJlZCB2ZWx2ZXRcIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdEZXNzZXJ0MixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkxheWVyIGNha2Ugd2l0aCBjcmVhbSBjaGVlc2UgZnJvc3RpbmdcIixcclxuICAgIHByaWNlOiBcIjQuMDBcIixcclxuICAgIGNhdGVnb3J5OiBcImRlc3NlcnRcIixcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBzaXplOiBcIjUwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAgbDoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQmVycmllc1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJOdXRzXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogMTUsXHJcbiAgICBuYW1lOiBcIkNoZWVzZWNha2VzXCIsXHJcbiAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nRGVzc2VydDMsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJTb2Z0IGNvdHRhZ2UgY2hlZXNlIHBhbmNha2VzIHdpdGggc291ciBjcmVhbSBhbmQgZnJlc2ggYmVycmllcyBhbmQgc3ByaW5rbGVkIHdpdGggcG93ZGVyZWQgc3VnYXJcIixcclxuICAgIHByaWNlOiBcIjQuNTBcIixcclxuICAgIGNhdGVnb3J5OiBcImRlc3NlcnRcIixcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBzaXplOiBcIjUwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAgbDoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQmVycmllc1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJOdXRzXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogMTYsXHJcbiAgICBuYW1lOiBcIkNyZW1lIGJydWxlZVwiLFxyXG4gICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0Rlc3NlcnQ0LFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiRGVsaWNhdGUgY3JlYW15IGRlc3NlcnQgaW4gYSBjYXJhbWVsIGJhc2tldCB3aXRoIHdpbGQgYmVycmllc1wiLFxyXG4gICAgcHJpY2U6IFwiNC4wMFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiZGVzc2VydFwiLFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIHNpemU6IFwiNTAgZ1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBtOiB7XHJcbiAgICAgICAgc2l6ZTogXCIxMDAgZ1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBsOiB7XHJcbiAgICAgICAgc2l6ZTogXCIyMDAgZ1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFkZGl0aXZlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJCZXJyaWVzXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIk51dHNcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiSmFtXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGlkOiAxNyxcclxuICAgIG5hbWU6IFwiUGFuY2FrZXNcIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdEZXNzZXJ0NSxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRlbmRlciBwYW5jYWtlcyB3aXRoIHN0cmF3YmVycnkgamFtIGFuZCBmcmVzaCBzdHJhd2JlcnJpZXNcIixcclxuICAgIHByaWNlOiBcIjQuNTBcIixcclxuICAgIGNhdGVnb3J5OiBcImRlc3NlcnRcIixcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBzaXplOiBcIjUwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAgbDoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQmVycmllc1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJOdXRzXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogMTgsXHJcbiAgICBuYW1lOiBcIkhvbmV5IGNha2VcIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdEZXNzZXJ0NixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkNsYXNzaWMgaG9uZXkgY2FrZSB3aXRoIGRlbGljYXRlIGN1c3RhcmRcIixcclxuICAgIHByaWNlOiBcIjQuNTBcIixcclxuICAgIGNhdGVnb3J5OiBcImRlc3NlcnRcIixcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBzaXplOiBcIjUwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAgbDoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQmVycmllc1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJOdXRzXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogMTksXHJcbiAgICBuYW1lOiBcIkNob2NvbGF0ZSBjYWtlXCIsXHJcbiAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nRGVzc2VydDcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDYWtlIHdpdGggaG90IGNob2NvbGF0ZSBmaWxsaW5nIGFuZCBudXRzIHdpdGggZHJpZWQgYXByaWNvdHNcIixcclxuICAgIHByaWNlOiBcIjUuNTBcIixcclxuICAgIGNhdGVnb3J5OiBcImRlc3NlcnRcIixcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBzaXplOiBcIjUwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAgbDoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQmVycmllc1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJOdXRzXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogMjAsXHJcbiAgICBuYW1lOiBcIkJsYWNrIGZvcmVzdFwiLFxyXG4gICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0Rlc3NlcnQ4LFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQSBjb21iaW5hdGlvbiBvZiB0aGluIHNwb25nZSBjYWtlIHdpdGggY2hlcnJ5IGphbSBhbmQgbGlnaHQgY2hvY29sYXRlIG1vdXNzZVwiLFxyXG4gICAgcHJpY2U6IFwiNi41MFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiZGVzc2VydFwiLFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIHNpemU6IFwiNTAgZ1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBtOiB7XHJcbiAgICAgICAgc2l6ZTogXCIxMDAgZ1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBsOiB7XHJcbiAgICAgICAgc2l6ZTogXCIyMDAgZ1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFkZGl0aXZlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJCZXJyaWVzXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIk51dHNcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiSmFtXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xyXG4iLCJpbXBvcnQgXCIuL21lbnUuc2Nzc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2xheW91dC9IZWFkZXJcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vbGF5b3V0L01lbnVcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9sYXlvdXQvRm9vdGVyXCI7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXJcIik7XHJcblxyXG5oZWFkZXIuYXBwZW5kKEhlYWRlcik7XHJcbm1haW4uYXBwZW5kKE1lbnUpO1xyXG5mb290ZXIuYXBwZW5kKEZvb3Rlcik7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChodG1sU3RyaW5nKSB7XHJcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XHJcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcclxuICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1lbnVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWVudS5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWVudS5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguc2Nzc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==