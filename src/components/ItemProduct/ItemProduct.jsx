import React from 'react';
import './ItemProduct.css';
// import products from '../../containers/products';
import plus from '../../assets/images/plus.svg';
import less from '../../assets/images/less.svg';

const ItemProduct = ({ data }) => data.map((res) => (
  <div className="card">
    <img
      src={res.image}
      alt="imagen"
      className="item-photo"
    />
    <div className="card-text">
      <span>{res.name}</span>
      <span className="card-text">
        S/.
        {res.price}
        {res.type}
      </span>
    </div>
    <div className="btn-container">
      <img src={less} alt="less" className="btn-plus-less" />
      <input type="text" placeholder="0" className="quantity" />
      <img src={plus} alt="plus" className="btn-plus-less" />
    </div>
    <span />
  </div>
));
export default ItemProduct;
