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
  const promise = new Promise(function (resolve, reject) {
    const args = Object.assign({}, defaults, options);
     const success = args.success;
     const error = args.error;
    const xhr = new XMLHttpRequest();
    xhr.open(args.method, args.url);
    xhr.onload = function() {
      resolve(xhr.responseText);
    };
    xhr.error = function(){
      reject(xhr.statusText);
    };
    xhr.send(JSON.stringify(args.data));
  }).then(success, error);
};
