import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import getProducts from './products';
import Orders from '../components/Orders/Orders';
import OrderKitchen from '../components/OrderKitchen/OrderKitchen';
import AddOrders from '../components/Orders/AddOrders';
import GetOrders from '../components/Orders/GetOrders';

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);
  const [AlldataOrder, setAllDataOrder] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [client, setClient] = useState('');

  const updateProducts = () => getProducts(localStorage.getItem('token')).then((res) => (filtro !== ''
    ? setDataProducts(res.filter((element) => element.type === filtro))
    : setDataProducts(res)));
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
  };
  const viewAllOrder = () => {
    GetOrders(localStorage.getItem('token')).then((NewDataOrders) => setAllDataOrder(NewDataOrders), console.log(AlldataOrder));
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
      dataOrder.map((objOrder) => ({ productId: objOrder._id, qty: objOrder.qty })))
      .then((res) => console.log(res));
  };

  const handleName = (e) => {
    setClient(e.target.value);
  };
  useEffect(() => {
    updateProducts();
  }, [filtro]);
  console.log(AlldataOrder);

  return (
    <div>
      <Header
        viewAllOrder={viewAllOrder}
      />
      <Menu
        handleClick={handleClick}
        viewAllOrder={viewAllOrder}
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
      {AlldataOrder.map((objOrder) => (
        <OrderKitchen
          client={objOrder.client}
          _id={objOrder._id}
          qty={objOrder.products[0].qty}
          dateEntry={objOrder.dateEntry}
          status={objOrder.status}
         // name={objOrder.products[0].product.name}
        />
      ))}
    </div>
  );
};

export default Home;
