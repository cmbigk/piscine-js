function slicer(array, start, end) {
    if (start < 0) start = array.length + start;
    if (end === undefined) end = array.length; 
    if (end < 0) end = array.length + end; 
    var sliced = [];
    for (var i = start; i < end; i++) {
        sliced.push(array[i]);
    }
    return sliced;   
}

