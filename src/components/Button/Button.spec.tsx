import React from 'react';

import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
  it('should render button', () => {
    const { getByRole } = render(<Button>Click me!</Button>);
    expect(getByRole('button', { name: /Click me!/i })).toBeInTheDocument();
  });

  it('should render disabled button', () => {
    const { getByRole } = render(<Button disabled>Click me!</Button>);
    expect(getByRole('button', { name: /Click me!/i })).toBeDisabled();
  });

  it('should render button and click it', () => {
    const mockFn = jest.fn();
    const { getByRole } = render(<Button onClick={mockFn}>Click me!</Button>);
    getByRole('button', { name: /Click me!/i }).click();
    expect(mockFn).toHaveBeenCalled();
  });
});
