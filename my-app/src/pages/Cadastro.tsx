import { Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import GridCenterStyled from '../components/GridCenterStyled';
import PaperStyled from '../components/PaperStyled';
import { useNavigate } from 'react-router-dom';

const Cadastro: React.FC = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <Grid container>
        <GridCenterStyled height={'500px'} width={'500px'} item xs={12}>
          <Container>
            <PaperStyled elevation={10}>
              <Grid item>
                <Typography variant="h3">Cadastro</Typography>
                <Divider />
              </Grid>
              <Grid item paddingBottom={'10px'} paddingTop={'10px'}>
                <TextField type="text" fullWidth label={'Usuario'}></TextField>
              </Grid>
              <Grid item>
                <TextField type="password" fullWidth label={'Senha'}></TextField>
              </Grid>
              <Grid item paddingBottom={'10px'} paddingTop={'10px'}>
                <TextField type="password" fullWidth label={'Repetir Senha'}></TextField>{' '}
              </Grid>
              <Grid item>
                <Button fullWidth variant="contained" size="large">
                  Cadastrar
                </Button>
              </Grid>
              <Grid item>
                <Typography>
                  Já tem cadastra!
                  <Button variant="text" color="primary" onClick={goLogin}>
                    Clique aqui!
                  </Button>
                </Typography>
              </Grid>
            </PaperStyled>
          </Container>
        </GridCenterStyled>
      </Grid>
    </>
  );
};

export default Cadastro;
