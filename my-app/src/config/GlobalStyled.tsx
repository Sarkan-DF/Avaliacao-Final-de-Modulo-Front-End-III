import React from 'react';
import { GlobalStyles } from '@mui/material';

const GlobalStyled: React.FC = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            padding: '0px',
            margin: '0px',
          },

          a: { textDecoration: 'none', color: 'black' }
        }}
      />
    </>
  );
};

export default GlobalStyled;
