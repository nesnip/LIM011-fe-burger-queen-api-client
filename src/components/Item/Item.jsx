import React from 'react';
import './Item.css';
import products from '../../containers/products';
import plus from '../../assets/images/plus.svg';

const Item = () => {
  products().then((res) => {
    console.log(res);
  });
  return (
    <div className="card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1024px-A_small_cup_of_coffee.JPG"
        alt="imagen"
        className="item-photo"
      />
      <div className="card-text">
        <h4>Cafe Americano</h4>
        <p>Precio: S./ 5.00</p>
        Cantidad
        <img src={plus} alt="plus" className="plus" />
      </div>
    </div>
  );
};

export default Item;
