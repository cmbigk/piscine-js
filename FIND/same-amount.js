function sameAmount(str,reg1,reg2){
  let  regx1 = new RegExp(reg1,'gi');
  let  regx2 = new RegExp(reg2,'gi');

    let arr1 = str.match(regx1);
    let arr2 = str.match(regx2);

    return arr1 !== null && arr2 !== null && arr1.length === arr2.length;
}
/*
const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
 ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`

console.log(sameAmount('hello how are you', /l/, /e/)); // Should print true
console.log(sameAmount('hello how are you', /h/, /e/)); // Should print false
console.log(sameAmount('hello how are you', /he/, /ho/)); // Should print false

// Assuming `data` is a defined string variable
console.log(sameAmount(data, /i/, /p/)); // Depends on `data`
console.log(!sameAmount(data, /h/, /w/)); // Depends on `data`
console.log(sameAmount(data, /qqqq /, /qqqqqqq/)); // Depends on `data`
console.log(!sameAmount(data, /q /, /qqqqqqq/)); // Depends on `data`
console.log(sameAmount(data, /fs[^q]/, /q /)); // Depends on `data`
console.log(sameAmount(data, /^[qs]/, /^[gq]/)); // Depends on `data`
console.log(sameAmount(data, /j/, /w/)); // Depends on `data`
console.log(!sameAmount(data, /j/, / /)); // Depends on `data`
console.log(sameAmount(data, /fs./, /jn./)); // Depends on `data`

*/



