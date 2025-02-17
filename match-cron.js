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
