import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWeather from './Weather/HelloWeather';
import GetGeolocation from './GeoLocation/GeoLocation.js';
import Demo from './GeoLocation/Reactgeolocated';
import  DisplayZipCode from './MapBox/MapBox.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <HelloWeather/>
    <Demo/>
    <GetGeolocation/>
    <DisplayZipCode/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
