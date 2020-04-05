const EditOrder = (token, userId, client, products, status, id) => fetch('http://138.68.51.45/orders/`${id}`', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    userId, client, products, status, id,
  }),
}).then((res) => {
  if (res.status === 200) {
    return res.json();
  } if (res.status === 400) {
    return Promise.reject(console.log('No se indica propiedad a modificar'));
  } if (res.status === 401) {
    return Promise.reject(console.log('No existe autentificación'));
  }
  return Promise.reject(console.log('No existe ID de orden'));
});


export default EditOrder;
