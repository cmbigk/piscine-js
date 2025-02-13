function split(sampleInput, delimiter) {
    // If the delimiter is an empty string, return an array of characters
    if (delimiter === '') {
        return [...sampleInput];
    }

    // If the input string is empty, return an array with an empty string
    if (sampleInput === '') {
        return [''];
    }

    // Create an empty array to store the parts of the string
    const result = [];
    // Temporary string to hold characters before the delimiter
    let temp = '';

    // Loop through each character in the input string
    for (let i = 0; i < sampleInput.length; i++) {
        // Check if the current part of the string matches the delimiter
        if (sampleInput.slice(i, i + delimiter.length) === delimiter) {
            // Add the part before the delimiter to the result array
            result.push(temp);
            // Reset the temporary string for the next part
            temp = '';
            // Skip the characters in the delimiter
            i += delimiter.length - 1;
        } else {
            // Add the current character to the temporary string
            temp += sampleInput[i];
        }
    }

    // Add the last part of the string to the result array
    result.push(temp);

    // Return the array of split parts
    return result;
}


console.log((splitString('a b c', ' ')))
console.log((splitString('ggg - ddd - b', ' - ')))
console.log((splitString('ee,ff,g,', ',')))
console.log((splitString('Riad', ' ')))
console.log((splitString('rrrr', 'rr')))
console.log((splitString('rrirr', 'rr')))
console.log((splitString('Riad', '')))
console.log((splitString('', 'Riad')))


console.log(join(['ee', 'ff', 'g', ''], ',') )
console.log(join(['ggg', 'ddd', 'b'], ' - '))
console.log(join(['a', 'b', 'c'], ' '))