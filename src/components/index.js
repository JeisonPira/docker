import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherLocation/WeatherData';
import './styles.css';
import { SUN, RAIN } from './../constants/weathers';

const data = { temperature: 20, weatherState: SUN, humidity: 10, wind: "30 m/s" };
const data2 = { temperature: 5, weatherState: RAIN, humidity: 23, wind: "15 m/s" };

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
          city: "Barcelona",
          data:  data
        };
    }

    handleUpdateClick = () => {
        this.setState({
            data: data2
        });
    };

    render(){
        const {city, data} = this.state;
        return (
            <div className="WeatherLocationCont">
                <Location city={city} />
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;