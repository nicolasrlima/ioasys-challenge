import * as React from 'react';

import LoginBackground from 'assets/login-bg.png';

import { Main } from './Styled';

interface UnauthenticatedLayoutProps {
  children: React.ReactNode;
}

const UnauthenticatedLayout = ({
  children
}: UnauthenticatedLayoutProps): JSX.Element => (
  <Main backgroundImage={LoginBackground}>{children}</Main>
);

export default UnauthenticatedLayout;
