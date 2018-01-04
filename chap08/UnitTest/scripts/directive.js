angular.module('myApp.directive', [])
  .directive('myBook', () => {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        book: '=myBook'
      },
      template: '<div>{{book.title}}（{{book.price | number}}円／{{book.publish}}）</div>',
    };
  })
  .controller('myController', ['$scope', ($scope) => {
    $scope.data = {
      title: 'JavaScript本格入門',
      price: 2980,
      publish: '技術評論社',
    };
  }]);
