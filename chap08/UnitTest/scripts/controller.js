angular.module('myApp.controller', [])
  .controller('MyController', ['$scope', ($scope) => {
    $scope.greeting = 'こんにちは、権兵衛さん！';

    $scope.onclick = () => {
      $scope.greeting = `こんにちは、${$scope.myName}さん！`;
    };
  }]);
