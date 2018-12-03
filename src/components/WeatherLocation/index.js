import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from "prop-types";
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity'
import TransformWeather from '../../services/TransformWeather';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';

class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const { city } = props;
        this.state = { city, data:  null };
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data =>{
            const newData = TransformWeather(data);
            this.setState({
                data: newData
            });
        });

    };

    render(){
        const {onWeatherLocationClick} = this.props;
        console.log("render");
        const {city, data} = this.state;
        return (
            <div className="WeatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city} />
                {data ? <WeatherData data={data}/> : <CircularProgress />}
            </div>
        );
    }
}

WeatherLocation.propTypes ={
    city: PropTypes.string.isRequired,
    weatherLocationClick: PropTypes.func
};

export default WeatherLocation;