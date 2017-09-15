"use strict";

const Mars = { 
	"Name": "Mars", 
	"Year":  1659,
	"Mass": "0.64 × 10^24 kg", 
	"Size": "6785 km",
	"Distance": "249 x 10^6 km",
	"Atmosphere": "95.32% CO2, N 2.7%, Ar 1.6%, 0.13% O, CO 0.08%",
	"Satellites": "Phobos, Deimos",
	"Spacecrafts": '<a href="https://en.wikipedia.org/wiki/List_of_missions_to_Mars">List of missions to Mars</a>'
};

function outputTo(domElement) {
	let temp = '<div id="Mars" class="planet">';
	for (let key in Mars) {
		temp += `<p>${key} &nbsp:&nbsp ${Mars[key]}</p>`;
  	}
  	temp += '</div';
	domElement.innerHTML += temp;

}

module.exports = outputTo;