define(["jquery"], function($){

  $("#button1").click(function(e){

    var newSong = {
      "Title": $("#songName").val(),
      "Artist": $("#artistName").val(),
      "Album": $("#albumName").val()
    };

    $.ajax ({
      url: "https://scorching-torch-9452.firebaseio.com/songs.json",
      method: "POST",
      data: JSON.stringify(newSong)
    }).done(function(addedSong) {
      console.log("Your new song is", addedSong);
    });
  });
});


