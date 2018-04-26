describe('nl2brフィルターのテスト', () => {
  beforeEach(module('myApp.filter'))

  it('改行', inject(['$filter', ($filter) => {
    const
      str = 'こんにちは、世界！\nこんにちは、赤ちゃん！',
      result = 'こんにちは、世界！<br />こんにちは、赤ちゃん！'

    const nl2br = $filter('nl2br')
    expect(nl2br(str)).toEqual(result)
  }]))
})
