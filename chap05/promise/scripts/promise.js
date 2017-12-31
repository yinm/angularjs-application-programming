// 2nd
angular.module('myApp', [])
  .controller('MyController', ['$scope', '$timeout', '$log', '$q', ($scope, $timeout, $log, $q) => {
    const asyncProcess = (value) => {
      let deferred = $q.defer();
      $timeout(() => {
        deferred.notify('asyncProcess');

        if (value === undefined || value === '') {
          deferred.reject('入力値が空です');
        } else {
          deferred.resolve(`入力値は${value}`);
        }
      }, 1000);
      return deferred.promise;
    };

    asyncProcess('トクジロウ')
      .then(
        (o_resolve) => {
          $log.info(o_resolve);
          return `** ${o_resolve} **`;
        },
        (o_reject) => {
          $log.info(o_reject);
          return $q.reject(`** ${o_reject} **`);
        },
        (o_notify) => {
          $log.info(o_notify);
        }
      )
      .then(
        (o_resolve) => {
          $log.info(o_resolve);
        },
        (o_reject) => {
          $log.info(o_reject);
        }
      );
  }]);