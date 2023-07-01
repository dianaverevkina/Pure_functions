import showHealth from '../showHealth';

// test('cashback at sum: 500', () => {
//   const result = calculateCashback(500);
//   expect(result).toBe(0);
// });

const dataList = [
  ['green', 50, 'healthy'],
  ['yellow', 15, 'wounded'],
  ['red', 10, 'critical'],
];

const handler = test.each(dataList);
handler('testing showHealth function with %s indicator and %i health', (_, health, expected) => {
  const result = showHealth({ health });
  expect(result).toBe(expected);
});
