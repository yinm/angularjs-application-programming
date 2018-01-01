angular.module('myApp', [])
  .controller('ParentController', ['$scope', ($scope) => {
    $scope.value = 1;

    $scope.onparent = () => {
      $scope.value++;
    };
  }])
  .controller('ChildController', ['$scope', ($scope) => {
    $scope.onchild = () => {
      $scope.$parent.value++;
    }
  }]);