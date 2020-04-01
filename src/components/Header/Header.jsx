import React from 'react';
import './Header.css';
import burger from '../../assets/images/burger.png';

const Head = ({ viewAllOrder }) => (
  <ul className="nav-header">
    <li>

      <p className="title-header">
        <img src={burger} alt="logo" className="logo-header" />
        <span className="title-header initials-header">B</span>
        urger
        {' '}
        <span className="title-header initials-header">Q</span>
        ueen
      </p>
    </li>
    <li><a href="/Home" id="productos">Productos</a></li>
    <li><a href="/OrdersKitchenv" id="cocina" onClick={() => viewAllOrder()}> Cocina</a></li>
  </ul>
);
export default Head;
