import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';
import burger from '../../assets/images/burger.png';

const LoginForm = ({
  email, password, handleSubmit, handleEmail, handlePassword,
}) => (
  <div className="container-form">
    <form className="login" onSubmit={handleSubmit}>
      <img src={burger} alt="logo" className="logo" />
      <p className="title">
        <span className="title initials">B</span>
        urger
        {' '}
        <span className="title initials">Q</span>
        ueen
      </p>
      <input
        type="email"
        value={email}
        className="txt-form"
        id="email-login"
        placeholder="Ingrese E-mail"
        onChange={handleEmail}
      />
      <input
        type="password"
        value={password}
        className="txt-form"
        id="password-login"
        placeholder="Ingrese Contraseña"
        onChange={handlePassword}
      />
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
