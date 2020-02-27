import React from 'react';
import './Login.css';

const LoginForm = (props) => (
  <div className="container-form">
    <form className="login">
      <h2> Burger Queen</h2>
      <input type="email" className="txt-form" id="email-login" placeholder="Ingrese E-mail" />
      <input type="password" className="txt-form" id="password-login" placeholder="Ingrese Contraseña" />
      <button className="btn-form" id="btn-login" type="button"> Iniciar sesión </button>
    </form>
  </div>
);
export default LoginForm;
