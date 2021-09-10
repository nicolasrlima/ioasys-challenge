/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';

type AuthParams = {
  token: string;
};

type AuthContextData = {
  isAuthenticated: boolean;
  authenticate: ({ token }: AuthParams) => void;
  logout: () => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<AuthContextData>({
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {}
});

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }: ProviderProps): JSX.Element => {
  const localToken = localStorage.getItem('token');

  const [isAuthenticated, setIsAuthenticated] = React.useState(
    () => Boolean(localToken?.length) ?? false
  );

  const authenticate = ({ token }: AuthParams) => {
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ authenticate, isAuthenticated, logout }}>
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
