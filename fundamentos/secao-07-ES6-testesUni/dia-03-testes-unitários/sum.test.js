const sum = require('./sum');

describe('testes com a função sum().', () =>{
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test ('adds 10 + 20 to equal 30',() =>{
    expect(sum(10,20)).toBe(30);
});
test ('adds 5.1 + 6.55 to equal 11.65',() =>{
    expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
});
})