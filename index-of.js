function indexOf(collection, target){
    for (const key of collection){

       if ( collection[key] === target ){
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