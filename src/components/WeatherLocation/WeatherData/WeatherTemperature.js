 import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types'; 
import './styles.css'
import {
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    CLOUD,
} from './../../../constans/weathers';

const icons ={
   [CLOUD]:"cloud",
   [CLOUDY]:"cloudy",
   [SUN]:"day-sunny",
   [RAIN]:"rain",
   [SNOW]:"snow",
   [WINDY]:"windy"
};

const getWeatherIcon = weatherState =>{
    const icon = icons[weatherState];
  //  const sizeicon = "4x";
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size="2x" />
    else
        return <WeatherIcons className = "wicon" name={"day-sunny"} size="2x" />
};

 const WeatherTemperature = ({temperature ,weatherState}) =>(
    <div className = "weatherTemperatureCont">
        {
           getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className = "temperatureType">{`cº`}</span>
     </div>
 );

 WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
 };
 export default WeatherTemperature;