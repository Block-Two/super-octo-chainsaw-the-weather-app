let lat = 38.000975
let lon = -121.334856

let fetchWeather = function () {
    fetch(`https://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json`)
    .then((result) => {
        console.log(result)
        return (
            <h1>{result}</h1>
        )
    })
}