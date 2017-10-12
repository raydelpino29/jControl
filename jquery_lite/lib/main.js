const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = function (selector) {
  const elementsArray = [];
  if (selector instanceof HTMLElement) {
    elementsArray.push(HTMLElement);
    return new DOMNodeCollection(elementsArray);
  } else {
      const nodeList = document.querySelectorAll(selector);
      const nodeArray = Array.prototype.slice.call(nodeList);
      return nodeArray;
  }
};
window.$l = $l;
