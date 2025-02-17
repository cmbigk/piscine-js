function countLeapYears(date) {
    let year = date.getFullYear();
    return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
}

// Test cases
console.log(countLeapYears(new Date('0001-12-01')) === 0);
console.log(countLeapYears(new Date('1664-08-09')) === 403);
console.log(countLeapYears(new Date('2020-01-01')) === 489);
console.log(countLeapYears(new Date('2048-12-08')) === 496);
