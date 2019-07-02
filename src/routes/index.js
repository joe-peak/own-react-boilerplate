import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Users from '@pages/Users';
import UsersList from '@pages/Users/List';
import UsersDetail from '@pages/Users/Detail';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/users/list" component={UsersList} />
      <Route exact path="/users/detail" component={UsersDetail} />
      <Route exact path="/users" component={Users} />
      <Redirect to="/users" />
    </Switch>
  </BrowserRouter>
);

export default Root;


