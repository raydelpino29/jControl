const DOMNodeCollection = require("./dom_node_collection.js");
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
  if ([...objects]) {
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
