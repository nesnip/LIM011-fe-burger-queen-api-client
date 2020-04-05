import React from 'react';
import './ItemOrderProducts.css';
import EditOrder from '../Orders/EditOrder';

const ItemOrderProducts = ({
  client, ArrayProduct, dateEntry, status, dateProcessed, AllDataOrder, _id, userId,
}) => {
  const changeStatusOrder = (e) => {
    EditOrder(client, ArrayProduct, localStorage.getItem('token'), userId, e.target.value, _id, dateEntry)
      .then((res) => console.log(res));
  };
  return (
    <>
      <table className="egt">
        <thead>
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
                <tr className="row-product">{objProduct.product.name}</tr>
              ))}
            </td>
            <td>
              {ArrayProduct.map((objProduct) => (
                <tr className="row-product">{objProduct.qty}</tr>
              ))}
            </td>
          </tr>
          <tr>
            <th>Estado</th>
            <td>
              <select id="status" onChange={changeStatusOrder}>
                <option value={status}>{status}</option>
                <option value="delivering">delivering</option>
                <option value="canceled">canceled</option>
                <option value="delivered">delivered</option>

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
        </thead>
        <tbody />
      </table>
    </>
  );
};

export default ItemOrderProducts;
