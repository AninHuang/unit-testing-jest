const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// Falsy value in JS: false, 0, "", null, undefind, NaN
test('Should be falsy', () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

// Using toBe will be fail here because toBe is for primitive type
test('User should be Anin Huang object', () => {
  expect(functions.createUser()).toEqual({ 
    firstName: 'Anin', 
    lastName: 'Huang' 
  });
});

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;

  expect(load1 + load2).toBeLessThanOrEqual(1600);
});