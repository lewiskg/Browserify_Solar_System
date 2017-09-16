# Browserify-Solar-System
##
# NSS Assignment for 9/16/17
##

1. Use npm to install Browserify, and any other packages you need to compile your modules.
2. Make sure you have the Grunt task running that will build the distribution bundle file.
3.  Create a web page that will display important scientific data about all eight planets in our solar system. 
4.  The information about each planet will be separate modules.
5.  Create a main module that uses require to include each planet's module as a dependency and then subsequently calls the outputTo() method for each one, in the right order.



```javascript
function outputTo(domElement) {
  domElement.innerHTML += ...;
}
```

##

Exercise uses Grunt, Browserify, and a common file structure.
