import React from 'react';
import './LoginForm.css';

const LoginForm = (props) => {
  const {
    email, password, handleSubmit, getValue, getPassword,
  } = props;

  return (
    <div className="container-form">
      <form className="login" onSubmit={handleSubmit}>
        <h2> Burger Queen</h2>
        <input type="email" value={email} className="txt-form" id="email-login" placeholder="Ingrese E-mail" onChange={getValue} />
        <input type="password" value={password} className="txt-form" id="password-login" placeholder="Ingrese Contraseña" onChange={getPassword} />
        <button className="btn-form" id="btn-login" type="submit" onClick={handleSubmit}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
