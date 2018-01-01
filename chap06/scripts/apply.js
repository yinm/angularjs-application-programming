angular.module('myApp', [])
  .controller('MyController', ['$scope', '$window', ($scope, $window) => {
    $window.navigator.geolocation.watchPosition(
      (pos) => {
        if (!$scope.$$phase) {
          $scope.$apply((scope) => {
            scope.latitude = pos.coords.latitude;
            scope.longitude = pos.coords.longitude;
          });
        }
      },
      (e) => {
        $window.alert(e.message);
      }
    );
  }]);
