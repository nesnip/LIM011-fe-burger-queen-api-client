import React, { useState, useEffect } from 'react';
import './Orders.css';
import PropTypes from 'prop-types';
import ItemOrder from '../ItemOrder/ItemOrder';

const Orders = ({
  dataOrder, deleteProduct, sendOrder, handleName,
}) => {
  const [newOrders, setNewOrders] = useState([]);
  let totalPrice = 0;
  dataOrder.forEach((el) => {
    totalPrice += el.price * el.qty;
  });

  const deleteItem = (productName) => {
    const i = dataOrder.findIndex((obj) => obj.name === productName);
    const tempDataOrder = dataOrder;
    tempDataOrder[i].qty = 0;
    tempDataOrder.splice(i, 1);
    setNewOrders(tempDataOrder);
  };

  useEffect(() => {
    deleteProduct(newOrders);
  }, [newOrders]);

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
                key={objOrder.id}
                name={objOrder.name}
                price={objOrder.price}
                qty={objOrder.qty}
                _id={objOrder._id}
                deleteItem={deleteItem}
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
};

export default Orders;
