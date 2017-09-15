"use strict";

const Venus = { 
	"Name": "Venus", 
	"Year":  1761,
	"Mass": "4.87 × 10^24 kg", 
	"Size": "12104 km",
	"Distance": "109 x 10^6 km",
	"Atmosphere": "Almost completely carbon dioxide. Nitrogen exists in small doses, as do clouds of sulfuric acid.",
	"Satellites": "none",
	"Spacecrafts": "38 spacecraft have at least partially successfully completed a mission at Venus."
};

function outputTo(domElement) {
	let temp = '<div id="Venus" class="planet">';
	for (let key in Venus) {
		temp += `<p>${key} &nbsp:&nbsp ${Venus[key]}</p>`;
  	}
  	temp += '</div>';
	domElement.innerHTML += temp;

}

module.exports = outputTo;