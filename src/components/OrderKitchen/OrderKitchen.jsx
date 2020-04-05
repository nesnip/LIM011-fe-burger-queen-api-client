import React, { useState, useEffect } from 'react';
import './OrderKitchen.css';
import ItemOrderProducts from '../ItemOrderProducts/ItemOrderProducts';
import GetOrders from '../Orders/GetOrders';
import Header from '../Header/Header';
// import EditOrder from '../Orders/EditOrder';

const OrderKitchen = () => {
  const [AlldataOrder, setAllDataOrder] = useState([]);
  const viewAllOrder = () => {
    GetOrders(localStorage.getItem('token')).then((NewDataOrders) => setAllDataOrder(NewDataOrders), console.log(AlldataOrder));
  };
  // const changeStatusOrder = () => {
  //   EditOrder(localStorage.getItem('token'),userId,id,client,status)
  //     .then((res) => console.log(res));
  // };
  useEffect(() => {
    viewAllOrder();
  }, []);
  return (
    <>
      <Header />


      {AlldataOrder.map((objOrder) => (
        <div className="container-order-kitchen">
          <div className="order-body">
            <h4> ORDEN N°</h4>
            <ItemOrderProducts
              AllDataOrder={AlldataOrder}
              ArrayProduct={objOrder.products}
              objOrder={objOrder}
              client={objOrder.client}
              dateEntry={objOrder.dateEntry}
              status={objOrder.status}
            />

          </div>
        </div>
      ))}
    </>
  );
};
export default OrderKitchen;
