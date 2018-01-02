angular.module('myApp', [])
  .directive('myHello', () => {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        type: '=',
        name: '@',
        click: '&',
      },
      template: '<div ng-click="click()">{{type}}、{{name}}さん！</div>',
    }
  })
  .controller('MyController', ['$scope', '$window', ($scope, $window) => {
    $scope.greeting = 'おはよう';
    $scope.name = '山田';
    $scope.onclick = () => {
      $window.alert('クリックされました！');
    };
  }]);
