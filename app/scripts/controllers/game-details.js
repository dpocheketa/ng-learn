'use strict';

/**
 * @ngdoc function
 * @name lesson1App.controller:GameDetailsCtrl
 * @description
 * # GameDetailsCtrl
 * Controller of the lesson1App
 */
angular.module('lesson1App')
  .controller('GameDetailsCtrl', ['$scope', '$routeParams', 'games', function ($scope, $routeParams, games) {
    $scope.init = function () {
      $scope.errors = [];
      games.getById($routeParams['id']).then(function (result) {
        $scope.game = result;
      }, function (error) {
        $scope.errors.push(error);
      });
    }
  }]);
