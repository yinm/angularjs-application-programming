angular.module('myApp', [])
  .filter('grep', () => {
    return (values, callback) => {
      if (!angular.isArray(values)) {
        return values
      }

      let result = []
      angular.forEach(values, (value) => {
        if (callback(value)) {
          result.push(value)
        }
      })

      return result
    }
  })
  .controller('MyController', ['$scope', ($scope) => {
    $scope.data = ['あいうえお', 'かきくけ', 'さしす', 'たちつてと', 'な']

    $scope.myFilter = (value) => {
      return String(value).length < 5
    }
  }])