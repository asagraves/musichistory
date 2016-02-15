firstArrObjects = [];

$(document).ready(function() {


$.ajax({
   url: "songs.json"
 }).done(function(data) {
   // When you tell jQuery to read a file via the ajax method
   // it reads the contents, and then executes whatever function
   // that you specify here in the done() method, and passes in
   // the contents of the file as the first argument.
   console.log("the contents of songs.json");
   console.log(data);

	function loopOverMySongObjects(data){
        for(var i =0; i < data.songs.length; i++){
            console.log(data.songs[i]);
            var indivSong = data.songs[i];

            //push into new array to for when user adds songs after seeing more
            firstArrObjects.push(indivSong);
            console.log("firstArrayObject", firstArrObjects);

            $("#div-2").append("<p>"+indivSong.Title+"  -  "+indivSong.Artist+"  -  "+indivSong.Album+"<button class='deleteSong'>Delete</button></p>");

            //connect each button to event listener
            $(".deleteSong").click(function(){
                $(this).parent().remove();
            });
        }
    }
    	loopOverMySongObjects(data);
 });

});


var javatarget = $("#javatarget");


function inputSongs(){
	var songName = $("#songName").val();
	var artistName = $("#artistName").val();
	var albumName = $("#albumName").val();
		console.log(songName);
		console.log(artistName);
		console.log(albumName);
// var newObj = songName + " - " + artistName + " - "  + albumName;
// 	firstArrObjects.push(newInput);
	// console.log(songs);
	javatarget.html("");
	console.log("firstArrObjects", firstArrObjects);

// for (var i = 0; i < songs.length; i++) {
// 	javatarget.append("<li class='songlist'>" + songs[i] + "</li>");
// 	}

var newObj = {
	    "Title": $("#songName").val(),
	    "Artist":$("#artistName").val(),
	    "Album": $("#albumName").val()
}
	firstArrObjects.push(newObj);
	console.log("newObj", newObj);
	$("#div-2").append("<p>"+newObj.Title+"  -  "+newObj.Artist+"  -  "+newObj.Album+"<button class='deleteSong'>Delete</button></p>");
	console.log("firstArrObjects", firstArrObjects);
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
// })











