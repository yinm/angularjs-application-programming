angular.module('myApp', [])
  .controller('MyController', ['$scope', '$timeout', '$log', '$q', ($scope, $timeout, $log, $q) => {
    const asyncProcess = (value) => {
      const deferred = $q.defer()
      $timeout(
        () => {
          deferred.notify('asyncProcess')
          if (value === undefined || value === '') {
            deferred.reject('入力値が空です')
          } else {
            deferred.resolve(`入力値は${value}`)
          }
        }, 1000)

      return deferred.promise
    }

    asyncProcess('トクジロウ')
      .then(
        (resolve) => {
          $log.info(resolve)
          return `**${resolve}**`
        },
        (reject) => {
          $log.info(reject)
          return `**${reject}**`
        },
        (notify) => {
          $log.info(notify)
        }
      )
      .then(
        (resolve) => {
          $log.info(resolve)
        },
        (reject) => {
          $log.info(reject)
        }
      )
  }])