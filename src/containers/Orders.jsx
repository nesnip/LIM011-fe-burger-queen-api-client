// import React, { useState, useEffect } from 'react';
// import GetOrders from '../components/Orders/GetOrders';
// import Header from '../components/Header/Header';
// import OrderKitchen from '../components/OrderKitchen/OrderKitchen';

// const Orders = () => {
//   const [AlldataOrder, setAllDataOrder] = useState([]);
//   const viewAllOrder = () => {
//     GetOrders(localStorage.getItem('token')).then((NewDataOrders) => setAllDataOrder(NewDataOrders), console.log(AlldataOrder));
//   };
//   useEffect(() => {
//     viewAllOrder();
//   }, []);
//   return (
//     <>
//       <Header />

//       <div className="container-order-kitchen">
//         <div className="order-body">
//           <h4> ORDEN N°</h4>
//           {AlldataOrder.map((objOrder) => (
//             <OrderKitchen
//               AllDataOrder={AlldataOrder}
//               ArrayProduct={objOrder.products}
//               objOrder={objOrder}
//               client={objOrder.client}
//               dateEntry={objOrder.dateEntry}
//               status={objOrder.status}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
// export default Orders;
