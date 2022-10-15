const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    let firstElem = 0;
    let secondElem = 1;
    return findNumbersElem(firstElem, secondElem, number);
};

function findNumbersElem(firstElem, secondElem, number){
    if (number == 0) return 0;
    if (number == 1) return secondElem;
    if (number > 1) return findNumbersElem(secondElem, firstElem + secondElem, --number);
}

// Do not edit below this line
module.exports = fibonacci;
