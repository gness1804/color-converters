const test = require('ava');
const execa = require('execa');
const path = require('path');

const rgbToHex = path.join(__dirname, '../rgbToHex.js');

test('rgbToHex -- fails if no arguments are passed', async (t) => {
  const { stdout } = await execa.command(`node ${rgbToHex}`);
  t.true(
    stdout.includes(
      'Error: invalid input. You need 3 arguments, each of them 0-255.',
    ),
  );
});

test('rgbToHex -- fails if fewer than 3 valid arguments are passed', async (t) => {
  const { stdout } = await execa.command(`node ${rgbToHex} -r 255 -g 0`);
  t.true(
    stdout.includes(
      'Error: invalid input. You need 3 arguments, each of them 0-255.',
    ),
  );
});

test('rgbToHex -- fails if one or more arguments is out of range (lower than 0)', async (t) => {
  const { stdout } = await execa.command(`node ${rgbToHex} -r 255 -g 0 -b -2`);
  t.true(
    stdout.includes(
      'Error: invalid input. You need 3 arguments, each of them 0-255.',
    ),
  );
});

test('rgbToHex -- fails if one or more arguments is out of range (greater than 255)', async (t) => {
  const { stdout } = await execa.command(`node ${rgbToHex} -r 256 -g 0 -b 0`);
  t.true(
    stdout.includes(
      'Error: invalid input. You need 3 arguments, each of them 0-255.',
    ),
  );
});

test('rgbToHex -- fails if one or more arguments is not a number', async (t) => {
  const { stdout } = await execa.command(`node ${rgbToHex} -r 256 -g 0 -b q`);
  t.true(
    stdout.includes(
      'Error: invalid input. You need 3 arguments, each of them 0-255. One or more arguments you passed in is not a number. Please try again.',
    ),
  );
});

test('rgbToHex -- fails if one or more arguments is a non-integer number', async (t) => {
  const { stdout } = await execa.command(`node ${rgbToHex} -r 255 -g 0 -b 2.5`);
  t.true(
    stdout.includes(
      'Error: invalid input. You need 3 arguments, each of them 0-255. Each number passed in must be a positive integer. Please try again.',
    ),
  );
});

test('rgbToHex -- passes if valid RGB values are passed and output the correct hexadecimal value (1)', async (t) => {
  const { stdout } = await execa.command(`node ${rgbToHex} -r 255 -g 0 -b 0`);
  t.true(stdout.includes('Your hex value is #ff0000'));
});

test('rgbToHex -- passes if valid RGB values are passed and output the correct hexadecimal value (2)', async (t) => {
  const { stdout } = await execa.command(`node ${rgbToHex} -r 85 -g 227 -b 66`);
  t.true(stdout.includes('Your hex value is #55e342'));
});

test('rgbToHex -- passes if valid RGB values are passed and output the correct hexadecimal value (3)', async (t) => {
  const { stdout } = await execa.command(`node ${rgbToHex} -r 19 -g 48 -b 135`);
  t.true(stdout.includes('Your hex value is #133087'));
});

const hexToRgb = path.join(__dirname, '../hexToRgb.js');

test('hexToRgb -- fails if no arguments are passed', async (t) => {
  const { stdout } = await execa.command(`node ${hexToRgb}`);
  t.true(
    stdout.includes(
      'Invalid hex value entered. Please enter a 3 or 6 value hex string. Hash (#) optional.',
    ),
  );
});

test('hexToRgb -- fails if invalid hex value passed (bad char)', async (t) => {
  const { stdout } = await execa.command(`node ${hexToRgb} -h "#ff000g"`);
  t.true(
    stdout.includes(
      'Invalid hex value entered. Please enter a 3 or 6 value hex string. Hash (#) optional.',
    ),
  );
});

test('hexToRgb -- fails if invalid hex value passed (neither 3 nor 6 characters)', async (t) => {
  const { stdout } = await execa.command(`node ${hexToRgb} -h "#ff000"`);
  t.true(
    stdout.includes(
      'Invalid hex value entered. Please enter a 3 or 6 value hex string. Hash (#) optional.',
    ),
  );
});

test('hexToRgb -- passes if valid hex value passed and outputs correct RGB value (1)', async (t) => {
  const { stdout } = await execa.command(`node ${hexToRgb} -h "#ff0000"`);
  t.true(stdout.includes('Your RGB value is 255 0 0'));
});

test('hexToRgb -- passes if valid hex value passed and outputs correct RGB value (2) (hash missing but should still pass)', async (t) => {
  const { stdout } = await execa.command(`node ${hexToRgb} -h "f21680"`);
  t.true(stdout.includes('Your RGB value is 242 22 128'));
});

test('hexToRgb -- passes if valid hex value passed and outputs correct RGB value (3)', async (t) => {
  const { stdout } = await execa.command(`node ${hexToRgb} -h "#09b523"`);
  t.true(stdout.includes('Your RGB value is 9 181 35'));
});
