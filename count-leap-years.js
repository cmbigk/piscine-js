function countLeapYears(date) {
    let year = date.getFullYear();

    // Calculate leap years from year 1 to the given year (inclusive)
    let leapYears = Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
    
    // Check if the date is before February 29th in the current year
    let isBeforeLeapDay = date.getMonth() < 1 || (date.getMonth() === 1 && date.getDate() < 29);
    
    // If the date is before February 29th, subtract 1 from the leap year count
    if (isBeforeLeapDay && (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))) {
        leapYears--;
    }

    return leapYears;
}

// Test cases
console.log(countLeapYears(new Date('0001-12-01')) === 0); // Expected: 0
console.log(countLeapYears(new Date('1664-08-09')) === 403); // Expected: 403
console.log(countLeapYears(new Date('2020-01-01')) === 489); // Expected: 489
console.log(countLeapYears(new Date('2048-12-08')) === 496); // Expected: 496
