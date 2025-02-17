function dayOfTheYear(date){
    let newDate = date.getFullYear()
    let time = new Date('0001-01-01')
    time.setFullYear(newDate)
    let countDay = 0
    for(let i = 0;i<1000;i++){
        countDay = i
        if((time.getMonth() === date.getMonth())&&(time.getDate === date.getDate)){
            return countDay+date.getDate()
        }
        time.setHours(30)

    }
    console.log(time)
}

console.log(dayOfTheYear(new Date('0001-01-01')) === 1)
console.log(dayOfTheYear(new Date('1664-08-09')) === 222)
console.log(dayOfTheYear(new Date('1600-12-31')) === 366)
console.log(dayOfTheYear(new Date('2020-06-22')) === 174)
console.log(dayOfTheYear(new Date('2048-12-08')) === 343)
console.log(dayOfTheYear(new Date('2048-11-08')) === 313)