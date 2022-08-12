import React from "react";

let getuserslocation = async () =>{ 
    let locationPromise = new Promise((resolve)=>{
        navigator.geolocation.getCurrentPosition(resolve,()=>null)})
        return locationPromise
}

let getPlace = async() => {

    let place = []

     getuserslocation()
    .then(({coords})=>{
    
    fetch("./apikey.json")
    .then(response => response.json())
    .then(apikey =>
         fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coords.longitude},${coords.latitude}.json?types=postcode&access_token=${apikey}`))
    .then(response => response.json())
    .then(rehydrated => place.push(rehydrated))
    })

    console.log(place)

    return place
}

let DisplayZipCode = function() {

    let zipcode = getPlace().then(zipcode => zipcode[0].features[0].properties.text )

    
 
    return(
        <h3> is your zipcode? {zipcode[0].features[0].properties.text}</h3>
    )

}


export default  DisplayZipCode