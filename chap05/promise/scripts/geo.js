angular.module('myApp', [])
  .controller('MyController', ['$scope', '$http', '$q', '$window', ($scope, $http, $q, $window) => {
    $scope.onclick = () => {
      const getGeoPosition = (success, error) => {
        const deferred = $q.defer()

        $window.navigator.geolocation.getCurrentPosition(
          (pos) => {
            return deferred.resolve(pos.coords)
          },
          (err) => {
            return deferred.reject(err)
          }
        )

        return deferred.promise
      }

      const getSunset = (coords) => {
        const deferred = $q.defer()

        const stub = {
          data: {
            result: {
              event: [
                {
                  type: 'daytime',
                  boundary: 'end',
                  time: new Date(),
                }
              ]
            }
          }
        }

        deferred.resolve(stub)

        return deferred.promise
      }

      getGeoPosition()
        .then(
          (coords) => {
            return getSunset(coords)
          }
        )
        .then(
          (data) => {
            angular.forEach(data.data.result.event, (value, index) => {
              if (value.type === 'daytime' && value.boundary === 'end') {
                $scope.result = new Date(value.time).toLocaleString()
              }
            })
          },
          (err) => {
            $window.alert(err.message)
          }
        )
    }
  }])
