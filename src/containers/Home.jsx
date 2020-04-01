import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import getProducts from './products';
import Orders from '../components/Orders/Orders';
import OrderKitchen from '../components/OrderKitchen/OrderKitchen';
import AddOrders from '../components/Orders/AddOrders';

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [client, setClient] = useState('');

  const updateProducts = () => getProducts(localStorage.getItem('token')).then((res) => (filtro !== ''
    ? setDataProducts(res.filter((element) => element.type === filtro))
    : setDataProducts(res)));
  console.log(dataProducts);
  const handleAddOrder = (_id, qty) => {
    // const producto = dataProducts.filter((element) => element.id === idProduct);
    dataProducts.forEach((element) => {
      if (element._id === _id) {
        const indice = dataOrder.findIndex((value) => _id === value._id);
        const tempDataOrder = dataOrder;
        if (indice >= 0) {
          tempDataOrder[indice].qty += qty;
          setDataOrder(tempDataOrder);
        } else {
          const temp = element;
          temp.qty = qty;
          tempDataOrder.push(temp);
          setDataOrder(tempDataOrder);
          updateProducts();
        }
      }
      console.log(_id);
      console.log(element._id);
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
  const sendOrder = () => {
    const token = localStorage.getItem('token');
    const _id = '01';
    if (!client) {
      alert('Ingrese nombre del cliente');
    }
    AddOrders(token,
      _id,
      client,
      dataOrder.map((elem) => ({ productId: elem._id, qty: elem.qty })))
      .then((res) => console.log(res));
  };
  const handleName = (e) => {
    setClient(e.target.value);
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
            key={objProducts._id}
            obj={objProducts}
            name={objProducts.name}
            price={objProducts.price}
            image={objProducts.image}
            type={objProducts.type}
            _id={objProducts._id}
            addOrder={handleAddOrder}
          />
        ))}
      </div>
      <OrderKitchen
        client={client}
        dataOrder={dataOrder}
      />
    </div>
  );
};

export default Home;
