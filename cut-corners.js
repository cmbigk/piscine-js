function trunc(num) {
    if (num < 0) {
        return -trunc(-num);
    }
    let result = 0;
    let power = 1;
    while (power * 10 <= num) {
        power *= 10;
    }
    while (power >= 1) {
        while (result + power <= num) {
            result += power;
        }
        power /= 10;
    }
    return result;
}


function floor(num) {
    let t = trunc(num);
    return num < 0 && num !== t ? t - 1 : t;
}
function ceil(num) {
    let t = trunc(num);
    return num > t ? t + 1 : t;
}
function round(num) {
    let t = trunc(num);
    if (num >= 0) {
        return (num - t) >= 0.5 ? ceil(num) : floor(num);
    } else {
        return (t - num) > 0.5 ? floor(num) : ceil(num);
    }
}
