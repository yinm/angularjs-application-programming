angular.module('myApp', [])
  .config(['$logProvider', ($logProvider) => {
    $logProvider.debugEnabled(true);
  }])
  .controller('MyController', ['$scope', '$log', ($scope, $log) => {
    $log.debug('デバッグ');
    $log.error('エラー');
    $log.info('情報');
    $log.log('一般ログ');
    $log.warn('警告');
  }]);