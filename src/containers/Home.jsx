import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import getProducts from './products';
import Orders from '../components/Orders/Orders';
import OrderKitchen from '../components/OrderKitchen/OrderKitchen';

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [clientName, setclientName] = useState('');

  const updateProducts = () => getProducts(localStorage.getItem('token')).then((res) => (filtro !== ''
    ? setDataProducts(res.filter((element) => element.type === filtro))
    : setDataProducts(res)));

  const handleAddOrder = (idProduct, cantidad) => {
    // const producto = dataProducts.filter((element) => element.id === idProduct);
    dataProducts.forEach((element) => {
      if (element.id === idProduct) {
        const indice = dataOrder.findIndex((value) => idProduct === value.id);
        const tempDataOrder = dataOrder;
        if (indice >= 0) {
          tempDataOrder[indice].cantidad += cantidad;
          setDataOrder(tempDataOrder);
        } else {
          const temp = element;
          temp.cantidad = cantidad;
          tempDataOrder.push(temp);
          setDataOrder(tempDataOrder);
          updateProducts();
        }
      }
      return [];
    });
    // setDataOrder(producto);
    // console.log(dataOrder);
  };

  const handleClick = (tipo) => {
    setFiltro(tipo);
    updateProducts();
  };
  const deleteProduct = (id) => {
    for (let i = 0; i < dataOrder.length; i++) {
      if (dataOrder[i].id === id) {
        dataOrder.splice(i, 1);
      }
    }
    updateProducts();
  };
  const sendOrder = (e) => {
    e.preventDefault();
    if (!clientName) {
      alert('Ingresa nombre del cliente');
    } else {
      console.log(clientName);
    }
  };
  const handleName = (e) => {
    setclientName(e.target.value);
  };
  useEffect(() => {
    updateProducts();
  }, [filtro]);
  return (
    <div>
      <Header> </Header>
      <Menu
        handleClick={handleClick}
      />
      <Orders
        dataOrder={dataOrder}
        deleteProduct={deleteProduct}
        sendOrder={sendOrder}
        handleName={handleName}
      />
      <div className="container-card">
        {dataProducts.map((objProducts) => (
          <ItemProduct
            key={objProducts.id}
            obj={objProducts}
            name={objProducts.name}
            price={objProducts.price}
            image={objProducts.image}
            type={objProducts.type}
            id={objProducts.id}
            addOrder={handleAddOrder}
          />
        ))}
      </div>
      <OrderKitchen
        clientName={clientName}
      />
    </div>
  );
};

export default Home;
