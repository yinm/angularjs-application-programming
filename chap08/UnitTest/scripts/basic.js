angular.module('myApp.filter', ['ngSanitize'])
  .filter('nl2br', () => {
    return (value) => {
      if (!angular.isString(value)) { return value; }
      return value.replace(/\r?\n/g, '<br />');
    };
  });
