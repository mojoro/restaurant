/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/allison-webfont.woff2 */ "./src/fonts/allison-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/allison-webfont.woff */ "./src/fonts/allison-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! content-background.jpg */ "./src/content-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --slate-gray: hsla(194, 15%, 51%, 1);
  --silver: hsla(204, 3%, 68%, 1);
  --dark-moss-green: hsla(80, 40%, 21%, 1);
  --light-moss-green: rgb(96, 131, 67);
  --timberwolf: hsla(37, 16%, 85%, 1);
  --timberwolf-trans: hsla(37, 16%, 85%, .85);
  --licorice: hsla(9, 11%, 12%, 1);
}

@font-face {
  font-family: 'allisonregular';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
       url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
  font-weight: normal;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  width: auto;
  display: grid;
  grid-template-rows: 7rem 1fr;
}

header{
  display: grid;
  grid-row: 1 / 2;
  background-color: var(--dark-moss-green);
  color: var(--timberwolf);
  align-content: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 7rem;
}

nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

nav img {
  grid-row: 1 / -1;
  justify-self: center;
  align-self: center;
  width: 20rem;
  height: auto;
  margin-bottom: 1rem;
}

nav img:hover {
  cursor: pointer;
}

.button-wrapper {
  display: grid;
  grid-row: 1 / -1;
  grid-auto-flow: column;
  gap: 5rem;
  margin-right: 2rem;
}

button {
  background-color: var(--dark-moss-green);
  color: var(--timberwolf);
  border: none;
  font-size: 2rem;
  align-self: center;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

button:hover {
  text-shadow: -1px -1px 0 var(--timberwolf); /* Add this line */
}

#mainbg {
  grid-row: 2 / 3;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: var(--licorice);
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 4rem 1fr 4rem;
}

.content {
  background-color: var(--timberwolf-trans);
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  border-radius: 1rem;
  display: flex; /* Change this line */
  flex-direction: column; /* Add this line */
  justify-content: flex-start; /* Change this line */
  align-items: center; /* Add this line */
  overflow: auto; /* Add this line */
  padding: 1rem; /* Add this line */
}

.card {
  background-color: var(--light-moss-green);
  margin: 2rem 0;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--timberwolf);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.2rem;
  width: 100%; /* Add this line */
  max-width: 800px; /* Add this line */
}

.card h2{
  font-family: 'allisonregular';
  font-size: 3rem;
  align-self: flex-start;
  margin-left: 2rem;
}

.home {
  padding: 1rem 0 2rem 0;
}

.review p {
  max-width: 75%;
  font-size: 1.3rem;
  margin-top: -1rem;
  margin-bottom: -1.3rem;
}

.review {
  justify-content: baseline;
  gap: 2rem;
}

.hours {
  margin: 0;
  gap: .6rem;
}

.location {
  gap: .5rem;
}

.divider {
  border-radius: 0;
  width: 80%;
  margin: 4rem 0 -1rem 0;
  font-family: 'allisonregular';
  font-size: 2rem;
  padding: 10px;
  position: relative; /* Add this line */
  clip-path: polygon(0 0, 100% 0, 75% 50%, 100% 100%, 0 100%, 25% 50%); /* Add this line */
}

.item {
  width: 50%;
  padding: 20px;
  margin-bottom: -.5rem;
}

.item:last-of-type {
  margin-bottom: 3rem;
}
.contact{
  max-width: 400px;
}
.contact:nth-child(2) {
  margin: 3rem 0 -1rem 0;
}

.contact h3 {
  align-self: flex-start;
  margin: 1rem 0rem -1rem 3rem;
  font-size: 1.7rem;
}

.contact p {
  margin: 1rem 0rem -1.5rem 4rem;
  font-size: 1.3rem;
  align-self: flex-start;
}

