angular.module('myApp', [])
  .controller('MyController', ['$scope', '$http', ($scope, $http) => {
    $scope.onclick = () => {
      $http({
        method: 'GET',
        url: 'http.php',
        params: { name: $scope.name }
      })
        .success((data, status, headers, config) => {
          $scope.result = data
        })
        .error((data, status, headers, config) => {
          $scope.result = '!!通信に失敗しました!!'
        })
    }
  }])