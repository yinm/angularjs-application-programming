angular.module('myApp', [])
  .controller('MyController', ['$scope', '$timeout', ($scope, $timeout) => {
    let timer = $timeout(() => {
      $scope.greeting = 'ようこそ、世界！';
    }, 10000);

    $scope.onclick = () => {
      $timeout.cancel(timer);
    };
  }]);
