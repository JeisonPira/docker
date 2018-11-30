import React, { Component } from 'react';
import LocationList from "./components/LocationList";
import './App.css';

const cities = ["Bogota,col", "Madrid,es", "Sidney,aus",
    "Tokio,jpn", "Kimberley,afr"];
class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}/>
      </div>
    );
  }
}

export default App;
