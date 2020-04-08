import React from 'react';
import {
  render, fireEvent, act,
} from '@testing-library/react';
import ItemOrder from '../components/ItemOrder/ItemOrder';

describe('ItemOrder', () => {
  it('Debería de mostrar cada producto', () => {
    const deleteProduct = jest.fn();
    const objProduct = {
      _id: '5e841b6a5e2f19002b8ab9c6',
      name: 'Café con leche',
      price: 7,
      image: 'https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-cappuccino.jpg?$Product_Desktop$',
      type: 'desayuno',
      dateEntry: '2020-04-01T04:41:14.928Z',
      qty: 3,
    };
    const container = render(<ItemOrder
      name={objProduct.name}
      qty={objProduct.qty}
      price={objProduct.price}
      _id={objProduct._id}
      deleteProduct={deleteProduct}
    />);
    const deleteButton = container.getByAltText('Eliminar');
    act(() => {
      fireEvent.click(deleteButton);
    });
    expect(deleteProduct).toHaveBeenCalled();
  });
});
