import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './reducers';
import App from 'components/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './styles/index.scss';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

const theme = createTheme({
  palette: {
    primary: {
      main: '#163456',
    },
    secondary: {
      main: '#f8fafb',
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);