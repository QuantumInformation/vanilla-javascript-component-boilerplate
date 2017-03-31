<img src="https://codeship.com/projects/182fa300-f83a-0134-33ee-76e4f316aab3/status?branch=master"/>

# javascript-component

A TypeScript library component that

## Conventions used and similarities to other projects

npm libs css-variables and vanilla-typescript are used. I have numerous other projects using them

## installation
You can install into your application by running 
npm install --save-dev javascript-component

You can then use it like so:
```js
import JavaScriptComponent from 'javascript-component'

function init() {
  var selector = ".javascript-component"
  var component = new JavaScriptComponent(selector)
  component.attach()
}

init()
```

You can also import the default styles javascript-component.css which will style it for you.



## Features

* It has a bunch of buttons that do stuff

## Demo

[Live demo](https://quantuminformation.github.io/vanilla-javascript-component-boilerplate/demo/build)

This demo shows how to import your component from npm and add to a basic application

## Browser support

The component uses CustomEvents for some communication, if you want to support IE9+ you need a polyfill. Many of my components
also like to work with CustomEvents but I allow the users application to provide the optional polyfill to save download size
if they use several of my own components at once.

```js
(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();
```


## Video demo

Feel free to watch the video explanation of how it works here:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=b_fqsQOGW2o
" target="_blank"><img src="http://img.youtube.com/vi/b_fqsQOGW2o/0.jpg" 
alt="" width="240" height="180" border="10" /></a>

