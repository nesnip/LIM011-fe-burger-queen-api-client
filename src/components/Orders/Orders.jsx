import React from 'react';
import './Orders.css';
import ItemOrder from '../ItemOrder/ItemOrder';

const Orders = () => (
  <div className="container-order">
    <div className="order-body">
      <h4>Nueva Orden</h4>
      <input type="text" className="txt-form" id="name-client" placeholder="Ingrese nombre del cliente" />
      <ItemOrder />
      <button className="btn-form" id="btn-login" type="submit">
        Enviar a Cocina
      </button>
    </div>
  </div>
);
export default Orders;
