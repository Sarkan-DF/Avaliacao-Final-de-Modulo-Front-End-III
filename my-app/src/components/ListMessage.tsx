import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
// import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import { useAppSelector } from '../store/hooks';
// import { selectAll } from '../store/modules/messageSlice';

export default function ListMessage() {
  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        {/* <ListItemText
          primary="Descrição Recado!"
          secondary={
            <React.Fragment>
              <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                Detalhamento Recado!
              </Typography>
            </React.Fragment>
          }
        /> */}
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
