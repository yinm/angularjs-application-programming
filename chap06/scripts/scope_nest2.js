angular.module('myApp', [])
  .controller('ParentController', ['$scope', ($scope) => {
    $scope.$root.value = 1;

    $scope.onparent = () => {
      $scope.$root.value++;
    };
  }])
  .controller('ChildController', ['$scope', ($scope) => {
    $scope.onchild = () => {
      $scope.$root.value++;
    };
  }]);
