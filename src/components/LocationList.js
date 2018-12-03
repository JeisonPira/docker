import React from 'react';
import WeatherLocation from "./WeatherLocation/index";
import PropTypes from "prop-types";
import './styles.css';

const LocationList = ({cities, onSelectedLocation}) => {
    const handlerWeatherLocationClick = city => {
        console.log("handlerWeatherLocationClick" + city);
        onSelectedLocation(city);
    };
    const strToComponents = cities => (
        cities.map(city => (
            <WeatherLocation key={city} city={city}
                 onWeatherLocationClick={() => handlerWeatherLocationClick(city)}/>)
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