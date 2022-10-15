const findTheOldest = function (people) {
    let arrayDifference = [];
    const data = new Date();

    people.forEach(person => {
        if (person.hasOwnProperty('yearOfDeath'))
            arrayDifference.push(person.yearOfDeath - person.yearOfBirth);
        else arrayDifference.push(data.getFullYear() - person.yearOfBirth);
    });
    console.log(arrayDifference);
    return people[arrayDifference.indexOf(Math.max.apply(null, arrayDifference))];
};

// Do not edit below this line
module.exports = findTheOldest;
