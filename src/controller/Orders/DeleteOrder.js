const DeleteOrder = (token, _id) => fetch(`http://138.68.51.45/orders/${_id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
}).then((res) => {
  if (res.status === 200) {
    console.log(_id);
    return res.json();
  } if (res.status === 401) {
    return Promise.reject(console.log('No existe autentificación'));
  } if (res.status === 404) {
    return Promise.reject(console.log('No existe ID'));
  }

  return console.log(res.statusText);
});


export default DeleteOrder;
