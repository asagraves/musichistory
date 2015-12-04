var app = angular.module("SongApp", ["firebase", "ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/songs-list', {
        templateUrl: 'partials/song-list.html',
        controller: 'SongDetailCtrl'
      })
    .when('/songs-list/new', {
        templateUrl: 'partials/add-music.html',
        controller: 'SongDetailCtrl'
      })
    .otherwise('/songs-list');
}]);



