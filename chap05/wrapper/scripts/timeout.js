angular.module('myApp', [])
  .controller('MyController', ['$scope', '$timeout', ($scope, $timeout) => {
    const timer = $timeout(() => {
      $scope.greeting = 'Hello World'
    }, 5000)

    $scope.onclick = function() {
      $timeout.cancel(timer);
    };
  }])
