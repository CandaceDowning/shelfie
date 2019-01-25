import React, { Component } from 'react';
import {HashRouter as Router} from "react-router-dom"
import routes from './routes'
import Header from "./components/Header/Header"
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          {routes}
        </div>
      </Router>  
    );
  }
}

export default App;
