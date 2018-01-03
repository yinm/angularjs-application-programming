angular.module('myApp', [])
  .directive('button', () => {
    return {
      restrict: 'E',
      compile: (element, attrs) => {
        element.addClass('btn');

        if (attrs.type) {
          const data = {
            submit: 'primary',
            reset: 'warning',
            button: 'default',
          };
          element.addClass(`btn-${data[attrs.type]}`);
        }

        if (attrs.block === 'block') {
          element.addClass('btn-block');
        }
      },
    }
  })
  .controller('MyController', ['$scope', ($scope) => {
  }]);
