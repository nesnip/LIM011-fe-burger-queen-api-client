import React from 'react';
import './OrderKitchen.css';
import ItemOrderProducts from '../ItemOrderProducts/ItemOrderProducts';

const OrderKitchen = ({
  AllDataOrder, ArrayProduct, objOrder,
}) => {
  console.log(ArrayProduct);

  return (
    <div className="container-order-kitchen">
      <div className="order-body">
        <h4> ORDEN N°</h4>

        <ItemOrderProducts
          client={objOrder.client}
          ArrayProduct={ArrayProduct}
          dateEntry={objOrder.dateEntry}
          status={objOrder.status}
        />

      </div>
    </div>
  );
};
export default OrderKitchen;
