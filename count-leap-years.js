function countLeapYears(date){
    let yearcount =0;
    for(let i = 0; i <= date.getFullYear(); i++){
        if(i % 4 === 0 &&(i%100 !== 0 || i % 400 === 0)){
            yearcount++;
        }
    }
    return yearcount;
}

console.log(countLeapYears(new Date('0001-12-01')) === 0)
console.log(countLeapYears(new Date('1664-08-09')) === 403)
console.log(countLeapYears(new Date('2020-01-01')) === 489)
console.log(countLeapYears(new Date('2048-12-08')) === 496)
