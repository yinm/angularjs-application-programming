angular.module('myApp', [])
  .controller(
    'MyController',
    ['$scope', '$http', '$httpParamSerializerJQLike',
    ($scope, $http, $httpParamSerializerJQLike) => {
      $scope.onclick = () => {
        $http({
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          transformRequest: $httpParamSerializerJQLike,
          url: 'http_request.php',
          data: { name: $scope.name },
        })
        .success((data, status, headers, config) => {
          $scope.result = data;
        })
        .error((data, status, headers, config) => {
          $scope.result = '!!通信に失敗しました!!';
        });
      };
    }]);
