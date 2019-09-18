import React, { Component } from 'react';
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css';

import {
    SUN, WINDY,
} from './../../constans/weathers';

const location = "Merida,MX";
const api_key = "449b543c7605df17ade6147db618b87c";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;

const data ={
    temperature: 28,
    weatherState: SUN,
    humidity: 20,
    wind:'10m/s'
}
const data2 = {
    temperature: 18,
    weatherState: WINDY,
    humidity: 20,
    wind: '10m/s'
}

class WeatherLocation extends Component{
    /*Constructor*/
    constructor (){
        super();
        this.state = {
            city: 'Mérida',
            data: data,
        };
    }
    handleUpdateClick =()=>{
        fetch(api_weather);
        console.log("refreshing......>:v")
        this.setState({
            city: 'Mérida!',
            data: data2
            
        });
 
    }
    render(){
        const { city, data} = this.state;
        return(
            <div className = "weatherLocationCont">
                <Location city ={city}></Location>
                <WeatherData data ={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Refresh</button>{/* onClick button is doing refernete to handleupdateClick
                to see if the event is working*/}
            </div>
        );
    }
}

export default WeatherLocation;