#!/usr/bin/env node

const alert = require('cli-alerts');
const log = require('./utils/log');
const cli = require('./utils/hextorgb/cli');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
const validate = require('./utils/hextorgb/validate');

const { flags, input, showHelp } = cli;
const { debug } = flags;

(async () => {
  updateNotifier({ pkg }).notify();

  if (input.includes('help')) showHelp(0);

  let { hex } = flags;

  debug && log(flags);

  hex = validate(hex);

  const res = {
    r: 0,
    g: 0,
    b: 0,
  };

  hex = hex.replace('#', '');
  if (hex.length === 3) {
    const red = parseInt(`${hex[0]}${hex[0]}`, 16);
    Object.assign(res, { r: red });
    const green = parseInt(`${hex[1]}${hex[1]}`, 16);
    Object.assign(res, { g: green });
    const blue = parseInt(`${hex[2]}${hex[2]}`, 16);
    Object.assign(res, { b: blue });
  } else if (hex.length === 6) {
    const red = parseInt(`${hex[0]}${hex[1]}`, 16);
    Object.assign(res, { r: red });
    const green = parseInt(`${hex[2]}${hex[3]}`, 16);
    Object.assign(res, { g: green });
    const blue = parseInt(`${hex[4]}${hex[5]}`, 16);
    Object.assign(res, { b: blue });
  } else {
    throw new Error('Invalid hex value entered.');
  }

  alert({
    type: 'success',
    name: 'Success!',
    msg: `Your RGB value is ${res.r} ${res.g} ${res.b}`,
  });
})();
