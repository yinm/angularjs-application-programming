angular.module('myApp', ['ngCookies'])
  .config(['$cookiesProvider', ($cookiesProvider) => {
    let expire = new Date();
    expire.setMonth(expire.getMonth() + 6);
    $cookiesProvider.defaults.expires = expire;
  }])
  .controller('MyController', ['$scope', '$cookies', ($scope, $cookies) => {
    $scope.email = $cookies.get('email');
    $scope.record = true;

    $scope.onclick = () => {
      if ($scope.record) {
        $cookies.put('email', $scope.email);
      } else {
        $cookies.remove('email');
      }
    };
  }]);