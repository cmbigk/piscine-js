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

function tempForecasts(arr) {
    return arr.map((item) => {
        let temp = item.temperature.trim(); // Remove extra spaces
        if (!temp.endsWith("°F")) return "Invalid temperature"; // Handle incorrect format

        let fahrenheit = Number(temp.slice(0, -2)); // Extract numeric value
        if (isNaN(fahrenheit)) return "Invalid temperature"; // Handle NaN cases

        let celsius = Math.floor((fahrenheit - 32) * (5 / 9));

        let capitalizedState = item.state
            .split(" ")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(" ");

        return `${celsius}°Celsius in ${item.city}, ${capitalizedState}`;
    });
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