.contact p:last-child {
  margin-bottom: 1.5rem;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,oCAAoC;EACpC,+BAA+B;EAC/B,wCAAwC;EACxC,oCAAoC;EACpC,mCAAmC;EACnC,2CAA2C;EAC3C,gCAAgC;AAClC;;AAEA;EACE,6BAA6B;EAC7B;6DACuD;EACvD,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,wCAAwC;EACxC,wBAAwB;EACxB,qBAAqB;EACrB,eAAe;EACf,aAAa;EACb,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,wCAAwC;EACxC,wBAAwB;EACxB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,gDAAgD;AAClD;;AAEA;EACE,0CAA0C,EAAE,kBAAkB;AAChE;;AAEA;EACE,eAAe;EACf,yDAA+C;EAC/C,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;EACtB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,kCAAkC;EAClC,iCAAiC;AACnC;;AAEA;EACE,yCAAyC;EACzC,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,aAAa,EAAE,qBAAqB;EACpC,sBAAsB,EAAE,kBAAkB;EAC1C,2BAA2B,EAAE,qBAAqB;EAClD,mBAAmB,EAAE,kBAAkB;EACvC,cAAc,EAAE,kBAAkB;EAClC,aAAa,EAAE,kBAAkB;AACnC;;AAEA;EACE,yCAAyC;EACzC,cAAc;EACd,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,wBAAwB;EACxB,gDAAgD;EAChD,iBAAiB;EACjB,WAAW,EAAE,kBAAkB;EAC/B,gBAAgB,EAAE,kBAAkB;AACtC;;AAEA;EACE,6BAA6B;EAC7B,eAAe;EACf,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,sBAAsB;EACtB,6BAA6B;EAC7B,eAAe;EACf,aAAa;EACb,kBAAkB,EAAE,kBAAkB;EACtC,oEAAoE,EAAE,kBAAkB;AAC1F;;AAEA;EACE,UAAU;EACV,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":[":root {\n  --slate-gray: hsla(194, 15%, 51%, 1);\n  --silver: hsla(204, 3%, 68%, 1);\n  --dark-moss-green: hsla(80, 40%, 21%, 1);\n  --light-moss-green: rgb(96, 131, 67);\n  --timberwolf: hsla(37, 16%, 85%, 1);\n  --timberwolf-trans: hsla(37, 16%, 85%, .85);\n  --licorice: hsla(9, 11%, 12%, 1);\n}\n\n@font-face {\n  font-family: 'allisonregular';\n  src: url('./fonts/allison-webfont.woff2') format('woff2'),\n       url('./fonts/allison-webfont.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  min-height: 100vh;\n  width: auto;\n  display: grid;\n  grid-template-rows: 7rem 1fr;\n}\n\nheader{\n  display: grid;\n  grid-row: 1 / 2;\n  background-color: var(--dark-moss-green);\n  color: var(--timberwolf);\n  align-content: center;\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 7rem;\n}\n\nnav {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\nnav img {\n  grid-row: 1 / -1;\n  justify-self: center;\n  align-self: center;\n  width: 20rem;\n  height: auto;\n  margin-bottom: 1rem;\n}\n\nnav img:hover {\n  cursor: pointer;\n}\n\n.button-wrapper {\n  display: grid;\n  grid-row: 1 / -1;\n  grid-auto-flow: column;\n  gap: 5rem;\n  margin-right: 2rem;\n}\n\nbutton {\n  background-color: var(--dark-moss-green);\n  color: var(--timberwolf);\n  border: none;\n  font-size: 2rem;\n  align-self: center;\n  cursor: pointer;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbutton:hover {\n  text-shadow: -1px -1px 0 var(--timberwolf); /* Add this line */\n}\n\n#mainbg {\n  grid-row: 2 / 3;\n  background-image: url('content-background.jpg');\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  color: var(--licorice);\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  grid-template-columns: 1fr 3fr 1fr;\n  grid-template-rows: 4rem 1fr 4rem;\n}\n\n.content {\n  background-color: var(--timberwolf-trans);\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  border-radius: 1rem;\n  display: flex; /* Change this line */\n  flex-direction: column; /* Add this line */\n  justify-content: flex-start; /* Change this line */\n  align-items: center; /* Add this line */\n  overflow: auto; /* Add this line */\n  padding: 1rem; /* Add this line */\n}\n\n.card {\n  background-color: var(--light-moss-green);\n  margin: 2rem 0;\n  border-radius: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  color: var(--timberwolf);\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 1.2rem;\n  width: 100%; /* Add this line */\n  max-width: 800px; /* Add this line */\n}\n\n.card h2{\n  font-family: 'allisonregular';\n  font-size: 3rem;\n  align-self: flex-start;\n  margin-left: 2rem;\n}\n\n.home {\n  padding: 1rem 0 2rem 0;\n}\n\n.review p {\n  max-width: 75%;\n  font-size: 1.3rem;\n  margin-top: -1rem;\n  margin-bottom: -1.3rem;\n}\n\n.review {\n  justify-content: baseline;\n  gap: 2rem;\n}\n\n.hours {\n  margin: 0;\n  gap: .6rem;\n}\n\n.location {\n  gap: .5rem;\n}\n\n.divider {\n  border-radius: 0;\n  width: 80%;\n  margin: 4rem 0 -1rem 0;\n  font-family: 'allisonregular';\n  font-size: 2rem;\n  padding: 10px;\n  position: relative; /* Add this line */\n  clip-path: polygon(0 0, 100% 0, 75% 50%, 100% 100%, 0 100%, 25% 50%); /* Add this line */\n}\n\n.item {\n  width: 50%;\n  padding: 20px;\n  margin-bottom: -.5rem;\n}\n\n.item:last-of-type {\n  margin-bottom: 3rem;\n}\n.contact{\n  max-width: 400px;\n}\n.contact:nth-child(2) {\n  margin: 3rem 0 -1rem 0;\n}\n\n.contact h3 {\n  align-self: flex-start;\n  margin: 1rem 0rem -1rem 3rem;\n  font-size: 1.7rem;\n}\n\n.contact p {\n  margin: 1rem 0rem -1.5rem 4rem;\n  font-size: 1.3rem;\n  align-self: flex-start;\n}\n\n.contact p:last-child {\n  margin-bottom: 1.5rem;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/addListeners.js":
/*!*****************************!*\
  !*** ./src/addListeners.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addListeners: () => (/* binding */ addListeners)
/* harmony export */ });
/* harmony import */ var _homeContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeContent */ "./src/homeContent.js");
/* harmony import */ var _menuContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuContent */ "./src/menuContent.js");
/* harmony import */ var _contactContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactContent */ "./src/contactContent.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.js");





