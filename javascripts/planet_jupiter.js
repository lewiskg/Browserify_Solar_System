"use strict";

const Jupiter = { 
	"Name": "Jupiter", 
	"Year":  1610,
	"Mass": "1,898 × 10^24 kg", 
	"Size": "142,800 km",
	"Distance": "817 x 10^6 km",
	"Atmosphere": "90% H, ~10% He, trace amounts of ammonia, sulfur, methane, and water vapor.",
	"Satellites": "67 known",
	"Spacecrafts": '<a href="https://en.wikipedia.org/wiki/Exploration_of_Jupiter">List of missions to Juipter</a>'
};

function outputTo(domElement) {
	let temp = '<div id="Jupiter" class="planet">';
	for (let key in Jupiter) {
		temp += `<p>${key} &nbsp:&nbsp ${Jupiter[key]}</p>`;
  	}
  	temp += '</div>';
	domElement.innerHTML += temp;

}

module.exports = outputTo;