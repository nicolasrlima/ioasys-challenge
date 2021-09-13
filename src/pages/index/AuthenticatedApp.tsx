import * as React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import AuthenticatedLayout from 'components/AuthenticatedLayout/AuthenticatedLayout';
import Home from 'pages/Home/Home';
import { HOME } from 'routes/AuthenticatedRoutes';

const AuthenticatedApp = (): JSX.Element => (
  <AuthenticatedLayout>
    <Switch>
      <Route path={`${HOME}/:page/:bookId?`} component={Home} exact />
      <Route>
        <Redirect to={`${HOME}/1`} push />
      </Route>
    </Switch>
  </AuthenticatedLayout>
);

export default AuthenticatedApp;
