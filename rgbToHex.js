#!/usr/bin/env node

const alert = require('cli-alerts');
const log = require('./utils/log');
const cli = require('./utils/rgbtohex/cli');

const { flags, input, showHelp } = cli;
const { debug } = flags;

(async () => {
  if (input.includes('help')) showHelp(0);

  let { red: r, green: g, blue: b } = flags;

  if (!r || !g || !b) {
    throw new Error(
      'Error: invalid input. You need 3 arguments, each of them 0-255.',
    );
  }

  debug && log(flags);

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
