import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import Orders from '../components/Orders/Orders';
import getProducts from './products';

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);
  const [category, setCategory] = useState('');
  const token = localStorage.getItem('token');

  const updateProducts = () => getProducts(token).then((res) => (category !== ''
    ? setDataProducts(res.filter((obj) => obj.type === category))
    : setDataProducts(res)));

  useEffect(() => {
    updateProducts();
  }, [category]);

  const handleClick = (type) => {
    setCategory(type);
  };

  const addOrder = (child) => {
    setDataOrder(child);
  };

  const deleteProduct = (idProduct) => {
    const i = dataOrder.findIndex((obj) => obj.id === idProduct);
    const tempDataOrder = dataOrder;
    if (i >= 0) {
      tempDataOrder.splice(i, 1);
    }
    setDataOrder(tempDataOrder);
    console.log(dataOrder);
    console.log(tempDataOrder);
  };

  return (
    <div>
      <Header />
      <Menu
        handleClick={handleClick}
        dataProducts={dataProducts}
        addOrder={addOrder}
      />
      <Orders
        dataOrder={dataOrder}
        setDataOrder={setDataOrder}
        deleteProduct={deleteProduct}
      />
    </div>
  );
};

export default Home;
