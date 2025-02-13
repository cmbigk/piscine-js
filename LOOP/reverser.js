function reverse(arrorstr){
    if (typeof arrorstr === 'string'){
        var arr = arrorstr
        arrorstr = [...arrorstr]
    }

    var result = []
    for (var i = arrorstr.length-1; i >= 0; i--){
        result.push(arrorstr[i]);
    }
    return (typeof arr === 'string' ? result.join("") : result);
}



console.log(reverse("pouet"))
console.log(reverse([1,2,3]))
