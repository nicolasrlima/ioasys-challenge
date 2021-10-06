import React from 'react';

import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('<Modal />', () => {
  it('should render Modal and close it', () => {
    const mockFn = jest.fn();
    render(
      <Modal isOpen onClose={mockFn}>
        Modal content
      </Modal>
    );

    const wrapper = screen.getByLabelText(/wrapper/i);
    expect(wrapper).toBeInTheDocument();

    const closeButton = screen.getByLabelText(/close-modal-button/i);
    closeButton.click();
    expect(mockFn).toHaveBeenCalled();
  });

  it('should render Modal, and click outside to close it', () => {
    const mockFn = jest.fn();
    render(
      <Modal isOpen onClose={mockFn}>
        Modal content
      </Modal>
    );

    const wrapper = screen.getByLabelText(/wrapper/i);

    wrapper.click();
    expect(mockFn).toHaveBeenCalled();
  });

  it('should not render Modal', () => {
    const mockFn = jest.fn();
    render(
      <Modal isOpen={false} onClose={mockFn}>
        Modal content
      </Modal>
    );

    const wrapper = screen.queryByLabelText(/wrapper/i);
    expect(wrapper).not.toBeInTheDocument();
  });
});
