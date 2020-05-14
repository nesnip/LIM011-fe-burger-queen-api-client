import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
import ItemProduct from '../components/ItemProduct/ItemProduct';

describe('ItemProduct', () => {
  it('Debería llamar a la función addProduct y limpiar input al dar click a Agregar', () => {
    const addProduct = jest.fn();
    const objProduct = {
      _id: '5e841b6a5e2f19002b8ab9c6',
      name: 'Café con leche',
      price: 7,
      image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-cappuccino.jpg?$Product_Desktop$',
      type: 'desayuno',
      dateEntry: '2020-04-01T04:41:14.928Z',
    };
    const container = render(<ItemProduct
      id={objProduct._id}
      image={objProduct.image}
      name={objProduct.name}
      price={objProduct.price}
      addProduct={addProduct}
    />);
    const btnPlus = container.getByText('+');
    const btnLess = container.getByText('-');
    const input = container.getByTestId('item-count');
    const addProductBtn = container.getByText('Agregar');

    expect(input.value).toBe('0');
    expect(addProductBtn).toBeDisabled();

    // Verifica que el valor del input no sea menor a 0
    act(() => {
      fireEvent.click(btnLess);
    });

    expect(input.value).toBe('0');

    // Verifica que se pueda agregar y disminuir el valor del input
    act(() => {
      fireEvent.click(btnPlus);
    });

    act(() => {
      fireEvent.click(btnPlus);
    });

    act(() => {
      fireEvent.click(btnLess);
    });

    expect(input.value).toBe('1');
    expect(addProductBtn).toBeEnabled();

    // Verifica que la función sea llamada y el valor del input sea 0
    act(() => {
      fireEvent.click(addProductBtn);
    });

    expect(addProduct).toHaveBeenCalled();
    expect(input.value).toBe('0');
  });
});
