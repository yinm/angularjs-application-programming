angular.module('myApp', [])
  .directive('myHello', () => {
    return {
      restrict: 'E',
      scope: {
        type: '=myType',
        name: '@myName',
        click: '&myClick'
      },
      template: '<div ng-click="click()">{{type}}、{{name}}さん！</div>'
    }
  })
  .controller('MyController', ['$scope', '$window', ($scope, $window) => {
    $scope.greeting = 'おはよう'
    $scope.onclick = () => {
      $window.alert('クリックされました')
    }
  }])
