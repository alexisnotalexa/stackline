import React from 'react';
import './styles.css';

const Tag = ({ name }) => {
  return (
    <div className={'tag'}>
      <span className={'tag--name'}>{name}</span>
    </div>
  );
};

export default Tag;
