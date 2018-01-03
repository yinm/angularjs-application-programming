angular.module('myApp', [])
  .directive('myImageBtn', () => {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        preSrc: '@',
        postSrc: '@',
      },
      template: '<img src="{{src}}" ng-mouseenter="onenter()" ng-mouseleave="onleave()">',
      link: (scope, element, attrs, controller) => {
        scope.src = scope.preSrc;

        scope.onenter = () => {
          scope.src = scope.postSrc;
        };

        scope.onleave = () => {
          scope.src = scope.preSrc;
        };
      },
    }
  })
  .controller('MyController', ['$scope', ($scope) => {
  }]);
