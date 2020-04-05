const EditOrder = (client, ArrayProduct, token, userId, status, _id) => fetch(`http://138.68.51.45/orders/${_id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    userId, client, ArrayProduct, status,
  }),
}).then((res) => {
  if (res.status === 200) {
    console.log('ok');
    return res.json();
  } if (res.status === 400) {
    return Promise.reject(console.log('No se indica propiedad a modificar'));
  } if (res.status === 401) {
    return Promise.reject(console.log('No existe autentificación'));
  }
  if (res.status === 404) {
    return Promise.reject(console.log('No existe ID de orden', userId, _id, client, ArrayProduct, status));
  }
  return '';
});


export default EditOrder;
