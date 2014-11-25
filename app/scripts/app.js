(function(){
"use strict";

/**
 * @ngdoc overview
 * @name lesson1App
 * @description
 * # lesson1App
 *
 * Main module of the application.
 */
angular
  .module('lesson1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngResource',
    'uuid4',
    'ngLodash'
  ])
  .config(['$routeProvider', '$locationProvider', '$parseProvider', function ($routeProvider, $locationProvider, $parseProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl'
      })
      .when('/games/create', {
        templateUrl: 'views/create-game.html',
        controller: 'CreateGameCtrl'
      })
      .when('/games/:id', {
        templateUrl: 'views/game-details.html',
        controller: 'GameDetailsCtrl'
      })
      .otherwise({
        redirectTo: '/games'
      });

      $locationProvider.html5Mode(false);

      // $parseProvider.unwrapPromises(true);
  }]);

})();