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
<<<<<<< HEAD
        return "*str.toLowerCase()*";
    }

    function capitalize(str) {
        return str.spilt(' '). str[0].toUpperCase() + str.slice(1).toLowerCase().join(' ');
    }
=======
        return "*"+str.toLowerCase()+"*";
    }
    
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    
    console.log(capitalize('zap ZAP')); // Output: "Zap zap"
    

    console.log(capitalize('zap ZAP'));
    console.log(capitalize('hap HAP'));
>>>>>>> master
