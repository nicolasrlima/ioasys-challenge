import styled from 'styled-components';

import { BREAKPOINT_SM } from 'utils/constants';

export const Main = styled.main<{ backgroundImage: string }>`
  align-items: center;
  background-image: url(${({ backgroundImage }) => backgroundImage}),
    linear-gradient(118deg, rgba(161, 51, 78, 1) 0%, rgba(178, 62, 153, 1) 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  max-height: 100%;
  min-height: 100vh;
  min-width: 100vw;
  padding: 0 1rem;

  @media (min-width: ${BREAKPOINT_SM}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0 7.25rem;
  }
`;
