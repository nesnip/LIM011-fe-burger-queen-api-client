import React from 'react';
import Menu from '../components/Menu/Menu';
import Item from '../components/Item/Item';
import products from './products';

const Home = () => {
  const handleClick = (e) => {
    e.preventDefault();
    products().then((res) => {
      // const nombres = res.products.map((el) => el.name);
      res.products.forEach((el) => {
        console.log(el.name);
      });
    });
  };
  const dataProduct = products().then((res) => {
    res.products.forEach((el) => {
      console.log(el.name);
    });
  });
  return (
    <>
      <Menu
        handleClick={handleClick}
      />
      <Item
        dataProduct={dataProduct}
      />
    </>
  );
};

export default Home;
