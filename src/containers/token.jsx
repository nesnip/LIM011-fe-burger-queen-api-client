const token = (email, password) => fetch('http://138.68.51.45/auth', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify({ email, password }),
  headers: { 'Content-Type': 'application/json' },
}).then((res) => {
  if (res.status === 200) {
    console.log(res);
    return res.json();
  } if (res.status === 400) {
    console.log(res);
    return Promise.reject(console.log('ingrese email y contraseña'));
  }
  return '';
});

export default token;

/* const addOrder = (idProduct, count) => {
    const index = dataOrder.findIndex((obj) => obj.id === idProduct);
    const tempDataOrder = dataOrder;
    if (index >= 0) {
      tempDataOrder[index].count += count;
      setDataOrder(tempDataOrder);
    } else {
      const temp = dataProducts.find((obj) => obj.id === idProduct);
      temp.count = count;
      tempDataOrder.push(temp);
      setDataOrder(tempDataOrder);
    }
    console.log(dataOrder);
  };
 */
/* const deleteProduct = (idProduct) => {
    const i = dataOrder.findIndex((obj) => obj.id === idProduct);
    const tempDataOrder = dataOrder;
    if (i >= 0) {
      tempDataOrder.splice(i, 1);
    }
    setDataOrder(tempDataOrder);
    console.log(dataOrder);
    console.log(tempDataOrder);
  }; */