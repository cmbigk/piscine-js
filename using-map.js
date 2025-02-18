function citiesOnly(arr) {
    return arr.map((item) => item.city);
}

function upperCasingStates(arr) {
    return arr.map((state) =>
        state.split(" ")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(" ")
    );
}

function fahrenheitToCelsius(arr) {
    return arr.map(
        (temp) =>
            Math.floor((Number(temp.slice(0, -2)) - 32) * (5 / 9)).toString() +
            "°C"
    );
}

function trimTemp(arr) {
    return arr.map((item) => ({
        ...item, // Create a new object
        temperature: item.temperature.replaceAll(" ", "")
    }));
}

function tempForecasts(states){
    let array = states.map(all =>{
        const regex = /\s/g
        const resRegex = new RegExp(regex)
        const regexSpace = /\s\w/g
        const regexSp = new RegExp(regexSpace)
        let strin = all.temperature
        let res2 = all.state.match(regexSp)
        let str = strin.match(resRegex)
        let res = strin.replace(resRegex,'')
        if(res2!== null){
            all.state = all.state.replace(regexSp,res2[0].toUpperCase())
        }
        res = parseInt(res)
        let cel = (res -32)*5/9
        cel = Math.floor(cel)
        let strRes = cel+'°Celsius in '+all.city+', ' + all.state[0].toUpperCase()+all.state.slice(1)
        return strRes
    })  
    return array
}



const locations = [
    { city: "New York", country: "USA" },
    { city: "Tokyo", country: "Japan" },
    { city: "Paris", country: "France" }
];

const states = ["new york", "texas", "california"];

const temperatures = ["32°F", "104°F", "212°F"];

const weatherData = [
    { city: "Phoenix", state: "arizona", temperature: "102 °F" },
    { city: "Austin", state: "texas", temperature: "99 °F" },
    { city: "New York", state: "new york", temperature: "95 °F" }
];

// Correct Function Calls
console.log(citiesOnly(locations));  
console.log(upperCasingStates(states));
console.log(fahrenheitToCelsius(temperatures));
console.log(trimTemp(weatherData));
console.log(tempForecasts(trimTemp(weatherData))); // Trim first before forecasting
