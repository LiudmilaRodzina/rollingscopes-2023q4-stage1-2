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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/icon-coffee.svg */ "./src/assets/icons/icon-coffee.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/icon-tea.svg */ "./src/assets/icons/icon-tea.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/icon-desserts.svg */ "./src/assets/icons/icon-desserts.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/refresh.svg */ "./src/assets/icons/refresh.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/icons/info-empty.svg */ "./src/assets/icons/info-empty.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
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
  width: 10rem;
  height: 4.8rem;
  background-color: #e3d5c9;
  border: 1px solid #c1b6ad;
  border-radius: 10rem;
  gap: 0.8rem;
  padding: 0.8rem 1.6rem 0.8rem 0.8rem;
  transition: all 0.5s ease-in-out;
}

.tab_icon {
  display: block;
  width: 3rem;
  height: 3rem;
  border-radius: 10rem;
  padding: 0 0.7rem;
  transition: all 0.5s ease-in-out;
}

.coffee-icon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.tea-icon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.dessert-icon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.tab_text {
  display: block;
  padding-top: 0.2rem;
  transition: all 0.5s ease-in-out;
}

.tab--active {
  background-color: #665f55;
  color: #e1d4c9;
}

.tab--active .tab_icon {
  background-color: #e3d5c9;
}

