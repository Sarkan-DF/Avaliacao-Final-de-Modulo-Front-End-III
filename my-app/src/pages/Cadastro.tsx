import { Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import GridCenterStyled from '../components/GridCenterStyled';
import PaperStyled from '../components/PaperStyled';

const Cadastro: React.FC = () => {
  return (
    <>
      <Grid container>
        <GridCenterStyled item xs={12}>
          <Container>
            <PaperStyled elevation={10}>
              <Grid item textAlign={'center'}>
                <Typography variant="h3">Cadastro</Typography>
                <Divider />
              </Grid>
              <Grid item paddingBottom={'10px'} paddingTop={'10px'}>
                <TextField fullWidth label={'Usuario'}></TextField>
              </Grid>
              <Grid item>
                <TextField fullWidth label={'Senha'}></TextField>
              </Grid>
              <Grid item paddingBottom={'10px'} paddingTop={'10px'}>
                <TextField fullWidth label={'Repetir Senha'}></TextField>{' '}
              </Grid>
              <Grid item>
                <Button fullWidth variant="contained" size="large">
                  Cadastrar
                </Button>
              </Grid>
            </PaperStyled>
          </Container>
        </GridCenterStyled>
      </Grid>
    </>
  );
};

export default Cadastro;
