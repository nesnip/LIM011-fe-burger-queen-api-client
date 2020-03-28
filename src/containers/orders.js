const orders = (userId, client, products) => fetch('http://localhost:3003/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: { userId, client, products },
}).then((res) => {
  console.log(res);
});

export default orders;
