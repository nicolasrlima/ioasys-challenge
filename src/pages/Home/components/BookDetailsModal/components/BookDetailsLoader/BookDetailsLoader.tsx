import React from 'react';

import Skeleton from 'components/Skeleton/Skeleton';

import {
  AboutBookContainer,
  Description,
  DetailsContainer,
  SingleInfoContainer
} from '../../Styled';
import {
  SkeletonInfosContainer,
  SkeletonTitleAndAuthorContainer
} from './Styled';

const BookDetailsLoader = (): JSX.Element => (
  <DetailsContainer>
    <Skeleton height="22rem" width="15rem" />
    <AboutBookContainer>
      <SkeletonTitleAndAuthorContainer>
        <Skeleton width="15rem" />

        <Skeleton width="4rem" />
      </SkeletonTitleAndAuthorContainer>

      <Skeleton width="5.25rem" />
      <SkeletonInfosContainer>
        <SingleInfoContainer>
          <Skeleton width="5rem" />
          <Skeleton width="5rem" />
        </SingleInfoContainer>

        <SingleInfoContainer>
          <Skeleton width="5rem" />
          <Skeleton width="5rem" />
        </SingleInfoContainer>

        <SingleInfoContainer>
          <Skeleton width="5rem" />
          <Skeleton width="5rem" />
        </SingleInfoContainer>

        <SingleInfoContainer>
          <Skeleton width="5rem" />
          <Skeleton width="5rem" />
        </SingleInfoContainer>

        <SingleInfoContainer>
          <Skeleton width="5rem" />
          <Skeleton width="5rem" />
        </SingleInfoContainer>

        <SingleInfoContainer>
          <Skeleton width="5rem" />
          <Skeleton width="5rem" />
        </SingleInfoContainer>

        <SingleInfoContainer>
          <Skeleton width="5rem" />
          <Skeleton width="5rem" />
        </SingleInfoContainer>
      </SkeletonInfosContainer>

      <Skeleton width="8rem" />
      <Description component="div">
        <Skeleton width="100%" />
      </Description>
    </AboutBookContainer>
  </DetailsContainer>
);

export default BookDetailsLoader;
