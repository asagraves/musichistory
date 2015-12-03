var app = angular.module("SongApp", ["ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/songs-list', {
        templateUrl: 'partials/song-list.html',
        controller: 'LoadSongsToDom'
      })
    .otherwise('/songs-list');
}]);




    // .when("/songs-add" {
    //     templateUrl: 'partials/add-song.html',
    //     controller: 'addsong'
    // });



