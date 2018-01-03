angular.module('myApp', [])
  .directive('myHelloName', () => {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div>こんにちは、<span ng-transclude></span>さん！</div>',
    };
  })
  .controller('MyController', ['$scope', ($scope) => {
  }]);
