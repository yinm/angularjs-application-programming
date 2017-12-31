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

    $q.all([
      asyncProcess('トクジロウ'),
      asyncProcess('ニンザブロウ'),
      asyncProcess('リンリン')
    ])
      .then(
        (o_resolve) => {
          console.log(o_resolve);
        },
        (o_reject) => {
          console.log(o_reject);
        }
      );
  }]);