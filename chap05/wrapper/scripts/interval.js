angular.module('myApp', [])
  .controller('MyController', ['$scope', '$interval', ($scope, $interval) => {
    let timer = $interval(() => {
      $scope.current = new Date();
    }, 1000);

    $scope.onclick = () => {
      $interval.cancel(timer);
    };
  }]);
