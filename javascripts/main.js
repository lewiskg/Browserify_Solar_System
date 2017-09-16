"use strict";

const planet_mercury = require('./planet_mercury');
const planet_venus = require('./planet_venus');
const planet_earth = require('./planet_earth');
const planet_mars = require('./planet_mars');
const planet_jupiter = require('./planet_jupiter');
const planet_saturn = require('./planet_saturn');
const planet_uranus = require('./planet_uranus');
const planet_neptune = require('./planet_neptune');

const divOnDom = document.getElementById("output-container");

planet_mercury(divOnDom);
planet_venus(divOnDom);
planet_earth(divOnDom);
planet_mars(divOnDom);
planet_jupiter(divOnDom);
planet_saturn(divOnDom);
planet_uranus(divOnDom);
planet_neptune(divOnDom);
