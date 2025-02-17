function matchCron(string, date){
    const cron = string.split(' ');

    const minute = date.getMinutes();
    const hour = date.getHours();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    const dayOfweek = date.getDay() === 0 ? 7 : date.getDay();


    const dateValues = [minute, hour, dayOfMonth, month, dayOfweek];

    for (let i = 0; i < cron.length; i++) {
        if (cron[i] !== '*' && cron[i] !== '?' && cron[i] !== dateValues[i].toString()) {
            return false;
        }
    }
    return true;
}

console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00'))); // true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00'))); // true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00'))); // false
console.log(matchCron('15 10 * * *', new Date('2024-02-17 10:15:00'))); // true
console.log(matchCron('15 10 * * *', new Date('2024-02-17 10:16:00'))); // false


console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')))
console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')))
console.log(matchCron('* * 9 * *', new Date('2020-06-09 00:00:00')))
console.log(matchCron('* 3 * * *', new Date('2020-05-31 03:00:00')))
console.log(matchCron('1 * * * *', new Date('2020-05-30 19:01:00')))
console.log(matchCron('3 3 * 3 3', new Date('2021-03-03 03:03:00')))


console.log(matchCron('* * * * 1', new Date('2020-06-02 00:00:00')))
console.log(!matchCron('* * * 2 *', new Date('2021-03-01 00:00:00')))
console.log(!matchCron('* * 8 * *', new Date('2020-06-09 00:00:00')))
console.log(!matchCron('* 2 * * *', new Date('2020-05-31 03:00:00')))
console.log(!matchCron('1 * * * *', new Date('2020-05-30 19:00:00')))
