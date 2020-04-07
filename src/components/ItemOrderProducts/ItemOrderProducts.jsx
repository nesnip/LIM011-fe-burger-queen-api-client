import React, { useEffect } from 'react';
import './ItemOrderProducts.css';
import PropTypes from 'prop-types';
import EditOrder from '../../controller/Orders/EditOrder';
import DeleteOrder from '../../controller/Orders/DeleteOrder';
import trash from '../../assets/images/garbage.svg';

const ItemOrderProducts = ({
  client, ArrayProduct, dateEntry, status, dateProcessed, _id, userId, viewAllOrder,
}) => {
  const changeStatusOrder = (e) => {
    EditOrder(client, ArrayProduct, localStorage.getItem('token'), userId, e.target.value, _id, dateEntry)
      .then((res) => console.log(res));
  };
  const deleteOrder = () => {
    DeleteOrder(localStorage.getItem('token'), _id).then((res) => console.log(res), viewAllOrder());
  };
  useEffect(() => {
    viewAllOrder();
  }, [ArrayProduct]);
  return (
    <>
      <span id="btn-deleted-trash"><img id="trash-order" src={trash} alt="Eliminar" onClick={deleteOrder} /></span>

      <p> Órden</p>
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
                <div className="row-product" key={objProduct.product._id}>{objProduct.product.name}</div>
              ))}
            </td>
            <td>
              {ArrayProduct.map((objProduct) => (
                <div className="row-product" key={objProduct.product._id}>{objProduct.qty}</div>
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
  userId: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  dateEntry: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  dateProcessed: PropTypes.string.isRequired,
};

export default ItemOrderProducts;
