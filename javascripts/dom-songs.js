define(["jquery", "hbs"], function($, Handlebars){
  return {
    addSongToDom: function(data) {

       require(['hbs!../templates/songs'], 
        function (songTemplate) {
        $("#div-2").append(songTemplate(data));
        $(".delete-song").click(function(){
          console.log("delete-song");
          $(this).parent().remove();
            });
        });

       require(['hbs!../templates/artistselect'],
        function (artistTemplate) {
          $("#artist-select").append(artistTemplate(data));
          $("#artist-select").change(function(){
            $(this).parent(artistselect).show();
            
          })
        })

       require(['hbs!../templates/albumselect'],
        function (albumTemplate) {
          $("#album-select").append(albumTemplate(data));
          // $()
        })
     }
    }
});
