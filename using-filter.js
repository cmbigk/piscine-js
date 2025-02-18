function filterShortStateName(state) {
    return state.filter((item) => item.length < 7);
}

function filterStartVowel(state) {
    return state.filter((item) => item[0].match(/[aeiou]/i));
}


function filter5Vowels(state) {
    return state.filter((item) => item.match(/[aeiou]/gi).length >= 5);
}

function filter1DistinctVowel(arr) {
    return arr.filter(
        (item) => new Set(item.toLowerCase().match(/[aeiou]/gi)).size === 1
    );
}



function multiFilter(arr) {
    arr = arr.filter((item) => {
        let capital = item.capital.length >= 8;
        let name = !/^[aeiou]/i.test(item.name);
        let tag = /[aeiou]/i.test(item.tag);
        let region = item.region !== "South";
        return capital && name && tag && region;
    });
    return arr;
}

console.log(filter1DistinctVowel('New York', 'Texas', 'California', 'Florida', 'Arizona', 'Washington', 'Maine', 'Ohio', 'Utah', 'Oregon', 'Kansas', 'Nevada', 'Idaho', 'Colorado', 'Montana', 'Wyoming', 'North Dakota', 'South Dakota', 'Nebraska', 'Oklahoma', 'Minnesota', 'Iowa', 'Missouri', 'Arkansas', 'Louisiana', 'Wisconsin', 'Illinois', 'Michigan', 'Indiana', 'Kentucky', 'Tennessee', 'Mississippi', 'Alabama', 'Georgia', 'Florida', 'South Carolina', 'North Carolina', 'Virginia', 'West Virginia', 'Maryland', 'Delaware', 'Pennsylvania', 'New Jersey', 'Connecticut', 'Rhode Island', 'Massachusetts', 'Vermont', 'New Hampshire', 'Maine'));