import React, { Component } from 'react';
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css';

import {
    SUN,
} from './../../constans/weathers';

const data ={
    temperature: 28,
    weatherState: SUN,
    humidity: 20,
    wind:'10m/s'
}

class WeatherLocation extends Component{
    render(){
        return(
            <div className = "weatherLocationCont">
                <Location city ={"Mérida"}></Location>
                <WeatherData data ={data}></WeatherData>
            </div>
        );
    }
}

export default WeatherLocation;