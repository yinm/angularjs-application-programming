angular.module('myApp', [])
  .directive('myRandomDecorate', () => {
    return {
      restrict: 'A',
      multiElement: true,
      scope: {
        color: '@',
        bgcolor: '@',
      },
      compile: (elements, attrs) => {
        const selectColor = (colors) => {
          const list = colors.split(',');
          return list[Math.floor(Math.random() * list.length)];
        };
        return (scope, elements, attrs) => {
          angular.forEach(elements, (elm) => {
            if (elm.nodeType !== Node.ELEMENT_NODE) { return; }
            let e = angular.element(elm);
            if (attrs.color) {
              e.css('color', selectColor(attrs.color));
            }
            if (attrs.bgcolor) {
              e.css('background-color', selectColor(attrs.bgcolor));
            }
          });
        }
      },
    };
  })
  .controller('MyController', ['$scope', ($scope) => {
  }]);
