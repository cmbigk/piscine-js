function firstDayWeek(week, year) {
    // Create a new date object for January 1st of the given year
    let date = new Date(year, 0, 1);
    
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    let dayOfWeek = date.getDay();
    
    // If January 1st is not a Monday, move to the first Monday of the year
    let firstMonday = dayOfWeek === 1 ? date : new Date(date.setDate(date.getDate() + ((8 - dayOfWeek) % 7)));
    
    // Calculate the first day of the specified week (week 1 is the first Monday)
    let firstDayOfWeek = new Date(firstMonday);
    firstDayOfWeek.setDate(firstMonday.getDate() + (week - 1) * 7);
    
    // Return the date formatted as dd-mm-yyyy
    let day = String(firstDayOfWeek.getDate()).padStart(2, '0');
    let month = String(firstDayOfWeek.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    let yearResult = firstDayOfWeek.getFullYear();
    
    return `${day}-${month}-${yearResult}`;
}

