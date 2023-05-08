import {
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectAll } from '../store/modules/registerLoginSlice';
import { login } from '../store/modules/requestLoginSlice';
import RegisterLoginTypes from '../types/RegisterLoginTypes';
import generateID from '../utils/generateID';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const listLoginsRedux = useAppSelector(selectAll);
  const dispath = useAppDispatch();

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = () => {
    setUser('');
    setPassword('');
  };

  const goRegister = () => {
    navigate('/cadastro');
  };

  const checkLogin = () => {
    const logged = listLoginsRedux.find(item => item.userMessage === user && item.passwordMessage === password);
    const logins: RegisterLoginTypes = { userMessage: user, passwordMessage: password, id: String(generateID()) };
    if (logged) {
      dispath(login(logins));
      navigate('/lista-recados');
    } else {
      setOpen(true);
    }
    handleClear();
    //comparar estado local com de user e password com estado global;
  };

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
                  value={user}
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
                    value={password}
                    onChange={event => setPassword(event.target.value)}
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
                <Button fullWidth variant="contained" size="large" onClick={checkLogin}>
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
            <DialogContentText id="alert-dialog-description">Usuário ou senha estão incorretos!</DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose}>Disagree</Button> */}
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

export default Login;
