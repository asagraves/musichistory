// app.controller("LoadSongsToDom", ["$firebaseArray", "$q", "$http", "$scope", function($firebaseArray, $q, $http, $scope) {
  
//       // Just like in the RequireJS version of Music History, make a reference
//   var ref = new Firebase("https://scorching-torch-9452.firebaseio.com/songs");

//       // Instead of snapshot.val(), use this syntax to get songs
//   $scope.songs = $firebaseArray(ref);




// }]);





  // var getSongs = $q(function(resolve, reject) {
  //     $http.get('songs.json')
  //     .success(
  //       function(objectFromJSONFile) {
  //         resolve(objectFromJSONFile.songs);
  //       }, function(error) {
  //         reject(error);
  //       }
  //     );
  //   });

  // getSongs.then(function (songs) {
  //   console.log("songs",songs);
  //   $scope.songs = songs;
  // }, function (error) {
  //   console.log("Failed");
  // });
