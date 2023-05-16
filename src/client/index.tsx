import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const theme = createTheme();

ReactDOM.render(
    <React.StrictMode>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CacheProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );


