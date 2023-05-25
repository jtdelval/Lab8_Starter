// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('Phone Number SQL Injection', () => {
    expect(functions.isPhoneNumber('(858)-534-2230\'); DROP TABLE \'Students\';--')).toBe(true);
  });

test('Phone Number Extremely Long', () => {
    expect(functions.isPhoneNumber('123098409587093784509347823254123-45671234897014293781034298')).toBe(true);
  });

test('Phone Number No Dashes', () => {
expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('Phone Number Too Short', () => {
expect(functions.isPhoneNumber('123')).toBe(false);
});

test('Email standard', () => {
expect(functions.isEmail('shoko_asahara@shinrikyo.aum')).toBe(true);
});

test('Email limits', () => {
expect(functions.isEmail('22_A1@wOaH.GG')).toBe(true);
});

test('Email Long Tail', () => {
expect(functions.isEmail('john@titor.long')).toBe(false);
});

test('Email No name', () => {
expect(functions.isEmail('@nanashi.jp')).toBe(false);
});

test('Password password', () => {
expect(functions.isStrongPassword('password')).toBe(true);
});

test('Password admin', () => {
expect(functions.isStrongPassword('admin')).toBe(true);
});

test('Password Starts with a number', () => {
expect(functions.isStrongPassword('2i4m4STR0NGp4ss')).toBe(false);
});

test('Password Special Character', () => {
expect(functions.isStrongPassword('w1jV@x2c$4^THha')).toBe(false);
});

test('Date Maxxed', () => {
expect(functions.isDate('99/99/9999')).toBe(true);
});

test('Date Year 0', () => {
expect(functions.isDate('0/0/0000')).toBe(true);
});

test('Date Short Year', () => {
expect(functions.isDate('5/24/23')).toBe(false);
});

test('Date Wrong Order', () => {
expect(functions.isDate('2023/05/24')).toBe(false);
});

test('Hex Standard', () => {
    expect(functions.isHexColor('#7fffd4')).toBe(true);
});

test('Hex Short', () => {
    expect(functions.isHexColor('fed')).toBe(true);
});

test('Hex too long', () => {
    expect(functions.isHexColor('E0115FB')).toBe(false);
});

test('Hex Bad Letter', () => {
    expect(functions.isHexColor('#borges')).toBe(false);
});


  