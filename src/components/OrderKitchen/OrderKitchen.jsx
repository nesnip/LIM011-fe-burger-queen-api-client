import React, { useState, useEffect } from 'react';
import './OrderKitchen.css';
import MenuKitchen from '../Menu/MenuKitchen';
import ItemOrderProducts from '../ItemOrderProducts/ItemOrderProducts';
import GetOrders from '../../controller/Orders/GetOrders';
import Header from '../Header/Header';
// import EditOrder from '../Orders/EditOrder';

const OrderKitchen = () => {
  const [AlldataOrder, setAllDataOrder] = useState([]);
  const [category, setCategory] = useState('');
  // const [status, setStatus] = useState('');
  const viewAllOrder = () => {
    GetOrders(localStorage.getItem('token')).then((NewDataOrders) => (category !== '' ? setAllDataOrder(NewDataOrders.filter((obj) => obj.status === category))
      : setAllDataOrder(NewDataOrders)));
  };
  useEffect(() => {
    viewAllOrder();
  }, [category]);

  const chooseCategory = (type) => {
    setCategory(type);
  };

  return (
    <>
      <Header />
      <MenuKitchen
        chooseCategory={chooseCategory}
      />
      <section className="kitchen-view">
        {AlldataOrder.length > 0
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
                  viewAllOrder={viewAllOrder}
                />

              </div>
            </div>
          ))
          : <h5> No hay Órdenes </h5>}
      </section>
    </>
  );
};
export default OrderKitchen;
