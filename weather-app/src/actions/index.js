import {getUrlForecastByCity, getUrlWeatherByCity} from "./../services/getUrlWeatherByCity";
import TransformForecast from "./../services/TransformForecast";
import TransformWeather from "./../services/TransformWeather";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});
const getWetherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWetherCity = payload => ({type: SET_WEATHER_CITY, payload});

export const setSeletedCity = payload => {
    return (dispatch, getState) => {
        const api_forecast = getUrlForecastByCity(payload);

        // activar en el estado el indicador de busqueda
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDate;
        const now = new Date();

        if ((now - date) < 1 * 60 * 1000) {
            return;
        }

        return fetch(api_forecast).then(
            data => (data.json())
        ).then(data => {
            const forecastData = TransformForecast(data);

            // modificar el estado con el resultado
            dispatch(setForecastData({city: payload, forecastData}));
        });
    };
};

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            const api_weather = getUrlWeatherByCity(city);

            dispatch(getWetherCity(city));

            fetch(api_weather).then(
                data => (data.json())
            ).then(data => {
                const newData = TransformWeather(data);
                dispatch(setWetherCity({city: city, weather: newData}));
            });
        });
    };
};
