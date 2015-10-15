var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

var output = "";

for (var index = 0; index < reindeer.length; index++) {
	var currentReindeer = reindeer[index];
	var currentColor = colors[index];

	output = output + "<div style ='color:" + currentColor + "'>";
	output = output + currentColor + "" + currentReindeer;
	output = output + "</div>"
	
}

console.log(output);

hohohoElement.innerHTML = output;


