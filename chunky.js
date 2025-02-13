function chunk(arr, size) {
  let result = [];
  let start = 0;

  while (start < arr.length) {      
    let end = start + size;
    let subArray = arr.slice(start, end);

    result.push(subArray);
    start = end;
 
  }

  return result;
}


console.log(chunk(['a', 'b', 'c', 'd'], 2)); // Expected output: [['a', 'b'], ['c', 'd']]
console.log(chunk(['a', 'b', 'c', 'd'], 3)); // Expected output: [['a', 'b', 'c'], ['d']]
