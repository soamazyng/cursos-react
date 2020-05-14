import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Dashboard from '../pages/Dashboard/Dashboard';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/dashboard" exact isPrivate component={Dashboard} />
  </Switch>
);

export default Routes;
