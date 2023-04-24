import { Button, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useAppDispatch } from '../store/hooks';
import MessageType from '../types/MessageType';
import { addMessage } from '../store/modules/messageSlice';
import generateID from '../utils/generateID';

const InserirRecados: React.FC = () => {
  const dispath = useAppDispatch();

  const [nameMessage, setNameMessage] = useState<string>('');
  const [descriptionMessage, setDescriptionMessage] = useState<string>('');

  const handleClear = () => {
    setNameMessage('');
    setDescriptionMessage('');
  };

  const handleAdd = () => {
    const message: MessageType = { nameMessage, descriptionMessage, id: String(generateID()) };
    if (message.nameMessage === undefined) {
      message.nameMessage = '';
    } else {
      dispath(addMessage(message));
      handleClear();
    }
  };

  return (
    <React.Fragment>
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
                    <Button onClick={handleAdd} variant="contained">
                      Salvar
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

export default InserirRecados;
