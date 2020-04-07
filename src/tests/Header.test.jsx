import React from 'react';
import {render} from '@testing-library/react';
import Header from '../components/Header/Header';

describe('Header', () => {
  it('Debería de llamar a los componentes', () => {
    const container = render(<Header />);
  });
});
