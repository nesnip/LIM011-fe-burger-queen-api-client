import React, { useEffect } from 'react';
import './ItemOrderProducts.css';
import PropTypes from 'prop-types';
import editOrder from '../../firebase/editOrder';
import deleteOrderItem from '../../firebase/deleteOrder';
import trash from '../../assets/images/garbage.svg';

const ItemOrderProducts = ({
  client, ArrayProduct, dateEntry, status, dateProcessed, _id, viewAllOrder,
}) => {
  const changeStatusOrder = (e) => {
    console.log(e.target.value);
    editOrder(_id, e.target.value);
  };

  const deleteOrder = () => {
    deleteOrderItem(_id);
  };

  useEffect(() => {
    viewAllOrder();
  }, [status]);
  return (
    <>
      <span id="btn-deleted-trash"><img id="trash-order" src={trash} alt="Eliminar" onClick={deleteOrder} /></span>

      <p className="item-title"> Órden</p>
      <table className="egt" key={_id}>
        <thead />
        <tbody>
          <tr>
            <th>Cliente</th>
            <td>{client}</td>
          </tr>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
          </tr>
          <tr>
            <td>
              {ArrayProduct.map((objProduct) => (
                <div className="row-product" key={objProduct._id}>{objProduct.name}</div>
              ))}
            </td>
            <td>
              {ArrayProduct.map((objProduct) => (
                <div className="row-product" key={objProduct._id}>{objProduct.qty}</div>
              ))}
            </td>
          </tr>
          <tr>
            <th>Estado</th>
            <td>
              <select id="status" value={status} onChange={changeStatusOrder}>
                <option value={status}>
                  {' '}
                  {status}
                </option>
                <option value="delivering">Entregando</option>
                <option value="canceled">Cancelado</option>
                <option value="delivered">Entregado</option>

              </select>
            </td>
          </tr>
          <tr>
            <th>Fecha de creación</th>
            <td>{dateEntry}</td>
          </tr>
          <tr>
            <th>Fecha de cambio de estado</th>
            <td>{dateProcessed}</td>
          </tr>


        </tbody>
      </table>
    </>
  );
};
ItemOrderProducts.propTypes = {
  ArrayProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  _id: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  dateEntry: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  dateProcessed: PropTypes.string.isRequired,
};

export default ItemOrderProducts;
