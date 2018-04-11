angular.module('myApp', [])
  .controller('MyController', ['$scope', '$http', ($scope, $http) => {
    $scope.onclick = () => {
      $http.get('http.php', {params: {name: $scope.name}})
        .success((data, status, headers, config) => {
          $scope.result = data
        })
        .error((data, status, headers, config) => {
          $scpoe.result = '通信失敗'
        })
    }
  }])
