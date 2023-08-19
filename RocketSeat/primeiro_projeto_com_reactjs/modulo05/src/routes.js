import { BrowserRouter, Switch, Route } from 'react-router-dom';

import React from 'react';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Precisa colocar o exact para ele carregar a rota
        quando ela for exatamente igual ao que está no path */}
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repo" exact component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
