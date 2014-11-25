'use strict';

/**
 * @ngdoc function
 * @name lesson1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lesson1App
 */
angular.module('lesson1App')
  .controller('AboutCtrl', ['$scope', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }]);
