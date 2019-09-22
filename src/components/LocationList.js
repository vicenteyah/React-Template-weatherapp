import React from 'react';
import WeatherLocation from './WeatherLocation';

 const LocationList = () => (
    <div>
        <WeatherLocation city = "Mérida,Mx"/>
        <WeatherLocation city="villahermosa,Mx" />
        <WeatherLocation city="Cancun,Mx" />
        <WeatherLocation city="Monterrey,Mx" />
        <WeatherLocation city="Nuevo Laredo,Mx" />
    </div>
);
export default LocationList;