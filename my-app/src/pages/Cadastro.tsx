import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
import { addLogin } from '../store/modules/registerLoginSlice';
import UserPasswordTypes from '../types/RegisterLoginTypes';
import generateID from '../utils/generateID';

const Cadastro: React.FC = () => {
  const dispath = useAppDispatch();

  const [showPassword, setShowPassword] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const [userMessage, setUserMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const [repeatPasswordMessage, setRepeatPasswordMessage] = useState<string>('');

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

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
      const userPasswords: UserPasswordTypes = { userMessage, passwordMessage, id: String(generateID()) };
      dispath(addLogin(userPasswords));
      handleClear();
    } else {
      // alert('As senhas devem ser iguais!');
      // usar dialoger
      setOpen(true);
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

      {/* dialog */}

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Alerta</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">As senhas devem ser idênticas!</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={handleClose} autoFocus>
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      {/* dialog */}
    </>
  );
};

export default Cadastro;
