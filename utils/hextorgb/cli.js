const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
  debug: {
    type: 'boolean',
    default: false,
    alias: 'd',
    desc: 'Print debug info.',
  },
  version: {
    type: 'boolean',
    alias: 'v',
    desc: 'Print CLI version.',
  },
  hex: {
    type: 'string',
    alias: 'h',
    desc: 'The hex value (3 or 6 characters)',
  },
};

const commands = {
  help: {
    desc: 'Print out help info.',
  },
};

const helpText = meowHelp({
  name: 'npx hex-to-rgb',
  desc: 'Converts hexadecimal values to RGB. Enter a hexadecimal value with the "hex" flag. The program will print the RGB value.',
  flags,
  commands,
});

const options = {
  inferType: true,
  description: false,
  hardRejection: false,
  flags,
};

module.exports = meow(helpText, options);
