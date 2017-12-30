angular.module('myApp', [])
  .config(['$httpProvider', ($httpProvider) => {
    $httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
  }])
  .controller('MyController', ['$scope', '$http', ($scope, $http) => {
    $scope.onclick = () => {
      $http.get(
        'http.php',
        {
          params: {
            name: $scope.name,
          },
        },
      )
      .success((data, status, headers, config) => {
        $scope.result = data;
      })
      .error((data, status, headers, config) => {
        $scope.result = '!!通信に失敗しました!!';
      });
    };
  }]);
