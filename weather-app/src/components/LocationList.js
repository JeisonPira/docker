import React from 'react';
import WeatherLocation from "./WeatherLocation/index";
import PropTypes from "prop-types";
import './styles.css';

const LocationList = ({cities, onSelectedLocation}) => {
    const handlerWeatherLocationClick = city => {
        onSelectedLocation(city);
    };
    const strToComponents = cities => (
        cities.map(city => (
            <WeatherLocation key={city.key} city={city.name}
                 onWeatherLocationClick={() => handlerWeatherLocationClick(city.name)}
            data={city.weather}/>)
        )
    );

    return (
        <div className="locationList"> {strToComponents(cities)} </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
};

export default LocationList;
