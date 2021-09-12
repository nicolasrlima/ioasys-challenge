import styled from 'styled-components';

import Typography from 'components/Typography/Typography';
import { BREAKPOINT_SM } from 'utils/constants';

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLogoContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

export const UserActionsContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

export const LogoutIconContainer = styled.div`
  cursor: pointer;
`;

export const UserName = styled(Typography)`
  display: none;

  @media (min-width: ${BREAKPOINT_SM}) {
    display: block;
  }
`;
