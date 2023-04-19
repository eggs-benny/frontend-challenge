import { styled } from '@mui/material';

export const BlueDotContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '5px',
  paddingBottom: '15px'
});

export const BlueDot = styled('div')({
  width: '2px',
  height: '2px',
  borderRadius: '50%',
  backgroundColor: 'dodgerblue',
  marginLeft: '1px'
});