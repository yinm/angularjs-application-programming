angular.module('myApp', [])
  .directive('myHello', () => {
    return {
      restrict: 'E',
      templateUrl: 'helloTemplate2.html',
    }
  })
  .controller('MyController', ['$scope', ($scope) => {
  }]);
