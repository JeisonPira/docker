import {api_key, end_point} from './../constants/api_url';

export const getUrlWeatherByCity = city => {
    return `${end_point}/weather?q=${city}&appid=${api_key}`;
};

export const getUrlForecastByCity = city => {
    return `${end_point}/forecast?q=${city}&appid=${api_key}`;
};
