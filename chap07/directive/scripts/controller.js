angular.module('myApp', [])
  .directive('myTabPanel', () => {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        active: '@',
      },
      template:
        '<div class="container">' +
        '  <ul>' +
        '    <li ng-repeat="tab in tabs" ng-class="{selected:tab.selected}">' +
        '      <a href="#" ng-click="onselect(tab)">{{tab.title}}</a>' +
        '    </li>' +
        '  </ul>' +
        '  <div class="panel" ng-transclude></div>' +
        '</div>',
      controller: ['$scope', function($scope) {
        $scope.tabs = [];

        this.addTab = (tab) => {
          $scope.tabs.push(tab);
          if ($scope.tabs.length - 1 === Number($scope.active)) {
            $scope.onselect(tab);
          }
        };

        $scope.onselect = (tab) => {
          angular.forEach($scope.tabs, (t) => {
            t.show = false;
            t.selectd = false;
          });

          tab.show = true;
          tab.selected = true;
        };
      }],
    };
  })
  .directive('myTab', () => {
    return {
      require: '^^myTabPanel',
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div ng-show="show" ng-transclude></div>',
      scope: {
        title: '@'
      },
      link: (scope, element, attrs, panelController) => {
        panelController.addTab(scope);
      },
    };
  })
  .controller('myController', ['$scope', ($scope) => {
  }]);
