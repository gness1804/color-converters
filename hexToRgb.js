#!/usr/bin/env node

// hexToRgb('ff0000') => {r: 255, g: 0, b: 0}
// hexToRgb('f00') => { r: 255, g: 0, b: 0 }
// hexToRgb('#f00') => { r: 255, g: 0, b: 0 }

const hexToRgb = (hex) => {
  if (!hex || typeof hex !== 'string') {
    throw new Error('Invalid hex value entered.');
  }
  const result = {
    r: 0,
    g: 0,
    b: 0,
  };
  const newHex = hex.replace('#', '');
  if (newHex.length === 3) {
    const red = parseInt(`${newHex[0]}${newHex[0]}`, 16);
    Object.assign(result, { r: red });
    const green = parseInt(`${newHex[1]}${newHex[1]}`, 16);
    Object.assign(result, { g: green });
    const blue = parseInt(`${newHex[2]}${newHex[2]}`, 16);
    Object.assign(result, { b: blue });
  } else if (newHex.length === 6) {
    const red = parseInt(`${newHex[0]}${newHex[1]}`, 16);
    Object.assign(result, { r: red });
    const green = parseInt(`${newHex[2]}${newHex[3]}`, 16);
    Object.assign(result, { g: green });
    const blue = parseInt(`${newHex[4]}${newHex[5]}`, 16);
    Object.assign(result, { b: blue });
  } else {
    throw new Error('Invalid hex value entered.');
  }
  return result;
};

console.log(hexToRgb(process.argv[2]));
