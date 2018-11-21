import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div class="banner" id="top">
          <GetName name="Josephi Krakowski" />
        </div>
        <div class="banner" id="middle">
          <Activity game="football" />
        </div>
        <div class="banner" id="bottom">  
        <Chance prob="15" />
        </div>
      </div>
    );
  }
}

function GetName(props) {
  return <h3>Hello, {props.name}!</h3>
}

class Activity extends Component {
  render() {
    return (
      <div class="banner" id="middle">
        <h3>I hear you really like {this.props.game}!</h3>
      </div>
    )
  }
}

class Chance extends Component {
  render() {
    return (
      <div class = "banner" id="bottom">
        <h3>Unfortunately, according to my calculations you have a {this.props.prob}% chance of winning :/</h3>
      </div>
    )
  }
}
export default App;
