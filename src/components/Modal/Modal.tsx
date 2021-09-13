import React, { useEffect } from 'react';

import { ReactComponent as CloseIcon } from 'assets/close-icon.svg';

import { ModalCloseButton, ModalContainer, ModalPaper } from './Styled';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({
  children,
  isOpen,
  onClose
}: ModalProps): JSX.Element | null => {
  const onClickOutside = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer onClick={onClickOutside}>
      <ModalCloseButton onClick={onClose}>
        <CloseIcon />
      </ModalCloseButton>
      <ModalPaper>{children}</ModalPaper>
    </ModalContainer>
  );
};

export default Modal;
