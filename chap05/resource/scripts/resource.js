angular.module('myApp', ['ngResource'])
  .controller('MyController',
    ['$scope', '$resource', ($scope, $resource) => {
      const Book = $resource(
        'resource.php/:isbn',
        { isbn: '@isbn' },
        { update: { method: 'PUT' } }
      )

      $scope.books = Book.query()

      $scope.oninsert = () => {
        Book.save(
          $scope.book,
          () => {
            $scope.books = Book.query()
          }
        )
      }

      $scope.onedit = (isbn) => {
        $scope.book = Book.get({ isbn: isbn })
      }

      $scope.onupdate = () => {
        Book.update(
          $scope.book,
          () => {
            $scope.books = Book.query()
          }
        )
      }

      $scope.ondelete = (isbn) => {
        Book.delete(
          { isbn: isbn },
          () => {
            $scope.books = Book.query()
          }
        )
      }
    }])