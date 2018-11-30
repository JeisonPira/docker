import React from 'react';
import WeatherLocation from "./index";
import PropTypes from "prop-types";

const strToComponents = cities => (
    cities.map( city => <WeatherLocation key={city} city={city}/>)
);

const LocationList = ({cities}) => (
    <div>
        {strToComponents(cities)}
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;