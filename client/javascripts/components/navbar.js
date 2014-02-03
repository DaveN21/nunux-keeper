'use strict';

angular.module('NavbarModule', [])
.directive('appNavbar', function($location) {
  return {
    restrict: 'E',
    templateUrl: 'templates/components/navbar.html',
    controller: 'NavbarCtrl'
  };
})
.controller('NavbarCtrl', function ($scope, $rootScope, $location, $routeParams) {
  if ($routeParams.q) {
    $scope.query = decodeURIComponent($routeParams.q);
  }
  $scope.toggleMenu = function() {
    $rootScope.mainMenuStatus = $rootScope.mainMenuStatus === 'open' ? '' : 'open';
  };

  $scope.search = function(query) {
    $location.url('/document?q=' + encodeURIComponent(query));
  };
});