import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main, Repositories } from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/respository" component={Repositories} />
      </Switch>
    </BrowserRouter>
  );
}
