angular.module('myApp', ['ngRoute'])
  .factory('MyPosition', ['$q', '$window', ($q, $window) => {
    const deferred = $q.defer();
    $window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        return deferred.resolve(pos.coords);
      }
    );
    return deferred.promise;
  }])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
      })
      .when('/resolve', {
        templateUrl: 'views/resolve.html',
        controller: 'ResolveController',
        resolve: {
          CurrentPosition: 'MyPosition'
        },
      })
      .when('/articles/:id', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesController',
      })
      .when('/search/keyword+', {
        templateUrl: 'views/search.html',
        controller: 'SearchController',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
