import React, { useState } from 'react';
import OrderKitchen from '../components/OrderKitchen/OrderKitchen';

const TakeOrder = () => {
  const [clientName, setclientName] = useState('');

  const sendName = (e) => {
    setclientName(e.target.value);
  };
  return (
    <OrderKitchen
      name={clientName}
      sendName={sendName}
    />
  );
};

export default TakeOrder;
