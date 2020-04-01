import React from 'react';
import './ItemOrder.css';
import PropTypes from 'prop-types';
import trash from '../../assets/images/garbage.svg';

const ItemOrder = ({ objOrder, deleteProduct }) => (
  <tr>
    <td>{objOrder.name}</td>
    <td>{objOrder.count}</td>
    <td>
      S/.
      {objOrder.price * objOrder.count}
    </td>
    <td>
      <span id="btn-deleted"><img id="trash" src={trash} alt="Eliminar" onClick={() => deleteProduct(objOrder.id)} /></span>
    </td>
  </tr>
);

ItemOrder.propTypes = {
  objOrder: PropTypes.shape({}).isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default ItemOrder;
