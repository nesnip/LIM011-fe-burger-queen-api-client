import React from 'react';
import './ItemOrder.css';
import trash from '../../assets/images/garbage.svg';

const ItemOrder = ({
  name, qty, price, id, deleteProduct,
}) => (
  <tr>
    <td>{name}</td>
    <td>{qty}</td>
    <td>
      S/.
      {price * qty}
    </td>
    <td>
      <span id="btn-deleted"><img id="trash" src={trash} alt="Eliminar"  onClick={() => deleteProduct(id)} /></span>
    </td>
  </tr>
);

export default ItemOrder;
