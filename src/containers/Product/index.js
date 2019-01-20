import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import Tag from '../../components/Tag';
import Product from '../../components/Product';

class ProductContainer extends Component {
  static propTypes = {
    product: PropTypes.object
  };

  render() {
    const { product } = this.props;
    return (
      <div className={'product-container'}>
        <Product 
          title={product.title} 
          image={product.image} 
          subtitle={product.subtitle} 
        />
        <div className={'tag-container'}>
          {product.tags.map(tag => <Tag name={tag} />)}
        </div>
      </div>
    );
  }
}

export default ProductContainer;