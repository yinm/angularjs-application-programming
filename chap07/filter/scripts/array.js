// 2nd
angular.module('myApp', [])
  .filter('grep', () => {
    return (values, callback) => {
      if (!angular.isArray(values)) {
        return values;
      }

      let results = [];
      angular.forEach(values, (value) => {
        if (callback(value)) {
          results.push(value);
        }
      });
      return results;
    }
  })
  .controller('MyController', ['$scope', ($scope) => {
    $scope.data = ['あいうえお', 'かきくけ', 'さしす', 'たちつてと', 'な'];

    $scope.myFilter = (value) => {
      return String(value).length < 5;
    };
  }]);
