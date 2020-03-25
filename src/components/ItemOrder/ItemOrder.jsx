import React from 'react';
import './ItemOrder.css';

const ItemOrder = ({ name, quantity, price }) => (
  <ul>
    <li>
      <span>{name}</span>
      <span>{quantity}</span>
      <span>{price}</span>
    </li>
  </ul>
);

export default ItemOrder;
