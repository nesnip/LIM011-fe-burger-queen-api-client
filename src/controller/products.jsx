const getProducts = (token) => fetch('http://138.68.51.45/products?limit=13', {
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
  if (res.status === 401) {
    return Promise.reject(console.log('no existe autentificación'));
  }
  return (console.log(res.statusText));
});
export default getProducts;
