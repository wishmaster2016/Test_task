'use strict';

angular.module('DashmoteApp.controllers', ['mgcrea.ngStrap'])
  .controller('welcomeCtrl', ['$scope', '$http', '$location', '$timeout', function($scope, $http, $location, $timeout) {
		$("#search-tab").mouseover(function() {
			$timeout( function() {
    		$location.path("/home");
  		/*	$scope.page = $location.path();*/
      });
		});
	}])

  .controller('homeCtrl', ['$scope', '$http', '$location', '$timeout', function($scope, $http, $location, $timeout) {
    
  }]);
