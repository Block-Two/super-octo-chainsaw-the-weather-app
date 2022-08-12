let lat = 38.000975
let lon = -121.334856

// let FetchWeather = function () {
//     fetch(`https://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json`)
//     .then((response) => response.json())
//     .then((result) => {
//         console.log(result.dataseries)
//         console.log("Testing Weather Status")
//         return (
//             <h1>Testing Weather Status</h1>
//             // <h1>{result}</h1>
//         )
//     })
// }

let date = new Date(); 

function roundMinutes() {
    let time = date.getHours() + ":00"
    return time;
}

function convertedDate() {
    let mm = date.getMonth() + 1; 
    let dd = date.getDate();
  
    return [date.getFullYear(),
        "-" + (mm>9 ? '' : '0') + mm,
        "-" + (dd>9 ? '' : '0') + dd,
        "T" + roundMinutes()
    ].join('').toString();
};
convertedDate();
//   console.log(convertedDate())


let FetchWeather = function () {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles`)
    .then((response) => response.json())
    .then((result) => {
        // console.log(result)
        let temp = convertedDate()
        for (let i = 0; i < result.hourly.time.length; i++) {
            if (result.hourly.time[i] === temp) {
                // console.log(i)
                // console.log(result.hourly.time[i])
                console.log(result.hourly.temperature_2m[i] + " degrees")
            }
        }

        return (
            // <img src={result.url}/>
            <h1>Testing</h1>
        )
    })
}

export default FetchWeather