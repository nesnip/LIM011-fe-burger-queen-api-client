import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginApp = () => {
  async function fetchData() {
    const res = await fetch('http://localhost:3002/auth', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({ email: '', password: '' }), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res
      .json()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (evt, props) => {
    const { history, location, match } = props;
    console.log(`Hola: ${email}`);
    console.log(`Contraseña: ${password}`);
    evt.preventDefault();
    fetchData();
    history.push('/MenuApp');
  };
  const getValue = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
    e.preventDefault();
  };

  return (
    <LoginForm
      email={email}
      password={password}
      handleSubmit={handleSubmit}
      getValue={getValue}
      getPassword={getPassword}
    />
  );
};

export default LoginApp;
