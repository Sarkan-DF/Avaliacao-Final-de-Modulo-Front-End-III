import React from 'react';
import GlobalStyled from './config/GlobalStyled';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './config/theme/defaultTheme';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyled />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
