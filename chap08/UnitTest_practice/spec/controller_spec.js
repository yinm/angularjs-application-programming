describe('MyController', () => {
  let scope

  beforeEach(module('myApp.controller'))

  beforeEach(inject(function(_$rootScope_, _$controller_) {
    const $rootScope = _$rootScope_
    const $controller = _$controller_
    scope = $rootScope.$new()
    $controller('MyController', { $scope: scope })
  }))

  it('スコープのチェック', () => {
    expect(scope.greeting).toEqual('こんにちは、権兵衛さん！')
    scope.myName = '山田'
    scope.onclick()
    expect(scope.greeting).toEqual('こんにちは、山田さん！')
  })
})
