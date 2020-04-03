import React from 'react';
import './ItemOrder.css';
import PropTypes from 'prop-types';
import trash from '../../assets/images/garbage.svg';

const ItemOrder = ({
  name, qty, price, id, deleteItem,
}) => (
  <tr>
    <td>{name}</td>
    <td>{qty}</td>
    <td>
      S/.
      {price * qty}
    </td>
    <td>
      <span id="btn-deleted"><img id="trash" src={trash} alt="Eliminar" onClick={() => deleteItem(name)} /></span>
    </td>
  </tr>
);

ItemOrder.propTypes = {
  objOrder: PropTypes.shape({}).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ItemOrder;
