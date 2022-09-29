import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';

export const Button = styled(MuiButton)(({ theme }) => ({
  position: 'relative',
  color: theme.palette.primary.main,
  background: theme.palette.background.paper,
  borderRadius: '20px'
}));
