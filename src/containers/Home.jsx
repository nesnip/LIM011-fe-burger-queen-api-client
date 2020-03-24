import React, { useState } from 'react';
import Menu from '../components/Menu/Menu';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import getProducts from './products';
import Orders from '../components/Orders/Orders';

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [quantity, setQuantity] = useState(0);
  const updateProducts = () => getProducts().then((res) => (filtro !== ''
    ? setDataProducts(res.filter((element) => element.type === filtro))
    : setDataProducts(res)));

  const handleClick = (tipo) => {
    setFiltro(tipo);
    updateProducts();
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  updateProducts();
  return (
    <>
      <Menu
        handleClick={handleClick}
      />
      <ItemProduct data={dataProducts} />
      <Orders addQuantity={handleAddQuantity} />
    </>
  );
};

export default Home;
