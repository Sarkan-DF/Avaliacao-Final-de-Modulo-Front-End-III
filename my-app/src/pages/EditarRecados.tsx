import { Button, CircularProgress, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { selectById, updateMessage } from '../store/modules/messageSlice';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Height, Style } from '@mui/icons-material';

const EditarRecados: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const messageRedux = useAppSelector(state => selectById(state, id || ''));

  const [nameMessage, setNameMessage] = useState<string>('');
  const [nameMessageError, setNameMessageError] = useState<boolean>(false);

  const [descriptionMessage, setDescriptionMessage] = useState<string>('');
  const [descriptionMessageError, setDescriptionMessageError] = useState<boolean>(false);

  useEffect(() => {
    if (messageRedux) {
      setNameMessage(messageRedux.nameMessage);
      setDescriptionMessage(messageRedux.descriptionMessage);
    } else {
      setTimeout(() => {
        navigate('/lista-recados');
      }, 4000);
    }
  }, [messageRedux]);

  useEffect(() => {
    if (nameMessage.length) {
      if (nameMessage.length < 3) {
        setNameMessageError(true);
      } else {
        setNameMessageError(false);
      }
    } else {
      setNameMessageError(false);
    }
  }, [nameMessage]);

  useEffect(() => {
    if (descriptionMessage.length) {
      if (descriptionMessage.length < 3) {
        setDescriptionMessageError(true);
      } else {
        setDescriptionMessageError(false);
      }
    } else {
      setDescriptionMessageError(false);
    }
  }, [descriptionMessage]);

  const handleClear = () => {
    setNameMessage('');
    setDescriptionMessage('');
  };

  const handleEdit = () => {
    // const message: MessageType = { nameMessage, descriptionMessage };

    if (id) {
      dispatch(updateMessage({ id, changes: { nameMessage, descriptionMessage } }));
      navigate('/lista-recados');
    }
  };

  if (!messageRedux) {
    return (
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid container>
        <ResponsiveAppBar />
        <Grid item xs={12} paddingTop={'50px'}>
          <Container>
            <Paper style={{ borderRadius: '20px', paddingTop: '10px', paddingBottom: '10px' }} elevation={10}>
              <Container>
                <Typography variant="h3">Editar Recado</Typography>
                <Divider />
                <Grid container paddingTop={'10px'}>
                  <Grid item padding={'2px'} xs={12} sm={4}>
                    <TextField
                      error={nameMessageError}
                      helperText={nameMessageError ? 'Digite um nome de recado válido, no mínimo 3 caracteres' : ''}
                      value={nameMessage}
                      onChange={event => setNameMessage(event.target.value)}
                      fullWidth
                      id="nameMessage"
                      label={'Recado'}
                    ></TextField>
                  </Grid>
                  <Grid item padding={'2px'} xs={12} sm={6}>
                    <TextField
                      error={descriptionMessageError}
                      helperText={
                        descriptionMessageError ? 'Digite uma Descrição de recado válido, no mínimo 3 caracteres' : ''
                      }
                      value={descriptionMessage}
                      onChange={event => setDescriptionMessage(event.target.value)}
                      fullWidth
                      label={'Descrição do Recado'}
                    ></TextField>
                  </Grid>
                  <Grid item padding={'2px'} xs={12} sm={1}>
                    <Button style={{ height: '100%' }} onClick={handleEdit} variant="contained">
                      Salvar
                    </Button>
                  </Grid>
                  <Grid item padding={'2px'} xs={12} sm={1}>
                    <Button style={{ height: '100%' }} onClick={handleClear} variant="contained">
                      Limpar
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default EditarRecados;
