import { Grid, styled } from '@mui/material';

interface GridCenterStyledProps {
  width: string;
  height: string;
}

const GridCenterStyled = styled(Grid)<GridCenterStyledProps>(({ width, height }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width,
  height,
  // width: '500px',
  // height: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center'
}));

export default GridCenterStyled;
