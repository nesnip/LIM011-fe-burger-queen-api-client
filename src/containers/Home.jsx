import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import Orders from '../components/Orders/Orders';
import getProducts from '../controller/products';
import AddOrders from '../controller/Orders/AddOrders';
import styles from '../styles.module.css';

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);
  const [category, setCategory] = useState('');
  const [client, setClient] = useState('');
  const token = localStorage.getItem('token');

  const updateProducts = () => getProducts((localStorage.getItem('token'))).then((res) => (category !== '' ? setDataProducts(res.filter((obj) => obj.type === category))
    : setDataProducts(res)));
  useEffect(() => {
    updateProducts();
  }, [category]);

  const handleClick = (type) => {
    setCategory(type);
  };

  const addProduct = (count, idProduct) => {
    const arr = dataOrder;
    const index = dataOrder.findIndex((objProduct) => objProduct._id === idProduct);
    if (index >= 0) {
      arr[index].qty += count;
      setDataOrder(arr);
    } else {
      const tempProduct = dataProducts.find((obj) => obj._id === idProduct);
      tempProduct.qty = count;
      arr.push(tempProduct);
      setDataOrder(arr);
    }
    console.log(arr);
    updateProducts();
  };

  const deleteProduct = (idProduct) => {
    const arr = dataOrder;
    const index = dataOrder.findIndex((obj) => obj._id === idProduct);
    arr.splice(index, 1);
    setDataOrder(arr);
    console.log(arr);
    updateProducts();
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
    <div className={styles.flex}>
      <Header />
      <Menu
        handleClick={handleClick}
        dataProducts={dataProducts}
        addProduct={addProduct}
      />
      <Orders
        dataOrder={dataOrder}
        deleteProduct={deleteProduct}
        sendOrder={sendOrder}
        handleName={handleName}
      />
    </div>
  );
};

export default Home;
