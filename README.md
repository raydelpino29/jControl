# What is jControl?

jControl is a lightweight library that enables users to manipulate the Document Object Model. This library is written with vanilla JavaScript and the DOM api. It can

# How does jControl work?

In order to begin manipulating the DOM, the user needs to pass a string referring to an HTML element or an actual HTML element into the $l() function. Once the proper argument has been passed into $l(), then all of the functions on its prototype are available to the user.

-----

## Start Using jControl
First, clone my jControl repository to your computer by running the following command in your terminal:

```
git clone https://github.com/raydelpino29/jControl
```

Then, switch into your local jControl directory with the following command:

```
cd jControl
```

To require all of the dependencies, run the following in the terminal:

```
npm run webpack
```

Finally, require `jControl.js` in the `<head>` of your HTML document:

```html
<head>
  <script type="text/javascript" src="[PATH TO FILE]/lib/jControl.js"></script>
</head>
```

You are now fully prepared to manipulate the DOM with my super lightweight library.

## jControl Functions

In order to take advantage of jControl's full functionality, you must first wrap the element you'd like to manipulate in $l(). Pass the element as an argument to $l(), via HTML element type or its CSS selector (class or id). You can also pass it a function. Just keep in mind that $l will grab all elements that match the argument passed in. If you pass in a class, and numerous elements have that class, they will all be selected and subject to the following methods you invoke.

Here are 3 examples, demonstrating all 3 types of arguments $l() accepts:

1.) Passing $l() an HTML Element:
```javascript
  let element = document.createElement('div');
  let $jControlElement = $l(element);
  ```

2.) Passing $l() a CSS Selector:

Let's say you have this div on your page...
```HTML
<div class="div-class">Our example div.</div>
```
You can select it doing the following...
```javascript
  let $jControlElement = $l("div"); //this will select all divs on the page
            //or
  let $jControlElement = $l(".div-class") // this will select all elements with this class
```

3.) Passing $l() a function:
```javascript
   $l(() => {alert("The DOM Content has loaded.")}); //this function will be run once all the content on the page has loaded
  ```

## jControl API (available functions)

### addClass(class)
This function will add a class to the selected HTML element/s:
```javascript
  let $jControlElement = $l("div"); // select all divs

  $jControlElement.addClass("jControl-div"); // add class "jControl-div" to all divs
```
### removeClass(class)
This function will remove a class from the selected HTML element/s:
```javascript
  let $jControlElement = $l("div"); // select all divs

  $jControlElement.removeClass("jControl-div"); // remove class "jControl-div" from all divs
```

### append(HTMLElement)
This function will add an HTML element to the end of the selected element/s:
```javascript
  let $jControlElement = $l("div"); // select all divs

  $jControlElement.append("<ul></ul>"); // adds an unordered list after all divs
```

### remove()
This function will remove the selected element/s:
```javascript
  let $jControlElement = $l("div"); // select all divs
  $jControlElement.remove(); // remove all divs currently on the page
```

### attr(HTML attribute)/attr(HTML attribute, value)
This function can either return the value of the passed attribute, or set the value of the given attribute for the first of the selected elements:

Let's say you have this div on your page...
```HTML
<div class="div-class">Our example div.</div>
```
```javascript
  let $jControlElement = $l("div-class");

  $jControlElement.attr("class"); // returns "div-class"
```

```javascript
  let $jControlElement = $l("div-class");

  $jControlElement.attr("class", "jControl"); //its class is now jControl
```

### children()
This function returns an array of all children elements for the selected element/s:

Let's say you have 2 div's on your page...
```HTML
<div class="div-class1">
  <ul>
    <li>Number1</li>
    <li>Number2</li>
    <li>Number3</li>
  </ul>
</div>
<div class="div-class2">
  <ul>
    <li>Number1</li>
    <li>Number2</li>
    <li>Number3</li>
  </ul>
</div>
```
```javascript
  let $jControlElement = $l("div");
  $jControlElement.children(); // returns [[ul],[ul]]
```

### empty()
This function removes all the child elements from the selected element/s:

Let's say you have this div on your page...
```HTML
<div class="div-class1">
  <ul>
    <li></li>
    <ul class="nested-list">
      <li>Number1</li>
      <li>Number2</li>
      <li>Number3</li>
    </ul>
  </ul>
</div>
```
```javascript
  let $jControlElement = $l("div");

  $jControlElement.empty(); // div has no inner elements, and looks like so: <div></div>
```

### find(HTML Element/CSS Selector)
This function returns all the descendants of the selected HTML element/s that have the given arguments as descendants:

Let's say you have this div on your page...
```HTML
<div class="div-class1">
  <ul>
    <li class="list-item"></li>
  </ul>
</div>
```
```javascript
  let $jControlElement = $l("div");
  $jControlElement.find("li.list-item"); // returns [li.list-item]
```

### html()/html(HTMLElement)
This function will either return the innerHTML of the first of the selected elements, or set the innerHTML of the first of the selected elements if an element is passed in as a string:

Let's say you have this div on your page...
```HTML
<div class="div-class1">
  <ul>
    <li class="list-item"></li>
  </ul>
</div>
```
```javascript
  let $jControlElement = $l("div");

  $jControlElement.html(); // returns...
    // "<ul>
    //   <li class="list-item"></li>
    // </ul>
    // "
```
```javascript
  let $jControlElement = $l("div");

  $jControlElement.html("<p>Hello, world!</p>"); // div now looks like so: <div><p>Hello, world!</p></div>
```

### on(eventType, callback)
This function adds an event listener to all selected elements:

Let's say you have this div on your page...
```HTML
<div class="div-class1">
  <p>Hello, world!</p>
</div>
```
```javascript
  let $jControlElement = $l("div-class");
  $jControlElement.on("click", () => alert("This event has been activated.")); // when you click the word hello, a window alert will pop up
```
### off(eventType, callback)
This function removes an event listener to all selected elements:

Let's say you have this div on your page...
```HTML
<div class="div-class1">
  <p>Hello, world!</p>
</div>
```
```javascript
let $jControlElement = $l("div-class");
$jControlElement.off("click", () => alert("This event has been activated.")); // when you click the word hello, a window alert will no longer appear
```

### parent(arg)
This function will return the parent element of all selected elements:

Let's say you have these div's' on your page...
```HTML
<div class="div-class1">
  <ul class="nested-list1">
    <li>Item1</li>
  </ul>
</div>
<div class="div-class2">
  <ul class="nested-list2">
    <li>Item2</li>
  </ul>
</div>
```
```javascript
  let $jControlElements = $l("ul")
  $jControlElements.parent(); // returns [[div.div-class1],[div.div-class2]]
```

## extend(obj1, obj2, ...obj3)
This function merges the content of two or more objects together into the first object and mutates the first object:
```javascript
  const objA = {a: 'a', b: 'a', c: 'a'};
  const objB = {b: 'b', c: 'b'};
  const objC = {c: 'c'};
  $l.extend(objA, objB, objC); // returns { a: 'a', b: 'b', c: 'c' }
```


## ajax(optionsHash)
This function uses an XMLHttpRequest and a Promise Object to create/retrieve data from a server:

```javascript
$l.ajax({
   type: 'GET',
   url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bcb83c4b54aee8418983c2aff3073b3b",
   success(data) {
     console.log("We have your weather!")
     console.log(data);
   },
   error() {
     console.error("An error occurred.");
   },
}); // logs "We have your weather!" and the received data in the console if request is successful
//logs "An error occurred if request was not successful."
```
