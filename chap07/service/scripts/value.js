angular.module('myApp', [])
  .value('AppTitle', 'AngularJSプログラミング')
  .value('AppInfo', {
    author: '山田理央',
    updated: new Date(2007, 5, 25),
  })
  .value('CommonProc', (value) => {
    console.log(value);
  })
  .controller('MyController', ['$scope', 'AppTitle', 'AppInfo', 'CommonProc',
    ($scope, AppTitle, AppInfo, CommonProc) => {
      $scope.title = AppTitle;
      $scope.info = AppInfo;
      $scope.proc = CommonProc;
  }]);
