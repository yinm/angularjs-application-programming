angular.module('myApp', [])
  .service('SharedService', function() {
    this.name = '権兵衛';
    this.getMessage = () => {
      return `こんにちは、${this.name}さん！`;
    }
  })
  .controller('PrevController', ['$scope', 'SharedService',
    ($scope, SharedService) => {
      $scope.name = SharedService.name;
      $scope.onclick = () => {
        SharedService.name = $scope.name;
      };
  }])
  .controller('NextController', ['$scope', 'SharedService',
    ($scope, SharedService) => {
      $scope.shared = SharedService;
  }]);