function addListeners() {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');
  
  function printHome() {
    clearContent();
    ___WEBPACK_IMPORTED_MODULE_3__.main.appendChild((0,_homeContent__WEBPACK_IMPORTED_MODULE_0__.homeContent)());
  }
  function printMenu() {
    clearContent();
    ___WEBPACK_IMPORTED_MODULE_3__.main.appendChild((0,_menuContent__WEBPACK_IMPORTED_MODULE_1__.menuContent)());
  }
  function printContact() {
    clearContent();
    ___WEBPACK_IMPORTED_MODULE_3__.main.appendChild((0,_contactContent__WEBPACK_IMPORTED_MODULE_2__.contactContent)());
  }
  
  function clearContent() {
    ___WEBPACK_IMPORTED_MODULE_3__.main.innerHTML = '';
  }
  
  document.querySelector('img').addEventListener('click', printHome);
  home.addEventListener('click', printHome);
  menu.addEventListener('click', printMenu);
  contact.addEventListener('click', printContact);
}


/***/ }),

/***/ "./src/contactContent.js":
/*!*******************************!*\
  !*** ./src/contactContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactContent: () => (/* binding */ contactContent)
/* harmony export */ });
function contactContent() {
  const content = document.createElement('div');
  content.classList.add('content');

  const divider = document.createElement('div');
  divider.classList.add('card', 'divider');

  const dividerHeader = document.createElement('h1');
  dividerHeader.textContent = 'Contact Us'
  divider.appendChild(dividerHeader);

  const chloe = contactCard('Chloe', 'Visionary', '123-456-7890', 'badbitch@chloecafe.com');
  const john = contactCard('Johnny', 'Manager', '123-456-7891', 'facilitator@chloecafe.com');

  content.appendChild(divider);
  content.appendChild(chloe);
  content.appendChild(john);

  return content;
}
function contactCard(nameText, roleText, numText, emailText) {
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('card', 'contact');

  const name = document.createElement('h3');
  name.textContent = nameText;

  const role = document.createElement('p');
  role.textContent = roleText;

  const number = document.createElement('p');
  number.textContent = numText;

  const email = document.createElement('p');
  email.textContent = emailText;

  infoDiv.appendChild(name);
  infoDiv.appendChild(role);
  infoDiv.appendChild(number);
  infoDiv.appendChild(email);

  return infoDiv;
}


/***/ }),

/***/ "./src/homeContent.js":
/*!****************************!*\
  !*** ./src/homeContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeContent: () => (/* binding */ homeContent)
/* harmony export */ });
function homeContent() {
  const content = document.createElement("div");
  content.classList.add("content");

  const review = reviewComponent();
  const hours = hoursComponent();
  const location = locationComponent();

  content.appendChild(review);
  content.appendChild(hours);
  content.appendChild(location);

  return content;
}
function reviewComponent() {
  const review = document.createElement("div");
  review.classList.add("card", "review", "home");

  const header = document.createElement("h2");
  header.textContent = "Review";

  const quote = document.createElement("p");
  quote.textContent =
    '"Chloe is the nicest restaurant owner I have ever met, and her husband is so nice! Awesome matcha, delicious noodles - this is my favorite cafe in Berlin!"';

  const credit = document.createElement("h4");
  credit.textContent = "Matthias Rossini";

  review.appendChild(header);
  review.appendChild(quote);
  review.appendChild(credit);

  return review;
}
function hoursComponent() {
  const hours = document.createElement("div");
  hours.classList.add("card", "hours", "home");

  const header = document.createElement("h2");
  header.textContent = "Hours";

  const monday = document.createElement("p");
  monday.textContent = "Monday: 10am - 8pm";

  const tuesday = document.createElement("p");
  tuesday.textContent = "Tuesday: 10am - 8pm";

  const wednesday = document.createElement("p");
  wednesday.textContent = "Wednesday: 10am - 8pm";

  const thursday = document.createElement("p");
  thursday.textContent = "Thursday: 10am - 8pm";

  const friday = document.createElement("p");
  friday.textContent = "Friday: 10am - 8pm";

  const saturday = document.createElement("p");
  saturday.textContent = "Saturday: 10am - 8pm";

  const sunday = document.createElement("p");
  sunday.textContent = "Sunday: 10am - 8pm";

  hours.appendChild(header);
  hours.appendChild(monday);
  hours.appendChild(tuesday);
  hours.appendChild(wednesday);
  hours.appendChild(thursday);
  hours.appendChild(friday);
  hours.appendChild(saturday);
  hours.appendChild(sunday);

  return hours;
}
function locationComponent() {
  const location = document.createElement("div");
  location.classList.add("card", "location", "home");

  const header = document.createElement("h2");
  header.textContent = "Location";

  const address = document.createElement("p");
  address.textContent = "Hauptstrasse 50, Berlin, Germany";

  location.appendChild(header);
  location.appendChild(address);

  return location;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   main: () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _logo_transparent_horizontal_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo-transparent-horizontal.png */ "./src/logo-transparent-horizontal.png");
