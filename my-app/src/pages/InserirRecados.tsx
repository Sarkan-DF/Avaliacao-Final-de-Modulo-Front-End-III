import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import MessageType from '../types/MessageType';
import { addMessage } from '../store/modules/messageSlice';
import generateID from '../utils/generateID';
import { useNavigate } from 'react-router-dom';

const InserirRecados: React.FC = () => {
  const dispath = useAppDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  // const loggedUser = useAppSelector(state => state.checkLogin);

  const [nameMessage, setNameMessage] = useState<string>('');
  const [descriptionMessage, setDescriptionMessage] = useState<string>('');

  // useEffect(() => {
  //   if (!loggedUser.user) {
  //     navigate('/');
  //   }
  //   console.log(loggedUser);
  // }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClear = () => {
    setNameMessage('');
    setDescriptionMessage('');
  };

  const handleAdd = () => {
    const message: MessageType = { nameMessage, descriptionMessage, id: String(generateID()) };
    if (message.nameMessage === undefined) {
      message.nameMessage = '';
    } else {
      setOpen(true);
      dispath(addMessage(message));
      handleClear();
    }
  };

  return (
    <>
      <Grid container>
        <ResponsiveAppBar />
        <Grid item xs={12} paddingTop={'50px'}>
          <Container>
            <Paper style={{ borderRadius: '20px', paddingTop: '10px', paddingBottom: '10px' }} elevation={10}>
              <Container>
                <Typography variant="h3">Inserir Recado</Typography>
                <Divider />
                <Grid container paddingTop={'10px'}>
                  <Grid item padding={'2px'} xs={12} sm={4}>
                    <TextField
                      value={nameMessage}
                      onChange={event => setNameMessage(event.target.value)}
                      fullWidth
                      label={'Recado'}
                    ></TextField>
                  </Grid>
                  <Grid item padding={'2px'} xs={12} sm={7}>
                    <TextField
                      value={descriptionMessage}
                      onChange={event => setDescriptionMessage(event.target.value)}
                      fullWidth
                      label={'Descrição do Recado'}
                    ></TextField>
                  </Grid>
                  <Grid item padding={'2px'} xs={12} sm={1}>
                    <Button style={{ height: '100%' }} onClick={handleAdd} variant="contained">
                      Salvar
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button fullWidth variant="contained">
                      + Inserir novo Recado
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Paper>
          </Container>
        </Grid>
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
            <DialogContentText id="alert-dialog-description">Recado inserido com exito!</DialogContentText>
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

export default InserirRecados;
