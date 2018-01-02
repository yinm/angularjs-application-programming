angular.module('myApp', [])
  .directive('myHello', () => {
    return {
      restrict: 'EACM',
      replace: true,
      template: '<div>こんにちは、ディレクティブ</div>',
    }
  })
  .controller('MyController', ['$scope', ($scope) => {
  }]);
