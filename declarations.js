const escapeStr = '  \\` \\\\ \\/ \\" \\\'';

const arr = Object.freeze([4, '2']);

const obj = Object.freeze({
    str: "Chad GYI CHAN MYINT",
    num: 262,
    bool: true,
    undef: undefined,
});

const nested = {
    arr: Object.freeze([4, undefined, '2']),
    obj: Object.freeze({
        str: "Chad GYI CHAN MYINT AS ALWAYS",
        num: 262,
        bool: true,
    }),
};

Object.freeze(nested); // Freeze the nested object itself

console.log(escapeStr, arr, obj, nested);
