import React, { useState, useEffect } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../../firebase/config';
import './OrderKitchen.css';
import MenuKitchen from '../Menu/MenuKitchen';
import ItemOrderProducts from '../ItemOrderProducts/ItemOrderProducts';
import GetOrders from '../../controller/Orders/GetOrders';
import Header from '../Header/Header';
// import EditOrder from '../Orders/EditOrder';

const OrderKitchen = () => {
  const [AlldataOrder, setAllDataOrder] = useState([]);
  const [category, setCategory] = useState('');
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('orders').orderBy('Id'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  /* const viewAllOrder = () => {
    GetOrders(localStorage.getItem('token')).then((NewDataOrders) => (category !== '' ? setAllDataOrder(NewDataOrders.filter((obj) => obj.status === category))
      : setAllDataOrder(NewDataOrders)));
  }; */
  const viewAllOrder = () => {
    if (error) {
      console.log(error);
    } if (loading) {
      console.log(loading);
    } else {
      const result = category === '' ? setAllDataOrder(value.docs)
        : setAllDataOrder(value.docs.filter((obj) => obj.data().status === category));
      return result;
      // setDataProducts(value.docs);
    }
  };
  useEffect(() => {
    viewAllOrder();
  }, [category, value]);

  const chooseCategory = (type) => {
    if (type === 'all') {
      setCategory('');
    } else {
      setCategory(type);
    }
  };

  // console.log(AlldataOrder);
  // AlldataOrder.forEach((obj) => console.log(obj.data().dateEntry));

  return (
    <>
      <Header />
      <MenuKitchen
        chooseCategory={chooseCategory}
      />
      <section className="kitchen-view">
        {AlldataOrder.length > 0
          ? AlldataOrder.map((objOrder) => (
            <div className="container-order-kitchen" key={objOrder.data().Id}>
              <div className="order-body-kitchen">

                <ItemOrderProducts
                  _id={objOrder.data().Id}
                  userId={objOrder.data().userId}
                  AllDataOrder={AlldataOrder}
                  ArrayProduct={objOrder.data().products}
                  objOrder={objOrder.data()}
                  client={objOrder.data().client}
                  dateEntry={objOrder.data().dateEntry}
                  status={objOrder.data().status}
                  dateProcessed={objOrder.data().dateProcessed}
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
