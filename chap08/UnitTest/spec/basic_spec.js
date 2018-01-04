describe('nl2brフィルターのテスト', () => {
  beforeEach(module('myApp.filter'));

  it('改行付き文字列を置換する', inject(function($filter) {
    const str = 'こんにちは、世界！\nこんにちは、赤ちゃん！';
    const actual = 'こんにちは、世界！<br />こんにちは、赤ちゃん！';

    const nl2br = $filter('nl2br');
    expect(nl2br(str)).toEqual(actual);
  }));
});
