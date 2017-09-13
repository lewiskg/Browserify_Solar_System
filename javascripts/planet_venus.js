"use strict";

const Venus = { 
	"Name": "Venus", 
	"Year":  0,
	"Mass": "5.972 × 10^24 kg", 
	"Size": "6371.39 km",
	"Distance": "149.6 x 10^6 km",
	"Atmosphere": "78% N, 21% O, 0.9 Ar",
	"Satellites": "Moon",
	"Spacecrafts": "too many"
};

function outputTo(domElement) {
	domElement.innerHTML += '<div id="Venus" class="planet">';
	for (let key in Venus) {
		domElement.innerHTML += `<p>${key} &nbsp ${Venus[key]}</p>`;
  	}
	domElement.innerHTML += '</div>';

}

module.exports = outputTo;