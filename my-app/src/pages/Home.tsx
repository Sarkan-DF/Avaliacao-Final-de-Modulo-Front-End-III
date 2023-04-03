import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PaperStyled from '../components/PaperStyled';
import GridCenterStyled from '../components/GridCenterStyled';

const Home: React.FC = () => {
  return (
    <>
      <Grid container>
        <GridCenterStyled height={''} width={'1000px'} item xs={12}>
          <Container>
            <PaperStyled>
              <Typography variant="h4">Bem Vindo ao Lista de Recados!</Typography>
            </PaperStyled>
          </Container>
        </GridCenterStyled>
      </Grid>
    </>
  );
};

export default Home;
