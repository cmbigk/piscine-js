function getAcceleration(f,m) {

    if (m<=0 || f<=0) {
        return "impossible";
    }

    if (arguments.length<2) {
        return "impossible";
    }
    return f/m;

}


console.log(getAcceleration(10, 5));
console.log(getAcceleration());