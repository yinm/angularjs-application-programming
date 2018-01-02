angular.module('myApp', [])
  .directive('compileLink', () => {
    return {
      restrict: 'E',
      compile: (element, attrs) => {
        console.log(`compile: ${attrs.type}`);
        return {
          pre: (scope, element, attrs, controller) => {
            console.log(`prelink: ${attrs.type}`);
          },
          post: (scope, element, attrs, controller) => {
            console.log(`postlink: ${attrs.type}`);
          }
        };
      },
    };
  })
  .controller('MyController', ['$scope', ($scope) => {
    $scope.data = ['い', 'ろ', 'は', 'に', 'ほ'];
  }]);