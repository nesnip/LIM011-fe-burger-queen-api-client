import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';
import logo from '../../assets/images/logo.png';

const LoginForm = ({
  email, password, handleSubmit, handleEmail, handlePassword,
}) => (
  <div className="container-form">
    <form className="login" onSubmit={handleSubmit}>
      <img src={logo} alt="logo" className="logo" />
      <h2> Burger Queen</h2>
      <input type="email" value={email} className="txt-form" id="email-login" placeholder="Ingrese E-mail" onChange={handleEmail} />
      <input type="password" value={password} className="txt-form" id="password-login" placeholder="Ingrese Contraseña" onChange={handlePassword} />
      <button className="btn-form" id="btn-login" type="submit" onClick={handleSubmit}>
        Iniciar sesión
      </button>
    </form>
  </div>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleEmail: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
};

export default LoginForm;
