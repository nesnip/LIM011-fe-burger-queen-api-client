import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import ItemProduct from '../ItemProduct/ItemProduct';

const Menu = ({
  handleClick, dataProducts, addProduct,
}) => {
  return (
    <>
      <ul>
        <li><a href="#breakfast" id="desayuno" onClick={() => handleClick('desayuno')}>Desayuno</a></li>
        <li><a href="#lunch" id="almuerzo" onClick={() => handleClick('almuerzo')}>Almuerzo</a></li>
        <li><a href="#complements" id="complementos" onClick={() => handleClick('complementos')}>Complementos</a></li>
        <li><a href="#drinks" id="bebida" onClick={() => handleClick('bebida')}>Bebidas</a></li>
      </ul>
      <div className="container-card">
        {dataProducts.map((objProduct) => (
          <ItemProduct
            key={objProduct._id}
            id={objProduct._id}
            image={objProduct.image}
            name={objProduct.name}
            price={objProduct.price}
            objProduct={objProduct}
            addProduct={addProduct}
          />
        ))}
      </div>
    </>
  );
};
Menu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  dataProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default Menu;
