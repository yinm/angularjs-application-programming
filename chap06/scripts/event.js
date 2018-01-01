// 2nd
angular.module('myApp', [])
  .controller('MyController', ['$scope', ($scope) => {
    $scope.onemit = () => {
      $scope.$emit('notify', 'Emit');
    };

    $scope.onbroad = () => {
      $scope.$broadcast('notify', 'Broadcast', new Date());
    };
  }])
  .controller('ParentController', ['$scope', ($scope) => {
    $scope.$on('notify', (e, data) => {
      $scope.parentResult = `${e.name}/${e.targetScope.message}/${data}`;
    });
  }])
  .controller('Child1Controller', ['$scope', ($scope) => {
    $scope.$on('notify', (e, data, current) => {
      $scope.child1Result = `${e.name}/${e.targetScope.message}/${data}/${current.toLocaleString()}`;
    });
  }])
  .controller('Child2Controller', ['$scope', ($scope) => {
    $scope.$on('notify', (e, data, current) => {
      $scope.child2Result = `${e.name}/${e.targetScope.message}/${data}/${current.toLocaleString()}`;
    });
  }]);
