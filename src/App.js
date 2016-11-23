import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import Weather from './Weather.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      weather: [],
      searchLocationDefault:'cincinnati'
    };

   this.handleCityChange = this.handleCityChange.bind(this);
    this.submitLocation = this.submitLocation.bind(this);

  };

    componentWillMount() {
    $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.value}&units=imperial&7&APPID=a66f3e4a44d08030372b2690bc228aab`, (result) => {
      this.setState({
        weather: result.list,
      });
      console.log(result);
    });
  }

//LIVE UPDATES THE USER INPUT
//WHATEVER IS IN THE INPUT BOX IS WHAT GETS SUBMITTED IN THE API
  handleCityChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  submitLocation(e) {
    e.preventDefault();

    $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.value}&units=imperial&7&APPID=a66f3e4a44d08030372b2690bc228aab`, (result) => {
      this.setState({
        weather: result.list,
        value: '',
        city: result.city.name,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Weather App by React</h2>
        </div>
        <div className="App-search">
        <form onSubmit={this.submitLocation}>
         <input value={this.state.value} onChange={this.handleCityChange} type="text" />
          <button type="submit">Go</button>
        </form>
      </div>
        <div>
        {this.state.weather.map((weather) =>
          <Weather key={weather.temp.max} singleData={weather} />
        )}
      </div>
      </div>


    );
  }
  }

export default App;


// GETS RID OF KEY ERROR BY ASSIGNING UNIQUE KEY




