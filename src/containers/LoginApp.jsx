import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import token from '../controller/token';
// import postOrder from './AddOrder';

const LoginApp = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    token(email, password).then((res) => {
      if (res.token === undefined) {
        console.log('Email y contraseña incorrecto');
      } else {
        localStorage.setItem('token', res.token);
        console.log(`este es el token: ${localStorage.getItem('token')}`);
        history.push('/Home');
      }
    });
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
