"use strict";

const Jupiter = { 
	"Name": "Jupiter", 
	"Year":  0,
	"Mass": "5.972 × 10^24 kg", 
	"Size": "6371.39 km",
	"Distance": "149.6 x 10^6 km",
	"Atmosphere": "78% N, 21% O, 0.9 Ar",
	"Satellites": "Moon",
	"Spacecrafts": "too many"
};

function outputTo(domElement) {
	domElement.innerHTML += '<div id="Jupiter" class="planet">';
	for (let key in Jupiter) {
		domElement.innerHTML += `<p>${key} &nbsp ${Jupiter[key]}</p>`;
  	}
	domElement.innerHTML += '</div>';

}

module.exports = outputTo;