import React from 'react';

import { useAuth } from 'contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

import AppLoader from 'components/AppLoader/AppLoader';

const UnauthenticatedApp = React.lazy(
  () => import('./pages/index/UnauthenticatedApp')
);

const AuthenticatedApp = React.lazy(
  () => import('./pages/index/AuthenticatedApp')
);

const App = (): JSX.Element => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <React.Suspense fallback={<AppLoader />}>
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense>
    </Router>
  );
};

export default App;
