//need to create a function that determines whether or not a given year is a leap year
//leaps years are divisible by 4. Excluding years divisible by 100 (e.g. 1800) Except those divisible by 1600(which is a leap year)
//3 conditions to be met to be a leap year 1. divisible by 4 (no remainder) 2. NOT divisible by 100 3. Divisible by 400

const leapYears = function(testYear) {
    if (testYear % 4 === 0 && testYear % 100 !== 0 ) || (testYear % 400 === 0 ) {
        return "This is a Leap Year"
    }

    else {
        return "NOT a leap year"
    }

};

let leapTest = leapYears(500);

console.log(leapTest);

// Do not edit below this line
module.exports = leapYears;
