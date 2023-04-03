import { Button, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ListMessage from '../components/ListMessage';

const Recados: React.FC = () => {
  return (
    <React.Fragment>
      <Grid container>
        <ResponsiveAppBar />
        <Grid item xs={12} paddingTop={'50px'}>
          <Container>
            <Paper style={{ borderRadius: '20px', paddingTop: '10px', paddingBottom: '10px' }} elevation={10}>
              <Container>
                <Typography variant="h3">Recados</Typography>
                <Divider />
                <Grid container paddingTop={'10px'}>
                  <Grid item padding={'2px'} xs={12} sm={4}>
                    <TextField fullWidth label={'Recado'}></TextField>
                  </Grid>
                  <Grid item padding={'2px'} xs={12} sm={7}>
                    <TextField fullWidth label={'Descrição do Recado'}></TextField>
                  </Grid>
                  <Grid item padding={'2px'} xs={12} sm={1}>
                    <Button variant="contained">Salvar</Button>
                  </Grid>
                </Grid>

                <ListMessage />
              </Container>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Recados;
