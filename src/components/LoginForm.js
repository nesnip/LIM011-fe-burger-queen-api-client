import React from 'react';
const LoginForm = (props) => {
    return(
        <form className="login">
            <h2> Burger Queen</h2>
            <input type="email" class="txt-form" id="email-login" placeholder="Ingrese E-mail"/>
          <input type="password" class="txt-form" id="password-login" placeholder = "Ingrese Contraseña"/>
        <button class="btn-form" id="btn-login" type="button"> Iniciar sesión </button>
        </form>
    );
}
export default LoginForm;