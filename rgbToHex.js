#!/usr/bin/env node

const alert = require('cli-alerts');
const meow = require('meow');
const meowHelp = require('cli-meow-help');
const log = require('./utils/log');

// cli options.
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

const cli = meow(helpText, options);

const { flags: cliFlags, input, showHelp } = cli;
const { debug } = cliFlags;

(async () => {
  if (input.includes('help')) showHelp(0);

  let { red: r, green: g, blue: b } = cliFlags;

  if (!r || !g || !b) {
    throw new Error(
      'Error: invalid input. You need 3 arguments, each of them 0-255.',
    );
  }

  debug && log(cliFlags);

  r = parseInt(r.replace(',', ''), 10);
  g = parseInt(g.replace(',', ''), 10);
  b = parseInt(b.replace(',', ''), 10);

  const isOutOfRange = (num) => {
    if (num < 0 || num > 255) {
      return true;
    }
    return false;
  };

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    throw new Error(
      'Error: invalid input. You need 3 arguments, each of them 0-255.',
    );
  }

  if (isOutOfRange(r) || isOutOfRange(g) || isOutOfRange(b)) {
    throw new Error(
      'Error: invalid input. You need 3 arguments, each of them 0-255.',
    );
  }

  const stringified = (num) => {
    return Math.max(0, Math.min(255, num)).toString(16);
  };

  const red =
    stringified(r).length === 1 ? `0${stringified(r)}` : stringified(r);
  const green =
    stringified(g).length === 1 ? `0${stringified(g)}` : stringified(g);
  const blue =
    stringified(b).length === 1 ? `0${stringified(b)}` : stringified(b);

  const res = `#${red}${green}${blue}`.toLowerCase();

  alert({
    type: 'success',
    name: 'Success!',
    msg: `Your hex value is ${res}`,
  });
})();
