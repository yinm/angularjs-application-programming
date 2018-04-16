angular.module('myApp', [])
  .controller('MyController', ['$scope', ($scope) => {
    $scope.triangle = { base: 0, height: 0 }
    $scope.area = 0

    $scope.$watch('triangle', (newValue, oldValue, scope) => {
      scope.area = newValue.base * newValue.height / 2
    }, true)
  }])