/* harmony import */ var _homeContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeContent */ "./src/homeContent.js");
/* harmony import */ var _addListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addListeners */ "./src/addListeners.js");





document.querySelector('img').src = _logo_transparent_horizontal_png__WEBPACK_IMPORTED_MODULE_1__;

const main = document.getElementById('mainbg');
main.appendChild((0,_homeContent__WEBPACK_IMPORTED_MODULE_2__.homeContent)());

(0,_addListeners__WEBPACK_IMPORTED_MODULE_3__.addListeners)();

/***/ }),

/***/ "./src/menuContent.js":
/*!****************************!*\
  !*** ./src/menuContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuContent: () => (/* binding */ menuContent)
/* harmony export */ });
function menuContent() {
  const matchaDesc = 'A delicious pairing of our ceremonial-grade matcha and steamed milk. Available hot or iced.';
  const teaDesc = 'A wonderfully refreshing iced tea with lemongrass, honey, lime, and sugarcane.';
  const dayDishDesc = 'Savory, filling udon noodles with chicken soup and pork dumplings. Served with rice and a dill chili soy dipping sauce.';
  const greatDishDesc = 'Oh my gosh it is so delicious seriously you have to try it. Trust me bro.';
  const iceCreamDesc = 'For dessert, we have a variety of ice cream flavors. Vanilla, Chocolate, Strawberry, Cookies and Cream, Chocolate Chip Cookie Dough, and Blueberry Walnut Pie.';

  const content = document.createElement('div');
  content.classList.add('content');

  const drinksDivider = createDivider('Drinks');
  const mainsDivider = createDivider('Mains');
  const dessertDivider = createDivider('Dessert');

  const matcha = createItem('Matcha Latte', matchaDesc, '5€');
  const tea = createItem('Lemongrass Honey Tea', teaDesc, '5€');

  const dayDish = createItem("Chloé's Dish of the Day", dayDishDesc, '5€');
  const greatDish = createItem('Something Great', greatDishDesc, '5€');

  const iceCream = createItem('Ice cream', iceCreamDesc, '5€');

  content.appendChild(drinksDivider);
  content.appendChild(matcha);
  content.appendChild(tea);

  content.appendChild(mainsDivider);
  content.appendChild(dayDish);
  content.appendChild(greatDish);

  content.appendChild(dessertDivider);
  content.appendChild(iceCream);

  return content;
}
function createDivider(title) {
  const divider = document.createElement('div');
  divider.classList.add('card', 'divider');

  const header = document.createElement('h1');
  header.textContent = title;
  divider.appendChild(header);

  return divider;
}
function createItem(name, description, price) {
  const item = document.createElement('div');
  item.classList.add('card', 'item');

  const h3 = document.createElement('h3');
  h3.textContent = name;
  item.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = description;
  item.appendChild(p);

  const h4 = document.createElement('h4');
  h4.textContent = price;
  item.appendChild(h4);

  return item;
}


/***/ }),

/***/ "./src/content-background.jpg":
/*!************************************!*\
  !*** ./src/content-background.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b867970951e710bf26a0.jpg";

/***/ }),

/***/ "./src/fonts/allison-webfont.woff":
/*!****************************************!*\
  !*** ./src/fonts/allison-webfont.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dba22083a010fa29316c.woff";

/***/ }),

/***/ "./src/fonts/allison-webfont.woff2":
/*!*****************************************!*\
  !*** ./src/fonts/allison-webfont.woff2 ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c26422243aa6b54fef43.woff2";

/***/ }),

