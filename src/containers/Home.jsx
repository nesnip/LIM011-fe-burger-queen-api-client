import React, { useState } from 'react';
import Menu from '../components/Menu/Menu';
import Item from '../components/Item/Item';
import getProducts from './products';

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [filtro, setFiltro] = useState('');
  const updateProducts = () => getProducts().then((res) => (filtro !== ''
    ? setDataProducts(res.filter((element) => element.type === filtro))
    : setDataProducts(res)));

  const handleClick = (tipo) => {
    setFiltro(tipo);
    updateProducts();
  };

  updateProducts();
  return (
    <>
      <Menu
        handleClick={handleClick}
      />
      <Item data={dataProducts} />
    </>
  );
};

export default Home;
