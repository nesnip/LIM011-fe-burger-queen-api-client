import React from 'react';
import './Orders.css';
import ItemOrder from '../ItemOrder/ItemOrder';

const Orders = ({
  dataOrder, deleteProduct,
}) => (
  <div className="container-order">
    <div className="order-body">
      <h4>Nueva Orden</h4>
      <input type="text" className="txt-form" id="name-client" placeholder="Ingrese nombre del cliente" />
      <input type="text" className="txt-form" id="numero-mesa" placeholder="N° de mesa" />
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
        </tbody>
      </table>
      <h5> Total </h5>
      <button className="btn-enviar" id="btn-enviar" type="submit">
        Enviar a Cocina
      </button>
    </div>
  </div>
);
export default Orders;
