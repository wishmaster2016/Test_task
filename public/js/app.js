'use strict';

angular.module('DashmoteApp', ['ngRoute', 'ngAnimate', 'DashmoteApp.filters', 'DashmoteApp.services', 'DashmoteApp.directives', 'DashmoteApp.controllers'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'partials/welcome.html', controller: 'welcomeCtrl'})
    .when('/home', {templateUrl: 'partials/home.html',controller: 'homeCtrl'})
    .otherwise({redirectTo: '/'});
}]);
