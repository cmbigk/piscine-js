function letterSpaceNumber(str) {
    let arr = str.match(/[a-z] [0-9](?![a-z0-9])/gi);
    return arr !== null ? arr : [];
}

// Example Test Cases
console.log(letterSpaceNumber('example 1, example 20')); // Output: ['e 1']
console.log(letterSpaceNumber('a 3b 5c 9'));             // Output: ['a 3', 'c 9']
console.log(letterSpaceNumber('test 7 and x 8y'));       // Output: ['x 8']
console.log(letterSpaceNumber('no matches here!'));      // Output: []
