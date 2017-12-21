// 1st
angular.module('myApp', [])
  .controller('MyController', ['$scope', '$http', function($scope, $http) {
    $scope.onclick = function() {
      $http({
        method: 'POST',
        url: 'http.php',
        data: { name: $scope.name }
      })
      .success(function(data, status, headers, config) {
        $scope.result = data;
      })
      .error(function(data, status, headers, config) {
        $scope.result = '!!通信に失敗しました!!';
      });
    };
  }]);
