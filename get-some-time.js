function firstDayWeek(week, year) {
    // Create a new date object for January 1st of the given year
    let date = new Date(year, 0, 1);
    
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    let dayOfWeek = date.getDay();

    // If January 1st is not a Monday, find the first Monday of the year
    let firstMonday = new Date(date);
    if (dayOfWeek !== 1) {
        firstMonday.setDate(date.getDate() + (8 - dayOfWeek) % 7);
    }

    // Adjust the date for the first day of the requested week
    let firstDayOfWeek = new Date(firstMonday);
    firstDayOfWeek.setDate(firstMonday.getDate() + (week - 1) * 7);

    // Format the result as dd-mm-yyyy
    let day = String(firstDayOfWeek.getDate()).padStart(2, '0');
    let month = String(firstDayOfWeek.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    let yearResult = firstDayOfWeek.getFullYear();

    return `${day}-${month}-${yearResult}`;
}

console.log(firstDayWeek(2, '2017')); // Expected: 02-01-2017
console.log(firstDayWeek(23, '0091')); // Expected: 04-06-0091
