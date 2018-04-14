angular.module('myApp', [])
  .factory('$exceptionHandler', ['$window', '$log', ($window, $log) => {
    return (exception, cause) => {
      $window.alert('ページで不明なエラーが発生しました。\r'
        + '時間をおいてから、再度アクセスしてください。')
      $log.error(exception)
      $log.error(exception.message)
    }
  }])
  .controller('MyController', ['$scope', ($scope) => {
    throw new Error('エラーが発生しましたん！！！！！！')
  }])