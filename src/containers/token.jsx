const token = (email, password) => fetch('http://localhost:3002/auth', {
  method: 'POST', // or 'PUT'
  body: { email, password },
  headers: { 'Content-Type': 'application/json' },
}).then((res) => {
  if (res.status === 200) {
    console.log(res);
    return res.json();
  } if (res.status === 400) {
    console.log(res);
    return Promise.reject(console.log('ingrese email y contraseña'));
  }
});

export default token;
