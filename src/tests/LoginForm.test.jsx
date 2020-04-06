import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import LoginForm from '../components/LoginForm/LoginForm';

describe('LoginForm', () => {
  it('Debería llamar a la función handleSubmit al dar click al boton', () => {
    const handleSubmit = jest.fn();
    const container = render(<LoginForm handleSubmit={handleSubmit} />);
    const button = container.getByText('Iniciar sesión');
    const inputEmail = container.getByPlaceholderText('Ingrese E-mail');
    const inputPassword = container.getByPlaceholderText('Ingrese Contraseña');

    expect(inputEmail.value).toBe('');
    expect(inputPassword.value).toBe('');

    act(() => {
      fireEvent.submit(button);
    });

    expect(handleSubmit).toHaveBeenCalled();
  });
});
