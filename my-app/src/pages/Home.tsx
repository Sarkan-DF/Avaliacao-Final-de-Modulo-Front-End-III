import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import GridItemCenter from '../components/GridCenterStyled';

const Home: React.FC = () => {
  return (
    <>
      <Grid container>
        <GridItemCenter item xs={12}>
          <Container>
            <Typography variant="h1">Home</Typography>
            <Typography variant="h1">Home</Typography>
          </Container>
        </GridItemCenter>
      </Grid>
    </>
  );
};

export default Home;
