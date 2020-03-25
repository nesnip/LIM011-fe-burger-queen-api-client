import React, { useState } from 'react';
import Menu from '../components/Menu/Menu';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import getProducts from './products';
import Orders from '../components/Orders/Orders';

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [filtro, setFiltro] = useState('');
  // const [quantity, setQuantity] = useState(1);
  const updateProducts = () => getProducts().then((res) => (filtro !== ''
    ? setDataProducts(res.filter((element) => element.type === filtro))
    : setDataProducts(res)));

  const handleClick = (tipo) => {
    setFiltro(tipo);
    updateProducts();
  };
  /* const handleAddQuantity = (id, quant, o) => {
    quant += 1;
    console.log(quant);
    console.log(o);
    console.log(id);
  }; */

  updateProducts();
  return (
    <div>
      <Menu
        handleClick={handleClick}
      />
      <Orders />
      <div className="container-card">
        {dataProducts.map((objProducts) => (
          <ItemProduct
            obj={objProducts}
            name={objProducts.name}
            price={objProducts.price}
            image={objProducts.image}
            type={objProducts.type}
            id={objProducts.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
