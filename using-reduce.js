function adder(arr){
    return arr.reduce((acc,curr) => acc + curr)
}

function sumOrMul(arr){
    return arr.reduce((acc,curr) => {
        if(curr%2 === 0){
            return acc * curr
        }else{
            return acc + curr
        }
    })
}   

function funcExec(arr,value){
    return arr.reduce((acc,curr) => {
        if (typeof item === 'function') {
            return item(acc,value);
        }else{
            return acc;
        }
    },
    value === undefined ? 0 : value
);
}