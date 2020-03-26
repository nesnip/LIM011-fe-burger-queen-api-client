import React from 'react';
import './ItemOrder.css';

const ItemOrder = ({ name, quantity, price, id }) => (
  <tr>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>
      S./
      {price * quantity}
    </td>
  </tr>
);

export default ItemOrder;
