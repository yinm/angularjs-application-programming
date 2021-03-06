angular.module('myApp')
  // .controller('MainController', ['$scope', ($scope) => {
  //   $scope.msg = 'ようこそ'
  // }])
  //

  // .controller('MainController', ['$scope', '$location', ($scope, $location) => {
  //   $scope.msg = 'ようこそ'
  //   $scope.onClick = () => {
  //     $location.path('/articles/13')
  //   }
  // }])

  .controller('MainController', ['$scope', '$window', ($scope, $window) => {
    $scope.msg = '$window'
    $scope.onClick = () => {
      $window.location.href = 'route.html#/articles/13'
    }
  }])

  .controller('ResolveController',
    ['$scope', 'CurrentPosition', function($scope, CurrentPosition) {
      $scope.pos = CurrentPosition;
    }])

  .controller('ArticlesController', ['$scope', '$routeParams', ($scope, $routeParams) => {
    $scope.id = $routeParams.id
  }])

  // 第6章 ルーティング関連の$broadcastイベント
  /*
    .controller('ArticlesController',[
      '$scope', '$routeParams', '$location', '$anchorScroll',
      function($scope, $routeParams, $location, $anchorScroll) {
        $scope.id = $routeParams.id;
        $scope.$on('$routeChangeSuccess', function(e, new_r, old_r) {
          $location.hash($routeParams.scroll);
          $anchorScroll();
        });
    }])
  */

  .controller('SearchController', ['$scope', '$routeParams', ($scope, $routeParams) => {
    $scope.keyword = $routeParams.keyword
  }])
