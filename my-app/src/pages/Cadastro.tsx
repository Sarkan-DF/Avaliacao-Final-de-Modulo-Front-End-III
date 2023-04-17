import {
  Button,
  Container,
  Divider,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import GridCenterStyled from '../components/GridCenterStyled';
import PaperStyled from '../components/PaperStyled';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Cadastro: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [user, setUser] = useState<string>('');
  const [saveUser, setSaveUser] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [savePassword, setSavePassword] = useState<string>('');

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
              <Grid item paddingBottom={'10px'} paddingTop={'10px'}>
                <FormControl fullWidth sx={{}} variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">Repetir Password</InputLabel>
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
              <Grid item>
                <Button fullWidth variant="contained" size="large">
                  Cadastrar
                </Button>
              </Grid>
              <Grid item>
                <Typography>
                  Já tem cadastro!
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
