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
  const content = document.createElement('div');
  content.classList.add('content');

  const review = reviewComponent();
  const hours = hoursComponent();
  const location = locationComponent();

  content.appendChild(review);
  content.appendChild(hours);
  content.appendChild(location);

  return content;
}
function reviewComponent() {
  const review = document.createElement('div');
  review.classList.add('card', 'review', 'home');

  const header = document.createElement('h2');
  header.textContent = 'Review';

  const quote = document.createElement('p');
  quote.textContent = '"Chloe is the nicest restaurant owner I have ever met, and her husband is so handsome! Awesome matcha, delicious noodles - this is my favorite cafe in Berlin!"';

  const credit = document.createElement('h4');
  credit.textContent = 'Matthias Rossini';

  review.appendChild(header);
  review.appendChild(quote);
  review.appendChild(credit);

  return review;
}
function hoursComponent() {
  const hours = document.createElement('div');
  hours.classList.add('card', 'hours', 'home');

  const header = document.createElement('h2');
  header.textContent = 'Hours';

  const monday = document.createElement('p');
  monday.textContent = 'Monday: 10am - 8pm';

  const tuesday = document.createElement('p');
  tuesday.textContent = 'Tuesday: 10am - 8pm';

  const wednesday = document.createElement('p');
  wednesday.textContent = 'Wednesday: 10am - 8pm';

  const thursday = document.createElement('p');
  thursday.textContent = 'Thursday: 10am - 8pm';

  const friday = document.createElement('p');
  friday.textContent = 'Friday: 10am - 8pm';

  const saturday = document.createElement('p');
  saturday.textContent = 'Saturday: 10am - 8pm';

  const sunday = document.createElement('p');
  sunday.textContent = 'Sunday: 10am - 8pm';

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
  const location = document.createElement('div');
  location.classList.add('card', 'location', 'home');

  const header = document.createElement('h2');
  header.textContent = 'Location';

  const address = document.createElement('p');
  address.textContent = 'Hauptstrasse 50, Berlin, Germany';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hZGRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0Q29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWVDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51Q29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9hbGxpc29uLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2FsbGlzb24td2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiY29udGVudC1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tc2xhdGUtZ3JheTogaHNsYSgxOTQsIDE1JSwgNTElLCAxKTtcbiAgLS1zaWx2ZXI6IGhzbGEoMjA0LCAzJSwgNjglLCAxKTtcbiAgLS1kYXJrLW1vc3MtZ3JlZW46IGhzbGEoODAsIDQwJSwgMjElLCAxKTtcbiAgLS1saWdodC1tb3NzLWdyZWVuOiByZ2IoOTYsIDEzMSwgNjcpO1xuICAtLXRpbWJlcndvbGY6IGhzbGEoMzcsIDE2JSwgODUlLCAxKTtcbiAgLS10aW1iZXJ3b2xmLXRyYW5zOiBoc2xhKDM3LCAxNiUsIDg1JSwgLjg1KTtcbiAgLS1saWNvcmljZTogaHNsYSg5LCAxMSUsIDEyJSwgMSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2FsbGlzb25yZWd1bGFyJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDdyZW0gMWZyO1xufVxuXG5oZWFkZXJ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1tb3NzLWdyZWVuKTtcbiAgY29sb3I6IHZhcigtLXRpbWJlcndvbGYpO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3JlbTtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xufVxuXG5uYXYgaW1nIHtcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbm5hdiBpbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtcm93OiAxIC8gLTE7XG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gIGdhcDogNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW1vc3MtZ3JlZW4pO1xuICBjb2xvcjogdmFyKC0tdGltYmVyd29sZik7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuXG5idXR0b246aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgdmFyKC0tdGltYmVyd29sZik7IC8qIEFkZCB0aGlzIGxpbmUgKi9cbn1cblxuI21haW5iZyB7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGNvbG9yOiB2YXIoLS1saWNvcmljZSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSAxZnIgNHJlbTtcbn1cblxuLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aW1iZXJ3b2xmLXRyYW5zKTtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7IC8qIENoYW5nZSB0aGlzIGxpbmUgKi9cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogQWRkIHRoaXMgbGluZSAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8qIENoYW5nZSB0aGlzIGxpbmUgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQWRkIHRoaXMgbGluZSAqL1xuICBvdmVyZmxvdzogYXV0bzsgLyogQWRkIHRoaXMgbGluZSAqL1xuICBwYWRkaW5nOiAxcmVtOyAvKiBBZGQgdGhpcyBsaW5lICovXG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtbW9zcy1ncmVlbik7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBjb2xvcjogdmFyKC0tdGltYmVyd29sZik7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHdpZHRoOiAxMDAlOyAvKiBBZGQgdGhpcyBsaW5lICovXG4gIG1heC13aWR0aDogODAwcHg7IC8qIEFkZCB0aGlzIGxpbmUgKi9cbn1cblxuLmNhcmQgaDJ7XG4gIGZvbnQtZmFtaWx5OiAnYWxsaXNvbnJlZ3VsYXInO1xuICBmb250LXNpemU6IDNyZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG4uaG9tZSB7XG4gIHBhZGRpbmc6IDFyZW0gMCAycmVtIDA7XG59XG5cbi5yZXZpZXcgcCB7XG4gIG1heC13aWR0aDogNzUlO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWFyZ2luLXRvcDogLTFyZW07XG4gIG1hcmdpbi1ib3R0b206IC0xLjNyZW07XG59XG5cbi5yZXZpZXcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xuICBnYXA6IDJyZW07XG59XG5cbi5ob3VycyB7XG4gIG1hcmdpbjogMDtcbiAgZ2FwOiAuNnJlbTtcbn1cblxuLmxvY2F0aW9uIHtcbiAgZ2FwOiAuNXJlbTtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDRyZW0gMCAtMXJlbSAwO1xuICBmb250LWZhbWlseTogJ2FsbGlzb25yZWd1bGFyJztcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEFkZCB0aGlzIGxpbmUgKi9cbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCA3NSUgNTAlLCAxMDAlIDEwMCUsIDAgMTAwJSwgMjUlIDUwJSk7IC8qIEFkZCB0aGlzIGxpbmUgKi9cbn1cblxuLml0ZW0ge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtLjVyZW07XG59XG5cbi5pdGVtOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG4uY29udGFjdHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cbi5jb250YWN0Om50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbjogM3JlbSAwIC0xcmVtIDA7XG59XG5cbi5jb250YWN0IGgzIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAxcmVtIDByZW0gLTFyZW0gM3JlbTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5jb250YWN0IHAge1xuICBtYXJnaW46IDFyZW0gMHJlbSAtMS41cmVtIDRyZW07XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4uY29udGFjdCBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0Isd0NBQXdDO0VBQ3hDLG9DQUFvQztFQUNwQyxtQ0FBbUM7RUFDbkMsMkNBQTJDO0VBQzNDLGdD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ICAtLXNsYXRlLWdyYXk6IGhzbGEoMTk0LCAxNSUsIDUxJSwgMSk7XFxuICAtLXNpbHZlcjogaHNsYSgyMDQsIDMlLCA2OCUsIDEpO1xcbiAgLS1kYXJrLW1vc3MtZ3JlZW46IGhzbGEoODAsIDQwJSwgMjElLCAxKTtcXG4gIC0tbGlnaHQtbW9zcy1ncmVlbjogcmdiKDk2LCAxMzEsIDY3KTtcXG4gIC0tdGltYmVyd29sZjogaHNsYSgzNywgMTYlLCA4NSUsIDEpO1xcbiAgLS10aW1iZXJ3b2xmLXRyYW5zOiBoc2xhKDM3LCAxNiUsIDg1JSwgLjg1KTtcXG4gIC0tbGljb3JpY2U6IGhzbGEoOSwgMTElLCAxMiUsIDEpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnYWxsaXNvbnJlZ3VsYXInO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvYWxsaXNvbi13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICB1cmwoJy4vZm9udHMvYWxsaXNvbi13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDdyZW0gMWZyO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1tb3NzLWdyZWVuKTtcXG4gIGNvbG9yOiB2YXIoLS10aW1iZXJ3b2xmKTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogN3JlbTtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbm5hdiBpbWcge1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxubmF2IGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idXR0b24td3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBnYXA6IDVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW1vc3MtZ3JlZW4pO1xcbiAgY29sb3I6IHZhcigtLXRpbWJlcndvbGYpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwIHZhcigtLXRpbWJlcndvbGYpOyAvKiBBZGQgdGhpcyBsaW5lICovXFxufVxcblxcbiNtYWluYmcge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdjb250ZW50LWJhY2tncm91bmQuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGNvbG9yOiB2YXIoLS1saWNvcmljZSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0cmVtIDFmciA0cmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aW1iZXJ3b2xmLXRyYW5zKTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4OyAvKiBDaGFuZ2UgdGhpcyBsaW5lICovXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBBZGQgdGhpcyBsaW5lICovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IC8qIENoYW5nZSB0aGlzIGxpbmUgKi9cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIEFkZCB0aGlzIGxpbmUgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBBZGQgdGhpcyBsaW5lICovXFxuICBwYWRkaW5nOiAxcmVtOyAvKiBBZGQgdGhpcyBsaW5lICovXFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW1vc3MtZ3JlZW4pO1xcbiAgbWFyZ2luOiAycmVtIDA7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBjb2xvcjogdmFyKC0tdGltYmVyd29sZik7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHdpZHRoOiAxMDAlOyAvKiBBZGQgdGhpcyBsaW5lICovXFxuICBtYXgtd2lkdGg6IDgwMHB4OyAvKiBBZGQgdGhpcyBsaW5lICovXFxufVxcblxcbi5jYXJkIGgye1xcbiAgZm9udC1mYW1pbHk6ICdhbGxpc29ucmVndWxhcic7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcblxcbi5ob21lIHtcXG4gIHBhZGRpbmc6IDFyZW0gMCAycmVtIDA7XFxufVxcblxcbi5yZXZpZXcgcCB7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luLXRvcDogLTFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAtMS4zcmVtO1xcbn1cXG5cXG4ucmV2aWV3IHtcXG4gIGp1c3RpZnktY29udGVudDogYmFzZWxpbmU7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5ob3VycyB7XFxuICBtYXJnaW46IDA7XFxuICBnYXA6IC42cmVtO1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDRyZW0gMCAtMXJlbSAwO1xcbiAgZm9udC1mYW1pbHk6ICdhbGxpc29ucmVndWxhcic7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBZGQgdGhpcyBsaW5lICovXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDc1JSA1MCUsIDEwMCUgMTAwJSwgMCAxMDAlLCAyNSUgNTAlKTsgLyogQWRkIHRoaXMgbGluZSAqL1xcbn1cXG5cXG4uaXRlbSB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IC0uNXJlbTtcXG59XFxuXFxuLml0ZW06bGFzdC1vZi10eXBlIHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcbi5jb250YWN0e1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG59XFxuLmNvbnRhY3Q6bnRoLWNoaWxkKDIpIHtcXG4gIG1hcmdpbjogM3JlbSAwIC0xcmVtIDA7XFxufVxcblxcbi5jb250YWN0IGgzIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDFyZW0gMHJlbSAtMXJlbSAzcmVtO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5jb250YWN0IHAge1xcbiAgbWFyZ2luOiAxcmVtIDByZW0gLTEuNXJlbSA0cmVtO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uY29udGFjdCBwOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaG9tZUNvbnRlbnQgfSBmcm9tICcuL2hvbWVDb250ZW50JztcbmltcG9ydCB7IG1lbnVDb250ZW50IH0gZnJvbSAnLi9tZW51Q29udGVudCc7XG5pbXBvcnQgeyBjb250YWN0Q29udGVudCB9IGZyb20gJy4vY29udGFjdENvbnRlbnQnO1xuaW1wb3J0IHsgbWFpbiB9IGZyb20gJy4nO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xuICBcbiAgZnVuY3Rpb24gcHJpbnRIb21lKCkge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQoKSk7XG4gIH1cbiAgZnVuY3Rpb24gcHJpbnRNZW51KCkge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQoKSk7XG4gIH1cbiAgZnVuY3Rpb24gcHJpbnRDb250YWN0KCkge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnQoKSk7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICB9XG4gIFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByaW50SG9tZSk7XG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmludEhvbWUpO1xuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJpbnRNZW51KTtcbiAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByaW50Q29udGFjdCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY29udGFjdENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCAnZGl2aWRlcicpO1xuXG4gIGNvbnN0IGRpdmlkZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBkaXZpZGVySGVhZGVyLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnXG4gIGRpdmlkZXIuYXBwZW5kQ2hpbGQoZGl2aWRlckhlYWRlcik7XG5cbiAgY29uc3QgY2hsb2UgPSBjb250YWN0Q2FyZCgnQ2hsb2UnLCAnVmlzaW9uYXJ5JywgJzEyMy00NTYtNzg5MCcsICdiYWRiaXRjaEBjaGxvZWNhZmUuY29tJyk7XG4gIGNvbnN0IGpvaG4gPSBjb250YWN0Q2FyZCgnSm9obm55JywgJ01hbmFnZXInLCAnMTIzLTQ1Ni03ODkxJywgJ2ZhY2lsaXRhdG9yQGNobG9lY2FmZS5jb20nKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGRpdmlkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNobG9lKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChqb2huKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cbmZ1bmN0aW9uIGNvbnRhY3RDYXJkKG5hbWVUZXh0LCByb2xlVGV4dCwgbnVtVGV4dCwgZW1haWxUZXh0KSB7XG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ2NvbnRhY3QnKTtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IG5hbWVUZXh0O1xuXG4gIGNvbnN0IHJvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHJvbGUudGV4dENvbnRlbnQgPSByb2xlVGV4dDtcblxuICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG51bWJlci50ZXh0Q29udGVudCA9IG51bVRleHQ7XG5cbiAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGVtYWlsLnRleHRDb250ZW50ID0gZW1haWxUZXh0O1xuXG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQocm9sZSk7XG4gIGluZm9EaXYuYXBwZW5kQ2hpbGQobnVtYmVyKTtcbiAgaW5mb0Rpdi5hcHBlbmRDaGlsZChlbWFpbCk7XG5cbiAgcmV0dXJuIGluZm9EaXY7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaG9tZUNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgcmV2aWV3ID0gcmV2aWV3Q29tcG9uZW50KCk7XG4gIGNvbnN0IGhvdXJzID0gaG91cnNDb21wb25lbnQoKTtcbiAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvbkNvbXBvbmVudCgpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmV2aWV3KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChob3Vycyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuZnVuY3Rpb24gcmV2aWV3Q29tcG9uZW50KCkge1xuICBjb25zdCByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCAncmV2aWV3JywgJ2hvbWUnKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSAnUmV2aWV3JztcblxuICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcXVvdGUudGV4dENvbnRlbnQgPSAnXCJDaGxvZSBpcyB0aGUgbmljZXN0IHJlc3RhdXJhbnQgb3duZXIgSSBoYXZlIGV2ZXIgbWV0LCBhbmQgaGVyIGh1c2JhbmQgaXMgc28gaGFuZHNvbWUhIEF3ZXNvbWUgbWF0Y2hhLCBkZWxpY2lvdXMgbm9vZGxlcyAtIHRoaXMgaXMgbXkgZmF2b3JpdGUgY2FmZSBpbiBCZXJsaW4hXCInO1xuXG4gIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGNyZWRpdC50ZXh0Q29udGVudCA9ICdNYXR0aGlhcyBSb3NzaW5pJztcblxuICByZXZpZXcuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgcmV2aWV3LmFwcGVuZENoaWxkKHF1b3RlKTtcbiAgcmV2aWV3LmFwcGVuZENoaWxkKGNyZWRpdCk7XG5cbiAgcmV0dXJuIHJldmlldztcbn1cbmZ1bmN0aW9uIGhvdXJzQ29tcG9uZW50KCkge1xuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBob3Vycy5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ2hvdXJzJywgJ2hvbWUnKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuXG4gIGNvbnN0IG1vbmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbW9uZGF5LnRleHRDb250ZW50ID0gJ01vbmRheTogMTBhbSAtIDhwbSc7XG5cbiAgY29uc3QgdHVlc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdHVlc2RheS50ZXh0Q29udGVudCA9ICdUdWVzZGF5OiAxMGFtIC0gOHBtJztcblxuICBjb25zdCB3ZWRuZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdlZG5lc2RheS50ZXh0Q29udGVudCA9ICdXZWRuZXNkYXk6IDEwYW0gLSA4cG0nO1xuXG4gIGNvbnN0IHRodXJzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0aHVyc2RheS50ZXh0Q29udGVudCA9ICdUaHVyc2RheTogMTBhbSAtIDhwbSc7XG5cbiAgY29uc3QgZnJpZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmcmlkYXkudGV4dENvbnRlbnQgPSAnRnJpZGF5OiAxMGFtIC0gOHBtJztcblxuICBjb25zdCBzYXR1cmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc2F0dXJkYXkudGV4dENvbnRlbnQgPSAnU2F0dXJkYXk6IDEwYW0gLSA4cG0nO1xuXG4gIGNvbnN0IHN1bmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgc3VuZGF5LnRleHRDb250ZW50ID0gJ1N1bmRheTogMTBhbSAtIDhwbSc7XG5cbiAgaG91cnMuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQobW9uZGF5KTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQodHVlc2RheSk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKHdlZG5lc2RheSk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKHRodXJzZGF5KTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoZnJpZGF5KTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoc2F0dXJkYXkpO1xuICBob3Vycy5hcHBlbmRDaGlsZChzdW5kYXkpO1xuXG4gIHJldHVybiBob3Vycztcbn1cbmZ1bmN0aW9uIGxvY2F0aW9uQ29tcG9uZW50KCkge1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ2xvY2F0aW9uJywgJ2hvbWUnKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSAnTG9jYXRpb24nO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnSGF1cHRzdHJhc3NlIDUwLCBCZXJsaW4sIEdlcm1hbnknO1xuXG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGxvY2F0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIHJldHVybiBsb2NhdGlvbjtcbn1cbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vbG9nby10cmFuc3BhcmVudC1ob3Jpem9udGFsLnBuZyc7XG5pbXBvcnQgeyBob21lQ29udGVudCB9IGZyb20gJy4vaG9tZUNvbnRlbnQnO1xuaW1wb3J0IHsgYWRkTGlzdGVuZXJzIH0gZnJvbSAnLi9hZGRMaXN0ZW5lcnMnO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBMb2dvO1xuXG5leHBvcnQgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluYmcnKTtcbm1haW4uYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQoKSk7XG5cbmFkZExpc3RlbmVycygpOyIsImV4cG9ydCBmdW5jdGlvbiBtZW51Q29udGVudCgpIHtcbiAgY29uc3QgbWF0Y2hhRGVzYyA9ICdBIGRlbGljaW91cyBwYWlyaW5nIG9mIG91ciBjZXJlbW9uaWFsLWdyYWRlIG1hdGNoYSBhbmQgc3RlYW1lZCBtaWxrLiBBdmFpbGFibGUgaG90IG9yIGljZWQuJztcbiAgY29uc3QgdGVhRGVzYyA9ICdBIHdvbmRlcmZ1bGx5IHJlZnJlc2hpbmcgaWNlZCB0ZWEgd2l0aCBsZW1vbmdyYXNzLCBob25leSwgbGltZSwgYW5kIHN1Z2FyY2FuZS4nO1xuICBjb25zdCBkYXlEaXNoRGVzYyA9ICdTYXZvcnksIGZpbGxpbmcgdWRvbiBub29kbGVzIHdpdGggY2hpY2tlbiBzb3VwIGFuZCBwb3JrIGR1bXBsaW5ncy4gU2VydmVkIHdpdGggcmljZSBhbmQgYSBkaWxsIGNoaWxpIHNveSBkaXBwaW5nIHNhdWNlLic7XG4gIGNvbnN0IGdyZWF0RGlzaERlc2MgPSAnT2ggbXkgZ29zaCBpdCBpcyBzbyBkZWxpY2lvdXMgc2VyaW91c2x5IHlvdSBoYXZlIHRvIHRyeSBpdC4gVHJ1c3QgbWUgYnJvLic7XG4gIGNvbnN0IGljZUNyZWFtRGVzYyA9ICdGb3IgZGVzc2VydCwgd2UgaGF2ZSBhIHZhcmlldHkgb2YgaWNlIGNyZWFtIGZsYXZvcnMuIFZhbmlsbGEsIENob2NvbGF0ZSwgU3RyYXdiZXJyeSwgQ29va2llcyBhbmQgQ3JlYW0sIENob2NvbGF0ZSBDaGlwIENvb2tpZSBEb3VnaCwgYW5kIEJsdWViZXJyeSBXYWxudXQgUGllLic7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCBkcmlua3NEaXZpZGVyID0gY3JlYXRlRGl2aWRlcignRHJpbmtzJyk7XG4gIGNvbnN0IG1haW5zRGl2aWRlciA9IGNyZWF0ZURpdmlkZXIoJ01haW5zJyk7XG4gIGNvbnN0IGRlc3NlcnREaXZpZGVyID0gY3JlYXRlRGl2aWRlcignRGVzc2VydCcpO1xuXG4gIGNvbnN0IG1hdGNoYSA9IGNyZWF0ZUl0ZW0oJ01hdGNoYSBMYXR0ZScsIG1hdGNoYURlc2MsICc14oKsJyk7XG4gIGNvbnN0IHRlYSA9IGNyZWF0ZUl0ZW0oJ0xlbW9uZ3Jhc3MgSG9uZXkgVGVhJywgdGVhRGVzYywgJzXigqwnKTtcblxuICBjb25zdCBkYXlEaXNoID0gY3JlYXRlSXRlbShcIkNobG/DqSdzIERpc2ggb2YgdGhlIERheVwiLCBkYXlEaXNoRGVzYywgJzXigqwnKTtcbiAgY29uc3QgZ3JlYXREaXNoID0gY3JlYXRlSXRlbSgnU29tZXRoaW5nIEdyZWF0JywgZ3JlYXREaXNoRGVzYywgJzXigqwnKTtcblxuICBjb25zdCBpY2VDcmVhbSA9IGNyZWF0ZUl0ZW0oJ0ljZSBjcmVhbScsIGljZUNyZWFtRGVzYywgJzXigqwnKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGRyaW5rc0RpdmlkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1hdGNoYSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGVhKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5zRGl2aWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF5RGlzaCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ3JlYXREaXNoKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnREaXZpZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChpY2VDcmVhbSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5mdW5jdGlvbiBjcmVhdGVEaXZpZGVyKHRpdGxlKSB7XG4gIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2aWRlci5jbGFzc0xpc3QuYWRkKCdjYXJkJywgJ2RpdmlkZXInKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgZGl2aWRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIHJldHVybiBkaXZpZGVyO1xufVxuZnVuY3Rpb24gY3JlYXRlSXRlbShuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UpIHtcbiAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCAnaXRlbScpO1xuXG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMudGV4dENvbnRlbnQgPSBuYW1lO1xuICBpdGVtLmFwcGVuZENoaWxkKGgzKTtcblxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIGl0ZW0uYXBwZW5kQ2hpbGQocCk7XG5cbiAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBoNC50ZXh0Q29udGVudCA9IHByaWNlO1xuICBpdGVtLmFwcGVuZENoaWxkKGg0KTtcblxuICByZXR1cm4gaXRlbTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=