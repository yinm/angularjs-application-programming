angular.module('myApp', [])
  .controller('MyController', ['$scope', '$http', '$q', '$window', ($scope, $http, $q, $window) => {
    $scope.onclick = () => {
      const getGeoPosition = (success, error) => {
        let deferred = $q.defer();
        $window.navigator.geolocation.getCurrentPosition(
          (pos) => {
            return deferred.resolve(pos.coords);
          },
          (err) => {
            return deferred.reject(err);
          }
        );
        return deferred.promise;
      };

      // 動かない。APIの提供が終わってるっぽい？
      const getSunset = (coords) => {
        const today = new Date();
        return $http.jsonp('http://www.finds.jp/ws/movesun.php',
          {
            params: {
              jsonp: 'JSON_CALLBACK',
              lat: coords.latitude,
              lon: coords.longitude,
              y: today.getFullYear(),
              m: today.getMonth() + 1,
              d: today.getDate(),
              tz: 9.0,
              e: 0
            }
          }
        );
      };

      getGeoPosition()
        .then(
          (coords) => {
            return getSunset(coords);
          }
        )
        .then(
          (data) => {
            angular.forEach(data.data.result.event, (value, index) => {
              if (value.type === 'daytime' && value.boundary === 'end') {
                $scope.result = new Date(value.time).toLocaleString();
              }
            });
          },
          (err) => {
            $window.alert(err.message);
          }
        );
    };
  }]);