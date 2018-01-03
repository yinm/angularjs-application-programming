// 2nd
angular.module('myApp', [])
  .directive('myBook', () => {
    return {
      restrict: 'E',
      replace: true,
      scope: false,
      template: '<div>{{book.title}} ({{book.price | number}}円/{{book.publish}})</div>',
    }
  })
  .controller('MyController', ['$scope', ($scope) => {
    $scope.book = {
      title: 'JavaScript本格入門',
      price: 2980,
      publish: '技術評論社',
    };
  }]);
