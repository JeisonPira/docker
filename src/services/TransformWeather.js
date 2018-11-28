import convert from "convert-units/lib";
import {SUN} from "../constants/weathers";

const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
};

const getWeatherState = weather_data => {
    return SUN;
};

const TransformWeather = weather_data => {
    const { temp, humidity } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp);

    console.log(temp);

    return {
        humidity, temperature,
        weatherState, wind: `${speed} m/s`
    };
};

export default TransformWeather;