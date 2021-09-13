import React from 'react';

import Skeleton from 'components/Skeleton/Skeleton';
import { BookInfoContainer, CardContainer } from 'components/Card/Styled';

import { DetailsLoaderContainer } from './Styled';

interface HomeLoaderProps {
  cardsCount: number;
}

const HomeLoader = ({ cardsCount }: HomeLoaderProps): JSX.Element => (
  <>
    {Array(cardsCount)
      .fill(0)
      .map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardContainer key={index}>
          <Skeleton height="7.75rem" width="5rem" />
          <BookInfoContainer>
            <DetailsLoaderContainer>
              <Skeleton width="7.75rem" />
              <Skeleton width="6rem" />
            </DetailsLoaderContainer>

            <DetailsLoaderContainer>
              <Skeleton width="5rem" />
              <Skeleton width="5.5rem" />
              <Skeleton width="7rem" />
            </DetailsLoaderContainer>
          </BookInfoContainer>
        </CardContainer>
      ))}
  </>
);

export default HomeLoader;
