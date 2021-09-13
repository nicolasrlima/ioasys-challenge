import React from 'react';

import { useAuth } from 'contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

import AppLoader from 'components/AppLoader/AppLoader';
import api from 'services/api';
import axios from 'axios';

const UnauthenticatedApp = React.lazy(
  () => import('./pages/index/UnauthenticatedApp')
);

const AuthenticatedApp = React.lazy(
  () => import('./pages/index/AuthenticatedApp')
);

const App = (): JSX.Element => {
  const { isAuthenticated, logout } = useAuth();

  api.interceptors.response.use(
    (config) => config,
    async (error) => {
      const originalRequest = error.config;
      const { status } = error.response;
      if (status === 401) {
        logout();
      }
      if (status === 403 && !originalRequest.retry) {
        originalRequest.retry = true;
        const newAuthorizationToken = await api.post('/auth/refresh-token', {
          refreshToken: localStorage.getItem('refreshToken')
        });
        axios.defaults.headers.common.authorization = `Bearer ${newAuthorizationToken}`;
        return api(originalRequest);
      }
      return Promise.reject(error);
    }
  );

  return (
    <Router>
      <React.Suspense fallback={<AppLoader />}>
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense>
    </Router>
  );
};

export default App;
