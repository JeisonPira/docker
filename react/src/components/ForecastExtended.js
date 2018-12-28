import React, {Component} from 'react';
import PropTypes from "prop-types";
import ForecastItem from './ForecastItem';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import {api_key, end_point} from "../constants/api_url";
import TransformForecast from "../services/TransformForecast";
import './styles.css';

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null };
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps, nextContent){
        if(nextProps.city !== this.props.city){
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city =>{
        const api_forecast = `${end_point}/forecast?q=${city}&appid=${api_key}`;
        fetch(api_forecast).then(resolve => {
            return resolve.json();
        }).then(data =>{
            const forecastData = TransformForecast(data);
            this.setState({ forecastData });
        });
    }

    static renderForecastItemsDays(forecastData) {
        return forecastData.map(forecast =>
            <ForecastItem key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}/>
        );
    }

    renderProgress = () => {
     return (<CircularProgress />);
    };

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
                {forecastData ? ForecastExtended.renderForecastItemsDays(forecastData) : this.renderProgress()}
            </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;