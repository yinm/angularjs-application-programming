angular.module('myApp', [])
  .controller('MyController', ['$scope', '$timeout', function($scope, $timeout) {
    $timeout(function() {
      $scope.url = 'https://gihyo.jp/dp';
    }, 3000);
  }]);
