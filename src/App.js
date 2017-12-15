import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddCountries from './components/countriesAdd'
import CountryList from './components/countriesList'

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Countries</h1>
        <AddCountries />
        <CountryList />
      </div>
    );
  }
}

export default App;
