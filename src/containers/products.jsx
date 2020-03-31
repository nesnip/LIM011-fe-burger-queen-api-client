const getProducts = (token) => fetch('http://138.68.51.45/products', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  /*  body: {
    userId,
    client,
    product,
  }, */
}).then((res) => {
  if (res.status === 200) {
    return res.json();
  } if (res.status === 400) {
    return Promise.reject(console.log('ingrese producto'));
  }
  return Promise.reject(console.log('no existe autentificación'));
});
export default getProducts;
