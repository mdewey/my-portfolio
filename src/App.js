import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import facePic from './images/me.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={facePic} className="face-pic" alt="Me" />
          <h1 className="my-name">Mark Dewey</h1>
          <h4>Software Engineer &amp; Instructor</h4>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
