var app = angular.module("SongApp", ["firebase", "ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/songs-list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongDetailCtrl'
      })
    .when('/add-music', {
        templateUrl: 'partials/add-music.html',
        controller: 'addSongsCtrl'
      })
      .otherwise('/songs-list');
}]);




