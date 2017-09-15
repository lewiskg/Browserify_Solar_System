"use strict";

const Mercury = { 
	"Name": "Mercury", 
	"Year":  "265 B.C.",
	"Mass": "0.33 × 10^24 kg", 
	"Size": "4878 km",
	"Distance": "69.8 x 10^6 km",
	"Atmosphere": "none",
	"Satellites": 0,
	"Spacecrafts": "Mariner 10, Messenger"
};

function outputTo(domElement) {
	let temp = '<div id="Mercury" class="planet">';
	for (let key in Mercury) {
		temp  += `<p>${key} &nbsp:&nbsp ${Mercury[key]}</p>`;
  	}
  	temp += '</div>';
	domElement.innerHTML += temp;
}

module.exports = outputTo;