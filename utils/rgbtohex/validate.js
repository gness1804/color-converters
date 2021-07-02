const handleError = require('cli-handle-error');

const validate = (r, g, b) => {
  const isOutOfRange = (num) => {
    if (num < 0 || num > 255) {
      return true;
    }
    return false;
  };

  let msg = 'Error: invalid input. You need 3 arguments, each of them 0-255.';

  if (!r || !g || !b) {
    handleError(msg, {}, true, true);
  }

  r = parseFloat(r);
  g = parseFloat(g);
  b = parseFloat(b);

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    msg +=
      ' One or more arguments you passed in is not a number. Please try again.';
    handleError(msg, {}, true, true);
  }

  if (!Number.isInteger(r) || !Number.isInteger(g) || !Number.isInteger(b)) {
    msg +=
      ' Each number passed in must be a positive integer. Please try again.';
    handleError(msg, {}, true, true);
  }

  if (isOutOfRange(r) || isOutOfRange(g) || isOutOfRange(b)) {
    handleError(msg, {}, true, true);
  }

  return { r, g, b };
};

module.exports = validate;
