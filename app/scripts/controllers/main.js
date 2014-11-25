'use strict';

/**
 * @ngdoc function
 * @name lesson1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lesson1App
 */
angular.module('lesson1App')
  .controller('MainCtrl', ['$scope', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }]);
