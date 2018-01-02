angular.module('myApp', [])
  .filter('percent', ['$filter', ($filter) => {
    return (value, fraction) => {
      if (!angular.isNumber(value)) {
        return value;
      }
      if (!angular.isNumber(fraction)) {
        fraction = 0;
      }
      return $filter('number')(value * 100, fraction) + '%';
    }
  }]);
