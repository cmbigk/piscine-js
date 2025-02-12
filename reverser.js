function reverse(arrorstr){
    if (typeof arrorstr === 'string'){
        var arr = arrorstr
        arrorstr = [...arrorstr]
    }

    result = []
    for (var i = arrorstr.length-1; i >= 0; i--){
        result.push(arrorstr[i]);
    }
    return (typeof arr === 'string' ? result.join("") : result);
}





