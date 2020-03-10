import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginApp = () => {
  const history = useHistory();
  async function fetchData() {
    const res = await fetch('http://localhost:3001/auth', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({ email: '', password: '' }), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res
      .json()
      .then((res) => {
        history.push('/home');
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (evt) => {
    console.log(`Hola: ${email}`);
    console.log(`Contraseña: ${password}`);
    evt.preventDefault();
    fetchData();
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
