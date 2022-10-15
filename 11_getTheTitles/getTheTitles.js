const getTheTitles = function(books) {
    let arrayTitles = [];
    for (let book of books){
        arrayTitles.push(book.title);
    }
    return arrayTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
