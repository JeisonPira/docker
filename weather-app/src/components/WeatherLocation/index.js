import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from "prop-types";
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';

const WeatherLocation = ({onWeatherLocationClick, city, data}) => (

    <div className="WeatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city}/>
        {data ? <WeatherData data={data}/> : <CircularProgress/>}
    </div>
)

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    weatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};

export default WeatherLocation;
