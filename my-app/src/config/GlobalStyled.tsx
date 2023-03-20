import React from 'react';
import { GlobalStyles } from '@mui/material';
import backgroud from '../img/bg_3.jpg';

const GlobalStyled: React.FC = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            padding: '0px',
            margin: '0px',
            background: `url(${backgroud})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'center',
            // display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center'
          },

          a: { textDecoration: 'none'}
        }}
      />
    </>
  );
};

export default GlobalStyled;
