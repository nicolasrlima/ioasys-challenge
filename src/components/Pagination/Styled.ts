import styled from 'styled-components';

import { BREAKPOINT_SM } from 'utils/constants';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: ${BREAKPOINT_SM}) {
    grid-column: -2;
    justify-content: flex-end;
  }
`;

export const PagesNavigation = styled.nav`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

const PaginationButton = styled.button<{ disabled: boolean }>`
  background-color: transparent;
  border: 1px solid var(--dark-opaque);
  border-radius: 50%;
  cursor: pointer;
  height: 2rem;
  width: 2rem;

  ${({ disabled }) =>
    disabled &&
    `
      cursor: not-allowed;

      & svg path {
        stroke: var(--dark-opaque);
      }
    `}
`;

export const PaginationButtonPrevious = styled(PaginationButton)`
  transform: rotate3d(0, 0, 1, 180deg);

  @media (min-width: ${BREAKPOINT_SM}) {
    order: 1;
  }
`;

export const PaginationButtonNext = styled(PaginationButton)`
  @media (min-width: ${BREAKPOINT_SM}) {
    order: 2;
  }
`;
