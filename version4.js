$(document).ready(function() {

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Each student must add one song to the beginning and the end of the array

songs.push("Loose yourself to dance - By Daft Punk on the album RAM");
songs.unshift("Peaches - By POTUS on the album POTUS");


var javatarget = $("#javatarget");


// Take out unneeded characters
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/[^a-zA-Z" ">-]/g, "");
	// Replace certain character with others
	songs[i] = songs[i].replace(/[>]/g, "-");

	javatarget.append("<li class='songlist'>" + songs[i] + "</li>");
		// console.log(songs[i]);
}

// console.log(javatarget);



function inputSongs(){
	var songName = $("#songName").val();
	var artistName = $("#artistName").val();
	var albumName = $("#albumName").val();
		console.log(songName);
		console.log(artistName);
		console.log(albumName);
var newInput = songName + " - " + artistName + " on the album "  + albumName;
	songs.push(newInput);
	console.log(songs);
	javatarget.html("");

for (var i = 0; i < songs.length; i++) {
	javatarget.append("<li class='songlist'>" + songs[i] + "</li>");
	}
}


	$("#button1").click(function(){
		inputSongs();
});




function displayAdd(){
		
		var addDiv = $("#inputmusic");
		// console.log(addDiv);
		var songdiv = $("#parentdiv");

		addDiv.removeClass("addMusicClass");
		songdiv.addClass("addMusicClass");
}
		$("#addmusic").click(function(){
			displayAdd();
});

function displayList(){
	
		var addDiv = $("#inputmusic");
		// console.log(addDiv);
		var songdiv = $("#parentdiv");

		addDiv.addClass("addMusicClass");
		songdiv.removeClass("addMusicClass");
}
		$("#viewmusic").click(function(){
			displayList();

});
})


 








