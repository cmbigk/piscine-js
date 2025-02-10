const escapeStr = '  \` \\ \/ \" \''
const arr = [4, '2']
const obj = {
    str :"Chad GYI CHAN MYINT",
    num : 262,
    bool : true,
    undef : undefined,
}
const nested = {
    arr : [4, undefined,'2'],
    obj : {
        str :"Chad GYI CHAN MYINT AS ALWAYS",
        num : 262,
        bool : true,
        undef : undefined,
    }
}


console.log(escapeStr, arr, obj, nested);