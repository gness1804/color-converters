const validate = (r, g, b) => {
  const isOutOfRange = (num) => {
    if (num < 0 || num > 255) {
      return true;
    }
    return false;
  };

  const msg = 'Error: invalid input. You need 3 arguments, each of them 0-255.';

  if (!r || !g || !b) {
    throw new Error(msg);
  }

  r = parseFloat(r);
  g = parseFloat(g);
  b = parseFloat(b);

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    throw new Error(msg);
  }

  if (!Number.isInteger(r) || !Number.isInteger(g) || !Number.isInteger(b)) {
    throw new Error(msg);
  }

  if (isOutOfRange(r) || isOutOfRange(g) || isOutOfRange(b)) {
    throw new Error(msg);
  }

  return { r, g, b };
};

module.exports = validate;
