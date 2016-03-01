app.controller("addSongsCtrl", ["$scope", "$firebaseArray",
function($scope, $firebaseArray) {

    var ref = new Firebase("https://scorching-torch-9452.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);  // turn Firebase into Array for Angular
    $scope.newsong = { album: "", artist: "", title: "" };  // create new object to hold user input

    $scope.addSong = function() {
      console.log("add click");
      $scope.songs.$add({  // add user input to Firebase
        album: $scope.newsong.album,
        artist: $scope.newsong.artist,
        title: $scope.newsong.title
      });
      console.log("some stuff");
    };
  }


]);
