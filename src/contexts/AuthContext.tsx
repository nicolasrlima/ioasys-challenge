/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import jwt from 'jsonwebtoken';

type User = {
  id: string;
  name: string;
  email: string;
  gender: 'M' | 'F';
  birthdate: string;
};

type AuthParams = {
  refreshToken: string;
  token: string;
  user: User;
};

type AuthContextData = {
  isAuthenticated: boolean;
  authenticate: ({ refreshToken, token, user }: AuthParams) => void;
  logout: () => void;
  userData;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<AuthContextData>({
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
  userData: ''
});

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }: ProviderProps): JSX.Element => {
  const localToken = localStorage.getItem('token');
  const localUserData = localStorage.getItem('data');

  const [isAuthenticated, setIsAuthenticated] = React.useState(
    () => Boolean(localToken?.length) ?? false
  );

  const [userData, setUserData] = React.useState<string>(
    () => localUserData || ''
  );

  const authenticate = ({ refreshToken, token, user }: AuthParams) => {
    const userToken = jwt.sign(user, 'secret');
    setIsAuthenticated(true);
    setUserData(userToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('token', token);
    localStorage.setItem('data', userToken);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('data');
  };

  return (
    <AuthContext.Provider
      value={{ authenticate, isAuthenticated, logout, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be within its context');
  }
  return context;
};
