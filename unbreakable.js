function split(sampleInput, delimiter) {
    if (delimiter === '') {
        return [...sampleInput];
    }

    if (sampleInput === '') {
        return [''];
    }

    const result = [];
    let temp = '';

    for (let i = 0; i < sampleInput.length; i++) {
        if (sampleInput.slice(i, i + delimiter.length) === delimiter) {
            result.push(temp);
            temp = '';
            i += delimiter.length - 1;
        } else {
            temp += sampleInput[i];
        }
    }

    result.push(temp);
    return result;
}

function join(sampleInput, delimiter) {
    if (delimiter === ''|| delimiter === undefined) {
        return sampleInput.join(' ');
    }

    result = sampleInput[0].toString();
    for (let i= 1; i < sampleInput.length; i++){
        result += delimiter+ sampleInput[i];
    }   
    return result
}



console.log((split('a b c', ' ')))
console.log((split('ggg - ddd - b', ' - ')))
console.log((split('ee,ff,g,', ',')))
console.log((split('Riad', ' ')))
console.log((split('rrrr', 'rr')))
console.log((split('rrirr', 'rr')))
console.log((split('Riad', '')))
console.log((split('', 'Riad')))

console.log(join(['ee', 'ff', 'g', ''], ','))
console.log(join(['ggg', 'ddd', 'b'], ' - '))
console.log(join(['a', 'b', 'c'], ' '))