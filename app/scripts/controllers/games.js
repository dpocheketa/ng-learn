'use strict';

/**
 * @ngdoc function
 * @name lesson1App.controller:GamesCtrl
 * @description
 * # GamesCtrl
 * Controller of the lesson1App
 */
angular.module('lesson1App')
  .controller('GamesCtrl', ['$scope', 'games', function ($scope, games) {
  	console.log("GamesCtrl");
    $scope.init = function () {
      $scope.games = games.query();
    };
  }]);
