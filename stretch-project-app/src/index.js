import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
  
  ReactDOM.render(<App />, document.getElementById('root'));
  class Qwerty extends Component {
    render() {
      return (
        <div>
          <Middle age="19" />
          <Middle age="57" />
          <Middle age="6.5" />
        </div>
      );
    }
  }
  function Middle(props) {
    return <h1>Your Age is {props.age}</h1>
  }
  ReactDOM.render(<Qwerty />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
