//import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import MyComponents from './components/MyComponents';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <MyComponents name = "ReactJS" age = {100} />
        {/* <MyComponents name = {100}/> */}
      </div>
    );
  }
}

export default App;