.tab--active .tab_text {
  color: #e3d5c9;
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
  .tab:hover .tab_text {
    color: #e3d5c9;
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
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
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
  background: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) center no-repeat;
}`, "",{"version":3,"sources":["webpack://./src/layout/Menu/index.scss"],"names":[],"mappings":"AAgEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AA/DF;;AAkEE;EACE,cAAA;AA/DJ;AAiEE;EACE,aAAA;EACA,eAAA;AA/DJ;AAiEE;EACE,mBAAA;AA/DJ;AAUE;EAyDE;IACE,aAAA;EAhEJ;EAkEE;IACE,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,WAAA;IACA,eAAA;EAhEJ;AACF;;AAmEA;EACE,cAAA;AAhEF;;AAkEA;EACE,aAAA;AA/DF;;AAiEA;EApGE,eAqGc;EApGd,gBAoGoB;EAnGpB,iBAmGyB;EAlGzB,cA6CgB;EAsDhB,kBAAA;EACA,gBAAA;AA3DF;AAbE;EAqEF;IApGE,eA0GgB;IAzGhB,gBAyGsB;IAxGtB,iBAwG2B;IAvG3B,cA6CgB;EAGhB;AACF;AAfE;EA+DF;IApGE,iBA6GgB;IA5GhB,gBA4GwB;IA3GxB,iBA2G6B;IA1G7B,cA6CgB;EAWhB;AACF;AAvBE;EA+DF;IApGE,iBAgHgB;IA/GhB,gBA+GwB;IA9GxB,iBA8G6B;IA7G7B,cA6CgB;EAmBhB;AACF;AA+CE;EACE,kBAAA;EACA,cAnEgB;AAsBpB;;AAgDA;EACE,aAAA;EACA,uBAAA;EACA,WAAA;AA7CF;AAzCE;EAmFF;IAMI,WAAA;EA5CF;AACF;;AA8CA;EAjIE,iBAkIc;EAjId,gBAiIsB;EAhItB,iBAgI2B;EA/H3B,cA6CgB;EAmFhB,0BAAA;EAIA,YAAA;EACA,cAAA;EACA,yBA9Fc;EA+Fd,yBAAA;EACA,oBAAA;EACA,WAAA;EACA,oCAAA;EACA,gCAAA;AA3CF;;AA6CA;EACE,cAAA;EAEA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,iBAAA;EACA,gCAAA;AA3CF;;AA6CA;EACE,mDAAA;AA1CF;;AA4CA;EACE,mDAAA;AAzCF;;AA2CA;EACE,mDAAA;AAxCF;;AA0CA;EACE,cAAA;EACA,mBAAA;EACA,gCAAA;AAvCF;;AAyCA;EACE,yBA5HgB;EA6HhB,cAxHiB;AAkFnB;;AAwCA;EACE,yBAjIc;AA4FhB;;AAuCA;EACE,cApIc;AAgGhB;;AAsCA;EACE;;IAEE,eAAA;IACA,yBAzIc;IA0Id,cArIe;EAkGjB;EAsCA;IACE,yBA/IY;EA2Gd;EAsCA;IACE,cAlJY;EA8Gd;AACF;AA6CA;EACE,aAAA;EACA,qCAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,oBAAA;AA3CF;AArJE;EA0LF;IASI,qCAAA;IACA,oBAAA;EA1CF;AACF;AAzIE;EAwKF;IAaI,0BAAA;EAxCF;AACF;AAxIE;EAkKF;IAgBI,eAAA;EAtCF;AACF;;AAwCA;EACE,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gCAAA;AArCF;AAuCE;EACE,aAAA;AArCJ;AA3KE;EAoNE;IACE,aAAA;EAtCJ;EAwCE;IACE,aAAA;EAtCJ;AACF;;AAyCA;EACE;IACE,eAAA;EAtCF;EAwCA;IACE,qBAAA;EAtCF;AACF;AAwCA;EACE,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;AAtCF;;AAwCA;EACE,kBAAA;EACA,YAAA;EACA,cAAA;EACA,gCAAA;AArCF;;AAuCA;EAnQE,iBAoQc;EAnQd,gBAmQsB;EAlQtB,iBAkQ2B;EAjQ3B,cA6CgB;EAqNhB,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;AAjCF;;AAmCA;EACE,iBAAA;AAhCF;;AAkCA;EA/QE,iBAgRc;EA/Qd,gBA+QsB;EA9QtB,iBA8Q2B;EA7Q3B,cA6CgB;AAoMlB;;AA8BA;EACE,kBAAA;AA3BF;;AA6BA;EACE,aAAA;AA1BF;;AA/OE;EA4QA;IACE,aAAA;IACA,6BAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;IACA,yBAAA;IACA,kBAAA;IACA,iBAAA;IACA,oBAAA;IACA,oBAAA;EAzBF;EA2BE;IACE,qBAAA;IACA,aAAA;IACA,cAAA;EAzBJ;EA2BE;IACE,mDAAA;EAzBJ;AACF;AA8BA;EACE,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,uCA7Qe;EA8Qf,oFAAA;AA5BF;;AA+BA;EACE,kBAAA;EACA,yBArRc;EAsRd,cAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,cAtRgB;AA0PlB;AAvRE;EA2SF;IAWI,kBAAA;IACA,eAAA;IACA,mBAAA;EA3BF;AACF;AAlRE;EA+RF;IAgBI,kBAAA;EAzBF;AACF;AA2BE;EACE,aAAA;EACA,SAAA;AAzBJ;AA2BE;EACE,mBAAA;EACA,gBAAA;AAzBJ;AA2BI;EACE,gBAAA;EACA,aAAA;AAzBN;AAnSE;EA0TE;IAII,aAAA;EAvBN;AACF;AA0BE;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AAxBJ;AA0BE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAxBJ;AAlTE;EAuUA;IAMI,YAAA;EAvBJ;AACF;AAyBE;EA/WA,iBAgXgB;EA/WhB,gBA+WwB;EA9WxB,iBA8W6B;EA7W7B,cA6CgB;AA4SlB;AAsBI;EAlXF,iBAoXkB;EAnXlB,gBAmX0B;EAlX1B,iBAkX+B;EAjX/B,cA6CgB;EAqUZ,sBAAA;AAlBN;AAqBE;EAxXA,iBAyXgB;EAxXhB,gBAwXwB;EAvXxB,iBAuX6B;EAtX7B,cA6CgB;EA0Ud,sBAAA;AAhBJ;AAkBE;EA5XA,iBA6XgB;EA5XhB,gBA4XwB;EA3XxB,iBA2X6B;EA1X7B,cA6CgB;AAgUlB;AAgBE;EACE,aAAA;EACA,8BAAA;EACA,gCAAA;AAdJ;AAiBE;EACE,aAAA;EACA,8BAAA;EACA,WAAA;EACA,mBAAA;EACA,cAAA;AAfJ;AAiBI;EA7YF,eA8YkB;EA7YlB,gBA6YwB;EA5YxB,iBA4Y6B;EA3Y7B,cA6CgB;EA+VZ,cAAA;AAZN;AAhXE;EAmXA;IAaI,cAAA;EAZJ;EAcI;IACE,cAAA;EAZN;AACF;AA5WE;EAuWA;IAoBI,YAAA;EAXJ;AACF;AAcE;EACE,cAAA;EACA,WAAA;EACA,yBAAA;EACA,yBAvXY;EAwXZ,oBAAA;EACA,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AAZJ;AAkBE;EAEE,aAAA;AAjBJ;AAoBE;EAEE,aAAA;EACA,eAAA;EACA,WAAA;EACA,mBAAA;AAnBJ;AAqBI;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,oCAAA;EACA,WAAA;EACA,oBAAA;EACA,yBAAA;EACA,eAAA;AAnBN;AAqBM;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAvZa;EAwZb,yBAAA;EACA,cA9ZU;AA2YlB;AAqBM;EACE,iBAAA;AAnBR;;AAwBA;EACE,cAtaiB;EAuajB,yBA5agB;EA6ahB,yBAAA;EACA,eAAA;AArBF;;AAuBA;EACE,WAAA;EACA,YAAA;EACA,oEAAA;AApBF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n.section__menu-coffee {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 4rem;\r\n}\r\n.header__menu {\r\n  span {\r\n    display: block;\r\n  }\r\n  a {\r\n    display: none;\r\n    cursor: default;\r\n  }\r\n  &:after {\r\n    transform: scale(1);\r\n  }\r\n\r\n  @include media-tablet-port {\r\n    span {\r\n      display: none;\r\n    }\r\n    a {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      gap: 1.6rem;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n}\r\n.navigation__list_link.menu {\r\n  display: block;\r\n}\r\n.navigation__list_link.home {\r\n  display: none;\r\n}\r\n.heading-dark {\r\n  @include text(6rem, 600, 125%, $color-text-dark);\r\n  text-align: center;\r\n  max-width: 80rem;\r\n\r\n  @include media-mobile-large {\r\n    @include text(5rem, 600, 115%, $color-text-dark);\r\n  }\r\n  @include media-mobile {\r\n    @include text(4.2rem, 600, 115%, $color-text-dark);\r\n  }\r\n  @include media-mobile {\r\n    @include text(3.2rem, 600, 125%, $color-text-dark);\r\n  }\r\n\r\n  span {\r\n    font-style: italic;\r\n    color: $color-text-accent;\r\n  }\r\n}\r\n.tabs__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1.7rem;\r\n\r\n  @include media-mobile {\r\n    gap: 0.8rem;\r\n  }\r\n}\r\n.tab {\r\n  @include text(1.6rem, 600, 150%, $color-text-dark);\r\n  text-transform: capitalize;\r\n  // display: flex;\r\n  // width: auto;\r\n  // height: auto;\r\n  width: 10rem;\r\n  height: 4.8rem;\r\n  background-color: $color-primary;\r\n  border: 1px solid $color-border-light;\r\n  border-radius: 10rem;\r\n  gap: 0.8rem;\r\n  padding: 0.8rem 1.6rem 0.8rem 0.8rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.tab_icon {\r\n  display: block;\r\n  // background-color: $color-border-light;\r\n  width: 3rem;\r\n  height: 3rem;\r\n  border-radius: 10rem;\r\n  padding: 0 0.7rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.coffee-icon {\r\n  background: url(./../../assets/icons/icon-coffee.svg);\r\n}\r\n.tea-icon {\r\n  background: url(./../../assets/icons/icon-tea.svg);\r\n}\r\n.dessert-icon {\r\n  background: url(./../../assets/icons/icon-desserts.svg);\r\n}\r\n.tab_text {\r\n  display: block;\r\n  padding-top: 0.2rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.tab--active {\r\n  background-color: $color-secondary;\r\n  color: $color-text-light;\r\n}\r\n.tab--active .tab_icon {\r\n  background-color: $color-primary;\r\n}\r\n.tab--active .tab_text {\r\n  color: $color-primary;\r\n}\r\n@media (hover: hover) and (pointer: fine) {\r\n  .tab:hover,\r\n  .tab:active {\r\n    cursor: pointer;\r\n    background-color: $color-secondary;\r\n    color: $color-text-light;\r\n  }\r\n\r\n  .tab:hover .tab_icon {\r\n    background-color: $color-primary;\r\n  }\r\n  .tab:hover .tab_text {\r\n    color: $color-primary;\r\n  }\r\n}\r\n\r\n// .tab:disabled,\r\n// .tab button[disabled] {\r\n//   cursor: default;\r\n// }\r\n\r\n// Articles\r\n.articles__container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  row-gap: 3.9rem;\r\n  column-gap: 4rem;\r\n  margin-top: -2px;\r\n  padding-bottom: 6rem;\r\n\r\n  @include media-desktop {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding-bottom: 0rem;\r\n  }\r\n  @include media-mobile-large {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  @include media-mobile {\r\n    row-gap: 3.8rem;\r\n  }\r\n}\r\n.article {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid $color-border-light;\r\n  border-radius: 4rem;\r\n  max-width: 31rem;\r\n  transition: all 0.4s ease-in-out;\r\n\r\n  &_hidden {\r\n    display: none;\r\n  }\r\n\r\n  @include media-tablet-land {\r\n    &:nth-child(n + 5):nth-child(-n + 8) {\r\n      display: none;\r\n    }\r\n    &:nth-child(n + 17):nth-child(-n + 20) {\r\n      display: none;\r\n    }\r\n  }\r\n}\r\n@media (hover: hover) and (pointer: fine) {\r\n  .article:hover {\r\n    cursor: pointer;\r\n  }\r\n  .article:hover .image {\r\n    transform: scale(0.9);\r\n  }\r\n}\r\n.image__container {\r\n  position: relative;\r\n  overflow: hidden;\r\n  height: 31rem;\r\n  border-radius: 4rem;\r\n}\r\n.image {\r\n  position: absolute;\r\n  top: -1.5rem;\r\n  right: -1.6rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.info__container {\r\n  @include text(2.4rem, 600, 125%, $color-text-dark);\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  gap: 1.2rem;\r\n  padding: 1.9rem;\r\n  min-height: 19.6rem;\r\n}\r\n.info__title {\r\n  font-size: 2.4rem;\r\n}\r\n.info__description {\r\n  @include text(1.6rem, 400, 150%, $color-text-dark);\r\n}\r\n.info__price {\r\n  margin: auto 0 0 0;\r\n}\r\n.info__container .tab {\r\n  display: none;\r\n}\r\n@include media-desktop {\r\n  .refresh-btn {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    width: 6rem;\r\n    height: 6rem;\r\n    border: 1px solid $color-border-dark;\r\n    border-radius: 50%;\r\n    grid-column: 1/-1;\r\n    justify-self: center;\r\n    margin-bottom: 10rem;\r\n\r\n    span {\r\n      display: inline-block;\r\n      width: 2.4rem;\r\n      height: 2.4rem;\r\n    }\r\n    &__icon {\r\n      background: url(./../../assets/icons/refresh.svg);\r\n    }\r\n  }\r\n}\r\n\r\n// Modal\r\n.overlay {\r\n  position: fixed;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: $color-backdrop;\r\n  transition: opacity 0.3s ease-out, visibility 0.3s ease-out,\r\n    transform 0.3s ease-out;\r\n}\r\n.modal {\r\n  position: relative;\r\n  background-color: $color-primary;\r\n  overflow: auto;\r\n  max-width: 80rem;\r\n  min-height: 50.4rem;\r\n  border-radius: 4rem;\r\n  padding: 1.6rem;\r\n  color: $color-text-dark;\r\n\r\n  @include media-tablet-land {\r\n    max-width: 68.8rem;\r\n    height: 62.6rem;\r\n    margin-bottom: 2rem;\r\n  }\r\n  @include media-mobile-large {\r\n    max-width: 34.2rem;\r\n  }\r\n\r\n  &__wrapper {\r\n    display: flex;\r\n    gap: 2rem;\r\n  }\r\n  &__image {\r\n    border-radius: 4rem;\r\n    max-width: 31rem;\r\n\r\n    &_container {\r\n      max-width: 34rem;\r\n      height: 34rem;\r\n      @include media-mobile-large {\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n  &__info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.2rem;\r\n  }\r\n  &__info_container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n\r\n    @include media-mobile-large {\r\n      width: 31rem;\r\n    }\r\n  }\r\n  &__title {\r\n    @include text(2.4rem, 600, 125%, $color-text-dark);\r\n\r\n    &_size,\r\n    &_add {\r\n      @include text(1.6rem, 400, 150%, $color-text-dark);\r\n      margin-bottom: -1.2rem;\r\n    }\r\n  }\r\n  &__price_total {\r\n    @include text(2.4rem, 600, 125%, $color-text-dark);\r\n    padding-bottom: 1.8rem;\r\n  }\r\n  &__description {\r\n    @include text(1.6rem, 400, 150%, $color-text-dark);\r\n  }\r\n\r\n  &__price {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid $color-border-light;\r\n  }\r\n\r\n  &__legend {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 0.8rem;\r\n    margin-top: -0.8rem;\r\n    width: 43.8rem;\r\n\r\n    &_text {\r\n      @include text(1rem, 600, 140%, $color-text-dark);\r\n      width: 41.4rem;\r\n    }\r\n\r\n    @include media-tablet-land {\r\n      width: 32.6rem;\r\n\r\n      &_text {\r\n        width: 30.2rem;\r\n      }\r\n    }\r\n    @include media-mobile-large {\r\n      width: 31rem;\r\n    }\r\n  }\r\n\r\n  &__close {\r\n    display: block;\r\n    width: 100%;\r\n    border: 1px solid $color-border-dark;\r\n    background-color: $color-primary;\r\n    border-radius: 10rem;\r\n    padding: 1rem;\r\n    font-size: 1.6rem;\r\n    font-weight: 600;\r\n    margin-top: 1.5rem;\r\n\r\n    @include media-mobile-large {\r\n    }\r\n  }\r\n\r\n  &__size input,\r\n  &__add input {\r\n    display: none;\r\n  }\r\n\r\n  &__size,\r\n  &__add {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 0.9rem;\r\n    align-self: stretch;\r\n\r\n    &_option {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      font-weight: 600;\r\n      padding: 0.7rem 1.5rem 0.7rem 0.7rem;\r\n      gap: 0.8rem;\r\n      border-radius: 10rem;\r\n      border: 1px solid $color-border-light;\r\n      cursor: pointer;\r\n\r\n      & > .icon {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        width: 3rem;\r\n        height: 3rem;\r\n        font-size: 1.6rem;\r\n        border-radius: 50%;\r\n        background-color: $color-border-light;\r\n        text-transform: uppercase;\r\n        color: $color-text-dark;\r\n      }\r\n      & > .size_title {\r\n        font-size: 1.6rem;\r\n      }\r\n    }\r\n  }\r\n}\r\n.checked {\r\n  color: $color-text-light;\r\n  background-color: $color-secondary;\r\n  border: 1px solid $color-secondary;\r\n  cursor: default;\r\n}\r\n.icon-info {\r\n  width: 16px;\r\n  height: 16px;\r\n  background: url(./../../assets/icons/info-empty.svg) center no-repeat;\r\n}\r\n"],"sourceRoot":""}]);
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
// Module
var code = "<section class=\"section\"> <div class=\"section__menu-coffee\"> <h3 class=\"heading-dark\"> Behind each of our cups hides an <span>amazing surprise</span> </h3> <div class=\"tabs__container\"> <button class=\"tab tab--active\">coffee</button> <button class=\"tab\">tea</button> <button class=\"tab\">dessert</button> </div> <div class=\"articles__container\"></div> <div class=\"refresh-btn\"> <span class=\"refresh-btn__icon\"></span> </div> </div> </section> ";
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


// import * as images from "../../assets/images/menu-images.js";






const menu = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"]);

document.addEventListener("DOMContentLoaded", () => {
  const renderArticlesToDom = () => {
    let articlesWrapper = getArticlesWrapper();
    generateArticles(_productsData_js__WEBPACK_IMPORTED_MODULE_2__["default"]).forEach((article) => {
      articlesWrapper.append(article.generateArticle());
    });
  };

  const getArticlesWrapper = () => {
    const articlesContainer = document.querySelector(".articles__container");
    articlesContainer.innerHTML = "";
    return articlesContainer;
  };

  const generateArticles = (data) => {
    let articles = [];
    data.forEach((article) => {
      articles.push(new _Article_js__WEBPACK_IMPORTED_MODULE_3__.Article(article));
    });
    return articles;
  };

  if (_productsData_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    renderArticlesToDom();
  }

  const addTabsClickHandler = () => {
    document
      .querySelector(".tabs__container")
      .addEventListener("click", (e) => {
        if (e.target.classList.contains("tab")) {
          let clickedTab = e.target;
          removeSelectedTabs();
          selectClickedTab(clickedTab);
          filterMenuBySelectedTab(clickedTab.innerText.toLowerCase());
        }
      });
  };
  addTabsClickHandler();

  const removeSelectedTabs = () => {
    let tabs = document.querySelectorAll(".tabs__container .tab");
    tabs.forEach((tab) => {
      tab.classList.remove("tab--active");
    });
  };
  const selectClickedTab = (clickedTab) => {
    clickedTab.classList.add("tab--active");
  };

  const filterMenuBySelectedTab = (clickedTab) => {
    let articles = document.querySelectorAll(".article");
    articles.forEach((article) => {
      article.classList.add("article_hidden");
      article.querySelectorAll(".tab").forEach((tab) => {
        if (tab.innerHTML === clickedTab) {
          article.classList.remove("article_hidden");
        }
      });
    });
  };

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

module.exports = __webpack_require__.p + "03d1c1befa3606ca0afd.svg";

/***/ }),

/***/ "./src/assets/icons/icon-desserts.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/icon-desserts.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4eb694026f39aa3ee09.svg";

/***/ }),

/***/ "./src/assets/icons/icon-tea.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/icon-tea.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff01812e41b846afd3e3.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBc0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDanZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3JCQTs7Ozs7QUVBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0Zvb3Rlci9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvSGVhZGVyL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9NZW51L2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL21lbnUuc2NzcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Gb290ZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5odG1sIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvTWVudS9pbmRleC5odG1sIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9pbmRleC5zY3NzPzk1NzMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Gb290ZXIvaW5kZXguc2Nzcz9iYTdiIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvSGVhZGVyL2luZGV4LnNjc3M/MjlmNiIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L01lbnUvaW5kZXguc2Nzcz8yYjQyIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9tZW51LnNjc3M/NjBiZiIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvSGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvTWVudS9BcnRpY2xlLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvTWVudS9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L01lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9NZW51L3Byb2R1Y3RzRGF0YS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvdXRpbHMvaHRtbFRvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvaW50ZXIpO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDVjOTtcbn1cblxuLndyYXBwZXIge1xuICBtYXgtd2lkdGg6IDE0NHJlbTtcbiAgcGFkZGluZzogMCA0cmVtIDRyZW0gNHJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIG1heC13aWR0aDogNzYuOHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwIDEuNnJlbSA0cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIG1heC13aWR0aDogMzhyZW07XG4gIH1cbn1cblxuYTpsaW5rLFxuYTp2aXNpdGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDAuOHJlbTtcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IDYuNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDVjOTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG59XG5cbi5idXR0b24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFrRUE7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFoRUY7O0FBa0VBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBQS9ERjs7QUFpRUE7RUFDRSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBcENjO0FBMUJoQjs7QUFpRUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQTNDYztFQTRDZCxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQTlERjtBQUZFO0VBeURGO0lBVUksa0JBQUE7RUE3REY7QUFDRjtBQURFO0VBbURGO0lBY0ksc0JBQUE7RUE1REY7QUFDRjtBQUFFO0VBNkNGO0lBa0JJLGdCQUFBO0VBM0RGO0FBQ0Y7O0FBOERBOztFQUVFLHFCQUFBO0VBQ0EsY0FBQTtBQTNERjs7QUE4REE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQTNERjs7QUE2REE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBL0VjO0VBZ0ZkLG9CQUFBO0FBMURGOztBQTZEQTtFQTlIRSxpQkErSGM7RUE5SGQsZ0JBOEhzQjtFQTdIdEIsaUJBNkgyQjtFQTVIM0IsY0E2Q2dCO0FBd0JsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGhlaWdodCwgJGNvbG9yKSB7XFxyXFxuICBmb250LXNpemU6ICRzaXplO1xcclxcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XFxyXFxuICBsaW5lLWhlaWdodDogJGhlaWdodDtcXHJcXG4gIGNvbG9yOiAkY29sb3I7XFxyXFxufVxcclxcblxcclxcbiV0cmFuc2l0aW9uIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbkBtaXhpbiBtZWRpYS1kZXNrdG9wIHtcXHJcXG4gIC8vIDEyMjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRkZXNrdG9wLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgLy8gMTAyNHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1sYW5kLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgLy8gNzY4cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LXBvcnQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgLy8gNzIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLWxhcmdlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlIHtcXHJcXG4gIC8vIDQyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxuLy8gQmFja2dyb3VuZCBDb2xvclxcclxcbiRjb2xvci1wcmltYXJ5OiAjZTNkNWM5O1xcclxcbiRjb2xvci1zZWNvbmRhcnk6ICM2NjVmNTU7XFxyXFxuJGNvbG9yLWJhY2tkcm9wOiAjNDAzZjNkY2M7XFxyXFxuXFxyXFxuLy8gVGV4dCBDb2xvclxcclxcbiRjb2xvci10ZXh0LWRhcms6ICM0MDNmM2Q7XFxyXFxuJGNvbG9yLXRleHQtbGlnaHQ6ICNlMWQ0Yzk7XFxyXFxuJGNvbG9yLXRleHQtYWNjZW50OiAjYjA5MDdhO1xcclxcblxcclxcbi8vIEJvcmRlciBDb2xvcjpcXHJcXG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjYzFiNmFkO1xcclxcbiRjb2xvci1ib3JkZXItZGFyazogIzY2NWY1NTtcXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbiRkZXNrdG9wLXdpZHRoOiAxMjIwcHg7XFxyXFxuJHRhYmxldC1sYW5kLXdpZHRoOiAxMDI0cHg7XFxyXFxuJHRhYmxldC1wb3J0LXdpZHRoOiA3NjhweDtcXHJcXG4kbW9iaWxlLWxhcmdlLXdpZHRoOiA3MjBweDtcXHJcXG4kbW9iaWxlLXdpZHRoOiA0MjBweDtcXHJcXG5cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL2ludGVyXFxcIik7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBtYXgtd2lkdGg6IDE0NHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgNHJlbSA0cmVtIDRyZW07XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICBtYXgtd2lkdGg6IDc2LjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgICBwYWRkaW5nOiAwIDEuNnJlbSA0cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAzOHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuYTpsaW5rLFxcclxcbmE6dmlzaXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjhyZW07XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxuICBoZWlnaHQ6IDYuNHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tdGV4dCB7XFxyXFxuICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaWNvbnMvdHdpdHRlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaWNvbnMvdHdpdHRlci1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pY29ucy9pbnN0YWdyYW0taG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ljb25zL2ZhY2Vib29rLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pY29ucy9mYWNlYm9vay1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3Rlcl9fY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NWY1NTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICBnYXA6IDEwcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZm9vdGVyX19jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIHBhZGRpbmc6IDEwcmVtIDZyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuZm9vdGVyX19jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDZyZW0gMS42cmVtO1xuICAgIGdhcDogNHJlbTtcbiAgfVxufVxuLmZvb3Rlcl9fY29udGFpbmVyIC5oZWFkaW5nLWxpZ2h0IHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyIC5oZWFkaW5nLWxpZ2h0IHtcbiAgICBmb250LXNpemU6IDQuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICAgIGNvbG9yOiAjZTFkNGM5O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyIC5oZWFkaW5nLWxpZ2h0IHtcbiAgICBmb250LXNpemU6IDMuMTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTI1JTtcbiAgICBjb2xvcjogI2UxZDRjOTtcbiAgfVxufVxuXG4uaGVhZGluZy1saWdodCBzcGFuIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogI2IwOTA3YTtcbn1cblxuLmZvb3Rlcl9fY29udGFjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuN3JlbTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3RpdGxlIHtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBjb2xvcjogI2UxZDRjOTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG4uZm9vdGVyX19jb250YWN0c19hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogI2UxZDRjOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uZm9vdGVyX19jb250YWN0c19hZGRyZXNzIGltZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3Bob25lIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogI2UxZDRjOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfcGhvbmUgaW1nIHtcbiAgcGFkZGluZy1yaWdodDogMC44cmVtO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfc2NoZWR1bGUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjZTFkNGM5O1xufVxuLmZvb3Rlcl9fY29udGFjdHNfc2NoZWR1bGUgaW1nIHtcbiAgcGFkZGluZy1yaWdodDogMC44cmVtO1xufVxuXG4uZm9vdGVyX19jb250YWN0c19hZGRyZXNzIGEsXG4uZm9vdGVyX19jb250YWN0c19waG9uZSBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyBhOmFmdGVyLFxuLmZvb3Rlcl9fY29udGFjdHNfcGhvbmUgYTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkNGM5O1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0ycHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5mb290ZXJfX2NvbnRhY3RzX2FkZHJlc3MgYTpob3ZlcjphZnRlcixcbiAgLmZvb3Rlcl9fY29udGFjdHNfcGhvbmUgYTpob3ZlcjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG4uc29jaWFsLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjJyZW07XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xufVxuXG4uc29jaWFsLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NWY1NTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZDVjOTtcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnNvY2lhbC1pY29uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICB9XG59XG4uc29jaWFsLWljb24gc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcbn1cbi5zb2NpYWwtaWNvbl9fdHdpdHRlciB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnNvY2lhbC1pY29uX190d2l0dGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgfVxufVxuLnNvY2lhbC1pY29uX19pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5zb2NpYWwtaWNvbl9faW5zdGFncmFtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgfVxufVxuLnNvY2lhbC1pY29uX19mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnNvY2lhbC1pY29uX19mYWNlYm9vazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0VBO0VBQ0UseUJBcEJnQjtFQXFCaEIsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUEvREY7QUFXRTtFQTRDRjtJQVdJLDBCQUFBO0lBQ0EsbUJBQUE7RUE5REY7QUFDRjtBQWlCRTtFQWdDRjtJQWVJLG9CQUFBO0lBQ0EsU0FBQTtFQTVERjtBQUNGO0FBOERFO0VBbEZBLGVBbUZnQjtFQWxGaEIsZ0JBa0ZzQjtFQWpGdEIsaUJBaUYyQjtFQWhGM0IsY0E4Q2lCO0FBdkJuQjtBQUtFO0VBbURBO0lBbEZBLGlCQXNGa0I7SUFyRmxCLGdCQXFGMEI7SUFwRjFCLGlCQW9GK0I7SUFuRi9CLGNBOENpQjtFQWhCakI7QUFDRjtBQUdFO0VBNkNBO0lBbEZBLGtCQXlGa0I7SUF4RmxCLGdCQXdGMkI7SUF2RjNCLGlCQXVGZ0M7SUF0RmhDLGNBOENpQjtFQVJqQjtBQUNGOztBQW9ERTtFQUNFLGtCQUFBO0VBQ0EsY0E5Q2dCO0FBSHBCOztBQXFEQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFsREY7QUFvREU7RUF6R0EsaUJBMEdnQjtFQXpHaEIsZ0JBeUd3QjtFQXhHeEIsaUJBd0c2QjtFQXZHN0IsY0E4Q2lCO0VBMERmLG9CQUFBO0FBL0NKO0FBaURFO0VBN0dBLGlCQThHZ0I7RUE3R2hCLGdCQTZHd0I7RUE1R3hCLGlCQTRHNkI7RUEzRzdCLGNBOENpQjtFQThEZixrQkFBQTtFQUNBLGVBQUE7QUE1Q0o7QUE4Q0k7RUFDRSxxQkFBQTtBQTVDTjtBQStDRTtFQXRIQSxpQkF1SGdCO0VBdEhoQixnQkFzSHdCO0VBckh4QixpQkFxSDZCO0VBcEg3QixjQThDaUI7RUF1RWYsa0JBQUE7QUExQ0o7QUEyQ0k7RUFDRSxxQkFBQTtBQXpDTjtBQTRDRTtFQTdIQSxpQkE4SGdCO0VBN0hoQixnQkE2SHdCO0VBNUh4QixpQkE0SDZCO0VBM0g3QixjQThDaUI7QUFzQ25CO0FBeUNJO0VBQ0UscUJBQUE7QUF2Q047O0FBNENBOztFQUVFLGtCQUFBO0FBekNGO0FBMENFOztFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBN0ZlO0VBOEZmLE9BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUF2Q0o7QUF5Q0U7RUFDRTs7SUFDRSxtQkFBQTtJQUNBLGdDQUFBO0VBdENKO0FBQ0Y7O0FBMENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF2Q0Y7O0FBeUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkExSGdCO0VBMkhoQix5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQXRDRjtBQXdDRTtFQUNFO0lBQ0UseUJBcElVO0VBOEZkO0FBQ0Y7QUF5Q0U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBdkNKO0FBMENFO0VBQ0Usb0VBQUE7RUFDQSxnQ0FBQTtBQXhDSjtBQXlDSTtFQUNFO0lBQ0Usb0VBQUE7RUF2Q047QUFDRjtBQTJDRTtFQUNFLG9FQUFBO0VBQ0EsZ0NBQUE7QUF6Q0o7QUEwQ0k7RUFDRTtJQUNFLG9FQUFBO0VBeENOO0FBQ0Y7QUE0Q0U7RUFDRSxvRUFBQTtFQUNBLGdDQUFBO0FBMUNKO0FBMkNJO0VBQ0U7SUFDRSxvRUFBQTtFQXpDTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkY29sb3IpIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJXRyYW5zaXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuQG1peGluIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgLy8gMTIyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJGRlc2t0b3Atd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAvLyAxMDI0cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LWxhbmQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAvLyA3NjhweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtcG9ydC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAvLyA3MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtbGFyZ2Utd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUge1xcclxcbiAgLy8gNDIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXG4vLyBCYWNrZ3JvdW5kIENvbG9yXFxyXFxuJGNvbG9yLXByaW1hcnk6ICNlM2Q1Yzk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeTogIzY2NWY1NTtcXHJcXG4kY29sb3ItYmFja2Ryb3A6ICM0MDNmM2RjYztcXHJcXG5cXHJcXG4vLyBUZXh0IENvbG9yXFxyXFxuJGNvbG9yLXRleHQtZGFyazogIzQwM2YzZDtcXHJcXG4kY29sb3ItdGV4dC1saWdodDogI2UxZDRjOTtcXHJcXG4kY29sb3ItdGV4dC1hY2NlbnQ6ICNiMDkwN2E7XFxyXFxuXFxyXFxuLy8gQm9yZGVyIENvbG9yOlxcclxcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNjMWI2YWQ7XFxyXFxuJGNvbG9yLWJvcmRlci1kYXJrOiAjNjY1ZjU1O1xcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuJGRlc2t0b3Atd2lkdGg6IDEyMjBweDtcXHJcXG4kdGFibGV0LWxhbmQtd2lkdGg6IDEwMjRweDtcXHJcXG4kdGFibGV0LXBvcnQtd2lkdGg6IDc2OHB4O1xcclxcbiRtb2JpbGUtbGFyZ2Utd2lkdGg6IDcyMHB4O1xcclxcbiRtb2JpbGUtd2lkdGg6IDQyMHB4O1xcclxcblxcbi5mb290ZXJfX2NvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxyXFxuICBnYXA6IDEwcmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgcGFkZGluZzogMTByZW0gNnJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgIHBhZGRpbmc6IDZyZW0gMS42cmVtO1xcclxcbiAgICBnYXA6IDRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGluZy1saWdodCB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoNnJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgICAgQGluY2x1ZGUgdGV4dCg0LjJyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgICAgQGluY2x1ZGUgdGV4dCgzLjE1cmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4uaGVhZGluZy1saWdodCB7XFxyXFxuICBzcGFuIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLXRleHQtYWNjZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19jb250YWN0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMS43cmVtO1xcclxcblxcclxcbiAgJl90aXRsZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMi40cmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxyXFxuICB9XFxyXFxuICAmX2FkZHJlc3Mge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9waG9uZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9zY2hlZHVsZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyBhLFxcclxcbi5mb290ZXJfX2NvbnRhY3RzX3Bob25lIGEge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgJjphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRleHQtbGlnaHQ7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogLTJweDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgJjpob3ZlcjphZnRlciB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWljb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMS4ycmVtO1xcclxcbiAgcGFkZGluZy10b3A6IDRyZW07XFxyXFxufVxcclxcbi5zb2NpYWwtaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xcclxcbiAgd2lkdGg6IDZyZW07XFxyXFxuICBoZWlnaHQ6IDZyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA2cmVtO1xcclxcbiAgICBoZWlnaHQ6IDZyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX190d2l0dGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy90d2l0dGVyLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvdHdpdHRlci1ob3Zlci5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbnN0YWdyYW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2luc3RhZ3JhbS5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2luc3RhZ3JhbS1ob3Zlci5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19mYWNlYm9vayB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvZmFjZWJvb2suc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9mYWNlYm9vay1ob3Zlci5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwcmVtO1xuICBwYWRkaW5nOiAycmVtIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgZ2FwOiAzcmVtO1xuICB9XG59XG5cbi5uby1zY3JvbGwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmlzdWFsbHktaGlkZGVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNsaXAtcGF0aDogaW5zZXQoMTAwJSk7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uYXZpZ2F0aW9uX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDY1LjYlO1xufVxuLm5hdmlnYXRpb25fX3dyYXBwZXIub3BlbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5uYXZpZ2F0aW9uX193cmFwcGVyIHtcbiAgICBnYXA6IDNyZW07XG4gICAgbWluLXdpZHRoOiA3OCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2aWdhdGlvbl9fd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDVjOTtcbiAgICBnYXA6IDEwcmVtO1xuICAgIHBhZGRpbmc6IDZyZW0gNHJlbTtcbiAgICB0b3A6IDkuOXJlbTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmlnaHQ6IC0xMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbi5uYXZpZ2F0aW9uX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDRyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5uYXZpZ2F0aW9uX19saXN0IHtcbiAgICBnYXA6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2aWdhdGlvbl9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDZyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4ubmF2aWdhdGlvbl9fbGlzdF9saW5rIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsgYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzZjNkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0ycHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5uYXZpZ2F0aW9uX19saXN0X2xpbmsgYTpob3ZlcjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZpZ2F0aW9uX19saXN0X2xpbmsge1xuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICB9XG59XG5cbi5oZWFkZXJfX21lbnUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xufVxuLmhlYWRlcl9fbWVudSBzcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXJfX21lbnUgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMS42cmVtO1xufVxuLmhlYWRlcl9fbWVudSBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzZjNkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmhlYWRlcl9fbWVudSBhOmhvdmVyOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlcl9fbWVudSB7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIH1cbiAgLmhlYWRlcl9fbWVudSAuaWNvbi1jdXAge1xuICAgIG1pbi1oZWlnaHQ6IDRyZW07XG4gICAgbWluLXdpZHRoOiA0cmVtO1xuICB9XG59XG5cbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsubWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idXJnZXJfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJ1cmdlcl9fY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDQuNnJlbTtcbiAgfVxufVxuLmJ1cmdlcl9fY29udGFpbmVyLm9wZW4gLmJ1cmdlcl9fbGluZTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDQ1ZGVnKTtcbn1cbi5idXJnZXJfX2NvbnRhaW5lci5vcGVuIC5idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNDVkZWcpO1xufVxuLmJ1cmdlcl9fY29udGFpbmVyIC5idXJnZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNC40cmVtO1xuICBoZWlnaHQ6IDQuNHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NWY1NTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmJ1cmdlcl9fY29udGFpbmVyIC5idXJnZXJfX2xpbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMS42cmVtO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzZjNkO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cbi5idXJnZXJfX2NvbnRhaW5lciAuYnVyZ2VyX19saW5lOm50aC1jaGlsZCgxKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC40cmVtKTtcbn1cbi5idXJnZXJfX2NvbnRhaW5lciAuYnVyZ2VyX19saW5lOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjRyZW0pO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dC9IZWFkZXIvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFnRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBL0RGO0FBY0U7RUE0Q0Y7SUFPSSxTQUFBO0VBN0RGO0FBQ0Y7O0FBK0RBO0VBQ0UsZ0JBQUE7QUE1REY7O0FBOERBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBM0RGOztBQThEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUEzREY7QUE0REU7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0FBMURKO0FBbkJFO0VBc0VGO0lBVUksU0FBQTtJQUNBLGNBQUE7RUF6REY7QUFDRjtBQW5CRTtFQWdFRjtJQWNJLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBaEVZO0lBaUVaLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0NBQUE7RUF2REY7QUFDRjs7QUF5REE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBdERGO0FBaERFO0VBbUdGO0lBTUksU0FBQTtFQXJERjtBQUNGO0FBL0NFO0VBNkZGO0lBU0ksc0JBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7RUFuREY7QUFDRjtBQXFERTtFQXBJQSxpQkFxSWdCO0VBcEloQixnQkFvSXdCO0VBbkl4QixpQkFtSTZCO0VBbEk3QixjQTZDZ0I7RUFzRmQsZ0JBQUE7QUFoREo7QUFpREk7RUFDRSxrQkFBQTtBQS9DTjtBQWdETTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBOUZVO0VBK0ZWLE9BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUE5Q1I7QUFnRE07RUFDRTtJQUNFLG1CQUFBO0lBQ0EsZ0NBQUE7RUE5Q1I7QUFDRjtBQWhGRTtFQTJHQTtJQXVCSSxpQkFBQTtJQUNBLGlCQUFBO0VBOUNKO0FBQ0Y7O0FBa0RBO0VBaktFLGlCQWtLYztFQWpLZCxnQkFpS3NCO0VBaEt0QixpQkFnSzJCO0VBL0ozQixjQTZDZ0I7RUFtSGhCLHNCQUFBO0FBNUNGO0FBOENFO0VBQ0UsYUFBQTtBQTVDSjtBQThDRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBNUNKO0FBOENJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBbklZO0VBb0laLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTVDTjtBQThDSTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxnQ0FBQTtFQTVDTjtBQUNGO0FBeEhFO0VBd0lGO0lBaUNJLGlCQUFBO0lBQ0EsaUJBQUE7RUE3Q0Y7RUErQ0U7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RUE3Q0o7QUFDRjs7QUFpREE7RUFDRSxhQUFBO0FBOUNGOztBQWlEQTtFQUNFLGFBQUE7QUE5Q0Y7QUExSUU7RUF1TEY7SUFHSSxjQUFBO0lBQ0EsY0FBQTtFQTVDRjtBQUNGO0FBNkNFO0VBQ0Usc0NBQUE7QUEzQ0o7QUE2Q0U7RUFDRSx1Q0FBQTtBQTNDSjtBQTZDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUEzQ0o7QUE2Q0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBNUxZO0VBNkxaLHNDQUFBO0VBQ0Esc0JBQUE7QUEzQ047QUE2Q007RUFDRSw4QkFBQTtBQTNDUjtBQTZDTTtFQUNFLDZCQUFBO0FBM0NSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkY29sb3IpIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJXRyYW5zaXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuQG1peGluIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgLy8gMTIyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJGRlc2t0b3Atd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAvLyAxMDI0cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LWxhbmQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAvLyA3NjhweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtcG9ydC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAvLyA3MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtbGFyZ2Utd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUge1xcclxcbiAgLy8gNDIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXG4vLyBCYWNrZ3JvdW5kIENvbG9yXFxyXFxuJGNvbG9yLXByaW1hcnk6ICNlM2Q1Yzk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeTogIzY2NWY1NTtcXHJcXG4kY29sb3ItYmFja2Ryb3A6ICM0MDNmM2RjYztcXHJcXG5cXHJcXG4vLyBUZXh0IENvbG9yXFxyXFxuJGNvbG9yLXRleHQtZGFyazogIzQwM2YzZDtcXHJcXG4kY29sb3ItdGV4dC1saWdodDogI2UxZDRjOTtcXHJcXG4kY29sb3ItdGV4dC1hY2NlbnQ6ICNiMDkwN2E7XFxyXFxuXFxyXFxuLy8gQm9yZGVyIENvbG9yOlxcclxcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNjMWI2YWQ7XFxyXFxuJGNvbG9yLWJvcmRlci1kYXJrOiAjNjY1ZjU1O1xcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuJGRlc2t0b3Atd2lkdGg6IDEyMjBweDtcXHJcXG4kdGFibGV0LWxhbmQtd2lkdGg6IDEwMjRweDtcXHJcXG4kdGFibGV0LXBvcnQtd2lkdGg6IDc2OHB4O1xcclxcbiRtb2JpbGUtbGFyZ2Utd2lkdGg6IDcyMHB4O1xcclxcbiRtb2JpbGUtd2lkdGg6IDQyMHB4O1xcclxcblxcbi5oZWFkZXJfX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTByZW07XFxyXFxuICBwYWRkaW5nOiAycmVtIDA7XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLm5vLXNjcm9sbCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4udmlzdWFsbHktaGlkZGVuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxcHg7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIG1hcmdpbjogLTFweDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgY2xpcC1wYXRoOiBpbnNldCgxMDAlKTtcXHJcXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9fd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1pbi13aWR0aDogNjUuNiU7XFxyXFxuICAmLm9wZW4ge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIG1pbi13aWR0aDogNzglO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICAgIGdhcDogMTByZW07XFxyXFxuICAgIHBhZGRpbmc6IDZyZW0gNHJlbTtcXHJcXG4gICAgdG9wOiA5LjlyZW07XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICByaWdodDogLTEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubmF2aWdhdGlvbl9fbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiA0cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9saW5rIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGEge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAmOmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10ZXh0LWRhcms7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAtMnB4O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAgICAgJjpob3ZlcjphZnRlciB7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgICAgZm9udC1zaXplOiAzLjJyZW07XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEyNSU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fbWVudSB7XFxyXFxuICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XFxyXFxuXFxyXFxuICBzcGFuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIGEge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEuNnJlbTtcXHJcXG5cXHJcXG4gICAgJjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRleHQtZGFyaztcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgbGVmdDogMDtcXHJcXG4gICAgICBib3R0b206IC0ycHg7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICAgJjpob3ZlcjphZnRlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTI1JTtcXHJcXG5cXHJcXG4gICAgLmljb24tY3VwIHtcXHJcXG4gICAgICBtaW4taGVpZ2h0OiA0cmVtO1xcclxcbiAgICAgIG1pbi13aWR0aDogNHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9fbGlzdF9saW5rLm1lbnUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1cmdlcl9fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDQuNnJlbTtcXHJcXG4gIH1cXHJcXG4gICYub3BlbiAuYnVyZ2VyX19saW5lOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoNDVkZWcpO1xcclxcbiAgfVxcclxcbiAgJi5vcGVuIC5idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgfVxcclxcbiAgLmJ1cmdlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA0LjRyZW07XFxyXFxuICAgIGhlaWdodDogNC40cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWRhcms7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHJcXG4gICAgJl9fbGluZSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHdpZHRoOiAxLjZyZW07XFxyXFxuICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10ZXh0LWRhcms7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXHJcXG5cXHJcXG4gICAgICAmOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNHJlbSk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjRyZW0pO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb24tY29mZmVlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb24tdGVhLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb24tZGVzc2VydHMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvcmVmcmVzaC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9pbmZvLWVtcHR5LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZWN0aW9uX19tZW51LWNvZmZlZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHJlbTtcbn1cblxuLmhlYWRlcl9fbWVudSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGVyX19tZW51IGEge1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uaGVhZGVyX19tZW51OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyX19tZW51IHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhlYWRlcl9fbWVudSBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxLjZyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsubWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmF2aWdhdGlvbl9fbGlzdF9saW5rLmhvbWUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGVhZGluZy1kYXJrIHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA4MHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuaGVhZGluZy1kYXJrIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTE1JTtcbiAgICBjb2xvcjogIzQwM2YzZDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5oZWFkaW5nLWRhcmsge1xuICAgIGZvbnQtc2l6ZTogNC4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDExNSU7XG4gICAgY29sb3I6ICM0MDNmM2Q7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuaGVhZGluZy1kYXJrIHtcbiAgICBmb250LXNpemU6IDMuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICAgIGNvbG9yOiAjNDAzZjNkO1xuICB9XG59XG4uaGVhZGluZy1kYXJrIHNwYW4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjYjA5MDdhO1xufVxuXG4udGFic19fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMS43cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC50YWJzX19jb250YWluZXIge1xuICAgIGdhcDogMC44cmVtO1xuICB9XG59XG5cbi50YWIge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgd2lkdGg6IDEwcmVtO1xuICBoZWlnaHQ6IDQuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDVjOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYjZhZDtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIGdhcDogMC44cmVtO1xuICBwYWRkaW5nOiAwLjhyZW0gMS42cmVtIDAuOHJlbSAwLjhyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4udGFiX2ljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIHBhZGRpbmc6IDAgMC43cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmNvZmZlZS1pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4udGVhLWljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbi5kZXNzZXJ0LWljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbi50YWJfdGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMC4ycmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLnRhYi0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NWY1NTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG59XG5cbi50YWItLWFjdGl2ZSAudGFiX2ljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xufVxuXG4udGFiLS1hY3RpdmUgLnRhYl90ZXh0IHtcbiAgY29sb3I6ICNlM2Q1Yzk7XG59XG5cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnRhYjpob3ZlcixcbiAgLnRhYjphY3RpdmUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xuICAgIGNvbG9yOiAjZTFkNGM5O1xuICB9XG4gIC50YWI6aG92ZXIgLnRhYl9pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICB9XG4gIC50YWI6aG92ZXIgLnRhYl90ZXh0IHtcbiAgICBjb2xvcjogI2UzZDVjOTtcbiAgfVxufVxuLmFydGljbGVzX19jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICByb3ctZ2FwOiAzLjlyZW07XG4gIGNvbHVtbi1nYXA6IDRyZW07XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAuYXJ0aWNsZXNfX2NvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5hcnRpY2xlc19fY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5hcnRpY2xlc19fY29udGFpbmVyIHtcbiAgICByb3ctZ2FwOiAzLjhyZW07XG4gIH1cbn1cblxuLmFydGljbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzFiNmFkO1xuICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICBtYXgtd2lkdGg6IDMxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cbi5hcnRpY2xlX2hpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5hcnRpY2xlOm50aC1jaGlsZChuKzUpOm50aC1jaGlsZCgtbis4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYXJ0aWNsZTpudGgtY2hpbGQobisxNyk6bnRoLWNoaWxkKC1uKzIwKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5hcnRpY2xlOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmFydGljbGU6aG92ZXIgLmltYWdlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIH1cbn1cbi5pbWFnZV9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDMxcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cmVtO1xufVxuXG4uaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEuNXJlbTtcbiAgcmlnaHQ6IC0xLjZyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uaW5mb19fY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBnYXA6IDEuMnJlbTtcbiAgcGFkZGluZzogMS45cmVtO1xuICBtaW4taGVpZ2h0OiAxOS42cmVtO1xufVxuXG4uaW5mb19fdGl0bGUge1xuICBmb250LXNpemU6IDIuNHJlbTtcbn1cblxuLmluZm9fX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogIzQwM2YzZDtcbn1cblxuLmluZm9fX3ByaWNlIHtcbiAgbWFyZ2luOiBhdXRvIDAgMCAwO1xufVxuXG4uaW5mb19fY29udGFpbmVyIC50YWIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gIC5yZWZyZXNoLWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY1ZjU1O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcbiAgfVxuICAucmVmcmVzaC1idG4gc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyLjRyZW07XG4gICAgaGVpZ2h0OiAyLjRyZW07XG4gIH1cbiAgLnJlZnJlc2gtYnRuX19pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gIH1cbn1cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCA2MywgNjEsIDAuOCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dCwgdmlzaWJpbGl0eSAwLjNzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LXdpZHRoOiA4MHJlbTtcbiAgbWluLWhlaWdodDogNTAuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgcGFkZGluZzogMS42cmVtO1xuICBjb2xvcjogIzQwM2YzZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1vZGFsIHtcbiAgICBtYXgtd2lkdGg6IDY4LjhyZW07XG4gICAgaGVpZ2h0OiA2Mi42cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAubW9kYWwge1xuICAgIG1heC13aWR0aDogMzQuMnJlbTtcbiAgfVxufVxuLm1vZGFsX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xufVxuLm1vZGFsX19pbWFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gIG1heC13aWR0aDogMzFyZW07XG59XG4ubW9kYWxfX2ltYWdlX2NvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzRyZW07XG4gIGhlaWdodDogMzRyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLm1vZGFsX19pbWFnZV9jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5tb2RhbF9faW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS4ycmVtO1xufVxuLm1vZGFsX19pbmZvX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAubW9kYWxfX2luZm9fY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzFyZW07XG4gIH1cbn1cbi5tb2RhbF9fdGl0bGUge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIGNvbG9yOiAjNDAzZjNkO1xufVxuLm1vZGFsX190aXRsZV9zaXplLCAubW9kYWxfX3RpdGxlX2FkZCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIG1hcmdpbi1ib3R0b206IC0xLjJyZW07XG59XG4ubW9kYWxfX3ByaWNlX3RvdGFsIHtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgcGFkZGluZy1ib3R0b206IDEuOHJlbTtcbn1cbi5tb2RhbF9fZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xufVxuLm1vZGFsX19wcmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMWI2YWQ7XG59XG4ubW9kYWxfX2xlZ2VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAwLjhyZW07XG4gIG1hcmdpbi10b3A6IC0wLjhyZW07XG4gIHdpZHRoOiA0My44cmVtO1xufVxuLm1vZGFsX19sZWdlbmRfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICB3aWR0aDogNDEuNHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1vZGFsX19sZWdlbmQge1xuICAgIHdpZHRoOiAzMi42cmVtO1xuICB9XG4gIC5tb2RhbF9fbGVnZW5kX3RleHQge1xuICAgIHdpZHRoOiAzMC4ycmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLm1vZGFsX19sZWdlbmQge1xuICAgIHdpZHRoOiAzMXJlbTtcbiAgfVxufVxuLm1vZGFsX19jbG9zZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NWY1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDVjOTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4ubW9kYWxfX3NpemUgaW5wdXQsIC5tb2RhbF9fYWRkIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tb2RhbF9fc2l6ZSwgLm1vZGFsX19hZGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC45cmVtO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuLm1vZGFsX19zaXplX29wdGlvbiwgLm1vZGFsX19hZGRfb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW0gMC43cmVtIDAuN3JlbTtcbiAgZ2FwOiAwLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzFiNmFkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW9kYWxfX3NpemVfb3B0aW9uID4gLmljb24sIC5tb2RhbF9fYWRkX29wdGlvbiA+IC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWI2YWQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNDAzZjNkO1xufVxuLm1vZGFsX19zaXplX29wdGlvbiA+IC5zaXplX3RpdGxlLCAubW9kYWxfX2FkZF9vcHRpb24gPiAuc2l6ZV90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4uY2hlY2tlZCB7XG4gIGNvbG9yOiAjZTFkNGM5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY1ZjU1O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5pY29uLWluZm8ge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSkgY2VudGVyIG5vLXJlcGVhdDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQvTWVudS9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQS9ERjs7QUFrRUU7RUFDRSxjQUFBO0FBL0RKO0FBaUVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUEvREo7QUFpRUU7RUFDRSxtQkFBQTtBQS9ESjtBQVVFO0VBeURFO0lBQ0UsYUFBQTtFQWhFSjtFQWtFRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUFoRUo7QUFDRjs7QUFtRUE7RUFDRSxjQUFBO0FBaEVGOztBQWtFQTtFQUNFLGFBQUE7QUEvREY7O0FBaUVBO0VBcEdFLGVBcUdjO0VBcEdkLGdCQW9Hb0I7RUFuR3BCLGlCQW1HeUI7RUFsR3pCLGNBNkNnQjtFQXNEaEIsa0JBQUE7RUFDQSxnQkFBQTtBQTNERjtBQWJFO0VBcUVGO0lBcEdFLGVBMEdnQjtJQXpHaEIsZ0JBeUdzQjtJQXhHdEIsaUJBd0cyQjtJQXZHM0IsY0E2Q2dCO0VBR2hCO0FBQ0Y7QUFmRTtFQStERjtJQXBHRSxpQkE2R2dCO0lBNUdoQixnQkE0R3dCO0lBM0d4QixpQkEyRzZCO0lBMUc3QixjQTZDZ0I7RUFXaEI7QUFDRjtBQXZCRTtFQStERjtJQXBHRSxpQkFnSGdCO0lBL0doQixnQkErR3dCO0lBOUd4QixpQkE4RzZCO0lBN0c3QixjQTZDZ0I7RUFtQmhCO0FBQ0Y7QUErQ0U7RUFDRSxrQkFBQTtFQUNBLGNBbkVnQjtBQXNCcEI7O0FBZ0RBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQTdDRjtBQXpDRTtFQW1GRjtJQU1JLFdBQUE7RUE1Q0Y7QUFDRjs7QUE4Q0E7RUFqSUUsaUJBa0ljO0VBaklkLGdCQWlJc0I7RUFoSXRCLGlCQWdJMkI7RUEvSDNCLGNBNkNnQjtFQW1GaEIsMEJBQUE7RUFJQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQTlGYztFQStGZCx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7QUEzQ0Y7O0FBNkNBO0VBQ0UsY0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBM0NGOztBQTZDQTtFQUNFLG1EQUFBO0FBMUNGOztBQTRDQTtFQUNFLG1EQUFBO0FBekNGOztBQTJDQTtFQUNFLG1EQUFBO0FBeENGOztBQTBDQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBdkNGOztBQXlDQTtFQUNFLHlCQTVIZ0I7RUE2SGhCLGNBeEhpQjtBQWtGbkI7O0FBd0NBO0VBQ0UseUJBakljO0FBNEZoQjs7QUF1Q0E7RUFDRSxjQXBJYztBQWdHaEI7O0FBc0NBO0VBQ0U7O0lBRUUsZUFBQTtJQUNBLHlCQXpJYztJQTBJZCxjQXJJZTtFQWtHakI7RUFzQ0E7SUFDRSx5QkEvSVk7RUEyR2Q7RUFzQ0E7SUFDRSxjQWxKWTtFQThHZDtBQUNGO0FBNkNBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQTNDRjtBQXJKRTtFQTBMRjtJQVNJLHFDQUFBO0lBQ0Esb0JBQUE7RUExQ0Y7QUFDRjtBQXpJRTtFQXdLRjtJQWFJLDBCQUFBO0VBeENGO0FBQ0Y7QUF4SUU7RUFrS0Y7SUFnQkksZUFBQTtFQXRDRjtBQUNGOztBQXdDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBckNGO0FBdUNFO0VBQ0UsYUFBQTtBQXJDSjtBQTNLRTtFQW9ORTtJQUNFLGFBQUE7RUF0Q0o7RUF3Q0U7SUFDRSxhQUFBO0VBdENKO0FBQ0Y7O0FBeUNBO0VBQ0U7SUFDRSxlQUFBO0VBdENGO0VBd0NBO0lBQ0UscUJBQUE7RUF0Q0Y7QUFDRjtBQXdDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF0Q0Y7O0FBd0NBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBckNGOztBQXVDQTtFQW5RRSxpQkFvUWM7RUFuUWQsZ0JBbVFzQjtFQWxRdEIsaUJBa1EyQjtFQWpRM0IsY0E2Q2dCO0VBcU5oQixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWpDRjs7QUFtQ0E7RUFDRSxpQkFBQTtBQWhDRjs7QUFrQ0E7RUEvUUUsaUJBZ1JjO0VBL1FkLGdCQStRc0I7RUE5UXRCLGlCQThRMkI7RUE3UTNCLGNBNkNnQjtBQW9NbEI7O0FBOEJBO0VBQ0Usa0JBQUE7QUEzQkY7O0FBNkJBO0VBQ0UsYUFBQTtBQTFCRjs7QUEvT0U7RUE0UUE7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxvQkFBQTtFQXpCRjtFQTJCRTtJQUNFLHFCQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUF6Qko7RUEyQkU7SUFDRSxtREFBQTtFQXpCSjtBQUNGO0FBOEJBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQTdRZTtFQThRZixvRkFBQTtBQTVCRjs7QUErQkE7RUFDRSxrQkFBQTtFQUNBLHlCQXJSYztFQXNSZCxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBdFJnQjtBQTBQbEI7QUF2UkU7RUEyU0Y7SUFXSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQTNCRjtBQUNGO0FBbFJFO0VBK1JGO0lBZ0JJLGtCQUFBO0VBekJGO0FBQ0Y7QUEyQkU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQXpCSjtBQTJCRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUF6Qko7QUEyQkk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUF6Qk47QUFuU0U7RUEwVEU7SUFJSSxhQUFBO0VBdkJOO0FBQ0Y7QUEwQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBeEJKO0FBMEJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQXhCSjtBQWxURTtFQXVVQTtJQU1JLFlBQUE7RUF2Qko7QUFDRjtBQXlCRTtFQS9XQSxpQkFnWGdCO0VBL1doQixnQkErV3dCO0VBOVd4QixpQkE4VzZCO0VBN1c3QixjQTZDZ0I7QUE0U2xCO0FBc0JJO0VBbFhGLGlCQW9Ya0I7RUFuWGxCLGdCQW1YMEI7RUFsWDFCLGlCQWtYK0I7RUFqWC9CLGNBNkNnQjtFQXFVWixzQkFBQTtBQWxCTjtBQXFCRTtFQXhYQSxpQkF5WGdCO0VBeFhoQixnQkF3WHdCO0VBdlh4QixpQkF1WDZCO0VBdFg3QixjQTZDZ0I7RUEwVWQsc0JBQUE7QUFoQko7QUFrQkU7RUE1WEEsaUJBNlhnQjtFQTVYaEIsZ0JBNFh3QjtFQTNYeEIsaUJBMlg2QjtFQTFYN0IsY0E2Q2dCO0FBZ1VsQjtBQWdCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FBZEo7QUFpQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBZko7QUFpQkk7RUE3WUYsZUE4WWtCO0VBN1lsQixnQkE2WXdCO0VBNVl4QixpQkE0WTZCO0VBM1k3QixjQTZDZ0I7RUErVlosY0FBQTtBQVpOO0FBaFhFO0VBbVhBO0lBYUksY0FBQTtFQVpKO0VBY0k7SUFDRSxjQUFBO0VBWk47QUFDRjtBQTVXRTtFQXVXQTtJQW9CSSxZQUFBO0VBWEo7QUFDRjtBQWNFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQXZYWTtFQXdYWixvQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFaSjtBQWtCRTtFQUVFLGFBQUE7QUFqQko7QUFvQkU7RUFFRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQW5CSjtBQXFCSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQW5CTjtBQXFCTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBdlphO0VBd1piLHlCQUFBO0VBQ0EsY0E5WlU7QUEyWWxCO0FBcUJNO0VBQ0UsaUJBQUE7QUFuQlI7O0FBd0JBO0VBQ0UsY0F0YWlCO0VBdWFqQix5QkE1YWdCO0VBNmFoQix5QkFBQTtFQUNBLGVBQUE7QUFyQkY7O0FBdUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvRUFBQTtBQXBCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGhlaWdodCwgJGNvbG9yKSB7XFxyXFxuICBmb250LXNpemU6ICRzaXplO1xcclxcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XFxyXFxuICBsaW5lLWhlaWdodDogJGhlaWdodDtcXHJcXG4gIGNvbG9yOiAkY29sb3I7XFxyXFxufVxcclxcblxcclxcbiV0cmFuc2l0aW9uIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbkBtaXhpbiBtZWRpYS1kZXNrdG9wIHtcXHJcXG4gIC8vIDEyMjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRkZXNrdG9wLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgLy8gMTAyNHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1sYW5kLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtdGFibGV0LXBvcnQge1xcclxcbiAgLy8gNzY4cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LXBvcnQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgLy8gNzIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLWxhcmdlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlIHtcXHJcXG4gIC8vIDQyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxuLy8gQmFja2dyb3VuZCBDb2xvclxcclxcbiRjb2xvci1wcmltYXJ5OiAjZTNkNWM5O1xcclxcbiRjb2xvci1zZWNvbmRhcnk6ICM2NjVmNTU7XFxyXFxuJGNvbG9yLWJhY2tkcm9wOiAjNDAzZjNkY2M7XFxyXFxuXFxyXFxuLy8gVGV4dCBDb2xvclxcclxcbiRjb2xvci10ZXh0LWRhcms6ICM0MDNmM2Q7XFxyXFxuJGNvbG9yLXRleHQtbGlnaHQ6ICNlMWQ0Yzk7XFxyXFxuJGNvbG9yLXRleHQtYWNjZW50OiAjYjA5MDdhO1xcclxcblxcclxcbi8vIEJvcmRlciBDb2xvcjpcXHJcXG4kY29sb3ItYm9yZGVyLWxpZ2h0OiAjYzFiNmFkO1xcclxcbiRjb2xvci1ib3JkZXItZGFyazogIzY2NWY1NTtcXHJcXG5cXHJcXG4vLyBNZWRpYVxcclxcbiRkZXNrdG9wLXdpZHRoOiAxMjIwcHg7XFxyXFxuJHRhYmxldC1sYW5kLXdpZHRoOiAxMDI0cHg7XFxyXFxuJHRhYmxldC1wb3J0LXdpZHRoOiA3NjhweDtcXHJcXG4kbW9iaWxlLWxhcmdlLXdpZHRoOiA3MjBweDtcXHJcXG4kbW9iaWxlLXdpZHRoOiA0MjBweDtcXHJcXG5cXG4uc2VjdGlvbl9fbWVudS1jb2ZmZWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA0cmVtO1xcclxcbn1cXHJcXG4uaGVhZGVyX19tZW51IHtcXHJcXG4gIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG4gIGEge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICB9XFxyXFxuICAmOmFmdGVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICBhIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiAxLjZyZW07XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsubWVudSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLm5hdmlnYXRpb25fX2xpc3RfbGluay5ob21lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5oZWFkaW5nLWRhcmsge1xcclxcbiAgQGluY2x1ZGUgdGV4dCg2cmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWF4LXdpZHRoOiA4MHJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoNXJlbSwgNjAwLCAxMTUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoNC4ycmVtLCA2MDAsIDExNSUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgzLjJyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzcGFuIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBjb2xvcjogJGNvbG9yLXRleHQtYWNjZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG4udGFic19fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMS43cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgZ2FwOiAwLjhyZW07XFxyXFxuICB9XFxyXFxufVxcclxcbi50YWIge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIC8vIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAvLyB3aWR0aDogYXV0bztcXHJcXG4gIC8vIGhlaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG4gIGhlaWdodDogNC44cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWxpZ2h0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxyXFxuICBnYXA6IDAuOHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbSAxLjZyZW0gMC44cmVtIDAuOHJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4udGFiX2ljb24ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0O1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMC43cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5jb2ZmZWUtaWNvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbi1jb2ZmZWUuc3ZnKTtcXHJcXG59XFxyXFxuLnRlYS1pY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uLXRlYS5zdmcpO1xcclxcbn1cXHJcXG4uZGVzc2VydC1pY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uLWRlc3NlcnRzLnN2Zyk7XFxyXFxufVxcclxcbi50YWJfdGV4dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLnRhYi0tYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XFxyXFxuICBjb2xvcjogJGNvbG9yLXRleHQtbGlnaHQ7XFxyXFxufVxcclxcbi50YWItLWFjdGl2ZSAudGFiX2ljb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxufVxcclxcbi50YWItLWFjdGl2ZSAudGFiX3RleHQge1xcclxcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbn1cXHJcXG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAudGFiOmhvdmVyLFxcclxcbiAgLnRhYjphY3RpdmUge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1saWdodDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YWI6aG92ZXIgLnRhYl9pY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICB9XFxyXFxuICAudGFiOmhvdmVyIC50YWJfdGV4dCB7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gLnRhYjpkaXNhYmxlZCxcXHJcXG4vLyAudGFiIGJ1dHRvbltkaXNhYmxlZF0ge1xcclxcbi8vICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbi8vIH1cXHJcXG5cXHJcXG4vLyBBcnRpY2xlc1xcclxcbi5hcnRpY2xlc19fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgcm93LWdhcDogMy45cmVtO1xcclxcbiAgY29sdW1uLWdhcDogNHJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgcm93LWdhcDogMy44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uYXJ0aWNsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXItbGlnaHQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcclxcbiAgbWF4LXdpZHRoOiAzMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgJl9oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgICAmOm50aC1jaGlsZChuICsgNSk6bnRoLWNoaWxkKC1uICsgOCkge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpudGgtY2hpbGQobiArIDE3KTpudGgtY2hpbGQoLW4gKyAyMCkge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgLmFydGljbGU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICAuYXJ0aWNsZTpob3ZlciAuaW1hZ2Uge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxuICB9XFxyXFxufVxcclxcbi5pbWFnZV9fY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBoZWlnaHQ6IDMxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXHJcXG59XFxyXFxuLmltYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTEuNXJlbTtcXHJcXG4gIHJpZ2h0OiAtMS42cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5pbmZvX19jb250YWluZXIge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgyLjRyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGdhcDogMS4ycmVtO1xcclxcbiAgcGFkZGluZzogMS45cmVtO1xcclxcbiAgbWluLWhlaWdodDogMTkuNnJlbTtcXHJcXG59XFxyXFxuLmluZm9fX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbn1cXHJcXG4uaW5mb19fZGVzY3JpcHRpb24ge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDQwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxufVxcclxcbi5pbmZvX19wcmljZSB7XFxyXFxuICBtYXJnaW46IGF1dG8gMCAwIDA7XFxyXFxufVxcclxcbi5pbmZvX19jb250YWluZXIgLnRhYiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5AaW5jbHVkZSBtZWRpYS1kZXNrdG9wIHtcXHJcXG4gIC5yZWZyZXNoLWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNnJlbTtcXHJcXG4gICAgaGVpZ2h0OiA2cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWRhcms7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcXHJcXG5cXHJcXG4gICAgc3BhbiB7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIHdpZHRoOiAyLjRyZW07XFxyXFxuICAgICAgaGVpZ2h0OiAyLjRyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgJl9faWNvbiB7XFxyXFxuICAgICAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vYXNzZXRzL2ljb25zL3JlZnJlc2guc3ZnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBNb2RhbFxcclxcbi5vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmFja2Ryb3A7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1vdXQsIHZpc2liaWxpdHkgMC4zcyBlYXNlLW91dCxcXHJcXG4gICAgdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XFxyXFxufVxcclxcbi5tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiA4MHJlbTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwLjRyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcclxcbiAgcGFkZGluZzogMS42cmVtO1xcclxcbiAgY29sb3I6ICRjb2xvci10ZXh0LWRhcms7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIG1heC13aWR0aDogNjguOHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA2Mi42cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNC4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2ltYWdlIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMXJlbTtcXHJcXG5cXHJcXG4gICAgJl9jb250YWluZXIge1xcclxcbiAgICAgIG1heC13aWR0aDogMzRyZW07XFxyXFxuICAgICAgaGVpZ2h0OiAzNHJlbTtcXHJcXG4gICAgICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2luZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2luZm9fY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcblxcclxcbiAgICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgICAgIHdpZHRoOiAzMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDIuNHJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG5cXHJcXG4gICAgJl9zaXplLFxcclxcbiAgICAmX2FkZCB7XFxyXFxuICAgICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDQwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogLTEuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fcHJpY2VfdG90YWwge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDIuNHJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEuOHJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDQwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19wcmljZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1ib3JkZXItbGlnaHQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19sZWdlbmQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMC44cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMC44cmVtO1xcclxcbiAgICB3aWR0aDogNDMuOHJlbTtcXHJcXG5cXHJcXG4gICAgJl90ZXh0IHtcXHJcXG4gICAgICBAaW5jbHVkZSB0ZXh0KDFyZW0sIDYwMCwgMTQwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgICAgd2lkdGg6IDQxLjRyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgICAgIHdpZHRoOiAzMi42cmVtO1xcclxcblxcclxcbiAgICAgICZfdGV4dCB7XFxyXFxuICAgICAgICB3aWR0aDogMzAuMnJlbTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgICB3aWR0aDogMzFyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2Nsb3NlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWRhcms7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fc2l6ZSBpbnB1dCxcXHJcXG4gICZfX2FkZCBpbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19zaXplLFxcclxcbiAgJl9fYWRkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDAuOXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG5cXHJcXG4gICAgJl9vcHRpb24ge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW0gMC43cmVtIDAuN3JlbTtcXHJcXG4gICAgICBnYXA6IDAuOHJlbTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWxpZ2h0O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgICAmID4gLmljb24ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0O1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICAgIGNvbG9yOiAkY29sb3ItdGV4dC1kYXJrO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmID4gLnNpemVfdGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5jaGVja2VkIHtcXHJcXG4gIGNvbG9yOiAkY29sb3ItdGV4dC1saWdodDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4uaWNvbi1pbmZvIHtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vYXNzZXRzL2ljb25zL2luZm8tZW1wdHkuc3ZnKSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvcGluLWFsdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9waG9uZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9jbG9jay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19jb2x1bW5cXFwiPiA8aDMgY2xhc3M9XFxcImhlYWRpbmctbGlnaHRcXFwiPiBTaXAsIFNhdm9yLCBTbWlsZS4gPHNwYW4+SXQncyBjb2ZmZWUgdGltZSE8L3NwYW4+IDwvaDM+IDxkaXYgY2xhc3M9XFxcInNvY2lhbC1pY29uc1xcXCI+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJzb2NpYWwtaWNvblxcXCI+PHNwYW4gY2xhc3M9XFxcInNvY2lhbC1pY29uX190d2l0dGVyXFxcIj48L3NwYW4+PC9hPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwic29jaWFsLWljb25cXFwiPjxzcGFuIGNsYXNzPVxcXCJzb2NpYWwtaWNvbl9faW5zdGFncmFtXFxcIj48L3NwYW4+PC9hPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwic29jaWFsLWljb25cXFwiPjxzcGFuIGNsYXNzPVxcXCJzb2NpYWwtaWNvbl9fZmFjZWJvb2tcXFwiPjwvc3Bhbj48L2E+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19jb2x1bW5cXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhY3RzXFxcIiBpZD1cXFwiY29udGFjdHNcXFwiPiA8cCBjbGFzcz1cXFwiZm9vdGVyX19jb250YWN0c190aXRsZVxcXCI+Q29udGFjdCB1czwvcD4gPHAgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNfYWRkcmVzc1xcXCI+IDxhIGhyZWY9XFxcImh0dHBzOi8vbWFwcy5hcHAuZ29vLmdsL1JKYXBZMlFWOVoxQVpqaW04XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJwaW4gaWNvblxcXCIvPjg1NTggR3JlZW4gUmQuLCBMQTwvYT4gPC9wPiA8cCBjbGFzcz1cXFwiZm9vdGVyX19jb250YWN0c19waG9uZVxcXCI+IDxhIGhyZWY9XFxcInRlbDorMSg2MDMpNTU1LTAxMjNcXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJwaG9uZSBpY29uXFxcIi8+KzEgKDYwMykgNTU1LTAxMjM8L2E+IDwvcD4gPHAgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNfc2NoZWR1bGVcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwiY2xvY2sgaWNvblxcXCIvPk1vbi1TYXQ6IDk6MDAgQU0g4oCTIDIzOjAwIFBNIDwvcD4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL2NvZmZlZS1jdXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImhlYWRlcl9fY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwibG9nb1xcXCI+IDxhIGhyZWY9XFxcIi4vaW5kZXguaHRtbFxcXCI+IDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJsb2dvXFxcIiBkcmFnZ2FibGU9XFxcImZhbHNlXFxcIi8+IDxoMSBjbGFzcz1cXFwidmlzdWFsbHktaGlkZGVuXFxcIj4gUmVzb3Vyc2UgLSB0aGUgYmVzdCBjb2ZmZWUgaG91c2UgaW4geW91ciBhcmVhIDwvaDE+PC9hPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibmF2aWdhdGlvbl9fd3JhcHBlclxcXCI+IDxuYXYgY2xhc3M9XFxcImhlYWRlcl9fbmF2aWdhdGlvblxcXCI+IDx1bCBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdFxcXCI+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rIGhvbWVcXFwiPiA8YSBocmVmPVxcXCIjZmF2b3JpdGVcXFwiPkZhdm9yaXRlIGNvZmZlZTwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmsgbWVudVxcXCI+IDxhIGhyZWY9XFxcIi4vI2Zhdm9yaXRlXFxcIj5GYXZvcml0ZSBjb2ZmZWU8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rIGhvbWVcXFwiPiA8YSBocmVmPVxcXCIjYWJvdXRcXFwiPkFib3V0PC9hPiA8L2xpPiA8bGkgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2xpc3RfbGluayBtZW51XFxcIj4gPGEgaHJlZj1cXFwiLi8jYWJvdXRcXFwiPkFib3V0PC9hPiA8L2xpPiA8bGkgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2xpc3RfbGluayBob21lXFxcIj4gPGEgaHJlZj1cXFwiI2FwcFxcXCI+TW9iaWxlIGFwcDwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmsgbWVudVxcXCI+IDxhIGhyZWY9XFxcIi4vI2FwcFxcXCI+TW9iaWxlIGFwcDwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmtcXFwiPiA8YSBocmVmPVxcXCIjY29udGFjdHNcXFwiPkNvbnRhY3QgdXM8L2E+IDwvbGk+IDwvdWw+IDwvbmF2PiA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX21lbnVcXFwiPiA8c3Bhbj5NZW51IDxpbWcgY2xhc3M9XFxcImljb24tY3VwXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcImNvZmZlZSBjdXAgaWNvblxcXCIvPjwvc3Bhbj4gPGEgaHJlZj1cXFwiLi9tZW51Lmh0bWxcXFwiPjxwPk1lbnU8L3A+IDxpbWcgY2xhc3M9XFxcImljb24tY3VwXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcImNvZmZlZSBjdXAgaWNvblxcXCIvPiA8L2E+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYnVyZ2VyX19jb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJidXJnZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiYnVyZ2VyX19saW5lXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJidXJnZXJfX2xpbmVcXFwiPjwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uXFxcIj4gPGRpdiBjbGFzcz1cXFwic2VjdGlvbl9fbWVudS1jb2ZmZWVcXFwiPiA8aDMgY2xhc3M9XFxcImhlYWRpbmctZGFya1xcXCI+IEJlaGluZCBlYWNoIG9mIG91ciBjdXBzIGhpZGVzIGFuIDxzcGFuPmFtYXppbmcgc3VycHJpc2U8L3NwYW4+IDwvaDM+IDxkaXYgY2xhc3M9XFxcInRhYnNfX2NvbnRhaW5lclxcXCI+IDxidXR0b24gY2xhc3M9XFxcInRhYiB0YWItLWFjdGl2ZVxcXCI+Y29mZmVlPC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcInRhYlxcXCI+dGVhPC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcInRhYlxcXCI+ZGVzc2VydDwvYnV0dG9uPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYXJ0aWNsZXNfX2NvbnRhaW5lclxcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInJlZnJlc2gtYnRuXFxcIj4gPHNwYW4gY2xhc3M9XFxcInJlZnJlc2gtYnRuX19pY29uXFxcIj48L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPC9zZWN0aW9uPiBcIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vbWVudS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9tZW51LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBpbWdDb2ZmZWUxIGZyb20gXCIuL2NvZmZlZS0xLnBuZ1wiO1xyXG5pbXBvcnQgaW1nQ29mZmVlMiBmcm9tIFwiLi9jb2ZmZWUtMi5wbmdcIjtcclxuaW1wb3J0IGltZ0NvZmZlZTMgZnJvbSBcIi4vY29mZmVlLTMucG5nXCI7XHJcbmltcG9ydCBpbWdDb2ZmZWU0IGZyb20gXCIuL2NvZmZlZS00LnBuZ1wiO1xyXG5pbXBvcnQgaW1nQ29mZmVlNSBmcm9tIFwiLi9jb2ZmZWUtNS5wbmdcIjtcclxuaW1wb3J0IGltZ0NvZmZlZTYgZnJvbSBcIi4vY29mZmVlLTYucG5nXCI7XHJcbmltcG9ydCBpbWdDb2ZmZWU3IGZyb20gXCIuL2NvZmZlZS03LnBuZ1wiO1xyXG5pbXBvcnQgaW1nQ29mZmVlOCBmcm9tIFwiLi9jb2ZmZWUtOC5wbmdcIjtcclxuaW1wb3J0IGltZ1RlYTEgZnJvbSBcIi4vdGVhLTEucG5nXCI7XHJcbmltcG9ydCBpbWdUZWEyIGZyb20gXCIuL3RlYS0yLnBuZ1wiO1xyXG5pbXBvcnQgaW1nVGVhMyBmcm9tIFwiLi90ZWEtMy5wbmdcIjtcclxuaW1wb3J0IGltZ1RlYTQgZnJvbSBcIi4vdGVhLTQucG5nXCI7XHJcbmltcG9ydCBpbWdEZXNzZXJ0MSBmcm9tIFwiLi9kZXNzZXJ0LTEucG5nXCI7XHJcbmltcG9ydCBpbWdEZXNzZXJ0MiBmcm9tIFwiLi9kZXNzZXJ0LTIucG5nXCI7XHJcbmltcG9ydCBpbWdEZXNzZXJ0MyBmcm9tIFwiLi9kZXNzZXJ0LTMucG5nXCI7XHJcbmltcG9ydCBpbWdEZXNzZXJ0NCBmcm9tIFwiLi9kZXNzZXJ0LTQucG5nXCI7XHJcbmltcG9ydCBpbWdEZXNzZXJ0NSBmcm9tIFwiLi9kZXNzZXJ0LTUucG5nXCI7XHJcbmltcG9ydCBpbWdEZXNzZXJ0NiBmcm9tIFwiLi9kZXNzZXJ0LTYucG5nXCI7XHJcbmltcG9ydCBpbWdEZXNzZXJ0NyBmcm9tIFwiLi9kZXNzZXJ0LTcucG5nXCI7XHJcbmltcG9ydCBpbWdEZXNzZXJ0OCBmcm9tIFwiLi9kZXNzZXJ0LTgucG5nXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIGltZ0NvZmZlZTEsXHJcbiAgaW1nQ29mZmVlMixcclxuICBpbWdDb2ZmZWUzLFxyXG4gIGltZ0NvZmZlZTQsXHJcbiAgaW1nQ29mZmVlNSxcclxuICBpbWdDb2ZmZWU2LFxyXG4gIGltZ0NvZmZlZTcsXHJcbiAgaW1nQ29mZmVlOCxcclxuICBpbWdUZWExLFxyXG4gIGltZ1RlYTIsXHJcbiAgaW1nVGVhMyxcclxuICBpbWdUZWE0LFxyXG4gIGltZ0Rlc3NlcnQxLFxyXG4gIGltZ0Rlc3NlcnQyLFxyXG4gIGltZ0Rlc3NlcnQzLFxyXG4gIGltZ0Rlc3NlcnQ0LFxyXG4gIGltZ0Rlc3NlcnQ1LFxyXG4gIGltZ0Rlc3NlcnQ2LFxyXG4gIGltZ0Rlc3NlcnQ3LFxyXG4gIGltZ0Rlc3NlcnQ4LFxyXG59O1xyXG4iLCJpbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvaHRtbFRvRWxlbWVudFwiO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9pbmRleC5odG1sXCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmNvbnN0IGZvb3RlciA9IGh0bWxUb0VsZW1lbnQoRm9vdGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjtcclxuIiwiaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSBcIi4uLy4uL3V0aWxzL2h0bWxUb0VsZW1lbnRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9pbmRleC5odG1sXCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmNvbnN0IGhlYWRlciA9IGh0bWxUb0VsZW1lbnQoSGVhZGVyKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAvLyBCdXJnZXJcclxuICBjb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlcl9fY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25fX3dyYXBwZXJcIik7XHJcbiAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmlnYXRpb25fX2xpc3RfbGlua1wiKTtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4gIGJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgYnVyZ2VyQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm5vLXNjcm9sbFwiKTtcclxuICB9KTtcclxuXHJcbiAgbmF2TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBidXJnZXJCdG4uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcblxyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxcIik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XHJcbiIsImV4cG9ydCBjbGFzcyBBcnRpY2xlIHtcclxuICBjb25zdHJ1Y3Rvcih7IGlkLCBuYW1lLCB1cmxUb0ltYWdlLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGNhdGVnb3J5IH0pIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnVybFRvSW1hZ2UgPSB1cmxUb0ltYWdlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVBcnRpY2xlKCkge1xyXG4gICAgbGV0IHRlbXBsYXRlID0gXCJcIjtcclxuICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcbiAgICBhcnRpY2xlLmNsYXNzTmFtZSA9IFwiYXJ0aWNsZVwiO1xyXG4gICAgYXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHRoaXMuaWQpO1xyXG4gICAgdGVtcGxhdGUgKz0gYDxkaXYgY2xhc3M9XCJpbWFnZV9fY29udGFpbmVyXCI+YDtcclxuICAgIHRlbXBsYXRlICs9IGA8aW1nIHNyYz0ke3RoaXMudXJsVG9JbWFnZX0gY2xhc3M9XCJpbWFnZVwiIGFsdD1cIlBob3RvIG9mICR7dGhpcy5uYW1lfVwiIC8+YDtcclxuICAgIHRlbXBsYXRlICs9IGA8L2Rpdj5gO1xyXG4gICAgdGVtcGxhdGUgKz0gYDxkaXYgY2xhc3M9XCJpbmZvX19jb250YWluZXJcIj5gO1xyXG4gICAgdGVtcGxhdGUgKz0gYDxoMyBjbGFzcz1cImluZm9fX3RpdGxlXCI+JHt0aGlzLm5hbWV9PC9oMz5gO1xyXG4gICAgdGVtcGxhdGUgKz0gYDxwIGNsYXNzPVwiaW5mb19fZGVzY3JpcHRpb25cIj4ke3RoaXMuZGVzY3JpcHRpb259PC9wPmA7XHJcbiAgICB0aGlzLnByaWNlICYmICh0ZW1wbGF0ZSArPSBgPHAgY2xhc3M9XCJpbmZvX19wcmljZVwiPiQke3RoaXMucHJpY2V9PC9wPmApO1xyXG4gICAgdGhpcy5jYXRlZ29yeSAmJiAodGVtcGxhdGUgKz0gYDxwIGNsYXNzPVwidGFiXCI+JHt0aGlzLmNhdGVnb3J5fTwvcD5gKTtcclxuICAgIHRlbXBsYXRlICs9IGA8L2Rpdj5gO1xyXG4gICAgYXJ0aWNsZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcclxuICAgIHJldHVybiBhcnRpY2xlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgTW9kYWwge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2xhc3NlcyxcclxuICAgIHsgaWQsIG5hbWUsIHVybFRvSW1hZ2UsIGRlc2NyaXB0aW9uLCBwcmljZSwgY2F0ZWdvcnksIHNpemVzLCBhZGRpdGl2ZXMgfVxyXG4gICkge1xyXG4gICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnVybFRvSW1hZ2UgPSB1cmxUb0ltYWdlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xyXG4gICAgdGhpcy5hZGRpdGl2ZXMgPSBhZGRpdGl2ZXM7XHJcbiAgICB0aGlzLm92ZXJsYXkgPSBcIlwiO1xyXG4gICAgdGhpcy5tb2RhbCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBpbml0KGNvbnRlbnQpIHtcclxuICAgIHRoaXMub3ZlcmxheSA9IHRoaXMuY3JlYXRlRG9tTm9kZSh0aGlzLm92ZXJsYXksIFwiZGl2XCIsIFwib3ZlcmxheVwiKTtcclxuICAgIHRoaXMubW9kYWwgPSB0aGlzLmNyZWF0ZURvbU5vZGUodGhpcy5tb2RhbCwgXCJkaXZcIiwgXCJtb2RhbFwiLCB0aGlzLmNsYXNzZXMpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5vdmVybGF5KTtcclxuICAgIHRoaXMub3ZlcmxheS5hcHBlbmQodGhpcy5tb2RhbCk7XHJcbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XHJcbiAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xvc2VNb2RhbCk7XHJcblxyXG4gICAgdGhpcy5vcGVuTW9kYWwoKTtcclxuICB9XHJcbiAgY3JlYXRlRG9tTm9kZShub2RlLCBlbGVtZW50LCAuLi5jbGFzc2VzKSB7XHJcbiAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgIG5vZGUuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcclxuICAgIHJldHVybiBub2RlO1xyXG4gIH1cclxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcclxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIHRoaXMubW9kYWwuYXBwZW5kKGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZW5lcmF0ZUNvbnRlbnQoKSB7XHJcbiAgICBsZXQgdGVtcGxhdGUgPSBcIlwiO1xyXG4gICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYXJ0aWNsZS5jbGFzc05hbWUgPSBcIm1vZGFsX193cmFwcGVyXCI7XHJcblxyXG4gICAgdGVtcGxhdGUgKz0gYFxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsX19pbWFnZV9jb250YWluZXJcIj5cclxuICAgIDxpbWdcclxuICAgICAgc3JjPSR7dGhpcy51cmxUb0ltYWdlfVxyXG4gICAgICBhbHQ9XCJQaG90byBvZiAke3RoaXMubmFtZX1cIlxyXG4gICAgICBjbGFzcz1cIm1vZGFsX19pbWFnZVwiXHJcbiAgICAvPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtb2RhbF9faW5mb19jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9faW5mb1wiPlxyXG4gICAgICA8aDMgY2xhc3M9XCJtb2RhbF9fdGl0bGVcIj4ke3RoaXMubmFtZX08L2gzPlxyXG4gICAgICA8cCBjbGFzcz1cIm1vZGFsX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAke3RoaXMuZGVzY3JpcHRpb259XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJtb2RhbF9fdGl0bGVfc2l6ZVwiPlNpemU8L3A+XHJcblxyXG4gICAgPGZvcm0gY2xhc3M9XCJtb2RhbF9fc2l6ZVwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNpemVcIiB2YWx1ZT1cIjAuMDBcIiBpZD1cInNpemUtc1wiIGNoZWNrZWQgLz5cclxuICAgICAgPGxhYmVsIGZvcj1cInNpemUtc1wiIGNsYXNzPVwibW9kYWxfX3NpemVfb3B0aW9uIGNoZWNrZWRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4ke09iamVjdC5rZXlzKHRoaXMuc2l6ZXMpWzBdfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInNpemVfdGl0bGVcIj4ke09iamVjdC52YWx1ZXModGhpcy5zaXplcylbMF0uc2l6ZX08L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNpemVcIiB2YWx1ZT1cIjAuNTBcIiBpZD1cInNpemUtbVwiIC8+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJzaXplLW1cIiBjbGFzcz1cIm1vZGFsX19zaXplX29wdGlvblwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPiR7T2JqZWN0LmtleXModGhpcy5zaXplcylbMV19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2l6ZV90aXRsZVwiPiR7T2JqZWN0LnZhbHVlcyh0aGlzLnNpemVzKVsxXS5zaXplfTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2l6ZVwiIHZhbHVlPVwiMS4wMFwiIGlkPVwic2l6ZS1sXCIgLz5cclxuICAgICAgPGxhYmVsIGZvcj1cInNpemUtbFwiIGNsYXNzPVwibW9kYWxfX3NpemVfb3B0aW9uXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+JHtPYmplY3Qua2V5cyh0aGlzLnNpemVzKVsyXX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXplX3RpdGxlXCI+JHtPYmplY3QudmFsdWVzKHRoaXMuc2l6ZXMpWzJdLnNpemV9PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICAgIDxwIGNsYXNzPVwibW9kYWxfX3RpdGxlX2FkZFwiPkFkZGl0aXZlczwvcD5cclxuICAgIFxyXG4gICAgPGZvcm0gY2xhc3M9XCJtb2RhbF9fYWRkXCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWRkXCIgdmFsdWU9XCIwLjUwXCIgaWQ9XCJhZGQtMVwiIC8+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJhZGQtMVwiIGNsYXNzPVwibW9kYWxfX2FkZF9vcHRpb25cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4xPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2l6ZV90aXRsZVwiPiR7dGhpcy5hZGRpdGl2ZXNbMF0ubmFtZX08L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWRkXCIgdmFsdWU9XCIwLjUwXCIgaWQ9XCJhZGQtMlwiIC8+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJhZGQtMlwiIGNsYXNzPVwibW9kYWxfX2FkZF9vcHRpb25cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4yPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2l6ZV90aXRsZVwiPiR7dGhpcy5hZGRpdGl2ZXNbMV0ubmFtZX08L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWRkXCIgdmFsdWU9XCIwLjUwXCIgaWQ9XCJhZGQtMlwiIC8+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJhZGQtMlwiIGNsYXNzPVwibW9kYWxfX2FkZF9vcHRpb25cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4zPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2l6ZV90aXRsZVwiPiR7dGhpcy5hZGRpdGl2ZXNbMl0ubmFtZX08L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX3ByaWNlXCI+XHJcbiAgICAgIDxoMyBjbGFzcz1cIm1vZGFsX190aXRsZVwiPlRvdGFsOjwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbF9fcHJpY2VfdG90YWxcIj4kJHt0aGlzLnByaWNlfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2xlZ2VuZFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImljb24taW5mb1wiPjwvc3Bhbj5cclxuICAgICAgPHAgY2xhc3M9XCJtb2RhbF9fbGVnZW5kX3RleHRcIj5cclxuICAgICAgICBUaGUgY29zdCBpcyBub3QgZmluYWwuIERvd25sb2FkIG91ciBtb2JpbGUgYXBwIHRvIHNlZSB0aGUgZmluYWxcclxuICAgICAgICBwcmljZSBhbmQgcGxhY2UgeW91ciBvcmRlci4gRWFybiBsb3lhbHR5IHBvaW50cyBhbmQgZW5qb3lcclxuICAgICAgICB5b3VyIGZhdm9yaXRlIGNvZmZlZSB3aXRoIHVwIHRvIDIwJSBkaXNjb3VudC5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWxfX2Nsb3NlXCI+Q2xvc2U8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG4gICAgYXJ0aWNsZS5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcclxuICAgIHJldHVybiBhcnRpY2xlO1xyXG4gIH1cclxuICByZW5kZXJNb2RhbCgpIHtcclxuICAgIGxldCBjb250ZW50ID0gdGhpcy5nZW5lcmF0ZUNvbnRlbnQoKTtcclxuICAgIHRoaXMuaW5pdChjb250ZW50KTtcclxuICB9XHJcbiAgb3Blbk1vZGFsKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5vdmVybGF5KTtcclxuICAgIHRoaXMub3ZlcmxheS5hcHBlbmQodGhpcy5tb2RhbCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsXCIpO1xyXG4gIH1cclxuICBjbG9zZU1vZGFsKGUpIHtcclxuICAgIGxldCBjbGFzc2VzID0gZS50YXJnZXQuY2xhc3NMaXN0O1xyXG4gICAgaWYgKGNsYXNzZXMuY29udGFpbnMoXCJvdmVybGF5XCIpIHx8IGNsYXNzZXMuY29udGFpbnMoXCJtb2RhbF9fY2xvc2VcIikpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpLnJlbW92ZSgpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tc2Nyb2xsXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvaHRtbFRvRWxlbWVudFwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9pbmRleC5odG1sXCI7XHJcbi8vIGltcG9ydCAqIGFzIGltYWdlcyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy5qc1wiO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9wcm9kdWN0c0RhdGEuanNcIjtcclxuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCIuL0FydGljbGUuanNcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi9Nb2RhbC5qc1wiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5jb25zdCBtZW51ID0gaHRtbFRvRWxlbWVudChNZW51KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjb25zdCByZW5kZXJBcnRpY2xlc1RvRG9tID0gKCkgPT4ge1xyXG4gICAgbGV0IGFydGljbGVzV3JhcHBlciA9IGdldEFydGljbGVzV3JhcHBlcigpO1xyXG4gICAgZ2VuZXJhdGVBcnRpY2xlcyhkYXRhKS5mb3JFYWNoKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgIGFydGljbGVzV3JhcHBlci5hcHBlbmQoYXJ0aWNsZS5nZW5lcmF0ZUFydGljbGUoKSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRBcnRpY2xlc1dyYXBwZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhcnRpY2xlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZXNfX2NvbnRhaW5lclwiKTtcclxuICAgIGFydGljbGVzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICByZXR1cm4gYXJ0aWNsZXNDb250YWluZXI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVBcnRpY2xlcyA9IChkYXRhKSA9PiB7XHJcbiAgICBsZXQgYXJ0aWNsZXMgPSBbXTtcclxuICAgIGRhdGEuZm9yRWFjaCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICBhcnRpY2xlcy5wdXNoKG5ldyBBcnRpY2xlKGFydGljbGUpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFydGljbGVzO1xyXG4gIH07XHJcblxyXG4gIGlmIChkYXRhKSB7XHJcbiAgICByZW5kZXJBcnRpY2xlc1RvRG9tKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRUYWJzQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIudGFic19fY29udGFpbmVyXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFiXCIpKSB7XHJcbiAgICAgICAgICBsZXQgY2xpY2tlZFRhYiA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRUYWJzKCk7XHJcbiAgICAgICAgICBzZWxlY3RDbGlja2VkVGFiKGNsaWNrZWRUYWIpO1xyXG4gICAgICAgICAgZmlsdGVyTWVudUJ5U2VsZWN0ZWRUYWIoY2xpY2tlZFRhYi5pbm5lclRleHQudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGFkZFRhYnNDbGlja0hhbmRsZXIoKTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlU2VsZWN0ZWRUYWJzID0gKCkgPT4ge1xyXG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNfX2NvbnRhaW5lciAudGFiXCIpO1xyXG4gICAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcclxuICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWItLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgc2VsZWN0Q2xpY2tlZFRhYiA9IChjbGlja2VkVGFiKSA9PiB7XHJcbiAgICBjbGlja2VkVGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWItLWFjdGl2ZVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmaWx0ZXJNZW51QnlTZWxlY3RlZFRhYiA9IChjbGlja2VkVGFiKSA9PiB7XHJcbiAgICBsZXQgYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFydGljbGVcIik7XHJcbiAgICBhcnRpY2xlcy5mb3JFYWNoKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZChcImFydGljbGVfaGlkZGVuXCIpO1xyXG4gICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiXCIpLmZvckVhY2goKHRhYikgPT4ge1xyXG4gICAgICAgIGlmICh0YWIuaW5uZXJIVE1MID09PSBjbGlja2VkVGFiKSB7XHJcbiAgICAgICAgICBhcnRpY2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJhcnRpY2xlX2hpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkQXJ0aWNsZUNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGVzX19jb250YWluZXJcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwiLmFydGljbGVcIikpIHtcclxuICAgICAgICAgIGxldCBjbGlja2VkQXJ0aWNsZUlkID0gZS50YXJnZXRcclxuICAgICAgICAgICAgLmNsb3Nlc3QoXCIuYXJ0aWNsZVwiKVxyXG4gICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcclxuICAgICAgICAgIGxldCBjbGlja2VkQXJ0aWNsZURhdGEgPSBnZXRDbGlja2VkRGF0YShjbGlja2VkQXJ0aWNsZUlkKTtcclxuXHJcbiAgICAgICAgICByZW5kZXJBcnRpY2xlTW9kYWxXaW5kb3coY2xpY2tlZEFydGljbGVEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgYWRkQXJ0aWNsZUNsaWNrSGFuZGxlcigpO1xyXG5cclxuICBjb25zdCBnZXRDbGlja2VkRGF0YSA9IChpZCkgPT4ge1xyXG4gICAgcmV0dXJuIGRhdGEuZmluZCgoYXJ0aWNsZSkgPT4gYXJ0aWNsZS5pZCA9PSBpZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQXJ0aWNsZU1vZGFsV2luZG93ID0gKGNvbnRlbnQpID0+IHtcclxuICAgIGxldCBtb2RhbCA9IG5ldyBNb2RhbChcIm1vZGFsX193cmFwcGVyXCIsIGNvbnRlbnQpO1xyXG4gICAgbW9kYWwucmVuZGVyTW9kYWwoKTtcclxuICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7XHJcbiIsImltcG9ydCAqIGFzIGltYWdlcyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy5qc1wiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIG5hbWU6IFwiSXJpc2ggY29mZmVlXCIsXHJcbiAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nQ29mZmVlMSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkZyYWdyYW50IGJsYWNrIGNvZmZlZSB3aXRoIEphbWVzb24gSXJpc2ggd2hpc2tleSBhbmQgd2hpcHBlZCBtaWxrXCIsXHJcbiAgICBwcmljZTogXCI3LjAwXCIsXHJcbiAgICBjYXRlZ29yeTogXCJjb2ZmZWVcIixcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBzaXplOiBcIjIwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBtOiB7XHJcbiAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAgbDoge1xyXG4gICAgICAgIHNpemU6IFwiNDAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN1Z2FyXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNpbm5hbW9uXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogXCJLYWhsdWEgY29mZmVlXCIsXHJcbiAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nQ29mZmVlMixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkNsYXNzaWMgY29mZmVlIHdpdGggbWlsayBhbmQgS2FobHVhIGxpcXVldXIgdW5kZXIgYSBjYXAgb2YgZnJvdGhlZCBtaWxrXCIsXHJcbiAgICBwcmljZTogXCI3LjAwXCIsXHJcbiAgICBjYXRlZ29yeTogXCJjb2ZmZWVcIixcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBzaXplOiBcIjIwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBtOiB7XHJcbiAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAgbDoge1xyXG4gICAgICAgIHNpemU6IFwiNDAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN1Z2FyXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNpbm5hbW9uXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbmFtZTogXCJIb25leSByYWZcIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdDb2ZmZWUzLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRXNwcmVzc28gd2l0aCBmcm90aGVkIG1pbGssIGNyZWFtIGFuZCBhcm9tYXRpYyBob25leVwiLFxyXG4gICAgcHJpY2U6IFwiNS41MFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiY29mZmVlXCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFkZGl0aXZlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDaW5uYW1vblwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6IFwiSWNlIGNhcHB1Y2Npbm9cIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdDb2ZmZWU0LFxyXG4gICAgZGVzY3JpcHRpb246IFwiQ2FwcHVjY2lubyB3aXRoIHNvZnQgdGhpY2sgZm9hbSBpbiBzdW1tZXIgdmVyc2lvbiB3aXRoIGljZVwiLFxyXG4gICAgcHJpY2U6IFwiNS4wMFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiY29mZmVlXCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFkZGl0aXZlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDaW5uYW1vblwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIG5hbWU6IFwiRXNwcmVzc29cIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdDb2ZmZWU1LFxyXG4gICAgZGVzY3JpcHRpb246IFwiQ2xhc3NpYyBibGFjayBjb2ZmZWVcIixcclxuICAgIHByaWNlOiBcIjQuNTBcIixcclxuICAgIGNhdGVnb3J5OiBcImNvZmZlZVwiLFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBsOiB7XHJcbiAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ2lubmFtb25cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBuYW1lOiBcIkxhdHRlXCIsXHJcbiAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nQ29mZmVlNixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkVzcHJlc3NvIGNvZmZlZSB3aXRoIHRoZSBhZGRpdGlvbiBvZiBzdGVhbWVkIG1pbGsgYW5kIGRlbnNlIG1pbGsgZm9hbVwiLFxyXG4gICAgcHJpY2U6IFwiNS41MFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiY29mZmVlXCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGFkZGl0aXZlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDaW5uYW1vblwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogNyxcclxuICAgIG5hbWU6IFwiTGF0dGUgbWFjY2hpYXRvXCIsXHJcbiAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nQ29mZmVlNyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkVzcHJlc3NvIHdpdGggZnJvdGhlZCBtaWxrIGFuZCBjaG9jb2xhdGVcIixcclxuICAgIHByaWNlOiBcIjUuNTBcIixcclxuICAgIGNhdGVnb3J5OiBcImNvZmZlZVwiLFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBsOiB7XHJcbiAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ2lubmFtb25cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDgsXHJcbiAgICBuYW1lOiBcIkNvZmZlZSB3aXRoIGNvZ25hY1wiLFxyXG4gICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0NvZmZlZTgsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJGcmFncmFudCBibGFjayBjb2ZmZWUgd2l0aCBjb2duYWMgYW5kIHdoaXBwZWQgY3JlYW1cIixcclxuICAgIHByaWNlOiBcIjYuNTBcIixcclxuICAgIGNhdGVnb3J5OiBcImNvZmZlZVwiLFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBsOiB7XHJcbiAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ2lubmFtb25cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDksXHJcbiAgICBuYW1lOiBcIk1vcm9jY2FuXCIsXHJcbiAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nVGVhMSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkZyYWdyYW50IGJsYWNrIHRlYSB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0YW5nZXJpbmUsIGNpbm5hbW9uLCBob25leSwgbGVtb24gYW5kIG1pbnRcIixcclxuICAgIHByaWNlOiBcIjQuNTBcIixcclxuICAgIGNhdGVnb3J5OiBcInRlYVwiLFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBsOiB7XHJcbiAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTGVtb25cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDEwLFxyXG4gICAgbmFtZTogXCJHaW5nZXJcIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdUZWEyLFxyXG4gICAgZGVzY3JpcHRpb246IFwiT3JpZ2luYWwgYmxhY2sgdGVhIHdpdGggZnJlc2ggZ2luZ2VyLCBsZW1vbiBhbmQgaG9uZXlcIixcclxuICAgIHByaWNlOiBcIjUuMDBcIixcclxuICAgIGNhdGVnb3J5OiBcInRlYVwiLFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBsOiB7XHJcbiAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTGVtb25cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDExLFxyXG4gICAgbmFtZTogXCJDcmFuYmVycnlcIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdUZWEzLFxyXG4gICAgZGVzY3JpcHRpb246IFwiSW52aWdvcmF0aW5nIGJsYWNrIHRlYSB3aXRoIGNyYW5iZXJyeSBhbmQgaG9uZXlcIixcclxuICAgIHByaWNlOiBcIjUuMDBcIixcclxuICAgIGNhdGVnb3J5OiBcInRlYVwiLFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBsOiB7XHJcbiAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTGVtb25cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDEyLFxyXG4gICAgbmFtZTogXCJTZWEgYnVja3Rob3JuXCIsXHJcbiAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nVGVhNCxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRvbmluZyBzd2VldCBibGFjayB0ZWEgd2l0aCBzZWEgYnVja3Rob3JuLCBmcmVzaCB0aHltZSBhbmQgY2lubmFtb25cIixcclxuICAgIHByaWNlOiBcIjUuNTBcIixcclxuICAgIGNhdGVnb3J5OiBcInRlYVwiLFxyXG4gICAgc2l6ZXM6IHtcclxuICAgICAgczoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBsOiB7XHJcbiAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTGVtb25cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDEzLFxyXG4gICAgbmFtZTogXCJNYXJibGUgY2hlZXNlY2FrZVwiLFxyXG4gICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0Rlc3NlcnQxLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiUGhpbGFkZWxwaGlhIGNoZWVzZSB3aXRoIGxlbW9uIHplc3Qgb24gYSBsaWdodCBzcG9uZ2UgY2FrZSBhbmQgcmVkIGN1cnJhbnQgamFtXCIsXHJcbiAgICBwcmljZTogXCIzLjUwXCIsXHJcbiAgICBjYXRlZ29yeTogXCJkZXNzZXJ0XCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCI1MCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjEwMCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjIwMCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJlcnJpZXNcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTnV0c1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJKYW1cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDE0LFxyXG4gICAgbmFtZTogXCJSZWQgdmVsdmV0XCIsXHJcbiAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nRGVzc2VydDIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMYXllciBjYWtlIHdpdGggY3JlYW0gY2hlZXNlIGZyb3N0aW5nXCIsXHJcbiAgICBwcmljZTogXCI0LjAwXCIsXHJcbiAgICBjYXRlZ29yeTogXCJkZXNzZXJ0XCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCI1MCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjEwMCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjIwMCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJlcnJpZXNcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTnV0c1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJKYW1cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDE1LFxyXG4gICAgbmFtZTogXCJDaGVlc2VjYWtlc1wiLFxyXG4gICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0Rlc3NlcnQzLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiU29mdCBjb3R0YWdlIGNoZWVzZSBwYW5jYWtlcyB3aXRoIHNvdXIgY3JlYW0gYW5kIGZyZXNoIGJlcnJpZXMgYW5kIHNwcmlua2xlZCB3aXRoIHBvd2RlcmVkIHN1Z2FyXCIsXHJcbiAgICBwcmljZTogXCI0LjUwXCIsXHJcbiAgICBjYXRlZ29yeTogXCJkZXNzZXJ0XCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCI1MCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjEwMCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjIwMCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJlcnJpZXNcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTnV0c1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJKYW1cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDE2LFxyXG4gICAgbmFtZTogXCJDcmVtZSBicnVsZWVcIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdEZXNzZXJ0NCxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkRlbGljYXRlIGNyZWFteSBkZXNzZXJ0IGluIGEgY2FyYW1lbCBiYXNrZXQgd2l0aCB3aWxkIGJlcnJpZXNcIixcclxuICAgIHByaWNlOiBcIjQuMDBcIixcclxuICAgIGNhdGVnb3J5OiBcImRlc3NlcnRcIixcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBzaXplOiBcIjUwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAgbDoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQmVycmllc1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJOdXRzXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogMTcsXHJcbiAgICBuYW1lOiBcIlBhbmNha2VzXCIsXHJcbiAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nRGVzc2VydDUsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUZW5kZXIgcGFuY2FrZXMgd2l0aCBzdHJhd2JlcnJ5IGphbSBhbmQgZnJlc2ggc3RyYXdiZXJyaWVzXCIsXHJcbiAgICBwcmljZTogXCI0LjUwXCIsXHJcbiAgICBjYXRlZ29yeTogXCJkZXNzZXJ0XCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCI1MCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjEwMCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjIwMCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJlcnJpZXNcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTnV0c1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJKYW1cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDE4LFxyXG4gICAgbmFtZTogXCJIb25leSBjYWtlXCIsXHJcbiAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nRGVzc2VydDYsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDbGFzc2ljIGhvbmV5IGNha2Ugd2l0aCBkZWxpY2F0ZSBjdXN0YXJkXCIsXHJcbiAgICBwcmljZTogXCI0LjUwXCIsXHJcbiAgICBjYXRlZ29yeTogXCJkZXNzZXJ0XCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCI1MCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjEwMCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjIwMCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJlcnJpZXNcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTnV0c1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJKYW1cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDE5LFxyXG4gICAgbmFtZTogXCJDaG9jb2xhdGUgY2FrZVwiLFxyXG4gICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0Rlc3NlcnQ3LFxyXG4gICAgZGVzY3JpcHRpb246IFwiQ2FrZSB3aXRoIGhvdCBjaG9jb2xhdGUgZmlsbGluZyBhbmQgbnV0cyB3aXRoIGRyaWVkIGFwcmljb3RzXCIsXHJcbiAgICBwcmljZTogXCI1LjUwXCIsXHJcbiAgICBjYXRlZ29yeTogXCJkZXNzZXJ0XCIsXHJcbiAgICBzaXplczoge1xyXG4gICAgICBzOiB7XHJcbiAgICAgICAgc2l6ZTogXCI1MCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG06IHtcclxuICAgICAgICBzaXplOiBcIjEwMCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGw6IHtcclxuICAgICAgICBzaXplOiBcIjIwMCBnXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkJlcnJpZXNcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiTnV0c1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJKYW1cIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgaWQ6IDIwLFxyXG4gICAgbmFtZTogXCJCbGFjayBmb3Jlc3RcIixcclxuICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdEZXNzZXJ0OCxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkEgY29tYmluYXRpb24gb2YgdGhpbiBzcG9uZ2UgY2FrZSB3aXRoIGNoZXJyeSBqYW0gYW5kIGxpZ2h0IGNob2NvbGF0ZSBtb3Vzc2VcIixcclxuICAgIHByaWNlOiBcIjYuNTBcIixcclxuICAgIGNhdGVnb3J5OiBcImRlc3NlcnRcIixcclxuICAgIHNpemVzOiB7XHJcbiAgICAgIHM6IHtcclxuICAgICAgICBzaXplOiBcIjUwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgfSxcclxuICAgICAgbToge1xyXG4gICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgfSxcclxuICAgICAgbDoge1xyXG4gICAgICAgIHNpemU6IFwiMjAwIGdcIixcclxuICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiQmVycmllc1wiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJOdXRzXCIsXHJcbiAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4gICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcclxuIiwiaW1wb3J0IFwiLi9tZW51LnNjc3NcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9sYXlvdXQvSGVhZGVyXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL2xheW91dC9NZW51XCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vbGF5b3V0L0Zvb3RlclwiO1xyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xyXG5cclxuaGVhZGVyLmFwcGVuZChIZWFkZXIpO1xyXG5tYWluLmFwcGVuZChNZW51KTtcclxuZm9vdGVyLmFwcGVuZChGb290ZXIpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaHRtbFN0cmluZykge1xyXG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xyXG4gIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWxTdHJpbmc7XHJcbiAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtZW51XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21lbnUuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21lbnUuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnNjc3NcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=