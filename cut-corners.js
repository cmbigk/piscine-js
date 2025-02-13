function trunc(num) {
    const isNegative = num < 0;
    num = Math.abs(num);

    let result = 0;

    // Subtract 1 repeatedly until result is less than num
    while (result + 1 <= num) {
        result++;
    }

    return isNegative ? -result : result;
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



function runTests() {
    const nums = [Math.PI, -Math.PI, Math.E, -Math.E, 0];

    console.log("Testing trunc:");
    nums.forEach(num => {
        console.log(`trunc(${num}) = ${trunc(num)}`);
    });

    console.log("\nTesting floor:");
    nums.forEach(num => {
        console.log(`floor(${num}) = ${floor(num)}`);
    });

    console.log("\nTesting ceil:");
    nums.forEach(num => {
        console.log(`ceil(${num}) = ${ceil(num)}`);
    });

    console.log("\nTesting round:");
    nums.forEach(num => {
        console.log(`round(${num}) = ${round(num)}`);
    });

    console.log("\nAdditional Test for trunc:");
    const ctx = Math.random() * 10; // Generate random test context
    const largeNum = 0xfffffffff + ctx;
    console.log(`trunc(${largeNum}) = ${trunc(largeNum)}`);
    console.log(`Expected: ${Math.floor(largeNum)}`);
}

// Run the tests
runTests();
