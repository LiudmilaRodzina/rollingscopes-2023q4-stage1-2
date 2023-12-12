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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(64, 63, 61, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  position: relative;
  background-color: #e3d5c9;
  overflow: auto;
  max-width: 80rem;
  min-height: 50.4rem;
  border-radius: 4rem;
  padding: 1.6rem;
  border: 1px solid black;
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
  gap: 0.8rem;
  margin-top: -0.8rem;
}
.modal__close {
  display: block;
  width: 100%;
  border: 1px solid #403f3d;
  background-color: #e3d5c9;
  border-radius: 10rem;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 1.8rem;
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
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 0.7rem 1.5rem 0.7rem 0.7rem;
  gap: 0.8rem;
  border-radius: 10rem;
  border: 1px solid #c1b6ad;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}
.modal__size_option > .icon, .modal__add_option > .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.6rem;
  border-radius: 50%;
  text-transform: uppercase;
  background-color: #c1b6ad;
  color: #403f3d;
  transition: all 0.3s ease-in-out;
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
}`, "",{"version":3,"sources":["webpack://./src/layout/Menu/index.scss"],"names":[],"mappings":"AAgEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AA/DF;;AAkEE;EACE,cAAA;AA/DJ;AAiEE;EACE,aAAA;EACA,eAAA;AA/DJ;AAiEE;EACE,mBAAA;AA/DJ;AAUE;EAyDE;IACE,aAAA;EAhEJ;EAkEE;IACE,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,WAAA;IACA,eAAA;EAhEJ;AACF;;AAmEA;EACE,cAAA;AAhEF;;AAkEA;EACE,aAAA;AA/DF;;AAiEA;EApGE,eAqGc;EApGd,gBAoGoB;EAnGpB,iBAmGyB;EAlGzB,cA6CgB;EAsDhB,kBAAA;EACA,gBAAA;AA3DF;AAbE;EAqEF;IApGE,eA0GgB;IAzGhB,gBAyGsB;IAxGtB,iBAwG2B;IAvG3B,cA6CgB;EAGhB;AACF;AAfE;EA+DF;IApGE,iBA6GgB;IA5GhB,gBA4GwB;IA3GxB,iBA2G6B;IA1G7B,cA6CgB;EAWhB;AACF;AAvBE;EA+DF;IApGE,iBAgHgB;IA/GhB,gBA+GwB;IA9GxB,iBA8G6B;IA7G7B,cA6CgB;EAmBhB;AACF;AA+CE;EACE,kBAAA;EACA,cAnEgB;AAsBpB;;AAiDA;EACE,aAAA;EACA,uBAAA;EACA,WAAA;AA9CF;AAzCE;EAoFF;IAMI,WAAA;EA7CF;AACF;;AAgDA;EAnIE,iBAoIc;EAnId,gBAmIsB;EAlItB,iBAkI2B;EAjI3B,cA6CgB;EAqFhB,0BAAA;EAIA,YAAA;EACA,cAAA;EACA,yBAhGc;EAiGd,yBAAA;EACA,oBAAA;EACA,WAAA;EACA,oCAAA;EACA,gCAAA;AA7CF;;AA+CA;EACE,cAAA;EAEA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,iBAAA;EACA,gCAAA;AA7CF;;AA+CA;EACE,mDAAA;AA5CF;;AA8CA;EACE,mDAAA;AA3CF;;AA6CA;EACE,mDAAA;AA1CF;;AA4CA;EACE,cAAA;EACA,mBAAA;EACA,gCAAA;AAzCF;;AA2CA;EACE,yBA9HgB;EA+HhB,cA1HiB;AAkFnB;;AA0CA;EACE,yBAnIc;AA4FhB;;AAyCA;EACE,cAtIc;AAgGhB;;AAwCA;EACE;;IAEE,eAAA;IACA,yBA3Ic;IA4Id,cAvIe;EAkGjB;EAwCA;IACE,yBAjJY;EA2Gd;EAwCA;IACE,cApJY;EA8Gd;AACF;AA+CA;EACE,aAAA;EACA,qCAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,oBAAA;AA7CF;AArJE;EA4LF;IASI,qCAAA;IACA,oBAAA;EA5CF;AACF;AAzIE;EA0KF;IAaI,0BAAA;EA1CF;AACF;AAxIE;EAoKF;IAgBI,eAAA;EAxCF;AACF;;AA2CA;EACE,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gCAAA;AAxCF;AA0CE;EACE,aAAA;AAxCJ;AA3KE;EAuNE;IACE,aAAA;EAzCJ;AACF;;AA4CA;EACE;IACE,eAAA;EAzCF;EA2CA;IACE,qBAAA;EAzCF;AACF;AA4CA;EACE,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;AA1CF;;AA4CA;EACE,kBAAA;EACA,YAAA;EACA,cAAA;EACA,gCAAA;AAzCF;;AA4CA;EArQE,iBAsQc;EArQd,gBAqQsB;EApQtB,iBAoQ2B;EAnQ3B,cA6CgB;EAuNhB,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;AAtCF;;AAyCA;EACE,iBAAA;AAtCF;;AAwCA;EAlRE,iBAmRc;EAlRd,gBAkRsB;EAjRtB,iBAiR2B;EAhR3B,cA6CgB;AAiMlB;;AAoCA;EACE,kBAAA;AAjCF;;AAmCA;EACE,aAAA;AAhCF;;AA5OE;EA+QA;IACE,aAAA;IACA,6BAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;IACA,yBAAA;IACA,kBAAA;IACA,iBAAA;IACA,oBAAA;IACA,oBAAA;EA/BF;EAiCE;IACE,qBAAA;IACA,aAAA;IACA,cAAA;EA/BJ;EAiCE;IACE,mDAAA;EA/BJ;AACF;AAoCA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,uCA7Qe;EA8Qf,aAAA;EACA,mBAAA;EACA,uBAAA;AAlCF;;AAoCA;EACE,kBAAA;EACA,yBAtRc;EAuRd,cAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,uBAAA;AAjCF;AAkCE;EACE,aAAA;EACA,SAAA;AAhCJ;AAkCE;EACE,mBAAA;EACA,gBAAA;AAhCJ;AAkCI;EACE,gBAAA;EACA,aAAA;AAhCN;AAmCE;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AAjCJ;AAmCE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAjCJ;AAmCE;EA/VA,iBAgWgB;EA/VhB,gBA+VwB;EA9VxB,iBA8V6B;EA7V7B,cA6CgB;AAkRlB;AAgCI;EAlWF,iBAoWkB;EAnWlB,gBAmW0B;EAlW1B,iBAkW+B;EAjW/B,cA6CgB;EAqTZ,sBAAA;AA5BN;AA+BE;EAxWA,iBAyWgB;EAxWhB,gBAwWwB;EAvWxB,iBAuW6B;EAtW7B,cA6CgB;EA2Td,sBAAA;AA3BJ;AA6BE;EA7WA,iBA8WgB;EA7WhB,gBA6WwB;EA5WxB,iBA4W6B;EA3W7B,cA6CgB;AAsSlB;AA2BE;EACE,aAAA;EACA,8BAAA;EAEA,gCAAA;AA1BJ;AA6BE;EACE,aAAA;EACA,WAAA;EACA,mBAAA;AA3BJ;AA8BE;EACE,cAAA;EACA,WAAA;EACA,yBAAA;EACA,yBAvVY;EAwVZ,oBAAA;EACA,aAAA;EACA,iBAAA;EACA,gBAAA;EACA,kBAAA;AA5BJ;AA+BE;EAEE,aAAA;AA9BJ;AAiCE;EAEE,aAAA;EACA,eAAA;EACA,WAAA;EACA,mBAAA;AAhCJ;AAkCI;EACE,sBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,oCAAA;EACA,WAAA;EACA,oBAAA;EACA,yBAAA;EACA,eAAA;EACA,gCAAA;AAhCN;AAkCM;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,yBAvXa;EAwXb,cA7XU;EA8XV,gCAAA;AAhCR;AAkCM;EACE,iBAAA;AAhCR;;AAqCA;EACE,cAtYiB;EAuYjB,yBA5YgB;EA6YhB,yBAAA;EACA,eAAA;AAlCF;;AAoCA;EACE,WAAA;EACA,YAAA;EACA,oEAAA;AAjCF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n.section__menu-coffee {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 4rem;\r\n}\r\n.header__menu {\r\n  span {\r\n    display: block;\r\n  }\r\n  a {\r\n    display: none;\r\n    cursor: default;\r\n  }\r\n  &:after {\r\n    transform: scale(1);\r\n  }\r\n\r\n  @include media-tablet-port {\r\n    span {\r\n      display: none;\r\n    }\r\n    a {\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      gap: 1.6rem;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n}\r\n.navigation__list_link.menu {\r\n  display: block;\r\n}\r\n.navigation__list_link.home {\r\n  display: none;\r\n}\r\n.heading-dark {\r\n  @include text(6rem, 600, 125%, $color-text-dark);\r\n  text-align: center;\r\n  max-width: 80rem;\r\n\r\n  @include media-mobile-large {\r\n    @include text(5rem, 600, 115%, $color-text-dark);\r\n  }\r\n  @include media-mobile {\r\n    @include text(4.2rem, 600, 115%, $color-text-dark);\r\n  }\r\n  @include media-mobile {\r\n    @include text(3.2rem, 600, 125%, $color-text-dark);\r\n  }\r\n\r\n  span {\r\n    font-style: italic;\r\n    color: $color-text-accent;\r\n  }\r\n}\r\n// Tabs\r\n.tabs__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1.7rem;\r\n\r\n  @include media-mobile {\r\n    gap: 0.8rem;\r\n  }\r\n}\r\n\r\n.tab {\r\n  @include text(1.6rem, 600, 150%, $color-text-dark);\r\n  text-transform: capitalize;\r\n  // display: flex;\r\n  // width: auto;\r\n  // height: auto;\r\n  width: 10rem;\r\n  height: 4.8rem;\r\n  background-color: $color-primary;\r\n  border: 1px solid $color-border-light;\r\n  border-radius: 10rem;\r\n  gap: 0.8rem;\r\n  padding: 0.8rem 1.6rem 0.8rem 0.8rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.tab_icon {\r\n  display: block;\r\n  // background-color: $color-border-light;\r\n  width: 3rem;\r\n  height: 3rem;\r\n  border-radius: 10rem;\r\n  padding: 0 0.7rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.coffee-icon {\r\n  background: url(./../../assets/icons/icon-coffee.svg);\r\n}\r\n.tea-icon {\r\n  background: url(./../../assets/icons/icon-tea.svg);\r\n}\r\n.dessert-icon {\r\n  background: url(./../../assets/icons/icon-desserts.svg);\r\n}\r\n.tab_text {\r\n  display: block;\r\n  padding-top: 0.2rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.tab--active {\r\n  background-color: $color-secondary;\r\n  color: $color-text-light;\r\n}\r\n.tab--active .tab_icon {\r\n  background-color: $color-primary;\r\n}\r\n.tab--active .tab_text {\r\n  color: $color-primary;\r\n}\r\n@media (hover: hover) and (pointer: fine) {\r\n  .tab:hover,\r\n  .tab:active {\r\n    cursor: pointer;\r\n    background-color: $color-secondary;\r\n    color: $color-text-light;\r\n  }\r\n\r\n  .tab:hover .tab_icon {\r\n    background-color: $color-primary;\r\n  }\r\n  .tab:hover .tab_text {\r\n    color: $color-primary;\r\n  }\r\n}\r\n\r\n// .tab:disabled,\r\n// .tab button[disabled] {\r\n//   cursor: default;\r\n// }\r\n\r\n// Articles\r\n.articles__container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  row-gap: 3.9rem;\r\n  column-gap: 4rem;\r\n  margin-top: -2px;\r\n  padding-bottom: 6rem;\r\n\r\n  @include media-desktop {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding-bottom: 0rem;\r\n  }\r\n  @include media-mobile-large {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  @include media-mobile {\r\n    row-gap: 3.8rem;\r\n  }\r\n}\r\n\r\n.article {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid $color-border-light;\r\n  border-radius: 4rem;\r\n  max-width: 31rem;\r\n  transition: all 0.4s ease-in-out;\r\n\r\n  &_hidden {\r\n    display: none;\r\n  }\r\n\r\n  @include media-tablet-land {\r\n    &:nth-child(n + 5):nth-child(-n + 8) {\r\n      display: none;\r\n    }\r\n  }\r\n}\r\n@media (hover: hover) and (pointer: fine) {\r\n  .article:hover {\r\n    cursor: pointer;\r\n  }\r\n  .article:hover .image {\r\n    transform: scale(0.9);\r\n  }\r\n}\r\n\r\n.image__container {\r\n  position: relative;\r\n  overflow: hidden;\r\n  height: 31rem;\r\n  border-radius: 4rem;\r\n}\r\n.image {\r\n  position: absolute;\r\n  top: -1.5rem;\r\n  right: -1.6rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.info__container {\r\n  @include text(2.4rem, 600, 125%, $color-text-dark);\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  gap: 1.2rem;\r\n  padding: 1.9rem;\r\n  min-height: 19.6rem;\r\n}\r\n\r\n.info__title {\r\n  font-size: 2.4rem;\r\n}\r\n.info__description {\r\n  @include text(1.6rem, 400, 150%, $color-text-dark);\r\n}\r\n.info__price {\r\n  margin: auto 0 0 0;\r\n}\r\n.info__container .tab {\r\n  display: none;\r\n}\r\n@include media-desktop {\r\n  .refresh-btn {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    width: 6rem;\r\n    height: 6rem;\r\n    border: 1px solid $color-border-dark;\r\n    border-radius: 50%;\r\n    grid-column: 1/-1;\r\n    justify-self: center;\r\n    margin-bottom: 10rem;\r\n\r\n    span {\r\n      display: inline-block;\r\n      width: 2.4rem;\r\n      height: 2.4rem;\r\n    }\r\n    &__icon {\r\n      background: url(./../../assets/icons/refresh.svg);\r\n    }\r\n  }\r\n}\r\n\r\n// Modal\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: $color-backdrop;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.modal {\r\n  position: relative;\r\n  background-color: $color-primary;\r\n  overflow: auto;\r\n  max-width: 80rem;\r\n  min-height: 50.4rem;\r\n  border-radius: 4rem;\r\n  padding: 1.6rem;\r\n  border: 1px solid black;\r\n  &__wrapper {\r\n    display: flex;\r\n    gap: 2rem;\r\n  }\r\n  &__image {\r\n    border-radius: 4rem;\r\n    max-width: 31rem;\r\n\r\n    &_container {\r\n      max-width: 34rem;\r\n      height: 34rem;\r\n    }\r\n  }\r\n  &__info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.2rem;\r\n  }\r\n  &__info_container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n  }\r\n  &__title {\r\n    @include text(2.4rem, 600, 125%, $color-text-dark);\r\n\r\n    &_size,\r\n    &_add {\r\n      @include text(1.6rem, 400, 150%, $color-text-dark);\r\n      margin-bottom: -1.2rem;\r\n    }\r\n  }\r\n  &__price_total {\r\n    @include text(2.4rem, 600, 125%, $color-text-dark);\r\n    // line-height: 200%;\r\n    padding-bottom: 1.8rem;\r\n  }\r\n  &__description {\r\n    @include text(1.6rem, 400, 150%, $color-text-dark);\r\n  }\r\n\r\n  &__price {\r\n    display: flex;\r\n    justify-content: space-between;\r\n\r\n    border-bottom: 1px solid $color-border-light;\r\n  }\r\n\r\n  &__legend {\r\n    display: flex;\r\n    gap: 0.8rem;\r\n    margin-top: -0.8rem;\r\n  }\r\n\r\n  &__close {\r\n    display: block;\r\n    width: 100%;\r\n    border: 1px solid $color-text-dark;\r\n    background-color: $color-primary;\r\n    border-radius: 10rem;\r\n    padding: 1rem;\r\n    font-size: 1.6rem;\r\n    font-weight: 600;\r\n    margin-top: 1.8rem;\r\n  }\r\n\r\n  &__size input,\r\n  &__add input {\r\n    display: none;\r\n  }\r\n\r\n  &__size,\r\n  &__add {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 0.9rem;\r\n    align-self: stretch;\r\n\r\n    &_option {\r\n      box-sizing: border-box;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      font-weight: 600;\r\n      padding: 0.7rem 1.5rem 0.7rem 0.7rem;\r\n      gap: 0.8rem;\r\n      border-radius: 10rem;\r\n      border: 1px solid $color-border-light;\r\n      cursor: pointer;\r\n      transition: all 0.4s ease-in-out;\r\n\r\n      & > .icon {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        width: 3rem;\r\n        height: 3rem;\r\n        font-size: 1.6rem;\r\n        border-radius: 50%;\r\n        text-transform: uppercase;\r\n        background-color: $color-border-light;\r\n        color: $color-text-dark;\r\n        transition: all 0.3s ease-in-out;\r\n      }\r\n      & > .size_title {\r\n        font-size: 1.6rem;\r\n      }\r\n    }\r\n  }\r\n}\r\n.checked {\r\n  color: $color-text-light;\r\n  background-color: $color-secondary;\r\n  border: 1px solid $color-secondary;\r\n  cursor: default;\r\n}\r\n.icon-info {\r\n  width: 16px;\r\n  height: 16px;\r\n  background: url(./../../assets/icons/info-empty.svg) center no-repeat;\r\n}\r\n"],"sourceRoot":""}]);
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
// export class Article {
//   constructor({ id, name, urlToImage, description, price, category }) {
//     this.id = id;
//     this.name = name;
//     this.urlToImage = urlToImage;
//     this.description = description;
//     this.price = price;
//     this.category = category;
//   }

//   generateArticle() {
//     let template = "";
//     let article = document.createElement("article");
//     article.className = "article";
//     article.setAttribute("data-id", this.id);

//     if (this.urlToImage) {
//       template += `<div class="image__container">`;
//       template += `<img src=${this.urlToImage} class="image" alt="Photo of ${this.name}" />`;
//       template += `</div>`;
//     }

//     if (this.name || this.description || this.price || this.category) {
//       template += `<div class="info__container">`;
//       this.name && (template += `<h3 class="info__title">${this.name}</h3>`);
//       this.description &&
//         (template += `<p class="info__description">${this.description}</p>`);
//       this.price && (template += `<p class="info__price">$${this.price}</p>`);
//       this.category && (template += `<p class="tab">${this.category}</p>`);
//       template += `</div>`;
//     }

//     article.innerHTML = template;
//     return article;
//   }
// }

// TEST ///////////////////////
class Article {
  constructor({ id, name, urlToImage, description, price, category }) {
    this.id = id;
    this.name = name;
    this.urlToImage = urlToImage;
    this.description = description;
    this.price = price;
    this.category = category;
  }
  // Article generator
  generateArticle() {
    let template = "";
    let article = document.createElement("article");
    article.className = "article";
    article.setAttribute("data-id", this.id);

    // image
    if (this.urlToImage) {
      template += `<div class="image__container">`;
      template += `<img src=${this.urlToImage} class="image" alt="Photo of ${this.name}" />`;
      template += `</div>`;
    }
    // content
    if (this.name || this.description || this.price || this.category) {
      template += `<div class="info__container">`;
      this.name && (template += `<h3 class="info__title">${this.name}</h3>`);
      this.description &&
        (template += `<p class="info__description">${this.description}</p>`);
      this.price && (template += `<p class="info__price">$${this.price}</p>`);
      this.category && (template += `<p class="tab">${this.category}</p>`);
      template += `</div>`;
    }

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
        <span class="icon">S</span>
        <span class="size_title">200 ml</span>
      </label>
      <input type="radio" name="size" value="0.50" id="size-m" />
      <label for="size-m" class="modal__size_option">
        <span class="icon">M</span>
        <span class="size_title">300 ml</span>
      </label>
      <input type="radio" name="size" value="1.00" id="size-l" />
      <label for="size-l" class="modal__size_option">
        <span class="icon">L</span>
        <span class="size_title">400 ml</span>
      </label>
    </form>
    <p class="modal__title_add">Additives</p>
    <form class="modal__add">
      <input type="radio" name="add" value="0.50" id="add-1" />
      <label for="sadd-1" class="modal__add_option">
        <span class="icon">1</span>
        <span class="size_title">Sugar</span>
      </label>
      <input type="radio" name="add" value="0.50" id="add-2" />
      <label for="add-2" class="modal__add_option">
        <span class="icon">2</span>
        <span class="size_title">Cinnamon</span>
      </label>
      <input type="radio" name="add" value="0.50" id="add-2" />
      <label for="add-2" class="modal__add_option">
        <span class="icon">3</span>
        <span class="size_title">Syrup</span>
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
        price and place your <br />order. Earn loyalty points and enjoy
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
  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains("overlay") || classes.contains("modal__close")) {
      document.querySelector(".overlay").remove();
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
/* harmony import */ var _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/menu-images.js */ "./src/assets/images/menu-images.js");
/* harmony import */ var _Article_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article.js */ "./src/layout/Menu/Article.js");
/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal.js */ "./src/layout/Menu/Modal.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/layout/Menu/index.scss");
// import htmlToElement from "../../utils/htmlToElement";
// import Menu from "./index.html";
// import * as images from "../../assets/images/menu-images.js";
// import { Article } from "./Article.js";

// import "./index.scss";

// const menu = htmlToElement(Menu);

// document.addEventListener("DOMContentLoaded", () => {
//   const data = [
//     {
//       id: 1,
//       name: "Irish coffee",
//       urlToImage: images.imgCoffee1,
//       description:
//         "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
//       price: "7.00",
//       category: "coffee",
//       sizes: {
//         s: {
//           size: "200 ml",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "300 ml",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "400 ml",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Sugar",
//           "add-price": "0.50",
//         },
//         {
//           name: "Cinnamon",
//           "add-price": "0.50",
//         },
//         {
//           name: "Syrup",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 2,
//       name: "Kahlua coffee",
//       urlToImage: images.imgCoffee2,
//       description:
//         "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
//       price: "7.00",
//       category: "coffee",
//       sizes: {
//         s: {
//           size: "200 ml",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "300 ml",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "400 ml",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Sugar",
//           "add-price": "0.50",
//         },
//         {
//           name: "Cinnamon",
//           "add-price": "0.50",
//         },
//         {
//           name: "Syrup",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 3,
//       name: "Honey raf",
//       urlToImage: images.imgCoffee3,
//       description: "Espresso with frothed milk, cream and aromatic honey",
//       price: "5.50",
//       category: "coffee",
//       sizes: {
//         s: {
//           size: "200 ml",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "300 ml",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "400 ml",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Sugar",
//           "add-price": "0.50",
//         },
//         {
//           name: "Cinnamon",
//           "add-price": "0.50",
//         },
//         {
//           name: "Syrup",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 4,
//       name: "Ice cappuccino",
//       urlToImage: images.imgCoffee4,
//       description: "Cappuccino with soft thick foam in summer version with ice",
//       price: "5.00",
//       category: "coffee",
//       sizes: {
//         s: {
//           size: "200 ml",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "300 ml",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "400 ml",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Sugar",
//           "add-price": "0.50",
//         },
//         {
//           name: "Cinnamon",
//           "add-price": "0.50",
//         },
//         {
//           name: "Syrup",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 5,
//       name: "Espresso",
//       urlToImage: images.imgCoffee5,
//       description: "Classic black coffee",
//       price: "4.50",
//       category: "coffee",
//       sizes: {
//         s: {
//           size: "200 ml",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "300 ml",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "400 ml",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Sugar",
//           "add-price": "0.50",
//         },
//         {
//           name: "Cinnamon",
//           "add-price": "0.50",
//         },
//         {
//           name: "Syrup",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 6,
//       name: "Latte",
//       urlToImage: images.imgCoffee6,
//       description:
//         "Espresso coffee with the addition of steamed milk and dense milk foam",
//       price: "5.50",
//       category: "coffee",
//       sizes: {
//         s: {
//           size: "200 ml",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "300 ml",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "400 ml",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Sugar",
//           "add-price": "0.50",
//         },
//         {
//           name: "Cinnamon",
//           "add-price": "0.50",
//         },
//         {
//           name: "Syrup",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 7,
//       name: "Latte macchiato",
//       urlToImage: images.imgCoffee7,
//       description: "Espresso with frothed milk and chocolate",
//       price: "5.50",
//       category: "coffee",
//       sizes: {
//         s: {
//           size: "200 ml",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "300 ml",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "400 ml",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Sugar",
//           "add-price": "0.50",
//         },
//         {
//           name: "Cinnamon",
//           "add-price": "0.50",
//         },
//         {
//           name: "Syrup",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 8,
//       name: "Coffee with cognac",
//       urlToImage: images.imgCoffee8,
//       description: "Fragrant black coffee with cognac and whipped cream",
//       price: "6.50",
//       category: "coffee",
//       sizes: {
//         s: {
//           size: "200 ml",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "300 ml",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "400 ml",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Sugar",
//           "add-price": "0.50",
//         },
//         {
//           name: "Cinnamon",
//           "add-price": "0.50",
//         },
//         {
//           name: "Syrup",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 9,
//       name: "Moroccan",
//       urlToImage: images.imgTea1,
//       description:
//         "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
//       price: "4.50",
//       category: "tea",
//       sizes: {
//         s: {
//           size: "200 ml",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "300 ml",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "400 ml",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Sugar",
//           "add-price": "0.50",
//         },
//         {
//           name: "Lemon",
//           "add-price": "0.50",
//         },
//         {
//           name: "Syrup",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 10,
//       name: "Ginger",
//       urlToImage: images.imgTea2,
//       description: "Original black tea with fresh ginger, lemon and honey",
//       price: "5.00",
//       category: "tea",
//       sizes: {
//         s: {
//           size: "200 ml",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "300 ml",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "400 ml",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Sugar",
//           "add-price": "0.50",
//         },
//         {
//           name: "Lemon",
//           "add-price": "0.50",
//         },
//         {
//           name: "Syrup",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 11,
//       name: "Cranberry",
//       urlToImage: images.imgTea3,
//       description: "Invigorating black tea with cranberry and honey",
//       price: "5.00",
//       category: "tea",
//       sizes: {
//         s: {
//           size: "200 ml",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "300 ml",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "400 ml",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Sugar",
//           "add-price": "0.50",
//         },
//         {
//           name: "Lemon",
//           "add-price": "0.50",
//         },
//         {
//           name: "Syrup",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 12,
//       name: "Sea buckthorn",
//       urlToImage: images.imgTea4,
//       description:
//         "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
//       price: "5.50",
//       category: "tea",
//       sizes: {
//         s: {
//           size: "200 ml",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "300 ml",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "400 ml",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Sugar",
//           "add-price": "0.50",
//         },
//         {
//           name: "Lemon",
//           "add-price": "0.50",
//         },
//         {
//           name: "Syrup",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 13,
//       name: "Marble cheesecake",
//       urlToImage: images.imgDessert1,
//       description:
//         "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
//       price: "3.50",
//       category: "dessert",
//       sizes: {
//         s: {
//           size: "50 g",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "100 g",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "200 g",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Berries",
//           "add-price": "0.50",
//         },
//         {
//           name: "Nuts",
//           "add-price": "0.50",
//         },
//         {
//           name: "Jam",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 14,
//       name: "Red velvet",
//       urlToImage: images.imgDessert2,
//       description: "Layer cake with cream cheese frosting",
//       price: "4.00",
//       category: "dessert",
//       sizes: {
//         s: {
//           size: "50 g",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "100 g",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "200 g",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Berries",
//           "add-price": "0.50",
//         },
//         {
//           name: "Nuts",
//           "add-price": "0.50",
//         },
//         {
//           name: "Jam",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 15,
//       name: "Cheesecakes",
//       urlToImage: images.imgDessert3,
//       description:
//         "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
//       price: "4.50",
//       category: "dessert",
//       sizes: {
//         s: {
//           size: "50 g",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "100 g",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "200 g",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Berries",
//           "add-price": "0.50",
//         },
//         {
//           name: "Nuts",
//           "add-price": "0.50",
//         },
//         {
//           name: "Jam",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 16,
//       name: "Creme brulee",
//       urlToImage: images.imgDessert4,
//       description:
//         "Delicate creamy dessert in a caramel basket with wild berries",
//       price: "4.00",
//       category: "dessert",
//       sizes: {
//         s: {
//           size: "50 g",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "100 g",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "200 g",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Berries",
//           "add-price": "0.50",
//         },
//         {
//           name: "Nuts",
//           "add-price": "0.50",
//         },
//         {
//           name: "Jam",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 17,
//       name: "Pancakes",
//       urlToImage: images.imgDessert5,
//       description: "Tender pancakes with strawberry jam and fresh strawberries",
//       price: "4.50",
//       category: "dessert",
//       sizes: {
//         s: {
//           size: "50 g",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "100 g",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "200 g",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Berries",
//           "add-price": "0.50",
//         },
//         {
//           name: "Nuts",
//           "add-price": "0.50",
//         },
//         {
//           name: "Jam",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 18,
//       name: "Honey cake",
//       urlToImage: images.imgDessert6,
//       description: "Classic honey cake with delicate custard",
//       price: "4.50",
//       category: "dessert",
//       sizes: {
//         s: {
//           size: "50 g",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "100 g",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "200 g",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Berries",
//           "add-price": "0.50",
//         },
//         {
//           name: "Nuts",
//           "add-price": "0.50",
//         },
//         {
//           name: "Jam",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 19,
//       name: "Chocolate cake",
//       urlToImage: images.imgDessert7,
//       description:
//         "Cake with hot chocolate filling and nuts with dried apricots",
//       price: "5.50",
//       category: "dessert",
//       sizes: {
//         s: {
//           size: "50 g",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "100 g",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "200 g",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Berries",
//           "add-price": "0.50",
//         },
//         {
//           name: "Nuts",
//           "add-price": "0.50",
//         },
//         {
//           name: "Jam",
//           "add-price": "0.50",
//         },
//       ],
//     },

//     {
//       id: 20,
//       name: "Black forest",
//       urlToImage: images.imgDessert8,
//       description:
//         "A combination of thin sponge cake with cherry jam and light chocolate mousse",
//       price: "6.50",
//       category: "dessert",
//       sizes: {
//         s: {
//           size: "50 g",
//           "add-price": "0.00",
//         },
//         m: {
//           size: "100 g",
//           "add-price": "0.50",
//         },
//         l: {
//           size: "200 g",
//           "add-price": "1.00",
//         },
//       },
//       additives: [
//         {
//           name: "Berries",
//           "add-price": "0.50",
//         },
//         {
//           name: "Nuts",
//           "add-price": "0.50",
//         },
//         {
//           name: "Jam",
//           "add-price": "0.50",
//         },
//       ],
//     },
//   ];

//   const renderArticlesToDom = () => {
//     let articlesWrapper = getArticlesWrapper();
//     generateArticles(data).forEach((article) => {
//       articlesWrapper.append(article.generateArticle());
//     });
//   };

//   const getArticlesWrapper = () => {
//     const articlesContainer = document.querySelector(".articles__container");
//     articlesContainer.innerHTML = "";
//     return articlesContainer;
//   };
//   const generateArticles = (data) => {
//     let articles = [];
//     data.forEach((article) => {
//       articles.push(new Article(article));
//     });
//     return articles;
//   };

//   if (data) {
//     renderArticlesToDom();
//   }
//   // TABS
//   // const addTabsClickHandler = () => {
//   //   document
//   //     .querySelector(".tabs__container")
//   //     .addEventListener("click", (e) => {
//   //       if (e.target.classList.contains("tab")) {
//   //         let clickedTab = e.target;
//   //         console.log(clickedTab);

//   //         removeSelectedTabs();
//   //         selectClickedTab(clickedTab);
//   //         filterMenuBySelectedTab(clickedTab.innerText);
//   //       }
//   //     });
//   // };
//   const addTabsClickHandler = () => {
//     document
//       .querySelector(".tabs__container")
//       .addEventListener("click", (e) => {
//         if (e.target.closest(".tab")) {
//           let clickedTab = e.target.closest(".tab");
//           console.log(clickedTab);

//           removeSelectedTabs();
//           selectClickedTab(clickedTab);
//           filterMenuBySelectedTab(clickedTab.innerHTML);
//         }
//       });
//   };

//   addTabsClickHandler();
//   const removeSelectedTabs = () => {
//     let tabs = document.querySelectorAll(".tabs__container .tab");
//     tabs.forEach((tab) => {
//       tab.classList.remove("tab--active");
//     });
//   };

//   const selectClickedTab = (clickedTab) => {
//     clickedTab.classList.add("tab--active");
//   };

//   const filterMenuBySelectedTab = (clickedTab) => {
//     let articles = document.querySelectorAll(".article");
//     articles.forEach((article) => {
//       article.classList.add("article_hidden");
//       article.querySelectorAll(".tab").forEach((tab) => {
//         if (tab.innerHTML === clickedTab) {
//           article.classList.remove("article_hidden");
//         }
//       });
//     });
//   };
// });

// export default menu;

// TEST /////////////////////////////////////////








const menu = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"]);

document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      id: 1,
      name: "Irish coffee",
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgCoffee1,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgCoffee2,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgCoffee3,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgCoffee4,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgCoffee5,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgCoffee6,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgCoffee7,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgCoffee8,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgTea1,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgTea2,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgTea3,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgTea4,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgDessert1,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgDessert2,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgDessert3,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgDessert4,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgDessert5,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgDessert6,
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgDessert7,
      description:
        "Cake with hot chocolate filling and nuts with dried apricots",
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
      urlToImage: _assets_images_menu_images_js__WEBPACK_IMPORTED_MODULE_2__.imgDessert8,
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
  // RENDER ARTICLES
  const renderArticlesToDom = () => {
    let articlesWrapper = getArticlesWrapper();
    generateArticles(data).forEach((article) => {
      articlesWrapper.append(article.generateArticle());
    });

    // addArticleClickHandler();
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

  if (data) {
    renderArticlesToDom();
  }
  /////////////////////////////////////////////////////////
  // TABS
  const addTabsClickHandler = () => {
    document
      .querySelector(".tabs__container")
      .addEventListener("click", (e) => {
        if (e.target.classList.contains("tab")) {
          let clickedTab = e.target;

          removeSelectedTabs();
          selectClickedTab(clickedTab);
          filterMenuBySelectedTab(clickedTab.innerText);
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

  //////////////////////////////////////////////////////////
  // Generate base modal from Modal class
  // const addToolsClickHandler = () => {
  //   document.querySelector(".test-btn").addEventListener("click", () => {
  // generateToolsModal();
  //   });
  // };
  // addToolsClickHandler();

  // const generateToolsModal = () => {
  //   renderModalWindow("Test content for Tools Modal");
  // };

  // const renderModalWindow = (content) => {
  //   let modal = new Modal("tools-modal");
  //   modal.buildModal(content);
  // };

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
    return data.find((article) => article.id == id);
  };

  const renderArticleModalWindow = (content) => {
    let modal = new _Modal_js__WEBPACK_IMPORTED_MODULE_4__.Modal("modal__wrapper", content);
    modal.renderModal();
  };
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


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

module.exports = __webpack_require__.p + "7f46bbcf3885b45df0fc.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2piQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBc0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNyQkE7Ozs7O0FFQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Gb290ZXIvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvTWVudS9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9tZW51LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9IZWFkZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L01lbnUvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvaW5kZXguc2Nzcz85NTczIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4LnNjc3M/YmE3YiIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5zY3NzPzI5ZjYiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9NZW51L2luZGV4LnNjc3M/MmI0MiIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbWVudS5zY3NzPzYwYmYiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvYXNzZXRzL2ltYWdlcy9tZW51LWltYWdlcy5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L01lbnUvQXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L01lbnUvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9NZW51L2luZGV4LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy91dGlscy9odG1sVG9FbGVtZW50LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9pbnRlcik7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xufVxuXG4ud3JhcHBlciB7XG4gIG1heC13aWR0aDogMTQ0cmVtO1xuICBwYWRkaW5nOiAwIDRyZW0gNHJlbSA0cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDVjOTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud3JhcHBlciB7XG4gICAgbWF4LXdpZHRoOiA3Ni44cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAgMS42cmVtIDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAud3JhcHBlciB7XG4gICAgbWF4LXdpZHRoOiAzOHJlbTtcbiAgfVxufVxuXG5hOmxpbmssXG5hOnZpc2l0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogMC44cmVtO1xuICB3aWR0aDogMjByZW07XG4gIGhlaWdodDogNi40cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbn1cblxuLmJ1dHRvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogIzQwM2YzZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWtFQTs7O0VBR0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQWhFRjs7QUFrRUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FBL0RGOztBQWlFQTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFwQ2M7QUExQmhCOztBQWlFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBM0NjO0VBNENkLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBOURGO0FBRkU7RUF5REY7SUFVSSxrQkFBQTtFQTdERjtBQUNGO0FBREU7RUFtREY7SUFjSSxzQkFBQTtFQTVERjtBQUNGO0FBQUU7RUE2Q0Y7SUFrQkksZ0JBQUE7RUEzREY7QUFDRjs7QUE4REE7O0VBRUUscUJBQUE7RUFDQSxjQUFBO0FBM0RGOztBQThEQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBM0RGOztBQTZEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkEvRWM7RUFnRmQsb0JBQUE7QUExREY7O0FBNkRBO0VBOUhFLGlCQStIYztFQTlIZCxnQkE4SHNCO0VBN0h0QixpQkE2SDJCO0VBNUgzQixjQTZDZ0I7QUF3QmxCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkY29sb3IpIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJXRyYW5zaXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuQG1peGluIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgLy8gMTIyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJGRlc2t0b3Atd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAvLyAxMDI0cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LWxhbmQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAvLyA3NjhweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtcG9ydC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAvLyA3MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtbGFyZ2Utd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUge1xcclxcbiAgLy8gNDIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXG4vLyBCYWNrZ3JvdW5kIENvbG9yXFxyXFxuJGNvbG9yLXByaW1hcnk6ICNlM2Q1Yzk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeTogIzY2NWY1NTtcXHJcXG4kY29sb3ItYmFja2Ryb3A6ICM0MDNmM2RjYztcXHJcXG5cXHJcXG4vLyBUZXh0IENvbG9yXFxyXFxuJGNvbG9yLXRleHQtZGFyazogIzQwM2YzZDtcXHJcXG4kY29sb3ItdGV4dC1saWdodDogI2UxZDRjOTtcXHJcXG4kY29sb3ItdGV4dC1hY2NlbnQ6ICNiMDkwN2E7XFxyXFxuXFxyXFxuLy8gQm9yZGVyIENvbG9yOlxcclxcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNjMWI2YWQ7XFxyXFxuJGNvbG9yLWJvcmRlci1kYXJrOiAjNjY1ZjU1O1xcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuJGRlc2t0b3Atd2lkdGg6IDEyMjBweDtcXHJcXG4kdGFibGV0LWxhbmQtd2lkdGg6IDEwMjRweDtcXHJcXG4kdGFibGV0LXBvcnQtd2lkdGg6IDc2OHB4O1xcclxcbiRtb2JpbGUtbGFyZ2Utd2lkdGg6IDcyMHB4O1xcclxcbiRtb2JpbGUtd2lkdGg6IDQyMHB4O1xcclxcblxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvaW50ZXJcXFwiKTtcXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gIG1heC13aWR0aDogMTQ0cmVtO1xcclxcbiAgcGFkZGluZzogMCA0cmVtIDRyZW0gNHJlbTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIG1heC13aWR0aDogNzYuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMS42cmVtIDRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICBtYXgtd2lkdGg6IDM4cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5hOmxpbmssXFxyXFxuYTp2aXNpdGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuOHJlbTtcXHJcXG4gIHdpZHRoOiAyMHJlbTtcXHJcXG4gIGhlaWdodDogNi40cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi10ZXh0IHtcXHJcXG4gIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pY29ucy90d2l0dGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pY29ucy90d2l0dGVyLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pY29ucy9pbnN0YWdyYW0uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ljb25zL2luc3RhZ3JhbS1ob3Zlci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaWNvbnMvZmFjZWJvb2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ljb25zL2ZhY2Vib29rLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZm9vdGVyX19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTByZW07XG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gIGdhcDogMTByZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgcGFkZGluZzogMTByZW0gNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNnJlbSAxLjZyZW07XG4gICAgZ2FwOiA0cmVtO1xuICB9XG59XG4uZm9vdGVyX19jb250YWluZXIgLmhlYWRpbmctbGlnaHQge1xuICBmb250LXNpemU6IDZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBjb2xvcjogI2UxZDRjOTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuZm9vdGVyX19jb250YWluZXIgLmhlYWRpbmctbGlnaHQge1xuICAgIGZvbnQtc2l6ZTogNC4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gICAgY29sb3I6ICNlMWQ0Yzk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuZm9vdGVyX19jb250YWluZXIgLmhlYWRpbmctbGlnaHQge1xuICAgIGZvbnQtc2l6ZTogMy4xNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICAgIGNvbG9yOiAjZTFkNGM5O1xuICB9XG59XG5cbi5oZWFkaW5nLWxpZ2h0IHNwYW4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjYjA5MDdhO1xufVxuXG4uZm9vdGVyX19jb250YWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS43cmVtO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfdGl0bGUge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIGNvbG9yOiAjZTFkNGM5O1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX2FkZHJlc3Mge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjZTFkNGM5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX2FkZHJlc3MgaW1nIHtcbiAgcGFkZGluZy1yaWdodDogMC44cmVtO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfcGhvbmUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjZTFkNGM5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9vdGVyX19jb250YWN0c19waG9uZSBpbWcge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XG59XG4uZm9vdGVyX19jb250YWN0c19zY2hlZHVsZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG59XG4uZm9vdGVyX19jb250YWN0c19zY2hlZHVsZSBpbWcge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XG59XG5cbi5mb290ZXJfX2NvbnRhY3RzX2FkZHJlc3MgYSxcbi5mb290ZXJfX2NvbnRhY3RzX3Bob25lIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9vdGVyX19jb250YWN0c19hZGRyZXNzIGE6YWZ0ZXIsXG4uZm9vdGVyX19jb250YWN0c19waG9uZSBhOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWQ0Yzk7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyBhOmhvdmVyOmFmdGVyLFxuICAuZm9vdGVyX19jb250YWN0c19waG9uZSBhOmhvdmVyOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbi5zb2NpYWwtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEuMnJlbTtcbiAgcGFkZGluZy10b3A6IDRyZW07XG59XG5cbi5zb2NpYWwtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTNkNWM5O1xuICB3aWR0aDogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuc29jaWFsLWljb246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG4gIH1cbn1cbi5zb2NpYWwtaWNvbiBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xufVxuLnNvY2lhbC1pY29uX190d2l0dGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuc29jaWFsLWljb25fX3R3aXR0ZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICB9XG59XG4uc29jaWFsLWljb25fX2luc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnNvY2lhbC1pY29uX19pbnN0YWdyYW06aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICB9XG59XG4uc29jaWFsLWljb25fX2ZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuc29jaWFsLWljb25fX2ZhY2Vib29rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dC9Gb290ZXIvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFnRUE7RUFDRSx5QkFwQmdCO0VBcUJoQixhQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQS9ERjtBQVdFO0VBNENGO0lBV0ksMEJBQUE7SUFDQSxtQkFBQTtFQTlERjtBQUNGO0FBaUJFO0VBZ0NGO0lBZUksb0JBQUE7SUFDQSxTQUFBO0VBNURGO0FBQ0Y7QUE4REU7RUFsRkEsZUFtRmdCO0VBbEZoQixnQkFrRnNCO0VBakZ0QixpQkFpRjJCO0VBaEYzQixjQThDaUI7QUF2Qm5CO0FBS0U7RUFtREE7SUFsRkEsaUJBc0ZrQjtJQXJGbEIsZ0JBcUYwQjtJQXBGMUIsaUJBb0YrQjtJQW5GL0IsY0E4Q2lCO0VBaEJqQjtBQUNGO0FBR0U7RUE2Q0E7SUFsRkEsa0JBeUZrQjtJQXhGbEIsZ0JBd0YyQjtJQXZGM0IsaUJBdUZnQztJQXRGaEMsY0E4Q2lCO0VBUmpCO0FBQ0Y7O0FBb0RFO0VBQ0Usa0JBQUE7RUFDQSxjQTlDZ0I7QUFIcEI7O0FBcURBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQWxERjtBQW9ERTtFQXpHQSxpQkEwR2dCO0VBekdoQixnQkF5R3dCO0VBeEd4QixpQkF3RzZCO0VBdkc3QixjQThDaUI7RUEwRGYsb0JBQUE7QUEvQ0o7QUFpREU7RUE3R0EsaUJBOEdnQjtFQTdHaEIsZ0JBNkd3QjtFQTVHeEIsaUJBNEc2QjtFQTNHN0IsY0E4Q2lCO0VBOERmLGtCQUFBO0VBQ0EsZUFBQTtBQTVDSjtBQThDSTtFQUNFLHFCQUFBO0FBNUNOO0FBK0NFO0VBdEhBLGlCQXVIZ0I7RUF0SGhCLGdCQXNId0I7RUFySHhCLGlCQXFINkI7RUFwSDdCLGNBOENpQjtFQXVFZixrQkFBQTtBQTFDSjtBQTJDSTtFQUNFLHFCQUFBO0FBekNOO0FBNENFO0VBN0hBLGlCQThIZ0I7RUE3SGhCLGdCQTZId0I7RUE1SHhCLGlCQTRINkI7RUEzSDdCLGNBOENpQjtBQXNDbkI7QUF5Q0k7RUFDRSxxQkFBQTtBQXZDTjs7QUE0Q0E7O0VBRUUsa0JBQUE7QUF6Q0Y7QUEwQ0U7O0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkE3RmU7RUE4RmYsT0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXZDSjtBQXlDRTtFQUNFOztJQUNFLG1CQUFBO0lBQ0EsZ0NBQUE7RUF0Q0o7QUFDRjs7QUEwQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXZDRjs7QUF5Q0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQTFIZ0I7RUEySGhCLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBdENGO0FBd0NFO0VBQ0U7SUFDRSx5QkFwSVU7RUE4RmQ7QUFDRjtBQXlDRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF2Q0o7QUEwQ0U7RUFDRSxvRUFBQTtFQUNBLGdDQUFBO0FBeENKO0FBeUNJO0VBQ0U7SUFDRSxvRUFBQTtFQXZDTjtBQUNGO0FBMkNFO0VBQ0Usb0VBQUE7RUFDQSxnQ0FBQTtBQXpDSjtBQTBDSTtFQUNFO0lBQ0Usb0VBQUE7RUF4Q047QUFDRjtBQTRDRTtFQUNFLG9FQUFBO0VBQ0EsZ0NBQUE7QUExQ0o7QUEyQ0k7RUFDRTtJQUNFLG9FQUFBO0VBekNOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG5AbWl4aW4gbWVkaWEtZGVza3RvcCB7XFxyXFxuICAvLyAxMjIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gIC8vIDEwMjRweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtbGFuZC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gIC8vIDc2OHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1wb3J0LXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gIC8vIDcyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1sYXJnZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAvLyA0MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UzZDVjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2MxYjZhZDtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG4kZGVza3RvcC13aWR0aDogMTIyMHB4O1xcclxcbiR0YWJsZXQtbGFuZC13aWR0aDogMTAyNHB4O1xcclxcbiR0YWJsZXQtcG9ydC13aWR0aDogNzY4cHg7XFxyXFxuJG1vYmlsZS1sYXJnZS13aWR0aDogNzIwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNDIwcHg7XFxyXFxuXFxuLmZvb3Rlcl9fY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXHJcXG4gIGdhcDogMTByZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBwYWRkaW5nOiAxMHJlbSA2cmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgcGFkZGluZzogNnJlbSAxLjZyZW07XFxyXFxuICAgIGdhcDogNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkaW5nLWxpZ2h0IHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCg2cmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgICBAaW5jbHVkZSB0ZXh0KDQuMnJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgICBAaW5jbHVkZSB0ZXh0KDMuMTVyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5oZWFkaW5nLWxpZ2h0IHtcXHJcXG4gIHNwYW4ge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1hY2NlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX2NvbnRhY3RzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxLjdyZW07XFxyXFxuXFxyXFxuICAmX3RpdGxlIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgyLjRyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gICZfYWRkcmVzcyB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX3Bob25lIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX3NjaGVkdWxlIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19jb250YWN0c19hZGRyZXNzIGEsXFxyXFxuLmZvb3Rlcl9fY29udGFjdHNfcGhvbmUgYSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAmOmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGV4dC1saWdodDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAtMnB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAmOmhvdmVyOmFmdGVyIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaWNvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXHJcXG59XFxyXFxuLnNvY2lhbC1pY29uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XFxyXFxuICB3aWR0aDogNnJlbTtcXHJcXG4gIGhlaWdodDogNnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDZyZW07XFxyXFxuICAgIGhlaWdodDogNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3R3aXR0ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3R3aXR0ZXIuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy90d2l0dGVyLWhvdmVyLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2luc3RhZ3JhbSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLWhvdmVyLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ZhY2Vib29rIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9mYWNlYm9vay5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2ZhY2Vib29rLWhvdmVyLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTByZW07XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICBnYXA6IDNyZW07XG4gIH1cbn1cblxuLm5vLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi52aXN1YWxseS1oaWRkZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY2xpcC1wYXRoOiBpbnNldCgxMDAlKTtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5hdmlnYXRpb25fX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogNjUuNiU7XG59XG4ubmF2aWdhdGlvbl9fd3JhcHBlci5vcGVuIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm5hdmlnYXRpb25fX3dyYXBwZXIge1xuICAgIGdhcDogM3JlbTtcbiAgICBtaW4td2lkdGg6IDc4JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZpZ2F0aW9uX193cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICAgIGdhcDogMTByZW07XG4gICAgcGFkZGluZzogNnJlbSA0cmVtO1xuICAgIHRvcDogOS45cmVtO1xuICAgIHotaW5kZXg6IDI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICByaWdodDogLTEwMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cblxuLm5hdmlnYXRpb25fX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogNHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm5hdmlnYXRpb25fX2xpc3Qge1xuICAgIGdhcDogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZpZ2F0aW9uX19saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLm5hdmlnYXRpb25fX2xpc3RfbGluayBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5hdmlnYXRpb25fX2xpc3RfbGluayBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDNmM2Q7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLm5hdmlnYXRpb25fX2xpc3RfbGluayBhOmhvdmVyOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmlnYXRpb25fX2xpc3RfbGluayB7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIH1cbn1cblxuLmhlYWRlcl9fbWVudSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG59XG4uaGVhZGVyX19tZW51IHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbWVudSBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxLjZyZW07XG59XG4uaGVhZGVyX19tZW51IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDNmM2Q7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMnB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuaGVhZGVyX19tZW51IGE6aG92ZXI6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyX19tZW51IHtcbiAgICBmb250LXNpemU6IDMuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTI1JTtcbiAgfVxuICAuaGVhZGVyX19tZW51IC5pY29uLWN1cCB7XG4gICAgbWluLWhlaWdodDogNHJlbTtcbiAgICBtaW4td2lkdGg6IDRyZW07XG4gIH1cbn1cblxuLm5hdmlnYXRpb25fX2xpc3RfbGluay5tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJ1cmdlcl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnVyZ2VyX19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNC42cmVtO1xuICB9XG59XG4uYnVyZ2VyX19jb250YWluZXIub3BlbiAuYnVyZ2VyX19saW5lOm50aC1jaGlsZCgxKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoNDVkZWcpO1xufVxuLmJ1cmdlcl9fY29udGFpbmVyLm9wZW4gLmJ1cmdlcl9fbGluZTpudGgtY2hpbGQoMikge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC00NWRlZyk7XG59XG4uYnVyZ2VyX19jb250YWluZXIgLmJ1cmdlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0LjRyZW07XG4gIGhlaWdodDogNC40cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY1ZjU1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYnVyZ2VyX19jb250YWluZXIgLmJ1cmdlcl9fbGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxLjZyZW07XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDNmM2Q7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuLmJ1cmdlcl9fY29udGFpbmVyIC5idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjRyZW0pO1xufVxuLmJ1cmdlcl9fY29udGFpbmVyIC5idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNHJlbSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUEvREY7QUFjRTtFQTRDRjtJQU9JLFNBQUE7RUE3REY7QUFDRjs7QUErREE7RUFDRSxnQkFBQTtBQTVERjs7QUE4REE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUEzREY7O0FBOERBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQTNERjtBQTRERTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7QUExREo7QUFuQkU7RUFzRUY7SUFVSSxTQUFBO0lBQ0EsY0FBQTtFQXpERjtBQUNGO0FBbkJFO0VBZ0VGO0lBY0ksa0JBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7SUFDQSx5QkFoRVk7SUFpRVosVUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxnQ0FBQTtFQXZERjtBQUNGOztBQXlEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUF0REY7QUFoREU7RUFtR0Y7SUFNSSxTQUFBO0VBckRGO0FBQ0Y7QUEvQ0U7RUE2RkY7SUFTSSxzQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFQW5ERjtBQUNGO0FBcURFO0VBcElBLGlCQXFJZ0I7RUFwSWhCLGdCQW9Jd0I7RUFuSXhCLGlCQW1JNkI7RUFsSTdCLGNBNkNnQjtFQXNGZCxnQkFBQTtBQWhESjtBQWlESTtFQUNFLGtCQUFBO0FBL0NOO0FBZ0RNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkE5RlU7RUErRlYsT0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTlDUjtBQWdETTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxnQ0FBQTtFQTlDUjtBQUNGO0FBaEZFO0VBMkdBO0lBdUJJLGlCQUFBO0lBQ0EsaUJBQUE7RUE5Q0o7QUFDRjs7QUFrREE7RUFqS0UsaUJBa0tjO0VBaktkLGdCQWlLc0I7RUFoS3RCLGlCQWdLMkI7RUEvSjNCLGNBNkNnQjtFQW1IaEIsc0JBQUE7QUE1Q0Y7QUE4Q0U7RUFDRSxhQUFBO0FBNUNKO0FBOENFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUE1Q0o7QUE4Q0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFuSVk7RUFvSVosa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBNUNOO0FBOENJO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGdDQUFBO0VBNUNOO0FBQ0Y7QUF4SEU7RUF3SUY7SUFpQ0ksaUJBQUE7SUFDQSxpQkFBQTtFQTdDRjtFQStDRTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtFQTdDSjtBQUNGOztBQWlEQTtFQUNFLGFBQUE7QUE5Q0Y7O0FBaURBO0VBQ0UsYUFBQTtBQTlDRjtBQTFJRTtFQXVMRjtJQUdJLGNBQUE7SUFDQSxjQUFBO0VBNUNGO0FBQ0Y7QUE2Q0U7RUFDRSxzQ0FBQTtBQTNDSjtBQTZDRTtFQUNFLHVDQUFBO0FBM0NKO0FBNkNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQTNDSjtBQTZDSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkE1TFk7RUE2TFosc0NBQUE7RUFDQSxzQkFBQTtBQTNDTjtBQTZDTTtFQUNFLDhCQUFBO0FBM0NSO0FBNkNNO0VBQ0UsNkJBQUE7QUEzQ1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG5AbWl4aW4gbWVkaWEtZGVza3RvcCB7XFxyXFxuICAvLyAxMjIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gIC8vIDEwMjRweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtbGFuZC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gIC8vIDc2OHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1wb3J0LXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gIC8vIDcyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1sYXJnZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAvLyA0MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UzZDVjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2MxYjZhZDtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG4kZGVza3RvcC13aWR0aDogMTIyMHB4O1xcclxcbiR0YWJsZXQtbGFuZC13aWR0aDogMTAyNHB4O1xcclxcbiR0YWJsZXQtcG9ydC13aWR0aDogNzY4cHg7XFxyXFxuJG1vYmlsZS1sYXJnZS13aWR0aDogNzIwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNDIwcHg7XFxyXFxuXFxuLmhlYWRlcl9fY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubm8tc2Nyb2xsIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbi52aXN1YWxseS1oaWRkZW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDFweDtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgbWFyZ2luOiAtMXB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBjbGlwLXBhdGg6IGluc2V0KDEwMCUpO1xcclxcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uX193cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWluLXdpZHRoOiA2NS42JTtcXHJcXG4gICYub3BlbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgbWluLXdpZHRoOiA3OCU7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gICAgZ2FwOiAxMHJlbTtcXHJcXG4gICAgcGFkZGluZzogNnJlbSA0cmVtO1xcclxcbiAgICB0b3A6IDkuOXJlbTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHJpZ2h0OiAtMTAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi5uYXZpZ2F0aW9uX19saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDRyZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA2cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX2xpbmsge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgYSB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRleHQtZGFyaztcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBib3R0b206IC0ycHg7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICAgICAmOmhvdmVyOmFmdGVyIHtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMTI1JTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19tZW51IHtcXHJcXG4gIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcXHJcXG5cXHJcXG4gIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgYSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMS42cmVtO1xcclxcblxcclxcbiAgICAmOmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGV4dC1kYXJrO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIGJvdHRvbTogLTJweDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgICAmOmhvdmVyOmFmdGVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgZm9udC1zaXplOiAzLjJyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xcclxcblxcclxcbiAgICAuaWNvbi1jdXAge1xcclxcbiAgICAgIG1pbi1oZWlnaHQ6IDRyZW07XFxyXFxuICAgICAgbWluLXdpZHRoOiA0cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsubWVudSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogNC42cmVtO1xcclxcbiAgfVxcclxcbiAgJi5vcGVuIC5idXJnZXJfX2xpbmU6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB9XFxyXFxuICAmLm9wZW4gLmJ1cmdlcl9fbGluZTpudGgtY2hpbGQoMikge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKC00NWRlZyk7XFxyXFxuICB9XFxyXFxuICAuYnVyZ2VyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDQuNHJlbTtcXHJcXG4gICAgaGVpZ2h0OiA0LjRyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXItZGFyaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcclxcbiAgICAmX19saW5lIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgd2lkdGg6IDEuNnJlbTtcXHJcXG4gICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRleHQtZGFyaztcXHJcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcclxcblxcclxcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC40cmVtKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNHJlbSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbi1jb2ZmZWUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbi10ZWEuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbi1kZXNzZXJ0cy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9yZWZyZXNoLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL2luZm8tZW1wdHkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlY3Rpb25fX21lbnUtY29mZmVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cmVtO1xufVxuXG4uaGVhZGVyX19tZW51IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oZWFkZXJfX21lbnUgYSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5oZWFkZXJfX21lbnU6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXJfX21lbnUgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGVhZGVyX19tZW51IGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEuNnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLm5hdmlnYXRpb25fX2xpc3RfbGluay5tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsuaG9tZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWFkaW5nLWRhcmsge1xuICBmb250LXNpemU6IDZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDgwcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5oZWFkaW5nLWRhcmsge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMTUlO1xuICAgIGNvbG9yOiAjNDAzZjNkO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmhlYWRpbmctZGFyayB7XG4gICAgZm9udC1zaXplOiA0LjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTE1JTtcbiAgICBjb2xvcjogIzQwM2YzZDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5oZWFkaW5nLWRhcmsge1xuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gICAgY29sb3I6ICM0MDNmM2Q7XG4gIH1cbn1cbi5oZWFkaW5nLWRhcmsgc3BhbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICNiMDkwN2E7XG59XG5cbi50YWJzX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxLjdyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnRhYnNfX2NvbnRhaW5lciB7XG4gICAgZ2FwOiAwLjhyZW07XG4gIH1cbn1cblxuLnRhYiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB3aWR0aDogMTByZW07XG4gIGhlaWdodDogNC44cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzFiNmFkO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgZ2FwOiAwLjhyZW07XG4gIHBhZGRpbmc6IDAuOHJlbSAxLjZyZW0gMC44cmVtIDAuOHJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50YWJfaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgcGFkZGluZzogMCAwLjdyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29mZmVlLWljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi50ZWEtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuLmRlc3NlcnQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuLnRhYl90ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4udGFiLS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xuICBjb2xvcjogI2UxZDRjOTtcbn1cblxuLnRhYi0tYWN0aXZlIC50YWJfaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG59XG5cbi50YWItLWFjdGl2ZSAudGFiX3RleHQge1xuICBjb2xvcjogI2UzZDVjOTtcbn1cblxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAudGFiOmhvdmVyLFxuICAudGFiOmFjdGl2ZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjVmNTU7XG4gICAgY29sb3I6ICNlMWQ0Yzk7XG4gIH1cbiAgLnRhYjpob3ZlciAudGFiX2ljb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG4gIH1cbiAgLnRhYjpob3ZlciAudGFiX3RleHQge1xuICAgIGNvbG9yOiAjZTNkNWM5O1xuICB9XG59XG4uYXJ0aWNsZXNfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIHJvdy1nYXA6IDMuOXJlbTtcbiAgY29sdW1uLWdhcDogNHJlbTtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gIC5hcnRpY2xlc19fY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmFydGljbGVzX19jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmFydGljbGVzX19jb250YWluZXIge1xuICAgIHJvdy1nYXA6IDMuOHJlbTtcbiAgfVxufVxuXG4uYXJ0aWNsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWI2YWQ7XG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gIG1heC13aWR0aDogMzFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuLmFydGljbGVfaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFydGljbGU6bnRoLWNoaWxkKG4rNSk6bnRoLWNoaWxkKC1uKzgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmFydGljbGU6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYXJ0aWNsZTpob3ZlciAuaW1hZ2Uge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxufVxuLmltYWdlX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMzFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XG59XG5cbi5pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMS41cmVtO1xuICByaWdodDogLTEuNnJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbmZvX19jb250YWluZXIge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIGdhcDogMS4ycmVtO1xuICBwYWRkaW5nOiAxLjlyZW07XG4gIG1pbi1oZWlnaHQ6IDE5LjZyZW07XG59XG5cbi5pbmZvX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4uaW5mb19fZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xufVxuXG4uaW5mb19fcHJpY2Uge1xuICBtYXJnaW46IGF1dG8gMCAwIDA7XG59XG5cbi5pbmZvX19jb250YWluZXIgLnRhYiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgLnJlZnJlc2gtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDZyZW07XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjVmNTU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xuICB9XG4gIC5yZWZyZXNoLWJ0biBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDIuNHJlbTtcbiAgICBoZWlnaHQ6IDIuNHJlbTtcbiAgfVxuICAucmVmcmVzaC1idG5fX2ljb24ge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgfVxufVxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgNjMsIDYxLCAwLjgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LXdpZHRoOiA4MHJlbTtcbiAgbWluLWhlaWdodDogNTAuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgcGFkZGluZzogMS42cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5tb2RhbF9fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbn1cbi5tb2RhbF9faW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICBtYXgtd2lkdGg6IDMxcmVtO1xufVxuLm1vZGFsX19pbWFnZV9jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDM0cmVtO1xuICBoZWlnaHQ6IDM0cmVtO1xufVxuLm1vZGFsX19pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjJyZW07XG59XG4ubW9kYWxfX2luZm9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xufVxuLm1vZGFsX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59XG4ubW9kYWxfX3RpdGxlX3NpemUsIC5tb2RhbF9fdGl0bGVfYWRkIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogIzQwM2YzZDtcbiAgbWFyZ2luLWJvdHRvbTogLTEuMnJlbTtcbn1cbi5tb2RhbF9fcHJpY2VfdG90YWwge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICBwYWRkaW5nLWJvdHRvbTogMS44cmVtO1xufVxuLm1vZGFsX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59XG4ubW9kYWxfX3ByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxYjZhZDtcbn1cbi5tb2RhbF9fbGVnZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjhyZW07XG4gIG1hcmdpbi10b3A6IC0wLjhyZW07XG59XG4ubW9kYWxfX2Nsb3NlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDAzZjNkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEuOHJlbTtcbn1cbi5tb2RhbF9fc2l6ZSBpbnB1dCwgLm1vZGFsX19hZGQgaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1vZGFsX19zaXplLCAubW9kYWxfX2FkZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjlyZW07XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG4ubW9kYWxfX3NpemVfb3B0aW9uLCAubW9kYWxfX2FkZF9vcHRpb24ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMC43cmVtIDEuNXJlbSAwLjdyZW0gMC43cmVtO1xuICBnYXA6IDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWI2YWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG4ubW9kYWxfX3NpemVfb3B0aW9uID4gLmljb24sIC5tb2RhbF9fYWRkX29wdGlvbiA+IC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWI2YWQ7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5tb2RhbF9fc2l6ZV9vcHRpb24gPiAuc2l6ZV90aXRsZSwgLm1vZGFsX19hZGRfb3B0aW9uID4gLnNpemVfdGl0bGUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLmNoZWNrZWQge1xuICBjb2xvcjogI2UxZDRjOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NWY1NTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NWY1NTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uaWNvbi1pbmZvIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pIGNlbnRlciBuby1yZXBlYXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0L01lbnUvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFnRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUEvREY7O0FBa0VFO0VBQ0UsY0FBQTtBQS9ESjtBQWlFRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBL0RKO0FBaUVFO0VBQ0UsbUJBQUE7QUEvREo7QUFVRTtFQXlERTtJQUNFLGFBQUE7RUFoRUo7RUFrRUU7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VBaEVKO0FBQ0Y7O0FBbUVBO0VBQ0UsY0FBQTtBQWhFRjs7QUFrRUE7RUFDRSxhQUFBO0FBL0RGOztBQWlFQTtFQXBHRSxlQXFHYztFQXBHZCxnQkFvR29CO0VBbkdwQixpQkFtR3lCO0VBbEd6QixjQTZDZ0I7RUFzRGhCLGtCQUFBO0VBQ0EsZ0JBQUE7QUEzREY7QUFiRTtFQXFFRjtJQXBHRSxlQTBHZ0I7SUF6R2hCLGdCQXlHc0I7SUF4R3RCLGlCQXdHMkI7SUF2RzNCLGNBNkNnQjtFQUdoQjtBQUNGO0FBZkU7RUErREY7SUFwR0UsaUJBNkdnQjtJQTVHaEIsZ0JBNEd3QjtJQTNHeEIsaUJBMkc2QjtJQTFHN0IsY0E2Q2dCO0VBV2hCO0FBQ0Y7QUF2QkU7RUErREY7SUFwR0UsaUJBZ0hnQjtJQS9HaEIsZ0JBK0d3QjtJQTlHeEIsaUJBOEc2QjtJQTdHN0IsY0E2Q2dCO0VBbUJoQjtBQUNGO0FBK0NFO0VBQ0Usa0JBQUE7RUFDQSxjQW5FZ0I7QUFzQnBCOztBQWlEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUE5Q0Y7QUF6Q0U7RUFvRkY7SUFNSSxXQUFBO0VBN0NGO0FBQ0Y7O0FBZ0RBO0VBbklFLGlCQW9JYztFQW5JZCxnQkFtSXNCO0VBbEl0QixpQkFrSTJCO0VBakkzQixjQTZDZ0I7RUFxRmhCLDBCQUFBO0VBSUEsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFoR2M7RUFpR2QseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FBN0NGOztBQStDQTtFQUNFLGNBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQTdDRjs7QUErQ0E7RUFDRSxtREFBQTtBQTVDRjs7QUE4Q0E7RUFDRSxtREFBQTtBQTNDRjs7QUE2Q0E7RUFDRSxtREFBQTtBQTFDRjs7QUE0Q0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQXpDRjs7QUEyQ0E7RUFDRSx5QkE5SGdCO0VBK0hoQixjQTFIaUI7QUFrRm5COztBQTBDQTtFQUNFLHlCQW5JYztBQTRGaEI7O0FBeUNBO0VBQ0UsY0F0SWM7QUFnR2hCOztBQXdDQTtFQUNFOztJQUVFLGVBQUE7SUFDQSx5QkEzSWM7SUE0SWQsY0F2SWU7RUFrR2pCO0VBd0NBO0lBQ0UseUJBakpZO0VBMkdkO0VBd0NBO0lBQ0UsY0FwSlk7RUE4R2Q7QUFDRjtBQStDQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUE3Q0Y7QUFySkU7RUE0TEY7SUFTSSxxQ0FBQTtJQUNBLG9CQUFBO0VBNUNGO0FBQ0Y7QUF6SUU7RUEwS0Y7SUFhSSwwQkFBQTtFQTFDRjtBQUNGO0FBeElFO0VBb0tGO0lBZ0JJLGVBQUE7RUF4Q0Y7QUFDRjs7QUEyQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQXhDRjtBQTBDRTtFQUNFLGFBQUE7QUF4Q0o7QUEzS0U7RUF1TkU7SUFDRSxhQUFBO0VBekNKO0FBQ0Y7O0FBNENBO0VBQ0U7SUFDRSxlQUFBO0VBekNGO0VBMkNBO0lBQ0UscUJBQUE7RUF6Q0Y7QUFDRjtBQTRDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUExQ0Y7O0FBNENBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBekNGOztBQTRDQTtFQXJRRSxpQkFzUWM7RUFyUWQsZ0JBcVFzQjtFQXBRdEIsaUJBb1EyQjtFQW5RM0IsY0E2Q2dCO0VBdU5oQixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXRDRjs7QUF5Q0E7RUFDRSxpQkFBQTtBQXRDRjs7QUF3Q0E7RUFsUkUsaUJBbVJjO0VBbFJkLGdCQWtSc0I7RUFqUnRCLGlCQWlSMkI7RUFoUjNCLGNBNkNnQjtBQWlNbEI7O0FBb0NBO0VBQ0Usa0JBQUE7QUFqQ0Y7O0FBbUNBO0VBQ0UsYUFBQTtBQWhDRjs7QUE1T0U7RUErUUE7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxvQkFBQTtFQS9CRjtFQWlDRTtJQUNFLHFCQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUEvQko7RUFpQ0U7SUFDRSxtREFBQTtFQS9CSjtBQUNGO0FBb0NBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0E3UWU7RUE4UWYsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFsQ0Y7O0FBb0NBO0VBQ0Usa0JBQUE7RUFDQSx5QkF0UmM7RUF1UmQsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQWpDRjtBQWtDRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBaENKO0FBa0NFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQWhDSjtBQWtDSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQWhDTjtBQW1DRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFqQ0o7QUFtQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBakNKO0FBbUNFO0VBL1ZBLGlCQWdXZ0I7RUEvVmhCLGdCQStWd0I7RUE5VnhCLGlCQThWNkI7RUE3VjdCLGNBNkNnQjtBQWtSbEI7QUFnQ0k7RUFsV0YsaUJBb1drQjtFQW5XbEIsZ0JBbVcwQjtFQWxXMUIsaUJBa1crQjtFQWpXL0IsY0E2Q2dCO0VBcVRaLHNCQUFBO0FBNUJOO0FBK0JFO0VBeFdBLGlCQXlXZ0I7RUF4V2hCLGdCQXdXd0I7RUF2V3hCLGlCQXVXNkI7RUF0VzdCLGNBNkNnQjtFQTJUZCxzQkFBQTtBQTNCSjtBQTZCRTtFQTdXQSxpQkE4V2dCO0VBN1doQixnQkE2V3dCO0VBNVd4QixpQkE0VzZCO0VBM1c3QixjQTZDZ0I7QUFzU2xCO0FBMkJFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBRUEsZ0NBQUE7QUExQko7QUE2QkU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBM0JKO0FBOEJFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQXZWWTtFQXdWWixvQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUE1Qko7QUErQkU7RUFFRSxhQUFBO0FBOUJKO0FBaUNFO0VBRUUsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFoQ0o7QUFrQ0k7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBaENOO0FBa0NNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQXZYYTtFQXdYYixjQTdYVTtFQThYVixnQ0FBQTtBQWhDUjtBQWtDTTtFQUNFLGlCQUFBO0FBaENSOztBQXFDQTtFQUNFLGNBdFlpQjtFQXVZakIseUJBNVlnQjtFQTZZaEIseUJBQUE7RUFDQSxlQUFBO0FBbENGOztBQW9DQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0VBQUE7QUFqQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG5AbWl4aW4gbWVkaWEtZGVza3RvcCB7XFxyXFxuICAvLyAxMjIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gIC8vIDEwMjRweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtbGFuZC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gIC8vIDc2OHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1wb3J0LXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gIC8vIDcyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1sYXJnZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAvLyA0MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UzZDVjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2MxYjZhZDtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG4kZGVza3RvcC13aWR0aDogMTIyMHB4O1xcclxcbiR0YWJsZXQtbGFuZC13aWR0aDogMTAyNHB4O1xcclxcbiR0YWJsZXQtcG9ydC13aWR0aDogNzY4cHg7XFxyXFxuJG1vYmlsZS1sYXJnZS13aWR0aDogNzIwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNDIwcHg7XFxyXFxuXFxuLnNlY3Rpb25fX21lbnUtY29mZmVlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNHJlbTtcXHJcXG59XFxyXFxuLmhlYWRlcl9fbWVudSB7XFxyXFxuICBzcGFuIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuICBhIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgfVxcclxcbiAgJjphZnRlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgYSB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGdhcDogMS42cmVtO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4ubmF2aWdhdGlvbl9fbGlzdF9saW5rLm1lbnUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsuaG9tZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4uaGVhZGluZy1kYXJrIHtcXHJcXG4gIEBpbmNsdWRlIHRleHQoNnJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1heC13aWR0aDogODByZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDVyZW0sIDYwMCwgMTE1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDQuMnJlbSwgNjAwLCAxMTUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMy4ycmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgfVxcclxcblxcclxcbiAgc3BhbiB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6ICRjb2xvci10ZXh0LWFjY2VudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLy8gVGFic1xcclxcbi50YWJzX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxLjdyZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICBnYXA6IDAuOHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRhYiB7XFxyXFxuICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgLy8gZGlzcGxheTogZmxleDtcXHJcXG4gIC8vIHdpZHRoOiBhdXRvO1xcclxcbiAgLy8gaGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbiAgaGVpZ2h0OiA0LjhyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXItbGlnaHQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG4gIGdhcDogMC44cmVtO1xcclxcbiAgcGFkZGluZzogMC44cmVtIDEuNnJlbSAwLjhyZW0gMC44cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi50YWJfaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ib3JkZXItbGlnaHQ7XFxyXFxuICB3aWR0aDogM3JlbTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcclxcbiAgcGFkZGluZzogMCAwLjdyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmNvZmZlZS1pY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uLWNvZmZlZS5zdmcpO1xcclxcbn1cXHJcXG4udGVhLWljb24ge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb24tdGVhLnN2Zyk7XFxyXFxufVxcclxcbi5kZXNzZXJ0LWljb24ge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vYXNzZXRzL2ljb25zL2ljb24tZGVzc2VydHMuc3ZnKTtcXHJcXG59XFxyXFxuLnRhYl90ZXh0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4udGFiLS1hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcXHJcXG4gIGNvbG9yOiAkY29sb3ItdGV4dC1saWdodDtcXHJcXG59XFxyXFxuLnRhYi0tYWN0aXZlIC50YWJfaWNvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG59XFxyXFxuLnRhYi0tYWN0aXZlIC50YWJfdGV4dCB7XFxyXFxuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxufVxcclxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gIC50YWI6aG92ZXIsXFxyXFxuICAudGFiOmFjdGl2ZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcXHJcXG4gICAgY29sb3I6ICRjb2xvci10ZXh0LWxpZ2h0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhYjpob3ZlciAudGFiX2ljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIH1cXHJcXG4gIC50YWI6aG92ZXIgLnRhYl90ZXh0IHtcXHJcXG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyAudGFiOmRpc2FibGVkLFxcclxcbi8vIC50YWIgYnV0dG9uW2Rpc2FibGVkXSB7XFxyXFxuLy8gICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuLy8gfVxcclxcblxcclxcbi8vIEFydGljbGVzXFxyXFxuLmFydGljbGVzX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICByb3ctZ2FwOiAzLjlyZW07XFxyXFxuICBjb2x1bW4tZ2FwOiA0cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogLTJweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtZGVza3RvcCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICByb3ctZ2FwOiAzLjhyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWJvcmRlci1saWdodDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxyXFxuICBtYXgtd2lkdGg6IDMxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAmX2hpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgICY6bnRoLWNoaWxkKG4gKyA1KTpudGgtY2hpbGQoLW4gKyA4KSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAuYXJ0aWNsZTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5hcnRpY2xlOmhvdmVyIC5pbWFnZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlX19jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGhlaWdodDogMzFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcclxcbn1cXHJcXG4uaW1hZ2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtMS41cmVtO1xcclxcbiAgcmlnaHQ6IC0xLjZyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm9fX2NvbnRhaW5lciB7XFxyXFxuICBAaW5jbHVkZSB0ZXh0KDIuNHJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgZ2FwOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nOiAxLjlyZW07XFxyXFxuICBtaW4taGVpZ2h0OiAxOS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb19fdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyLjRyZW07XFxyXFxufVxcclxcbi5pbmZvX19kZXNjcmlwdGlvbiB7XFxyXFxuICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNDAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG59XFxyXFxuLmluZm9fX3ByaWNlIHtcXHJcXG4gIG1hcmdpbjogYXV0byAwIDAgMDtcXHJcXG59XFxyXFxuLmluZm9fX2NvbnRhaW5lciAudGFiIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbkBpbmNsdWRlIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgLnJlZnJlc2gtYnRuIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA2cmVtO1xcclxcbiAgICBoZWlnaHQ6IDZyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXItZGFyaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xcclxcblxcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgd2lkdGg6IDIuNHJlbTtcXHJcXG4gICAgICBoZWlnaHQ6IDIuNHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAmX19pY29uIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi9hc3NldHMvaWNvbnMvcmVmcmVzaC5zdmcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIE1vZGFsXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJhY2tkcm9wO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBtYXgtd2lkdGg6IDgwcmVtO1xcclxcbiAgbWluLWhlaWdodDogNTAuNHJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxyXFxuICBwYWRkaW5nOiAxLjZyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICZfX3dyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICB9XFxyXFxuICAmX19pbWFnZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XFxyXFxuICAgIG1heC13aWR0aDogMzFyZW07XFxyXFxuXFxyXFxuICAgICZfY29udGFpbmVyIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDM0cmVtO1xcclxcbiAgICAgIGhlaWdodDogMzRyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2luZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2luZm9fY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgfVxcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDIuNHJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG5cXHJcXG4gICAgJl9zaXplLFxcclxcbiAgICAmX2FkZCB7XFxyXFxuICAgICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDQwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogLTEuMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fcHJpY2VfdG90YWwge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDIuNHJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gICAgLy8gbGluZS1oZWlnaHQ6IDIwMCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjhyZW07XFxyXFxuICB9XFxyXFxuICAmX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMS42cmVtLCA0MDAsIDE1MCUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fcHJpY2Uge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWxpZ2h0O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbGVnZW5kIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAwLjhyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IC0wLjhyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19jbG9zZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXRleHQtZGFyaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMS44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fc2l6ZSBpbnB1dCxcXHJcXG4gICZfX2FkZCBpbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19zaXplLFxcclxcbiAgJl9fYWRkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDAuOXJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXHJcXG5cXHJcXG4gICAgJl9vcHRpb24ge1xcclxcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbSAwLjdyZW0gMC43cmVtO1xcclxcbiAgICAgIGdhcDogMC44cmVtO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXItbGlnaHQ7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICAgICYgPiAuaWNvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IDNyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0O1xcclxcbiAgICAgICAgY29sb3I6ICRjb2xvci10ZXh0LWRhcms7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJiA+IC5zaXplX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4uY2hlY2tlZCB7XFxyXFxuICBjb2xvcjogJGNvbG9yLXRleHQtbGlnaHQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXNlY29uZGFyeTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuLmljb24taW5mbyB7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLy4uLy4uL2Fzc2V0cy9pY29ucy9pbmZvLWVtcHR5LnN2ZykgY2VudGVyIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL3Bpbi1hbHQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvcGhvbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvY2xvY2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fKTtcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29sdW1uXFxcIj4gPGgzIGNsYXNzPVxcXCJoZWFkaW5nLWxpZ2h0XFxcIj4gU2lwLCBTYXZvciwgU21pbGUuIDxzcGFuPkl0J3MgY29mZmVlIHRpbWUhPC9zcGFuPiA8L2gzPiA8ZGl2IGNsYXNzPVxcXCJzb2NpYWwtaWNvbnNcXFwiPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwic29jaWFsLWljb25cXFwiPjxzcGFuIGNsYXNzPVxcXCJzb2NpYWwtaWNvbl9fdHdpdHRlclxcXCI+PC9zcGFuPjwvYT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcInNvY2lhbC1pY29uXFxcIj48c3BhbiBjbGFzcz1cXFwic29jaWFsLWljb25fX2luc3RhZ3JhbVxcXCI+PC9zcGFuPjwvYT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcInNvY2lhbC1pY29uXFxcIj48c3BhbiBjbGFzcz1cXFwic29jaWFsLWljb25fX2ZhY2Vib29rXFxcIj48L3NwYW4+PC9hPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29sdW1uXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19jb250YWN0c1xcXCIgaWQ9XFxcImNvbnRhY3RzXFxcIj4gPHAgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNfdGl0bGVcXFwiPkNvbnRhY3QgdXM8L3A+IDxwIGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhY3RzX2FkZHJlc3NcXFwiPiA8YSBocmVmPVxcXCJodHRwczovL21hcHMuYXBwLmdvby5nbC9SSmFwWTJRVjlaMUFaamltOFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwicGluIGljb25cXFwiLz44NTU4IEdyZWVuIFJkLiwgTEE8L2E+IDwvcD4gPHAgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNfcGhvbmVcXFwiPiA8YSBocmVmPVxcXCJ0ZWw6KzEoNjAzKTU1NS0wMTIzXFxcIj48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwicGhvbmUgaWNvblxcXCIvPisxICg2MDMpIDU1NS0wMTIzPC9hPiA8L3A+IDxwIGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhY3RzX3NjaGVkdWxlXFxcIj4gPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcImNsb2NrIGljb25cXFwiLz5Nb24tU2F0OiA5OjAwIEFNIOKAkyAyMzowMCBQTSA8L3A+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9jb2ZmZWUtY3VwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcImxvZ29cXFwiPiA8YSBocmVmPVxcXCIuL2luZGV4Lmh0bWxcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwibG9nb1xcXCIgZHJhZ2dhYmxlPVxcXCJmYWxzZVxcXCIvPiA8aDEgY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+IFJlc291cnNlIC0gdGhlIGJlc3QgY29mZmVlIGhvdXNlIGluIHlvdXIgYXJlYSA8L2gxPjwvYT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm5hdmlnYXRpb25fX3dyYXBwZXJcXFwiPiA8bmF2IGNsYXNzPVxcXCJoZWFkZXJfX25hdmlnYXRpb25cXFwiPiA8dWwgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2xpc3RcXFwiPiA8bGkgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2xpc3RfbGluayBob21lXFxcIj4gPGEgaHJlZj1cXFwiI2Zhdm9yaXRlXFxcIj5GYXZvcml0ZSBjb2ZmZWU8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rIG1lbnVcXFwiPiA8YSBocmVmPVxcXCIuLyNmYXZvcml0ZVxcXCI+RmF2b3JpdGUgY29mZmVlPC9hPiA8L2xpPiA8bGkgY2xhc3M9XFxcIm5hdmlnYXRpb25fX2xpc3RfbGluayBob21lXFxcIj4gPGEgaHJlZj1cXFwiI2Fib3V0XFxcIj5BYm91dDwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmsgbWVudVxcXCI+IDxhIGhyZWY9XFxcIi4vI2Fib3V0XFxcIj5BYm91dDwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmsgaG9tZVxcXCI+IDxhIGhyZWY9XFxcIiNhcHBcXFwiPk1vYmlsZSBhcHA8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rIG1lbnVcXFwiPiA8YSBocmVmPVxcXCIuLyNhcHBcXFwiPk1vYmlsZSBhcHA8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rXFxcIj4gPGEgaHJlZj1cXFwiI2NvbnRhY3RzXFxcIj5Db250YWN0IHVzPC9hPiA8L2xpPiA8L3VsPiA8L25hdj4gPGRpdiBjbGFzcz1cXFwiaGVhZGVyX19tZW51XFxcIj4gPHNwYW4+TWVudSA8aW1nIGNsYXNzPVxcXCJpY29uLWN1cFxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJjb2ZmZWUgY3VwIGljb25cXFwiLz48L3NwYW4+IDxhIGhyZWY9XFxcIi4vbWVudS5odG1sXFxcIj48cD5NZW51PC9wPiA8aW1nIGNsYXNzPVxcXCJpY29uLWN1cFxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJjb2ZmZWUgY3VwIGljb25cXFwiLz4gPC9hPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImJ1cmdlcl9fY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiYnVyZ2VyXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJ1cmdlcl9fbGluZVxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiYnVyZ2VyX19saW5lXFxcIj48L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8c2VjdGlvbiBjbGFzcz1cXFwic2VjdGlvblxcXCI+IDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX21lbnUtY29mZmVlXFxcIj4gPGgzIGNsYXNzPVxcXCJoZWFkaW5nLWRhcmtcXFwiPiBCZWhpbmQgZWFjaCBvZiBvdXIgY3VwcyBoaWRlcyBhbiA8c3Bhbj5hbWF6aW5nIHN1cnByaXNlPC9zcGFuPiA8L2gzPiA8ZGl2IGNsYXNzPVxcXCJ0YWJzX19jb250YWluZXJcXFwiPiA8YnV0dG9uIGNsYXNzPVxcXCJ0YWIgdGFiLS1hY3RpdmVcXFwiPmNvZmZlZTwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJ0YWJcXFwiPnRlYTwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJ0YWJcXFwiPmRlc3NlcnQ8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFydGljbGVzX19jb250YWluZXJcXFwiPjwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyZWZyZXNoLWJ0blxcXCI+IDxzcGFuIGNsYXNzPVxcXCJyZWZyZXNoLWJ0bl9faWNvblxcXCI+PC9zcGFuPiA8L2Rpdj4gPC9kaXY+IDwvc2VjdGlvbj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL21lbnUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vbWVudS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaW1nQ29mZmVlMSBmcm9tIFwiLi9jb2ZmZWUtMS5wbmdcIjtcclxuaW1wb3J0IGltZ0NvZmZlZTIgZnJvbSBcIi4vY29mZmVlLTIucG5nXCI7XHJcbmltcG9ydCBpbWdDb2ZmZWUzIGZyb20gXCIuL2NvZmZlZS0zLnBuZ1wiO1xyXG5pbXBvcnQgaW1nQ29mZmVlNCBmcm9tIFwiLi9jb2ZmZWUtNC5wbmdcIjtcclxuaW1wb3J0IGltZ0NvZmZlZTUgZnJvbSBcIi4vY29mZmVlLTUucG5nXCI7XHJcbmltcG9ydCBpbWdDb2ZmZWU2IGZyb20gXCIuL2NvZmZlZS02LnBuZ1wiO1xyXG5pbXBvcnQgaW1nQ29mZmVlNyBmcm9tIFwiLi9jb2ZmZWUtNy5wbmdcIjtcclxuaW1wb3J0IGltZ0NvZmZlZTggZnJvbSBcIi4vY29mZmVlLTgucG5nXCI7XHJcbmltcG9ydCBpbWdUZWExIGZyb20gXCIuL3RlYS0xLnBuZ1wiO1xyXG5pbXBvcnQgaW1nVGVhMiBmcm9tIFwiLi90ZWEtMi5wbmdcIjtcclxuaW1wb3J0IGltZ1RlYTMgZnJvbSBcIi4vdGVhLTMucG5nXCI7XHJcbmltcG9ydCBpbWdUZWE0IGZyb20gXCIuL3RlYS00LnBuZ1wiO1xyXG5pbXBvcnQgaW1nRGVzc2VydDEgZnJvbSBcIi4vZGVzc2VydC0xLnBuZ1wiO1xyXG5pbXBvcnQgaW1nRGVzc2VydDIgZnJvbSBcIi4vZGVzc2VydC0yLnBuZ1wiO1xyXG5pbXBvcnQgaW1nRGVzc2VydDMgZnJvbSBcIi4vZGVzc2VydC0zLnBuZ1wiO1xyXG5pbXBvcnQgaW1nRGVzc2VydDQgZnJvbSBcIi4vZGVzc2VydC00LnBuZ1wiO1xyXG5pbXBvcnQgaW1nRGVzc2VydDUgZnJvbSBcIi4vZGVzc2VydC01LnBuZ1wiO1xyXG5pbXBvcnQgaW1nRGVzc2VydDYgZnJvbSBcIi4vZGVzc2VydC02LnBuZ1wiO1xyXG5pbXBvcnQgaW1nRGVzc2VydDcgZnJvbSBcIi4vZGVzc2VydC03LnBuZ1wiO1xyXG5pbXBvcnQgaW1nRGVzc2VydDggZnJvbSBcIi4vZGVzc2VydC04LnBuZ1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICBpbWdDb2ZmZWUxLFxyXG4gIGltZ0NvZmZlZTIsXHJcbiAgaW1nQ29mZmVlMyxcclxuICBpbWdDb2ZmZWU0LFxyXG4gIGltZ0NvZmZlZTUsXHJcbiAgaW1nQ29mZmVlNixcclxuICBpbWdDb2ZmZWU3LFxyXG4gIGltZ0NvZmZlZTgsXHJcbiAgaW1nVGVhMSxcclxuICBpbWdUZWEyLFxyXG4gIGltZ1RlYTMsXHJcbiAgaW1nVGVhNCxcclxuICBpbWdEZXNzZXJ0MSxcclxuICBpbWdEZXNzZXJ0MixcclxuICBpbWdEZXNzZXJ0MyxcclxuICBpbWdEZXNzZXJ0NCxcclxuICBpbWdEZXNzZXJ0NSxcclxuICBpbWdEZXNzZXJ0NixcclxuICBpbWdEZXNzZXJ0NyxcclxuICBpbWdEZXNzZXJ0OCxcclxufTtcclxuIiwiaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSBcIi4uLy4uL3V0aWxzL2h0bWxUb0VsZW1lbnRcIjtcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vaW5kZXguaHRtbFwiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5jb25zdCBmb290ZXIgPSBodG1sVG9FbGVtZW50KEZvb3Rlcik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XHJcbiIsImltcG9ydCBodG1sVG9FbGVtZW50IGZyb20gXCIuLi8uLi91dGlscy9odG1sVG9FbGVtZW50XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaW5kZXguaHRtbFwiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBodG1sVG9FbGVtZW50KEhlYWRlcik7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgLy8gQnVyZ2VyXHJcbiAgY29uc3QgYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJfX2NvbnRhaW5lclwiKTtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uX193cmFwcGVyXCIpO1xyXG4gIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZpZ2F0aW9uX19saXN0X2xpbmtcIik7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuICBidXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcblxyXG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibm8tc2Nyb2xsXCIpO1xyXG4gIH0pO1xyXG5cclxuICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGJ1cmdlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuXHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbFwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcclxuIiwiLy8gZXhwb3J0IGNsYXNzIEFydGljbGUge1xyXG4vLyAgIGNvbnN0cnVjdG9yKHsgaWQsIG5hbWUsIHVybFRvSW1hZ2UsIGRlc2NyaXB0aW9uLCBwcmljZSwgY2F0ZWdvcnkgfSkge1xyXG4vLyAgICAgdGhpcy5pZCA9IGlkO1xyXG4vLyAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuLy8gICAgIHRoaXMudXJsVG9JbWFnZSA9IHVybFRvSW1hZ2U7XHJcbi8vICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbi8vICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbi8vICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbi8vICAgfVxyXG5cclxuLy8gICBnZW5lcmF0ZUFydGljbGUoKSB7XHJcbi8vICAgICBsZXQgdGVtcGxhdGUgPSBcIlwiO1xyXG4vLyAgICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcclxuLy8gICAgIGFydGljbGUuY2xhc3NOYW1lID0gXCJhcnRpY2xlXCI7XHJcbi8vICAgICBhcnRpY2xlLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdGhpcy5pZCk7XHJcblxyXG4vLyAgICAgaWYgKHRoaXMudXJsVG9JbWFnZSkge1xyXG4vLyAgICAgICB0ZW1wbGF0ZSArPSBgPGRpdiBjbGFzcz1cImltYWdlX19jb250YWluZXJcIj5gO1xyXG4vLyAgICAgICB0ZW1wbGF0ZSArPSBgPGltZyBzcmM9JHt0aGlzLnVybFRvSW1hZ2V9IGNsYXNzPVwiaW1hZ2VcIiBhbHQ9XCJQaG90byBvZiAke3RoaXMubmFtZX1cIiAvPmA7XHJcbi8vICAgICAgIHRlbXBsYXRlICs9IGA8L2Rpdj5gO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlmICh0aGlzLm5hbWUgfHwgdGhpcy5kZXNjcmlwdGlvbiB8fCB0aGlzLnByaWNlIHx8IHRoaXMuY2F0ZWdvcnkpIHtcclxuLy8gICAgICAgdGVtcGxhdGUgKz0gYDxkaXYgY2xhc3M9XCJpbmZvX19jb250YWluZXJcIj5gO1xyXG4vLyAgICAgICB0aGlzLm5hbWUgJiYgKHRlbXBsYXRlICs9IGA8aDMgY2xhc3M9XCJpbmZvX190aXRsZVwiPiR7dGhpcy5uYW1lfTwvaDM+YCk7XHJcbi8vICAgICAgIHRoaXMuZGVzY3JpcHRpb24gJiZcclxuLy8gICAgICAgICAodGVtcGxhdGUgKz0gYDxwIGNsYXNzPVwiaW5mb19fZGVzY3JpcHRpb25cIj4ke3RoaXMuZGVzY3JpcHRpb259PC9wPmApO1xyXG4vLyAgICAgICB0aGlzLnByaWNlICYmICh0ZW1wbGF0ZSArPSBgPHAgY2xhc3M9XCJpbmZvX19wcmljZVwiPiQke3RoaXMucHJpY2V9PC9wPmApO1xyXG4vLyAgICAgICB0aGlzLmNhdGVnb3J5ICYmICh0ZW1wbGF0ZSArPSBgPHAgY2xhc3M9XCJ0YWJcIj4ke3RoaXMuY2F0ZWdvcnl9PC9wPmApO1xyXG4vLyAgICAgICB0ZW1wbGF0ZSArPSBgPC9kaXY+YDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBhcnRpY2xlLmlubmVySFRNTCA9IHRlbXBsYXRlO1xyXG4vLyAgICAgcmV0dXJuIGFydGljbGU7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBURVNUIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBBcnRpY2xlIHtcclxuICBjb25zdHJ1Y3Rvcih7IGlkLCBuYW1lLCB1cmxUb0ltYWdlLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGNhdGVnb3J5IH0pIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnVybFRvSW1hZ2UgPSB1cmxUb0ltYWdlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gIH1cclxuICAvLyBBcnRpY2xlIGdlbmVyYXRvclxyXG4gIGdlbmVyYXRlQXJ0aWNsZSgpIHtcclxuICAgIGxldCB0ZW1wbGF0ZSA9IFwiXCI7XHJcbiAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xyXG4gICAgYXJ0aWNsZS5jbGFzc05hbWUgPSBcImFydGljbGVcIjtcclxuICAgIGFydGljbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0aGlzLmlkKTtcclxuXHJcbiAgICAvLyBpbWFnZVxyXG4gICAgaWYgKHRoaXMudXJsVG9JbWFnZSkge1xyXG4gICAgICB0ZW1wbGF0ZSArPSBgPGRpdiBjbGFzcz1cImltYWdlX19jb250YWluZXJcIj5gO1xyXG4gICAgICB0ZW1wbGF0ZSArPSBgPGltZyBzcmM9JHt0aGlzLnVybFRvSW1hZ2V9IGNsYXNzPVwiaW1hZ2VcIiBhbHQ9XCJQaG90byBvZiAke3RoaXMubmFtZX1cIiAvPmA7XHJcbiAgICAgIHRlbXBsYXRlICs9IGA8L2Rpdj5gO1xyXG4gICAgfVxyXG4gICAgLy8gY29udGVudFxyXG4gICAgaWYgKHRoaXMubmFtZSB8fCB0aGlzLmRlc2NyaXB0aW9uIHx8IHRoaXMucHJpY2UgfHwgdGhpcy5jYXRlZ29yeSkge1xyXG4gICAgICB0ZW1wbGF0ZSArPSBgPGRpdiBjbGFzcz1cImluZm9fX2NvbnRhaW5lclwiPmA7XHJcbiAgICAgIHRoaXMubmFtZSAmJiAodGVtcGxhdGUgKz0gYDxoMyBjbGFzcz1cImluZm9fX3RpdGxlXCI+JHt0aGlzLm5hbWV9PC9oMz5gKTtcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiAmJlxyXG4gICAgICAgICh0ZW1wbGF0ZSArPSBgPHAgY2xhc3M9XCJpbmZvX19kZXNjcmlwdGlvblwiPiR7dGhpcy5kZXNjcmlwdGlvbn08L3A+YCk7XHJcbiAgICAgIHRoaXMucHJpY2UgJiYgKHRlbXBsYXRlICs9IGA8cCBjbGFzcz1cImluZm9fX3ByaWNlXCI+JCR7dGhpcy5wcmljZX08L3A+YCk7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcnkgJiYgKHRlbXBsYXRlICs9IGA8cCBjbGFzcz1cInRhYlwiPiR7dGhpcy5jYXRlZ29yeX08L3A+YCk7XHJcbiAgICAgIHRlbXBsYXRlICs9IGA8L2Rpdj5gO1xyXG4gICAgfVxyXG5cclxuICAgIGFydGljbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XHJcbiAgICByZXR1cm4gYXJ0aWNsZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIE1vZGFsIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNsYXNzZXMsXHJcbiAgICB7IGlkLCBuYW1lLCB1cmxUb0ltYWdlLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGNhdGVnb3J5LCBzaXplcywgYWRkaXRpdmVzIH1cclxuICApIHtcclxuICAgIHRoaXMuY2xhc3NlcyA9IGNsYXNzZXM7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy51cmxUb0ltYWdlID0gdXJsVG9JbWFnZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcclxuICAgIHRoaXMuYWRkaXRpdmVzID0gYWRkaXRpdmVzO1xyXG4gICAgdGhpcy5vdmVybGF5ID0gXCJcIjtcclxuICAgIHRoaXMubW9kYWwgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgaW5pdChjb250ZW50KSB7XHJcbiAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLmNyZWF0ZURvbU5vZGUodGhpcy5vdmVybGF5LCBcImRpdlwiLCBcIm92ZXJsYXlcIik7XHJcbiAgICB0aGlzLm1vZGFsID0gdGhpcy5jcmVhdGVEb21Ob2RlKHRoaXMubW9kYWwsIFwiZGl2XCIsIFwibW9kYWxcIiwgdGhpcy5jbGFzc2VzKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMub3ZlcmxheSk7XHJcbiAgICB0aGlzLm92ZXJsYXkuYXBwZW5kKHRoaXMubW9kYWwpO1xyXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xyXG4gICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsb3NlTW9kYWwpO1xyXG4gIH1cclxuICBjcmVhdGVEb21Ob2RlKG5vZGUsIGVsZW1lbnQsIC4uLmNsYXNzZXMpIHtcclxuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG4gIHNldENvbnRlbnQoY29udGVudCkge1xyXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgdGhpcy5tb2RhbC5hcHBlbmQoY29udGVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdlbmVyYXRlQ29udGVudCgpIHtcclxuICAgIGxldCB0ZW1wbGF0ZSA9IFwiXCI7XHJcbiAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhcnRpY2xlLmNsYXNzTmFtZSA9IFwibW9kYWxfX3dyYXBwZXJcIjtcclxuXHJcbiAgICB0ZW1wbGF0ZSArPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX2ltYWdlX2NvbnRhaW5lclwiPlxyXG4gICAgPGltZ1xyXG4gICAgICBzcmM9JHt0aGlzLnVybFRvSW1hZ2V9XHJcbiAgICAgIGFsdD1cIlBob3RvIG9mICR7dGhpcy5uYW1lfVwiXHJcbiAgICAgIGNsYXNzPVwibW9kYWxfX2ltYWdlXCJcclxuICAgIC8+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1vZGFsX19pbmZvX2NvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsX19pbmZvXCI+XHJcbiAgICAgIDxoMyBjbGFzcz1cIm1vZGFsX190aXRsZVwiPiR7dGhpcy5uYW1lfTwvaDM+XHJcbiAgICAgIDxwIGNsYXNzPVwibW9kYWxfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICR7dGhpcy5kZXNjcmlwdGlvbn1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHAgY2xhc3M9XCJtb2RhbF9fdGl0bGVfc2l6ZVwiPlNpemU8L3A+XHJcbiAgICA8Zm9ybSBjbGFzcz1cIm1vZGFsX19zaXplXCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2l6ZVwiIHZhbHVlPVwiMC4wMFwiIGlkPVwic2l6ZS1zXCIgY2hlY2tlZCAvPlxyXG4gICAgICA8bGFiZWwgZm9yPVwic2l6ZS1zXCIgY2xhc3M9XCJtb2RhbF9fc2l6ZV9vcHRpb24gY2hlY2tlZFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlM8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXplX3RpdGxlXCI+MjAwIG1sPC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNpemVcIiB2YWx1ZT1cIjAuNTBcIiBpZD1cInNpemUtbVwiIC8+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJzaXplLW1cIiBjbGFzcz1cIm1vZGFsX19zaXplX29wdGlvblwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPk08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXplX3RpdGxlXCI+MzAwIG1sPC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNpemVcIiB2YWx1ZT1cIjEuMDBcIiBpZD1cInNpemUtbFwiIC8+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJzaXplLWxcIiBjbGFzcz1cIm1vZGFsX19zaXplX29wdGlvblwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPkw8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXplX3RpdGxlXCI+NDAwIG1sPC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPHAgY2xhc3M9XCJtb2RhbF9fdGl0bGVfYWRkXCI+QWRkaXRpdmVzPC9wPlxyXG4gICAgPGZvcm0gY2xhc3M9XCJtb2RhbF9fYWRkXCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWRkXCIgdmFsdWU9XCIwLjUwXCIgaWQ9XCJhZGQtMVwiIC8+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJzYWRkLTFcIiBjbGFzcz1cIm1vZGFsX19hZGRfb3B0aW9uXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+MTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInNpemVfdGl0bGVcIj5TdWdhcjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhZGRcIiB2YWx1ZT1cIjAuNTBcIiBpZD1cImFkZC0yXCIgLz5cclxuICAgICAgPGxhYmVsIGZvcj1cImFkZC0yXCIgY2xhc3M9XCJtb2RhbF9fYWRkX29wdGlvblwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPjI8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXplX3RpdGxlXCI+Q2lubmFtb248L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWRkXCIgdmFsdWU9XCIwLjUwXCIgaWQ9XCJhZGQtMlwiIC8+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJhZGQtMlwiIGNsYXNzPVwibW9kYWxfX2FkZF9vcHRpb25cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj4zPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2l6ZV90aXRsZVwiPlN5cnVwPC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsX19wcmljZVwiPlxyXG4gICAgICA8aDMgY2xhc3M9XCJtb2RhbF9fdGl0bGVcIj5Ub3RhbDo8L2gzPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWxfX3ByaWNlX3RvdGFsXCI+JCR7dGhpcy5wcmljZX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsX19sZWdlbmRcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWluZm9cIj48L3NwYW4+XHJcbiAgICAgIDxwIGNsYXNzPVwibW9kYWxfX2xlZ2VuZF90ZXh0XCI+XHJcbiAgICAgICAgVGhlIGNvc3QgaXMgbm90IGZpbmFsLiBEb3dubG9hZCBvdXIgbW9iaWxlIGFwcCB0byBzZWUgdGhlIGZpbmFsXHJcbiAgICAgICAgcHJpY2UgYW5kIHBsYWNlIHlvdXIgPGJyIC8+b3JkZXIuIEVhcm4gbG95YWx0eSBwb2ludHMgYW5kIGVuam95XHJcbiAgICAgICAgeW91ciBmYXZvcml0ZSBjb2ZmZWUgd2l0aCB1cCB0byAyMCUgZGlzY291bnQuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19jbG9zZVwiPkNsb3NlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuICAgIGFydGljbGUuaW5uZXJIVE1MID0gdGVtcGxhdGU7XHJcbiAgICByZXR1cm4gYXJ0aWNsZTtcclxuICB9XHJcbiAgcmVuZGVyTW9kYWwoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IHRoaXMuZ2VuZXJhdGVDb250ZW50KCk7XHJcbiAgICB0aGlzLmluaXQoY29udGVudCk7XHJcbiAgfVxyXG4gIGNsb3NlTW9kYWwoZSkge1xyXG4gICAgbGV0IGNsYXNzZXMgPSBlLnRhcmdldC5jbGFzc0xpc3Q7XHJcbiAgICBpZiAoY2xhc3Nlcy5jb250YWlucyhcIm92ZXJsYXlcIikgfHwgY2xhc3Nlcy5jb250YWlucyhcIm1vZGFsX19jbG9zZVwiKSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIikucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIGltcG9ydCBodG1sVG9FbGVtZW50IGZyb20gXCIuLi8uLi91dGlscy9odG1sVG9FbGVtZW50XCI7XHJcbi8vIGltcG9ydCBNZW51IGZyb20gXCIuL2luZGV4Lmh0bWxcIjtcclxuLy8gaW1wb3J0ICogYXMgaW1hZ2VzIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzLmpzXCI7XHJcbi8vIGltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi9BcnRpY2xlLmpzXCI7XHJcblxyXG4vLyBpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbi8vIGNvbnN0IG1lbnUgPSBodG1sVG9FbGVtZW50KE1lbnUpO1xyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4vLyAgIGNvbnN0IGRhdGEgPSBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICBuYW1lOiBcIklyaXNoIGNvZmZlZVwiLFxyXG4vLyAgICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nQ29mZmVlMSxcclxuLy8gICAgICAgZGVzY3JpcHRpb246XHJcbi8vICAgICAgICAgXCJGcmFncmFudCBibGFjayBjb2ZmZWUgd2l0aCBKYW1lc29uIElyaXNoIHdoaXNrZXkgYW5kIHdoaXBwZWQgbWlsa1wiLFxyXG4vLyAgICAgICBwcmljZTogXCI3LjAwXCIsXHJcbi8vICAgICAgIGNhdGVnb3J5OiBcImNvZmZlZVwiLFxyXG4vLyAgICAgICBzaXplczoge1xyXG4vLyAgICAgICAgIHM6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIG06IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGw6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiNDAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBhZGRpdGl2ZXM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIlN1Z2FyXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiQ2lubmFtb25cIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAge1xyXG4vLyAgICAgICBpZDogMixcclxuLy8gICAgICAgbmFtZTogXCJLYWhsdWEgY29mZmVlXCIsXHJcbi8vICAgICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdDb2ZmZWUyLFxyXG4vLyAgICAgICBkZXNjcmlwdGlvbjpcclxuLy8gICAgICAgICBcIkNsYXNzaWMgY29mZmVlIHdpdGggbWlsayBhbmQgS2FobHVhIGxpcXVldXIgdW5kZXIgYSBjYXAgb2YgZnJvdGhlZCBtaWxrXCIsXHJcbi8vICAgICAgIHByaWNlOiBcIjcuMDBcIixcclxuLy8gICAgICAgY2F0ZWdvcnk6IFwiY29mZmVlXCIsXHJcbi8vICAgICAgIHNpemVzOiB7XHJcbi8vICAgICAgICAgczoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbToge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbDoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIGFkZGl0aXZlczogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJDaW5uYW1vblwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICBdLFxyXG4vLyAgICAgfSxcclxuXHJcbi8vICAgICB7XHJcbi8vICAgICAgIGlkOiAzLFxyXG4vLyAgICAgICBuYW1lOiBcIkhvbmV5IHJhZlwiLFxyXG4vLyAgICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nQ29mZmVlMyxcclxuLy8gICAgICAgZGVzY3JpcHRpb246IFwiRXNwcmVzc28gd2l0aCBmcm90aGVkIG1pbGssIGNyZWFtIGFuZCBhcm9tYXRpYyBob25leVwiLFxyXG4vLyAgICAgICBwcmljZTogXCI1LjUwXCIsXHJcbi8vICAgICAgIGNhdGVnb3J5OiBcImNvZmZlZVwiLFxyXG4vLyAgICAgICBzaXplczoge1xyXG4vLyAgICAgICAgIHM6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIG06IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGw6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiNDAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBhZGRpdGl2ZXM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIlN1Z2FyXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiQ2lubmFtb25cIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAge1xyXG4vLyAgICAgICBpZDogNCxcclxuLy8gICAgICAgbmFtZTogXCJJY2UgY2FwcHVjY2lub1wiLFxyXG4vLyAgICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nQ29mZmVlNCxcclxuLy8gICAgICAgZGVzY3JpcHRpb246IFwiQ2FwcHVjY2lubyB3aXRoIHNvZnQgdGhpY2sgZm9hbSBpbiBzdW1tZXIgdmVyc2lvbiB3aXRoIGljZVwiLFxyXG4vLyAgICAgICBwcmljZTogXCI1LjAwXCIsXHJcbi8vICAgICAgIGNhdGVnb3J5OiBcImNvZmZlZVwiLFxyXG4vLyAgICAgICBzaXplczoge1xyXG4vLyAgICAgICAgIHM6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIG06IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGw6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiNDAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBhZGRpdGl2ZXM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIlN1Z2FyXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiQ2lubmFtb25cIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAge1xyXG4vLyAgICAgICBpZDogNSxcclxuLy8gICAgICAgbmFtZTogXCJFc3ByZXNzb1wiLFxyXG4vLyAgICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nQ29mZmVlNSxcclxuLy8gICAgICAgZGVzY3JpcHRpb246IFwiQ2xhc3NpYyBibGFjayBjb2ZmZWVcIixcclxuLy8gICAgICAgcHJpY2U6IFwiNC41MFwiLFxyXG4vLyAgICAgICBjYXRlZ29yeTogXCJjb2ZmZWVcIixcclxuLy8gICAgICAgc2l6ZXM6IHtcclxuLy8gICAgICAgICBzOiB7XHJcbi8vICAgICAgICAgICBzaXplOiBcIjIwMCBtbFwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBtOiB7XHJcbi8vICAgICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBsOiB7XHJcbi8vICAgICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgYWRkaXRpdmVzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIkNpbm5hbW9uXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIF0sXHJcbi8vICAgICB9LFxyXG5cclxuLy8gICAgIHtcclxuLy8gICAgICAgaWQ6IDYsXHJcbi8vICAgICAgIG5hbWU6IFwiTGF0dGVcIixcclxuLy8gICAgICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0NvZmZlZTYsXHJcbi8vICAgICAgIGRlc2NyaXB0aW9uOlxyXG4vLyAgICAgICAgIFwiRXNwcmVzc28gY29mZmVlIHdpdGggdGhlIGFkZGl0aW9uIG9mIHN0ZWFtZWQgbWlsayBhbmQgZGVuc2UgbWlsayBmb2FtXCIsXHJcbi8vICAgICAgIHByaWNlOiBcIjUuNTBcIixcclxuLy8gICAgICAgY2F0ZWdvcnk6IFwiY29mZmVlXCIsXHJcbi8vICAgICAgIHNpemVzOiB7XHJcbi8vICAgICAgICAgczoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbToge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbDoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIGFkZGl0aXZlczogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJDaW5uYW1vblwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICBdLFxyXG4vLyAgICAgfSxcclxuXHJcbi8vICAgICB7XHJcbi8vICAgICAgIGlkOiA3LFxyXG4vLyAgICAgICBuYW1lOiBcIkxhdHRlIG1hY2NoaWF0b1wiLFxyXG4vLyAgICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nQ29mZmVlNyxcclxuLy8gICAgICAgZGVzY3JpcHRpb246IFwiRXNwcmVzc28gd2l0aCBmcm90aGVkIG1pbGsgYW5kIGNob2NvbGF0ZVwiLFxyXG4vLyAgICAgICBwcmljZTogXCI1LjUwXCIsXHJcbi8vICAgICAgIGNhdGVnb3J5OiBcImNvZmZlZVwiLFxyXG4vLyAgICAgICBzaXplczoge1xyXG4vLyAgICAgICAgIHM6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIG06IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGw6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiNDAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBhZGRpdGl2ZXM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIlN1Z2FyXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiQ2lubmFtb25cIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAge1xyXG4vLyAgICAgICBpZDogOCxcclxuLy8gICAgICAgbmFtZTogXCJDb2ZmZWUgd2l0aCBjb2duYWNcIixcclxuLy8gICAgICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0NvZmZlZTgsXHJcbi8vICAgICAgIGRlc2NyaXB0aW9uOiBcIkZyYWdyYW50IGJsYWNrIGNvZmZlZSB3aXRoIGNvZ25hYyBhbmQgd2hpcHBlZCBjcmVhbVwiLFxyXG4vLyAgICAgICBwcmljZTogXCI2LjUwXCIsXHJcbi8vICAgICAgIGNhdGVnb3J5OiBcImNvZmZlZVwiLFxyXG4vLyAgICAgICBzaXplczoge1xyXG4vLyAgICAgICAgIHM6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIG06IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGw6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiNDAwIG1sXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBhZGRpdGl2ZXM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIlN1Z2FyXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiQ2lubmFtb25cIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAge1xyXG4vLyAgICAgICBpZDogOSxcclxuLy8gICAgICAgbmFtZTogXCJNb3JvY2NhblwiLFxyXG4vLyAgICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nVGVhMSxcclxuLy8gICAgICAgZGVzY3JpcHRpb246XHJcbi8vICAgICAgICAgXCJGcmFncmFudCBibGFjayB0ZWEgd2l0aCB0aGUgYWRkaXRpb24gb2YgdGFuZ2VyaW5lLCBjaW5uYW1vbiwgaG9uZXksIGxlbW9uIGFuZCBtaW50XCIsXHJcbi8vICAgICAgIHByaWNlOiBcIjQuNTBcIixcclxuLy8gICAgICAgY2F0ZWdvcnk6IFwidGVhXCIsXHJcbi8vICAgICAgIHNpemVzOiB7XHJcbi8vICAgICAgICAgczoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbToge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbDoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIGFkZGl0aXZlczogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJMZW1vblwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICBdLFxyXG4vLyAgICAgfSxcclxuXHJcbi8vICAgICB7XHJcbi8vICAgICAgIGlkOiAxMCxcclxuLy8gICAgICAgbmFtZTogXCJHaW5nZXJcIixcclxuLy8gICAgICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ1RlYTIsXHJcbi8vICAgICAgIGRlc2NyaXB0aW9uOiBcIk9yaWdpbmFsIGJsYWNrIHRlYSB3aXRoIGZyZXNoIGdpbmdlciwgbGVtb24gYW5kIGhvbmV5XCIsXHJcbi8vICAgICAgIHByaWNlOiBcIjUuMDBcIixcclxuLy8gICAgICAgY2F0ZWdvcnk6IFwidGVhXCIsXHJcbi8vICAgICAgIHNpemVzOiB7XHJcbi8vICAgICAgICAgczoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbToge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbDoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIGFkZGl0aXZlczogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJMZW1vblwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICBdLFxyXG4vLyAgICAgfSxcclxuXHJcbi8vICAgICB7XHJcbi8vICAgICAgIGlkOiAxMSxcclxuLy8gICAgICAgbmFtZTogXCJDcmFuYmVycnlcIixcclxuLy8gICAgICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ1RlYTMsXHJcbi8vICAgICAgIGRlc2NyaXB0aW9uOiBcIkludmlnb3JhdGluZyBibGFjayB0ZWEgd2l0aCBjcmFuYmVycnkgYW5kIGhvbmV5XCIsXHJcbi8vICAgICAgIHByaWNlOiBcIjUuMDBcIixcclxuLy8gICAgICAgY2F0ZWdvcnk6IFwidGVhXCIsXHJcbi8vICAgICAgIHNpemVzOiB7XHJcbi8vICAgICAgICAgczoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbToge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbDoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIGFkZGl0aXZlczogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJMZW1vblwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICBdLFxyXG4vLyAgICAgfSxcclxuXHJcbi8vICAgICB7XHJcbi8vICAgICAgIGlkOiAxMixcclxuLy8gICAgICAgbmFtZTogXCJTZWEgYnVja3Rob3JuXCIsXHJcbi8vICAgICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdUZWE0LFxyXG4vLyAgICAgICBkZXNjcmlwdGlvbjpcclxuLy8gICAgICAgICBcIlRvbmluZyBzd2VldCBibGFjayB0ZWEgd2l0aCBzZWEgYnVja3Rob3JuLCBmcmVzaCB0aHltZSBhbmQgY2lubmFtb25cIixcclxuLy8gICAgICAgcHJpY2U6IFwiNS41MFwiLFxyXG4vLyAgICAgICBjYXRlZ29yeTogXCJ0ZWFcIixcclxuLy8gICAgICAgc2l6ZXM6IHtcclxuLy8gICAgICAgICBzOiB7XHJcbi8vICAgICAgICAgICBzaXplOiBcIjIwMCBtbFwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBtOiB7XHJcbi8vICAgICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBsOiB7XHJcbi8vICAgICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgYWRkaXRpdmVzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIkxlbW9uXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIF0sXHJcbi8vICAgICB9LFxyXG5cclxuLy8gICAgIHtcclxuLy8gICAgICAgaWQ6IDEzLFxyXG4vLyAgICAgICBuYW1lOiBcIk1hcmJsZSBjaGVlc2VjYWtlXCIsXHJcbi8vICAgICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdEZXNzZXJ0MSxcclxuLy8gICAgICAgZGVzY3JpcHRpb246XHJcbi8vICAgICAgICAgXCJQaGlsYWRlbHBoaWEgY2hlZXNlIHdpdGggbGVtb24gemVzdCBvbiBhIGxpZ2h0IHNwb25nZSBjYWtlIGFuZCByZWQgY3VycmFudCBqYW1cIixcclxuLy8gICAgICAgcHJpY2U6IFwiMy41MFwiLFxyXG4vLyAgICAgICBjYXRlZ29yeTogXCJkZXNzZXJ0XCIsXHJcbi8vICAgICAgIHNpemVzOiB7XHJcbi8vICAgICAgICAgczoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCI1MCBnXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIG06IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbDoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIyMDAgZ1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgYWRkaXRpdmVzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJCZXJyaWVzXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiTnV0c1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAge1xyXG4vLyAgICAgICBpZDogMTQsXHJcbi8vICAgICAgIG5hbWU6IFwiUmVkIHZlbHZldFwiLFxyXG4vLyAgICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nRGVzc2VydDIsXHJcbi8vICAgICAgIGRlc2NyaXB0aW9uOiBcIkxheWVyIGNha2Ugd2l0aCBjcmVhbSBjaGVlc2UgZnJvc3RpbmdcIixcclxuLy8gICAgICAgcHJpY2U6IFwiNC4wMFwiLFxyXG4vLyAgICAgICBjYXRlZ29yeTogXCJkZXNzZXJ0XCIsXHJcbi8vICAgICAgIHNpemVzOiB7XHJcbi8vICAgICAgICAgczoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCI1MCBnXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIG06IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbDoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIyMDAgZ1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgYWRkaXRpdmVzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJCZXJyaWVzXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiTnV0c1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAge1xyXG4vLyAgICAgICBpZDogMTUsXHJcbi8vICAgICAgIG5hbWU6IFwiQ2hlZXNlY2FrZXNcIixcclxuLy8gICAgICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0Rlc3NlcnQzLFxyXG4vLyAgICAgICBkZXNjcmlwdGlvbjpcclxuLy8gICAgICAgICBcIlNvZnQgY290dGFnZSBjaGVlc2UgcGFuY2FrZXMgd2l0aCBzb3VyIGNyZWFtIGFuZCBmcmVzaCBiZXJyaWVzIGFuZCBzcHJpbmtsZWQgd2l0aCBwb3dkZXJlZCBzdWdhclwiLFxyXG4vLyAgICAgICBwcmljZTogXCI0LjUwXCIsXHJcbi8vICAgICAgIGNhdGVnb3J5OiBcImRlc3NlcnRcIixcclxuLy8gICAgICAgc2l6ZXM6IHtcclxuLy8gICAgICAgICBzOiB7XHJcbi8vICAgICAgICAgICBzaXplOiBcIjUwIGdcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbToge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIxMDAgZ1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBsOiB7XHJcbi8vICAgICAgICAgICBzaXplOiBcIjIwMCBnXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBhZGRpdGl2ZXM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIkJlcnJpZXNcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJOdXRzXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiSmFtXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICBdLFxyXG4vLyAgICAgfSxcclxuXHJcbi8vICAgICB7XHJcbi8vICAgICAgIGlkOiAxNixcclxuLy8gICAgICAgbmFtZTogXCJDcmVtZSBicnVsZWVcIixcclxuLy8gICAgICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0Rlc3NlcnQ0LFxyXG4vLyAgICAgICBkZXNjcmlwdGlvbjpcclxuLy8gICAgICAgICBcIkRlbGljYXRlIGNyZWFteSBkZXNzZXJ0IGluIGEgY2FyYW1lbCBiYXNrZXQgd2l0aCB3aWxkIGJlcnJpZXNcIixcclxuLy8gICAgICAgcHJpY2U6IFwiNC4wMFwiLFxyXG4vLyAgICAgICBjYXRlZ29yeTogXCJkZXNzZXJ0XCIsXHJcbi8vICAgICAgIHNpemVzOiB7XHJcbi8vICAgICAgICAgczoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCI1MCBnXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIG06IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbDoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIyMDAgZ1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgYWRkaXRpdmVzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJCZXJyaWVzXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiTnV0c1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAge1xyXG4vLyAgICAgICBpZDogMTcsXHJcbi8vICAgICAgIG5hbWU6IFwiUGFuY2FrZXNcIixcclxuLy8gICAgICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0Rlc3NlcnQ1LFxyXG4vLyAgICAgICBkZXNjcmlwdGlvbjogXCJUZW5kZXIgcGFuY2FrZXMgd2l0aCBzdHJhd2JlcnJ5IGphbSBhbmQgZnJlc2ggc3RyYXdiZXJyaWVzXCIsXHJcbi8vICAgICAgIHByaWNlOiBcIjQuNTBcIixcclxuLy8gICAgICAgY2F0ZWdvcnk6IFwiZGVzc2VydFwiLFxyXG4vLyAgICAgICBzaXplczoge1xyXG4vLyAgICAgICAgIHM6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiNTAgZ1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBtOiB7XHJcbi8vICAgICAgICAgICBzaXplOiBcIjEwMCBnXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGw6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMjAwIGdcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIGFkZGl0aXZlczogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiQmVycmllc1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIk51dHNcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJKYW1cIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIF0sXHJcbi8vICAgICB9LFxyXG5cclxuLy8gICAgIHtcclxuLy8gICAgICAgaWQ6IDE4LFxyXG4vLyAgICAgICBuYW1lOiBcIkhvbmV5IGNha2VcIixcclxuLy8gICAgICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0Rlc3NlcnQ2LFxyXG4vLyAgICAgICBkZXNjcmlwdGlvbjogXCJDbGFzc2ljIGhvbmV5IGNha2Ugd2l0aCBkZWxpY2F0ZSBjdXN0YXJkXCIsXHJcbi8vICAgICAgIHByaWNlOiBcIjQuNTBcIixcclxuLy8gICAgICAgY2F0ZWdvcnk6IFwiZGVzc2VydFwiLFxyXG4vLyAgICAgICBzaXplczoge1xyXG4vLyAgICAgICAgIHM6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiNTAgZ1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBtOiB7XHJcbi8vICAgICAgICAgICBzaXplOiBcIjEwMCBnXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGw6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMjAwIGdcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIGFkZGl0aXZlczogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiQmVycmllc1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIk51dHNcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJKYW1cIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIF0sXHJcbi8vICAgICB9LFxyXG5cclxuLy8gICAgIHtcclxuLy8gICAgICAgaWQ6IDE5LFxyXG4vLyAgICAgICBuYW1lOiBcIkNob2NvbGF0ZSBjYWtlXCIsXHJcbi8vICAgICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdEZXNzZXJ0NyxcclxuLy8gICAgICAgZGVzY3JpcHRpb246XHJcbi8vICAgICAgICAgXCJDYWtlIHdpdGggaG90IGNob2NvbGF0ZSBmaWxsaW5nIGFuZCBudXRzIHdpdGggZHJpZWQgYXByaWNvdHNcIixcclxuLy8gICAgICAgcHJpY2U6IFwiNS41MFwiLFxyXG4vLyAgICAgICBjYXRlZ29yeTogXCJkZXNzZXJ0XCIsXHJcbi8vICAgICAgIHNpemVzOiB7XHJcbi8vICAgICAgICAgczoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCI1MCBnXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIG06IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgbDoge1xyXG4vLyAgICAgICAgICAgc2l6ZTogXCIyMDAgZ1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgYWRkaXRpdmVzOiBbXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJCZXJyaWVzXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiTnV0c1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgIH0sXHJcblxyXG4vLyAgICAge1xyXG4vLyAgICAgICBpZDogMjAsXHJcbi8vICAgICAgIG5hbWU6IFwiQmxhY2sgZm9yZXN0XCIsXHJcbi8vICAgICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdEZXNzZXJ0OCxcclxuLy8gICAgICAgZGVzY3JpcHRpb246XHJcbi8vICAgICAgICAgXCJBIGNvbWJpbmF0aW9uIG9mIHRoaW4gc3BvbmdlIGNha2Ugd2l0aCBjaGVycnkgamFtIGFuZCBsaWdodCBjaG9jb2xhdGUgbW91c3NlXCIsXHJcbi8vICAgICAgIHByaWNlOiBcIjYuNTBcIixcclxuLy8gICAgICAgY2F0ZWdvcnk6IFwiZGVzc2VydFwiLFxyXG4vLyAgICAgICBzaXplczoge1xyXG4vLyAgICAgICAgIHM6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiNTAgZ1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBtOiB7XHJcbi8vICAgICAgICAgICBzaXplOiBcIjEwMCBnXCIsXHJcbi8vICAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGw6IHtcclxuLy8gICAgICAgICAgIHNpemU6IFwiMjAwIGdcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIGFkZGl0aXZlczogW1xyXG4vLyAgICAgICAgIHtcclxuLy8gICAgICAgICAgIG5hbWU6IFwiQmVycmllc1wiLFxyXG4vLyAgICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBuYW1lOiBcIk51dHNcIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgbmFtZTogXCJKYW1cIixcclxuLy8gICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIF0sXHJcbi8vICAgICB9LFxyXG4vLyAgIF07XHJcblxyXG4vLyAgIGNvbnN0IHJlbmRlckFydGljbGVzVG9Eb20gPSAoKSA9PiB7XHJcbi8vICAgICBsZXQgYXJ0aWNsZXNXcmFwcGVyID0gZ2V0QXJ0aWNsZXNXcmFwcGVyKCk7XHJcbi8vICAgICBnZW5lcmF0ZUFydGljbGVzKGRhdGEpLmZvckVhY2goKGFydGljbGUpID0+IHtcclxuLy8gICAgICAgYXJ0aWNsZXNXcmFwcGVyLmFwcGVuZChhcnRpY2xlLmdlbmVyYXRlQXJ0aWNsZSgpKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIGNvbnN0IGdldEFydGljbGVzV3JhcHBlciA9ICgpID0+IHtcclxuLy8gICAgIGNvbnN0IGFydGljbGVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnRpY2xlc19fY29udGFpbmVyXCIpO1xyXG4vLyAgICAgYXJ0aWNsZXNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuLy8gICAgIHJldHVybiBhcnRpY2xlc0NvbnRhaW5lcjtcclxuLy8gICB9O1xyXG4vLyAgIGNvbnN0IGdlbmVyYXRlQXJ0aWNsZXMgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgbGV0IGFydGljbGVzID0gW107XHJcbi8vICAgICBkYXRhLmZvckVhY2goKGFydGljbGUpID0+IHtcclxuLy8gICAgICAgYXJ0aWNsZXMucHVzaChuZXcgQXJ0aWNsZShhcnRpY2xlKSk7XHJcbi8vICAgICB9KTtcclxuLy8gICAgIHJldHVybiBhcnRpY2xlcztcclxuLy8gICB9O1xyXG5cclxuLy8gICBpZiAoZGF0YSkge1xyXG4vLyAgICAgcmVuZGVyQXJ0aWNsZXNUb0RvbSgpO1xyXG4vLyAgIH1cclxuLy8gICAvLyBUQUJTXHJcbi8vICAgLy8gY29uc3QgYWRkVGFic0NsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuLy8gICAvLyAgIGRvY3VtZW50XHJcbi8vICAgLy8gICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX2NvbnRhaW5lclwiKVxyXG4vLyAgIC8vICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbi8vICAgLy8gICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhYlwiKSkge1xyXG4vLyAgIC8vICAgICAgICAgbGV0IGNsaWNrZWRUYWIgPSBlLnRhcmdldDtcclxuLy8gICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrZWRUYWIpO1xyXG5cclxuLy8gICAvLyAgICAgICAgIHJlbW92ZVNlbGVjdGVkVGFicygpO1xyXG4vLyAgIC8vICAgICAgICAgc2VsZWN0Q2xpY2tlZFRhYihjbGlja2VkVGFiKTtcclxuLy8gICAvLyAgICAgICAgIGZpbHRlck1lbnVCeVNlbGVjdGVkVGFiKGNsaWNrZWRUYWIuaW5uZXJUZXh0KTtcclxuLy8gICAvLyAgICAgICB9XHJcbi8vICAgLy8gICAgIH0pO1xyXG4vLyAgIC8vIH07XHJcbi8vICAgY29uc3QgYWRkVGFic0NsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuLy8gICAgIGRvY3VtZW50XHJcbi8vICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX2NvbnRhaW5lclwiKVxyXG4vLyAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFiXCIpKSB7XHJcbi8vICAgICAgICAgICBsZXQgY2xpY2tlZFRhYiA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFiXCIpO1xyXG4vLyAgICAgICAgICAgY29uc29sZS5sb2coY2xpY2tlZFRhYik7XHJcblxyXG4vLyAgICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRUYWJzKCk7XHJcbi8vICAgICAgICAgICBzZWxlY3RDbGlja2VkVGFiKGNsaWNrZWRUYWIpO1xyXG4vLyAgICAgICAgICAgZmlsdGVyTWVudUJ5U2VsZWN0ZWRUYWIoY2xpY2tlZFRhYi5pbm5lckhUTUwpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgYWRkVGFic0NsaWNrSGFuZGxlcigpO1xyXG4vLyAgIGNvbnN0IHJlbW92ZVNlbGVjdGVkVGFicyA9ICgpID0+IHtcclxuLy8gICAgIGxldCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX19jb250YWluZXIgLnRhYlwiKTtcclxuLy8gICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcbi8vICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwidGFiLS1hY3RpdmVcIik7XHJcbi8vICAgICB9KTtcclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBzZWxlY3RDbGlja2VkVGFiID0gKGNsaWNrZWRUYWIpID0+IHtcclxuLy8gICAgIGNsaWNrZWRUYWIuY2xhc3NMaXN0LmFkZChcInRhYi0tYWN0aXZlXCIpO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIGNvbnN0IGZpbHRlck1lbnVCeVNlbGVjdGVkVGFiID0gKGNsaWNrZWRUYWIpID0+IHtcclxuLy8gICAgIGxldCBhcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXJ0aWNsZVwiKTtcclxuLy8gICAgIGFydGljbGVzLmZvckVhY2goKGFydGljbGUpID0+IHtcclxuLy8gICAgICAgYXJ0aWNsZS5jbGFzc0xpc3QuYWRkKFwiYXJ0aWNsZV9oaWRkZW5cIik7XHJcbi8vICAgICAgIGFydGljbGUucXVlcnlTZWxlY3RvckFsbChcIi50YWJcIikuZm9yRWFjaCgodGFiKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKHRhYi5pbm5lckhUTUwgPT09IGNsaWNrZWRUYWIpIHtcclxuLy8gICAgICAgICAgIGFydGljbGUuY2xhc3NMaXN0LnJlbW92ZShcImFydGljbGVfaGlkZGVuXCIpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9KTtcclxuLy8gICB9O1xyXG4vLyB9KTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IG1lbnU7XHJcblxyXG4vLyBURVNUIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCBodG1sVG9FbGVtZW50IGZyb20gXCIuLi8uLi91dGlscy9odG1sVG9FbGVtZW50XCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuL2luZGV4Lmh0bWxcIjtcclxuaW1wb3J0ICogYXMgaW1hZ2VzIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21lbnUtaW1hZ2VzLmpzXCI7XHJcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi9BcnRpY2xlLmpzXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4vTW9kYWwuanNcIjtcclxuXHJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5cclxuY29uc3QgbWVudSA9IGh0bWxUb0VsZW1lbnQoTWVudSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5hbWU6IFwiSXJpc2ggY29mZmVlXCIsXHJcbiAgICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdDb2ZmZWUxLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkZyYWdyYW50IGJsYWNrIGNvZmZlZSB3aXRoIEphbWVzb24gSXJpc2ggd2hpc2tleSBhbmQgd2hpcHBlZCBtaWxrXCIsXHJcbiAgICAgIHByaWNlOiBcIjcuMDBcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiY29mZmVlXCIsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgczoge1xyXG4gICAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbToge1xyXG4gICAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbDoge1xyXG4gICAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aXZlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJDaW5uYW1vblwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiBcIkthaGx1YSBjb2ZmZWVcIixcclxuICAgICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0NvZmZlZTIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiQ2xhc3NpYyBjb2ZmZWUgd2l0aCBtaWxrIGFuZCBLYWhsdWEgbGlxdWV1ciB1bmRlciBhIGNhcCBvZiBmcm90aGVkIG1pbGtcIixcclxuICAgICAgcHJpY2U6IFwiNy4wMFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJjb2ZmZWVcIixcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBzOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjIwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkNpbm5hbW9uXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIG5hbWU6IFwiSG9uZXkgcmFmXCIsXHJcbiAgICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdDb2ZmZWUzLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJFc3ByZXNzbyB3aXRoIGZyb3RoZWQgbWlsaywgY3JlYW0gYW5kIGFyb21hdGljIGhvbmV5XCIsXHJcbiAgICAgIHByaWNlOiBcIjUuNTBcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiY29mZmVlXCIsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgczoge1xyXG4gICAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbToge1xyXG4gICAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbDoge1xyXG4gICAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aXZlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJDaW5uYW1vblwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBuYW1lOiBcIkljZSBjYXBwdWNjaW5vXCIsXHJcbiAgICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdDb2ZmZWU0LFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJDYXBwdWNjaW5vIHdpdGggc29mdCB0aGljayBmb2FtIGluIHN1bW1lciB2ZXJzaW9uIHdpdGggaWNlXCIsXHJcbiAgICAgIHByaWNlOiBcIjUuMDBcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiY29mZmVlXCIsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgczoge1xyXG4gICAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbToge1xyXG4gICAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbDoge1xyXG4gICAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aXZlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJDaW5uYW1vblwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGlkOiA1LFxyXG4gICAgICBuYW1lOiBcIkVzcHJlc3NvXCIsXHJcbiAgICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdDb2ZmZWU1LFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJDbGFzc2ljIGJsYWNrIGNvZmZlZVwiLFxyXG4gICAgICBwcmljZTogXCI0LjUwXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcImNvZmZlZVwiLFxyXG4gICAgICBzaXplczoge1xyXG4gICAgICAgIHM6IHtcclxuICAgICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG06IHtcclxuICAgICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGw6IHtcclxuICAgICAgICAgIHNpemU6IFwiNDAwIG1sXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlN1Z2FyXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQ2lubmFtb25cIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBpZDogNixcclxuICAgICAgbmFtZTogXCJMYXR0ZVwiLFxyXG4gICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nQ29mZmVlNixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJFc3ByZXNzbyBjb2ZmZWUgd2l0aCB0aGUgYWRkaXRpb24gb2Ygc3RlYW1lZCBtaWxrIGFuZCBkZW5zZSBtaWxrIGZvYW1cIixcclxuICAgICAgcHJpY2U6IFwiNS41MFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJjb2ZmZWVcIixcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBzOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjIwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkNpbm5hbW9uXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgaWQ6IDcsXHJcbiAgICAgIG5hbWU6IFwiTGF0dGUgbWFjY2hpYXRvXCIsXHJcbiAgICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdDb2ZmZWU3LFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJFc3ByZXNzbyB3aXRoIGZyb3RoZWQgbWlsayBhbmQgY2hvY29sYXRlXCIsXHJcbiAgICAgIHByaWNlOiBcIjUuNTBcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiY29mZmVlXCIsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgczoge1xyXG4gICAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbToge1xyXG4gICAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbDoge1xyXG4gICAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aXZlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJDaW5uYW1vblwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGlkOiA4LFxyXG4gICAgICBuYW1lOiBcIkNvZmZlZSB3aXRoIGNvZ25hY1wiLFxyXG4gICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nQ29mZmVlOCxcclxuICAgICAgZGVzY3JpcHRpb246IFwiRnJhZ3JhbnQgYmxhY2sgY29mZmVlIHdpdGggY29nbmFjIGFuZCB3aGlwcGVkIGNyZWFtXCIsXHJcbiAgICAgIHByaWNlOiBcIjYuNTBcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiY29mZmVlXCIsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgczoge1xyXG4gICAgICAgICAgc2l6ZTogXCIyMDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbToge1xyXG4gICAgICAgICAgc2l6ZTogXCIzMDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbDoge1xyXG4gICAgICAgICAgc2l6ZTogXCI0MDAgbWxcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aXZlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiU3VnYXJcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJDaW5uYW1vblwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlN5cnVwXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGlkOiA5LFxyXG4gICAgICBuYW1lOiBcIk1vcm9jY2FuXCIsXHJcbiAgICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdUZWExLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkZyYWdyYW50IGJsYWNrIHRlYSB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0YW5nZXJpbmUsIGNpbm5hbW9uLCBob25leSwgbGVtb24gYW5kIG1pbnRcIixcclxuICAgICAgcHJpY2U6IFwiNC41MFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJ0ZWFcIixcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBzOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjIwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkxlbW9uXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgaWQ6IDEwLFxyXG4gICAgICBuYW1lOiBcIkdpbmdlclwiLFxyXG4gICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nVGVhMixcclxuICAgICAgZGVzY3JpcHRpb246IFwiT3JpZ2luYWwgYmxhY2sgdGVhIHdpdGggZnJlc2ggZ2luZ2VyLCBsZW1vbiBhbmQgaG9uZXlcIixcclxuICAgICAgcHJpY2U6IFwiNS4wMFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJ0ZWFcIixcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBzOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjIwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkxlbW9uXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgaWQ6IDExLFxyXG4gICAgICBuYW1lOiBcIkNyYW5iZXJyeVwiLFxyXG4gICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nVGVhMyxcclxuICAgICAgZGVzY3JpcHRpb246IFwiSW52aWdvcmF0aW5nIGJsYWNrIHRlYSB3aXRoIGNyYW5iZXJyeSBhbmQgaG9uZXlcIixcclxuICAgICAgcHJpY2U6IFwiNS4wMFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJ0ZWFcIixcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBzOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjIwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjMwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjQwMCBtbFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJTdWdhclwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkxlbW9uXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiU3lydXBcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgaWQ6IDEyLFxyXG4gICAgICBuYW1lOiBcIlNlYSBidWNrdGhvcm5cIixcclxuICAgICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ1RlYTQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiVG9uaW5nIHN3ZWV0IGJsYWNrIHRlYSB3aXRoIHNlYSBidWNrdGhvcm4sIGZyZXNoIHRoeW1lIGFuZCBjaW5uYW1vblwiLFxyXG4gICAgICBwcmljZTogXCI1LjUwXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcInRlYVwiLFxyXG4gICAgICBzaXplczoge1xyXG4gICAgICAgIHM6IHtcclxuICAgICAgICAgIHNpemU6IFwiMjAwIG1sXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG06IHtcclxuICAgICAgICAgIHNpemU6IFwiMzAwIG1sXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGw6IHtcclxuICAgICAgICAgIHNpemU6IFwiNDAwIG1sXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlN1Z2FyXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTGVtb25cIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJTeXJ1cFwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBpZDogMTMsXHJcbiAgICAgIG5hbWU6IFwiTWFyYmxlIGNoZWVzZWNha2VcIixcclxuICAgICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0Rlc3NlcnQxLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIlBoaWxhZGVscGhpYSBjaGVlc2Ugd2l0aCBsZW1vbiB6ZXN0IG9uIGEgbGlnaHQgc3BvbmdlIGNha2UgYW5kIHJlZCBjdXJyYW50IGphbVwiLFxyXG4gICAgICBwcmljZTogXCIzLjUwXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcImRlc3NlcnRcIixcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBzOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjUwIGdcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbToge1xyXG4gICAgICAgICAgc2l6ZTogXCIxMDAgZ1wiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjIwMCBnXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkJlcnJpZXNcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJOdXRzXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiSmFtXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxNCxcclxuICAgICAgbmFtZTogXCJSZWQgdmVsdmV0XCIsXHJcbiAgICAgIHVybFRvSW1hZ2U6IGltYWdlcy5pbWdEZXNzZXJ0MixcclxuICAgICAgZGVzY3JpcHRpb246IFwiTGF5ZXIgY2FrZSB3aXRoIGNyZWFtIGNoZWVzZSBmcm9zdGluZ1wiLFxyXG4gICAgICBwcmljZTogXCI0LjAwXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcImRlc3NlcnRcIixcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBzOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjUwIGdcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbToge1xyXG4gICAgICAgICAgc2l6ZTogXCIxMDAgZ1wiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjIwMCBnXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkJlcnJpZXNcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJOdXRzXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiSmFtXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxNSxcclxuICAgICAgbmFtZTogXCJDaGVlc2VjYWtlc1wiLFxyXG4gICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nRGVzc2VydDMsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiU29mdCBjb3R0YWdlIGNoZWVzZSBwYW5jYWtlcyB3aXRoIHNvdXIgY3JlYW0gYW5kIGZyZXNoIGJlcnJpZXMgYW5kIHNwcmlua2xlZCB3aXRoIHBvd2RlcmVkIHN1Z2FyXCIsXHJcbiAgICAgIHByaWNlOiBcIjQuNTBcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiZGVzc2VydFwiLFxyXG4gICAgICBzaXplczoge1xyXG4gICAgICAgIHM6IHtcclxuICAgICAgICAgIHNpemU6IFwiNTAgZ1wiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjEwMCBnXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGw6IHtcclxuICAgICAgICAgIHNpemU6IFwiMjAwIGdcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMS4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aXZlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQmVycmllc1wiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIk51dHNcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJKYW1cIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgaWQ6IDE2LFxyXG4gICAgICBuYW1lOiBcIkNyZW1lIGJydWxlZVwiLFxyXG4gICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nRGVzc2VydDQsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiRGVsaWNhdGUgY3JlYW15IGRlc3NlcnQgaW4gYSBjYXJhbWVsIGJhc2tldCB3aXRoIHdpbGQgYmVycmllc1wiLFxyXG4gICAgICBwcmljZTogXCI0LjAwXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcImRlc3NlcnRcIixcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBzOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjUwIGdcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbToge1xyXG4gICAgICAgICAgc2l6ZTogXCIxMDAgZ1wiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjIwMCBnXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkJlcnJpZXNcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJOdXRzXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiSmFtXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxNyxcclxuICAgICAgbmFtZTogXCJQYW5jYWtlc1wiLFxyXG4gICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nRGVzc2VydDUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRlbmRlciBwYW5jYWtlcyB3aXRoIHN0cmF3YmVycnkgamFtIGFuZCBmcmVzaCBzdHJhd2JlcnJpZXNcIixcclxuICAgICAgcHJpY2U6IFwiNC41MFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJkZXNzZXJ0XCIsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgczoge1xyXG4gICAgICAgICAgc2l6ZTogXCI1MCBnXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG06IHtcclxuICAgICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbDoge1xyXG4gICAgICAgICAgc2l6ZTogXCIyMDAgZ1wiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJCZXJyaWVzXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTnV0c1wiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBpZDogMTgsXHJcbiAgICAgIG5hbWU6IFwiSG9uZXkgY2FrZVwiLFxyXG4gICAgICB1cmxUb0ltYWdlOiBpbWFnZXMuaW1nRGVzc2VydDYsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNsYXNzaWMgaG9uZXkgY2FrZSB3aXRoIGRlbGljYXRlIGN1c3RhcmRcIixcclxuICAgICAgcHJpY2U6IFwiNC41MFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJkZXNzZXJ0XCIsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgczoge1xyXG4gICAgICAgICAgc2l6ZTogXCI1MCBnXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG06IHtcclxuICAgICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbDoge1xyXG4gICAgICAgICAgc2l6ZTogXCIyMDAgZ1wiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJCZXJyaWVzXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTnV0c1wiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBpZDogMTksXHJcbiAgICAgIG5hbWU6IFwiQ2hvY29sYXRlIGNha2VcIixcclxuICAgICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0Rlc3NlcnQ3LFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkNha2Ugd2l0aCBob3QgY2hvY29sYXRlIGZpbGxpbmcgYW5kIG51dHMgd2l0aCBkcmllZCBhcHJpY290c1wiLFxyXG4gICAgICBwcmljZTogXCI1LjUwXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcImRlc3NlcnRcIixcclxuICAgICAgc2l6ZXM6IHtcclxuICAgICAgICBzOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjUwIGdcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC4wMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbToge1xyXG4gICAgICAgICAgc2l6ZTogXCIxMDAgZ1wiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsOiB7XHJcbiAgICAgICAgICBzaXplOiBcIjIwMCBnXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjEuMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGl2ZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkJlcnJpZXNcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJOdXRzXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiSmFtXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyMCxcclxuICAgICAgbmFtZTogXCJCbGFjayBmb3Jlc3RcIixcclxuICAgICAgdXJsVG9JbWFnZTogaW1hZ2VzLmltZ0Rlc3NlcnQ4LFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkEgY29tYmluYXRpb24gb2YgdGhpbiBzcG9uZ2UgY2FrZSB3aXRoIGNoZXJyeSBqYW0gYW5kIGxpZ2h0IGNob2NvbGF0ZSBtb3Vzc2VcIixcclxuICAgICAgcHJpY2U6IFwiNi41MFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJkZXNzZXJ0XCIsXHJcbiAgICAgIHNpemVzOiB7XHJcbiAgICAgICAgczoge1xyXG4gICAgICAgICAgc2l6ZTogXCI1MCBnXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuMDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG06IHtcclxuICAgICAgICAgIHNpemU6IFwiMTAwIGdcIixcclxuICAgICAgICAgIFwiYWRkLXByaWNlXCI6IFwiMC41MFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbDoge1xyXG4gICAgICAgICAgc2l6ZTogXCIyMDAgZ1wiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIxLjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpdmVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJCZXJyaWVzXCIsXHJcbiAgICAgICAgICBcImFkZC1wcmljZVwiOiBcIjAuNTBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTnV0c1wiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkphbVwiLFxyXG4gICAgICAgICAgXCJhZGQtcHJpY2VcIjogXCIwLjUwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXTtcclxuICAvLyBSRU5ERVIgQVJUSUNMRVNcclxuICBjb25zdCByZW5kZXJBcnRpY2xlc1RvRG9tID0gKCkgPT4ge1xyXG4gICAgbGV0IGFydGljbGVzV3JhcHBlciA9IGdldEFydGljbGVzV3JhcHBlcigpO1xyXG4gICAgZ2VuZXJhdGVBcnRpY2xlcyhkYXRhKS5mb3JFYWNoKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgIGFydGljbGVzV3JhcHBlci5hcHBlbmQoYXJ0aWNsZS5nZW5lcmF0ZUFydGljbGUoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhZGRBcnRpY2xlQ2xpY2tIYW5kbGVyKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0QXJ0aWNsZXNXcmFwcGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXJ0aWNsZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGVzX19jb250YWluZXJcIik7XHJcbiAgICBhcnRpY2xlc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgcmV0dXJuIGFydGljbGVzQ29udGFpbmVyO1xyXG4gIH07XHJcbiAgY29uc3QgZ2VuZXJhdGVBcnRpY2xlcyA9IChkYXRhKSA9PiB7XHJcbiAgICBsZXQgYXJ0aWNsZXMgPSBbXTtcclxuICAgIGRhdGEuZm9yRWFjaCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICBhcnRpY2xlcy5wdXNoKG5ldyBBcnRpY2xlKGFydGljbGUpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFydGljbGVzO1xyXG4gIH07XHJcblxyXG4gIGlmIChkYXRhKSB7XHJcbiAgICByZW5kZXJBcnRpY2xlc1RvRG9tKCk7XHJcbiAgfVxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIFRBQlNcclxuICBjb25zdCBhZGRUYWJzQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIudGFic19fY29udGFpbmVyXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFiXCIpKSB7XHJcbiAgICAgICAgICBsZXQgY2xpY2tlZFRhYiA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgIHJlbW92ZVNlbGVjdGVkVGFicygpO1xyXG4gICAgICAgICAgc2VsZWN0Q2xpY2tlZFRhYihjbGlja2VkVGFiKTtcclxuICAgICAgICAgIGZpbHRlck1lbnVCeVNlbGVjdGVkVGFiKGNsaWNrZWRUYWIuaW5uZXJUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgYWRkVGFic0NsaWNrSGFuZGxlcigpO1xyXG4gIGNvbnN0IHJlbW92ZVNlbGVjdGVkVGFicyA9ICgpID0+IHtcclxuICAgIGxldCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX19jb250YWluZXIgLnRhYlwiKTtcclxuICAgIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcbiAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwidGFiLS1hY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHNlbGVjdENsaWNrZWRUYWIgPSAoY2xpY2tlZFRhYikgPT4ge1xyXG4gICAgY2xpY2tlZFRhYi5jbGFzc0xpc3QuYWRkKFwidGFiLS1hY3RpdmVcIik7XHJcbiAgfTtcclxuICBjb25zdCBmaWx0ZXJNZW51QnlTZWxlY3RlZFRhYiA9IChjbGlja2VkVGFiKSA9PiB7XHJcbiAgICBsZXQgYXJ0aWNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFydGljbGVcIik7XHJcbiAgICBhcnRpY2xlcy5mb3JFYWNoKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZChcImFydGljbGVfaGlkZGVuXCIpO1xyXG4gICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiXCIpLmZvckVhY2goKHRhYikgPT4ge1xyXG4gICAgICAgIGlmICh0YWIuaW5uZXJIVE1MID09PSBjbGlja2VkVGFiKSB7XHJcbiAgICAgICAgICBhcnRpY2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJhcnRpY2xlX2hpZGRlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vIEdlbmVyYXRlIGJhc2UgbW9kYWwgZnJvbSBNb2RhbCBjbGFzc1xyXG4gIC8vIGNvbnN0IGFkZFRvb2xzQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gIC8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXN0LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIC8vIGdlbmVyYXRlVG9vbHNNb2RhbCgpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfTtcclxuICAvLyBhZGRUb29sc0NsaWNrSGFuZGxlcigpO1xyXG5cclxuICAvLyBjb25zdCBnZW5lcmF0ZVRvb2xzTW9kYWwgPSAoKSA9PiB7XHJcbiAgLy8gICByZW5kZXJNb2RhbFdpbmRvdyhcIlRlc3QgY29udGVudCBmb3IgVG9vbHMgTW9kYWxcIik7XHJcbiAgLy8gfTtcclxuXHJcbiAgLy8gY29uc3QgcmVuZGVyTW9kYWxXaW5kb3cgPSAoY29udGVudCkgPT4ge1xyXG4gIC8vICAgbGV0IG1vZGFsID0gbmV3IE1vZGFsKFwidG9vbHMtbW9kYWxcIik7XHJcbiAgLy8gICBtb2RhbC5idWlsZE1vZGFsKGNvbnRlbnQpO1xyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGFkZEFydGljbGVDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5hcnRpY2xlc19fY29udGFpbmVyXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi5hcnRpY2xlXCIpKSB7XHJcbiAgICAgICAgICBsZXQgY2xpY2tlZEFydGljbGVJZCA9IGUudGFyZ2V0XHJcbiAgICAgICAgICAgIC5jbG9zZXN0KFwiLmFydGljbGVcIilcclxuICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XHJcbiAgICAgICAgICBsZXQgY2xpY2tlZEFydGljbGVEYXRhID0gZ2V0Q2xpY2tlZERhdGEoY2xpY2tlZEFydGljbGVJZCk7XHJcblxyXG4gICAgICAgICAgcmVuZGVyQXJ0aWNsZU1vZGFsV2luZG93KGNsaWNrZWRBcnRpY2xlRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGFkZEFydGljbGVDbGlja0hhbmRsZXIoKTtcclxuXHJcbiAgY29uc3QgZ2V0Q2xpY2tlZERhdGEgPSAoaWQpID0+IHtcclxuICAgIHJldHVybiBkYXRhLmZpbmQoKGFydGljbGUpID0+IGFydGljbGUuaWQgPT0gaWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckFydGljbGVNb2RhbFdpbmRvdyA9IChjb250ZW50KSA9PiB7XHJcbiAgICBsZXQgbW9kYWwgPSBuZXcgTW9kYWwoXCJtb2RhbF9fd3JhcHBlclwiLCBjb250ZW50KTtcclxuICAgIG1vZGFsLnJlbmRlck1vZGFsKCk7XHJcbiAgfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51O1xyXG4iLCJpbXBvcnQgXCIuL21lbnUuc2Nzc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2xheW91dC9IZWFkZXJcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vbGF5b3V0L01lbnVcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9sYXlvdXQvRm9vdGVyXCI7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXJcIik7XHJcblxyXG5oZWFkZXIuYXBwZW5kKEhlYWRlcik7XHJcbm1haW4uYXBwZW5kKE1lbnUpO1xyXG5mb290ZXIuYXBwZW5kKEZvb3Rlcik7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChodG1sU3RyaW5nKSB7XHJcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XHJcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcclxuICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1lbnVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWVudS5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWVudS5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguc2Nzc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==