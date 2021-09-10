import React from 'react';

import UnauthenticatedLayout from 'components/UnauthenticatedLayout/UnauthenticatedLayout';
import Login from 'pages/Login/Login';
import { Redirect, Switch, Route } from 'react-router-dom';
import { LOGIN } from 'routes/UnauthenticatedRoutes';

const UnauthenticatedApp = (): JSX.Element => (
  <UnauthenticatedLayout>
    <Switch>
      <Route path={LOGIN} component={Login} />
      <Route>
        <Redirect to={LOGIN} />
      </Route>
    </Switch>
  </UnauthenticatedLayout>
);

export default UnauthenticatedApp;
