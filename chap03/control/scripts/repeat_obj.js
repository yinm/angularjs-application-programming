angular.module('myApp', [])
  .controller('MyController', ['$scope', ($scope) => {
    $scope.author = {
      name: 'YAMADA, Yoshihiro',
      gender: 'male',
      birth: new Date(1950, 11, 4)
    }
  }])