import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import Main from './screens/Main';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}