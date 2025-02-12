function slice(array, start, end) {
    if (start < 0) start = array.length + start;
    if (end === undefined) end = array.length; 
    if (end < 0) end = array.length + end; 
    var sliced = [];
    for (var i = start; i < end; i++) {
        sliced.push(array[i]);
    }
    return sliced;   
}

console.log(slice(arr[1, 2, 3, 4, 5], 1, 3)); // [2, 3]
console.log(slice([1,2,3,4,5,6,7,8,9],-2))
console.log(slice([1,2,3,4,5,6,7,8,9],-3,-1))