import React from "react";

import {useGeolocated} from "react-geolocated"

let GetGeolocation = () => {

    
    
    const{coords} =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    })
    
    return !coords ?(
        <h1>Getting Location</h1>
    ) : (<h1>Your Postions is {coords.latitude} and {coords.longitude} </h1>)
}

export default GetGeolocation