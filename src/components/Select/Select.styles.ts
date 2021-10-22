import styled from 'styled-components';

import { ReactComponent as ChevronDark } from 'assets/chevron-dark.svg';
import Typography from 'components/Typography/Typography';

export const SelectContainer = styled.div`
  cursor: pointer;
`;

export const SelectItemsUl = styled.ul`
  background-color: var(--white);
  border-radius: 0.25rem;
  border: 1px solid #00000010;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 1;
`;

export const SelectItem = styled.li`
  padding: 0.25rem 0.5rem;
  &:hover {
    background-color: #00000010;
  }
`;

export const SelectedItem = styled(Typography)`
  align-items: center;
  display: flex;
`;

export const SelectArrow = styled<{ open: boolean }>(ChevronDark)`
  margin-left: 0.5rem;
  transform: rotate3d(0, 0, 1, 90deg);
  ${({ open }) => open && 'transform: rotate3d(0, 0, 1, 270deg);'}
`;
