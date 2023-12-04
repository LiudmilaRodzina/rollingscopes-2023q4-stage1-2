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
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAkEA;;;EAGE,SAAA;EACA,UAAA;EACA,mBAAA;AAhEF;;AAkEA;EACE,gBAAA;EACA,uBAAA;AA/DF;;AAiEA;EACE,gCAAA;EACA,sBAAA;EACA,yBApCc;AA1BhB;;AAiEA;EACE,iBAAA;EACA,yBAAA;EACA,cAAA;EACA,yBA3Cc;AAnBhB;AACE;EAyDF;IAOI,kBAAA;EA7DF;AACF;AAEE;EAmDF;IAWI,sBAAA;EA5DF;AACF;AAGE;EA6CF;IAeI,gBAAA;EA3DF;AACF;;AA8DA;;EAEE,qBAAA;EACA,cAAA;AA3DF;;AA+DA;EACE,YAAA;EACA,eAAA;AA5DF;;AA8DA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,yBA7Ec;EA8Ed,oBAAA;AA3DF;;AA8DA;EA5HE,iBA6Hc;EA5Hd,gBA4HsB;EA3HtB,iBA2H2B;EA1H3B,cA6CgB;AAqBlB","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n@import url(\"https://fonts.cdnfonts.com/css/inter\");\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: inherit;\r\n}\r\nhtml {\r\n  font-size: 62.5%;\r\n  scroll-behavior: smooth;\r\n}\r\nbody {\r\n  font-family: \"Inter\", sans-serif;\r\n  box-sizing: border-box;\r\n  background-color: $color-primary;\r\n}\r\n\r\n.wrapper {\r\n  max-width: 144rem;\r\n  padding: 0 4rem 4rem 4rem;\r\n  margin: 0 auto;\r\n  background-color: $color-primary;\r\n\r\n  @include media-tablet-port {\r\n    max-width: 76.8rem;\r\n  }\r\n\r\n  @include media-mobile-large {\r\n    padding: 0 1.6rem 4rem;\r\n  }\r\n\r\n  @include media-mobile {\r\n    max-width: 38rem;\r\n  }\r\n}\r\n\r\na:link,\r\na:visited {\r\n  text-decoration: none;\r\n  color: inherit;\r\n  // cursor: pointer;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n.button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 0.8rem;\r\n  width: 20rem;\r\n  height: 6.4rem;\r\n  background-color: $color-primary;\r\n  border-radius: 10rem;\r\n}\r\n\r\n.button-text {\r\n  @include text(1.6rem, 600, 150%, $color-text-dark);\r\n}\r\n"],"sourceRoot":""}]);
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

.footer__contacts_address a:after {
  content: "";
  width: 34%;
  height: 2px;
  background-color: #e1d4c9;
  position: absolute;
  left: 0;
  bottom: -2px;
  transform: scale(0);
}
@media (hover: hover) and (pointer: fine) {
  .footer__contacts_address a:hover:after {
    transform: scale(1);
    transition: all 0.5s ease-in-out;
  }
}

