// 2nd
angular.module('myApp', [])
  .directive('myScope', () => {
    return {
      restrict: 'E',
      replace: true,
      scope: true,
      controller: ['$scope', ($scope) => {
        $scope.onchild = () => {
          $scope.value++;
        };
      }],
      template: '<div><button ng-click="onchild()">加算</button>' +
        '{{value}}</div>',
    }
  })
  .controller('MyController', ['$scope', ($scope) => {
    $scope.value = 10;
    $scope.onparent = () => {
      $scope.value++;
    };
  }]);
