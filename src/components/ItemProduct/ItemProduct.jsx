import React, { useState } from 'react';
import './ItemProduct.css';
// import products from '../../containers/products';

const ItemProduct = ({
  name, price, image, _id, obj, addOrder,
}) => {
  const [qty, setQuantity] = useState(0);
  return (
    <div className="card">
      <img
        src={image}
        alt="imagen"
        className="item-photo"
        onClick={() => {
          addOrder(_id, qty);
          setQuantity(0);
        }}
      />
      <div className="card-text">
        <span className="card-name">{name}</span>
        <span className="card-text">
          S/.
          {price}
        </span>
      </div>
      <div className="btn-group btn-container" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-dark">-</button>
        {/* <button type="button" className="btn btn-secondary"></button> */}
        <input type="text" placeholder="0" className="quantity btn btn-dark" value={qty} />
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            setQuantity(qty + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default ItemProduct;
