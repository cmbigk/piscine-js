const vowels = /[aeiou]/gi;

function vowelDots(str) {
  return str.replace(vowels, function(replaced){
    return replaced + '.';
  });
}

console.log(vowelDots('something') === 'so.me.thi.ng'); // Should log true
console.log(vowelDots('') === ''); // Should log true
console.log(vowelDots('rhythm') === 'rhythm'); // Should log true
console.log(vowelDots('Algorithm') === 'A.lgo.ri.thm'); 