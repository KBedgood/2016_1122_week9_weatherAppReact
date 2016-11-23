import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './Weather.css';
import moment from 'moment';

//GETTING WEATHER DATA FOR SINGLE DAY AND PRESENTING IT BACK OUT TO THE VIEW

class Weather extends Component {
  render() {
  	let iconString = `http://openweathermap.org/img/w/${this.props.singleData.weather[0].icon}.png`
    return (
    	<div className="singleDay">
    	<h3>{moment.unix(this.props.singleData.dt).format('dddd')}</h3>
    	<img src={iconString} />
      	<h5>High {this.props.singleData.temp.max}</h5>
      	<h5>Low {this.props.singleData.temp.min}</h5>
      	<p> {this.props.singleData.weather[0].description} </p>
      	</div>


     
    );
  }
}

export default Weather;
