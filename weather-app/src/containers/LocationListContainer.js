import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import LocationList from './../components/LocationList';
import {getWeatherCities, getCity} from "../reducers";

class LocationListContainer extends Component {

    componentDidMount() {
        const {setWeather, setSeletedCity, cities, city } = this.props;
        setWeather(cities);
        setSeletedCity(city);
    }

    handleSelectionLocation = city => {
        this.props.setSeletedCity(city);
    };

    render() {
        return (
            <LocationList cities={this.props.citiesWeather}
                          onSelectedLocation={this.handleSelectionLocation}/>
        )
    }
}

LocationListContainer.propTypes = {
    setSeletedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired
}

// const mapDispatchToProps = dispatch => ({
//     setCity: payload => dispatch(setSeletedCity(payload)),
//     setWeather: cities => dispatch(setWeather(cities))
// });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
