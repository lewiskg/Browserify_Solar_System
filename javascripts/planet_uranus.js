"use strict";

const Uranus = { 
	"Name": "Uranus", 
	"Year":  1781,
	"Mass": "86.8x10 × 10^24 kg", 
	"Size": "51,488 km",
	"Distance": "1.7 x 10^9 km",
	"Atmosphere": "82.5% H, 15.2% He, 2.3 CH4",
	"Satellites": "27 known moons, faint rings",
	"Spacecrafts": "Voyger 2 (flyby)"
};

function outputTo(domElement) {
	let temp = '<div id="Uranus" class="planet">';
	for (let key in Uranus) {
		temp += `<p>${key} &nbsp:&nbsp ${Uranus[key]}</p>`;
  	}
  	temp += '</div>';
	domElement.innerHTML += temp;

}

module.exports = outputTo;