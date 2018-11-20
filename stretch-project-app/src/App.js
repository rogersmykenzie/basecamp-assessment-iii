import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div id="test">
      <Welcome name="Miguel" />
      <Welcome name="Josephi Krakowski" />
      <Welcome name="Wen Elot" />
    </div>
    );
  }
}



function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}



export default App;
