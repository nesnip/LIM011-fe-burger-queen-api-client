import React, { useEffect } from 'react';
import './Orders.css';
import PropTypes from 'prop-types';
import ItemOrder from '../ItemOrder/ItemOrder';

const Orders = ({ dataOrder, deleteProduct }) => {
  let totalPrice = 0;
  dataOrder.forEach((el) => {
    totalPrice += el.price * el.count;
  });

  return (
    <div className="container-order">
      <div className="order-body">
        <h4>Nueva Orden</h4>
        <input type="text" className="txt-form" id="name-client" placeholder="Ingrese nombre del cliente"/*  onChange={handleName} */ />
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
                key={objOrder.id}
                objOrder={objOrder}
                deleteProduct={deleteProduct}
              />
            ))}
            <tr>
              <th>Total</th>
              <th />
              <th>
                S/.
                {totalPrice}
              </th>
            </tr>
          </tbody>
        </table>
        <button
          className="btn-enviar"
          id="btn-enviar"
          type="submit"
          /* onClick={sendOrder} */
        >
          Enviar a Cocina
        </button>
      </div>
    </div>
  );
};

Orders.propTypes = {
  dataOrder: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Orders;
