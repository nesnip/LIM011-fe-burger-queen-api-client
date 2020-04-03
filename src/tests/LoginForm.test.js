import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from '../components/LoginForm/LoginForm';

it('Debería mostrar el componente home al dar click al boton', () => {
    const { getByText, getByPlaceholderText } = render(
        <LoginForm handleEmail={() => {console.log()}}/>
    );
});
