function getAcceleration(f,m) {
    if (m<=0 || f<=0) {
        return "impossible";
    }
    return f/m;

}
