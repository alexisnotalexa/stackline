import React, { Component } from 'react';
import './App.css';

import Tag from '../../components/Tag';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Tag name={'Pantry'} />
      </div>
    );
  }
}

export default App;
