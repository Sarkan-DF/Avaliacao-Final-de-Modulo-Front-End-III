import {
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  // Paper,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import GridCenterStyled from '../components/GridCenterStyled';
import PaperStyled from '../components/PaperStyled';

const Login: React.FC = () => {
  return (
    <>
      <Grid container>
        <GridCenterStyled item xs={12}>
          <Container>
            <PaperStyled elevation={10}>
              <Grid item textAlign={'center'}>
                <Typography variant="h3">Login</Typography>
                <Divider />
              </Grid>
              <Grid item paddingBottom={'10px'} paddingTop={'10px'}>
                <TextField fullWidth label={'Usuario'}></TextField>
              </Grid>
              <Grid item>
                <TextField fullWidth label={'Senha'}></TextField>
              </Grid>
              <Grid item>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Manter-me logado" />
              </Grid>
              <Grid item>
                <Button fullWidth variant="contained" size="large">
                  Logar
                </Button>
              </Grid>
              <Grid item paddingTop={'10px'} textAlign={'center'}>
                <Typography>Ainda não tem cadastro? Clique aqui!</Typography>
              </Grid>
            </PaperStyled>
          </Container>
        </GridCenterStyled>
      </Grid>
    </>
  );
};

export default Login;
