import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import Tag from '../../components/Tag';
import Product from '../../components/Product';

class ProductContainer extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    return (
      <div>
        <h1>Product</h1>
      </div>
    );
  }
}

export default ProductContainer;