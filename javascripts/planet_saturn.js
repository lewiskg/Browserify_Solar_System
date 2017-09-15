"use strict";

const Saturn = { 
	"Name": "Saturn", 
	"Year":  1610,
	"Mass": "568.5 × 10^24 kg", 
	"Size": "119,871 km",
	"Distance": "888.2 x 10^6 km",
	"Atmosphere": "96.3% H and 3.25% He",
	"Satellites": "62 known moons and many ring",
	"Spacecrafts": "Pioneer 11, Voyager 1, Voyager 2, and Cassini"
};

function outputTo(domElement) {
	let temp = '<div id="Saturn" class="planet">';
	for (let key in Saturn) {
		temp += `<p>${key} &nbsp:&nbsp ${Saturn[key]}</p>`;
  	}
  	temp += '</div>';
	domElement.innerHTML += temp;

}

module.exports = outputTo;