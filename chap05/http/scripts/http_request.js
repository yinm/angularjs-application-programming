angular.module('myApp', [])
  .config(['$httpProvider', ($httpProvider) => {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.transformRequest.push((data) => {
      data = JSON.parse(data);
      let query = [];

      for (let key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
      }
      return query.join('&');
    })
  }])

  .controller('MyController', ['$scope', '$http', ($scope, $http) => {
    $scope.onclick = () => {
      $http({
        method: 'POST',
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

/*
  .controller('MyController',
    ['$scope', '$http', '$httpParamSerializerJQLike',
    function($scope, $http, $httpParamSerializerJQLike) {
    $scope.onclick = function() {
      $http({
        method: 'POST',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8'
        },
        transformRequest: $httpParamSerializerJQLike,
        url: 'http_request.php',
        data: { name: $scope.name }
      })
      .success(function(data, status, headers, config){
        $scope.result = data;
      })
      .error(function(data, status, headers, config){
        $scope.result = '!!通信に失敗しました!!';
      });
    };
  }]);
*/
