import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Slider,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';

const Login: React.FC = () => {
  return (
    <>
      <Grid container>
        <Grid item>
          <Container
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '500px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center'
              // textAlign: 'center'
            }}
          >
            <Paper style={{ padding: '50px', borderRadius: '20px' }} sx={{ backgroundColor: '#fffcd9' }} elevation={10}>
              <Grid item textAlign={'center'}>
                <Typography variant="h3">Login</Typography>
                <hr />
              </Grid>
              <Grid item paddingBottom={'10px'}>
                <TextField label={'Usuario'}></TextField>
              </Grid>
              <Grid item>
                <TextField label={'Senha'}></TextField>
              </Grid>
              <Grid item>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Manter-me logado" />
              </Grid>
              <Grid item>
                <Button variant="contained" size="large" fullWidth>
                  Logar
                </Button>
              </Grid>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
