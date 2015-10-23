var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Each student must add one song to the beginning and the end of the array

songs.push("Loose yourself to dance - By Daft Punk on the album RAM");
songs.unshift("Peaches - By POTUS on the album POTUS");


var javatarget = document.getElementById("javatarget");

//var nchild1 = document.getElementById("nchild1");


// Take out unneeded characters
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/[^a-zA-Z" ">-]/g, "");
	// Replace certain character with others
	songs[i] = songs[i].replace(/[>]/g, "-");

	javatarget.innerHTML += "<li class='songlist'>" + songs[i] + "</li>";
		console.log(songs[i]);
}

// Must add each string to the DOM in index.html in the main content area.
console.log(javatarget);





/*Time to make Music History into a single page application. Before you begin please review the sample code I provided in JavaScript 103 about building a simple SPA.

In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".
Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. You do not need to enclose them in a <form> element because we're not actually submitting this form anywhere.
Add a <button> element at the bottom of the input fields labeled "Add".
The input fields and the add button make up the Add Music View.
The existing view - the combination of the filter form and the song list - will be referred to as the List Music View.
The Add Music View should not appear when the user first visits your page. The song list with the corresponding filter form should be visible.
When the user clicks on "Add Music" in the navigation bar, the List Music View should be hidden, and the Add Music View should be shown (see example wireframe).
When the user clicks on "List Music" in the naviation bar, the Add Music View should be hidden, and the List Music View should be shown (see example wireframe).
Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.*/





function inputSongs(){
	var songName = document.getElementById("songName").value;
	var artistName = document.getElementById("artistName").value;
	var albumName = document.getElementById("albumName").value;
		console.log(songName);
		console.log(artistName);
		console.log(albumName);
var newInput = songName + " - " + artistName + " on the album "  + albumName;
	songs.push(newInput);
	javatarget.innerHTML = "";

for (var i = 0; i < songs.length; i++) {
	javatarget.innerHTML += "<li class='songlist'>" + songs[i] + "</li>";
}
}


	document.getElementById("button1").addEventListener("click",function(){
		inputSongs();
});




function displayAdd(){
		
		var addDiv = document.getElementById("inputmusic");
		console.log(addDiv);
		var songdiv = document.getElementById("parentdiv");

		addDiv.classList.remove("addMusicClass");
		songdiv.classList.add("addMusicClass");
}
		document.getElementById("addmusic").addEventListener("click",function(){
			displayAdd();
});

function displayList(){
	
		var addDiv = document.getElementById("inputmusic");
		console.log(addDiv);
		var songdiv = document.getElementById("parentdiv");

		addDiv.classList.add("addMusicClass");
		songdiv.classList.remove("addMusicClass");
}
		document.getElementById("viewmusic").addEventListener("click",function(){
			displayList();

});

	
	
	

	// addmusic.addEventListener("click", hideAdd);
	// viewmusic.addEventListener("click", displayList);



 








