import React, { useState } from 'react';
import './Orders.css';
import PropTypes from 'prop-types';
import ItemOrder from '../ItemOrder/ItemOrder';

const Orders = ({
  dataOrder, deleteProduct, sendOrder, handleName,
}) => {
  let totalPrice = 0;
  dataOrder.forEach((el) => {
    totalPrice += el.price * el.qty;
  });
console.log(dataOrder);
  return (
    <div className="container-order">
      <div className="order-body">
        <h4>Nueva Orden</h4>
        <input type="text" className="txt-form" id="name-client" placeholder="Ingrese nombre del cliente" onChange={handleName} />
        <table className="egt">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {dataOrder.map((objOrder) => (
              <ItemOrder
                key={objOrder._id}
                name={objOrder.name}
                price={objOrder.price}
                qty={objOrder.qty}
                _id={objOrder._id}
                deleteProduct={deleteProduct}
              />
            ))}
            <tr>
              <th>Total</th>
              <th>{' '}</th>
              <th>
                S/.
                {totalPrice}
              </th>
              <th>{' '}</th>
            </tr>
          </tbody>
        </table>
        <button
          className="btn-enviar"
          id="btn-enviar"
          type="submit"
          onClick={sendOrder}
        >
          Enviar a Cocina
        </button>
      </div>
    </div>
  );
};

Orders.propTypes = {
  dataOrder: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteProduct: PropTypes.func.isRequired,
  sendOrder: PropTypes.func.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Orders;
