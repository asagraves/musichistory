requirejs.config({
	baseUrl: "./javascripts",
	paths: {
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
	  "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    // "lodash": "../lib/bower_components/lodash/lodash.min"
  },

  shim: {
      "bootstrap": {
        "deps" : ["jquery"]
      }
    }
});
require(["bootstrap", "hbs", "get-songs", "mainAdd", "logsong", "script", "dom-songs"], 

  function (bootstrap, hbs, mySongs, addFirebase, logSong, script, toDom){
  	console.log("working");

    mySongs.getSongs(toDom.addSongToDom);

    $("button1").on("click", logSong.addSongToList);
    



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
      
        // {
        //   songs: {}
        // }
      });
    });
  });

	// });
	

// {{!-- ********Lodash******** --}}
  // var matchingChoices = _.chain($("#div-2"))
  //                        .filter((song) => artistselect === "#artist-select")
  //                        .uniq('albumselect').pluck('album-select').value();






