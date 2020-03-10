import React from 'react';
import './Menu.css';

const Menu = () => (
  <ul>
    <li><a className="active" href="#home">Burger Queen</a></li>
    <li><a href="#news">Desayuno</a></li>
    <li><a href="#contact">Almuerzo</a></li>
    <li><a href="#about">Bebidas</a></li>
  </ul>
);

export default Menu;
