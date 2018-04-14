angular.module('myApp', [])
  .controller('MyController', ['$scope', '$interval', ($scope, $interval) => {
    const timer = $interval(() => {
      $scope.current = new Date()
    }, 1000)

    $scope.onclick = function() {
      $interval.cancel(timer);
    };
  }])
