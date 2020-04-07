import React, { useState, useEffect } from 'react';
import './OrderKitchen.css';
import ItemOrderProducts from '../ItemOrderProducts/ItemOrderProducts';
import GetOrders from '../../controller/Orders/GetOrders';
import Header from '../Header/Header';
import Addorders from '../../controller/Orders/AddOrders';
// import EditOrder from '../Orders/EditOrder';

const OrderKitchen = () => {
  const [AlldataOrder, setAllDataOrder] = useState([]);
  // const [status, setStatus] = useState('');
  const viewAllOrder = () => {
    GetOrders(localStorage.getItem('token')).then((NewDataOrders) => setAllDataOrder(NewDataOrders));
  };
  useEffect(() => {
    viewAllOrder();
  }, []);

  return (
    <>
      <Header />
      <section className="kitchen-view">
        {Addorders.length > 0
          ? AlldataOrder.map((objOrder) => (
            <div className="container-order-kitchen" key={objOrder._id}>
              <div className="order-body-kitchen">

                <ItemOrderProducts
                  _id={objOrder._id}
                  userId={objOrder.userId}
                  AllDataOrder={AlldataOrder}
                  ArrayProduct={objOrder.products}
                  objOrder={objOrder}
                  client={objOrder.client}
                  dateEntry={objOrder.dateEntry}
                  status={objOrder.status}
                  dateProcessed={objOrder.dateProcessed}
                  GetOrders={GetOrders}
                />

              </div>
            </div>
          ))
          : (
            <p> No hay Órdenes </p>
          ) }
      </section>
    </>
  );
};
export default OrderKitchen;
