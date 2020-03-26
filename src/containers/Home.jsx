import React, { useState } from 'react';
import Menu from '../components/Menu/Menu';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import getProducts from './products';
import Orders from '../components/Orders/Orders';

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);
  const [filtro, setFiltro] = useState('');
  // const [quantity, setQuantity] = useState(1);
  const updateProducts = () => getProducts().then((res) => (filtro !== ''
    ? setDataProducts(res.filter((element) => element.type === filtro))
    : setDataProducts(res)));

  const handleAddOrder = (idProduct) => {
    const producto = dataProducts.filter((element) => element.id === idProduct);
    setDataOrder(producto);
    console.log(dataOrder);
  };

  const handleClick = (tipo) => {
    setFiltro(tipo);
    updateProducts();
  };

  updateProducts();
  return (
    <div>
      <Menu
        handleClick={handleClick}
      />
      {dataOrder.map((objOrder) => (
        <Orders
          name={objOrder.name}
          price={objOrder.price}
          quantity={objOrder.quantity}
          id={objOrder.id}
        />
      ))}
      <div className="container-card">
        {dataProducts.map((objProducts) => (
          <ItemProduct
            obj={objProducts}
            name={objProducts.name}
            price={objProducts.price}
            image={objProducts.image}
            type={objProducts.type}
            id={objProducts.id}
            addOrder={handleAddOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
