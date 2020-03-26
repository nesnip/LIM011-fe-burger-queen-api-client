import React, { useState } from 'react';
import './ItemProduct.css';
// import products from '../../containers/products';

const ItemProduct = ({
  name, price, image, id, obj, addOrder,
}) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="card" key={id}>
      <img
        src={image}
        alt="imagen"
        className="item-photo"
        onClick={() => addOrder(id, quantity)}
      />
      <div className="card-text">
        <span className="card-name">{name}</span>
        <span className="card-text">
          S/.
          {price}
        </span>
      </div>
      <div className="btn-group btn-container" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary">-</button>
        {/* <button type="button" className="btn btn-secondary"></button> */}
        <input type="text" placeholder="0" className="quantity btn btn-secondary" value={quantity} />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setQuantity(quantity + 1);
            console.log(quantity);
            console.log(obj);
            console.log(id);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default ItemProduct;
