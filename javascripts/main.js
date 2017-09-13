"use strict";

console.log("in main.js");

const planet_mercury = require('./planet_mercury');
const planet_venus = require('./planet_venus');
const planet_earth = require('./planet_earth');
const planet_mars = require('./planet_mars');
const planet_jupiter = require('./planet_jupiter');
const planet_saturn = require('./planet_saturn');
const planet_uranus = require('./planet_uranus');
const planet_neptune = require('./planet_neptune');


planet_mercury(document.getElementById("output-containier"));
planet_venus(document.getElementById("output-containier"));
planet_earth(document.getElementById("output-containier"));
planet_mars(document.getElementById("output-containier"));
planet_jupiter(document.getElementById("output-containier"));
planet_saturn(document.getElementById("output-containier"));
planet_uranus(document.getElementById("output-containier"));
planet_neptune(document.getElementById("output-containier"));
