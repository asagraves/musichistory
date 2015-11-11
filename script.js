firstArrObjects = [];

$(document).ready(function() {
	$("#inputmusic").hide();

var moreSongsWereAdded = false;


//ajax call songs
$.ajax({
   url: "songs.json"
 }).done(function(data) {
//    // When you tell jQuery to read a file via the ajax method
//    // it reads the contents, and then executes whatever function
//    // that you specify here in the done() method, and passes in
//    // the contents of the file as the first argument.
   console.log("the contents of songs.json");
   console.log(data);
});



//ajax call songs2
$.ajax({
		url: "songs2.json"
	}).done(function(data){
		console.log("Second Data is: ", data.songs2);
		$("#songs2").click(function(){
				for(var i =0; i < data.songs2.length; i++){
			var indivSong = data.songs2[i];
			$("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong'>Delete</button></p>");

			//connect each button to event listener
			$(".deleteSong").click(function(){
				$(this).parent().remove();
			});

		}
		$("#songs2").prop("disabled", true);
		moreSongsWereAdded = true;

		});
	// });


//functions



	//loop over songs in json
	function loopOverMySongObjects(data){
        for(var i =0; i < data.songs.length; i++){
            console.log(data.songs[i]);
            var indivSong = data.songs[i];
            $("#indiv_songs").append("<p>"+indivSong.title+" - by "+indivSong.artist+" on the album "+indivSong.album+"<button class='deleteSong'>Delete</button></p>");
            
            //push into new array to for when user adds songs2 after seeing more
            firstArrObjects.push(indivSong);
            console.log("firstArrayObject", firstArrObjects);

            // $("#div-2").append("<p>"+indivSong.Title+"  -  "+indivSong.Artist+"  -  "+indivSong.Album+"<button class='deleteSong'>Delete</button></p>");
            
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
	// firstArrObjects.push(newInput);
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
	var songDiv = $("#parentdiv");

	addDiv.show()
	songDiv.hide()

	// addDiv.removeClass("addMusicClass");
	// songDiv.addClass("addMusicClass");
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


 








