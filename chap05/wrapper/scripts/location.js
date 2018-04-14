angular.module('myApp', [])
  /*
    .config(function($locationProvider){
       $locationProvider.hashPrefix('!');
    })
  */

  .controller('MyController', ['$scope', '$location', ($scope, $location) => {
    $scope.onClick = () => {
      $location.url('articles?id=108#wings')
    }

    if ($location.path() === '/articles') {
      console.log(`id値: ${$location.search().id}`)
    }
  }])
