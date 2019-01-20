import React from 'react';
import './styles.css';

const Product = ({ img, title, subtitle }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </div>
  );
};

export default Product;