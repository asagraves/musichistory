var app = angular.module("SongApp", ["ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/addingSongsToDom', {
        templateUrl: 'partials/add-music.html',
        controller: 'AddSongsToDom'
      })
    .otherwise('/addingSongsToDom');
}]);