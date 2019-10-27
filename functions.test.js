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

// Will be fail here because toBe is for primitive type
test('User should be Anin Huang object', () => {
  expect(functions.createUser()).toBe({ 
    firstName: 'Anin', 
    lastName: 'Huang' 
  });
});