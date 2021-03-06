angular.module('myApp', [])
  .controller('MyController', ['$scope', ($scope) => {
    $scope.base = 0
    $scope.height = 0
    $scope.area = 0

    $scope.$watch('base * height', (newValue, oldValue, scope) => {
      scope.height = scope.height + 1
      scope.area = scope.base * scope.height / 2
    })
  }])
