function nasa (N) {
  let result = []
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('NASA')
    } else if (i % 3 === 0) {
      result.push('N')
    } else if (i % 5 === 0) {
      result.push('S')
    } else {
      result.push(i)
    }
  }
  return result
}



console.log(15)
console.log(nasa(60))
console.log(nasa(100))
console.log(nasa(300))
