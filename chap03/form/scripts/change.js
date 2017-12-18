// 1st
angular.module('myApp', [])
  .controller('MyController', ['$scope', function($scope) {
    const MAX = 140;
    $scope.count = MAX;
    $scope.myStyle = { color: '#00f' };

    $scope.onchange = function() {
      $scope.count = MAX - $scope.tweet.length;
      if ($scope.count > 10) {
        $scope.myStyle = { color: '#00f' };
      } else if ($scope.count > 0) {
        $scope.myStyle = { color: '#f0f' };
      } else {
        $scope.myStyle = { color: '#f00', fontWeight: 'bold' };
      }
    };
  }]);
