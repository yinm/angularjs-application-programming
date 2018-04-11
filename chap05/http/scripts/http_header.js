angular.module('myApp', [])
  .config(['$httpProvider', ($httpProvider) => {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  }])
  .controller('MyController', ['$scope', '$http', ($scope, $http) => {
    $scope.onclick = () => {
      $http({
        method: 'GET',
        url: 'http.php',
        params: { name: $scope.name },
      })
        .success((data, status, headers, config) => {
          $scope.result = data
        })
        .error((data, status, headers, config) => {
          $scope.result = '通信失敗'
        })
    }
  }])