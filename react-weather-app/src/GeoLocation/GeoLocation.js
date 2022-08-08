import React from "react";

import {useGeolocated} from "react-geolocated"

let GetGeolocation = () => {

    
    
    const{coords, isGeoloactionAvailable, isGeolocationEnabled} =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    })
    let lat = coords.latitude

    let lon = coords.longitude
    
    return (
        <h1>Your Postions is {lat} and {lon} </h1>
    )
}

export default GetGeolocation