import styled from 'styled-components';

import Typography from 'components/Typography/Typography';
import { BREAKPOINT_SM } from 'utils/constants';

export const DetailsContainer = styled.div`
  @media (min-width: ${BREAKPOINT_SM}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BookCover = styled.img`
  height: 22rem;
  margin-bottom: 1.5rem;
  width: 15rem;

  @media (min-width: ${BREAKPOINT_SM}) {
    height: 32rem;
    margin-bottom: 0;
    width: 21.75rem;
  }
`;

export const AboutBookContainer = styled.div`
  @media (min-width: ${BREAKPOINT_SM}) {
    margin-left: 3rem;
  }
`;

export const TitleAndAuthorContainer = styled.div`
  margin-bottom: 2rem;
`;

export const InfosContainer = styled.div`
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`;

export const SingleInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled(Typography)`
  margin-top: 1rem;
`;
