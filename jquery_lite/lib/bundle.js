/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);
let functionsArray = [];

window.$l = function (selector) {
  const elementsArray = [];
  if (selector instanceof HTMLElement) {
    elementsArray.push(selector);
    return new DOMNodeCollection(elementsArray);
  } else if (typeof selector === 'string' ){
      const nodeList = document.querySelectorAll(selector);
      const nodeArray = Array.prototype.slice.call(nodeList);
      return new DOMNodeCollection(nodeArray);
  } else if (selector instanceof Function) {
      functionsArray.push(selector);
  }
  document.addEventListener("DOMContentLoaded", function () {
    functionsArray.forEach(function(fxn) {
      fxn();
    });
  });
  if (document.readyState === "complete") {
    functionsArray.forEach(function (fxn) {
      fxn();
      functionsArray = [];
    });
  }
};

$l.extend = function (obj1, obj2, ...objects) {
  let result;
  if (true) {
    result = Object.assign({}, obj1, obj2, ...objects);
    return result;
  } else {
    result = Object.assign({}, obj1, obj2);
    return result;
  }
};

$l.ajax = function (options) {
  const defaults = {
    method: 'GET',
    url: "",
    success: () => {},
    error: () => {},
    data: {},
    contentType: ""
  };
  const args = Object.assign({}, defaults, options);
  const xhr = new XMLHttpRequest();
  xhr.open(args.method, args.url);
  xhr.onload = function() {
      if (xhr.status == 200) {
        args.success(xhr.response);
      }
      else {
         args.error(xhr.response);
      }
   };
   xhr.send();
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function DOMNodeCollection (array) {
  this.arr = array;
}

DOMNodeCollection.prototype.html = function (string = null) {
  if (string === null) {
    return this.arr[0].innerHTML;
  } else {
    this.arr.forEach(function (node) {
      node.innerHTML = string;
    });
  }
};

DOMNodeCollection.prototype.empty = function () {
  this.arr.forEach(function (node) {
    node.innerHTML = "";
  });
};

DOMNodeCollection.prototype.append = function (content) {
  this.arr.forEach(function(el) {
    el.innerHTML += content;
  });
};

DOMNodeCollection.prototype.attr = function (content, value = null) {
  if (value === null) {
    return this.arr[0].getAttribute(content);
  } else {
    this.arr.forEach((node) => {
      node.setAttribute(content, value); // why is this not returning
    });
    return this;
  }
};

DOMNodeCollection.prototype.addClass = function (name) {
  this.arr.forEach(function (node) {
    node.setAttribute("class", name);
  });
  return this.arr;
};

DOMNodeCollection.prototype.removeClass = function (name) {
  this.arr.forEach(function (node) {
    node.setAttribute("class", "");
  });
  return this.arr;
};

DOMNodeCollection.prototype.children = function () {
  const array = [];
  this.arr.forEach(function (node) {
    array.push(node.children);
  });
  return array;
};

DOMNodeCollection.prototype.parent = function () {
  const array = [];
  this.arr.forEach(function (node) {
    array.push(node.parentNode);
  });
  return array;
};

DOMNodeCollection.prototype.find = function (descendant) { //what gets passed in?
  const result = [];
  this.arr.forEach(function (node) {
    result.push(node.querySelectorAll(descendant));
  });
  return result;
};

DOMNodeCollection.prototype.remove = function () {
  this.arr.forEach(function (node) {
    node.remove();
  });
};

DOMNodeCollection.prototype.on = function (event, callback) {
  this.arr.forEach(function (node) {
    node.addEventListener(event, callback);
    node[event] = callback;
  });
};

DOMNodeCollection.prototype.off = function (event) {
  this.arr.forEach(function (node) {
    node.removeEventListener(event, node[event]);
    node[event] = undefined;
  });
};

module.exports = DOMNodeCollection;











//end of document


/***/ })
/******/ ]);