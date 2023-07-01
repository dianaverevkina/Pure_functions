import showHealth from '../showHealth';

test.each([
  ['green', 50, 'healthy'],
  ['yellow', 15, 'wounded'],
  ['red', 10, 'critical'],
])(
  ('testing showHealth function with %s indicator and %i health'),
  (_, health, expected) => {
    const result = showHealth({ health });
    expect(result).toBe(expected);
  },
);
