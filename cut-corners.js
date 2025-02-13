function trunc(num) {
    const isNegative = num < 0;
    num = Math.abs(num).toString();

    let result = "";
    for (let i = 0; i < num.length; i++) {
        if (num[i] === ".") {
            break; 
        }
        result += num[i]; 
    }
    return isNegative ? -Number(result) : Number(result);
}

function floor(num) {
    let t = trunc(num);
    return num < 0 && num !== t ? t - 1 : t;
}
function ceil(num) {
    let t = trunc(num);
    return num > t ? t + 1 : t;
}
function round(num) {
    let t = trunc(num);
    if (num >= 0) {
        return (num - t) >= 0.5 ? ceil(num) : floor(num);
    } else {
        return (t - num) > 0.5 ? floor(num) : ceil(num);
    }
}
// Testing the functions
console.log(floor(4.9));  // Output: 4
console.log(floor(-4.9)); // Output: -5
console.log(ceil(4.1));   // Output: 5
console.log(ceil(-4.1));  // Output: -4
console.log(round(4.5));  // Output: 5
console.log(round(4.4));  // Output: 4
console.log(round(-3.5)); // Output: -3
console.log(round(-4.5)); // Output: -4
console.log(trunc(4.9));  // Output: 4
console.log(trunc(-4.9)); // Output: -4