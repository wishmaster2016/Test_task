'use strict';

angular.module('DashmoteApp.controllers', ['mgcrea.ngStrap'])
  .controller('welcomeCtrl', ['$scope', '$http', 'toaster' , '$timeout', 'Authentication', function($scope, $http, toaster, $timeout, Authentication) {
    var $window = $(window);
    $scope.authenticated = Authentication.isAuthenticated();
    $window.keydown(function (event) {
      if (event.which === 13) {
        
      }
    });

  .controller('homeCtrl', ['$scope', '$http', '$location', 'toaster', 'Authentication', '$timeout', function($scope, $http, $location, toaster, Authentication, $timeout) {
    
  }])
