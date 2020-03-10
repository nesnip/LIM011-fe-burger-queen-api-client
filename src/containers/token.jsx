const token = (email, password) => fetch('http://localhost:3002/auth', {
  method: 'POST', // or 'PUT'
  body: { email, password },
  headers: { 'Content-Type': 'application/json' },
}).then((res) => {
  if (res.status === 200) {
    return res.json();
  } if (res.status === 400) {
    return Promise.reject(console.log('ingrese email y contraseña'));
  }
  return console.log('a');
});

export default token;
