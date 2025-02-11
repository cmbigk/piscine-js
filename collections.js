function arrToSet(arr) {
  return new Set(arr);
}

function arrToStr(arr) {
  return String(arr.join(''));
}

function setToArr(set) {
  return Array.from(set);
}

function setToStr(set) {
    return arrToStr(setToArr(set));
    }

function strToArr(str) {
    return Array.from(str);
    }

function strToSet(str) {
    return arrToSet(strToArr(str));
    }

function mapToObj(map) {
    return Object.fromEntries(map);
    }

function objToArr(obj) {
    return Object.entries(obj);
    }

function objToMap(obj) {
    return new Map(objToArr(obj));
    }

function arrToObj(arr) {
    return Object.fromEntries(arr);
    }

function strToObj(str) {
    return arrToObj(strToArr(str));
    } 



    function superTypeOf(value) {
        if (Array.isArray(value)) {
            return "Array";
        } else if (value instanceof Set) {
            return "Set";
        } else if (value instanceof Map) {
            return "Map";
        } else if (value === null) {
            return "null";
        } else if (typeof value === "object") {
            return "Object";
        } else if (typeof value === "string") {
            return "String";
        } else if (typeof value === "number") {
            return "Number";
        } else if (typeof value === "boolean") {
            return "Boolean";
        } else if (typeof value === "undefined") {
            return "undefined";
        } else if (typeof value === "function") {
            return "Function";
        }
    }

