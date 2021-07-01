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
