class MyService {
  constructor() {
    this.name = '権兵衛'
  }

  getMessage() {
    return `こんにちは、${this.name}さん！`
  }
}

angular.module('myApp', [])
  .service('SharedService', () => {
    return () => new MyService()
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
