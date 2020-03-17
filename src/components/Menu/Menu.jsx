import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
// import products from '../../containers/products';

const Menu = ({ handleClick }) => (
  <ul>
    {/* <li><a className="active" href="#home">Burger Queen</a></li> */}
    <li><a href="#news" onClick={handleClick}>Desayuno</a></li>
    <li><a href="#contact">Almuerzo</a></li>
    <li><a href="#about">Bebidas</a></li>
  </ul>
);

Menu.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Menu;
