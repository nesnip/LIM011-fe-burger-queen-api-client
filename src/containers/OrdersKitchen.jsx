import React, { useState } from 'react';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Orders from '../components/Orders/Orders';
import OrderKitchen from '../components/OrderKitchen/OrderKitchen';

const OrderKitchenv = () => {
  const [clientName, setclientName] = useState('');
  const sendOrder = (e) => {
    e.preventDefault();
    if (!clientName) {
      alert('Ingresa nombre del cliente');
    } else {
      console.log(clientName);
    }
  };
  return (
    <div>
      <Header> </Header>
      <OrderKitchen
        clientName={clientName}
      />
    </div>
  );
};

export default OrderKitchenv;
