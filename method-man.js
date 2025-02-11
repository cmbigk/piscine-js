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
    function capitalize(str) {
        return str.split(' ').
        map (function(word){
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

        }).join(' ');
    }
    

    console.log(capitalize('zapZAP'));