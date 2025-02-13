function words (str) {
    return str.split(' ');
    }
    
    function sentence (str) {
    return str.join(' ');
    }

    function yell(str) {
        return str.toUpperCase();

    }

    function whisper(str) {
        return "*"+str.toLowerCase()+"*";
    }
    
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    
    console.log(capitalize('zap ZAP')); // Output: "Zap zap"
    

    console.log(capitalize('zap ZAP'));
    console.log(capitalize('hap HAP'));