define(["jquery", "hbs"], function($, Handlebars){
  //private vars
  var myData;


  return {
    addSongToDom: function(data) {

       require(['hbs!../templates/songs'], 
        function (songTemplate) {
          console.log("bruh");
        $("#div-2").html(songTemplate(data));
        $(".delete-song").click(function(){
          console.log("delete-song");
          $(this).parent().remove();
            });
        });

         require(['hbs!../templates/artistselect'],
          function (artistTemplate) {
            $("#artist-select").html(artistTemplate(data));   
          });

         require(['hbs!../templates/albumselect'],
          function (albumTemplate) {
            $("#album-select").html(albumTemplate(data));
          });

       },

    justReturnData: function(data){
      myData = data;
      console.log(myData);
      return myData;
      },

    filterSelectedArtists: function(){
      return myData;
    }

     };
});


