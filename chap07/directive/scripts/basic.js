angular.module('myApp', [])
  .directive('myHello', () => {
    return {
      restrict: 'E',
      replace: true,
      template: '<div>こんにちは、ディレクティブ！</div>',
    }
  })
  .controller('MyController', ['$scope', ($scope) => {
  }]);