.footer__contacts_phone a:after {
  content: "";
  width: 33%;
  height: 2px;
  background-color: #e1d4c9;
  position: absolute;
  left: 0;
  bottom: -2px;
  transform: scale(0);
}
@media (hover: hover) and (pointer: fine) {
  .footer__contacts_phone a:hover:after {
    transform: scale(1);
    transition: all 0.5s ease-in-out;
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
}`, "",{"version":3,"sources":["webpack://./src/layout/Footer/index.scss"],"names":[],"mappings":"AAgEA;EACE,yBApBgB;EAqBhB,aAAA;EACA,8BAAA;EACA,8BAAA;EACA,mBAAA;EACA,cAAA;EACA,mBAAA;EACA,UAAA;AA/DF;AAWE;EA4CF;IAWI,0BAAA;IACA,mBAAA;EA9DF;AACF;AAiBE;EAgCF;IAeI,oBAAA;IACA,SAAA;EA5DF;AACF;AA8DE;EAlFA,eAmFgB;EAlFhB,gBAkFsB;EAjFtB,iBAiF2B;EAhF3B,cA8CiB;AAvBnB;AAKE;EAmDA;IAlFA,iBAsFkB;IArFlB,gBAqF0B;IApF1B,iBAoF+B;IAnF/B,cA8CiB;EAhBjB;AACF;AAGE;EA6CA;IAlFA,kBAyFkB;IAxFlB,gBAwF2B;IAvF3B,iBAuFgC;IAtFhC,cA8CiB;EARjB;AACF;;AAoDE;EACE,kBAAA;EACA,cA9CgB;AAHpB;;AAqDA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AAlDF;AAoDE;EAzGA,iBA0GgB;EAzGhB,gBAyGwB;EAxGxB,iBAwG6B;EAvG7B,cA8CiB;EA0Df,oBAAA;AA/CJ;AAiDE;EA7GA,iBA8GgB;EA7GhB,gBA6GwB;EA5GxB,iBA4G6B;EA3G7B,cA8CiB;EA8Df,kBAAA;EACA,eAAA;AA5CJ;AA8CI;EACE,qBAAA;AA5CN;AA+CE;EAtHA,iBAuHgB;EAtHhB,gBAsHwB;EArHxB,iBAqH6B;EApH7B,cA8CiB;EAuEf,kBAAA;AA1CJ;AA2CI;EACE,qBAAA;AAzCN;AA4CE;EA7HA,iBA8HgB;EA7HhB,gBA6HwB;EA5HxB,iBA4H6B;EA3H7B,cA8CiB;AAsCnB;AAyCI;EACE,qBAAA;AAvCN;;AA6CE;EACE,WAAA;EACA,UAAA;EACA,WAAA;EACA,yBA1Fe;EA2Ff,kBAAA;EACA,OAAA;EACA,YAAA;EACA,mBAAA;AA1CJ;AA4CE;EACE;IACE,mBAAA;IACA,gCAAA;EA1CJ;AACF;;AA8CE;EACE,WAAA;EACA,UAAA;EACA,WAAA;EACA,yBA5Ge;EA6Gf,kBAAA;EACA,OAAA;EACA,YAAA;EACA,mBAAA;AA3CJ;AA6CE;EACE;IACE,mBAAA;IACA,gCAAA;EA3CJ;AACF;;AA+CA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;AA5CF;;AA8CA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBA1IgB;EA2IhB,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,gCAAA;AA3CF;AA6CE;EACE;IACE,yBApJU;EAyGd;AACF;AA8CE;EACE,qBAAA;EACA,WAAA;EACA,YAAA;AA5CJ;AA+CE;EACE,oEAAA;EACA,gCAAA;AA7CJ;AA8CI;EACE;IACE,oEAAA;EA5CN;AACF;AAgDE;EACE,oEAAA;EACA,gCAAA;AA9CJ;AA+CI;EACE;IACE,oEAAA;EA7CN;AACF;AAiDE;EACE,oEAAA;EACA,gCAAA;AA/CJ;AAgDI;EACE;IACE,oEAAA;EA9CN;AACF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n.footer__container {\r\n  background-color: $color-secondary;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10rem;\r\n  border-radius: 4rem;\r\n  gap: 10rem;\r\n\r\n  @include media-tablet-land {\r\n    grid-template-columns: 1fr;\r\n    padding: 10rem 6rem;\r\n  }\r\n  @include media-mobile-large {\r\n    padding: 6rem 1.6rem;\r\n    gap: 4rem;\r\n  }\r\n\r\n  .heading-light {\r\n    @include text(6rem, 600, 125%, $color-text-light);\r\n\r\n    @include media-mobile-large {\r\n      @include text(4.2rem, 600, 125%, $color-text-light);\r\n    }\r\n    @include media-mobile {\r\n      @include text(3.15rem, 600, 125%, $color-text-light);\r\n    }\r\n  }\r\n}\r\n.heading-light {\r\n  span {\r\n    font-style: italic;\r\n    color: $color-text-accent;\r\n  }\r\n}\r\n\r\n.footer__contacts {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.7rem;\r\n\r\n  &_title {\r\n    @include text(2.4rem, 600, 125%, $color-text-light);\r\n    padding-bottom: 2rem;\r\n  }\r\n  &_address {\r\n    @include text(1.6rem, 600, 150%, $color-text-light);\r\n    position: relative;\r\n    display: inline;\r\n\r\n    img {\r\n      padding-right: 0.8rem;\r\n    }\r\n  }\r\n  &_phone {\r\n    @include text(1.6rem, 600, 150%, $color-text-light);\r\n    position: relative;\r\n    img {\r\n      padding-right: 0.8rem;\r\n    }\r\n  }\r\n  &_schedule {\r\n    @include text(1.6rem, 600, 150%, $color-text-light);\r\n\r\n    img {\r\n      padding-right: 0.8rem;\r\n    }\r\n  }\r\n}\r\n\r\n.footer__contacts_address a {\r\n  &:after {\r\n    content: \"\";\r\n    width: 34%;\r\n    height: 2px;\r\n    background-color: $color-text-light;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -2px;\r\n    transform: scale(0);\r\n  }\r\n  @media (hover: hover) and (pointer: fine) {\r\n    &:hover:after {\r\n      transform: scale(1);\r\n      transition: all 0.5s ease-in-out;\r\n    }\r\n  }\r\n}\r\n.footer__contacts_phone a {\r\n  &:after {\r\n    content: \"\";\r\n    width: 33%;\r\n    height: 2px;\r\n    background-color: $color-text-light;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -2px;\r\n    transform: scale(0);\r\n  }\r\n  @media (hover: hover) and (pointer: fine) {\r\n    &:hover:after {\r\n      transform: scale(1);\r\n      transition: all 0.5s ease-in-out;\r\n    }\r\n  }\r\n}\r\n\r\n.social-icons {\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n  gap: 1.2rem;\r\n  padding-top: 4rem;\r\n}\r\n.social-icon {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: $color-secondary;\r\n  border: 1px solid $color-primary;\r\n  width: 6rem;\r\n  height: 6rem;\r\n  border-radius: 50%;\r\n  transition: all 0.5s ease-in-out;\r\n\r\n  @media (hover: hover) and (pointer: fine) {\r\n    &:hover {\r\n      background-color: $color-primary;\r\n    }\r\n  }\r\n\r\n  span {\r\n    display: inline-block;\r\n    width: 6rem;\r\n    height: 6rem;\r\n  }\r\n\r\n  &__twitter {\r\n    background: url(../../assets/icons/twitter.svg) no-repeat center;\r\n    transition: all 0.5s ease-in-out;\r\n    @media (hover: hover) and (pointer: fine) {\r\n      &:hover {\r\n        background: url(../../assets/icons/twitter-hover.svg) no-repeat center;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__instagram {\r\n    background: url(../../assets/icons/instagram.svg) no-repeat center;\r\n    transition: all 0.5s ease-in-out;\r\n    @media (hover: hover) and (pointer: fine) {\r\n      &:hover {\r\n        background: url(../../assets/icons/instagram-hover.svg) no-repeat center;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__facebook {\r\n    background: url(../../assets/icons/facebook.svg) no-repeat center;\r\n    transition: all 0.5s ease-in-out;\r\n    @media (hover: hover) and (pointer: fine) {\r\n      &:hover {\r\n        background: url(../../assets/icons/facebook-hover.svg) no-repeat center;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
@media (max-width: 768px) {
  .navigation__list {
    display: none;
  }
}
.navigation__list_link {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #403f3d;
  list-style: none;
  position: relative;
}
.navigation__list_link:after {
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
  .navigation__list_link:hover:after {
    transform: scale(1);
    transition: all 0.5s ease-in-out;
  }
}

.header__menu {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 150%;
  color: #403f3d;
  position: relative;
}
.header__menu span {
  display: none;
}
.header__menu:after {
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
  .header__menu:hover:after {
    transform: scale(1);
    transition: all 0.5s ease-in-out;
  }
}
@media (max-width: 768px) {
  .header__menu {
    display: none;
  }
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
}
.burger__container .burger__line-top {
  transform: translateY(-0.4rem);
}
.burger__container .burger__line-bottom {
  transform: translateY(0.4rem);
}`, "",{"version":3,"sources":["webpack://./src/layout/Header/index.scss"],"names":[],"mappings":"AAgEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;AA/DF;;AAkEA;EACE,aAAA;EACA,8BAAA;EACA,SAAA;AA/DF;AAcE;EA8CF;IAMI,aAAA;EA9DF;AACF;AAgEE;EAhFA,iBAiFgB;EAhFhB,gBAgFwB;EA/ExB,iBA+E6B;EA9E7B,cA6CgB;EAkCd,gBAAA;EACA,kBAAA;AA3DJ;AA6DI;EACE,WAAA;EACA,WAAA;EACA,WAAA;EACA,yBAzCY;EA0CZ,kBAAA;EACA,OAAA;EACA,YAAA;EACA,mBAAA;AA3DN;AA6DI;EACE;IACE,mBAAA;IACA,gCAAA;EA3DN;AACF;;AAgEA;EAxGE,iBAyGc;EAxGd,gBAwGsB;EAvGtB,iBAuG2B;EAtG3B,cA6CgB;EA0DhB,kBAAA;AA1DF;AA2DE;EACE,aAAA;AAzDJ;AA4DE;EACE,WAAA;EACA,WAAA;EACA,WAAA;EACA,yBAnEc;EAoEd,kBAAA;EACA,OAAA;EACA,YAAA;EACA,mBAAA;AA1DJ;AA4DE;EACE;IACE,mBAAA;IACA,gCAAA;EA1DJ;AACF;AA1CE;EA+EF;IAyBI,aAAA;EA1DF;AACF;;AA6DA;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AA1DF;;AA6DA;EACE,aAAA;AA1DF;;AA6DA;EACE,aAAA;AA1DF;AApEE;EA6HF;IAGI,cAAA;IACA,cAAA;EAxDF;AACF;AAyDE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;AAvDJ;AAyDI;EACE,cAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;EACA,qBAAA;EACA,yBA5HY;AAqElB;AAyDM;EACE,8BAAA;AAvDR;AAyDM;EACE,6BAAA;AAvDR","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n.header__container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 10rem;\r\n  padding: 2rem 0;\r\n}\r\n\r\n.navigation__list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 4rem;\r\n\r\n  @include media-tablet-port {\r\n    display: none;\r\n  }\r\n\r\n  &_link {\r\n    @include text(1.6rem, 600, 150%, $color-text-dark);\r\n    list-style: none;\r\n    position: relative;\r\n\r\n    &:after {\r\n      content: \"\";\r\n      width: 100%;\r\n      height: 2px;\r\n      background-color: $color-text-dark;\r\n      position: absolute;\r\n      left: 0;\r\n      bottom: -2px;\r\n      transform: scale(0);\r\n    }\r\n    @media (hover: hover) and (pointer: fine) {\r\n      &:hover:after {\r\n        transform: scale(1);\r\n        transition: all 0.5s ease-in-out;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.header__menu {\r\n  @include text(1.6rem, 600, 150%, $color-text-dark);\r\n  position: relative;\r\n  span {\r\n    display: none;\r\n  }\r\n\r\n  &:after {\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 2px;\r\n    background-color: $color-text-dark;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -2px;\r\n    transform: scale(0);\r\n  }\r\n  @media (hover: hover) and (pointer: fine) {\r\n    &:hover:after {\r\n      transform: scale(1);\r\n      transition: all 0.5s ease-in-out;\r\n    }\r\n  }\r\n\r\n  @include media-tablet-port {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.visually-hidden {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n  border: 0;\r\n  padding: 0;\r\n  white-space: nowrap;\r\n  clip-path: inset(100%);\r\n  clip: rect(0 0 0 0);\r\n  overflow: hidden;\r\n}\r\n\r\n.navigation__list_link.menu {\r\n  display: none;\r\n}\r\n\r\n.burger__container {\r\n  display: none;\r\n  @include media-tablet-port {\r\n    display: block;\r\n    height: 4.6rem;\r\n  }\r\n  .burger {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    width: 4.4rem;\r\n    height: 4.4rem;\r\n    border: 1px solid $color-border-dark;\r\n    border-radius: 50%;\r\n\r\n    &__line {\r\n      display: block;\r\n      position: absolute;\r\n      width: 1.6rem;\r\n      height: 1px;\r\n      border-radius: 0.2rem;\r\n      background-color: $color-text-dark;\r\n\r\n      &-top {\r\n        transform: translateY(-0.4rem);\r\n      }\r\n      &-bottom {\r\n        transform: translateY(0.4rem);\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
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
  display: flex;
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
}

.tab--active .tab_icon {
  background-color: #e3d5c9;
}

.tab--active .tab_text {
  color: #e3d5c9;
}

@media (hover: hover) and (pointer: fine) {
  .tab:hover {
    cursor: pointer;
    background-color: #665f55;
  }
  .tab:hover .tab_icon {
    background-color: #e3d5c9;
  }
  .tab:hover .tab_text {
    color: #e3d5c9;
  }
}
.tab:disabled,
.tab button[disabled] {
  cursor: default;
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
    padding-bottom: 10rem;
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
  transition: all 0.5s ease-in-out;
}
@media (max-width: 1220px) {
  .article:nth-child(n+7):nth-child(-n+8) {
    display: none;
  }
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
  }
  .refresh-btn span {
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
  }
  .refresh-btn__icon {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  }
}`, "",{"version":3,"sources":["webpack://./src/layout/Menu/index.scss"],"names":[],"mappings":"AAgEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AA/DF;;AAmEE;EACE,cAAA;AAhEJ;AAkEE;EACE,aAAA;EACA,eAAA;AAhEJ;AAkEE;EACE,mBAAA;AAhEJ;;AAoEA;EACE,cAAA;AAjEF;;AAmEA;EACE,aAAA;AAhEF;;AAmEA;EA1FE,eA2Fc;EA1Fd,gBA0FoB;EAzFpB,iBAyFyB;EAxFzB,cA6CgB;EA4ChB,kBAAA;EACA,gBAAA;AA7DF;AADE;EA2DF;IA1FE,eAgGgB;IA/FhB,gBA+FsB;IA9FtB,iBA8F2B;IA7F3B,cA6CgB;EAThB;AACF;AAHE;EAqDF;IA1FE,iBAmGgB;IAlGhB,gBAkGwB;IAjGxB,iBAiG6B;IAhG7B,cA6CgB;EADhB;AACF;AAXE;EAqDF;IA1FE,iBAsGgB;IArGhB,gBAqGwB;IApGxB,iBAoG6B;IAnG7B,cA6CgB;EAOhB;AACF;AAiDE;EACE,kBAAA;EACA,cAzDgB;AAUpB;;AAkDA;EACE,aAAA;EACA,uBAAA;EACA,WAAA;AA/CF;AA7BE;EAyEF;IAMI,WAAA;EA9CF;AACF;;AAiDA;EAxHE,iBAyHc;EAxHd,gBAwHsB;EAvHtB,iBAuH2B;EAtH3B,cA6CgB;EA0EhB,aAAA;EACA,WAAA;EACA,YAAA;EACA,yBAlFc;EAmFd,yBAAA;EACA,oBAAA;EACA,WAAA;EACA,oCAAA;EACA,gCAAA;AA3CF;;AA6CA;EACE,cAAA;EACA,yBAjFmB;EAkFnB,WAAA;EACA,YAAA;EACA,oBAAA;EACA,iBAAA;EACA,gCAAA;AA1CF;;AA4CA;EACE,mDAAA;AAzCF;;AA2CA;EACE,mDAAA;AAxCF;;AA0CA;EACE,mDAAA;AAvCF;;AAyCA;EACE,cAAA;EACA,mBAAA;EACA,gCAAA;AAtCF;;AAwCA;EACE,yBAhHgB;AA2ElB;;AAuCA;EACE,yBApHc;AAgFhB;;AAsCA;EACE,cAvHc;AAoFhB;;AAqCA;EACE;IACE,eAAA;IACA,yBA3Hc;EAyFhB;EAoCA;IACE,yBA/HY;EA6Fd;EAoCA;IACE,cAlIY;EAgGd;AACF;AAqCA;;EAEE,eAAA;AAnCF;;AAuCA;EACE,aAAA;EACA,qCAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,oBAAA;AApCF;AA5IE;EA0KF;IASI,qCAAA;IACA,qBAAA;EAnCF;AACF;AAhIE;EAwJF;IAaI,0BAAA;EAjCF;AACF;AA/HE;EAkJF;IAgBI,eAAA;EA/BF;AACF;;AAkCA;EACE,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gCAAA;AA/BF;AArKE;EAuME;IACE,aAAA;EA/BJ;AACF;AApKE;EAsME;IACE,aAAA;EA/BJ;AACF;;AAkCA;EACE;IACE,eAAA;EA/BF;EAiCA;IACE,qBAAA;EA/BF;AACF;AAkCA;EACE,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;AAhCF;;AAkCA;EACE,kBAAA;EACA,YAAA;EACA,cAAA;EACA,gCAAA;AA/BF;;AAkCA;EApPE,iBAqPc;EApPd,gBAoPsB;EAnPtB,iBAmP2B;EAlP3B,cA6CgB;EAsMhB,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;AA5BF;;AA8BA;EACE,iBAAA;AA3BF;;AA6BA;EAhQE,iBAiQc;EAhQd,gBAgQsB;EA/PtB,iBA+P2B;EA9P3B,cA6CgB;AA0LlB;;AAyBA;EACE,kBAAA;AAtBF;;AAjOE;EA2PA;IACE,aAAA;IACA,6BAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;IACA,yBAAA;IACA,kBAAA;IACA,iBAAA;IACA,oBAAA;EAtBF;EAwBE;IACE,qBAAA;IACA,aAAA;IACA,cAAA;EAtBJ;EAwBE;IACE,mDAAA;EAtBJ;AACF","sourcesContent":["@mixin text($size, $weight, $height, $color) {\r\n  font-size: $size;\r\n  font-weight: $weight;\r\n  line-height: $height;\r\n  color: $color;\r\n}\r\n\r\n%transition {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n// Media\r\n@mixin media-desktop {\r\n  // 1220px\r\n  @media (max-width: $desktop-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-land {\r\n  // 1024px\r\n  @media (max-width: $tablet-land-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-tablet-port {\r\n  // 768px\r\n  @media (max-width: $tablet-port-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile-large {\r\n  // 720px\r\n  @media (max-width: $mobile-large-width) {\r\n    @content;\r\n  }\r\n}\r\n@mixin media-mobile {\r\n  // 420px\r\n  @media (max-width: $mobile-width) {\r\n    @content;\r\n  }\r\n}\r\n\n// Background Color\r\n$color-primary: #e3d5c9;\r\n$color-secondary: #665f55;\r\n$color-backdrop: #403f3dcc;\r\n\r\n// Text Color\r\n$color-text-dark: #403f3d;\r\n$color-text-light: #e1d4c9;\r\n$color-text-accent: #b0907a;\r\n\r\n// Border Color:\r\n$color-border-light: #c1b6ad;\r\n$color-border-dark: #665f55;\r\n\r\n// Media\r\n$desktop-width: 1220px;\r\n$tablet-land-width: 1024px;\r\n$tablet-port-width: 768px;\r\n$mobile-large-width: 720px;\r\n$mobile-width: 420px;\r\n\n.section__menu-coffee {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 4rem;\r\n}\r\n\r\n.header__menu {\r\n  span {\r\n    display: block;\r\n  }\r\n  a {\r\n    display: none;\r\n    cursor: default;\r\n  }\r\n  &:after {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.navigation__list_link.menu {\r\n  display: block;\r\n}\r\n.navigation__list_link.home {\r\n  display: none;\r\n}\r\n\r\n.heading-dark {\r\n  @include text(6rem, 600, 125%, $color-text-dark);\r\n  text-align: center;\r\n  max-width: 80rem;\r\n\r\n  @include media-mobile-large {\r\n    @include text(5rem, 600, 115%, $color-text-dark);\r\n  }\r\n  @include media-mobile {\r\n    @include text(4.2rem, 600, 115%, $color-text-dark);\r\n  }\r\n  @include media-mobile {\r\n    @include text(3.2rem, 600, 125%, $color-text-dark);\r\n  }\r\n\r\n  span {\r\n    font-style: italic;\r\n    color: $color-text-accent;\r\n  }\r\n}\r\n.tabs__container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1.7rem;\r\n\r\n  @include media-mobile {\r\n    gap: 0.8rem;\r\n  }\r\n}\r\n\r\n.tab {\r\n  @include text(1.6rem, 600, 150%, $color-text-dark);\r\n  display: flex;\r\n  width: auto;\r\n  height: auto;\r\n  background-color: $color-primary;\r\n  border: 1px solid $color-border-light;\r\n  border-radius: 10rem;\r\n  gap: 0.8rem;\r\n  padding: 0.8rem 1.6rem 0.8rem 0.8rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.tab_icon {\r\n  display: block;\r\n  background-color: $color-border-light;\r\n  width: 3rem;\r\n  height: 3rem;\r\n  border-radius: 10rem;\r\n  padding: 0 0.7rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.coffee-icon {\r\n  background: url(./../../assets/icons/icon-coffee.svg);\r\n}\r\n.tea-icon {\r\n  background: url(./../../assets/icons/icon-tea.svg);\r\n}\r\n.dessert-icon {\r\n  background: url(./../../assets/icons/icon-desserts.svg);\r\n}\r\n.tab_text {\r\n  display: block;\r\n  padding-top: 0.2rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.tab--active {\r\n  background-color: $color-secondary;\r\n}\r\n.tab--active .tab_icon {\r\n  background-color: $color-primary;\r\n}\r\n.tab--active .tab_text {\r\n  color: $color-primary;\r\n}\r\n@media (hover: hover) and (pointer: fine) {\r\n  .tab:hover {\r\n    cursor: pointer;\r\n    background-color: $color-secondary;\r\n  }\r\n  .tab:hover .tab_icon {\r\n    background-color: $color-primary;\r\n  }\r\n  .tab:hover .tab_text {\r\n    color: $color-primary;\r\n  }\r\n}\r\n\r\n.tab:disabled,\r\n.tab button[disabled] {\r\n  cursor: default;\r\n}\r\n\r\n// Articles\r\n.articles__container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  row-gap: 3.9rem;\r\n  column-gap: 4rem;\r\n  margin-top: -2px;\r\n  padding-bottom: 6rem;\r\n\r\n  @include media-desktop {\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding-bottom: 10rem;\r\n  }\r\n  @include media-mobile-large {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  @include media-mobile {\r\n    row-gap: 3.8rem;\r\n  }\r\n}\r\n\r\n.article {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid $color-border-light;\r\n  border-radius: 4rem;\r\n  max-width: 31rem;\r\n  transition: all 0.5s ease-in-out;\r\n\r\n  @include media-desktop {\r\n    &:nth-child(n + 7):nth-child(-n + 8) {\r\n      display: none;\r\n    }\r\n  }\r\n  @include media-tablet-land {\r\n    &:nth-child(n + 5):nth-child(-n + 8) {\r\n      display: none;\r\n    }\r\n  }\r\n}\r\n@media (hover: hover) and (pointer: fine) {\r\n  .article:hover {\r\n    cursor: pointer;\r\n  }\r\n  .article:hover .image {\r\n    transform: scale(0.9);\r\n  }\r\n}\r\n\r\n.image__container {\r\n  position: relative;\r\n  overflow: hidden;\r\n  height: 31rem;\r\n  border-radius: 4rem;\r\n}\r\n.image {\r\n  position: absolute;\r\n  top: -1.5rem;\r\n  right: -1.6rem;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.info__container {\r\n  @include text(2.4rem, 600, 125%, $color-text-dark);\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  gap: 1.2rem;\r\n  padding: 1.9rem;\r\n  min-height: 19.6rem;\r\n}\r\n.info__title {\r\n  font-size: 2.4rem;\r\n}\r\n.info__description {\r\n  @include text(1.6rem, 400, 150%, $color-text-dark);\r\n}\r\n.info__price {\r\n  margin: auto 0 0 0;\r\n}\r\n\r\n@include media-desktop {\r\n  .refresh-btn {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    width: 6rem;\r\n    height: 6rem;\r\n    border: 1px solid $color-border-dark;\r\n    border-radius: 50%;\r\n    grid-column: 1/-1;\r\n    justify-self: center;\r\n\r\n    span {\r\n      display: inline-block;\r\n      width: 2.4rem;\r\n      height: 2.4rem;\r\n    }\r\n    &__icon {\r\n      background: url(./../../assets/icons/refresh.svg);\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
var code = "<div class=\"header__container\"> <div class=\"logo\"> <a href=\"./index.html\"> <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\" draggable=\"false\"/> <h1 class=\"visually-hidden\"> Resourse - the best coffee house in your area </h1></a> </div> <nav class=\"header__navigation\"> <ul class=\"navigation__list\"> <li class=\"navigation__list_link home\"> <a href=\"#favorite\">Favorite coffee</a> </li> <li class=\"navigation__list_link menu\"> <a href=\"./#favorite\">Favorite coffee</a> </li> <li class=\"navigation__list_link home\"><a href=\"#about\">About</a></li> <li class=\"navigation__list_link menu\"><a href=\"./#about\">About</a></li> <li class=\"navigation__list_link home\"><a href=\"#app\">Mobile app</a></li> <li class=\"navigation__list_link menu\"> <a href=\"./#app\">Mobile app</a> </li> <li class=\"navigation__list_link\"><a href=\"#contacts\">Contact us</a></li> </ul> </nav> <div class=\"header__menu\"> <span>Menu <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"coffee cup icon\"/></span> <a href=\"./menu.html\">Menu <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"coffee cup icon\"/> </a> </div> <div class=\"burger__container\"> <div class=\"burger\"> <span class=\"burger__line burger__line-top\"></span> <span class=\"burger__line burger__line-bottom\"></span> </div> </div> </div> ";
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

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/images/coffee-1.png */ "./src/assets/images/coffee-1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/images/coffee-2.png */ "./src/assets/images/coffee-2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/images/coffee-3.png */ "./src/assets/images/coffee-3.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/images/coffee-4.png */ "./src/assets/images/coffee-4.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/images/coffee-5.png */ "./src/assets/images/coffee-5.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/images/coffee-6.png */ "./src/assets/images/coffee-6.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/images/coffee-7.png */ "./src/assets/images/coffee-7.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/images/coffee-8.png */ "./src/assets/images/coffee-8.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var code = "<section class=\"section\"> <div class=\"section__menu-coffee\"> <h3 class=\"heading-dark\"> Behind each of our cups hides an <span>amazing surprise</span> </h3> <div class=\"tabs__container\"> <button class=\"tab tab--active\" disabled=\"disabled\"> <span class=\"tab_icon coffee-icon\"></span><span class=\"tab_text\">Coffee</span> </button> <button class=\"tab\"> <span class=\"tab_icon tea-icon\"></span><span class=\"tab_text\">Tea</span> </button> <button class=\"tab\"> <span class=\"tab_icon dessert-icon\"></span><span class=\"tab_text\">Dessert</span> </button> </div> <div class=\"articles__container\"> <article class=\"article\"> <div class=\"image__container\"> <img class=\"image\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Irish coffee photo\"/> </div> <div class=\"info__container\"> <h3 class=\"info__title\">Irish coffee</h3> <p class=\"info__description\"> Fragrant black coffee with Jameson Irish whiskey and whipped milk </p> <p class=\"info__price\">$7.00</p> </div> </article> <article class=\"article\"> <div class=\"image__container\"> <img class=\"image\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Kahlua coffee photo\"/> </div> <div class=\"info__container\"> <h3 class=\"info__title\">Kahlua coffee</h3> <p class=\"info__description\"> Classic coffee with milk and Kahlua liqueur under a cap of frothed milk </p> <p class=\"info__price\">$7.00</p> </div> </article> <article class=\"article\"> <div class=\"image__container\"> <img class=\"image\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Honey raf photo\"/> </div> <div class=\"info__container\"> <h3 class=\"info__title\">Honey raf</h3> <p class=\"info__description\"> Espresso with frothed milk, cream and aromatic honey </p> <p class=\"info__price\">$5.50</p> </div> </article> <article class=\"article\"> <div class=\"image__container\"> <img class=\"image\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Ice cappuccino photo\"/> </div> <div class=\"info__container\"> <h3 class=\"info__title\">Ice cappuccino</h3> <p class=\"info__description\"> Cappuccino with soft thick foam in summer version with ice </p> <p class=\"info__price\">$5.00</p> </div> </article> <article class=\"article\"> <div class=\"image__container\"> <img class=\"image\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Espresso photo\"/> </div> <div class=\"info__container\"> <h3 class=\"info__title\">Espresso</h3> <p class=\"info__description\">Classic black coffee</p> <p class=\"info__price\">$4.50</p> </div> </article> <article class=\"article\"> <div class=\"image__container\"> <img class=\"image\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Latte photo\"/> </div> <div class=\"info__container\"> <h3 class=\"info__title\">Latte</h3> <p class=\"info__description\"> Espresso coffee with the addition of steamed milk and dense milk foam </p> <p class=\"info__price\">$5.50</p> </div> </article> <article class=\"article\"> <div class=\"image__container\"> <img class=\"image\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Latte macchiato photo\"/> </div> <div class=\"info__container\"> <h3 class=\"info__title\">Latte macchiato</h3> <p class=\"info__description\"> Espresso with frothed milk and chocolate </p> <p class=\"info__price\">$5.50</p> </div> </article> <article class=\"article\"> <div class=\"image__container\"> <img class=\"image\" src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Coffee with cognac photo\"/> </div> <div class=\"info__container\"> <h3 class=\"info__title\">Coffee with cognac</h3> <p class=\"info__description\"> Fragrant black coffee with cognac and whipped cream </p> <p class=\"info__price\">$6.50</p> </div> </article> <div class=\"refresh-btn\"> <span class=\"refresh-btn__icon\"></span> </div> </div> </div> </section> ";
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
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/layout/Menu/index.scss");





const menu = (0,_utils_htmlToElement__WEBPACK_IMPORTED_MODULE_0__["default"])(_index_html__WEBPACK_IMPORTED_MODULE_1__["default"]);

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



// import hero from "./layout/Content/01_hero";
// import favorite from "./layout/Content/02_favorite";
// import about from "./layout/Content/03_about";
// import app from "./layout/Content/04_app";


const header = document.querySelector(".header");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

header.append(_layout_Header__WEBPACK_IMPORTED_MODULE_1__["default"]);
main.append(_layout_Menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
// main.append(hero);
// main.append(favorite);
// main.append(about);
// main.append(app);
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

module.exports = __webpack_require__.p + "f9f186894caa8e5929e8.svg";

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

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38aa319db1d0695ead58.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNyQkE7Ozs7O0FFQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9Gb290ZXIvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvTWVudS9pbmRleC5zY3NzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9tZW51LnNjc3MiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9IZWFkZXIvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L01lbnUvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvaW5kZXguc2Nzcz85NTczIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4LnNjc3M/YmE3YiIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5zY3NzPzI5ZjYiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL2xheW91dC9NZW51L2luZGV4LnNjc3M/MmI0MiIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbWVudS5zY3NzPzYwYmYiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2UvLi9zcmMvbGF5b3V0L01lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlLy4vc3JjL3V0aWxzL2h0bWxUb0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29mZmVlLWhvdXNlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2ZmZWUtaG91c2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvZmZlZS1ob3VzZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL2ludGVyKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG59XG5cbi53cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxNDRyZW07XG4gIHBhZGRpbmc6IDAgNHJlbSA0cmVtIDRyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDc2LjhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAud3JhcHBlciB7XG4gICAgcGFkZGluZzogMCAxLjZyZW0gNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDM4cmVtO1xuICB9XG59XG5cbmE6bGluayxcbmE6dmlzaXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ2FwOiAwLjhyZW07XG4gIHdpZHRoOiAyMHJlbTtcbiAgaGVpZ2h0OiA2LjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Q1Yzk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xufVxuXG4uYnV0dG9uLXRleHQge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa0VBOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBaEVGOztBQWtFQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUEvREY7O0FBaUVBO0VBQ0UsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQXBDYztBQTFCaEI7O0FBaUVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkEzQ2M7QUFuQmhCO0FBQ0U7RUF5REY7SUFPSSxrQkFBQTtFQTdERjtBQUNGO0FBRUU7RUFtREY7SUFXSSxzQkFBQTtFQTVERjtBQUNGO0FBR0U7RUE2Q0Y7SUFlSSxnQkFBQTtFQTNERjtBQUNGOztBQThEQTs7RUFFRSxxQkFBQTtFQUNBLGNBQUE7QUEzREY7O0FBK0RBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUE1REY7O0FBOERBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQTdFYztFQThFZCxvQkFBQTtBQTNERjs7QUE4REE7RUE1SEUsaUJBNkhjO0VBNUhkLGdCQTRIc0I7RUEzSHRCLGlCQTJIMkI7RUExSDNCLGNBNkNnQjtBQXFCbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG5AbWl4aW4gbWVkaWEtZGVza3RvcCB7XFxyXFxuICAvLyAxMjIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gIC8vIDEwMjRweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtbGFuZC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gIC8vIDc2OHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1wb3J0LXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gIC8vIDcyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1sYXJnZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAvLyA0MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UzZDVjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2MxYjZhZDtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG4kZGVza3RvcC13aWR0aDogMTIyMHB4O1xcclxcbiR0YWJsZXQtbGFuZC13aWR0aDogMTAyNHB4O1xcclxcbiR0YWJsZXQtcG9ydC13aWR0aDogNzY4cHg7XFxyXFxuJG1vYmlsZS1sYXJnZS13aWR0aDogNzIwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNDIwcHg7XFxyXFxuXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9pbnRlclxcXCIpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNDRyZW07XFxyXFxuICBwYWRkaW5nOiAwIDRyZW0gNHJlbSA0cmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgbWF4LXdpZHRoOiA3Ni44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgcGFkZGluZzogMCAxLjZyZW0gNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIG1heC13aWR0aDogMzhyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmE6bGluayxcXHJcXG5hOnZpc2l0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAvLyBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5idXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdhcDogMC44cmVtO1xcclxcbiAgd2lkdGg6IDIwcmVtO1xcclxcbiAgaGVpZ2h0OiA2LjRyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLXRleHQge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ljb25zL3R3aXR0ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ljb25zL3R3aXR0ZXItaG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vLi4vYXNzZXRzL2ljb25zL2luc3RhZ3JhbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLWhvdmVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uLy4uL2Fzc2V0cy9pY29ucy9mYWNlYm9vay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9hc3NldHMvaWNvbnMvZmFjZWJvb2staG92ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5mb290ZXJfX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjVmNTU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgZ2FwOiAxMHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBwYWRkaW5nOiAxMHJlbSA2cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA2cmVtIDEuNnJlbTtcbiAgICBnYXA6IDRyZW07XG4gIH1cbn1cbi5mb290ZXJfX2NvbnRhaW5lciAuaGVhZGluZy1saWdodCB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gIGNvbG9yOiAjZTFkNGM5O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lciAuaGVhZGluZy1saWdodCB7XG4gICAgZm9udC1zaXplOiA0LjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTI1JTtcbiAgICBjb2xvcjogI2UxZDRjOTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lciAuaGVhZGluZy1saWdodCB7XG4gICAgZm9udC1zaXplOiAzLjE1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEyNSU7XG4gICAgY29sb3I6ICNlMWQ0Yzk7XG4gIH1cbn1cblxuLmhlYWRpbmctbGlnaHQgc3BhbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICNiMDkwN2E7XG59XG5cbi5mb290ZXJfX2NvbnRhY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjdyZW07XG59XG4uZm9vdGVyX19jb250YWN0c190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyBpbWcge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjhyZW07XG59XG4uZm9vdGVyX19jb250YWN0c19waG9uZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICNlMWQ0Yzk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3Bob25lIGltZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3NjaGVkdWxlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogI2UxZDRjOTtcbn1cbi5mb290ZXJfX2NvbnRhY3RzX3NjaGVkdWxlIGltZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcbn1cblxuLmZvb3Rlcl9fY29udGFjdHNfYWRkcmVzcyBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDM0JTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWQ0Yzk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMnB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuZm9vdGVyX19jb250YWN0c19hZGRyZXNzIGE6aG92ZXI6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cblxuLmZvb3Rlcl9fY29udGFjdHNfcGhvbmUgYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFkNGM5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLmZvb3Rlcl9fY29udGFjdHNfcGhvbmUgYTpob3ZlcjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgfVxufVxuXG4uc29jaWFsLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxLjJyZW07XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xufVxuXG4uc29jaWFsLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NWY1NTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZDVjOTtcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnNvY2lhbC1pY29uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICB9XG59XG4uc29jaWFsLWljb24gc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcbn1cbi5zb2NpYWwtaWNvbl9fdHdpdHRlciB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnNvY2lhbC1pY29uX190d2l0dGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgfVxufVxuLnNvY2lhbC1pY29uX19pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5zb2NpYWwtaWNvbl9faW5zdGFncmFtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSkgbm8tcmVwZWF0IGNlbnRlcjtcbiAgfVxufVxuLnNvY2lhbC1pY29uX19mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KSBuby1yZXBlYXQgY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgLnNvY2lhbC1pY29uX19mYWNlYm9vazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fX30pIG5vLXJlcGVhdCBjZW50ZXI7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQvRm9vdGVyL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0VBO0VBQ0UseUJBcEJnQjtFQXFCaEIsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUEvREY7QUFXRTtFQTRDRjtJQVdJLDBCQUFBO0lBQ0EsbUJBQUE7RUE5REY7QUFDRjtBQWlCRTtFQWdDRjtJQWVJLG9CQUFBO0lBQ0EsU0FBQTtFQTVERjtBQUNGO0FBOERFO0VBbEZBLGVBbUZnQjtFQWxGaEIsZ0JBa0ZzQjtFQWpGdEIsaUJBaUYyQjtFQWhGM0IsY0E4Q2lCO0FBdkJuQjtBQUtFO0VBbURBO0lBbEZBLGlCQXNGa0I7SUFyRmxCLGdCQXFGMEI7SUFwRjFCLGlCQW9GK0I7SUFuRi9CLGNBOENpQjtFQWhCakI7QUFDRjtBQUdFO0VBNkNBO0lBbEZBLGtCQXlGa0I7SUF4RmxCLGdCQXdGMkI7SUF2RjNCLGlCQXVGZ0M7SUF0RmhDLGNBOENpQjtFQVJqQjtBQUNGOztBQW9ERTtFQUNFLGtCQUFBO0VBQ0EsY0E5Q2dCO0FBSHBCOztBQXFEQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFsREY7QUFvREU7RUF6R0EsaUJBMEdnQjtFQXpHaEIsZ0JBeUd3QjtFQXhHeEIsaUJBd0c2QjtFQXZHN0IsY0E4Q2lCO0VBMERmLG9CQUFBO0FBL0NKO0FBaURFO0VBN0dBLGlCQThHZ0I7RUE3R2hCLGdCQTZHd0I7RUE1R3hCLGlCQTRHNkI7RUEzRzdCLGNBOENpQjtFQThEZixrQkFBQTtFQUNBLGVBQUE7QUE1Q0o7QUE4Q0k7RUFDRSxxQkFBQTtBQTVDTjtBQStDRTtFQXRIQSxpQkF1SGdCO0VBdEhoQixnQkFzSHdCO0VBckh4QixpQkFxSDZCO0VBcEg3QixjQThDaUI7RUF1RWYsa0JBQUE7QUExQ0o7QUEyQ0k7RUFDRSxxQkFBQTtBQXpDTjtBQTRDRTtFQTdIQSxpQkE4SGdCO0VBN0hoQixnQkE2SHdCO0VBNUh4QixpQkE0SDZCO0VBM0g3QixjQThDaUI7QUFzQ25CO0FBeUNJO0VBQ0UscUJBQUE7QUF2Q047O0FBNkNFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBMUZlO0VBMkZmLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTFDSjtBQTRDRTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxnQ0FBQTtFQTFDSjtBQUNGOztBQThDRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQTVHZTtFQTZHZixrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUEzQ0o7QUE2Q0U7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsZ0NBQUE7RUEzQ0o7QUFDRjs7QUErQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQTVDRjs7QUE4Q0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQTFJZ0I7RUEySWhCLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBM0NGO0FBNkNFO0VBQ0U7SUFDRSx5QkFwSlU7RUF5R2Q7QUFDRjtBQThDRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUE1Q0o7QUErQ0U7RUFDRSxvRUFBQTtFQUNBLGdDQUFBO0FBN0NKO0FBOENJO0VBQ0U7SUFDRSxvRUFBQTtFQTVDTjtBQUNGO0FBZ0RFO0VBQ0Usb0VBQUE7RUFDQSxnQ0FBQTtBQTlDSjtBQStDSTtFQUNFO0lBQ0Usb0VBQUE7RUE3Q047QUFDRjtBQWlERTtFQUNFLG9FQUFBO0VBQ0EsZ0NBQUE7QUEvQ0o7QUFnREk7RUFDRTtJQUNFLG9FQUFBO0VBOUNOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRoZWlnaHQsICRjb2xvcikge1xcclxcbiAgZm9udC1zaXplOiAkc2l6ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcclxcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ldHJhbnNpdGlvbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG5AbWl4aW4gbWVkaWEtZGVza3RvcCB7XFxyXFxuICAvLyAxMjIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1sYW5kIHtcXHJcXG4gIC8vIDEwMjRweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtbGFuZC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gIC8vIDc2OHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1wb3J0LXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gIC8vIDcyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1sYXJnZS13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAvLyA0MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcbi8vIEJhY2tncm91bmQgQ29sb3JcXHJcXG4kY29sb3ItcHJpbWFyeTogI2UzZDVjOTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5OiAjNjY1ZjU1O1xcclxcbiRjb2xvci1iYWNrZHJvcDogIzQwM2YzZGNjO1xcclxcblxcclxcbi8vIFRleHQgQ29sb3JcXHJcXG4kY29sb3ItdGV4dC1kYXJrOiAjNDAzZjNkO1xcclxcbiRjb2xvci10ZXh0LWxpZ2h0OiAjZTFkNGM5O1xcclxcbiRjb2xvci10ZXh0LWFjY2VudDogI2IwOTA3YTtcXHJcXG5cXHJcXG4vLyBCb3JkZXIgQ29sb3I6XFxyXFxuJGNvbG9yLWJvcmRlci1saWdodDogI2MxYjZhZDtcXHJcXG4kY29sb3ItYm9yZGVyLWRhcms6ICM2NjVmNTU7XFxyXFxuXFxyXFxuLy8gTWVkaWFcXHJcXG4kZGVza3RvcC13aWR0aDogMTIyMHB4O1xcclxcbiR0YWJsZXQtbGFuZC13aWR0aDogMTAyNHB4O1xcclxcbiR0YWJsZXQtcG9ydC13aWR0aDogNzY4cHg7XFxyXFxuJG1vYmlsZS1sYXJnZS13aWR0aDogNzIwcHg7XFxyXFxuJG1vYmlsZS13aWR0aDogNDIwcHg7XFxyXFxuXFxuLmZvb3Rlcl9fY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXHJcXG4gIGdhcDogMTByZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBwYWRkaW5nOiAxMHJlbSA2cmVtO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgcGFkZGluZzogNnJlbSAxLjZyZW07XFxyXFxuICAgIGdhcDogNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkaW5nLWxpZ2h0IHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCg2cmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlLWxhcmdlIHtcXHJcXG4gICAgICBAaW5jbHVkZSB0ZXh0KDQuMnJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1saWdodCk7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgICBAaW5jbHVkZSB0ZXh0KDMuMTVyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5oZWFkaW5nLWxpZ2h0IHtcXHJcXG4gIHNwYW4ge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGNvbG9yOiAkY29sb3ItdGV4dC1hY2NlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfX2NvbnRhY3RzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxLjdyZW07XFxyXFxuXFxyXFxuICAmX3RpdGxlIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgyLjRyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG4gIH1cXHJcXG4gICZfYWRkcmVzcyB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWxpZ2h0KTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX3Bob25lIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMC44cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX3NjaGVkdWxlIHtcXHJcXG4gICAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDYwMCwgMTUwJSwgJGNvbG9yLXRleHQtbGlnaHQpO1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX19jb250YWN0c19hZGRyZXNzIGEge1xcclxcbiAgJjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMzQlO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRleHQtbGlnaHQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAtMnB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAmOmhvdmVyOmFmdGVyIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5mb290ZXJfX2NvbnRhY3RzX3Bob25lIGEge1xcclxcbiAgJjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMzMlO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRleHQtbGlnaHQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAtMnB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAmOmhvdmVyOmFmdGVyIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaWNvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxLjJyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXHJcXG59XFxyXFxuLnNvY2lhbC1pY29uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XFxyXFxuICB3aWR0aDogNnJlbTtcXHJcXG4gIGhlaWdodDogNnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDZyZW07XFxyXFxuICAgIGhlaWdodDogNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3R3aXR0ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3R3aXR0ZXIuc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gICAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy90d2l0dGVyLWhvdmVyLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2luc3RhZ3JhbSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvaW5zdGFncmFtLWhvdmVyLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ZhY2Vib29rIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9mYWNlYm9vay5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL2ZhY2Vib29rLWhvdmVyLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTByZW07XG4gIHBhZGRpbmc6IDJyZW0gMDtcbn1cblxuLm5hdmlnYXRpb25fX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogNHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2aWdhdGlvbl9fbGlzdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLm5hdmlnYXRpb25fX2xpc3RfbGluayB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uYXZpZ2F0aW9uX19saXN0X2xpbms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDNmM2Q7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMnB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAubmF2aWdhdGlvbl9fbGlzdF9saW5rOmhvdmVyOmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbi5oZWFkZXJfX21lbnUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyX19tZW51IHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlcl9fbWVudTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwM2YzZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0ycHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC5oZWFkZXJfX21lbnU6aG92ZXI6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyX19tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi52aXN1YWxseS1oaWRkZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY2xpcC1wYXRoOiBpbnNldCgxMDAlKTtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5hdmlnYXRpb25fX2xpc3RfbGluay5tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJ1cmdlcl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnVyZ2VyX19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNC42cmVtO1xuICB9XG59XG4uYnVyZ2VyX19jb250YWluZXIgLmJ1cmdlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0LjRyZW07XG4gIGhlaWdodDogNC40cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY1ZjU1O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYnVyZ2VyX19jb250YWluZXIgLmJ1cmdlcl9fbGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxLjZyZW07XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDNmM2Q7XG59XG4uYnVyZ2VyX19jb250YWluZXIgLmJ1cmdlcl9fbGluZS10b3Age1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNHJlbSk7XG59XG4uYnVyZ2VyX19jb250YWluZXIgLmJ1cmdlcl9fbGluZS1ib3R0b20ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC40cmVtKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQvSGVhZGVyL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0VBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQS9ERjs7QUFrRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBL0RGO0FBY0U7RUE4Q0Y7SUFNSSxhQUFBO0VBOURGO0FBQ0Y7QUFnRUU7RUFoRkEsaUJBaUZnQjtFQWhGaEIsZ0JBZ0Z3QjtFQS9FeEIsaUJBK0U2QjtFQTlFN0IsY0E2Q2dCO0VBa0NkLGdCQUFBO0VBQ0Esa0JBQUE7QUEzREo7QUE2REk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkF6Q1k7RUEwQ1osa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBM0ROO0FBNkRJO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGdDQUFBO0VBM0ROO0FBQ0Y7O0FBZ0VBO0VBeEdFLGlCQXlHYztFQXhHZCxnQkF3R3NCO0VBdkd0QixpQkF1RzJCO0VBdEczQixjQTZDZ0I7RUEwRGhCLGtCQUFBO0FBMURGO0FBMkRFO0VBQ0UsYUFBQTtBQXpESjtBQTRERTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQW5FYztFQW9FZCxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUExREo7QUE0REU7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsZ0NBQUE7RUExREo7QUFDRjtBQTFDRTtFQStFRjtJQXlCSSxhQUFBO0VBMURGO0FBQ0Y7O0FBNkRBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBMURGOztBQTZEQTtFQUNFLGFBQUE7QUExREY7O0FBNkRBO0VBQ0UsYUFBQTtBQTFERjtBQXBFRTtFQTZIRjtJQUdJLGNBQUE7SUFDQSxjQUFBO0VBeERGO0FBQ0Y7QUF5REU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBdkRKO0FBeURJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQTVIWTtBQXFFbEI7QUF5RE07RUFDRSw4QkFBQTtBQXZEUjtBQXlETTtFQUNFLDZCQUFBO0FBdkRSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkY29sb3IpIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJXRyYW5zaXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuQG1peGluIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgLy8gMTIyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJGRlc2t0b3Atd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAvLyAxMDI0cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LWxhbmQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAvLyA3NjhweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtcG9ydC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAvLyA3MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtbGFyZ2Utd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUge1xcclxcbiAgLy8gNDIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXG4vLyBCYWNrZ3JvdW5kIENvbG9yXFxyXFxuJGNvbG9yLXByaW1hcnk6ICNlM2Q1Yzk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeTogIzY2NWY1NTtcXHJcXG4kY29sb3ItYmFja2Ryb3A6ICM0MDNmM2RjYztcXHJcXG5cXHJcXG4vLyBUZXh0IENvbG9yXFxyXFxuJGNvbG9yLXRleHQtZGFyazogIzQwM2YzZDtcXHJcXG4kY29sb3ItdGV4dC1saWdodDogI2UxZDRjOTtcXHJcXG4kY29sb3ItdGV4dC1hY2NlbnQ6ICNiMDkwN2E7XFxyXFxuXFxyXFxuLy8gQm9yZGVyIENvbG9yOlxcclxcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNjMWI2YWQ7XFxyXFxuJGNvbG9yLWJvcmRlci1kYXJrOiAjNjY1ZjU1O1xcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuJGRlc2t0b3Atd2lkdGg6IDEyMjBweDtcXHJcXG4kdGFibGV0LWxhbmQtd2lkdGg6IDEwMjRweDtcXHJcXG4kdGFibGV0LXBvcnQtd2lkdGg6IDc2OHB4O1xcclxcbiRtb2JpbGUtbGFyZ2Utd2lkdGg6IDcyMHB4O1xcclxcbiRtb2JpbGUtd2lkdGg6IDQyMHB4O1xcclxcblxcbi5oZWFkZXJfX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTByZW07XFxyXFxuICBwYWRkaW5nOiAycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uX19saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDRyZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX2xpbmsge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAmOmFmdGVyIHtcXHJcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGV4dC1kYXJrO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBsZWZ0OiAwO1xcclxcbiAgICAgIGJvdHRvbTogLTJweDtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXHJcXG4gICAgICAmOmhvdmVyOmFmdGVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fbWVudSB7XFxyXFxuICBAaW5jbHVkZSB0ZXh0KDEuNnJlbSwgNjAwLCAxNTAlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHNwYW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10ZXh0LWRhcms7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAtMnB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgICAmOmhvdmVyOmFmdGVyIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi52aXN1YWxseS1oaWRkZW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDFweDtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgbWFyZ2luOiAtMXB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICBjbGlwLXBhdGg6IGluc2V0KDEwMCUpO1xcclxcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsubWVudSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYnVyZ2VyX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIEBpbmNsdWRlIG1lZGlhLXRhYmxldC1wb3J0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogNC42cmVtO1xcclxcbiAgfVxcclxcbiAgLmJ1cmdlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA0LjRyZW07XFxyXFxuICAgIGhlaWdodDogNC40cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWRhcms7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHJcXG4gICAgJl9fbGluZSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHdpZHRoOiAxLjZyZW07XFxyXFxuICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10ZXh0LWRhcms7XFxyXFxuXFxyXFxuICAgICAgJi10b3Age1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjRyZW0pO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmLWJvdHRvbSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC40cmVtKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uLWNvZmZlZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uLXRlYS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uLWRlc3NlcnRzLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL3JlZnJlc2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2VjdGlvbl9fbWVudS1jb2ZmZWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRyZW07XG59XG5cbi5oZWFkZXJfX21lbnUgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhlYWRlcl9fbWVudSBhIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmhlYWRlcl9fbWVudTphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsubWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmF2aWdhdGlvbl9fbGlzdF9saW5rLmhvbWUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGVhZGluZy1kYXJrIHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA4MHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuaGVhZGluZy1kYXJrIHtcbiAgICBmb250LXNpemU6IDVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTE1JTtcbiAgICBjb2xvcjogIzQwM2YzZDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5oZWFkaW5nLWRhcmsge1xuICAgIGZvbnQtc2l6ZTogNC4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDExNSU7XG4gICAgY29sb3I6ICM0MDNmM2Q7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuaGVhZGluZy1kYXJrIHtcbiAgICBmb250LXNpemU6IDMuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICAgIGNvbG9yOiAjNDAzZjNkO1xuICB9XG59XG4uaGVhZGluZy1kYXJrIHNwYW4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjYjA5MDdhO1xufVxuXG4udGFic19fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMS43cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC50YWJzX19jb250YWluZXIge1xuICAgIGdhcDogMC44cmVtO1xuICB9XG59XG5cbi50YWIge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIGNvbG9yOiAjNDAzZjNkO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzFiNmFkO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgZ2FwOiAwLjhyZW07XG4gIHBhZGRpbmc6IDAuOHJlbSAxLjZyZW0gMC44cmVtIDAuOHJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50YWJfaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFiNmFkO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgcGFkZGluZzogMCAwLjdyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29mZmVlLWljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi50ZWEtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuLmRlc3NlcnQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuLnRhYl90ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4udGFiLS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xufVxuXG4udGFiLS1hY3RpdmUgLnRhYl9pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZDVjOTtcbn1cblxuLnRhYi0tYWN0aXZlIC50YWJfdGV4dCB7XG4gIGNvbG9yOiAjZTNkNWM5O1xufVxuXG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gIC50YWI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY1ZjU1O1xuICB9XG4gIC50YWI6aG92ZXIgLnRhYl9pY29uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNkNWM5O1xuICB9XG4gIC50YWI6aG92ZXIgLnRhYl90ZXh0IHtcbiAgICBjb2xvcjogI2UzZDVjOTtcbiAgfVxufVxuLnRhYjpkaXNhYmxlZCxcbi50YWIgYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmFydGljbGVzX19jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICByb3ctZ2FwOiAzLjlyZW07XG4gIGNvbHVtbi1nYXA6IDRyZW07XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAuYXJ0aWNsZXNfX2NvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTByZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuYXJ0aWNsZXNfX2NvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuYXJ0aWNsZXNfX2NvbnRhaW5lciB7XG4gICAgcm93LWdhcDogMy44cmVtO1xuICB9XG59XG5cbi5hcnRpY2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxYjZhZDtcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgbWF4LXdpZHRoOiAzMXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gIC5hcnRpY2xlOm50aC1jaGlsZChuKzcpOm50aC1jaGlsZCgtbis4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYXJ0aWNsZTpudGgtY2hpbGQobis1KTpudGgtY2hpbGQoLW4rOCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAuYXJ0aWNsZTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5hcnRpY2xlOmhvdmVyIC5pbWFnZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG59XG4uaW1hZ2VfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAzMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcbn1cblxuLmltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xLjVyZW07XG4gIHJpZ2h0OiAtMS42cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmluZm9fX2NvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTI1JTtcbiAgY29sb3I6ICM0MDNmM2Q7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbiAgZ2FwOiAxLjJyZW07XG4gIHBhZGRpbmc6IDEuOXJlbTtcbiAgbWluLWhlaWdodDogMTkuNnJlbTtcbn1cblxuLmluZm9fX3RpdGxlIHtcbiAgZm9udC1zaXplOiAyLjRyZW07XG59XG5cbi5pbmZvX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTUwJTtcbiAgY29sb3I6ICM0MDNmM2Q7XG59XG5cbi5pbmZvX19wcmljZSB7XG4gIG1hcmdpbjogYXV0byAwIDAgMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAucmVmcmVzaC1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBoZWlnaHQ6IDZyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NWY1NTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLnJlZnJlc2gtYnRuIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMi40cmVtO1xuICAgIGhlaWdodDogMi40cmVtO1xuICB9XG4gIC5yZWZyZXNoLWJ0bl9faWNvbiB7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0L01lbnUvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFnRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUEvREY7O0FBbUVFO0VBQ0UsY0FBQTtBQWhFSjtBQWtFRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBaEVKO0FBa0VFO0VBQ0UsbUJBQUE7QUFoRUo7O0FBb0VBO0VBQ0UsY0FBQTtBQWpFRjs7QUFtRUE7RUFDRSxhQUFBO0FBaEVGOztBQW1FQTtFQTFGRSxlQTJGYztFQTFGZCxnQkEwRm9CO0VBekZwQixpQkF5RnlCO0VBeEZ6QixjQTZDZ0I7RUE0Q2hCLGtCQUFBO0VBQ0EsZ0JBQUE7QUE3REY7QUFERTtFQTJERjtJQTFGRSxlQWdHZ0I7SUEvRmhCLGdCQStGc0I7SUE5RnRCLGlCQThGMkI7SUE3RjNCLGNBNkNnQjtFQVRoQjtBQUNGO0FBSEU7RUFxREY7SUExRkUsaUJBbUdnQjtJQWxHaEIsZ0JBa0d3QjtJQWpHeEIsaUJBaUc2QjtJQWhHN0IsY0E2Q2dCO0VBRGhCO0FBQ0Y7QUFYRTtFQXFERjtJQTFGRSxpQkFzR2dCO0lBckdoQixnQkFxR3dCO0lBcEd4QixpQkFvRzZCO0lBbkc3QixjQTZDZ0I7RUFPaEI7QUFDRjtBQWlERTtFQUNFLGtCQUFBO0VBQ0EsY0F6RGdCO0FBVXBCOztBQWtEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUEvQ0Y7QUE3QkU7RUF5RUY7SUFNSSxXQUFBO0VBOUNGO0FBQ0Y7O0FBaURBO0VBeEhFLGlCQXlIYztFQXhIZCxnQkF3SHNCO0VBdkh0QixpQkF1SDJCO0VBdEgzQixjQTZDZ0I7RUEwRWhCLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQWxGYztFQW1GZCx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7QUEzQ0Y7O0FBNkNBO0VBQ0UsY0FBQTtFQUNBLHlCQWpGbUI7RUFrRm5CLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBMUNGOztBQTRDQTtFQUNFLG1EQUFBO0FBekNGOztBQTJDQTtFQUNFLG1EQUFBO0FBeENGOztBQTBDQTtFQUNFLG1EQUFBO0FBdkNGOztBQXlDQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBdENGOztBQXdDQTtFQUNFLHlCQWhIZ0I7QUEyRWxCOztBQXVDQTtFQUNFLHlCQXBIYztBQWdGaEI7O0FBc0NBO0VBQ0UsY0F2SGM7QUFvRmhCOztBQXFDQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLHlCQTNIYztFQXlGaEI7RUFvQ0E7SUFDRSx5QkEvSFk7RUE2RmQ7RUFvQ0E7SUFDRSxjQWxJWTtFQWdHZDtBQUNGO0FBcUNBOztFQUVFLGVBQUE7QUFuQ0Y7O0FBdUNBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQXBDRjtBQTVJRTtFQTBLRjtJQVNJLHFDQUFBO0lBQ0EscUJBQUE7RUFuQ0Y7QUFDRjtBQWhJRTtFQXdKRjtJQWFJLDBCQUFBO0VBakNGO0FBQ0Y7QUEvSEU7RUFrSkY7SUFnQkksZUFBQTtFQS9CRjtBQUNGOztBQWtDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBL0JGO0FBcktFO0VBdU1FO0lBQ0UsYUFBQTtFQS9CSjtBQUNGO0FBcEtFO0VBc01FO0lBQ0UsYUFBQTtFQS9CSjtBQUNGOztBQWtDQTtFQUNFO0lBQ0UsZUFBQTtFQS9CRjtFQWlDQTtJQUNFLHFCQUFBO0VBL0JGO0FBQ0Y7QUFrQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBaENGOztBQWtDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQS9CRjs7QUFrQ0E7RUFwUEUsaUJBcVBjO0VBcFBkLGdCQW9Qc0I7RUFuUHRCLGlCQW1QMkI7RUFsUDNCLGNBNkNnQjtFQXNNaEIsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUE1QkY7O0FBOEJBO0VBQ0UsaUJBQUE7QUEzQkY7O0FBNkJBO0VBaFFFLGlCQWlRYztFQWhRZCxnQkFnUXNCO0VBL1B0QixpQkErUDJCO0VBOVAzQixjQTZDZ0I7QUEwTGxCOztBQXlCQTtFQUNFLGtCQUFBO0FBdEJGOztBQWpPRTtFQTJQQTtJQUNFLGFBQUE7SUFDQSw2QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQXRCRjtFQXdCRTtJQUNFLHFCQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUF0Qko7RUF3QkU7SUFDRSxtREFBQTtFQXRCSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkY29sb3IpIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNpemU7XFxyXFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuJXRyYW5zaXRpb24ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuQG1peGluIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgLy8gMTIyMHB4XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJGRlc2t0b3Atd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtbGFuZCB7XFxyXFxuICAvLyAxMDI0cHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LWxhbmQtd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS10YWJsZXQtcG9ydCB7XFxyXFxuICAvLyA3NjhweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtcG9ydC13aWR0aCkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1peGluIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAvLyA3MjBweFxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtbGFyZ2Utd2lkdGgpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtaXhpbiBtZWRpYS1tb2JpbGUge1xcclxcbiAgLy8gNDIwcHhcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXdpZHRoKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXG4vLyBCYWNrZ3JvdW5kIENvbG9yXFxyXFxuJGNvbG9yLXByaW1hcnk6ICNlM2Q1Yzk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeTogIzY2NWY1NTtcXHJcXG4kY29sb3ItYmFja2Ryb3A6ICM0MDNmM2RjYztcXHJcXG5cXHJcXG4vLyBUZXh0IENvbG9yXFxyXFxuJGNvbG9yLXRleHQtZGFyazogIzQwM2YzZDtcXHJcXG4kY29sb3ItdGV4dC1saWdodDogI2UxZDRjOTtcXHJcXG4kY29sb3ItdGV4dC1hY2NlbnQ6ICNiMDkwN2E7XFxyXFxuXFxyXFxuLy8gQm9yZGVyIENvbG9yOlxcclxcbiRjb2xvci1ib3JkZXItbGlnaHQ6ICNjMWI2YWQ7XFxyXFxuJGNvbG9yLWJvcmRlci1kYXJrOiAjNjY1ZjU1O1xcclxcblxcclxcbi8vIE1lZGlhXFxyXFxuJGRlc2t0b3Atd2lkdGg6IDEyMjBweDtcXHJcXG4kdGFibGV0LWxhbmQtd2lkdGg6IDEwMjRweDtcXHJcXG4kdGFibGV0LXBvcnQtd2lkdGg6IDc2OHB4O1xcclxcbiRtb2JpbGUtbGFyZ2Utd2lkdGg6IDcyMHB4O1xcclxcbiRtb2JpbGUtd2lkdGg6IDQyMHB4O1xcclxcblxcbi5zZWN0aW9uX19tZW51LWNvZmZlZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX21lbnUge1xcclxcbiAgc3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbiAgYSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIH1cXHJcXG4gICY6YWZ0ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbl9fbGlzdF9saW5rLm1lbnUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5uYXZpZ2F0aW9uX19saXN0X2xpbmsuaG9tZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZy1kYXJrIHtcXHJcXG4gIEBpbmNsdWRlIHRleHQoNnJlbSwgNjAwLCAxMjUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1heC13aWR0aDogODByZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUtbGFyZ2Uge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDVyZW0sIDYwMCwgMTE1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tb2JpbGUge1xcclxcbiAgICBAaW5jbHVkZSB0ZXh0KDQuMnJlbSwgNjAwLCAxMTUlLCAkY29sb3ItdGV4dC1kYXJrKTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIEBpbmNsdWRlIHRleHQoMy4ycmVtLCA2MDAsIDEyNSUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgfVxcclxcblxcclxcbiAgc3BhbiB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgY29sb3I6ICRjb2xvci10ZXh0LWFjY2VudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLnRhYnNfX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEuN3JlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZSB7XFxyXFxuICAgIGdhcDogMC44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGFiIHtcXHJcXG4gIEBpbmNsdWRlIHRleHQoMS42cmVtLCA2MDAsIDE1MCUsICRjb2xvci10ZXh0LWRhcmspO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYm9yZGVyLWxpZ2h0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XFxyXFxuICBnYXA6IDAuOHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbSAxLjZyZW0gMC44cmVtIDAuOHJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4udGFiX2ljb24ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYm9yZGVyLWxpZ2h0O1xcclxcbiAgd2lkdGg6IDNyZW07XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMC43cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5jb2ZmZWUtaWNvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi9hc3NldHMvaWNvbnMvaWNvbi1jb2ZmZWUuc3ZnKTtcXHJcXG59XFxyXFxuLnRlYS1pY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uLXRlYS5zdmcpO1xcclxcbn1cXHJcXG4uZGVzc2VydC1pY29uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uLWRlc3NlcnRzLnN2Zyk7XFxyXFxufVxcclxcbi50YWJfdGV4dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLnRhYi0tYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XFxyXFxufVxcclxcbi50YWItLWFjdGl2ZSAudGFiX2ljb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XFxyXFxufVxcclxcbi50YWItLWFjdGl2ZSAudGFiX3RleHQge1xcclxcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbn1cXHJcXG5AbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XFxyXFxuICAudGFiOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xcclxcbiAgfVxcclxcbiAgLnRhYjpob3ZlciAudGFiX2ljb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcXHJcXG4gIH1cXHJcXG4gIC50YWI6aG92ZXIgLnRhYl90ZXh0IHtcXHJcXG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGFiOmRpc2FibGVkLFxcclxcbi50YWIgYnV0dG9uW2Rpc2FibGVkXSB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi8vIEFydGljbGVzXFxyXFxuLmFydGljbGVzX19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICByb3ctZ2FwOiAzLjlyZW07XFxyXFxuICBjb2x1bW4tZ2FwOiA0cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogLTJweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA2cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtZGVza3RvcCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcXHJcXG4gIH1cXHJcXG4gIEBpbmNsdWRlIG1lZGlhLW1vYmlsZS1sYXJnZSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtbW9iaWxlIHtcXHJcXG4gICAgcm93LWdhcDogMy44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXItbGlnaHQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcclxcbiAgbWF4LXdpZHRoOiAzMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgQGluY2x1ZGUgbWVkaWEtZGVza3RvcCB7XFxyXFxuICAgICY6bnRoLWNoaWxkKG4gKyA3KTpudGgtY2hpbGQoLW4gKyA4KSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtdGFibGV0LWxhbmQge1xcclxcbiAgICAmOm50aC1jaGlsZChuICsgNSk6bnRoLWNoaWxkKC1uICsgOCkge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xcclxcbiAgLmFydGljbGU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICAuYXJ0aWNsZTpob3ZlciAuaW1hZ2Uge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5pbWFnZV9fY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBoZWlnaHQ6IDMxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXHJcXG59XFxyXFxuLmltYWdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTEuNXJlbTtcXHJcXG4gIHJpZ2h0OiAtMS42cmVtO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5pbmZvX19jb250YWluZXIge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgyLjRyZW0sIDYwMCwgMTI1JSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGdhcDogMS4ycmVtO1xcclxcbiAgcGFkZGluZzogMS45cmVtO1xcclxcbiAgbWluLWhlaWdodDogMTkuNnJlbTtcXHJcXG59XFxyXFxuLmluZm9fX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbn1cXHJcXG4uaW5mb19fZGVzY3JpcHRpb24ge1xcclxcbiAgQGluY2x1ZGUgdGV4dCgxLjZyZW0sIDQwMCwgMTUwJSwgJGNvbG9yLXRleHQtZGFyayk7XFxyXFxufVxcclxcbi5pbmZvX19wcmljZSB7XFxyXFxuICBtYXJnaW46IGF1dG8gMCAwIDA7XFxyXFxufVxcclxcblxcclxcbkBpbmNsdWRlIG1lZGlhLWRlc2t0b3Age1xcclxcbiAgLnJlZnJlc2gtYnRuIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA2cmVtO1xcclxcbiAgICBoZWlnaHQ6IDZyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ib3JkZXItZGFyaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICB3aWR0aDogMi40cmVtO1xcclxcbiAgICAgIGhlaWdodDogMi40cmVtO1xcclxcbiAgICB9XFxyXFxuICAgICZfX2ljb24ge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLy4uLy4uL2Fzc2V0cy9pY29ucy9yZWZyZXNoLnN2Zyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ljb25zL3Bpbi1hbHQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvcGhvbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaWNvbnMvY2xvY2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fKTtcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29sdW1uXFxcIj4gPGgzIGNsYXNzPVxcXCJoZWFkaW5nLWxpZ2h0XFxcIj4gU2lwLCBTYXZvciwgU21pbGUuIDxzcGFuPkl0J3MgY29mZmVlIHRpbWUhPC9zcGFuPiA8L2gzPiA8ZGl2IGNsYXNzPVxcXCJzb2NpYWwtaWNvbnNcXFwiPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwic29jaWFsLWljb25cXFwiPjxzcGFuIGNsYXNzPVxcXCJzb2NpYWwtaWNvbl9fdHdpdHRlclxcXCI+PC9zcGFuPjwvYT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcInNvY2lhbC1pY29uXFxcIj48c3BhbiBjbGFzcz1cXFwic29jaWFsLWljb25fX2luc3RhZ3JhbVxcXCI+PC9zcGFuPjwvYT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcInNvY2lhbC1pY29uXFxcIj48c3BhbiBjbGFzcz1cXFwic29jaWFsLWljb25fX2ZhY2Vib29rXFxcIj48L3NwYW4+PC9hPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29sdW1uXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19jb250YWN0c1xcXCIgaWQ9XFxcImNvbnRhY3RzXFxcIj4gPHAgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNfdGl0bGVcXFwiPkNvbnRhY3QgdXM8L3A+IDxwIGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhY3RzX2FkZHJlc3NcXFwiPiA8YSBocmVmPVxcXCJodHRwczovL21hcHMuYXBwLmdvby5nbC9SSmFwWTJRVjlaMUFaamltOFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwicGluIGljb25cXFwiLz44NTU4IEdyZWVuIFJkLiwgTEE8L2E+IDwvcD4gPHAgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFjdHNfcGhvbmVcXFwiPiA8YSBocmVmPVxcXCJ0ZWw6KzEoNjAzKTU1NS0wMTIzXFxcIj48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwicGhvbmUgaWNvblxcXCIvPisxICg2MDMpIDU1NS0wMTIzPC9hPiA8L3A+IDxwIGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhY3RzX3NjaGVkdWxlXFxcIj4gPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcImNsb2NrIGljb25cXFwiLz5Nb24tU2F0OiA5OjAwIEFNIOKAkyAyMzowMCBQTSA8L3A+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pY29ucy9jb2ZmZWUtY3VwLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcImxvZ29cXFwiPiA8YSBocmVmPVxcXCIuL2luZGV4Lmh0bWxcXFwiPiA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwibG9nb1xcXCIgZHJhZ2dhYmxlPVxcXCJmYWxzZVxcXCIvPiA8aDEgY2xhc3M9XFxcInZpc3VhbGx5LWhpZGRlblxcXCI+IFJlc291cnNlIC0gdGhlIGJlc3QgY29mZmVlIGhvdXNlIGluIHlvdXIgYXJlYSA8L2gxPjwvYT4gPC9kaXY+IDxuYXYgY2xhc3M9XFxcImhlYWRlcl9fbmF2aWdhdGlvblxcXCI+IDx1bCBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdFxcXCI+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rIGhvbWVcXFwiPiA8YSBocmVmPVxcXCIjZmF2b3JpdGVcXFwiPkZhdm9yaXRlIGNvZmZlZTwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmsgbWVudVxcXCI+IDxhIGhyZWY9XFxcIi4vI2Zhdm9yaXRlXFxcIj5GYXZvcml0ZSBjb2ZmZWU8L2E+IDwvbGk+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rIGhvbWVcXFwiPjxhIGhyZWY9XFxcIiNhYm91dFxcXCI+QWJvdXQ8L2E+PC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmsgbWVudVxcXCI+PGEgaHJlZj1cXFwiLi8jYWJvdXRcXFwiPkFib3V0PC9hPjwvbGk+IDxsaSBjbGFzcz1cXFwibmF2aWdhdGlvbl9fbGlzdF9saW5rIGhvbWVcXFwiPjxhIGhyZWY9XFxcIiNhcHBcXFwiPk1vYmlsZSBhcHA8L2E+PC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmsgbWVudVxcXCI+IDxhIGhyZWY9XFxcIi4vI2FwcFxcXCI+TW9iaWxlIGFwcDwvYT4gPC9saT4gPGxpIGNsYXNzPVxcXCJuYXZpZ2F0aW9uX19saXN0X2xpbmtcXFwiPjxhIGhyZWY9XFxcIiNjb250YWN0c1xcXCI+Q29udGFjdCB1czwvYT48L2xpPiA8L3VsPiA8L25hdj4gPGRpdiBjbGFzcz1cXFwiaGVhZGVyX19tZW51XFxcIj4gPHNwYW4+TWVudSA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwiY29mZmVlIGN1cCBpY29uXFxcIi8+PC9zcGFuPiA8YSBocmVmPVxcXCIuL21lbnUuaHRtbFxcXCI+TWVudSA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwiY29mZmVlIGN1cCBpY29uXFxcIi8+IDwvYT4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImJ1cmdlcl9fY29udGFpbmVyXFxcIj4gPGRpdiBjbGFzcz1cXFwiYnVyZ2VyXFxcIj4gPHNwYW4gY2xhc3M9XFxcImJ1cmdlcl9fbGluZSBidXJnZXJfX2xpbmUtdG9wXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJidXJnZXJfX2xpbmUgYnVyZ2VyX19saW5lLWJvdHRvbVxcXCI+PC9zcGFuPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvZmZlZS0xLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb2ZmZWUtMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29mZmVlLTMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvZmZlZS00LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb2ZmZWUtNS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29mZmVlLTYucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvZmZlZS03LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb2ZmZWUtOC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF82X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF83X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfN19fXyk7XG52YXIgY29kZSA9IFwiPHNlY3Rpb24gY2xhc3M9XFxcInNlY3Rpb25cXFwiPiA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX19tZW51LWNvZmZlZVxcXCI+IDxoMyBjbGFzcz1cXFwiaGVhZGluZy1kYXJrXFxcIj4gQmVoaW5kIGVhY2ggb2Ygb3VyIGN1cHMgaGlkZXMgYW4gPHNwYW4+YW1hemluZyBzdXJwcmlzZTwvc3Bhbj4gPC9oMz4gPGRpdiBjbGFzcz1cXFwidGFic19fY29udGFpbmVyXFxcIj4gPGJ1dHRvbiBjbGFzcz1cXFwidGFiIHRhYi0tYWN0aXZlXFxcIiBkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiPiA8c3BhbiBjbGFzcz1cXFwidGFiX2ljb24gY29mZmVlLWljb25cXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidGFiX3RleHRcXFwiPkNvZmZlZTwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gY2xhc3M9XFxcInRhYlxcXCI+IDxzcGFuIGNsYXNzPVxcXCJ0YWJfaWNvbiB0ZWEtaWNvblxcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0YWJfdGV4dFxcXCI+VGVhPC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiBjbGFzcz1cXFwidGFiXFxcIj4gPHNwYW4gY2xhc3M9XFxcInRhYl9pY29uIGRlc3NlcnQtaWNvblxcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0YWJfdGV4dFxcXCI+RGVzc2VydDwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhcnRpY2xlc19fY29udGFpbmVyXFxcIj4gPGFydGljbGUgY2xhc3M9XFxcImFydGljbGVcXFwiPiA8ZGl2IGNsYXNzPVxcXCJpbWFnZV9fY29udGFpbmVyXFxcIj4gPGltZyBjbGFzcz1cXFwiaW1hZ2VcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwiSXJpc2ggY29mZmVlIHBob3RvXFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJpbmZvX19jb250YWluZXJcXFwiPiA8aDMgY2xhc3M9XFxcImluZm9fX3RpdGxlXFxcIj5JcmlzaCBjb2ZmZWU8L2gzPiA8cCBjbGFzcz1cXFwiaW5mb19fZGVzY3JpcHRpb25cXFwiPiBGcmFncmFudCBibGFjayBjb2ZmZWUgd2l0aCBKYW1lc29uIElyaXNoIHdoaXNrZXkgYW5kIHdoaXBwZWQgbWlsayA8L3A+IDxwIGNsYXNzPVxcXCJpbmZvX19wcmljZVxcXCI+JDcuMDA8L3A+IDwvZGl2PiA8L2FydGljbGU+IDxhcnRpY2xlIGNsYXNzPVxcXCJhcnRpY2xlXFxcIj4gPGRpdiBjbGFzcz1cXFwiaW1hZ2VfX2NvbnRhaW5lclxcXCI+IDxpbWcgY2xhc3M9XFxcImltYWdlXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcIkthaGx1YSBjb2ZmZWUgcGhvdG9cXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImluZm9fX2NvbnRhaW5lclxcXCI+IDxoMyBjbGFzcz1cXFwiaW5mb19fdGl0bGVcXFwiPkthaGx1YSBjb2ZmZWU8L2gzPiA8cCBjbGFzcz1cXFwiaW5mb19fZGVzY3JpcHRpb25cXFwiPiBDbGFzc2ljIGNvZmZlZSB3aXRoIG1pbGsgYW5kIEthaGx1YSBsaXF1ZXVyIHVuZGVyIGEgY2FwIG9mIGZyb3RoZWQgbWlsayA8L3A+IDxwIGNsYXNzPVxcXCJpbmZvX19wcmljZVxcXCI+JDcuMDA8L3A+IDwvZGl2PiA8L2FydGljbGU+IDxhcnRpY2xlIGNsYXNzPVxcXCJhcnRpY2xlXFxcIj4gPGRpdiBjbGFzcz1cXFwiaW1hZ2VfX2NvbnRhaW5lclxcXCI+IDxpbWcgY2xhc3M9XFxcImltYWdlXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcIkhvbmV5IHJhZiBwaG90b1xcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiaW5mb19fY29udGFpbmVyXFxcIj4gPGgzIGNsYXNzPVxcXCJpbmZvX190aXRsZVxcXCI+SG9uZXkgcmFmPC9oMz4gPHAgY2xhc3M9XFxcImluZm9fX2Rlc2NyaXB0aW9uXFxcIj4gRXNwcmVzc28gd2l0aCBmcm90aGVkIG1pbGssIGNyZWFtIGFuZCBhcm9tYXRpYyBob25leSA8L3A+IDxwIGNsYXNzPVxcXCJpbmZvX19wcmljZVxcXCI+JDUuNTA8L3A+IDwvZGl2PiA8L2FydGljbGU+IDxhcnRpY2xlIGNsYXNzPVxcXCJhcnRpY2xlXFxcIj4gPGRpdiBjbGFzcz1cXFwiaW1hZ2VfX2NvbnRhaW5lclxcXCI+IDxpbWcgY2xhc3M9XFxcImltYWdlXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIiBhbHQ9XFxcIkljZSBjYXBwdWNjaW5vIHBob3RvXFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJpbmZvX19jb250YWluZXJcXFwiPiA8aDMgY2xhc3M9XFxcImluZm9fX3RpdGxlXFxcIj5JY2UgY2FwcHVjY2lubzwvaDM+IDxwIGNsYXNzPVxcXCJpbmZvX19kZXNjcmlwdGlvblxcXCI+IENhcHB1Y2Npbm8gd2l0aCBzb2Z0IHRoaWNrIGZvYW0gaW4gc3VtbWVyIHZlcnNpb24gd2l0aCBpY2UgPC9wPiA8cCBjbGFzcz1cXFwiaW5mb19fcHJpY2VcXFwiPiQ1LjAwPC9wPiA8L2Rpdj4gPC9hcnRpY2xlPiA8YXJ0aWNsZSBjbGFzcz1cXFwiYXJ0aWNsZVxcXCI+IDxkaXYgY2xhc3M9XFxcImltYWdlX19jb250YWluZXJcXFwiPiA8aW1nIGNsYXNzPVxcXCJpbWFnZVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCIgYWx0PVxcXCJFc3ByZXNzbyBwaG90b1xcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiaW5mb19fY29udGFpbmVyXFxcIj4gPGgzIGNsYXNzPVxcXCJpbmZvX190aXRsZVxcXCI+RXNwcmVzc288L2gzPiA8cCBjbGFzcz1cXFwiaW5mb19fZGVzY3JpcHRpb25cXFwiPkNsYXNzaWMgYmxhY2sgY29mZmVlPC9wPiA8cCBjbGFzcz1cXFwiaW5mb19fcHJpY2VcXFwiPiQ0LjUwPC9wPiA8L2Rpdj4gPC9hcnRpY2xlPiA8YXJ0aWNsZSBjbGFzcz1cXFwiYXJ0aWNsZVxcXCI+IDxkaXYgY2xhc3M9XFxcImltYWdlX19jb250YWluZXJcXFwiPiA8aW1nIGNsYXNzPVxcXCJpbWFnZVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gKyBcIlxcXCIgYWx0PVxcXCJMYXR0ZSBwaG90b1xcXCIvPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiaW5mb19fY29udGFpbmVyXFxcIj4gPGgzIGNsYXNzPVxcXCJpbmZvX190aXRsZVxcXCI+TGF0dGU8L2gzPiA8cCBjbGFzcz1cXFwiaW5mb19fZGVzY3JpcHRpb25cXFwiPiBFc3ByZXNzbyBjb2ZmZWUgd2l0aCB0aGUgYWRkaXRpb24gb2Ygc3RlYW1lZCBtaWxrIGFuZCBkZW5zZSBtaWxrIGZvYW0gPC9wPiA8cCBjbGFzcz1cXFwiaW5mb19fcHJpY2VcXFwiPiQ1LjUwPC9wPiA8L2Rpdj4gPC9hcnRpY2xlPiA8YXJ0aWNsZSBjbGFzcz1cXFwiYXJ0aWNsZVxcXCI+IDxkaXYgY2xhc3M9XFxcImltYWdlX19jb250YWluZXJcXFwiPiA8aW1nIGNsYXNzPVxcXCJpbWFnZVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gKyBcIlxcXCIgYWx0PVxcXCJMYXR0ZSBtYWNjaGlhdG8gcGhvdG9cXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImluZm9fX2NvbnRhaW5lclxcXCI+IDxoMyBjbGFzcz1cXFwiaW5mb19fdGl0bGVcXFwiPkxhdHRlIG1hY2NoaWF0bzwvaDM+IDxwIGNsYXNzPVxcXCJpbmZvX19kZXNjcmlwdGlvblxcXCI+IEVzcHJlc3NvIHdpdGggZnJvdGhlZCBtaWxrIGFuZCBjaG9jb2xhdGUgPC9wPiA8cCBjbGFzcz1cXFwiaW5mb19fcHJpY2VcXFwiPiQ1LjUwPC9wPiA8L2Rpdj4gPC9hcnRpY2xlPiA8YXJ0aWNsZSBjbGFzcz1cXFwiYXJ0aWNsZVxcXCI+IDxkaXYgY2xhc3M9XFxcImltYWdlX19jb250YWluZXJcXFwiPiA8aW1nIGNsYXNzPVxcXCJpbWFnZVxcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gKyBcIlxcXCIgYWx0PVxcXCJDb2ZmZWUgd2l0aCBjb2duYWMgcGhvdG9cXFwiLz4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImluZm9fX2NvbnRhaW5lclxcXCI+IDxoMyBjbGFzcz1cXFwiaW5mb19fdGl0bGVcXFwiPkNvZmZlZSB3aXRoIGNvZ25hYzwvaDM+IDxwIGNsYXNzPVxcXCJpbmZvX19kZXNjcmlwdGlvblxcXCI+IEZyYWdyYW50IGJsYWNrIGNvZmZlZSB3aXRoIGNvZ25hYyBhbmQgd2hpcHBlZCBjcmVhbSA8L3A+IDxwIGNsYXNzPVxcXCJpbmZvX19wcmljZVxcXCI+JDYuNTA8L3A+IDwvZGl2PiA8L2FydGljbGU+IDxkaXYgY2xhc3M9XFxcInJlZnJlc2gtYnRuXFxcIj4gPHNwYW4gY2xhc3M9XFxcInJlZnJlc2gtYnRuX19pY29uXFxcIj48L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvc2VjdGlvbj4gXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbM10hLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVszXSEuL21lbnUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzNdIS4vbWVudS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgaHRtbFRvRWxlbWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvaHRtbFRvRWxlbWVudFwiO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9pbmRleC5odG1sXCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmNvbnN0IGZvb3RlciA9IGh0bWxUb0VsZW1lbnQoRm9vdGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjtcclxuIiwiaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSBcIi4uLy4uL3V0aWxzL2h0bWxUb0VsZW1lbnRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9pbmRleC5odG1sXCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuXHJcbmNvbnN0IGhlYWRlciA9IGh0bWxUb0VsZW1lbnQoSGVhZGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcclxuIiwiaW1wb3J0IGh0bWxUb0VsZW1lbnQgZnJvbSBcIi4uLy4uL3V0aWxzL2h0bWxUb0VsZW1lbnRcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vaW5kZXguaHRtbFwiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XHJcblxyXG5jb25zdCBtZW51ID0gaHRtbFRvRWxlbWVudChNZW51KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7XHJcbiAiLCJpbXBvcnQgXCIuL21lbnUuc2Nzc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2xheW91dC9IZWFkZXJcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vbGF5b3V0L01lbnVcIjtcclxuLy8gaW1wb3J0IGhlcm8gZnJvbSBcIi4vbGF5b3V0L0NvbnRlbnQvMDFfaGVyb1wiO1xyXG4vLyBpbXBvcnQgZmF2b3JpdGUgZnJvbSBcIi4vbGF5b3V0L0NvbnRlbnQvMDJfZmF2b3JpdGVcIjtcclxuLy8gaW1wb3J0IGFib3V0IGZyb20gXCIuL2xheW91dC9Db250ZW50LzAzX2Fib3V0XCI7XHJcbi8vIGltcG9ydCBhcHAgZnJvbSBcIi4vbGF5b3V0L0NvbnRlbnQvMDRfYXBwXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vbGF5b3V0L0Zvb3RlclwiO1xyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xyXG5cclxuaGVhZGVyLmFwcGVuZChIZWFkZXIpO1xyXG5tYWluLmFwcGVuZChNZW51KTtcclxuLy8gbWFpbi5hcHBlbmQoaGVybyk7XHJcbi8vIG1haW4uYXBwZW5kKGZhdm9yaXRlKTtcclxuLy8gbWFpbi5hcHBlbmQoYWJvdXQpO1xyXG4vLyBtYWluLmFwcGVuZChhcHApO1xyXG5mb290ZXIuYXBwZW5kKEZvb3Rlcik7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChodG1sU3RyaW5nKSB7XHJcbiAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XHJcbiAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbFN0cmluZztcclxuICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1lbnVcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWVudS5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWVudS5zY3NzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguc2Nzc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==