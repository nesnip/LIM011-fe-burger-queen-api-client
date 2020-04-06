import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import Menu from '../components/Menu/Menu';

describe('Menu', () => {
  it('Debería mostrar 2 elementos en una lista', () => {
    const dataProducts = [
      {
        _id: '5e82b61b5e2f19002b8ab9c5',
        name: 'Café americano',
        price: 5,
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-americano.jpg?$Product_Desktop$',
        type: 'desayuno',
        dateEntry: '2020-03-31T03:16:43.210Z',
      },
      {
        _id: '5e841b6a5e2f19002b8ab9c6',
        name: 'Café con leche',
        price: 7,
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-cappuccino.jpg?$Product_Desktop$',
        type: 'desayuno',
        dateEntry: '2020-04-01T04:41:14.928Z',
      },
    ];
    const container = render(<Menu dataProducts={dataProducts} />);
    const itemsList = container.getAllByTestId('itemProduct');

    expect(itemsList.length).toBe(2);
  });
});
