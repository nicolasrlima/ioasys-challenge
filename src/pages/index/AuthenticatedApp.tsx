import * as React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import AuthenticatedLayout from 'components/AuthenticatedLayout/AuthenticatedLayout';
import Home from 'pages/Home/Home';
import { HOME } from 'routes/AuthenticatedRoutes';
import { LOGIN } from 'routes/UnauthenticatedRoutes';

const AuthenticatedApp = (): JSX.Element => (
  <AuthenticatedLayout>
    <Switch>
      <Route path={HOME} component={Home} exact />
      <Route
        render={({ location: { pathname } }) =>
          pathname === LOGIN ? <Redirect to={HOME} push /> : <Home />
        }
      />
    </Switch>
  </AuthenticatedLayout>
);

export default AuthenticatedApp;
