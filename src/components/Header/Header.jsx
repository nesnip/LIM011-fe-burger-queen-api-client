import React from 'react';
import './Header.css';
import burger from '../../assets/images/burger.png';

const Head = () => (
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
    <li><a href="#news" id="productos">Productos</a></li>
    <li><a href="#contact" id="cocina">Cocina</a></li>
  </ul>
);
export default Head;
