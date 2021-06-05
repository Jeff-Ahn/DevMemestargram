import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Callback from './pages/Callback';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/callback" component={Callback} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
