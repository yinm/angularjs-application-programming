angular.module('myApp', [])
  .service('SharedService', function() {
    const MyService = function() {
      this.name = '権兵衛'
      this.getMessage = () => {
        return `こんにちは、${this.name}さん！`
      }
    }

    return () => {
      return new MyService()
    }
  })
  .controller('PrevController', ['$scope', 'SharedService', ($scope, SharedService) => {
    let svc = SharedService()
    $scope.shared = svc
    $scope.name = svc.name
    $scope.onclick = () => {
      svc.name = $scope.name
    }
  }])
  .controller('NextController', ['$scope', 'SharedService', ($scope, SharedService) => {
    let svc = SharedService()
    $scope.shared = svc
    $scope.name = svc.name
    $scope.onclick = () => {
      svc.name = $scope.name
    }
  }])
