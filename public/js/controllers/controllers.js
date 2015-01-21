'use strict';

angular.module('DashmoteApp.controllers', ['mgcrea.ngStrap'])
  .controller('welcomeCtrl', ['$scope', '$http', '$location', '$timeout', function($scope, $http, $location, $timeout) {
		
		$("#search-tab").mouseover(function() {
			$timeout( function() {
    		$location.path("/home");
  		/*	$scope.page = $location.path();*/
      });
		});

		$scope.cahrs = undefined;
		$scope.lenght = undefined;

		$('#goalInput').keydown(function (e) {
			e.stopPropagation();
			var width = $(this).width();

			var chars = this.value.length;
			if ((chars > 5) && ($scope.lenght) && (chars > $scope.lenght)) {
				$(this).css('width', width + 16);
			}

			if ((chars > 5) && ($scope.lenght) && (chars < $scope.lenght)) {
				$(this).css('width', width - 16);
			}
			$scope.lenght = chars;
			/*setCount(this, width);*/
		})

		function setCount(src, width) {
 			var chars = src.value.length;
			if ((chars > 5) && ($scope.lenght) && (chars > $scope.lenght)) {
				$('#goalInput').css('width', width + 20);
			}

			if ((chars > 5) && ($scope.lenght) && (chars < $scope.lenght)) {
				$('#goalInput').css('width', width - 20);
			}
			$scope.lenght = chars;
		}


   }])

  .controller('homeCtrl', ['$scope', '$http', '$location', '$timeout', function($scope, $http, $location, $timeout) {
    
  }]);
