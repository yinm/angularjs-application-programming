// 1st
angular.module('myApp', [])
  .controller('MyController', ['$scope', function($scope) {
    $scope.favs = [ '山田理央', '鈴木洋平' ];
  }]);
