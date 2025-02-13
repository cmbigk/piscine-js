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
