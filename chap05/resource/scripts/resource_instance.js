// 2nd
angular.module('myApp', ['ngResource'])
  .controller('MyController',
    ['$scope', '$resource', ($scope, $resource) => {
      const Book = $resource(
        'resource.php/:isbn',
        { isbn: '@isbn' },
        { update: { method: 'PUT' } }
      )
      $scope.books = Book.query()

      const book1 = Book.get({ isbn: '978-4-7741-7078-7' }, () => {
        book1.title = 'サーバーサイド'
        book1.$update(() => {
          $scope.books = Book.query()
        })
      })

      Book.get({ isbn: '978-4-7741-7078-7' }, (b) => {
        b.title = 'サーバーサイドfooobar'
        b.$update(() => {
          $scope.books = Book.query()
        })
      })

      const book2 = new Book({ isbn: '978-4-7741-9999-0' })
      book2.title = 'Angular'
      book2.price = 3000
      book2.publish = 'foo'
      book2.published = '2015-10-10'
      book2.$save(() => {
        $scope.books = Book.query()
      })

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

    }]
  )
