import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cities from './Cities';

describe('<Cities />', () => {
  test('it should mount', () => {
    render(<Cities />);
    
    const cities = screen.getByTestId('Cities');

    expect(cities).toBeInTheDocument();
  });
});