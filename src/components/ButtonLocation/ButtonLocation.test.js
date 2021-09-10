import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonLocation from './ButtonLocation';

describe('<ButtonLocation />', () => {
  test('it should mount', () => {
    render(<ButtonLocation />);
    
    const buttonLocation = screen.getByTestId('ButtonLocation');

    expect(buttonLocation).toBeInTheDocument();
  });
});