import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoginForm from '../components/LoginForm/LoginForm';
import token from '../controller/token';
import firebase from '../firebase/config';
import { logIn } from '../firebase/auth';
// import postOrder from './AddOrder';

const LoginApp = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(firebase.auth());

  const handleSubmit = (e) => {
    e.preventDefault();
    /* token(email, password).then((res) => {
      if (res.token === undefined) {
        console.log('Email y contraseña incorrecto');
      } else {
        localStorage.setItem('token', res.token);
        console.log(`este es el token: ${localStorage.getItem('token')}`);
        history.push('/Home');
      }
    }); */

    logIn(email, password)
      .then((res) => {
        console.log(res);
        history.push('/Home');
      })
      .catch((err) => {
        const errorMessage = err.message;
        alert(errorMessage);
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
