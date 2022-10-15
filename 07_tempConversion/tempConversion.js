const ftoc = function (grad) {
  let result = (grad - 32) * 5 / 9;
  if (!Number.isInteger(result)) result.toFixed(1);
  return result;
};

const ctof = function (grad) {
  let result = grad * 9 / 5 +32;
  if (!Number.isInteger(result)) result.toFixed(1);
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
