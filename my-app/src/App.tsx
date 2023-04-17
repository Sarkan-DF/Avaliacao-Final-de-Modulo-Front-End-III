import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyled from './config/GlobalStyled';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './config/theme/defaultTheme';
import { store } from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyled />
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
