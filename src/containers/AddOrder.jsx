const postOrder = (userId, client, products) => fetch('http://localhost:3002/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: {
    userId,
    client,
    products,
  },
}).then((res) => {
  if (res.status === 200) {
    return res.json();
  } if (res.status === 400) {
    return Promise.reject(console.log('ingrese producto'));
  }
  return Promise.reject(console.log('no existe autentificación'));
});
export default postOrder;
