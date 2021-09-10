import * as React from 'react';

interface UnauthenticatedLayoutProps {
  children: React.ReactNode;
}

const UnauthenticatedLayout = ({
  children
}: UnauthenticatedLayoutProps): JSX.Element => <main>{children}</main>;

export default UnauthenticatedLayout;
