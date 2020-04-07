import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ItemProduct.css';

const ItemProduct = ({
  id, image, name, price, addProduct,
}) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="card">
      <img
        src={image}
        alt="imagen"
        className="item-photo"
      />
      <div className="card-text">
        <span className="card-name" data-testid="itemProduct">{name}</span>
        <span className="card-text" data-testid="item-price">
          S/.
          {price}
        </span>
      </div>
      <div className="btn-group btn-container" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
            } else {
              setQuantity(0);
            }
          }}
        >
          -
        </button>
        <input data-testid="item-count" className="quantity btn btn-dark" value={quantity} onChange={() => {}} />
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
      <button
        type="button"
        className="btn btn-dark"
        disabled={quantity <= 0}
        onClick={() => {
          addProduct(quantity, id);
          setQuantity(0);
        }}
      >
        Agregar
      </button>
    </div>
  );
};

ItemProduct.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default ItemProduct;
