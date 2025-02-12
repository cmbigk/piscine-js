function slice(array, start, end) {
    if (typeof array === 'string') {
        var arr = array
        array = [...array]; 
    }

    if (start < 0) start = array.length + start;
    if (end === undefined) end = array.length; 
    if (end < 0) end = array.length + end; 
    
    var sliced = [];
    for (var i = start; i < end; i++) {
        sliced.push(array[i]);
    }
    
    return typeof arr === 'string' ? sliced.join("") : sliced;  
}

const arr = 'abcdef'
console.log(slice(arr,0,-2))