import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import token from './token';
import postOrder from './AddOrder';

const LoginApp = (props) => {
  const { history } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Ingresa Email y Contraseña');
    } else {
      postOrder().then((res) => console.log(res));
      token().then((res) => console.log(res));
      history.replace('/HomeApp');
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <LoginForm
      email={email}
      password={password}
      handleSubmit={handleSubmit}
      handleEmail={handleEmail}
      handlePassword={handlePassword}
    />
  );
};

export default LoginApp;
