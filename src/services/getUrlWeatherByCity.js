import {api_key, end_point} from './../constants/api_url';

const getUrlWeatherByCity = city => {
    return `${end_point}?q=${city}&appid=${api_key}`;
};

export default getUrlWeatherByCity;