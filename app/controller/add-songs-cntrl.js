//controller for adding songs to dom
app.controller("add-songs-cntrl", ["$firebaseArray", "$scope",
 function($firebaseArray, $scope){
  var ref = new Firebase("https://scorching-torch-9452.firebaseio.com/songs");

  $scope.songs = $firebaseArray(ref);
  $scope.newsong = { title: "", artist: "", album: ""};
  console.log("loggggggginggggsonssssss", $scope.songs);


  $scope.addToArray = function() {
    console.log("addToArray");

    $scope.songs.$add({
      artist: $scope.newsong.artist,
      album: $scope.newsong.album,
      title: $scope.newsong.title
    });
      // console.log("title", title);
  }


}]);
    

    // $scope.removeSong = function(song){
    // console.log("song", song);

    // var indexToSplice = $scope.ArrayOfSongs.indexOf(song);

    // console.log("index of tha ", indexToSplice);

    // $scope.ArrayOfSongs.splice(indexToSplice, 1);

    // console.log("nehw resuhlt ", $scope.ArrayOfSongs);



  // };












    // $firebaseArray.pushSongs(
    // {

    // }
    // );

    // console.log("$firebaseArray list", $firebaseArray.getSongArray());



































// var app = angular.module("add-songs-cntrl", []);

// app.controller("add-songs-cntrl", function($scope) {
//   $scope.title = "Welcome to your task list";
//   $scope.macaroni = "";
//   $scope.searchText = "";
//   $scope.theTodo = "";

//   $scope.todos = [
//     { name: "Mow the lawn", complete: "incomplete" },
//     { name: "Cut the grass", complete: "complete" },
//     { name: "Kill the ants", complete: "incomplete" },
//     { name: "Trim the weeds", complete: "complete" }
//   ];

//   $scope.killTodo = function(todo) {
//     // Do you see the PFM here of full object comparison?
//     var todoIndex = $scope.todos.indexOf(todo); 

//     if (todoIndex >= 0) {
//       $scope.todos.splice(todoIndex, 1);
//     }
//   };
// });
























