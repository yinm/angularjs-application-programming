angular.module('myApp', [])
  .directive('myHello', () => {
    return {
      restrict: 'E',
      templateUrl: 'helloTemplate.html',
    }
  })
  .controller('MyController', ['$scope', ($scope) => {
  }]);
