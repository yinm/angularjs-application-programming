angular.module('myApp', [])
  .directive('myMenu', ['$compile', ($compile) => {
    return {
      restrict: 'E',
      scope: {
        src: '=',
      },
      template:   '<ul class="menu">'
                + '<li>'
                + '<span ng-click="ontoggle()">* </span>'
                + '<a href="{{src.path}}">{{src.title}}</a>'
                + '<div ng-show="show"></div>'
                + '</li>'
                + '</ul>',
      replace: true,
      compile: (element, attrs) => {
        const template = '<li ng-repeat="item in src.subs">'
                       + '<my-menu src="item"></my-menu>'
                       + '</li>';

        return (scope, element, attrs) => {
          const link = $compile(template);
          link(scope, (cloned) => {
            element.find('div').append(cloned);
          });

          scope.ontoggle = () => {
            scope.show = !scope.show;
          };
        };
      },
    };
  }])
  .controller('MyController', ['$scope', ($scope) => {
    $scope.menu = {
      title: 'ホーム',
      path: 'index.html',
      subs: [
        {
          title: '書籍情報',
          path: 'books.html',
        },
        {
          title: '記事一覧',
          path: 'articles.html',
          subs: [
            {
              title: 'JavaScript関連',
              path: 'js.html',
              subs: [
                {
                  title: 'jQuery',
                  path: 'jq.html',
                },
                {
                  title: 'AngularJS',
                  path: 'angular.html',
                }
              ],
            },
            {
              title: 'Java関連',
              path: 'java.html',
            },
            {
              title: 'データベース関連',
              path: 'db.html',
            },
          ],
        },
      ],
    };
  }]);
