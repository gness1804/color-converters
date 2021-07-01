const test = require('ava');
const execa = require('execa');
const path = require('path');

const rgbToHex = path.join(__dirname, '../rgbToHex.js');

test('rgbToHex -- fails if no arguments are passed', async (t) => {
  const { stderr } = await execa.command(`node ${rgbToHex}`);
  t.true(
    stderr.includes(
      'Error: invalid input. You need 3 arguments, each of them 0-255.',
    ),
  );
});

test('rgbToHex -- fails if fewer than 3 valid arguments are passed', async (t) => {
  const { stderr } = await execa.command(`node ${rgbToHex} -r 255 -g 0`);
  t.true(
    stderr.includes(
      'Error: invalid input. You need 3 arguments, each of them 0-255.',
    ),
  );
});

test('rgbToHex -- fails if one or more arguments is out of range (lower than 0)', async (t) => {
  const { stderr } = await execa.command(`node ${rgbToHex} -r 255 -g 0 -b -2`);
  t.true(
    stderr.includes(
      'Error: invalid input. You need 3 arguments, each of them 0-255.',
    ),
  );
});

test('rgbToHex -- fails if one or more arguments is out of range (greater than 255)', async (t) => {
  const { stderr } = await execa.command(`node ${rgbToHex} -r 256 -g 0 -b 0`);
  t.true(
    stderr.includes(
      'Error: invalid input. You need 3 arguments, each of them 0-255.',
    ),
  );
});

test('rgbToHex -- fails if one or more arguments is not a number', async (t) => {
  const { stderr } = await execa.command(`node ${rgbToHex} -r 256 -g 0 -b q`);
  t.true(
    stderr.includes(
      'Error: invalid input. You need 3 arguments, each of them 0-255.',
    ),
  );
});

// TODO: add tests for non-integer number values

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
