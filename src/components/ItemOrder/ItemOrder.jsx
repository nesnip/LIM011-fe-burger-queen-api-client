import React from 'react';
import './ItemOrder.css';
import PropTypes from 'prop-types';
import trash from '../../assets/images/garbage.svg';

const ItemOrder = ({
  name, qty, price, _id, deleteProduct,
}) => (
  <tr>
    <td data-testid="item-name">{name}</td>
    <td data-testid="item-qty">{qty}</td>
    <td>
      S/.
      {price * qty}
      .00
    </td>
    <td>
      <span id="btn-deleted" className="btn-deleted"><img id="trash" src={trash} alt="Eliminar" onClick={() => deleteProduct(_id)} /></span>
    </td>
  </tr>
);

ItemOrder.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
};

export default ItemOrder;
