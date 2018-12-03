import convert from "convert-units/lib";
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE, } from '../constants/weathers';

const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(0));
};

const getWeatherState = weather => {
    const { id } = weather;
    if(id < 300){
        return THUNDER;
    }else if(id < 400){
        return DRIZZLE;
    }else if(id < 500){
        return RAIN;
    }else if(id < 700){
        return SNOW;
    }else if(id === 800){
        return SUN;
    }else {
        return CLOUD;
    }
};

const TransformWeather = weather_data => {
    const { temp, humidity } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp);

    return {
        humidity, temperature,
        weatherState, wind: `${speed} m/s`
    };
};

export default TransformWeather;