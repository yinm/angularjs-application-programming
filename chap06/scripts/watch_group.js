angular.module('myApp', [])
  .controller('MyController', ['$scope', ($scope) => {
    $scope.base = 0
    $scope.height = 0
    $scope.area = 0

    $scope.cancel =
      $scope.$watchGroup(['base', 'height'], (newValue, oldValue, scope) => {
        scope.area = scope.base * scope.height / 2
      })

    $scope.onstop = () => {
      $scope.cancel()
    }
  }])