var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const caesar = function (str, number) {
    const alphabetLower = alphabet.toLowerCase();
    let newStr = '';
    number = checkNumber(number);
    for (let i = 0; i < str.length; i++) {
        if (checkP(str[i]) != -1) {
            newStr += checkP(str[i]);
        }
        else {
            let indexChar = alphabet.indexOf(str[i]);
            if (indexChar == -1) {
                indexChar = alphabetLower.indexOf(str[i]);
                let shift = indexChar + number;
                newStr += alphabetLower[checkNumber(shift)];
            }
            else {
                let shift = indexChar + number;
                newStr += alphabet[checkNumber(shift)];
            }
        }
    }
    return newStr;
};

function checkNumber(number) {
    if ((number >= 26) || (number <= -26)) {
        number %= 26;
    }
    if (number < -1) {
        number += 26
    }
    return number;
}

function checkP(a) {
    if (a.charCodeAt(0) == 32) return ' ';
    if (a.charCodeAt(0) == 33) return '!';
    if (a.charCodeAt(0) == 44) return ',';
    if (a.charCodeAt(0) == 46) return '.';
    return -1;
}

// Do not edit below this line
module.exports = caesar;
