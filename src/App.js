import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Listings from './Listings';
import Routes from "./Routes"
import { BrowserRouter as Router } from 'react-router-dom';
import background from './images/background.jpg'


class App extends Component {
    componentDidMount() {
        console.log('AM I LOADING')
    }
  render() {
    return (
      <body>
          <div>
              <Router>
                  <div style={{marginTop:'20px'}}>
                      <NavBar/>
                      <Routes/>
                  </div>
              </Router>
          </div>
      </body>

    );
  }
}

export default App;
