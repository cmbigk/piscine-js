function multiply(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    }

    let result = 0;
    const isNegative = (a < 0) !== (b < 0); // Check if result should be negative

    // simplify the arguements. there is no minus init.
    a = Math.abs(a);
    b = Math.abs(b);

    for (let i = 0; i < b; i++) {
        result += a;
    }

    return isNegative ? -result : result; // depends on chcecking the sign, we use ternary operator to apply the sign if it is negative

}

function divide(a, b) {
    let result = 0;
    const isNegative = (a < 0) !== (b < 0); 

    a = Math.abs(a);
    b = Math.abs(b);

    while (a >= b) {
        a -= b;
        result++;
    }

    return isNegative ? -result : result; 
}

function modulo(a, b) {
    const isNegative = a < 0; 
    a = Math.abs(a);
    b = Math.abs(b);

    while (a >= b) {
        a -= b;
    }

    return isNegative ? -a : a; // Apply the sign
}

// Test Cases
console.log(multiply(34, 78));           // 2652
console.log(multiply(123, 0));           // 0
console.log(multiply(0, -230));          // 0
console.log(multiply(0, 0));             // 0
console.log(multiply(123, -22));         // -2706
console.log(multiply(-22, -123));        // 2706

console.log(divide(34, 78));       
console.log(divide(78, 34));
console.log(divide(123, 22));
console.log(divide(123, -22));
console.log(divide(-123, 22));
console.log(divide(-123, -22));

console.log(modulo(34, 78));
console.log(modulo(78, 34));
console.log(modulo(123, 22));
console.log(modulo(123, -22)); 
console.log(modulo(-123, 22) );
console.log(modulo(-123, -22) );
