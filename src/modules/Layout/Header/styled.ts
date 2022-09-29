import { styled } from '@mui/material/styles';

export const Header = styled('header')(({ theme }) => ({
  position: 'relative',
  minHeight: '60px',
  borderBottom: `1px solid ${theme.palette.info.main}`,
  padding: '10px'
}));

export const BrfIcon = styled('img')({
  height: '38px'
});
