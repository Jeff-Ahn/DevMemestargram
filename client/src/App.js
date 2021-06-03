import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import HomePage from './pages/HomePage';
import { palette } from './lib/styles/palette';
import Callback from './pages/Callback';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    background: ${palette.gray0};
  }
  html {
    box-sizing: border-box;
    * {
      box-sizing: inherit;
    }
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MantineProvider
        theme={{
          fontFamily: 'sans-serif',
          primaryColor: 'teal',
        }}
      >
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/callback" component={Callback} />
        </Switch>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
