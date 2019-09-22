import {url_base_weather,api_key} from './../constans/api_url';

const getUrlWeatherBycity = city => {
    return `${url_base_weather}?q=${city}&APPID=${api_key}`;
}

export default getUrlWeatherBycity;