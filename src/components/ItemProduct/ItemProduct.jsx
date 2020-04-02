import React, { useState } from 'react';
import './ItemProduct.css';

const ItemProduct = ({ objProduct, addArrOrder }) => {
  const [quantity, setQuantity] = useState(0);
  const addProduct = () => {
    const newObjProduct = objProduct;
    if (newObjProduct.qty > 0) {
      newObjProduct.qty += quantity;
    } else {
      newObjProduct.qty = quantity;
    }
    addArrOrder([newObjProduct]);
  };

  return (
    <div className="card">
      <img
        src={objProduct.image}
        alt="imagen"
        className="item-photo"
        onClick={() => {
          addProduct();
          setQuantity(0);
        }}
      />
      <div className="card-text">
        <span className="card-name">{objProduct.name}</span>
        <span className="card-text">
          S/.
          {objProduct.price}
        </span>
      </div>
      <div className="btn-group btn-container" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            setQuantity(quantity - 1);
          }}
        >
          -
        </button>
        <input type="text" placeholder="0" className="quantity btn btn-dark" value={quantity} min="0" />
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemProduct;
