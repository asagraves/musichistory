app.controller("LoadSongsToDom", ["$q", "$http", "$scope", function($q, $http, $scope) {
  
  var getSongs = $q(function(resolve, reject) {
      $http.get('songs.json')
      .success(
        function(objectFromJSONFile) {
          resolve(objectFromJSONFile.songs);
        }, function(error) {
          reject(error);
        }
      );
    });

  getSongs.then(function (songs) {
    console.log("songs",songs);
    $scope.songs = songs;
  }, function (error) {
    console.log("Failed");
  });




}]);