angular.module('myApp', [])
  .controller('MyController', ['$scope', '$window', '$timeout', ($scope, $window, $timeout) => {
    $window.navigator.geolocation.watchPosition(
      (pos) => {
        $timeout(() => {
          $scope.latitude = pos.coords.latitude
          $scope.longitude = pos.coords.longitude
        })
      },
      (e) => {
        console.log(e.message)
      }
    )
  }])
