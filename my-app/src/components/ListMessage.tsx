import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MessageType from '../types/MessageType';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { useEffect, useMemo } from 'react';
import { IconButton, ListItemText, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { removeMessage } from '../store/modules/messageSlice';

interface ListMessageProps {
  data: MessageType[];
}
const ListMessage: React.FC<ListMessageProps> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [dataLocal, setDataLocal] = React.useState<MessageType[]>([]);

  useEffect(() => {
    setDataLocal([...data]);
  }, [data]);

  const handleDelete = (itemDelete: MessageType) => {
    dispatch(removeMessage(itemDelete.id));
  };

  const handleEdit = (itemEdit: MessageType) => {
    navigate(`/editar-recados/${itemEdit.id}`);
  };

  const listMemo = useMemo(() => {
    return dataLocal.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <ListItem
            alignItems="flex-start"
            secondaryAction={
              <>
                <IconButton onClick={() => handleEdit(item)} edge="end" aria-label="delete">
                  <EditIcon />
                </IconButton>

                <IconButton onClick={() => handleDelete(item)} edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemAvatar>
              <Avatar>{item.nameMessage[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.nameMessage}
              secondary={
                <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                  {item.descriptionMessage}
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      );
    });
  }, [dataLocal]);

  return (
    <List sx={{ bgcolor: 'background.paper' }}>
      {dataLocal.length ? listMemo : <Typography variant="body1">Nenhum contato cadastrado.</Typography>}
    </List>
  );
};

export default ListMessage;
