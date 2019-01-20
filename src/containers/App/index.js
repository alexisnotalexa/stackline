import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { fetchData } from '../../actions/data';

import Header from '../../components/Header';
import Product from '../Product';
import Sales from '../Sales';
import { white } from 'ansi-colors';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderContent = () => {
    const { data } = this.props;
    return (
      <div className={'content-container'}>
        <Product product={data.product} />
        <div style={{ background: white, width: '70%' }}>
          <Sales sales={data.product.sales} />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.data.loading ? null : this.renderContent()}
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
