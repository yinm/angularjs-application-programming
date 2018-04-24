angular.module('myApp', [])
  .config(['$provide', ($provide) => {
    $provide.decorator('$log', ['$delegate', '$window', ($delegate, $window) => {
      $delegate.error = (message) => {
        $window.alert(message)
      }
      return $delegate
    }])
  }])
  .controller('MyController', ['$scope', '$log', ($scope, $log) => {
    $log.error('error')
    $log.warn('warn')
  }])