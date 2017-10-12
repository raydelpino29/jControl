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
  // if (typeof content === "string") {
  //   const element = document.createElement(content);
  // } else if ()
};

module.exports = DOMNodeCollection;
