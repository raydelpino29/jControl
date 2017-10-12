function DOMNodeCollection (array) {
  this.arr = array;
}

DOMNodeCollection.prototype.html = function (string = null) {
  if (string === null) {
    return this.arr[0].innerHTML;
  } else {
    this.arr.forEach(function (el) {
      el.innerHTML = string;
    });
  }
};

DOMNodeCollection.prototype.empty = function () {

};

module.exports = DOMNodeCollection;
