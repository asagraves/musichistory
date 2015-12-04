var readJSon = angular.module("angular", []);

readJSon.controller("LoadSongsToDom", function($scope) {
// promises via angular

  var getSongs = $q(function(resolve, reject) {
        $http.get('./data/songs.json'),
        $http.get('./data/song2.json')
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
    }, function (error) {
      console.log("Failed");
    });

});











