import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Callback from './pages/Callback';
import MemeDetailPage from './pages/MemeDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/callback" component={Callback} />
        <Route path="/meme/:id" component={MemeDetailPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
