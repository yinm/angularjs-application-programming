angular.module('myApp', [])
  .controller('MyController', ['$scope', '$sce', ($scope, $sce) => {
    const memo = '<p onmouseover="alert(\'OK!\')">ようこそ</p>'
      + '<a href="http://www.wings.msn.to">WINGSへ</a>'
      + '<script>var x = 1;</script>'
      + '<button>応募</button>';

    $scope.memo = $sce.trustAsHtml(memo)
  }])
