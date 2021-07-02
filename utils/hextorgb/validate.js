const handleError = require('cli-handle-error');

const validate = (hex) => {
  if (!hex || !hex.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
    const msg =
      'Invalid hex value entered. Please enter a 3 or 6 value hex string. Hash (#) optional.';
    handleError(msg, {}, true, true);
  }
  return hex;
};

module.exports = validate;
