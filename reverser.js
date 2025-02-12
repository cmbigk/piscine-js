function reverse(arrorstr){
    if (typeof arrorstr === 'string'){
        var arr = arrorstr
        arrorstr = [...arrorstr]
    }

const    result = []
    for (var i = arrorstr.length-1; i >= 0; i--){
        result.push(arrorstr[i]);
    }
    return (typeof arr === 'string' ? result.join("") : result);
}




console.log((reverse([1, 2, 3])))
console.log(reverse([1,  3]))
console.log((reverse('pouet')))
console.log((reverse("salut c'est cool")))

