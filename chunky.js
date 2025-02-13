function chunky(arr, size) {
  let result = [];
  let start = 0;

  while (start < arr.length) {      
    let end = start + size;
    subArray = arr.slice(start, end);

    result.push(subArray);
    start && end === 0
  }
  
  return result;
}