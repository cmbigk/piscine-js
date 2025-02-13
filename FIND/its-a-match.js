const normal = /hi/;
const begin = /^hi/;
const end = /hi$/;
const beginEnd = /^hi$/;



console.log(normal ('hi'))                                                  
console.log(normal ('higher'))
console.log(!normal ('likelihood'))
console.log(!normal ('Hi'))
console.log(normal ('I love sushi'))

console.log(begin ('hi'))
console.log(begin ('higher'))
console.log(begin ('hired'))
console.log(!begin ('likelihood'))
console.log(!begin ('Hi'))
console.log(!begin ('I love sushi' ))

console.log(end ('hi'))
console.log(!end ('higher'))
console.log(!end ('likelihood'))
console.log(!end ('Hi'))
console.log(end ('I love sushi'))

console.log(beginEnd ('hi'))
console.log(!beginEnd ('hired kimchi'))
console.log(!beginEnd ('higher'))
console.log(!beginEnd ('likelihood'))
console.log(!beginEnd ('Hi'))
console.log(!beginEnd ('I love sushi'))