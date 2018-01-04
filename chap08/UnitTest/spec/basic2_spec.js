describe('nl2brフィルターのテスト', () => {
  let $filter;

  beforeEach(module('myApp.filter2'));

  beforeEach(inject(function(_$filter_) {
    $filter = _$filter_;
  }));

  it('改行付き文字列を変換する', () => {
    const str = 'こんにちは、世界！\nこんにちは、赤ちゃん！';
    const result = 'こんにちは、世界！<br />こんにちは、赤ちゃん！';

    const nl2br = $filter('nl2br');
    expect(nl2br(str)).toEqual(result);
  });
});
