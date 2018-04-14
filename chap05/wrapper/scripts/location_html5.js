angular.module('myApp', [])
  .config(['$locationProvider', ($locationProvider) => {
    $locationProvider.html5Mode(true)
  }])
  .controller('MyController', ['$scope', '$location', ($scope, $location) => {
    $scope.onClick = () => {
      $location.url('articles?id=108#wings')
    }
  }])
