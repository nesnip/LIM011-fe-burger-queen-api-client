import React from 'react';
import { render, getNodeText, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
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
    const handleClick = jest.fn();
    const addProduct = jest.fn();
    const container = render(<Menu
      dataProducts={dataProducts}
      handleClick={handleClick}
      addProduct={addProduct}
    />);
    const itemsList = container.getAllByTestId('itemProduct');
    const brkfstBtn = container.getByText('Desayuno');
    const lunchBtn = container.getByText('Almuerzo');
    const complBtn = container.getByText('Complementos');
    const drinksBtn = container.getByText('Bebidas');

    expect(itemsList.length).toBe(2);
    expect(getNodeText(itemsList[1])).toBe('Café con leche');

    act(() => {
      fireEvent.click(brkfstBtn);
    });
    expect(handleClick).toHaveBeenCalled();

    act(() => {
      fireEvent.click(lunchBtn);
    });
    expect(handleClick).toHaveBeenCalled();

    act(() => {
      fireEvent.click(complBtn);
    });
    expect(handleClick).toHaveBeenCalled();

    act(() => {
      fireEvent.click(drinksBtn);
    });
    expect(handleClick).toHaveBeenCalled();
  });
});
