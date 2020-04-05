import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import burger from '../../assets/images/burger.png';

const Header = () => (
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
    <Link to="/Home">
      <li className="li-header" id="productos">Productos</li>
    </Link>
    <Link to="/OrdersKitchen">
      <li className="li-header" id="cocina">Cocina </li>
    </Link>
  </ul>
);
export default Header;
