function sunnySunday(date) {
    let counter = -1;
    const week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let start = new Date("0001-01-01T00:00:00");
    while (start <= date) {
        start.setDate(start.getDate() + 1);
        counter++;
    }
    console.log(week[counter % 6]);
    return week[counter % 6];
}



console.log(sunnySunday(new Date('0001-01-01')) === 'Monday')
console.log(sunnySunday(new Date('0001-01-02')) === 'Tuesday')
console.log(sunnySunday(new Date('0001-01-03')) === 'Wednesday')
console.log(sunnySunday(new Date('0001-01-04')) === 'Thursday')
console.log(sunnySunday(new Date('0001-01-05')) === 'Friday')
console.log(sunnySunday(new Date('0001-01-06')) === 'Saturday')
console.log(sunnySunday(new Date('0001-01-07')) === 'Monday')

console.log(sunnySunday(new Date('0001-12-01')) === 'Friday')
console.log(sunnySunday(new Date('1664-08-09')) === 'Saturday')

console.log(sunnySunday(new Date('2020-01-01')) === 'Monday')
console.log(sunnySunday(new Date('2048-12-08')) === 'Thursday')
