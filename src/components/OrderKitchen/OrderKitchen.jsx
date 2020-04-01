import React from 'react';
import './OrderKitchen.css';

const OrderKitchen = ({
  client, _id, qty, name, dateEntry, status,
}) => (
  <div className="container-order-kitchen" key={_id}>
    <div className="order-body">
      <h4> ORDEN N°</h4>
      <table className="egt">
        <thead>
          <tr>

            <th>Cliente</th>

            <td>
              {client}
            </td>

          </tr>
          <tr>

            <th>Productos</th>
            <th>Cantidad</th>

          </tr>
          <td>
            nombre del producto
          </td>
          <td>
            {qty}
          </td>
          <tr>

            <th>Estado</th>

            <td>
              <select id="estado">
                <option value={status} rel="icon-temperature">{status}</option>
                <option value="cancelado">cancelado</option>
                <option value="deliverado">deliverado</option>
              </select>
            </td>

          </tr>
          <th>Fecha de creación</th>
          <td>
            {dateEntry}
          </td>
        </thead>
        <tbody />
      </table>
    </div>
  </div>
);
export default OrderKitchen;
