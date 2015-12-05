app.controller("SongDetailCtrl",
  ["$scope", "$routeParams", "$firebaseArray",
  function($scope, $routeParams, $firebaseArray) {
    $scope.selectedSong = {};
    $scope.loadedsongarray;
    // $routeParams allows you to grab the value of the current route parameters.  
    // So, here we can pluck out the id of the particular song,  
    // because we set it in the href of the link from song-list partial.
    $scope.songId = $routeParams.songId;
    //firebase reference
    var ref = new Firebase("https://scorching-torch-9452.firebaseio.com/songs");
    $scope.songs = $firebaseArray(ref);

  // Make sure you use the $loaded promise handler, which waits
  // for all songs to be loaded from the reference before you try
  // to grab the record the user wanted.
    $scope.songs.$loaded()
      .then(function() {
      // The $getRecord method on a $firebaseArray is very useful
        $scope.selectedSong = $scope.songs.$getRecord($scope.songId);
        $scope.loadedsongarray = $scope.songs;
        console.log("loadedsongarray", $scope.loadedsongarray);
      })
      .catch(function(error) {
        console.log("Error:", error);
      });

      $scope.deleteSong = function(song) {
        $scope.songs.$remove(song);
      };

  }]
);





