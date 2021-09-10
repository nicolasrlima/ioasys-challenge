import React from 'react';

import { useAuth } from 'contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

const UnauthenticatedApp = React.lazy(
  () => import('./pages/index/UnauthenticatedApp')
);

const AuthenticatedApp = React.lazy(
  () => import('./pages/index/AuthenticatedApp')
);

const PageSpinner = () => <span>Loader goes here</span>;

const App = (): JSX.Element => {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <React.Suspense fallback={<PageSpinner />}>
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </React.Suspense>
    </Router>
  );
};

export default App;
