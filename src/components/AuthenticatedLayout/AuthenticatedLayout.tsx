import * as React from 'react';

interface AuthenticatedLayoutProps {
  children: React.ReactNode;
}

const AuthenticatedLayout = ({
  children
}: AuthenticatedLayoutProps): JSX.Element => <div>{children}</div>;

export default AuthenticatedLayout;
