define(["jquery"], function($){

	return {
    addSongToList: function(event) {
      var songInfo = {
      "songs": [{
       Title: $("#songName").val(),
       Artist: $("#artistName").val(),
       Album: $("#albumName").val()
          }] 
       };

			require(['hbs!../templates/songs'], function (songTemplate) {
  			$("#div-2").append(songTemplate(songInfo));
        $(".delete-song").click(function(){
            console.log("delete-song");
              $(this).parent().remove();
          });
      });
	   }
    };
});
