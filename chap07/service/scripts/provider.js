angular.module('myApp', [])
  .provider('MyLog', function() {
    this.defaults = { loglevel: 4 };
    this.$get = ['$log', ($log) => {
      const level = this.defaults.loglevel;

      return {
        error: (message) => {
          if (level > 0) { $log.error(message); }
        },
        warn: (message) => {
          if (level > 1) { $log.warn(message); }
        },
        info: (message) => {
          if (level > 2) { $log.info(message); }
        },
        debug: (message) => {
          if (level > 3) { $log.debug(message); }
        }
      }
    }]
  })
  .config(['MyLogProvider', (MyLogProvider) => {
    MyLogProvider.defaults.loglevel = 3;
  }])
  .controller('MyController', ['$scope', 'MyLog', ($scope, MyLog) => {
    MyLog.error('エラー');
    MyLog.warn('警告');
    MyLog.info('情報');
    MyLog.debug('デバッグ');
  }]);
