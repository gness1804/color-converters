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
  red: {
    type: 'string',
    alias: 'r',
    desc: 'The value for red. 0 to 255.',
  },
  green: {
    type: 'string',
    alias: 'g',
    desc: 'The value for green. 0 to 255.',
  },
  blue: {
    type: 'string',
    alias: 'b',
    desc: 'The value for blue. 0 to 255.',
  },
};

const commands = {
  help: {
    desc: 'Print out help info.',
  },
};

const helpText = meowHelp({
  name: 'npx rgb-to-hex',
  desc: 'Convert RGB values to hexadecimal. Input the three rgb values using the "red", "green" and "blue" flags. The program will output the hexadecimal value.',
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
