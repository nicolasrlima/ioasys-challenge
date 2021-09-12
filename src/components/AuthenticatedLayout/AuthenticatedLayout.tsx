import * as React from 'react';

import Header from 'components/Header/Header';
import { Main } from './Styled';

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

const AuthenticatedLayout = ({
  children
}: AuthenticatedLayoutProps): JSX.Element => (
  <Main>
    <Header />
    {children}
  </Main>
);

export default AuthenticatedLayout;
