import styled from 'styled-components';

import Paper from 'components/Paper/Paper';
import { BREAKPOINT_SM } from 'utils/constants';

export const ModalContainer = styled.div`
  align-items: center;
  background: #00000066;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const ModalPaper = styled(Paper)`
  max-height: 80%;
  max-width: 90%;
  overflow: auto;
  padding: 2rem 1.5rem;
  position: fixed;
  @media (min-width: ${BREAKPOINT_SM}) {
    max-width: 60%;
  }
`;

export const ModalCloseButton = styled.button`
  background-color: var(--white);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
`;
