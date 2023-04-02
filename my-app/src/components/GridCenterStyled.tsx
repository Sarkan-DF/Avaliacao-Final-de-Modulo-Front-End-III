import { Grid, styled } from '@mui/material';

const GridCenterStyled = styled(Grid)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center'
});

export default GridCenterStyled;
