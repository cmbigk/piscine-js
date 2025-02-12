function indexOf(collection, target,index){
    for (let i = index; i < collection.length; i++){
        if (collection[i] === target){
            return i;
        }
    }
    return -1;
}

function lastIndexOf(collection, target,index){
    for (let i = collection.length - 1; i >= index; i--){
        if (collection[i] === target){
            return i;
        }
    }
    return -1;
}   

function includes(collection, target,index){
    return indexOf(collection, target,index)!== -1;     
}