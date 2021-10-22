import React from 'react';

import jwt from 'jsonwebtoken';

import { ReactComponent as IoasysLogoDark } from 'assets/ioasys-logo-dark.svg';
import { ReactComponent as LogoutIcon } from 'assets/logout-icon.svg';
import Typography from 'components/Typography/Typography';
import { Select } from 'components';
import { useAuth } from 'contexts/AuthContext';
import { Language, useIntl } from 'contexts/Intl';
import useTranslate from 'hooks/useTranslate';
import { POSSIBLE_LANGUAGES } from 'utils/constants';

import {
  HeaderContainer,
  HeaderLogoContainer,
  LogoutIconContainer,
  UserActionsContainer,
  UserName
} from './Styled';

const Header = (): JSX.Element => {
  const translate = useTranslate();
  const { language, setLanguage } = useIntl();
  const { userData } = useAuth();

  const userDataDecoded = jwt.decode(userData);
  const { logout } = useAuth();

  const possibleLanguagesWithLabel = POSSIBLE_LANGUAGES.map(
    (possibleLanguage: string): { label: string; value: string } => ({
      label: translate(`languages.${possibleLanguage}`),
      value: possibleLanguage
    })
  );

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <IoasysLogoDark />
        <Typography component="h1" color="dark" variant="titleThin">
          Books
        </Typography>
      </HeaderLogoContainer>
      <UserActionsContainer>
        <Select
          onChange={(value) => setLanguage(value as Language)}
          selectedValue={language}
          options={possibleLanguagesWithLabel}
        />
        <UserName component="span" variant="body">
          {translate('labels.welcome')}, <strong>{userDataDecoded.name}</strong>
        </UserName>
        <LogoutIconContainer>
          <LogoutIcon onClick={logout} />
        </LogoutIconContainer>
      </UserActionsContainer>
    </HeaderContainer>
  );
};

export default Header;
