import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Main, Repositories } from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/respository" component={Repositories} />
      </Switch>
    </BrowserRouter>
  );
}
