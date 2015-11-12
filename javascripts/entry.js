requirejs.config({
	baseUrl: "./javascripts",
	paths: {
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
	  "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    // "lodash": "../lib/bower_components/lodash/lodash.min"
    "firebase": "../lib/bower_components/firebase/firebase"
  },

  shim: {
      "bootstrap": {
        "deps" : ["jquery"]
      },
      "firebase": {
        exports: "Firebase"
      }
    }
});
require(["firebase", "eventHandlers", "bootstrap", "hbs", "get-songs", "mainAdd", "logsong", "script", "dom-songs"], 

  function (Firebase, eventHandlers, bootstrap, hbs, mySongs, addFirebase, logSong, script, toDom){
  	// console.log("working");

    var allSongsObject = {};
    var allSongsArray = [];
    var originalSongsArray = [];



    mySongs.getSongs(toDom.addSongToDom);

    $("button1").on("click", logSong.addSongToList);

     // Initialize the event handlers
    eventHandlers.init({songArray: originalSongsArray});
    



  function returnData() {
    return addSongToDom;
  }


      // *******have selected artist displey in dom**********
  var filtersong = {
    songs: {
     }
    };

  // var eventobject;
    $("#artist-select").change(function(eventobject){
        mySongs.getSongs(
          function (data) {
          toDom.justReturnData(data);
      // console.log("moo");
      // Get what artist user chose
      var selectedartist = $("#artist-select").val();
      console.log(toDom);
      var filterartist = toDom.filterSelectedArtists();
      // Loop over songs key in Firebase object
        for (var key in filterartist.songs) {
          
      // Compare the .artist key on each songs to `selectedArtist`
          var currentsong = filterartist.songs[key];
        
      // If they are the same, add the current song to a new
          if (currentsong.Artist === selectedartist) {

      // object named `filteredSongs.songs`

            filtersong.songs[key] = currentsong;
          }

      // Send filteredSongs to Handlebar tempalte
          // mySongs.getSongs(toDom.filterSelectedArtists);
      }
      toDom.addSongToDom(filtersong);
      });
    });


	



// *********firebase********

// function firebase() {}

// Create a reference to your Firebase database

var firebase = new Firebase("https://scorching-torch-9452.firebaseio.com/");

      // Listen for when anything changes on the "songs" key
      firebase.child("songs").on("value", function(snapshot) {

      // Store the entire songs key in a local variable
      var allSongsObject = snapshot.val();

      // Bind the song object to the song list template
      $("#songList").html(toDom.addSongToDom(allSongsObject));
      console.log(toDom);

      // Make an array of unique artist names
      function unique(){
        return unique;
      }
      var uniqueArtists = unique(allSongsObject).uniqueArtists;

      // Bind the unique artists to the filteredArtists template
      $("#artistselect").html(toDom.addSongToDom({artists:uniqueArtists }));

      // Make an array of unique album names
      var uniqueAlbums = unique(allSongsObject).uniqueAlbums;

      // Bind the unique albums to the filteredAlbums template
      $("#albumselect").html(toDom.addSongToDom({albums:uniqueAlbums }));

      // Update event handlers with new data
      eventHandlers.updateSongs(originalSongsArray);

    });

    // Initialize the Material Bootstrap plugin
    // $.material.init();


});


// {{!-- ********Lodash******** --}}
  // var matchingChoices = _.chain($("#div-2"))
  //                        .filter((song) => artistselect === "#artist-select")
  //                        .uniq('albumselect').pluck('album-select').value();






