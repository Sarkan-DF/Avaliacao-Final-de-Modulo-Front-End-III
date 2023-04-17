import { Button, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ListMessage from '../components/ListMessage';

const ListaRecados: React.FC = () => {
  return (
    <React.Fragment>
      <Grid container>
        <ResponsiveAppBar />
        <Grid item xs={12} paddingTop={'50px'}>
          <Container>
            <Paper style={{ borderRadius: '20px', paddingTop: '10px', paddingBottom: '10px' }} elevation={10}>
              <Container>
                <Typography variant="h3">Lista Recados</Typography>
                <Divider />

                <ListMessage />

                <Grid item xs={12}>
                  <Button fullWidth variant="contained">
                    + Inserir novo Recado
                  </Button>
                </Grid>
              </Container>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ListaRecados;
