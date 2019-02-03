import React, { Component } from 'react';
import './App.css';

import NavBar from '../Menu/NavBar/NavBar';
import About from '../Pages/About/About';
import Prices from '../Pages/Prices/Prices';
import Contact from '../Pages/Contact/Contact';
import Offer from '../Pages/Offer/Offer';

class App extends Component {
  render() {

    return (
      <div className="Page">
        <NavBar />
        <About />
        <Offer />
        <Prices/>
        <Contact/>
        <footer>
          <p className="text-center m-0">
            Wszelkie prawa zastrzeżone &copy;
            Wiesław Zalas - Coaching, Szkolenia, Doradztwo {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
