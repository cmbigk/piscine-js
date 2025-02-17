function isValid(date) {
    return (date instanceof Date && !isNaN(date.getTime())) || (typeof date === 'number' && !isNaN(date));
  }
function isAfter(date1, date2) {
  return date1 > date2;
}

function isBefore(date1, date2) {
    return date1 < date2;
    }

function isFuture(date) {
    return isValid(date)&& date > new Date();
}   

function isPast(date) {
    return isValid(date) && date < new Date();
}


console.log(isValid(new Date())); // true
console.log(isValid(new Date('Invalid Date'))); // false
console.log(isValid(Date.now())); // false (since it's a number)

console.log(!isAfter(new Date('2024-02-17'), new Date('2023-12-01'))); // true
console.log(isBefore(new Date('2023-01-01'), new Date('2023-12-01'))); // true

console.log(isFuture(new Date(2077-11-31))); // true
console.log(isPast(new Date('1442-11-31'))); // true

