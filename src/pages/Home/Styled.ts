import styled from 'styled-components';

import { BREAKPOINT_SM } from 'utils/constants';

export const BookListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-top: 2.5rem;

  @media (min-width: ${BREAKPOINT_SM}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  }
`;
