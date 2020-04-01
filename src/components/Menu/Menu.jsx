import React, { useState, useEffect } from 'react';
import './Menu.css';
import PropTypes from 'prop-types';
import ItemProduct from '../ItemProduct/ItemProduct';

const Menu = ({ handleClick, dataProducts, addOrder }) => {
  const [dataPreOrder, setDataPreOrder] = useState([]);
  const addArrOrder = (child) => {
    const arrOrder = dataPreOrder.concat(child);
    const uniqueArr = [...new Set(arrOrder)];
    setDataPreOrder([...new Set(arrOrder)]);
    console.log(uniqueArr);
  };
  useEffect(() => {
    addOrder(dataPreOrder);
  }, [dataPreOrder]);

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
            key={objProduct.id}
            objProduct={objProduct}
            addArrOrder={addArrOrder}
          />
        ))}
      </div>
    </>
  );
};
Menu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  dataProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addOrder: PropTypes.func.isRequired,
};

export default Menu;
