const difMaxMin = require('./index.js');
// const difMaxMin = require('./solution.js');

describe('En Büyük ve En Küçük Sayı Arasındaki Fark Testleri', () => {
  test('[1,5,11,145,51,2] için 144 dönüyor mu?', () => {
    expect(difMaxMin([1, 5, 11, 145, 51, 2])).toBe(144);
  });

  test('[2,9,-13,14] için 27 dönüyor mu?', () => {
    expect(difMaxMin([2, 9, -13, 14])).toBe(27);
  });

  test('Fonksiyonun dönüş değeri number mı?', () => {
    const result = difMaxMin([1, 5, 11, 145, 51, 2]);
    expect(typeof result).toBe('number');
  });
});