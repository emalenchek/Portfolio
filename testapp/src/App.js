import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './components/Navbar';
import AboutMe from './components/AboutMe';

class App extends Component {
  render() {
    return(
      <div>
        <AppNavbar/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
