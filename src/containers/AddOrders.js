const Addorders = (token, userId, client, products) => fetch('http://localhost:3003/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: { userId, client, products },
}).then((res) => {
  if (res.status === 200) {
    return res.json();
  } if (res.status === 400) {
    return Promise.reject(console.log('Ingrese productos'));
  }
  return Promise.reject(console.log('No existe autentificación'));
});

export default Addorders;
