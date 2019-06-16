import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Demo from '@components/Demo';

const App = () => (
  <>
    <Switch>
      <Route path="" component={Demo} />
    </Switch>
  </>
);

export default Demo;


