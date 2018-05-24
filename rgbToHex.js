// rgbToHex(255, 0, 0) => '#ff0000'

const rgbToHex = (r, g, b) => {
  const isOutOfRange = (num) => {
    if (num < 0 || num > 255) {
      return true;
    }
    return false;
  }

  if (!r || !g || !b || isNaN(r) || isNaN(g) || isNaN(b)) {
    throw new Error('Error: invalid input. You need 3 arguments, each of them 0-255.');
  }

  if (isOutOfRange(r) || isOutOfRange(g) || isOutOfRange(b)) {
    throw new Error('Error: invalid input. You need 3 arguments, each of them 0-255.');
  }

  const stringified = (num) => {
    return Math.max(0, Math.min(255, num)).toString(16);
  };

  const red = stringified(r).length === 1 ? `0${stringified(r)}` : stringified(r);
  const green = stringified(g).length === 1 ? `0${stringified(g)}` : stringified(g);
  const blue = stringified(b).length === 1 ? `0${stringified(b)}` : stringified(b);
  return `#${red}${green}${blue}`.toLowerCase();
}

console.log(rgbToHex(process.argv[2], process.argv[3], process.argv[4]));
