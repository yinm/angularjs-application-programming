angular.module('myApp', ['ngCookies'])
  .controller('MyController', ['$scope', '$cookies', ($scope, $cookies) => {
    const data = {
      name: 'yamada',
      old: new Date(2007, 6, 25),
      sex: 'male',
    }
    $cookies.putObject('data', data)
    console.log($cookies.getObject('data').old)
  }])
