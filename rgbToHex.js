#!/usr/bin/env node

const alert = require('cli-alerts');
const log = require('./utils/log');
const cli = require('./utils/rgbtohex/cli');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
const validate = require('./utils/rgbtohex/validate');

const { flags, input, showHelp } = cli;
const { debug } = flags;

(async () => {
  updateNotifier({ pkg }).notify();

  if (input.includes('help')) showHelp(0);

  let { red: r, green: g, blue: b } = flags;

  debug && log(flags);

  ({ r, g, b } = validate(r, g, b));

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
