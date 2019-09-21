const location = "Merida,MX";
const api_key = "449b543c7605df17ade6147db618b87c";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&APPID=${api_key}`;