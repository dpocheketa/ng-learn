'use strict';

/**
 * @ngdoc function
 * @name lesson1App.controller:CreateGameCtrl
 * @description
 * # CreateGameCtrl
 * Controller of the lesson1App
 */
angular.module('lesson1App')
  .controller('CreateGameCtrl', ['$scope', '$location', 'games', function ($scope, $location, games) {
    $scope.init = function () {
      $scope.game = games.createNew();
      $scope.errors = [];
    };

    $scope.save = function () {
      games.save($scope.game).then(function () {
        $location.path('/games');
      }, function (error) {
        $scope.errors.push(error);
      });
    }
  }]);
