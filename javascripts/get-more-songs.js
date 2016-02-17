define(["jquery"], function($){
  return {
    getSongs : function (cb) {
      $.ajax({
        url: "data/more-songs.json"
        }).done(cb);
    }
  };
});