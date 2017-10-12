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
      node.setAttribute(content, value);
      return this.arr; // why is this not returning?
    });
  }
};

module.exports = DOMNodeCollection;
