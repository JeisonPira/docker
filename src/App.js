import React, { Component } from 'react';
import WeatherLocation from './components';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation city="Bogota,bog"/>
      </div>
    );
  }
}

export default App;
