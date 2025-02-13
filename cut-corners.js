function trunc(num) {
    const isNegative = num < 0;
    num = Math.abs(num); // Ensure num is positive for calculation

    // Use Math.floor() to remove the decimal part
    let result = Math.floor(num);

    return isNegative ? -result : result;
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
