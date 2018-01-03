angular.module('myApp', [])
  .directive('myCart', () => {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {},
      template: '<div>' +
                '  <ul ng-transclude></ul>' +
                '  <hr>' +
                '  合計:{{ctrl.sum | number}}円' +
                '</div>',
      controllerAs: 'ctrl',
      controller: function() {
        this.sum = 0;

        this.addItem = (item) => {
          this.sum += Number(item.price);
        };
      }
    };
  })
  .directive('myCartItem', () => {
    return {
      require: '^^myCart',
      restrict: 'E',
      replace: true,
      template: '<li>{{title}} ({{price | number}}円)</li>',
      scope: {
        title: '@',
        price: '@',
      },
      link: (scope, element, attrs, cartController) => {
        cartController.addItem(scope);
      },
    };
  })
  .controller('MyController', ['$scope', ($scope) => {
  }]);
