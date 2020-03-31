const token = (email, password) => fetch('http://138.68.51.45/auth', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify({ email, password }),
  headers: { 'Content-Type': 'application/json' },
}).then((res) => {
  if (res.status === 200) {
    console.log(res);
    return res.json();
  } if (res.status === 400) {
    console.log(res);
    return Promise.reject(console.log('ingrese email y contraseña'));
  }
  return '';
});

export default token;
