import React, { useState } from 'react';
import './Orders.css';
import ItemOrder from '../ItemOrder/ItemOrder';

const Orders = ({
  dataOrder, deleteProduct, sendOrder, handleName,
}) => {
  // const [total, setTotal] = useState(0);
  let totalPrice = 0;
  dataOrder.forEach((el) => {
    totalPrice += el.price * el.cantidad;
  });
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
                quantity={objOrder.cantidad}
                id={objOrder.id}
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
          onClick={sendOrder}
        >
          Enviar a Cocina
        </button>
      </div>
    </div>
  );
};
export default Orders;
