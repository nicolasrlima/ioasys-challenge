import React from 'react';

import { ReactComponent as IoasysLogoDark } from 'assets/ioasys-logo-dark.svg';

import { LoaderContainer, Spinner } from './Styled';

const AppLoader = (): JSX.Element => (
  <LoaderContainer>
    <IoasysLogoDark />
    <Spinner />
  </LoaderContainer>
);

export default AppLoader;
