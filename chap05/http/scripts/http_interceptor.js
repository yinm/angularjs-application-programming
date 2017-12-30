angular.module('myApp', [])
  .config(['$httpProvider', ($httpProvider) => {
    $httpProvider.interceptors.push(
      ['$q', '$log', '$window', ($q, $log, $window) => {
        return {
          'request': (config) => {
            config.startTime = (new Date()).getTime();
            $log.info('request...');
            $log.info(config);
            return config;
          },
          'requestError': (rejection) => {
            $log.info('requestError...');
            $log.info(rejection);
            return $q.reject(rejection);
          },
          'response': (response) => {
            response.config.endTime = (new Date()).getTime();
            $log.info('Process Time(sec): ' + (response.config.endTime - response.config.startTime) / 1000);

            $log.info('response...');
            $log.info(response);
            return response;
          },
          'responseError': (rejection) => {
            if (rejection.status === 500) {
              $window.alert('$http service failed !');
              location.href = 'top.html';
            }
            $log.info('responseError...');
            $log.info(rejection);
            return $q.reject(rejection);
          }
        };
      }]);
  }])
  .controller('MyController', ['$scope', '$http', ($scope, $http) => {
    $scope.onclick = () => {
      $http({
        method: 'POST',
        url: 'http_interceptor.php',
        data: { name: $scope.name },
      })
      .success((data, status, headers, config) => {
        $scope.result = data;
      })
      .error((data, status, headers, config) => {
        $scope.result = '!!通信に失敗しました!!';
      });
    };
  }]);
