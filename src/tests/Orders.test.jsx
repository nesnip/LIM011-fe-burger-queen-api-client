import React from 'react';
import {
  render, getNodeText, act, fireEvent,
} from '@testing-library/react';
import Orders from '../components/Orders/Orders';

describe('Orders', () => {
  it('Debería mostrar los elementos de la orden y enviarlas', () => {
    const dataOrder = [
      {
        _id: '5e82b61b5e2f19002b8ab9c5',
        name: 'Café americano',
        price: 5,
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-americano.jpg?$Product_Desktop$',
        type: 'desayuno',
        dateEntry: '2020-03-31T03:16:43.210Z',
        qty: 2,
      },
      {
        _id: '5e841b6a5e2f19002b8ab9c6',
        name: 'Café con leche',
        price: 7,
        image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-cappuccino.jpg?$Product_Desktop$',
        type: 'desayuno',
        dateEntry: '2020-04-01T04:41:14.928Z',
        qty: 3,
      },
    ];

    const handleName = jest.fn();
    const sendOrder = jest.fn();
    const deleteProduct = jest.fn();
    const container = render(<Orders
      dataOrder={dataOrder}
      sendOrder={sendOrder}
      handleName={handleName}
      deleteProduct={deleteProduct}
    />);
    const itemsListName = container.queryAllByTestId('item-name');
    const itemsListQty = container.getAllByTestId('item-qty');
    const inputName = container.getByPlaceholderText('Ingrese nombre del cliente');
    const sendButton = container.getByText('Enviar a Cocina');

    // Verificar que hayan 2 productos en las órdenes
    expect(itemsListName.length).toBe(2);
    expect(getNodeText(itemsListName[0])).toBe('Café americano');
    expect(getNodeText(itemsListQty[1])).toBe('3');

    // Cambiar valor del input
    act(() => {
      fireEvent.change(inputName, { target: { value: 'Ana' } });
    });

    expect(inputName.value).toBe('Ana');

    // Enviar la orden
    act(() => {
      fireEvent.click(sendButton);
    });
    expect(sendOrder).toHaveBeenCalled();
  });
});
