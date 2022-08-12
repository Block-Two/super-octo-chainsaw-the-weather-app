import React from "react";

let getuserslocation = async () =>{ 
    let locationPromise = new Promise((resolve)=>{
        navigator.geolocation.getCurrentPosition(resolve,()=>null)})
        return locationPromise
}

let getPlace = () => {

     getuserslocation()
    .then(({coords})=>{
    
    fetch("./apikey.json")
    .then(response => response.json())
    .then(apikey =>
         fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coords.longitude},${coords.latitude}.json?types=postcode&access_token=${apikey}`))
    .then(response => response.json())
    .then(console.log)
    })
}



export default getPlace