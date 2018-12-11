import moment from 'moment';
import 'moment/locale/es';
import TransformWeather from "./TransformWeather";

const TransformForecast = data => (
    data.list.filter(item => (
        moment.unix(item.dt).hour() === 7 ||
        moment.unix(item.dt).hour() === 13 ||
        moment.unix(item.dt).hour() === 19
    )).map(item => (
         {
             weekDay: moment.unix(item.dt).format('ddd'),
             hour: moment.unix(item.dt).hour(),
             data: TransformWeather(item)
         }
     ))
);

export default TransformForecast;