angular.module('myApp', [])
  .provider('MyLog', function() {
    this.defaults = { logLevel: 4 }
    this.$get = ['$log', function($log) {
      const level = this.defaults.logLevel
      return {
        error(message) {
          if (level > 0) { $log.error(message) }
        },
        warn(message) {
          if (level > 1) { $log.warn(message) }
        },
        info(message) {
          if (level > 2) { $log.info(message) }
        },
        debug(message) {
          if (level > 3) { $log.debug(message) }
        }
      }
    }]
  })
  .config(['MyLogProvider', (MyLogProvider) => {
    MyLogProvider.defaults.logLevel = 3
  }])
  .controller('MyController', ['$scope', 'MyLog', ($scope, MyLog) => {
    MyLog.error('error')
    MyLog.warn('warning')
    MyLog.info('information')
    MyLog.debug('debug')
  }])
