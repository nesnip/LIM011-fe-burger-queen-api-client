import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import ItemProduct from '../ItemProduct/ItemProduct';

const Menu = ({
  handleClick, dataProducts, addProduct,
}) => (
  <>
    <ul>
      <li><a href="#breakfast" id="desayuno" onClick={() => handleClick('desayuno')}>Desayuno</a></li>
      <li><a href="#lunch" id="almuerzo" onClick={() => handleClick('almuerzo')}>Almuerzo</a></li>
      <li><a href="#complements" id="complementos" onClick={() => handleClick('complementos')}>Complementos</a></li>
      <li><a href="#drinks" id="bebida" onClick={() => handleClick('bebida')}>Bebidas</a></li>
    </ul>
    <div className="container-card">
      {dataProducts.map((objProduct) => {
        // console.log(objProduct.data());
        return (
          <ItemProduct
            key={objProduct.data()._id}
            id={objProduct.data()._id}
            image={objProduct.data().image}
            name={objProduct.data().name}
            price={objProduct.data().price}
            objProduct={objProduct.data()}
            addProduct={addProduct}
          />
        );
      })}
    </div>
  </>
);
Menu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  dataProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default Menu;
