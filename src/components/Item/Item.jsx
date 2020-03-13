import React from 'react';
import './Item.css';
// import products from '../../containers/products';
import plus from '../../assets/images/plus.svg';
import less from '../../assets/images/less.svg';

const Item = ({ nume }) => {
  /* products().then((res) => {
    console.log(res);
  }); */
  return (
    <div className="card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1024px-A_small_cup_of_coffee.JPG"
        alt="imagen"
        className="item-photo"
      />
      <div className="card-body">
        <div className="card-text">
          <span>{nume}</span>
          <span className="card-text">S/. 5.00</span>
        </div>
        <div className="btn-container">
          <img src={less} alt="less" className="btn-plus-less" />
          <input type="text" placeholder="0" className="quantity" />
          <img src={plus} alt="plus" className="btn-plus-less" />
        </div>
        <span />
      </div>
    </div>
  );
};

export default Item;
