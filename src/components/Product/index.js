import React from 'react';
import './styles.css';

const Product = ({ image, title, subtitle }) => {
  return (
    <div className={'product'}>
      <img className={'product--image'} src={image} alt={title} />
      <h3 className={'product--title'}>{title}</h3>
      <span className={'product--subtitle'}>{subtitle}</span>
    </div>
  );
};

export default Product;