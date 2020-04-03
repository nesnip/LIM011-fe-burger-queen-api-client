import React from 'react';
import './ItemOrderProducts.css';

const ItemOrderProducts = ({
  client, ArrayProduct, dateEntry, status,
}) => (
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
        <td>{status}</td>
      </tr>
      <tr>
        <th>Fecha de creación</th>
        <td>{dateEntry}</td>
      </tr>

    </thead>
    <tbody />
  </table>
);

export default ItemOrderProducts;
