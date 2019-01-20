import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { fetchData } from '../../actions/data';

import Product from '../Product';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>Hello</h1>
        <Product data={this.props.data[0]} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
