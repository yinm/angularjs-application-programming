angular.module('myApp', [])
  .controller('PrevController', ['$scope', '$rootScope', ($scope, $rootScope) => {
    $scope.onclick = () => {
      $rootScope.$broadcast('textChanged', $scope.name);
    };
  }])
  .controller('NextController', ['$scope', ($scope) => {
    $scope.$on('textChanged', (e, data) => {
      $scope.result = `こんにちは、${data}さん！`;
    });
  }]);