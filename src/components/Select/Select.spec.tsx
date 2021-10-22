import React from 'react';

import { render } from '@testing-library/react';
import { Select } from './Select';

describe('<Select />', () => {
  it('should render select', () => {
    const mockFn = jest.fn();
    const mockOptions = [
      {
        label: 'Option 1',
        value: 'option-1'
      },
      {
        label: 'Option 2',
        value: 'option-2'
      }
    ];

    const { container } = render(
      <Select
        data-testid="select-id"
        onChange={mockFn}
        options={mockOptions}
        selectedValue="option-1"
      />
    );

    expect(
      container.querySelector('div[value="option-1"]')
    ).toBeInTheDocument();
  });
});
