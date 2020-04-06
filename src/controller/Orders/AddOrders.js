const Addorders = (token, userId, client, products) => fetch('http://138.68.51.45/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({ userId, client, products }),
}).then((res) => {
  if (res.status === 200) {
    return res.json();
  } if (res.status === 400) {
    return Promise.reject(console.log('Ingrese productos'));
  }
  return Promise.reject(console.log('No existe autentificación'));
});

export default Addorders;
