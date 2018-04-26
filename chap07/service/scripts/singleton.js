angular.module('myApp', [])
  .service('SharedService', function() {
    this.name = '権兵衛';
    this.getMessage = function() {
      return 'こんにちは、' + this.name + 'さん！';
    }
  })
  .controller('PrevController', ['$scope', 'SharedService',
    function($scope, SharedService) {
    var svc = SharedService;
    $scope.shared = svc;
    $scope.name = svc.name;
    $scope.onclick = function() {
      svc.name = $scope.name;
    };
  }])
  .controller('NextController', ['$scope', 'SharedService',
    function($scope, SharedService) {
    var svc = SharedService;
    $scope.shared = svc;
    $scope.name = svc.name;
    $scope.onclick = function() {
      svc.name = $scope.name;
    };
  }]);

angular.module('myApp', [])
  .service('SharedService', function() {
    this.name = '権兵衛'
    this.getMessage = () => {
      return `こんにちは、${this.name}さん！`
    }
  })
  .controller('PrevController', ['$scope', 'SharedService', ($scope, SharedService) => {
    let svc = SharedService
    $scope.shared = svc
    $scope.name = svc.name
    $scope.onclick = () => {
      svc.name = $scope.name
    }
  }])
  .controller('NextController', ['$scope', 'SharedService', ($scope, SharedService) => {
    let svc = SharedService
    $scope.shared = svc
    $scope.name = svc.name
    $scope.onclick = () => {
      svc.name = $scope.name
    }
  }])
