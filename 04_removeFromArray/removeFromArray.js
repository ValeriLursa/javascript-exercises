const removeFromArray = function(array) {
    var args = Array.prototype.slice.call(arguments, 1);
    args.forEach(arg => {
        array.splice(array.indexOf(arg),1);
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
