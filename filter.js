function filter(arr, fn) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}


console.log(filter([1, 2, 3, 4, 5], (item) => item > 3)) ;

function reject(arr, fn){
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}



console.log(reject([1, 2, 3, 4, 5], (item) => item <= 3)) ;


function partition(arr, fn){
    return [filter(arr, fn), reject(arr, fn)];
}