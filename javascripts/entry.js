requirejs.config({
	baseUrl: "./javascripts",
	paths: {
		jquery: "../lib/bower_components/jquery/dist/jquery.min",
		hbs: "../lib/bower_components/require-handlebars-plugin/hbs",
	  bootstrap: "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
  },

shim: {
    "bootstrap": {
      "deps" : ["jquery"]
    }
  }
});



require(["bootstrap", "hbs", "get-songs", "get-more-songs", "logsong", "script", "dom-songs"], 

  function (bootstrap, hbs, mySongs, moreSongs, logSong, script, toDom){

	console.log("working");
  mySongs.getSongs(toDom.addSongToDom);
  moreSongs.getSongs(toDom.addSongToDom);

  $("button1").on("click", logSong.addSongToList);
  // $("artistselect").on("click", artistselect("div-2"));

	});
	



// ******??*****

console.log("Now binding the song array to the Handebar template");


