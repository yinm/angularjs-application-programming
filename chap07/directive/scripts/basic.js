angular.module('myApp', [])
  .directive('myHello', () => {
    return {
      restrict: 'E',
      template: '<div>こんにちは、ディレクティブ！</div>'
    }
  })
  .controller('MyController', ['$scope', ($scope) => {
  }])