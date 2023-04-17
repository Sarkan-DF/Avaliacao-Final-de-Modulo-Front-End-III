import {
  Button,
  Checkbox,
  Container,
  Divider,
  FilledInput,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import GridCenterStyled from '../components/GridCenterStyled';
import PaperStyled from '../components/PaperStyled';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [user, setUser] = useState<string>('');
  const [saveUser, setSaveUser] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [savePassword, setSavePassword] = useState<string>('');

  const navigate = useNavigate();

  const goRegister = () => {
    navigate('/cadastro');
  };

  const saveStado = () => {
    setSaveUser(user);
    setSavePassword(password);
  };

  console.log(saveUser);
  console.log(savePassword);

  return (
    <>
      <Grid container>
        <GridCenterStyled height={'500px'} width={'500px'} item xs={12}>
          <Container>
            <PaperStyled elevation={10}>
              <Grid item>
                <Typography variant="h3">Login</Typography>
                <Divider />
              </Grid>
              <Grid item paddingBottom={'10px'} paddingTop={'10px'}>
                <TextField
                  type="text"
                  fullWidth
                  label={'Usuario'}
                  onChange={event => setUser(event.target.value)}
                ></TextField>
              </Grid>
              <Grid item>
                <FormControl fullWidth sx={{}} variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item textAlign={'initial'}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Manter-me logado" />
              </Grid>
              <Grid item>
                <Button fullWidth variant="contained" size="large" onClick={saveStado}>
                  Logar
                </Button>
              </Grid>
              <Grid item paddingTop={'10px'} textAlign={'center'}>
                <Typography>
                  Ainda não tem cadastro?
                  <Button variant="text" color="primary" onClick={goRegister}>
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

export default Login;
