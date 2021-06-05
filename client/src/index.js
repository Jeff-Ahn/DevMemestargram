import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createGlobalStyle } from 'styled-components';
import { MantineProvider } from '@mantine/core';
import App from './App';
import rootReducer from './reducers';
import { palette } from './lib/styles/palette';

const store = configureStore({
  reducer: rootReducer,
});

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

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          theme={{
            fontFamily: 'sans-serif',
            primaryColor: 'teal',
          }}
        >
          <App />
        </MantineProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
