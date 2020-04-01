const getProducts = (token) => fetch('http://localhost:3003/products?limit=13', {
  // http://localhost:3003/products
// http://138.68.51.45/products
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
}).then((res) => {
  if (res.status === 200) {
    return res.json();
  }
  return Promise.reject(console.log('no existe autentificación'));
});
export default getProducts;
