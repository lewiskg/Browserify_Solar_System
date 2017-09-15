"use strict";

const Neptune = { 
	"Name": "Neptune", 
	"Year":  1846,
	"Mass": "1.024 × 10^24 kg", 
	"Size": "49,493 km",
	"Distance": "4.54 x 10^9 km",
	"Atmosphere": "80% H, 19% He, 1.5% CH4, 192 ppm H2H, 1.5 ppm C2H6",
	"Satellites": "14 known moons, faint rings",
	"Spacecrafts": "Voyager 2 (flyby)"
};

function outputTo(domElement) {
	let temp = '<div id="Neptune" class="planet">';
	for (let key in Neptune) {
		temp += `<p>${key} &nbsp:&nbsp ${Neptune[key]}</p>`;
  	}
  	temp += '</div>';
	domElement.innerHTML += temp;

}

module.exports = outputTo;