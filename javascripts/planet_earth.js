"use strict";

const Earth = { 
	"Name": "Earth", 
	"Year":  "Long time ago",
	"Mass": "5.972 × 10^24 kg", 
	"Size": "6371.39 km",
	"Distance": "149.6 x 10^6 km",
	"Atmosphere": "78% N, 21% O, 0.9 Ar",
	"Satellites": "Moon",
	"Spacecrafts": "too many"
};

function outputTo(domElement) {
	let temp = '<div id="Earth" class="planet">';
	for (let key in Earth) {
		temp += `<p>${key} &nbsp:&nbsp ${Earth[key]}</p>`;
  	}
	temp += '</div>';
	domElement.innerHTML += temp;
}

module.exports = outputTo;