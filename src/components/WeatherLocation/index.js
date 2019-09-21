import React, { Component } from 'react';
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css';
import { api_weather }from './../../constans/api_url';
import transformWeather from './../../services/transformWeather';
import {
    SUN, 
} from './../../constans/weathers';
//import { resolve } from 'dns';

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
        console.log("constructor");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
    }
    
    componentWillMount() {
        console.log("UNSAFE componentDidMount") 
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("UNSAFE componentWillUpdate");
    }
    
    
    handleUpdateClick = ()=>{

        fetch(api_weather).then(resolve => {
           return resolve.json();
        }).then(data => {

            const newWeather = transformWeather(data);
            console.log(newWeather);
           // debugger;
            this.setState({
                data: newWeather
            });
            
        });

 
    }
    render(){
        console.log("render");
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