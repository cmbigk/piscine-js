function cutFirst(str) {
    return str.slice(2);
}

function cutLast(str) {
    return str.slice(0, str.length - 2);
}

function cutFirstLast(str) {
    return str.slice(2, str.length - 2);
}

function keepFirst(str) {
    return str.slice(0, 2);
}

function keepLast(str) {
    return str.slice(str.length - 2);
}

function keepFirstLast(str) {
    const firstStr = str.slice(0, 3);
    const lastStr = str.slice(str.length - 2);
    return firstStr + lastStr;
}


console.log(cutFirstLast('abcdef'));        