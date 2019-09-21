import React, { Component } from 'react';
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css';
import convert from 'convert-units';
import {
    SUN, 
} from './../../constans/weathers';
//import { resolve } from 'dns';

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

class WeatherLocation extends Component{
    /*Constructor*/
    constructor (){
        super();
        this.state = {
            city: 'Mérida',
            data: data,
        };
    }
    getTemp = kelvin => {
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }
    getData = weather_data =>{
        const {humidity, temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = SUN;
        const temperature = this.getTemp(temp);
        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
        }
        return data;
    }
    handleUpdateClick = ()=>{

        fetch(api_weather).then(resolve => {
           return resolve.json();
        }).then(data => {
            
            const newWeather = this.getData(data);
            console.log(newWeather);
           // debugger;
            this.setState({
                data: newWeather
            });
            
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