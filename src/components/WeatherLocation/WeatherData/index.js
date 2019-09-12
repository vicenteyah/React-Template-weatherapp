import React from 'react';
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";

import {
    SUN,
   
} from './../../../constans/weathers';

import './styles.css';

const WeatherData = () =>(
    <div className="weatherDataCont"> 
        <WeatherTemperature 
            temperature ={20} 
            weatherState ={SUN}
        />
        <WeatherExtraInfo humidity = {80} wind ={"10 km/s"}/>
    </div>
);
export default WeatherData;
