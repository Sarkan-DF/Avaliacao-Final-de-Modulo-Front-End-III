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
  TextField,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import GridCenterStyled from '../components/GridCenterStyled';
import PaperStyled from '../components/PaperStyled';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAppDispatch } from '../store/hooks';
import { addUserPassword } from '../store/modules/userPasswordSlice';
import UserPasswordTypes from '../types/UserPasswordTypes';

const Cadastro: React.FC = () => {
  const dispath = useAppDispatch();

  const [showPassword, setShowPassword] = React.useState(false);

  const [userMessage, setUserMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const [repeatPasswordMessage, setRepeatPasswordMessage] = useState<string>('');

  const navigate = useNavigate();

  const handleClear = () => {
    setUserMessage('');
    setPasswordMessage('');
    setRepeatPasswordMessage('');
  };

  const goLogin = () => {
    navigate('/login');
  };

  const saveUserPassword = () => {
    if (passwordMessage === repeatPasswordMessage) {
      const userPasswords: UserPasswordTypes = { userMessage, passwordMessage };
      dispath(addUserPassword(userPasswords));
      handleClear();
    } else {
      alert('A senhas devem ser iguais!');
    }
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
                <TextField
                  value={userMessage}
                  type="text"
                  onChange={event => setUserMessage(event.target.value)}
                  fullWidth
                  label={'Usuario'}
                ></TextField>
              </Grid>
              <Grid item>
                <FormControl fullWidth sx={{}} variant="filled">
                  <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                  <FilledInput
                    value={passwordMessage}
                    onChange={event => setPasswordMessage(event.target.value)}
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
                    value={repeatPasswordMessage}
                    onChange={event => setRepeatPasswordMessage(event.target.value)}
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
                <Button fullWidth variant="contained" size="large" onClick={saveUserPassword}>
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
