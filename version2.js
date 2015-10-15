var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Each student must add one song to the beginning and the end of the array

songs.push("Loose yourself to dance - By Daft Punk on the album RAM");
songs.unshift("Peaches - By POTUS on the album POTUS");

//Loop over the array and remove any words or characters that obviously don't belong.

var javatarget = document.getElementById("javatarget");

// Replacing certain characters with others

for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/[^a-zA-Z" ">-]/g, "");
	songs[i] = songs[i].replace(/[>]/g, "-");
	javatarget.innerHTML += "<p>" + songs[i] + "</p>";
console.log(songs[i]);
}

// Must add each string to the DOM in index.html in the main content area.
console.log(javatarget);
