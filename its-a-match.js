function normal(str) {

    return /hi/.test(str);
}

function begin(str) {
    return /^hi/.test(str);
}

function end(str) {
    return /hi$/.test(str);
}

function beginEnd(str) {
    return /^hi$/.test(str);
}


console.log("normal('hi') ->", normal('hi')); // Expected: true
console.log("normal('higher') ->", normal('higher')); // Expected: true
console.log("!normal('likelihood') ->", !normal('likelihood')); // Expected: true
console.log("!normal('Hi') ->", !normal('Hi')); // Expected: true
console.log("normal('I love sushi') ->", normal('I love sushi')); // Expected: true



console.log("begin('hi') ->", begin('hi')); // true
console.log("begin('higher') ->", begin('higher')); // true
console.log("begin('hired') ->", begin('hired')); // true
console.log("!begin('likelihood') ->", !begin('likelihood')); // true
console.log("!begin('Hi') ->", !begin('Hi')); // true
console.log("!begin('I love sushi') ->", !begin('I love sushi')); // true

// Test cases for end
console.log("end('hi') ->", end('hi')); // true
console.log("!end('higher') ->", !end('higher')); // true
console.log("!end('likelihood') ->", !end('likelihood')); // true
console.log("!end('www') ->", !end('www')); // true
console.log("end('I love sushi') ->", end('I love sushi')); // true

// Test cases for beginEnd
console.log("beginEnd('hi') ->", beginEnd('hi')); // true
console.log("!beginEnd('hired kimchi') ->", !beginEnd('hired kimchi')); // true
console.log("!beginEnd('higher') ->", !beginEnd('higher')); // true
console.log("!beginEnd('likelihood') ->", !beginEnd('likelihood')); // true
console.log("!beginEnd('') ->", !beginEnd('')); // true
console.log("!beginEnd('I love sushi') ->", !beginEnd('I love sushi')); // 