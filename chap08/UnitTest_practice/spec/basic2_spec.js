describe('nl2br', () => {
  let $filter

  beforeEach(module('myApp.filter2'))

  beforeEach(inject(function(_$filter_) {
    $filter = _$filter_
  }))

  it('改行', () => {
    const
      str = 'こんにちは、世界！\nこんにちは、赤ちゃん！',
      result = 'こんにちは、世界！<br />こんにちは、赤ちゃん！'

    nl2br = $filter('nl2br')
    expect(nl2br(str)).toEqual(result)
  })
})
