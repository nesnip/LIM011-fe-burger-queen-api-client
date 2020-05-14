const GetOrders = (token) => fetch('http://138.68.51.45/orders', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
}).then((res) => {
  if (res.status === 200) {
    return res.json();
  }
  return Promise.reject(console.log('No existe autentificación'));
});

export default GetOrders;
