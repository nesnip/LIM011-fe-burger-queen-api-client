import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
// import products from '../../containers/products';

const Menu = ({ handleClick }) => (
  <ul>
    {/* <li><a className="active" href="#home">Burger Queen</a></li> */}
    <li><a href="#news" id="desayuno" onClick={() => handleClick('desayuno')}>Desayuno</a></li>
    <li><a href="#contact" id="almuerzo" onClick={() => handleClick('almuerzo')}>Almuerzo</a></li>
    <li><a href="#contact" id="complementos" onClick={() => handleClick('complementos')}>Complementos</a></li>
    <li><a href="#about" id="bebida" onClick={() => handleClick('bebida')}>Bebidas</a></li>
  </ul>
);

Menu.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Menu;
