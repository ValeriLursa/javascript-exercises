const repeatString = function(str, count) {
    if (str == '') return '';
    if (count == -1) return 'ERROR';
    if (count == 0) return '';
    if (count - 1 == 0) return str;
    if (count > 0) return str + repeatString(str, --count);
};

// Do not edit below this line
module.exports = repeatString;
