function map(arr,func){
    let array = []
    for(let i = 0; i < arr.length; i++){
        array.push(func(arr[i],i,arr))
    }
    return array    
}

function flatMap(arr,func){
    let array = []
    for(let i = 0; i < arr.length; i++){
        array.push(func(arr[i],i,arr))
    }
    return array.flat()
}

