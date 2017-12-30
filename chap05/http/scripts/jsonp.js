// 2nd
angular.module('myApp', [])
  .controller('MyController', ['$scope', '$http', ($scope, $http) => {
    $scope.onclick = () => {
      $http.jsonp(
        'http://b.hatena.ne.jp/entry/jsonlite/',
        {
          params: {
            callback: 'JSON_CALLBACK',
            url: $scope.url,
          }
        }
      )
      .success((data) => {
        let comments = [];
        $scope.count = data.count + '件';
        angular.forEach(data.bookmarks, (value, index) => {
          if (value.comment !== '') {
            comments.push(value.comment)
          }
        });
        $scope.comments = comments;
      })
      .error((err) => {
        $scope.count = '(エラー)';
        $scope.comments = ['(エラー)'];
      });
    };
  }]);
