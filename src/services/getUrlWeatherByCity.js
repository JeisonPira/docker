import {api_key, end_point} from './../constants/api_url';

const getUrlWeatherByCity = city => {
    return `${end_point}/weather?q=${city}&appid=${api_key}`;
};

const getUrlForecastByCity = city => {
    return `${end_point}forecast?q=${city}&appid=${api_key}`;
};

export default getUrlWeatherByCity;