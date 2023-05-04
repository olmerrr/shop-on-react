import React, { Component } from 'react';
import {Header} from "./layout/Header";
import {Shop} from "./components/Shop";
import {Footer} from "./layout/Footer";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Shop />
        <Footer />
      </div>
    );
  }
}

export default App;
