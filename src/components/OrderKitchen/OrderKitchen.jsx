import React from 'react';

const OrderKitchen = ({
  client
}) => (
  <div className="container-order">
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

            <td />

          </tr>
          <tr>

            <th>Estado</th>

            <td>
              <select id="estado">
                <option value="january" rel="icon-temperature">pendiente</option>
                <option value="february">cancelado</option>
                <option value="march">deliverado</option>
              </select>
            </td>

          </tr>
          <th>Fecha de creación</th>
          <td />
        </thead>
        <tbody />
      </table>
    </div>
  </div>
);
export default OrderKitchen;
