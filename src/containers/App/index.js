import React, { Component } from 'react';
import './App.css';

import Tag from '../../components/Tag';
import Product from '../../components/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Product img={'https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg'} title={'test'} subtitle={'test'} />
        <Tag name={'Pantry'} />
      </div>
    );
  }
}

export default App;
