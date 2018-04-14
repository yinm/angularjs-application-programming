angular.module('myApp', ['ngCookies'])
  .controller('MyController', ['$scope', '$cookies', ($scope, $cookies) => {
    $scope.email = $cookies.get('email')
    $scope.record = true

    $scope.onclick = () => {
      if ($scope.record) {
        const expire = new Date()
        expire.setMonth(expire.getMonth() + 3)
        $cookies.put('email', $scope.email, {
          expires: expire,
        })
      } else {
        $cookies.remove('email')
      }
    }
  }])
