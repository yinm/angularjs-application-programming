angular.module('myApp', [])
  .controller('ParentController', ['$scope', '$rootScope', ($scope, $rootScope) => {
    $rootScope.value = 1

    $scope.onparent = () => {
      $rootScope.value++
    }
  }])

  .controller('ChildController', ['$scope', '$rootScope', ($scope, $rootScope) => {
    $scope.onchild = () => {
      $rootScope.value++
    }
  }])
