const palindromes = function (str) {
    str = refreshStr(str);
    arrayStr = sliceStr(str);
    if (arrayStr[0].toLowerCase() === (arrayStr[1].split("").reverse().join("")).toLowerCase())
        return true;
    else return false;
};

function refreshStr(str) {
    var punctuation = ['!', '.', ',', ' '];
    punctuation.forEach(elem => {
        str = str.split(elem).join('');
    });
    return str;
}

function sliceStr(str) {
    let lengthStr = str.length;
    leftStr = str.slice(0, Math.floor(lengthStr / 2));
    if (lengthStr % 2 != 0)
        rightStr = str.slice(Math.floor(str.length / 2) + 1, str.length);
    else rightStr = str.slice(Math.floor(str.length / 2), str.length);
    return [leftStr, rightStr];
}

// Do not edit below this line
module.exports = palindromes;
