angular.module('myApp', ['ngResource'])
  .controller('MyController',
    ['$scope', '$resource', ($scope, $resource) => {
      const Book = $resource(
        'resource.php/:isbn',
        { isbn: '@isbn' },
        { update: { method: 'PUT' } }
      )
      $scope.books = Book.query()

      let b = Book.get({ isbn: '978-4-7741-7078-7' }, () => {
        b.title = 'サーバサイドJavaポケットリファレンス'
        b.$update(() => {
          $scope.books = Book.query()
        })
      })

      Book.get({ isbn: '978-4-7741-7078-7' }, (b) => {
        b.title = 'サーバサイドJavaポケットリファレンス'
        b.$update(() => {
          $scope.books = Book.query()
        })
      })

      boook = new Book({ isbn: '978-4-7741-9999-0' })
      boook.title = 'AngularJSポケットリファレンス'
      boook.price = 3000
      boook.publish = '技術評論社'
      boook.published = '2015-10-10'
      boook.$save(() => {
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
  }])
