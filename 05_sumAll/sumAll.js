const sumAll = function (firstArg, secondArg) {
    if (firstArg * secondArg < 0) return 'ERROR';
    if (!Number.isInteger(firstArg) && !Number.isInteger(secondArg)) return 'ERROR';
    return (firstArg + secondArg) * (Math.abs(secondArg - firstArg) + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
