angular.module('myApp', [])
  .config(['$provide', ($provide) => {
    $provide.value('AppTitle', 'AngularJSプログラミング');
    $provide.value('AppInfo', {
      author: '山田理央',
      updated: new Date(2007, 5, 25),
    });
    $provide.value('CommonProc', (value) => {
      console.log(value);
    })
  }])
  .controller('MyController', ['$scope', 'AppTitle', 'AppInfo', 'CommonProc',
    ($scope, AppTitle, AppInfo, CommonProc) => {
      $scope.title = AppTitle;
      $scope.info = AppInfo;
      $scope.proc = CommonProc;
  }]);
