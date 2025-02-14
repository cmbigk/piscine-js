function ionOut(str) {
    let arr = str.split(" ");
    let rexp = /tion/g;
    let res = [];
    arr.forEach((word) => {
        word.match(rexp)
            ? res.push(word.replace(/[.,?!]/g, "").slice(0, -3))
            : null;
    });
    return res;
}

console.log(ionOut('attention, direction'), ['attent', 'direct']); // Should print true
console.log(ionOut('promotion, provision'), ['promot']); // Should print true
console.log(ionOut('transfusion'), []); // Should print true
console.log(
  ionOut(' 1st position is the vision of the 2nd position'),
  ['posit', 'posit']
); // Should print true
