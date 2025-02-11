const is = {
    num: function(num) {
        return typeof num === 'number';
    },
    nan: function(num) {
        return isNaN(num);
    },
    str: function(str) {
        return typeof str === 'string';
    },
    bool: function(bool) {
        return typeof bool === 'boolean';
    },
    undef: function(undef) {
        return typeof undef === 'undefined';
    },
    def: function(def) {
        return typeof def !== 'undefined';
    },
    arr: function(arr) {
        return Array.isArray(arr);
    },
    obj: function(obj) {
        return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
    },
    fun: function(fun) {
        return typeof fun === 'function';
    },
    truthy: function(truthy) {
        return !!truthy; 
    },
    falsy: function(falsy) {
        return !falsy; 
    }
};
