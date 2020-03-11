import React from 'react';
import './Item.css';
import products from '../../containers/products';
import plus from '../../assets/images/plus.svg';

const Item = () => {
  products().then((res) => {
    console.log(res);
  });
  return (
    <div className="card border-danger mb-3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1024px-A_small_cup_of_coffee.JPG"
        alt="imagen"
        className="item-photo"
      />
      <div className="card-body text-danger">
        <span>Cafe</span>
        <img src={plus} alt="plus" className="plus" />
        <span />
        <p className="card-text">Precio</p>
      </div>
    </div>
  );
};

export default Item;
