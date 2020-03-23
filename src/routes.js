import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main, Restaurants } from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/restaurants/" exact component={Restaurants} />
      </Switch>
    </BrowserRouter>
  );
}
