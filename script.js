// // Increment by 10
// for (var i = 0; i < 100; i += 10) {
// 	console.log(i);
// }

// //divide by 2
// for (var j = 100; j > 10; j /= 2) {
// 	console.log(j);
// }

// // Add items to an array
// var itemArray =[];
// for (var i = 2; i < 512; i = i * i) {
// 	itemArray.push(i);
// }
// console.log("itemArray", itemArray);

// var newhotness = [];
// for (var x = 100; x > 0; x-=1) {
// 	console.log("x", x);
// 	if (x % 2 === 0){
// 		newhotness.unshift(x);
// 	} else {
// 		newhotness.push(x);
// 	}
// 	}
// console.log("newhotness", newhotness);


// // String concatenation
// var firstName = "andrew";
// var lastName = "sagraves";
// var fullName = firstName + lastName
// console.log("fullName", fullName.length);

// fullName.indexOf("A")
// console.log("carAt", fullName.carAt(3));

// Replacing 
// var phrase = "The lazy dog";
// var newPhrase = phrase.replace("lazy", "bounding");
// alert(newPhrase);


// var number = "1000";
// var integer = parseInt (number);

// var el = document.getElementById("container");
// console.log ("container", container)

// el.innerHTML = "i love nss";
// var containerText = el.innerHTML;
// console.log("el.innerHTML", el.innerHTML)


var sonnetElement = document.getElementById("sonnet");
var sonnetText = sonnetElement.innerHTML;
console.log("sonnetText", sonnetText);

var indexOFOrphans = sonnetText.indexOf("orphans");
console.log("indexOFOrphans", indexOFOrphans)
console.log ("length of sonnet", sonnetText.length);

sonnetText = sonnetText.replace("winter", "yuletide");

sonnetElement.innerHTML = sonnetText;
sonnetElement.innerHTML = sonnetText.replace(/the/g, "a large")

sonnetText.replace(/the/g, "a large");


















