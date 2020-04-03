import React, { useState } from 'react';
import Header from '../components/Header/Header';
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
      <Header />
      <OrderKitchen
        clientName={clientName}
      />
    </div>
  );
};

export default OrderKitchenv;
