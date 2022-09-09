import React from "react";

let getuserslocation = async () =>{ 
    let locationPromise = new Promise((resolve)=>{
        navigator.geolocation.getCurrentPosition(resolve,()=>null)})
        return locationPromise
}

let getPlace = () => {

    

     getuserslocation()
    .then(({coords})=>{
    
   return fetch("./apikey.json")
    .then(response => response.json())
    .then(apikey =>
         fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coords.longitude},${coords.latitude}.json?types=postcode&access_token=${apikey}`))
    .then(response => response.json())
}

let DisplayZipCode = function() {

    let zipcode = getPlace()

    console.log(zipcode)
 
    return ! zipcode ?(
        <h3>Please wait</h3>
        ) : (
            <h3> is your zipcode? {zipcode.features.text}</h3>
    )

}


export default  DisplayZipCode