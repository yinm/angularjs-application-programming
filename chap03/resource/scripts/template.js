angular.module('myApp', [])
  .run(['$templateRequest', function($templateRequest) {
    $templateRequest('templates/execution.html');
    $templateRequest('templates/tempo.html');
  }])
  .controller('MyController', ['$scope', function($scope) {
    $scope.templates = [
      { title: 'execution', url: 'templates/execution.html' },
      { title: 'tempo', url: 'templates/tempo.html' }
    ];

    $scope.onload = function() {
      console.log($scope.template);
    };
  }]);
