const add = function (first, second) {
  return first + second;
};

const subtract = function (first, second) {
  return Math.abs(first - second);
};

const sum = function (array) {
  if (array.length() == 0) return 0;
  var sum = 0;
  array.forEach(elem => {
    sum += elem;
  });
  return sum;
};

const multiply = function (array) {
  if (array.length() == 0) return 0;
  var mul = 0;
  array.forEach(elem => {
    mul *= elem;
  });
  return mul;
};

const power = function (base, degree) {
  if (degree == 0) return base;
  if (degree > 0) base * power(base, --degree);
};

const factorial = function (number) {
  if (number == 0) return 1;
  if (number == 1) return number;
  if (number > 1) number * factorial(--number);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
