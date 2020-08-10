import React from 'react';
import './Menu.css';


const MenuKitchen = ({ chooseCategory }) => (
  <>
    <ul>
      <li><a href="#breakfast" id="pending" onClick={() => chooseCategory('pending')}>Pediente</a></li>
      <li><a href="#lunch" id="delivered" onClick={() => chooseCategory('delivered')}>Entregado</a></li>
      <li><a href="#complements" id="delivering" onClick={() => chooseCategory('delivering')}>Entregando</a></li>
      <li><a href="#drinks" id="cancel" onClick={() => chooseCategory('canceled')}>Cancelado</a></li>
      <li><a href="#drinks" id="cancel" onClick={() => chooseCategory('all')}>Todo</a></li>
    </ul>
  </>
);


export default MenuKitchen;
