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