/***/ "./src/logo-transparent-horizontal.png":
/*!*********************************************!*\
  !*** ./src/logo-transparent-horizontal.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b03cfa50405b7118e71d.png";

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2FkZExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3RDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnVDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2FsbGlzb24td2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvYWxsaXNvbi13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJjb250ZW50LWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1zbGF0ZS1ncmF5OiBoc2xhKDE5NCwgMTUlLCA1MSUsIDEpO1xuICAtLXNpbHZlcjogaHNsYSgyMDQsIDMlLCA2OCUsIDEpO1xuICAtLWRhcmstbW9zcy1ncmVlbjogaHNsYSg4MCwgNDAlLCAyMSUsIDEpO1xuICAtLWxpZ2h0LW1vc3MtZ3JlZW46IHJnYig5NiwgMTMxLCA2Nyk7XG4gIC0tdGltYmVyd29sZjogaHNsYSgzNywgMTYlLCA4NSUsIDEpO1xuICAtLXRpbWJlcndvbGYtdHJhbnM6IGhzbGEoMzcsIDE2JSwgODUlLCAuODUpO1xuICAtLWxpY29yaWNlOiBoc2xhKDksIDExJSwgMTIlLCAxKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnYWxsaXNvbnJlZ3VsYXInO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogN3JlbSAxZnI7XG59XG5cbmhlYWRlcntcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW1vc3MtZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tdGltYmVyd29sZik7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3cmVtO1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG5cbm5hdiBpbWcge1xuICBncmlkLXJvdzogMSAvIC0xO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMjByZW07XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxubmF2IGltZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiA1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbW9zcy1ncmVlbik7XG4gIGNvbG9yOiB2YXIoLS10aW1iZXJ3b2xmKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDJyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCB2YXIoLS10aW1iZXJ3b2xmKTsgLyogQWRkIHRoaXMgbGluZSAqL1xufVxuXG4jbWFpbmJnIHtcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgY29sb3I6IHZhcigtLWxpY29yaWNlKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDFmciA0cmVtO1xufVxuXG4uY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbWJlcndvbGYtdHJhbnMpO1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZGlzcGxheTogZmxleDsgLyogQ2hhbmdlIHRoaXMgbGluZSAqL1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBBZGQgdGhpcyBsaW5lICovXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgLyogQ2hhbmdlIHRoaXMgbGluZSAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBBZGQgdGhpcyBsaW5lICovXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBBZGQgdGhpcyBsaW5lICovXG4gIHBhZGRpbmc6IDFyZW07IC8qIEFkZCB0aGlzIGxpbmUgKi9cbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1tb3NzLWdyZWVuKTtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS10aW1iZXJ3b2xmKTtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgd2lkdGg6IDEwMCU7IC8qIEFkZCB0aGlzIGxpbmUgKi9cbiAgbWF4LXdpZHRoOiA4MDBweDsgLyogQWRkIHRoaXMgbGluZSAqL1xufVxuXG4uY2FyZCBoMntcbiAgZm9udC1mYW1pbHk6ICdhbGxpc29ucmVndWxhcic7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG5cbi5ob21lIHtcbiAgcGFkZGluZzogMXJlbSAwIDJyZW0gMDtcbn1cblxuLnJldmlldyBwIHtcbiAgbWF4LXdpZHRoOiA3NSU7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTEuM3JlbTtcbn1cblxuLnJldmlldyB7XG4gIGp1c3RpZnktY29udGVudDogYmFzZWxpbmU7XG4gIGdhcDogMnJlbTtcbn1cblxuLmhvdXJzIHtcbiAgbWFyZ2luOiAwO1xuICBnYXA6IC42cmVtO1xufVxuXG4ubG9jYXRpb24ge1xuICBnYXA6IC41cmVtO1xufVxuXG4uZGl2aWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogNHJlbSAwIC0xcmVtIDA7XG4gIGZvbnQtZmFtaWx5OiAnYWxsaXNvbnJlZ3VsYXInO1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogQWRkIHRoaXMgbGluZSAqL1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDc1JSA1MCUsIDEwMCUgMTAwJSwgMCAxMDAlLCAyNSUgNTAlKTsgLyogQWRkIHRoaXMgbGluZSAqL1xufVxuXG4uaXRlbSB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0uNXJlbTtcbn1cblxuLml0ZW06bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cbi5jb250YWN0e1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuLmNvbnRhY3Q6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luOiAzcmVtIDAgLTFyZW0gMDtcbn1cblxuLmNvbnRhY3QgaDMge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDFyZW0gMHJlbSAtMXJlbSAzcmVtO1xuICBmb250LXNpemU6IDEuN3JlbTtcbn1cblxuLmNvbnRhY3QgcCB7XG4gIG1hcmdpbjogMXJlbSAwcmVtIC0xLjVyZW0gNHJlbTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5jb250YWN0IHA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLCtCQUErQjtFQUMvQix3Q0FBd0M7RUFDeEMsb0NBQW9DO0VBQ3BDLG1DQUFtQztFQUNuQywyQ0FBMkM7RUFD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IHtcXG4gIC0tc2xhdGUtZ3JheTogaHNsYSgxOTQsIDE1JSwgNTElLCAxKTtcXG4gIC0tc2lsdmVyOiBoc2xhKDIwNCwgMyUsIDY4JSwgMSk7XFxuICAtLWRhcmstbW9zcy1ncmVlbjogaHNsYSg4MCwgNDAlLCAyMSUsIDEpO1xcbiAgLS1saWdodC1tb3NzLWdyZWVuOiByZ2IoOTYsIDEzMSwgNjcpO1xcbiAgLS10aW1iZXJ3b2xmOiBoc2xhKDM3LCAxNiUsIDg1JSwgMSk7XFxuICAtLXRpbWJlcndvbGYtdHJhbnM6IGhzbGEoMzcsIDE2JSwgODUlLCAuODUpO1xcbiAgLS1saWNvcmljZTogaHNsYSg5LCAxMSUsIDEyJSwgMSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdhbGxpc29ucmVndWxhcic7XFxuICBzcmM6IHVybCgnLi9mb250cy9hbGxpc29uLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgIHVybCgnLi9mb250cy9hbGxpc29uLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogN3JlbSAxZnI7XFxufVxcblxcbmhlYWRlcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW1vc3MtZ3JlZW4pO1xcbiAgY29sb3I6IHZhcigtLXRpbWJlcndvbGYpO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3cmVtO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxubmF2IGltZyB7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5uYXYgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ1dHRvbi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbW9zcy1ncmVlbik7XFxuICBjb2xvcjogdmFyKC0tdGltYmVyd29sZik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgdmFyKC0tdGltYmVyd29sZik7IC8qIEFkZCB0aGlzIGxpbmUgKi9cXG59XFxuXFxuI21haW5iZyB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2NvbnRlbnQtYmFja2dyb3VuZC5qcGcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgY29sb3I6IHZhcigtLWxpY29yaWNlKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDRyZW0gMWZyIDRyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbWJlcndvbGYtdHJhbnMpO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7IC8qIENoYW5nZSB0aGlzIGxpbmUgKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIEFkZCB0aGlzIGxpbmUgKi9cXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgLyogQ2hhbmdlIHRoaXMgbGluZSAqL1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQWRkIHRoaXMgbGluZSAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEFkZCB0aGlzIGxpbmUgKi9cXG4gIHBhZGRpbmc6IDFyZW07IC8qIEFkZCB0aGlzIGxpbmUgKi9cXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtbW9zcy1ncmVlbik7XFxuICBtYXJnaW46IDJyZW0gMDtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS10aW1iZXJ3b2xmKTtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEFkZCB0aGlzIGxpbmUgKi9cXG4gIG1heC13aWR0aDogODAwcHg7IC8qIEFkZCB0aGlzIGxpbmUgKi9cXG59XFxuXFxuLmNhcmQgaDJ7XFxuICBmb250LWZhbWlseTogJ2FsbGlzb25yZWd1bGFyJztcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuLmhvbWUge1xcbiAgcGFkZGluZzogMXJlbSAwIDJyZW0gMDtcXG59XFxuXFxuLnJldmlldyBwIHtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW4tdG9wOiAtMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IC0xLjNyZW07XFxufVxcblxcbi5yZXZpZXcge1xcbiAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLmhvdXJzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGdhcDogLjZyZW07XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uZGl2aWRlciB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogNHJlbSAwIC0xcmVtIDA7XFxuICBmb250LWZhbWlseTogJ2FsbGlzb25yZWd1bGFyJztcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEFkZCB0aGlzIGxpbmUgKi9cXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgNzUlIDUwJSwgMTAwJSAxMDAlLCAwIDEwMCUsIDI1JSA1MCUpOyAvKiBBZGQgdGhpcyBsaW5lICovXFxufVxcblxcbi5pdGVtIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLS41cmVtO1xcbn1cXG5cXG4uaXRlbTpsYXN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuLmNvbnRhY3R7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG4uY29udGFjdDpudGgtY2hpbGQoMikge1xcbiAgbWFyZ2luOiAzcmVtIDAgLTFyZW0gMDtcXG59XFxuXFxuLmNvbnRhY3QgaDMge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIG1hcmdpbjogMXJlbSAwcmVtIC0xcmVtIDNyZW07XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLmNvbnRhY3QgcCB7XFxuICBtYXJnaW46IDFyZW0gMHJlbSAtMS41cmVtIDRyZW07XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5jb250YWN0IHA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBob21lQ29udGVudCB9IGZyb20gJy4vaG9tZUNvbnRlbnQnO1xuaW1wb3J0IHsgbWVudUNvbnRlbnQgfSBmcm9tICcuL21lbnVDb250ZW50JztcbmltcG9ydCB7IGNvbnRhY3RDb250ZW50IH0gZnJvbSAnLi9jb250YWN0Q29udGVudCc7XG5pbXBvcnQgeyBtYWluIH0gZnJvbSAnLic7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG4gIFxuICBmdW5jdGlvbiBwcmludEhvbWUoKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChob21lQ29udGVudCgpKTtcbiAgfVxuICBmdW5jdGlvbiBwcmludE1lbnUoKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGVudCgpKTtcbiAgfVxuICBmdW5jdGlvbiBwcmludENvbnRhY3QoKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudCgpKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gIH1cbiAgXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJpbnRIb21lKTtcbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByaW50SG9tZSk7XG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmludE1lbnUpO1xuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJpbnRDb250YWN0KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjb250YWN0Q29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdmlkZXIuY2xhc3NMaXN0LmFkZCgnY2FyZCcsICdkaXZpZGVyJyk7XG5cbiAgY29uc3QgZGl2aWRlckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGRpdmlkZXJIZWFkZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcydcbiAgZGl2aWRlci5hcHBlbmRDaGlsZChkaXZpZGVySGVhZGVyKTtcblxuICBjb25zdCBjaGxvZSA9IGNvbnRhY3RDYXJkKCdDaGxvZScsICdWaXNpb25hcnknLCAnMTIzLTQ1Ni03ODkwJywgJ2JhZGJpdGNoQGNobG9lY2FmZS5jb20nKTtcbiAgY29uc3Qgam9obiA9IGNvbnRhY3RDYXJkKCdKb2hubnknLCAnTWFuYWdlcicsICcxMjMtNDU2LTc4OTEnLCAnZmFjaWxpdGF0b3JAY2hsb2VjYWZlLmNvbScpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hsb2UpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGpvaG4pO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuZnVuY3Rpb24gY29udGFjdENhcmQobmFtZVRleHQsIHJvbGVUZXh0LCBudW1UZXh0LCBlbWFpbFRleHQpIHtcbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCAnY29udGFjdCcpO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBuYW1lLnRleHRDb250ZW50ID0gbmFtZVRleHQ7XG5cbiAgY29uc3Qgcm9sZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcm9sZS50ZXh0Q29udGVudCA9IHJvbGVUZXh0O1xuXG4gIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbnVtYmVyLnRleHRDb250ZW50ID0gbnVtVGV4dDtcblxuICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZW1haWwudGV4dENvbnRlbnQgPSBlbWFpbFRleHQ7XG5cbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChyb2xlKTtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChudW1iZXIpO1xuICBpbmZvRGl2LmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICByZXR1cm4gaW5mb0Rpdjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBob21lQ29udGVudCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cbiAgY29uc3QgcmV2aWV3ID0gcmV2aWV3Q29tcG9uZW50KCk7XG4gIGNvbnN0IGhvdXJzID0gaG91cnNDb21wb25lbnQoKTtcbiAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvbkNvbXBvbmVudCgpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmV2aWV3KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChob3Vycyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuZnVuY3Rpb24gcmV2aWV3Q29tcG9uZW50KCkge1xuICBjb25zdCByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByZXZpZXcuY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJyZXZpZXdcIiwgXCJob21lXCIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJSZXZpZXdcIjtcblxuICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBxdW90ZS50ZXh0Q29udGVudCA9XG4gICAgJ1wiQ2hsb2UgaXMgdGhlIG5pY2VzdCByZXN0YXVyYW50IG93bmVyIEkgaGF2ZSBldmVyIG1ldCwgYW5kIGhlciBodXNiYW5kIGlzIHNvIG5pY2UhIEF3ZXNvbWUgbWF0Y2hhLCBkZWxpY2lvdXMgbm9vZGxlcyAtIHRoaXMgaXMgbXkgZmF2b3JpdGUgY2FmZSBpbiBCZXJsaW4hXCInO1xuXG4gIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY3JlZGl0LnRleHRDb250ZW50ID0gXCJNYXR0aGlhcyBSb3NzaW5pXCI7XG5cbiAgcmV2aWV3LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIHJldmlldy5hcHBlbmRDaGlsZChxdW90ZSk7XG4gIHJldmlldy5hcHBlbmRDaGlsZChjcmVkaXQpO1xuXG4gIHJldHVybiByZXZpZXc7XG59XG5mdW5jdGlvbiBob3Vyc0NvbXBvbmVudCgpIHtcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiLCBcImhvdXJzXCIsIFwiaG9tZVwiKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcblxuICBjb25zdCBtb25kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbW9uZGF5LnRleHRDb250ZW50ID0gXCJNb25kYXk6IDEwYW0gLSA4cG1cIjtcblxuICBjb25zdCB0dWVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHR1ZXNkYXkudGV4dENvbnRlbnQgPSBcIlR1ZXNkYXk6IDEwYW0gLSA4cG1cIjtcblxuICBjb25zdCB3ZWRuZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgd2VkbmVzZGF5LnRleHRDb250ZW50ID0gXCJXZWRuZXNkYXk6IDEwYW0gLSA4cG1cIjtcblxuICBjb25zdCB0aHVyc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0aHVyc2RheS50ZXh0Q29udGVudCA9IFwiVGh1cnNkYXk6IDEwYW0gLSA4cG1cIjtcblxuICBjb25zdCBmcmlkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZnJpZGF5LnRleHRDb250ZW50ID0gXCJGcmlkYXk6IDEwYW0gLSA4cG1cIjtcblxuICBjb25zdCBzYXR1cmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzYXR1cmRheS50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXk6IDEwYW0gLSA4cG1cIjtcblxuICBjb25zdCBzdW5kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc3VuZGF5LnRleHRDb250ZW50ID0gXCJTdW5kYXk6IDEwYW0gLSA4cG1cIjtcblxuICBob3Vycy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBob3Vycy5hcHBlbmRDaGlsZChtb25kYXkpO1xuICBob3Vycy5hcHBlbmRDaGlsZCh0dWVzZGF5KTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQod2VkbmVzZGF5KTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQodGh1cnNkYXkpO1xuICBob3Vycy5hcHBlbmRDaGlsZChmcmlkYXkpO1xuICBob3Vycy5hcHBlbmRDaGlsZChzYXR1cmRheSk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKHN1bmRheSk7XG5cbiAgcmV0dXJuIGhvdXJzO1xufVxuZnVuY3Rpb24gbG9jYXRpb25Db21wb25lbnQoKSB7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImNhcmRcIiwgXCJsb2NhdGlvblwiLCBcImhvbWVcIik7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCJIYXVwdHN0cmFzc2UgNTAsIEJlcmxpbiwgR2VybWFueVwiO1xuXG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIHJldHVybiBsb2NhdGlvbjtcbn1cbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vbG9nby10cmFuc3BhcmVudC1ob3Jpem9udGFsLnBuZyc7XG5pbXBvcnQgeyBob21lQ29udGVudCB9IGZyb20gJy4vaG9tZUNvbnRlbnQnO1xuaW1wb3J0IHsgYWRkTGlzdGVuZXJzIH0gZnJvbSAnLi9hZGRMaXN0ZW5lcnMnO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBMb2dvO1xuXG5leHBvcnQgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluYmcnKTtcbm1haW4uYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQoKSk7XG5cbmFkZExpc3RlbmVycygpOyIsImV4cG9ydCBmdW5jdGlvbiBtZW51Q29udGVudCgpIHtcbiAgY29uc3QgbWF0Y2hhRGVzYyA9ICdBIGRlbGljaW91cyBwYWlyaW5nIG9mIG91ciBjZXJlbW9uaWFsLWdyYWRlIG1hdGNoYSBhbmQgc3RlYW1lZCBtaWxrLiBBdmFpbGFibGUgaG90IG9yIGljZWQuJztcbiAgY29uc3QgdGVhRGVzYyA9ICdBIHdvbmRlcmZ1bGx5IHJlZnJlc2hpbmcgaWNlZCB0ZWEgd2l0aCBsZW1vbmdyYXNzLCBob25leSwgbGltZSwgYW5kIHN1Z2FyY2FuZS4nO1xuICBjb25zdCBkYXlEaXNoRGVzYyA9ICdTYXZvcnksIGZpbGxpbmcgdWRvbiBub29kbGVzIHdpdGggY2hpY2tlbiBzb3VwIGFuZCBwb3JrIGR1bXBsaW5ncy4gU2VydmVkIHdpdGggcmljZSBhbmQgYSBkaWxsIGNoaWxpIHNveSBkaXBwaW5nIHNhdWNlLic7XG4gIGNvbnN0IGdyZWF0RGlzaERlc2MgPSAnT2ggbXkgZ29zaCBpdCBpcyBzbyBkZWxpY2lvdXMgc2VyaW91c2x5IHlvdSBoYXZlIHRvIHRyeSBpdC4gVHJ1c3QgbWUgYnJvLic7XG4gIGNvbnN0IGljZUNyZWFtRGVzYyA9ICdGb3IgZGVzc2VydCwgd2UgaGF2ZSBhIHZhcmlldHkgb2YgaWNlIGNyZWFtIGZsYXZvcnMuIFZhbmlsbGEsIENob2NvbGF0ZSwgU3RyYXdiZXJyeSwgQ29va2llcyBhbmQgQ3JlYW0sIENob2NvbGF0ZSBDaGlwIENvb2tpZSBEb3VnaCwgYW5kIEJsdWViZXJyeSBXYWxudXQgUGllLic7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBkcmlua3NEaXZpZGVyID0gY3JlYXRlRGl2aWRlcignRHJpbmtzJyk7XG4gIGNvbnN0IG1haW5zRGl2aWRlciA9IGNyZWF0ZURpdmlkZXIoJ01haW5zJyk7XG4gIGNvbnN0IGRlc3NlcnREaXZpZGVyID0gY3JlYXRlRGl2aWRlcignRGVzc2VydCcpO1xuXG4gIGNvbnN0IG1hdGNoYSA9IGNyZWF0ZUl0ZW0oJ01hdGNoYSBMYXR0ZScsIG1hdGNoYURlc2MsICc14oKsJyk7XG4gIGNvbnN0IHRlYSA9IGNyZWF0ZUl0ZW0oJ0xlbW9uZ3Jhc3MgSG9uZXkgVGVhJywgdGVhRGVzYywgJzXigqwnKTtcblxuICBjb25zdCBkYXlEaXNoID0gY3JlYXRlSXRlbShcIkNobG/DqSdzIERpc2ggb2YgdGhlIERheVwiLCBkYXlEaXNoRGVzYywgJzXigqwnKTtcbiAgY29uc3QgZ3JlYXREaXNoID0gY3JlYXRlSXRlbSgnU29tZXRoaW5nIEdyZWF0JywgZ3JlYXREaXNoRGVzYywgJzXigqwnKTtcblxuICBjb25zdCBpY2VDcmVhbSA9IGNyZWF0ZUl0ZW0oJ0ljZSBjcmVhbScsIGljZUNyZWFtRGVzYywgJzXigqwnKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGRyaW5rc0RpdmlkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1hdGNoYSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGVhKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5zRGl2aWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF5RGlzaCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ3JlYXREaXNoKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnREaXZpZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpY2VDcmVhbSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5mdW5jdGlvbiBjcmVhdGVEaXZpZGVyKHRpdGxlKSB7XG4gIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ2RpdmlkZXInKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgZGl2aWRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIHJldHVybiBkaXZpZGVyO1xufVxuZnVuY3Rpb24gY3JlYXRlSXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcbiAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCAnaXRlbScpO1xuXG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMudGV4dENvbnRlbnQgPSBuYW1lO1xuICBpdGVtLmFwcGVuZENoaWxkKGgzKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIGl0ZW0uYXBwZW5kQ2hpbGQocCk7XG5cbiAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBoNC50ZXh0Q29udGVudCA9IHByaWNlO1xuICBpdGVtLmFwcGVuZENoaWxkKGg0KTtcblxuICByZXR1cm4gaXRlbTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=