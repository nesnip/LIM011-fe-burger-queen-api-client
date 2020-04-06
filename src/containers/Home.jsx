import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import Orders from '../components/Orders/Orders';
import getProducts from '../controller/products';
import AddOrders from '../controller/Orders/AddOrders';

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);
  const [category, setCategory] = useState('');
  const [client, setClient] = useState('');
  const token = localStorage.getItem('token');

  const updateProducts = () => getProducts(token).then((res) => (category !== '' ? setDataProducts(res.filter((obj) => obj.type === category))
    : setDataProducts(res)));

  useEffect(() => {
    updateProducts();
  }, [category]);

  const handleClick = (type) => {
    setCategory(type);
  };

  const addOrder = (uniqueArray) => {
    setDataOrder(uniqueArray);
  };

  const deleteProduct = (newOrders) => {
    setDataOrder(newOrders);
  };

  const sendOrder = () => {
    const userId = '01';
    if (!client) {
      alert('Ingrese nombre del cliente');
    } else {
      AddOrders(token,
        userId,
        client,
        dataOrder.map((objOrder) => ({ productId: objOrder._id, qty: objOrder.qty })))
        .then(() => setClient(''), setDataOrder([]));
    }
  };
  const handleName = (e) => {
    setClient(e.target.value);
  };

  return (
    <>
      <Header />
      <Menu
        handleClick={handleClick}
        dataProducts={dataProducts}
        addOrder={addOrder}
      />
      <Orders
        dataOrder={dataOrder}
        deleteProduct={deleteProduct}
        sendOrder={sendOrder}
        handleName={handleName}
      />
    </>
  );
};

export default Home;
