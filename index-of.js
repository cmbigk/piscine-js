function indexOf(collection, target){
    for (let i = 0; i < collection.length; i++){
        if (collection[i] === target){
            return i;
        }
    }
    return -1;
}

function lastIndexOf(collection, target){
    for (let i = collection.length - 1; i >= 0; i--){
        if (collection[i] === target){
            return i;
        }
    }
    return -1;
}   

function includes(collection, target){
    return indexOf(collection, target) ;
}