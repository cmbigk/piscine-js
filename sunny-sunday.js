function sunnySunday(date) {
    let counter = 0; // Start counter at 0 for the first day
    const week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday" // Add Sunday to match a full week
    ];

    let start = new Date("0001-01-01T00:00:00");
    while (start <= date) {
        start.setDate(start.getDate() + 1);
        counter++;
    }

    return week[counter % 7]; // Use % 7 to get the correct day of the week
}

// Test cases
console.log(sunnySunday(new Date('0001-01-01')) === 'Monday'); // Expected: true
console.log(sunnySunday(new Date('0001-01-02')) === 'Tuesday'); // Expected: true
console.log(sunnySunday(new Date('0001-01-03')) === 'Wednesday'); // Expected: true
console.log(sunnySunday(new Date('0001-01-04')) === 'Thursday'); // Expected: true
console.log(sunnySunday(new Date('0001-01-05')) === 'Friday'); // Expected: true
console.log(sunnySunday(new Date('0001-01-06')) === 'Saturday'); // Expected: true
console.log(sunnySunday(new Date('0001-01-07')) === 'Sunday'); // Expected: true

console.log(sunnySunday(new Date('0001-12-01')) === 'Friday'); // Expected: true
console.log(sunnySunday(new Date('1664-08-09')) === 'Sat');
