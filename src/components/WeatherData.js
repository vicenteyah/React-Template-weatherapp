import React from 'react';
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
const WeatherData = () =>(
    <div> 
        <WeatherTemperature temperature ={20} weatherState ={'rain'}/>
        <WeatherExtraInfo humidity = {80} wind ={"10 km/s"}/>
    </div>
);
export default WeatherData;