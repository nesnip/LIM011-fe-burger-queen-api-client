import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';

const LoginForm = ({
  email, password, handleSubmit, getValue, getPassword,
}) => (
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

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired,
  getPassword: PropTypes.func.isRequired,
};

export default LoginForm;
