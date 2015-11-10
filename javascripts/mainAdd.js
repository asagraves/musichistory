$("#addsong").click(function(e){

  var newSong = {
    "name": $("#titleName").val()
    "name": $("#artistName").val()
    "name": $("#albumName").val()
  }
};

  $ajax({
    ur: "https://scorching-torch-9452.firebaseio.com/songs.json"
    method: "POST", 
    data:JSON.stringify(newsong)
  }).done(function(addedsong){
    console.log("Your new song is", addedSong);
  });
});

