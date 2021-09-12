import React from 'react';

import jwt from 'jsonwebtoken';

import { ReactComponent as IoasysLogoDark } from 'assets/ioasys-logo-dark.svg';
import { ReactComponent as LogoutIcon } from 'assets/logout-icon.svg';
import Typography from 'components/Typography/Typography';
import { useAuth } from 'contexts/AuthContext';

import {
  HeaderContainer,
  HeaderLogoContainer,
  LogoutIconContainer,
  UserActionsContainer,
  UserName
} from './Styled';

const Header = (): JSX.Element => {
  const userData = jwt.decode(localStorage.getItem('data'));
  const { logout } = useAuth();

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <IoasysLogoDark />
        <Typography component="h1" color="dark" variant="titleThin">
          Books
        </Typography>
      </HeaderLogoContainer>
      <UserActionsContainer>
        <UserName component="span" variant="body">
          Bem vindo, <strong>{userData.name}</strong>
        </UserName>
        <LogoutIconContainer>
          <LogoutIcon onClick={logout} />
        </LogoutIconContainer>
      </UserActionsContainer>
    </HeaderContainer>
  );
};

export default Header;
