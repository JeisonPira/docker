import React from 'react';
import PropTypes from "prop-types";
import ForecastItem from './ForecastItem';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import './styles.css';

const renderForecastItemsDays = (forecastData) => {
    return forecastData.map(forecast => (
        <ForecastItem key={`${forecast.weekDay}${forecast.hour}`}
                      weekDay={forecast.weekDay}
                      hour={forecast.hour}
                      data={forecast.data}>
        </ForecastItem>));
};

const renderProgress = () => {
    return (
        <CircularProgress/>
    );
};

const ForecastExtended = ({city, forecastData}) => (
    <div>
        <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
        {forecastData ?
            renderForecastItemsDays(forecastData) :
            renderProgress()}
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
};

export default ForecastExtended;
