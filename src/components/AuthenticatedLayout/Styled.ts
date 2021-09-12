import styled from 'styled-components';

import InternalPagesBackgroundDesktop from 'assets/internal-bg-desktop.png';
import InternalPagesBackgroundMobile from 'assets/internal-bg-mobile.png';
import { BREAKPOINT_SM } from 'utils/constants';

export const Main = styled.main<{ backgroundImage: string }>`
  background-image: url(${InternalPagesBackgroundMobile}),
    linear-gradient(180deg, #fdf4ee 0%, #ffffff 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-height: 100%;
  min-height: 100vh;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2.625rem;

  @media (min-width: ${BREAKPOINT_SM}) {
    background-image: url(${InternalPagesBackgroundDesktop}),
      linear-gradient(
        252.45deg,
        rgba(245, 220, 230, 0.2) 0%,
        rgba(255, 255, 255, 0.2) 50.03%
      ),
      linear-gradient(107.58deg, #f5dce6 0%, rgba(255, 255, 255, 0) 49.97%),
      linear-gradient(180.13deg, #fdf4ee 0.12%, #ffffff 50%);
    padding-bottom: 5rem;
    padding-left: 7rem;
    padding-right: 7rem;
  }
`;
