import React from "react";

import {useGeolocated} from "react-geolocated"

let getGeolocation = () => {

    let lat = 0

    let lon = 0


    const{coords, isGeoloactionAvailable, isGeolocationEnabled} =
       useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    })

    return (
        <h1>Your Postions is {lat} and {lon} </h1>
    )
}

export default getGeolocation