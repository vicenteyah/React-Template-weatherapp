import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import Location from "./Location";
import WeatherData from "./WeatherData";
//import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherBycity from '../../services/getUrlWeatherByCity';


class WeatherLocation extends Component{
    /*Constructor*/
    constructor (props){
        super(props);
        const { city } = props;

        this.state = {
            city,
            data: null,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
    }
    
    handleUpdateClick = ()=>{
        const api_weather = getUrlWeatherBycity(this.state.city);
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
                {data ? 
                    <WeatherData data ={data}></WeatherData> :
                    <CircularProgress size={50}></CircularProgress>
                }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}
export default WeatherLocation;